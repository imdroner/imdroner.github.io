# 아이엠드론 포트폴리오 웹사이트

아이엠드론(imdrone)의 대표 박영진님의 포트폴리오 웹사이트입니다. 드론 기술과 3D 모델링을 기반으로 한 다양한 프로젝트들을 소개합니다.

## 🚀 주요 기능

- **드론 촬영 및 운용** 포트폴리오
- **3D 모델링** 및 **디지털 트윈** 프로젝트
- **문화유산 디지털화** 작업물
- **항공 VR 영상** 및 **360도 시점** 제공
- **반응형 디자인** 및 **다크모드** 지원
- **GitHub Pages** 배포

## 🛠️ 기술 스택

### Frontend
- **Next.js 15.3.1** - React 기반 프레임워크
- **React 19.0.0** - 사용자 인터페이스 라이브러리
- **TypeScript** - 타입 안전성
- **Tailwind CSS 4.1.4** - 유틸리티 기반 CSS 프레임워크

### 3D & Visualization
- **Three.js 0.178.0** - 3D 그래픽 라이브러리
- **@egjs/react-view360** - 360도 뷰어 컴포넌트
- **Model Viewer** - 3D 모델 표시

### Deployment
- **GitHub Pages** - 정적 사이트 호스팅
- **gh-pages** - 배포 자동화

## 📦 설치 및 실행

### 필수 요구사항
- Node.js >= 18.17.0
- npm 또는 yarn

### 설치
```bash
# 저장소 클론
git clone https://github.com/imdroner/imdroner.github.io.git
cd imdroner.github.io

# 의존성 설치
npm install
# 또는
yarn install
```

### 개발 서버 실행
```bash
npm run dev
# 또는
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드 및 배포
```bash
# 프로덕션 빌드
npm run build

# GitHub Pages 배포
npm run deploy
```

## 📁 프로젝트 구조

```
imdroner.github.io/
├── app/                    # Next.js App Router
│   ├── contact/           # 문의 페이지
│   ├── profile/           # 프로필 페이지
│   ├── projects/          # 프로젝트 페이지
│   └── layout.tsx         # 루트 레이아웃
├── components/            # 재사용 가능한 컴포넌트
│   ├── ImageModal.tsx     # 이미지 모달
│   ├── ModelViewer.tsx    # 3D 모델 뷰어
│   ├── Video360Player.tsx # 360도 비디오 플레이어
│   └── navbar.tsx         # 네비게이션 바
├── data/                  # 정적 데이터
│   ├── projects.ts        # 프로젝트 정보
│   ├── general.ts         # 일반 정보
│   └── ...
├── public/                # 정적 파일
│   ├── images/           # 이미지 파일
│   ├── models/           # 3D 모델 파일
│   └── ...
└── types/                # TypeScript 타입 정의
```

## 🎯 주요 프로젝트

### 1. 고창 고인돌공원 디지털 트윈
- **기술**: 3D 모델링, 디지털 트윈, 항공 VR
- **설명**: 세계유산도시 고창의 고인돌공원을 3D 모델링하여 디지털 트윈으로 구현

### 2. 거북선 모형 디지털 트윈
- **기술**: 3D 모델링, 디지털 트윈
- **설명**: 여수시 거북선 모형을 디지털 트윈으로 구현

### 3. 이순신 장군 동상 디지털 트윈
- **기술**: 3D 모델링, 드론 촬영
- **설명**: 여수시 이순신 장군 동상을 디지털 트윈으로 구현

### 4. 순천만 국가정원 오천 그린스퀘어 3D 가상투어
- **기술**: 3D 가상투어, 드론 촬영
- **설명**: 순천만 국가정원 오천 그린스퀘어를 3D 가상환경으로 구현

## 🌐 배포 정보

- **사이트**: https://imdrone.site
- **GitHub Pages**: https://imdroner.github.io
- **블로그**: http://blog.imdrone.site

## 📞 연락처

- **이메일**: imdrone.site@gmail.com
- **인스타그램**: [@imdrone_official](https://instagram.com/imdrone_official)
- **유튜브**: [@imdrone6824](https://www.youtube.com/@imdrone6824)
- **블로그**: [blog.imdrone.site](http://blog.imdrone.site)

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

## 🤝 기여

이 프로젝트는 개인 포트폴리오 사이트이므로 외부 기여는 받지 않습니다. 문의사항이 있으시면 위의 연락처로 연락해 주세요.
