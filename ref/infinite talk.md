---
cssclasses:
  - clean-embdes
created: 2025-09-24 16:18
updated: 2025-09-30 12:09
aliases:
  - infinite talk
tags:
  - none
done: true
---
**목차**
```toc
	style: bullet | number | inline (default: bullet)
	min_depth: number (default: 2)
	max_depth: number (default: 6)
	title: string (default: undefined)
	allow_inconsistent_headings: boolean (default: false)
	delimiter: string (default: |)
	varied_style: boolean (default: false)
```
---
## 참고 Youtube 링크
[How To Install InfiniteTalk With WAN GP for PERFECT Lip-synced Avatars 👄🤖 - YouTube](https://www.youtube.com/watch?v=7Uaw0KVo2hs)
[내 PC에서 무료로 말하는 영상 만들기 (Wan2.1(Wan2GP) 멀티톡 사용법 with 피노키오) - YouTube](https://www.youtube.com/watch?v=-VYppOorWhY&t=31s)

![[99 Attachments/CleanShot 2025-09-24 at 16.18.33@2x.png]]

![[99 Attachments/CleanShot 2025-09-24 at 16.19.13@2x.png]]

![[99 Attachments/CleanShot 2025-09-24 at 18.04.27@2x.png]]

8월에 공개된 [InfiniteTalk](https://github.com/MeiGen-AI/InfiniteTalk)는 MultiTalk을 공개했던 MeiGen-AI에서 개발한 **무제한 길이 음성 동기화 비디오 생성 모델**입니다. 기존 MultiTalk의 경우 설정도 힘들었고 영상 생성 시간이 너무 오래 걸려 중간에 포기했었는데 이번에는 [pinokio](https://pinokio.co/)를 사용해서 빠르게 테스트를 해보았습니다.

### GitHub 링크
[GitHub - MeiGen-AI/InfiniteTalk: ​​Unlimited-length talking video generation​​ that supports image-to-video and video-to-video generation](https://github.com/MeiGen-AI/InfiniteTalk)

### MultiTalk 관련 사례
- [유튜브 자막에서 AI 팟캐스트 동영상까지 완전 자동화 파이프라인 구축하기 - POC 약간의 성공](https://www.gpters.org/dev/post/build-complete-automated-pipeline-Qldr2r2KcXKfyEU)
- [유튜브 자막에서 AI 팟캐스트 동영상까지 완전 자동화 파이프라인 구축하기 - POC 진행 중](https://www.gpters.org/dev/post/establishing-complete-automated-pipeline-hkqfbb2cXUf4Uvn)

### 핵심 특징
**💬 종합적 더빙**: 입술뿐만 아니라 머리 움직임, 몸짓, 표정까지 오디오와 동기화  
**⏱️ 무제한 길이**: 영상 길이 제한 없이 생성 가능  
**🚀 높은 정확도**: 기존 MultiTalk 대비 우수한 립싱크와 안정성

### 지원 기능
- **이미지→비디오**: 사진 + 오디오로 비디오 생성
- **비디오→비디오**: 기존 영상에 새 오디오 더빙
- **다중 해상도**: 480P, 720P 지원
- **다중 인물**: 여러 사람 동시 처리

### 활용 분야
비디오 더빙, 아바타 콘텐츠 제작, 다국어 비디오 제작, 인터랙티브 미디어 등에 활용 가능합니다.


## 진행 방법
1. [pinokio](https://pinokio.co/) 를 설치
2. pinokio 내에서 Wan2.1 설치
3. Wan 2.1 실행 후 `Infinitetalk Single Speaker 480p` 선택 후 설정 및 영상 생성
4. FusionX Lora 설치 후 설정값을 수정하고 생성하면 최적화 가능

![[99 Attachments/2025-09-24-18h00m11s_seed91343231_Talking.mp4]]

![[99 Attachments/2025-09-24-18h29m21s_seed32885102_Talking.mp4]]

## 결과와 배운 점
MultiTalk을 테스트할 때 설정을 못한 것도 있을 수 있지만 짧은 영상도 생성시켜 놓고 그냥 잊고 있어야 생성이 되곤 했는데 InfiniteTalk는 14초 영상 생성에 20여분밖에 걸리지 않았습니다. 또한 GitHub에서 무제한 길이라고 했으니 좀 더 테스트를 해봐야겠지만 이 정도면 자동화에 활용할 수 있을 정도는 되는 것으로 판단됩니다.
Pinokio 처음 써봤는데 설치나 설정 스트레스가 없으니 좋았습니다. Wan 2.1 영상 생성 기능은 Gradio 형식이니 API로 호출이 가능할 것이므로 POC 정도까지라면 앱이나 자동화에도 사용해 볼 수 있을 것 같습니다.
