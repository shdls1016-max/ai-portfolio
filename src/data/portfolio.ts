export type WebProject = {
  title: string
  type: string
  target: string
  purpose: string
  role: string
  duration: string
  colors: string[]
  skills: string[]
  ai: string
  image: string
  url: string
}

export type GameProject = {
  title: string
  eyebrow: string
  description: string
  target: string
  features: string[]
  skills: string[]
  duration: string
  image: string
  characterImage?: string
  url: string
  reverse?: boolean
  theme: 'journey' | 'steps'
}

export type LandingProject = {
  title: string
  product: string
  target: string
  goal: string
  concept: string
  flow: string[]
  ai: string
  duration: string
  // 긴 랜딩페이지는 캡처 조각을 위에서부터 순서대로 추가합니다.
  // cropTop/cropBottom은 고정 요소와 중복 구간을 잘라낼 원본 픽셀 높이입니다.
  images: Array<{ src: string; cropTop?: number; cropBottom?: number; sourceWidth?: number; sourceHeight?: number }>
  url: string
}

export type CardNews = {
  title: string
  topic: string
  image: string
}

export type DetailProject = {
  title: string
  category: string
  target: string
  intent: string
  flow: string[]
  aiMode: string
  directWork: string[]
  duration: string
  image: string
}

export const aiTools = [
  { name: 'Ideogram', role: '이미지 생성', index: '01' },
  { name: 'Midjourney', role: '짧은 영상 생성', index: '02' },
  { name: 'Codex', role: '전체 작업 · 코드 · 이미지 생성', index: '03' },
  { name: 'Gemini', role: '기획 및 아이디어 정리', index: '04' },
  { name: 'Claude', role: '코드 생성 및 수정', index: '05' },
]

export const skills = [
  'FIGMA',
  'PHOTOSHOP',
  'HTML',
  'CSS',
  'JAVASCRIPT',
  'GITHUB',
  'VERCEL',
  'CLOUDFLARE',
]

// 새 웹 프로젝트 추가 방법:
// 아래 객체 하나를 복사한 뒤 텍스트, 이미지 경로, 링크만 교체하세요.
export const webProjects: WebProject[] = [
  {
    title: 'ÉLANE',
    type: 'Web Project · Fashion Store',
    target: '미니멀하고 감도 높은 스타일을 선호하는 20–30대 여성',
    purpose: '브랜드 룩북과 상품 탐색, 구매 흐름을 하나의 정제된 쇼핑 경험으로 연결했습니다.',
    role: '기획, 이미지 제작, UI 디자인, 퍼블리싱, 반응형 QA',
    duration: '약 2주',
    colors: ['#111111', '#666666', '#FAFAFA'],
    skills: ['HTML5', 'Cafe24', 'BEM CSS', 'JavaScript', 'Swiper'],
    ai: '브랜드 콘셉트와 콘텐츠 구조, 이미지 생성, 코드 작성 및 반복 검수에 AI를 활용했습니다.',
    image: '/images/projects/fashion-store.jpg',
    url: 'https://shdls1016-max.github.io/-fashion-store/index.html',
  },
  {
    title: 'VELUNE',
    type: 'Cafe24 Skin · Beauty',
    target: '트렌디한 메이크업과 새로운 컬러 제품에 관심이 많은 20–30대 여성',
    purpose: '발랄한 과일 콘셉트와 상품·메이크업 룩·리뷰 콘텐츠를 자연스럽게 연결했습니다.',
    role: '콘셉트, 이미지 제작, UI 디자인, 전체 화면 구현',
    duration: '약 2주',
    colors: ['#F55D73', '#FFFFFF', '#2B2B2B'],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Swiper', 'Cafe24'],
    ai: '콘셉트, 카피, 이미지와 코드 초안을 빠르게 만들고 직접 화면을 검수하며 수정했습니다.',
    image: '/images/projects/makeup-store.jpg',
    url: 'https://shdls1016-max.github.io/makeup/index.html',
  },
  {
    title: 'POMPOM ROOM',
    type: 'Cafe24 Skin · Interior',
    target: '자신만의 취향으로 작은 공간을 꾸미고 싶은 20–30대',
    purpose: '상품 나열을 넘어 공간별 스타일과 생활 장면을 함께 제안하는 인테리어 숍을 구성했습니다.',
    role: '콘텐츠 기획, 이미지 제작, UI 디자인, 반응형 구현',
    duration: '약 2주',
    colors: ['#9A86E8', '#FFFFFF', '#2F2F33'],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Swiper', 'IntersectionObserver'],
    ai: '타깃과 무드에 맞는 섹션 구성, 카피, 이미지 생성과 코드 구현에 AI를 활용했습니다.',
    image: '/images/projects/interior-store.jpg',
    url: 'https://shdls1016-max.github.io/Interior/01_pompom_room_shop/',
  },
  {
    title: 'FORME',
    type: 'Cafe24 Skin · Furniture',
    target: '첫 공간을 꾸미는 20–30대 신혼부부와 소형 주거 사용자',
    purpose: '다양한 생활환경에 자연스럽게 어울리는 가구와 실제 공간 활용 장면을 함께 보여줍니다.',
    role: '기획, 이미지 제작, 퍼블리싱, 서브페이지 및 반응형 제작',
    duration: '약 5일',
    colors: ['#2456D8', '#FFFFFF', '#ECEFF3'],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Swiper', 'GitHub Pages'],
    ai: '콘텐츠 구조 분석부터 카피, 이미지 생성, 코드 작성과 브라우저별 검수까지 AI와 협업했습니다.',
    image: '/images/projects/furniture-store.jpg',
    url: 'https://shdls1016-max.github.io/furniture/',
  },
]

