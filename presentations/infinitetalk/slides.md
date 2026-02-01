---
theme: light-icons
routerMode: 'hash'
title: InfiniteTalk 음성 동기화 비디오 생성 가이드
info: |
  ## InfiniteTalk + Pinokio로 AI 립싱크 비디오 만들기
  무제한 길이 음성 동기화 비디오 생성 도구 설치 및 활용 가이드
drawings:
  persist: false
transition: slide-left
mdc: true
aspectRatio: '16/9'
canvasWidth: 980
layout: intro
image: /images/wangp-infinitetalk.png
---

<div class="mb-4 absolute bottom-4 left-12">
  <span class="text-6xl text-primary-lighter text-opacity-80" style="font-weight:500;">
    InfiniteTalk <light-icon icon="video" size="72px"/>
  </span>
  <div class="text-2xl text-primary-lighter text-opacity-60 font-bold mt-4">
    AI 립싱크 비디오 생성 가이드
  </div>
</div>

---
layout: image-header-intro
imageHeader: /images/wangp-infinitetalk.png
imageRight: /images/wangp-infinitetalk.png
---

<div class="leading-snug text-black dark:text-white">
  InfiniteTalk이란?
  <span class="text-primary-lighter">무제한 길이</span> 음성 동기화<br/>
  비디오 생성 AI 모델
</div>

<div class="text-secondary-lighter mt-4">

- **MeiGen-AI 개발** - MultiTalk 후속 모델
- **무제한 길이** - 영상 길이 제한 없음
- **높은 정확도** - 기존 대비 우수한 립싱크
- **오픈소스** - GitHub에서 무료 제공

</div>

---

# 핵심 특징

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="p-6 bg-blue-500/20 rounded-lg text-center">
  <light-icon icon="message-chatbot" size="48px" class="text-blue-400"/>
  <h3 class="text-lg font-bold mt-4">종합적 더빙</h3>
  <p class="text-sm text-gray-400 mt-2">입술뿐만 아니라 머리 움직임, 몸짓, 표정까지 오디오와 동기화</p>
</div>

<div class="p-6 bg-green-500/20 rounded-lg text-center">
  <light-icon icon="infinity" size="48px" class="text-green-400"/>
  <h3 class="text-lg font-bold mt-4">무제한 길이</h3>
  <p class="text-sm text-gray-400 mt-2">영상 길이 제한 없이 생성 가능</p>
</div>

<div class="p-6 bg-purple-500/20 rounded-lg text-center">
  <light-icon icon="target" size="48px" class="text-purple-400"/>
  <h3 class="text-lg font-bold mt-4">높은 정확도</h3>
  <p class="text-sm text-gray-400 mt-2">기존 MultiTalk 대비 우수한 립싱크와 안정성</p>
</div>

</div>

<v-click>

<div class="mt-8 p-4 bg-gray-800/50 rounded-lg">
  <light-icon icon="brand-github" size="24px"/> <a href="https://github.com/MeiGen-AI/InfiniteTalk" target="_blank">GitHub - MeiGen-AI/InfiniteTalk</a>
</div>

</v-click>

---

# 지원 기능

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

### 변환 모드

<v-clicks>

<div class="p-4 bg-blue-500/20 rounded-lg mt-4">
  <light-icon icon="photo" size="24px" class="text-blue-400"/>
  <span class="font-bold ml-2">이미지 → 비디오</span>
  <p class="text-sm text-gray-400 mt-1">사진 + 오디오로 비디오 생성</p>
</div>

<div class="p-4 bg-green-500/20 rounded-lg mt-4">
  <light-icon icon="video" size="24px" class="text-green-400"/>
  <span class="font-bold ml-2">비디오 → 비디오</span>
  <p class="text-sm text-gray-400 mt-1">기존 영상에 새 오디오 더빙</p>
</div>

</v-clicks>

</div>

<div>

### 추가 옵션

