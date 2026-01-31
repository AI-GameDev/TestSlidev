---
created: 2026-01-30
tags:
  - 05_WordPress
  - ComfyUI
focus_keyword:
  - ComfyUI 이미지 자동화
  - ComfyUI n8n
  - ComfyUI API 자동화
  - 이미지 생성 자동화
  - ComfyUI 원격 실행
seo_title: ComfyUI 이미지 자동화 완벽 가이드 - n8n으로 무인 대량 생성 (2026)
meta_description: ComfyUI와 n8n으로 매일 자동 이미지 생성하는 방법. RTX3090 활용, WOL로 PC 원격 부팅, SSH 원격 실행까지 완전 자동화 시스템 구축 과정을 단계별로 설명합니다.
url: comfyui-image-automation-n8n-guide
---

# ComfyUI 이미지 자동화 완벽 가이드 - n8n으로 무인 대량 생성하기

**ComfyUI 이미지 자동화**를 구축하면 매일 새벽 무인으로 대량 이미지를 생성할 수 있습니다. 이 글에서는 RTX3090과 n8n을 활용해 PC 자동 부팅부터 이미지 생성, 자동 종료까지 **완전 자동화 시스템**을 구축하는 방법을 단계별로 설명합니다.

---

## ComfyUI란?

ComfyUI는 노드 기반의 오픈소스 이미지 생성 도구로, Stable Diffusion 모델을 시각적 워크플로우로 제어할 수 있습니다. REST API를 제공하므로 **ComfyUI API 자동화**를 통해 외부에서 프롬프트를 전달하고 결과 이미지를 받아오는 것이 가능합니다.

---

## 📌 왜 로컬 GPU로 이미지 생성 자동화를 하는가?

클라우드 기반 이미지 생성 서비스는 비용이 부담됩니다. 개인 PC에 RTX3090이 있다면 이를 활용해 비용 없이 **이미지 생성 자동화**를 구현할 수 있습니다.

**이 방식의 장점:**

- **비용 절감**: 클라우드 대비 추가 비용 없음
- **성능**: RTX3090 GPU 활용
- **무인 운영**: 새벽 시간에 자동 실행, 사람 개입 불필요
- **효율적 리소스 관리**: 필요할 때만 PC를 켜서 전기료 절감
- **확장성**: 생성할 이미지 종류나 양을 DB에서 쉽게 조절

### 목표 워크플로우

매일 새벽 → PC 자동 켜기 → ComfyUI 실행 → 프롬프트 데이터 로드 → 대량 이미지 생성 → 결과 저장 → PC 자동 종료

![ComfyUI 자동화 워크플로우](Create_a_horizontal_202601281157.jpeg)

---

## 🛠️ ComfyUI 자동화를 위한 시스템 구성

**ComfyUI n8n** 연동을 위해 두 대의 PC를 역할에 따라 분리하여 효율적으로 운영합니다.

| PC | 역할 | 특징 |
|---|---|---|
| **저전력 PC** | 스케줄링, 데이터 관리 | 24시간 상시 가동 |
| **게이밍 PC** | GPU 연산 (RTX3090) | 작업 시에만 가동 |

![시스템 구성도](Create_a_vertical_202601281152.jpeg)

---

## 🔧 ComfyUI 원격 실행을 위한 환경 구축

### 1. WOL (Wake-on-LAN) 설정

어디서나 PC를 켤 수 있도록 WOL을 설정합니다.

**Docker로 WOL API 서버 구축**

`rix1337/docker-wol-api` 이미지를 사용하면 HTTP API로 간편하게 WOL을 실행할 수 있습니다.

```
n8n → HTTP Request → WOL API → Magic Packet → 게이밍 PC 부팅
```

**Tasker로 스마트폰 버튼 만들기**

![Tasker WOL 버튼](CleanShot%202026-01-14%20at%2011.51.38@2x.png)

스마트폰에서 버튼 하나로 언제 어디서나 집 PC를 켤 수 있게 되었습니다!

---

### 2. VPN & SSH 설정

외부에서 안전하게 PC에 접속하기 위한 설정입니다.

> **참고:** VPN은 외부에서 접속할 때만 필요합니다. 자동화 워크플로우는 내부 네트워크에서 동작하므로 VPN 없이도 구현 가능합니다. 저는 외출 중 스마트폰으로 PC를 제어하기 위해 추가로 설정했습니다.

| 구성 요소      | 도구                | 목적              |
| ---------- | ----------------- | --------------- |
| **VPN 서버** | 시놀로지 VPN          | 외부에서 내부 네트워크 접속 |
| **SSH 서버** | OpenSSH (Windows) | 원격 명령 실행        |
![VPN SSH 구성](Pasted%20image%2020260114091233.png)

**설정 단계:**
1. 시놀로지 VPN 서버 설정
2. Windows에 OpenSSH 서버 설치
3. 방화벽 규칙 추가
4. VPN 연결 후 SSH 접속 테스트

