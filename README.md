# 포트폴리오

AI로 가능성을 넓히고 디자인과 코드로 완성하는 **AI-Assisted Web & Visual Designer** 포트폴리오입니다.

## 기술 구성

- React + TypeScript + Vite
- 일반 CSS와 CSS 변수
- GSAP ScrollTrigger: 웹 프로젝트 가로 스크롤
- Embla Carousel: 랜딩페이지·상세페이지 슬라이드
- Lucide React: 공통 아이콘
- GitHub Actions: GitHub Pages 자동 배포

## 실행 방법

```bash
npm install
npm run dev
```

배포용 파일을 확인하려면 다음 명령을 실행합니다.

```bash
npm run build
```

## 콘텐츠 수정 위치

대부분의 텍스트와 작업물 데이터는 `src/data/portfolio.ts`에서 수정할 수 있습니다.

```ts
// 새 웹 프로젝트를 추가하는 예시입니다.
// 기존 객체를 복사한 뒤 각 항목만 교체하세요.
{
  title: '새 프로젝트',
  type: 'Web Project',
  target: '주요 타깃',
  purpose: '프로젝트 목적',
  role: '담당 범위',
  duration: '제작 기간',
  colors: ['#111111', '#ffffff'],
  skills: ['HTML', 'CSS', 'JavaScript'],
  ai: 'AI 활용 범위',
  image: '/images/projects/example.png',
  url: 'https://example.com',
}
```

## 이미지 추가 방법

이미지를 아래 폴더에 넣고 `src/data/portfolio.ts`의 경로를 수정합니다.

```text
public/images/projects/       웹·게임·랜딩페이지
public/images/banners/wide/   가로 배너
public/images/banners/poster/ 세로 포스터
public/images/card-news/      카드뉴스 표지
public/images/detail-pages/   긴 상세페이지 이미지
```

긴 상세페이지는 WebP 사용을 권장합니다. 가로 너비 750~1000px 정도면 화면 표시와 로딩 속도의 균형이 좋습니다.

## 디자인 수정 위치

`src/styles.css` 상단의 CSS 변수를 변경하면 전체 색상과 글자 크기를 한 번에 수정할 수 있습니다.

```css
:root {
  --color-bg: #ffffff;
  --color-text-primary: #20242b;
  --color-text-secondary: #444b55;
  --color-text-tertiary: #68707c;
  --color-accent: #2563eb;
}
```

## 연락처 수정

`src/App.tsx`의 `Contact` 컴포넌트에서 이메일, 카카오톡, 블로그와 GitHub 주소를 변경할 수 있습니다.

## GitHub Pages

`main` 브랜치에 푸시하면 `.github/workflows/deploy.yml`이 자동으로 빌드하고 GitHub Pages에 배포합니다. 저장소의 **Settings → Pages → Source**가 `GitHub Actions`로 설정되어 있어야 합니다.
