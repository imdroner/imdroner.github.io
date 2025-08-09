# 아이엠드론 포트폴리오 웹사이트

아이엠드론(imdrone)의 대표 박영진님의 포트폴리오 웹사이트입니다. 드론 기술과 3D 모델링을 기반으로 한 다양한 프로젝트들을 소개합니다.

## 🚀 주요 기능

- **드론 촬영 및 운용** 포트폴리오
- **3D 모델링** 및 **디지털 트윈** 프로젝트
- **문화유산 디지털화** 작업물
- **항공 VR 영상** 및 **360도 시점** 제공
- **반응형 디자인** 및 **다크모드** 지원
- **비밀번호 보호 페이지** 기능
- **Reveal.js 프리젠테이션** 시스템
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

### Presentation
- **Reveal.js 5.2.1** - HTML 프리젠테이션 프레임워크
- **Highlight.js** - 코드 하이라이팅

### Deployment
- **GitHub Pages** - 정적 사이트 호스팅
- **gh-pages** - 배포 자동화

## 📦 설치 및 실행

### 필수 요구사항
- Node.js >= 18.17.0
- npm 또는 yarn

### 설치
```bash
git clone https://github.com/imdroner/imdroner.github.io.git
cd imdroner.github.io
npm install
```

### 환경변수 설정
```bash
# .env.local 파일 생성
cp env.example .env.local

# .env.local 파일에서 비밀번호 설정
PRESENTATION_PASSWORD=your_secure_password_here
SESSION_EXPIRY=86400000
```

### 개발 서버 실행
```bash
npm run dev
```

### 빌드 및 배포
```bash
npm run build
npm run deploy
```

## 🔐 보안 기능

### Next.js 라우팅 기반 보안 시스템
- **라우팅 접근 제어**: Next.js 페이지를 통한 접근만 허용
- **정적 파일 차단**: public 폴더의 프레젠테이션 파일 직접 접근 차단
- **API 기반 인증**: `/api/auth/verify` 엔드포인트
- **환경변수 관리**: `PRESENTATION_PASSWORD` 환경변수
- **세션 관리**: 24시간 자동 만료
- **클라이언트 사이드 검증**: `sessionStorage` 기반

### 보안 특징
- **완전한 제어**: Next.js 라우팅을 통한 접근만 허용
- **정적 파일 보호**: public 폴더에서 프레젠테이션 파일 제거
- **환경변수 사용**: 하드코딩된 비밀번호 제거
- **세션 만료**: 24시간 후 자동 로그아웃
- **API 검증**: 서버 사이드 비밀번호 확인
- **접근 제어**: 인증되지 않은 사용자 자동 리다이렉트
- **SEO 최적화**: 메타데이터 보안 처리

### 접근 방법
1. 우측 상단 자물쇠 아이콘 클릭
2. 비밀번호 입력 (기본값: `secret123`)
3. 보호된 콘텐츠 접근 가능
4. 24시간 후 자동 로그아웃

### API 엔드포인트
- `POST /api/auth/verify` - 비밀번호 검증
- `POST /api/auth/logout` - 로그아웃

## 📊 프리젠테이션 시스템

### 구조
```
app/presentations/[id]/
├── web-development-intro/         # 웹 개발 입문
├── react-fundamentals/            # React 기초
├── nextjs-advanced/              # Next.js 고급 기능
├── threejs-basics/               # Three.js 기초
├── ai-web-apps/                  # AI 웹 애플리케이션
└── performance-optimization/      # 웹 성능 최적화
```

### 특징
- **React 컴포넌트**: 동적 프리젠테이션 생성
- **Reveal.js**: 공식 예제와 동일한 구조
- **코드 하이라이팅**: Highlight.js 지원
- **반응형 디자인**: 모바일/데스크톱 최적화
- **키보드 조작**: 화살표 키, 스페이스바 지원
- **보안 통합**: 인증된 사용자만 접근 가능
- **라우팅 보안**: Next.js 페이지를 통한 접근만 허용

### 조작법
- `→` 또는 `Space`: 다음 슬라이드
- `←`: 이전 슬라이드
- `F`: 전체화면
- `S`: 발표자 노트
- `H`: 도움말

## 📁 프로젝트 구조

```
imdroner.github.io/
├── app/                          # Next.js App Router
│   ├── api/                      # API 라우트
│   │   └── auth/                 # 인증 API
│   │       ├── verify/           # 비밀번호 검증
│   │       └── logout/           # 로그아웃
│   ├── protected/                # 보호된 콘텐츠
│   │   └── page.tsx             # 보호된 메인 페이지
│   ├── presentations/            # 프리젠테이션 페이지
│   │   └── [id]/                # 동적 프리젠테이션
│   ├── projects/                 # 프로젝트 페이지
│   ├── profile/                  # 프로필 페이지
│   ├── contact/                  # 문의 페이지
│   └── layout.tsx               # 루트 레이아웃
├── components/                   # React 컴포넌트
│   ├── AuthenticatedPresentation.tsx  # 인증된 프리젠테이션
│   ├── RevealPresentation.tsx         # Reveal.js 컴포넌트
│   ├── PresentationList.tsx           # 프리젠테이션 목록
│   └── FloatingLockIcon.tsx           # 보안 아이콘
├── data/                        # 데이터 파일들
├── public/                      # 정적 파일들
│   ├── images/                  # 이미지 파일들
│   ├── models/                  # 3D 모델 파일들
│   └── videos/                  # 비디오 파일들
├── types/                       # TypeScript 타입 정의
└── env.example                  # 환경변수 예시
```

## 🎨 주요 페이지

### 홈페이지 (`/`)
- 히어로 섹션
- 최신 프로젝트 소개
- 기술 스택 표시

### 프로젝트 (`/projects`)
- 드론 촬영 프로젝트
- 3D 모델링 작업
- 문화유산 디지털화

### 프로필 (`/profile`)
- 개인 정보
- 경력 사항
- 기술 스택

### 보호된 페이지 (`/protected`)
- 비밀번호 인증 필요
- Reveal.js 프리젠테이션 목록
- 기술 교육 자료

### 프리젠테이션 (`/presentations/[id]`)
- 인증된 사용자만 접근 가능
- 인터랙티브 프리젠테이션
- 코드 하이라이팅 지원
- Next.js 라우팅을 통한 접근만 허용

## 🚀 배포

### GitHub Pages 배포
```bash
npm run build
npm run deploy
```

### 환경 설정
- `output: export`: 정적 사이트 생성
- `basePath`: GitHub Pages 경로 설정
- `assetPrefix`: 정적 파일 경로 설정

## 🔧 개발 가이드

### 보안 설정 추가
1. `.env.local` 파일 생성
2. `PRESENTATION_PASSWORD` 설정
3. `SESSION_EXPIRY` 설정 (선택사항)

### 새로운 프리젠테이션 추가
1. `data/presentations.ts`에 프리젠테이션 정보 추가
2. `components/RevealPresentation.tsx`에 내용 추가
3. `app/presentations/[id]/page.tsx`에서 자동 라우팅

### 보안 구현 방식
- **라우팅 접근 제어**: Next.js 페이지를 통한 접근만 허용
- **정적 파일 보호**: public 폴더에서 프레젠테이션 파일 제거
- **API 기반 인증**: 서버 사이드 비밀번호 검증
- **세션 관리**: 24시간 자동 만료
- **자동 리다이렉트**: 인증되지 않은 사용자 자동 이동

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여

버그 리포트나 기능 제안은 GitHub Issues를 통해 해주세요.

---

**imdrone** - 드론 기술과 디지털 혁신의 선두주자
