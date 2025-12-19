# 아이엠드론 SEO 최적화 가이드

## 📊 구현된 SEO 기능

### 1. HTML 사이트맵 (`/site-map`)
- **위치**: `/app/site-map/page.tsx`
- **목적**: 사용자를 위한 시각적 페이지 목록
- **기능**:
  - 전체 페이지를 카테고리별로 분류
  - 각 페이지에 대한 설명 제공
  - 빠른 링크 네비게이션
  - 통계 표시 (총 페이지 수, 카테고리 수)

### 2. XML 사이트맵 (`/sitemap.xml`)
- **위치**: `/public/sitemap.xml`
- **유형**: Static XML (GitHub Pages 배포용)
- **목적**: 검색 엔진 크롤러를 위한 구조화된 데이터
- **포함 내용**:
  - 모든 정적 페이지 URL
  - 동적 프로젝트 페이지 URL
  - 팀원 상세 페이지 URL
  - 각 페이지의 우선순위 (priority)
  - 변경 빈도 (changeFrequency)
  - 최종 수정일 (lastModified)

> **참고**: 이 프로젝트는 `output: "export"` 설정으로 static export를 사용합니다. 따라서 동적 `app/sitemap.ts` 대신 static `public/sitemap.xml` 파일을 사용합니다. 새 페이지나 프로젝트를 추가할 때는 이 파일을 수동으로 업데이트해야 합니다.

**우선순위 설정**:
```
1.0 - 홈페이지
0.9 - 회사 소개, 서비스 페이지, 포트폴리오 목록
0.8 - 팀 소개, FAQ, 문의하기
0.7 - 팀원 상세, 프로젝트 상세
0.5 - 개인정보처리방침, 이용약관
0.4 - 사이트맵
```

### 3. Robots.txt (`/robots.txt`)
- **위치**: `/public/robots.txt`
- **목적**: 검색 엔진 크롤러에게 크롤링 규칙 안내
- **설정**:
  - 모든 검색 엔진 허용
  - API 및 관리자 페이지 제외
  - 사이트맵 위치 명시
  - 주요 검색 엔진별 설정 (Google, Naver, Daum, Bing)

---

## 🚀 검색 엔진 등록 방법