<v-clicks>

<div class="p-4 bg-purple-500/20 rounded-lg mt-4">
  <light-icon icon="dimensions" size="24px" class="text-purple-400"/>
  <span class="font-bold ml-2">다중 해상도</span>
  <p class="text-sm text-gray-400 mt-1">480P, 720P 지원</p>
</div>

<div class="p-4 bg-orange-500/20 rounded-lg mt-4">
  <light-icon icon="users" size="24px" class="text-orange-400"/>
  <span class="font-bold ml-2">다중 인물</span>
  <p class="text-sm text-gray-400 mt-1">여러 사람 동시 처리</p>
</div>

</v-clicks>

</div>

</div>

---
layout: center
---

# 활용 분야

<div class="grid grid-cols-4 gap-6 mt-8">

<div v-click class="p-6 bg-gray-800/50 rounded-lg text-center border border-gray-700">
  <light-icon icon="microphone" size="36px" class="text-blue-400"/>
  <h3 class="text-sm font-bold mt-3">비디오 더빙</h3>
</div>

<div v-click class="p-6 bg-gray-800/50 rounded-lg text-center border border-gray-700">
  <light-icon icon="user-circle" size="36px" class="text-green-400"/>
  <h3 class="text-sm font-bold mt-3">아바타 콘텐츠</h3>
</div>

<div v-click class="p-6 bg-gray-800/50 rounded-lg text-center border border-gray-700">
  <light-icon icon="language" size="36px" class="text-purple-400"/>
  <h3 class="text-sm font-bold mt-3">다국어 비디오</h3>
</div>

<div v-click class="p-6 bg-gray-800/50 rounded-lg text-center border border-gray-700">
  <light-icon icon="player-play" size="36px" class="text-orange-400"/>
  <h3 class="text-sm font-bold mt-3">인터랙티브 미디어</h3>
</div>

</div>

<v-click>

<div class="mt-8 text-center text-xl text-gray-400">
  교육 콘텐츠, 마케팅 영상, 팟캐스트 영상화 등 다양한 분야에 활용 가능
</div>

</v-click>

---
layout: dynamic-image
image: /images/pinokio-app.png
equal: false
left: false
---

# 왜 Pinokio인가?

### 원클릭 AI 앱 설치 플랫폼

<v-clicks>

- <light-icon icon="download" size="18px"/> **간편한 설치** - 복잡한 설정 없이 클릭만으로 설치
- <light-icon icon="package" size="18px"/> **의존성 관리** - Python, CUDA 등 자동 설치
- <light-icon icon="refresh" size="18px"/> **업데이트 관리** - 앱 업데이트 자동화
- <light-icon icon="apps" size="18px"/> **다양한 AI 앱** - ComfyUI, Wan2.1 등 지원

</v-clicks>

<v-click>

<div class="mt-6 p-3 bg-green-500/20 rounded-lg">
  <light-icon icon="circle-check" size="20px" class="text-green-400"/> 설치나 설정 스트레스가 없어서 좋았습니다!
</div>

</v-click>

<v-click>

<div class="mt-4">
  <a href="https://pinokio.co/" target="_blank" class="text-blue-400">https://pinokio.co/</a>
</div>

</v-click>

---

# 설치 워크플로우

전체 설치 과정 개요

<div class="mt-8">

```mermaid {scale: 0.8}
flowchart LR
    A[Pinokio 설치] --> B[Wan2.1 설치]
    B --> C[InfiniteTalk 실행]
    C --> D[영상 생성]

    style A fill:#4CAF50,color:#fff
    style B fill:#2196F3,color:#fff
    style C fill:#9C27B0,color:#fff
    style D fill:#FF9800,color:#fff
```

</div>

<div class="grid grid-cols-4 gap-4 mt-8">

<div v-click class="p-4 bg-green-500/20 rounded-lg text-center">
  <div class="font-bold text-2xl">1</div>
  <div class="text-sm mt-2">Pinokio 설치</div>