```bash
# VPN 연결 후 SSH 접속
ssh username@192.168.x.x
```

---

### 3. NocoDB 데이터베이스 구성

**NocoDB란?**

Airtable과 유사한 오픈소스 노코드 데이터베이스로, 스프레드시트 UI와 관계형 기능을 제공하며 셀프호스팅이 가능합니다.

**테이블 구조:**

| 테이블 | 용도 | 주요 필드 |
|--------|------|----------|
| **참고 데이터** | 이미지 생성 시 참고할 정보 | 날짜, 설명 |
| **생성 결과** | 생성된 이미지와 메타데이터 | 이미지, 프롬프트, 키워드 등 |

![NocoDB 참고 데이터](CleanShot%202026-01-28%20at%2012.23.25@2x.png)
![NocoDB 생성 결과](CleanShot%202026-01-28%20at%2012.27.53@2x.png)

---

## 🎨 이미지 생성 자동화를 위한 ComfyUI 설치

### 설치 방법

두 가지 옵션을 테스트한 결과, **Stability Matrix**를 선택했습니다.

| 방법       | 도구               | 특징                         |
| -------- | ---------------- | -------------------------- |
| **옵션 1** | Stability Matrix | 패키지 매니저, 모델 자동 관리, 초보자 친화적 |
| **옵션 2** | ComfyUI 직접 설치    | 포터블, 가볍고 직접 제어, 커스터마이징 자유  |

### 이미지 생성 모델: Z Image Turbo

**Z Image Turbo를 선택한 이유:**

- ⚡ **빠른 속도**: 1024×1024 기준 RTX3090에서 5초 이내
- 📦 **적은 메모리**: 6GB 미만 사용
- 🎨 **준수한 품질**: 블로그 썸네일, SNS 이미지 용도로 충분

![Z Image Turbo 모델](Pasted%20image%2020260114091040.png)

---

### SSH를 통한 ComfyUI 원격 실행 (핵심!)

**ComfyUI 원격 실행**에서 가장 어려웠던 부분입니다. SSH 연결이 끊겨도 ComfyUI가 계속 실행되게 하는 것이 관건이었습니다.

**문제:** SSH 세션 종료 시 ComfyUI도 함께 종료됨

**시행착오:**

| 시도 | 방법 | 결과 |
|------|------|------|
| 1차 | `start /B` (배치파일) | ❌ PowerShell에서 인식 안 됨 |
| 2차 | `Start-Process` | ❌ SSH 종료 시 함께 종료 |
| 3차 | Task Scheduler | ⚠️ 작동하지만 설정 복잡 |
| **최종** | **WMI 방식** | ✅ 완벽하게 독립 실행 |

**해결책: WMI (Windows Management Instrumentation) 방식**

```powershell
$process = Get-Process python -ErrorAction SilentlyContinue | Where-Object {$_.Path -like "*ComfyUI*"}
if (-not $process) {
    $cmd = 'F:\StabilityMatrix\Data\Packages\ComfyUI\venv\Scripts\python.exe F:\StabilityMatrix\Data\Packages\ComfyUI\main.py --listen 0.0.0.0 --port 8188'
    Invoke-WmiMethod -Class Win32_Process -Name Create -ArgumentList $cmd | Out-Null
    Write-Output 'ComfyUI started'
} else {
    Write-Output 'ComfyUI already running'
}
```

**핵심 포인트:**
- `Invoke-WmiMethod`로 시스템 레벨에서 프로세스 생성
- SSH 세션과 완전히 독립적으로 실행
- 중복 실행 방지 로직 포함

---

## 🐍 ComfyUI API 자동화 테스트 (Python)

**ComfyUI API 자동화**가 제대로 작동하는지 확인하기 위해 Python으로 먼저 테스트했습니다.

**구현한 기능:**
- **단일 이미지 생성**: 하나의 프롬프트로 이미지 1장 생성
- **배치 이미지 생성**: 여러 프롬프트로 이미지 대량 생성

![Python API 테스트](Pasted%20image%2020260114091359.png)

단일 및 배치 이미지 생성 모두 정상 작동을 확인한 후 n8n으로 넘어갔습니다.

---

## 🔄 n8n으로 ComfyUI 자동화 워크플로우 구성

**ComfyUI n8n** 연동으로 전체 자동화 파이프라인을 구성했습니다.

<!-- 내부 링크: n8n 관련 다른 글이 있다면 여기에 연결 -->

![n8n 워크플로우](CleanShot%202026-01-28%20at%2016.07.53@2x.png)

**워크플로우 흐름:**
1. 스케줄 트리거 (매일 새벽)
2. NocoDB에서 프롬프트 데이터 로드
3. WOL로 게이밍 PC 부팅
4. SSH로 ComfyUI 실행
5. ComfyUI API 호출하여 이미지 생성
6. 결과를 NocoDB에 저장
7. SSH로 PC 종료 명령

**ComfyUI API 호출:**