### Google Search Console
1. [Google Search Console](https://search.google.com/search-console) 접속
2. 사이트 추가: `https://imdrone.site`
3. 소유권 확인 (HTML 파일 업로드 또는 DNS 인증)
4. 사이트맵 제출:
   - `https://imdrone.site/sitemap.xml`
5. URL 검사 도구로 주요 페이지 색인 요청

### Naver Search Advisor
1. [네이버 서치어드바이저](https://searchadvisor.naver.com) 접속
2. 사이트 등록
3. 소유 확인
4. 사이트맵 제출: `https://imdrone.site/sitemap.xml`
5. 웹마스터 도구에서 페이지 수집 요청

### Daum 검색등록
1. [Daum 검색등록](https://register.search.daum.net/index.daum) 접속
2. 사이트 URL 등록
3. 사이트 정보 입력

---

## 📈 SEO 체크리스트

### ✅ 완료된 항목
- [x] HTML 사이트맵 페이지 생성
- [x] XML 사이트맵 생성 (동적 프로젝트 포함)
- [x] Robots.txt 설정
- [x] 메타데이터 설정 (각 페이지)
- [x] Open Graph 태그 (소셜 미디어)
- [x] 반응형 디자인
- [x] 빠른 로딩 속도 (Next.js 최적화)
- [x] 시맨틱 HTML 구조
- [x] 이미지 alt 태그

### 🔄 추가 권장 사항
- [ ] Google Analytics 설치
- [ ] Google Tag Manager 설치
- [ ] Schema.org JSON-LD 구조화 데이터
  - Organization (회사 정보)
  - LocalBusiness (지역 비즈니스)
  - Service (제공 서비스)
  - BreadcrumbList (경로 탐색)
- [ ] 페이지별 canonical URL 설정
- [ ] 이미지 최적화 (WebP, 압축)
- [ ] Core Web Vitals 최적화
- [ ] 모바일 친화성 테스트
- [ ] 페이지 로딩 속도 최적화
- [ ] HTTPS 적용 (SSL 인증서)
- [ ] 404 페이지 커스터마이징

---

## 🔍 SEO 모니터링 도구

### 무료 도구
1. **Google Search Console**
   - 검색 성능 분석
   - 색인 상태 확인
   - 모바일 사용성

2. **Google Analytics**
   - 트래픽 분석
   - 사용자 행동 추적
   - 전환율 측정

3. **PageSpeed Insights**
   - 페이지 속도 측정
   - Core Web Vitals
   - 개선 제안

4. **Lighthouse (Chrome DevTools)**
   - 성능, SEO, 접근성 점수
   - 모범 사례 검사

### 유료 도구 (선택)
- Ahrefs
- SEMrush
- Moz Pro

---

## 📊 현재 사이트 구조

```
/ (홈)
├── /about (회사 소개)
├── /team (팀 목록)
│   └── /team/youngjin-park (팀원 상세)
├── /services (서비스)
│   ├── /services/aerial
│   ├── /services/construction
│   ├── /services/energy
│   ├── /services/control
│   ├── /services/public-safety
│   ├── /services/smart-agri
│   ├── /services/hydrogen
│   └── /services/contents
├── /projects (포트폴리오 목록)
│   └── /projects/[id] (프로젝트 상세)
├── /faq (자주 묻는 질문)
├── /contact (문의하기)
├── /privacy (개인정보처리방침)
├── /terms (서비스 이용약관)
└── /site-map (사이트맵)
```

**총 페이지 수**: 20+ 페이지

---

## 🎯 키워드 전략

### 주요 키워드
- 드론 촬영
- 항공촬영
- 드론 영상 제작
- 건설 현장 드론
- 드론 점검
- 3D 모델링
- 디지털 트윈
- 드론 관제
- 스마트 농업

### 지역 키워드
- 전남 드론 촬영
- 여수 드론 촬영
- 광주 드론 촬영
- 호남 드론 서비스

### 롱테일 키워드
- 건설 현장 항공 촬영
- 태양광 패널 드론 점검
- 농업용 드론 NDVI 분석
- 드론 3D 모델링 서비스

---

## 📝 콘텐츠 최적화 팁

### 1. 제목 (Title)
- 50-60자 이내
- 주요 키워드 포함
- 브랜드명 포함

### 2. 설명 (Description)
- 150-160자 이내
- 행동 유도 문구 포함
- 페이지 내용 요약

### 3. 헤딩 (Headings)
- H1: 페이지당 1개 (메인 제목)
- H2-H6: 논리적 계층 구조
- 키워드 자연스럽게 포함

### 4. 이미지
- 파일명: 설명적 이름 (예: `drone-aerial-photography.jpg`)
- Alt 텍스트: 이미지 설명 포함
- 최적화: WebP 포맷, 압축

### 5. 내부 링크
- 관련 페이지 연결
- 앵커 텍스트 명확하게
- 중요 페이지에 더 많은 링크

---

## 🔧 유지보수

### 정기 점검 (월 1회)
- [ ] Google Search Console 오류 확인
- [ ] 깨진 링크 검사
- [ ] 사이트맵 업데이트 확인
- [ ] 페이지 로딩 속도 측정
- [ ] 모바일 사용성 확인

### 콘텐츠 업데이트
- [ ] 신규 프로젝트 추가 시 사이트맵 자동 업데이트
- [ ] 서비스 페이지 정기 업데이트
- [ ] 블로그/뉴스 추가 (선택)

---

## 🔄 Sitemap 업데이트 방법

### 새 페이지 추가 시

새로운 페이지를 추가했다면 `/public/sitemap.xml`에 다음과 같은 형식으로 추가하세요:

```xml
<url>
  <loc>https://imdrone.site/your-new-page</loc>
  <lastmod>2024-12-19</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

### 새 프로젝트 추가 시

1. `/data/projects.ts`에 프로젝트 추가
2. `/public/sitemap.xml`에 프로젝트 URL 추가:

```xml
<url>
  <loc>https://imdrone.site/projects/project-id</loc>
  <lastmod>2024-12-19</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.7</priority>
</url>
```

3. `/app/site-map/page.tsx`는 자동으로 프로젝트 데이터를 읽으므로 별도 수정 불필요

### 우선순위 가이드

- `1.0`: 홈페이지
- `0.9`: 주요 페이지 (About, Projects 목록)
- `0.8`: 서비스, FAQ, Contact
- `0.7`: 프로젝트 상세, 팀원 상세
- `0.5`: 법적 문서 (Privacy, Terms)
- `0.4`: Sitemap

### 변경 빈도 가이드

- `daily`: 홈페이지
- `weekly`: 포트폴리오, 팀 페이지
- `monthly`: 서비스, About, FAQ, Contact
- `yearly`: Privacy, Terms, Sitemap

---

## 📞 문의

SEO 관련 추가 지원이 필요하시면:
- 이메일: imdrone.site@gmail.com
- 전화: 010-4790-6650

---

**마지막 업데이트**: 2024년 12월 19일