</div>

<div v-click class="p-4 bg-blue-500/20 rounded-lg text-center">
  <div class="font-bold text-2xl">2</div>
  <div class="text-sm mt-2">Wan2.1 설치</div>
</div>

<div v-click class="p-4 bg-purple-500/20 rounded-lg text-center">
  <div class="font-bold text-2xl">3</div>
  <div class="text-sm mt-2">InfiniteTalk 선택</div>
</div>

<div v-click class="p-4 bg-orange-500/20 rounded-lg text-center">
  <div class="font-bold text-2xl">4</div>
  <div class="text-sm mt-2">영상 생성</div>
</div>

</div>

---
layout: dynamic-image
image: /images/pinokio-app.png
equal: true
left: false
---

# 1단계: Pinokio 설치

### 원클릭 AI 앱 매니저 설치

<v-clicks>

1. <a href="https://pinokio.co/" target="_blank">pinokio.co</a> 접속
2. 운영체제에 맞는 버전 다운로드
3. 설치 프로그램 실행
4. 설치 완료 후 Pinokio 실행

</v-clicks>

<v-click>

<div class="mt-6 p-3 bg-blue-500/20 rounded-lg text-sm">
  <light-icon icon="info-circle" size="20px"/> Windows, macOS, Linux 모두 지원
</div>

</v-click>

---
layout: dynamic-image
image: /images/wan21-install.png
equal: true
left: false
---

# 2단계: Wan2.1 설치

### Pinokio에서 Wan2.1 앱 설치

<v-clicks>

1. Pinokio 앱 목록에서 **Wan2.1** 검색
2. **Install** 버튼 클릭
3. 필요한 모델 자동 다운로드 대기
4. 설치 완료 후 **Start** 클릭

</v-clicks>

<v-click>

<div class="mt-6 p-3 bg-yellow-500/20 rounded-lg text-sm">
  <light-icon icon="alert-triangle" size="20px"/> 모델 다운로드에 시간이 걸릴 수 있습니다
</div>

</v-click>

<v-click>

<div class="mt-4 p-3 bg-green-500/20 rounded-lg text-sm">
  <light-icon icon="cpu" size="20px"/> FusionX Lora 설치 후 설정값 수정하면 최적화 가능
</div>

</v-click>

---
layout: dynamic-image
image: /images/wangp-infinitetalk.png
equal: true
left: false
---

# 3단계: 영상 생성

### InfiniteTalk Single Speaker 480p 선택

<v-clicks>

1. Wan2.1 실행 후 Gradio UI 접속
2. **InfiniteTalk Single Speaker 480p** 선택
3. 이미지 또는 비디오 업로드
4. 오디오 파일 업로드
5. **Generate** 버튼 클릭

</v-clicks>

<v-click>

<div class="mt-6 p-3 bg-purple-500/20 rounded-lg text-sm">
  <light-icon icon="settings" size="20px"/> 설정 조정으로 품질과 속도 조절 가능
</div>

</v-click>

---

# 결과

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

### 성능 비교

| 항목 | MultiTalk | InfiniteTalk |
|------|-----------|--------------|
| 설정 난이도 | 어려움 | 쉬움 (Pinokio) |
| 14초 영상 | 매우 오래 걸림 | **약 20분** |
| 길이 제한 | 있음 | 무제한 |
| 안정성 | 낮음 | 높음 |

</div>

<div>

<v-click>

### 실제 테스트 결과

<div class="p-4 bg-green-500/20 rounded-lg">
  <light-icon icon="clock" size="24px" class="text-green-400"/>
  <span class="font-bold ml-2">14초 영상 생성</span>
  <p class="text-2xl font-bold text-green-400 mt-2">약 20분</p>
</div>

</v-click>

<v-click>