n8n의 HTTP Request 노드에서 ComfyUI API를 호출하여 이미지를 생성합니다. ComfyUI는 REST API를 제공하므로 외부에서 프롬프트를 전달하고 결과 이미지를 받아올 수 있습니다.

**PC 종료 명령:**

```powershell
shutdown /s /t 60 /f
```

---

## 🎁 보너스: 카톡봇 연동

원래 운영 중인 카톡봇에 이미지 생성 기능을 추가해봤습니다.

![카카오톡 봇 1](CleanShot%202026-01-14%20at%2011.54.27@2x.png)
![카카오톡 봇 2](CleanShot%202026-01-14%20at%2011.55.57@2x.png)

**구현 내용:**
- 카카오톡 메시지로 프롬프트 전송
- n8n이 메시지 받아서 ComfyUI API 호출
- 생성된 이미지를 구글 드라이브에 업로드 후 공유 URL을 카톡으로 회신

실용성은... 😅 하지만 재미있는 실험이었습니다.

---

## 🖼️ ComfyUI 이미지 자동화로 생성된 샘플

**이미지 생성 자동화** 시스템으로 Z Image Turbo 모델을 사용해 생성한 이미지들입니다.

![ComfyUI 생성 샘플 1](ComfyUI_00016_.png)
![ComfyUI 생성 샘플 2](ComfyUI_00017_.png)

---

## 💡 결과 및 배운 점

### 주요 성과

✅ **ComfyUI 이미지 자동화 구현 확인**
- 주기적 대량 이미지 자동 생성이 가능함을 검증
- Python & n8n 양쪽 모두에서 자동화 파이프라인 구현

✅ **완전 자동화 달성**
- 매일 새벽 무인으로 이미지 생성 → 저장 → PC 종료까지 자동 수행

✅ **효율적인 리소스 관리**
- 게이밍PC는 작업할 때만 가동 (전기료 절감)
- 저전력PC에서 스케줄링과 데이터 관리

### 배운 점

**1. ComfyUI는 생각보다 쉽다**

설치나 기존 워크플로우를 가져와 사용하는 것은 어렵지 않았습니다. Claude Code로 Python 제어 기능도 쉽게 구현할 수 있었습니다.

**2. Z Image Turbo는 실용적**

일반적인 블로그 썸네일이나 SNS 이미지 용도로는 완벽합니다.

**3. 자동화는 n8n이 편하다**

Python도 좋지만, **ComfyUI n8n** 조합에서는 스케쥴링 기능이 내장되어 있고 비주얼 워크플로우가 더 직관적이고 유지보수가 쉬웠습니다.

---

## 🚀 앞으로의 계획

- 📈 **프롬프트 품질 개선**: LLM을 활용한 더 정교한 프롬프트 생성
- 🎬 **영상 생성 모델 테스트**: 이미지 외에 영상 생성도 자동화
- 🔧 **MCP 서버화**: 이 기능들을 MCP로 만들어 다양한 곳에서 활용
- 🤖 **Claude Code 연동**: n8n은 트리거로만 사용하고 SSH로 Claude Code를 실행하는 방식 실험

---

## 📊 기술 스택 정리

| 카테고리       | 기술/도구                   | 역할         |
| ---------- | ----------------------- | ---------- |
| **하드웨어**   | RTX3090 윈도우PC           | GPU 연산     |
| **이미지 생성** | ComfyUI + Z Image Turbo | 이미지 생성     |
| **자동화**    | n8n                     | 워크플로우 자동화  |
| **데이터베이스** | NocoDB                  | 프롬프트/결과 관리 |
| **원격 제어**  | WOL, VPN, SSH           | PC 원격 관리   |

---

## 🔗 참고 자료

- [ComfyUI 공식 사이트](https://www.comfy.org/)
- [ComfyUI GitHub](https://github.com/Comfy-Org/ComfyUI)
- [Stability Matrix](https://lykos.ai/) - 올인원 설치 도구
- [Z Image Turbo](https://z-image-turbo.com/) - 경량 이미지 생성 모델
- [NocoDB 공식 사이트](https://nocodb.com/) - 오픈소스 노코드 데이터베이스
- [n8n 공식 문서](https://docs.n8n.io/)
- [StackOverflow: Windows SSH - Keep Process Running](https://stackoverflow.com/questions/48842823/windows-ssh-how-to-keep-proccess-running-after-disconnect) - WMI 방식 해결책

---

## 🎯 ComfyUI 이미지 자동화를 마치며

개인적으로 셀프 호스팅이나 보유한 하드웨어를 활용해서 뭔가를 해보는 것을 좋아하기 때문에 재밌는 시간이었습니다. **ComfyUI 이미지 자동화** 시스템을 잘 만들어 놓으면 블로그 썸네일, SNS 콘텐츠 등 다양하게 활용할 수 있습니다. **ComfyUI n8n** 조합은 코딩 없이도 강력한 **이미지 생성 자동화**를 구현할 수 있는 좋은 방법입니다.
