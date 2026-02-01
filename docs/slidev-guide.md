# Slidev 프레젠테이션 가이드

이 문서는 Slidev를 사용하여 프레젠테이션을 만들고 배포하는 방법을 설명합니다.

## 목차
1. [프로젝트 구조](#프로젝트-구조)
2. [빠른 시작](#빠른-시작)
3. [새 프레젠테이션 만들기](#새-프레젠테이션-만들기)
4. [슬라이드 작성법](#슬라이드-작성법)
5. [배포](#배포)
6. [팁과 트러블슈팅](#팁과-트러블슈팅)

---

## 프로젝트 구조

```
/slidev/
├── .github/workflows/deploy.yml    # GitHub Actions 자동 배포
├── presentations/                   # 모든 프레젠테이션
│   ├── comfyui/                    # 예시: ComfyUI 프레젠테이션
│   │   ├── slides.md               # 슬라이드 내용
│   │   └── public/images/          # 이미지 파일
│   └── template/                   # 새 프레젠테이션 템플릿
│       ├── slides.md
│       └── public/images/
├── shared/                         # 공유 리소스
│   ├── components/                 # Vue 컴포넌트
│   └── styles/                     # CSS 스타일
├── scripts/                        # 유틸리티 스크립트
│   └── create-presentation.js      # 새 프레젠테이션 생성
├── package.json
└── docs/                           # 문서
```

### 폴더별 역할

| 폴더 | 역할 |
|------|------|
| `presentations/` | 각 프레젠테이션 폴더 (독립적) |
| `shared/` | 여러 프레젠테이션에서 공유하는 컴포넌트/스타일 |
| `scripts/` | 프레젠테이션 생성 등 자동화 스크립트 |
| `docs/` | 프로젝트 문서 |

---

## 빠른 시작

### 개발 서버 실행

```bash
# 기본 프레젠테이션 (comfyui) 실행
npm run dev

# 특정 프레젠테이션 실행
npm run dev -- presentations/<name>/slides.md
```

브라우저에서 `http://localhost:3030` 접속

### 주요 명령어

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 시작 |
| `npm run build` | 프로덕션 빌드 |
| `npm run new <name>` | 새 프레젠테이션 생성 |
| `npm run export` | PDF 내보내기 |

### 키보드 단축키 (프레젠테이션 모드)

| 키 | 기능 |
|----|------|
| `→` / `Space` | 다음 슬라이드 |
| `←` | 이전 슬라이드 |
| `o` | 슬라이드 개요 |
| `d` | 다크 모드 전환 |
| `f` | 전체 화면 |

---

## 새 프레젠테이션 만들기

### 1. 생성 명령어 실행

```bash
npm run new my-presentation
```

결과:
```
✅ Created new presentation: presentations/my-presentation/
```

### 2. 생성된 폴더 구조

```
presentations/my-presentation/
├── slides.md           # 슬라이드 내용 편집
└── public/
    └── images/         # 이미지 파일 저장
```

### 3. GitHub Actions에 추가

`.github/workflows/deploy.yml` 파일에서 matrix에 추가:

```yaml
strategy:
  matrix:
    presentation: [comfyui, my-presentation]  # 여기에 추가
```

### 4. 배포

```bash
git add .
git commit -m "Add my-presentation"
git push
```

---

## 슬라이드 작성법

### Frontmatter 설정

슬라이드 파일 최상단에 YAML 형식으로 설정:

```yaml
---
theme: light-icons          # 테마 선택
routerMode: 'hash'          # GitHub Pages용 (필수)
title: 프레젠테이션 제목
info: |
  ## 부제목
  설명 텍스트
drawings:
  persist: false            # 드로잉 저장 여부
transition: slide-left      # 전환 효과
mdc: true                   # 마크다운 컴포넌트 사용
aspectRatio: '16/9'         # 화면 비율
canvasWidth: 980            # 캔버스 너비
layout: intro               # 첫 슬라이드 레이아웃
image: /images/cover.png    # 배경 이미지
---
```

### 슬라이드 구분

`---`로 슬라이드 구분:

```markdown
---
layout: intro
---

# 첫 번째 슬라이드

---

# 두 번째 슬라이드

---
layout: center
---

# 가운데 정렬 슬라이드
```

### 레이아웃 종류

| 레이아웃 | 설명 |
|----------|------|
| `default` | 기본 레이아웃 |
| `intro` | 인트로/타이틀 슬라이드 |
| `center` | 가운데 정렬 |
| `image-right` | 오른쪽에 이미지 |
| `image-left` | 왼쪽에 이미지 |
| `dynamic-image` | 동적 이미지 배치 |
| `two-cols` | 2단 레이아웃 |

### 이미지 추가

1. 이미지를 `presentations/<name>/public/images/`에 저장
2. 슬라이드에서 참조:

```markdown
---
layout: dynamic-image
image: /images/my-image.png
---

# 슬라이드 제목
```

또는 마크다운 이미지:
```markdown
![설명](/images/my-image.png)
```

### 코드 블록

````markdown
```python
def hello():
    print("Hello, World!")
```
````

라인 하이라이트:
````markdown
```python {2-3}
def hello():
    print("Hello, World!")  # 이 라인 하이라이트
    return True
```
````

### 애니메이션 (v-click)

클릭할 때마다 순차적으로 표시:

```markdown
<v-clicks>

- 첫 번째 항목
- 두 번째 항목
- 세 번째 항목

</v-clicks>
```

개별 요소에 적용:

```markdown
<div v-click>클릭하면 나타남</div>
<div v-click>다음 클릭에 나타남</div>
```

### Mermaid 다이어그램

````markdown
```mermaid
flowchart LR
    A[시작] --> B[처리]
    B --> C[종료]
```
````

---

## 배포

### 자동 배포 흐름

1. `main` 브랜치에 push
2. GitHub Actions가 자동으로:
   - 모든 프레젠테이션 빌드
   - 이미지 경로 수정
   - GitHub Pages에 배포

### 배포 URL

| 경로 | URL |
|------|-----|
| 목록 | `https://<username>.github.io/<repo>/` |
| ComfyUI | `https://<username>.github.io/<repo>/comfyui/` |
| 새 프레젠테이션 | `https://<username>.github.io/<repo>/<name>/` |

### 배포 확인

1. GitHub 리포지토리 → Actions 탭에서 빌드 상태 확인
2. 녹색 체크 ✅ 확인 후 URL 접속

---

## 팁과 트러블슈팅

### 이미지가 안 보일 때

1. **경로 확인**: `/images/filename.png` 형식 사용
2. **파일 위치**: `presentations/<name>/public/images/` 안에 있어야 함
3. **캐시 삭제**: 브라우저에서 `Cmd+Shift+R` (Mac) 또는 `Ctrl+Shift+R` (Windows)

### 로컬 vs 배포 환경

| 항목 | 로컬 | 배포 |
|------|------|------|
| URL 형식 | `localhost:3030/1` | `...github.io/repo/name/#/1` |
| 이미지 경로 | `/images/...` | 자동 변환됨 |
| 라우터 모드 | history | hash (필수) |

### routerMode: 'hash' 필수

GitHub Pages에서 작동하려면 frontmatter에 반드시 추가:

```yaml
---
routerMode: 'hash'
---
```

### 빌드 실패 시

1. Actions 로그에서 에러 메시지 확인
2. 이미지 경로가 올바른지 확인
3. `slides.md` 문법 오류 확인

### 유용한 링크

- [Slidev 공식 문서](https://sli.dev/)
- [Slidev GitHub](https://github.com/slidevjs/slidev)
- [light-icons 테마](https://github.com/nicepkg/slidev-theme-light-icons)
- [Mermaid 문법](https://mermaid.js.org/)