export const games: GameProject[] = [
  {
    title: 'Crossing Journey',
    eyebrow: '03 · WEB APP · GAME 01',
    description: '귀여운 동물 캐릭터와 함께 20개의 스테이지를 통과하는 모바일 퍼스트 캐주얼 게임입니다.',
    target: '직관적인 조작과 짧은 플레이를 선호하는 모바일 사용자',
    features: ['20개 스테이지와 4개 테마', '캐릭터 구매·선택·성장', '코인 및 최고 기록 저장', '모바일·PC 반응형 UI'],
    skills: ['Phaser 3.90', 'TypeScript', 'Vite', 'Cloudflare Pages'],
    duration: '약 6일 · 40–50시간',
    image: '/images/projects/crossing-journey-mobile.png',
    characterImage: '/images/projects/crossing-character.png',
    url: 'https://b202250a.crossing-journey.pages.dev/',
    theme: 'journey',
  },
  {
    title: 'STARBOUND STEPS',
    eyebrow: 'WEB APP · GAME 02',
    description: '좌우 방향을 판단해 끝없이 이어지는 계단을 오르는 반응형 아케이드 게임입니다.',
    target: '짧은 시간에 최고 기록에 도전하는 캐주얼 게임 사용자',
    features: ['좌우 입력과 방향 전환', '콤보·시간 제한·최고 기록', '높이에 따라 변하는 배경', 'LocalStorage 설정 저장'],
    skills: ['React 19', 'Next.js 16', 'TypeScript', 'Cloudflare Workers'],
    duration: '약 2일 · 25시간',
    image: '/images/projects/starbound-steps-mobile.png',
    url: 'https://stairs.shdls1016.workers.dev/',
    reverse: true,
    theme: 'steps',
  },
]