<div class="mt-4 p-4 bg-blue-500/20 rounded-lg">
  <light-icon icon="circle-check" size="24px" class="text-blue-400"/>
  <span class="font-bold ml-2">자동화 활용 가능</span>
  <p class="text-sm text-gray-400 mt-1">Gradio API 호출로 자동화 가능</p>
</div>

</v-click>

</div>

</div>

---

# 자동화 가능성

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

### Gradio API 활용

<v-clicks>

- Wan2.1은 **Gradio** 기반 UI
- Gradio는 **API 자동 제공**
- Python, JavaScript 등으로 호출 가능
- POC 수준의 자동화 구현 가능

</v-clicks>

</div>

<div>

<v-click>

### 활용 시나리오

```mermaid {scale: 0.7}
flowchart TB
    A[텍스트 입력] --> B[TTS 생성]
    B --> C[InfiniteTalk API]
    C --> D[립싱크 비디오]
    D --> E[자동 업로드]
```

</v-click>

</div>

</div>

<v-click>

<div class="mt-6 p-4 bg-purple-500/20 rounded-lg">
  <light-icon icon="robot" size="24px"/> 유튜브 자막 → AI 팟캐스트 동영상 완전 자동화 파이프라인 구축 가능
</div>

</v-click>

---

# 배운 점

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

<v-clicks>

<div class="p-4 bg-blue-500/20 rounded-lg mb-4">
  <span class="font-bold">1. Pinokio가 설치를 혁신적으로 간편하게</span>
  <p class="text-sm text-gray-400 mt-1">복잡한 환경 설정 없이 클릭만으로 설치 완료</p>
</div>

<div class="p-4 bg-green-500/20 rounded-lg mb-4">
  <span class="font-bold">2. InfiniteTalk는 실용적인 속도</span>
  <p class="text-sm text-gray-400 mt-1">MultiTalk 대비 훨씬 빠르고 안정적</p>
</div>

<div class="p-4 bg-purple-500/20 rounded-lg">
  <span class="font-bold">3. Gradio API로 자동화 가능</span>
  <p class="text-sm text-gray-400 mt-1">앱이나 자동화 파이프라인에 활용 가능</p>
</div>

</v-clicks>

</div>

<div>

<v-click>

### 참고 자료

<div class="space-y-2 text-sm">

- [InfiniteTalk GitHub](https://github.com/MeiGen-AI/InfiniteTalk)
- [Pinokio 공식 사이트](https://pinokio.co/)
- [How To Install InfiniteTalk With WAN GP (YouTube)](https://www.youtube.com/watch?v=7Uaw0KVo2hs)
- [내 PC에서 무료로 말하는 영상 만들기 (YouTube)](https://www.youtube.com/watch?v=-VYppOorWhY)

</div>

</v-click>

</div>

</div>

---
layout: intro
image: /images/wangp-infinitetalk.png
---

<div class="mb-4 absolute bottom-4 left-12">
  <span class="text-5xl text-primary-lighter text-opacity-80" style="font-weight:500;">
    감사합니다 <light-icon icon="mood-smile" size="48px"/>
  </span>
  <div class="text-xl text-primary-lighter text-opacity-60 mt-4">
    InfiniteTalk + Pinokio로<br/>
    AI 립싱크 비디오를 쉽게 만들어 보세요
  </div>
  <div class="mt-8 flex gap-8">
    <div class="text-center">
      <light-icon icon="video" size="36px"/>
      <div class="text-sm mt-1">립싱크 비디오</div>
    </div>
    <div class="text-center">
      <light-icon icon="infinity" size="36px"/>
      <div class="text-sm mt-1">무제한 길이</div>
    </div>
    <div class="text-center">
      <light-icon icon="robot" size="36px"/>
      <div class="text-sm mt-1">자동화 가능</div>
    </div>
  </div>
  <div class="mt-6 text-2xl text-green-400 font-bold">
    Pinokio + Wan2.1 = 간편한 AI 비디오 생성
  </div>
</div>