export const landingProjects: LandingProject[] = [
  {
    title: 'VERDANT 23',
    product: '프리미엄 데일리 멀티비타민',
    target: '여러 영양제를 챙기기 번거롭고 일상의 피로와 체력 저하를 느끼는 20–40대 직장인',
    goal: '23가지 핵심 성분과 하루 한 번의 편리함을 빠르게 이해시키고 첫 구매로 연결하는 전환형 랜딩페이지입니다.',
    concept: '포레스트 그린을 중심으로 건강함과 신뢰감을 전달하고, 오렌지 CTA로 구매 행동을 선명하게 안내했습니다.',
    flow: ['문제 공감', '일반 제품 비교', '23가지 성분', '사용자 후기', '첫 구매 혜택'],
    ai: '기획, 카피, 이미지, 코드 제작 전반에 AI를 활용하고 브라우저에서 직접 검수했습니다.',
    duration: '약 3일',
    images: [
      { src: '/images/projects/landing-vitamin-01.png', cropBottom: 100, sourceWidth: 2200, sourceHeight: 900 },
      { src: '/images/projects/landing-vitamin-02.png', cropTop: 100, cropBottom: 100, sourceWidth: 2200, sourceHeight: 900 },
      { src: '/images/projects/landing-vitamin-03.png', cropTop: 100, cropBottom: 100, sourceWidth: 2200, sourceHeight: 900 },
      { src: '/images/projects/landing-vitamin-04.png', cropTop: 100, cropBottom: 100, sourceWidth: 2200, sourceHeight: 900 },
      { src: '/images/projects/landing-vitamin-05.png', cropTop: 100, cropBottom: 100, sourceWidth: 2200, sourceHeight: 900 },
      { src: '/images/projects/landing-vitamin-06.png', cropTop: 100, cropBottom: 100, sourceWidth: 2200, sourceHeight: 900 },
      { src: '/images/projects/landing-vitamin-07.png', cropTop: 100, cropBottom: 100, sourceWidth: 2200, sourceHeight: 900 },
      { src: '/images/projects/landing-vitamin-08.png', cropTop: 100, cropBottom: 100, sourceWidth: 2200, sourceHeight: 900 },
      { src: '/images/projects/landing-vitamin-09.png', cropTop: 100, cropBottom: 100, sourceWidth: 2200, sourceHeight: 900 },
    ],
    url: 'https://shdls1016-max.github.io/landing-vitamin/',
  },
  {
    title: '하루한칸 영어',
    product: '성인 초보자를 위한 하루 10분 영어 학습지',
    target: '영어 공부를 꾸준히 실천하기 어려웠던 20–50대 직장인·자영업자',
    goal: '실패 원인을 의지 부족이 아닌 과도한 학습 부담으로 재정의하고 상담과 학습 신청으로 연결했습니다.',
    concept: '충분한 여백과 정돈된 네이비, 아날로그 오렌지를 사용해 전문성과 편안함을 함께 표현했습니다.',
    flow: ['공감 메시지', '학습 부담 진단', '10분 루틴', '기존 공부 비교', '후기', 'FAQ와 신청'],
    ai: '콘텐츠 구조와 카피, 이미지, 코드 초안에 AI를 활용하고 화면 흐름과 전환 지점을 직접 조정했습니다.',
    duration: '약 4일',
    images: [
      { src: '/images/projects/landing-english-01.png', sourceWidth: 2200, sourceHeight: 900 },
      { src: '/images/projects/landing-english-02.png', cropTop: 200, sourceWidth: 2200, sourceHeight: 900 },
      { src: '/images/projects/landing-english-03.png', cropTop: 200, sourceWidth: 2200, sourceHeight: 900 },
      { src: '/images/projects/landing-english-04.png', cropTop: 200, sourceWidth: 2200, sourceHeight: 900 },
      { src: '/images/projects/landing-english-05.png', cropTop: 200, sourceWidth: 2200, sourceHeight: 900 },
      { src: '/images/projects/landing-english-06.png', cropTop: 200, sourceWidth: 2200, sourceHeight: 900 },
      { src: '/images/projects/landing-english-07.png', cropTop: 200, sourceWidth: 2200, sourceHeight: 900 },
      { src: '/images/projects/landing-english-08.png', cropTop: 200, sourceWidth: 2200, sourceHeight: 900 },
      { src: '/images/projects/landing-english-09.png', cropTop: 200, sourceWidth: 2200, sourceHeight: 900 },
      { src: '/images/projects/landing-english-10.png', cropTop: 302, sourceWidth: 2200, sourceHeight: 900 },
    ],
    url: 'https://shdls1016-max.github.io/landing-studyEng/',
  },
]

export const wideBanners = [
  'W01_호텔스테이_600x250.png', 'W02_워터파크_600x250.png', 'W03_가을기차여행_600x250.png',
  'W05_노트북_600x250.png', 'W06_모듈소파_600x250.png', 'W07_창의교육_600x250.png',
  'W10_가족보험_600x250.png', 'W11_치킨데이_600x250.png', 'W12_패션시즌오프_600x250.png',
  'W13_해변음악축제_600x250.png', 'W14_영어학습_600x250.png', 'W16_전기차충전_600x250.png',
  'W18_미술전시_600x250.png', 'W19_러닝화_600x250.png',
]

export const posters = [
  'P01_제주여행_500x600.png', 'P03_스페셜티커피_500x600.png', 'P05_도시패션_500x600.png',
  'P07_친환경라이프_500x600.png', 'P09_오마카세_500x600.png', 'P12_떡볶이_500x600.png',
  'P13_글램핑_500x600.png', 'P16_반려동물_500x600.png', 'P17_트로피컬음료_500x600.png',
  'P19_재테크_500x600.png',
]

export const cardNews: CardNews[] = [
  { title: '치아가 안 아픈데도 치료해야 할 수 있다?', topic: '충치 · 예방관리', image: '/images/card-news/cavity-progress.jpg' },
  { title: '흔들리는 임플란트, 왜 그럴까요?', topic: '임플란트 관리', image: '/images/card-news/implant-care.jpg' },
  { title: '치과 팩트체크', topic: '치과 상식 · 팩트체크', image: '/images/card-news/dental-factcheck.jpg' },
  { title: '양치 열심히 하는데 왜 충치가 생길까?', topic: '충치 · 구강관리', image: '/images/card-news/brushing-cavity.jpg' },
  { title: '찬물 마실 때 이가 시린 이유는?', topic: '시린이 · 치아 민감증', image: '/images/card-news/cold-sensitivity.jpg' },
  { title: '사랑니, 꼭 뽑아야 할까요?', topic: '사랑니 · 발치', image: '/images/card-news/wisdom-tooth.jpg' },
  { title: '나에게 맞는 스케일링 주기는?', topic: '스케일링 · 예방관리', image: '/images/card-news/scaling.jpg' },
  { title: '피가 나는 잇몸, 괜찮은 걸까요?', topic: '잇몸 출혈 · 잇몸질환', image: '/images/card-news/gum-bleeding.jpg' },
]

export const cardNewsBlogUrl = 'https://blog.naver.com/study_log25/224337956116'

export const detailProjects: DetailProject[] = [
  {
    title: 'NUVIA FRESH',
    category: '휴대용 블렌더 상세페이지',
    target: '바쁜 아침에도 간편하게 건강 음료를 만들고 싶은 직장인과 1인 가구',
    intent: '사용의 간편함, 블렌딩 성능, 휴대성과 세척 편의성을 짧고 명확한 구매 흐름으로 구성했습니다.',
    flow: ['아침 식사 고민', '4단계 사용법', '성능과 칼날', '휴대성', '간편 세척', '제품 규격'],
    aiMode: 'AI Full Generation',
    directWork: ['제품 콘셉트 검토', '판매 흐름 확인', '최종 결과물 선별'],
    duration: '1시간 이내',
    image: '/images/detail-pages/portable-blender.webp',
  },
  {
    title: '24H MOISTURE LOCK-IN',
    category: '히알루론산 수분크림 상세페이지',
    target: '피부 속당김과 건조함을 고민하는 소비자',
    intent: 'AI가 만든 와이어프레임과 메인 이미지 일부만 남기고, 정보 구조와 섹션 디자인 대부분을 Figma에서 다시 구성해 수분 지속력과 피부 변화가 명확하게 읽히도록 완성했습니다.',
    flow: ['핵심 효능', '피부 고민', '수분 기술', '원료', '사용 경험', '구매 제안'],
    aiMode: 'AI Wireframe + Figma Reconstruction',
    directWork: ['정보 구조 재구성', '섹션 디자인 재제작', '타이포그래피 전면 수정', '메인 이미지 선별·재배치', '컬러·정렬 체계 통일', '구매 흐름 최종 편집'],
    duration: '약 2일',
    image: '/images/detail-pages/moisture-cream.webp',
  },
  {
    title: 'ERGONOMIC OFFICE CHAIR',
    category: '인체공학 사무용 의자 상세페이지',
    target: '장시간 컴퓨터를 사용하는 직장인, 학생과 재택근무자',
    intent: 'AI가 제안한 기획, 디자인 무드와 이미지를 바탕으로 기본 흐름을 유지하며 Figma에서 화면을 정리하고, 제품 장점이 빠르게 읽히도록 완성도를 높였습니다.',
    flow: ['착석 문제', '사용 장면', '맞춤 조절', '소재와 내구성', '사용자 후기', '제품 규격'],
    aiMode: 'AI Direction + Figma Refinement',
    directWork: ['깨진 이미지 보완', '폰트 크기 보정', '정렬 체계 수정', '과도한 정보 삭제', '이미지 위치 조정'],
    duration: '약 1–2일',
    image: '/images/detail-pages/office-chair.webp',
  },
]
