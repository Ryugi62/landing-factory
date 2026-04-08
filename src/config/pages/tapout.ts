import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'tapout',
  name: 'Tapout',
  tagline: '태깅 한 번으로 집이 꺼진다',
  description: '출근 전 앱 4개 여는 시간 끝. NFC 태그 하나로 조명·에어컨·도어락·테슬라를 동시에 제어하세요.',
  variant: 'bold',
  theme: {
    accent: 'indigo',
    emoji: '🏠',
  },
  hero: {
    badge: '스마트홈 자동화',
    title: '출근 전 앱 4개 여는 거',
    titleHighlight: '이제 그만',
    subtitle: '현관 NFC 태그 하나. 조명·에어컨·도어락·테슬라 동시 종료. 락스크린에서도 작동.',
    cta: 'Join the waitlist',
    layout: 'split',
  },
  trustBadges: [
    'SmartThings·HomeKit 연동',
    '설정 5분',
    'NFC 태그 500원',
  ],
  problems: [
    { icon: '📱', title: '앱 4개 열기', desc: '에어컨 앱, 조명 앱, 도어락 앱, 테슬라 앱. 출근 전 매일 반복' },
    { icon: '😰', title: '껐는지 불안', desc: '사무실 도착 후 에어컨 켠 채로 나온 것 같아서 다시 앱 열기' },
    { icon: '🔄', title: '단축어 설정 포기', desc: 'SmartThings 연동에서 막히고, 아이폰 바꾸면 다시 처음부터' },
  ],
  features: [
    { icon: '⚡', title: '루틴 빌더', desc: 'SmartThings·HomeKit·Hue 액션을 드래그앤드롭으로 묶기. 설정 5분', badge: '핵심 기능' },
    { icon: '📶', title: 'NFC 태그 등록', desc: '500원짜리 NFC 스티커를 앱으로 프로그래밍. 이후 락스크린에서 태깅만' },
    { icon: '☁️', title: '클라우드 동기화', desc: '아이폰 교체해도 루틴 그대로. 가족과 루틴 공유 가능' },
  ],
  pricing: [
    { name: 'Free', price: '₩0', period: 'forever', features: ['NFC 태그 1개', '루틴 1개', '연동 2개'], highlight: false },
    { name: 'Pro', price: '₩9,900', period: '일회성', features: ['무제한 태그·루틴', '모든 플랫폼 연동', '클라우드 동기화', '루틴 공유'], highlight: true },
    { name: '오브제 번들', price: '₩59,000', period: '(추후 출시)', features: ['디자이너 NFC 오브제', 'Pro 포함', '인테리어 감성'], highlight: false },
  ],
  cta: {
    title: '앱 열지 않는 스마트홈을 먼저 경험하세요',
    subtitle: '대기자 등록하고 출시 알림을 받으세요.',
    reasons: ['NFC 태그 1개 무료 제공', '얼리어답터 50% 할인', '설정 가이드 무료'],
  },
  productPreview: {
    title: '퇴근 루틴 — 현관 태그',
    subtitle: '태그 한 번으로 5개 기기 동시 제어',
    items: [
      { label: '거실 조명', value: '꺼짐' },
      { label: '에어컨', value: '꺼짐' },
      { label: '도어락', value: '잠금', highlight: true },
      { label: '테슬라 공조', value: '24°C 예열 시작', highlight: true },
      { label: '실행 시간', value: '0.8초 — 락스크린에서 태깅', highlight: true },
    ],
  },
  howItWorks: [
    { step: 1, title: 'NFC 태그 등록', description: '500원짜리 NFC 스티커를 앱으로 프로그래밍. 현관, 침실, 차 안 어디든 부착.' },
    { step: 2, title: '루틴 설정', description: 'SmartThings·HomeKit·Hue 액션을 드래그앤드롭으로 묶기. 5분이면 완료.' },
    { step: 3, title: '태깅 한 번으로 실행', description: '스마트폰을 NFC 태그에 대면 루틴이 즉시 실행. 락스크린에서도 작동.' },
  ],
  comparison: {
    heading: '왜 아이폰 단축어가 아닌 Tapout인가요?',
    subtitle: '단축어는 설정이 복잡하고, 폰 바꾸면 다시 처음부터. Tapout은 5분 설정, 클라우드 백업.',
    product: 'Tapout',
    competitors: ['아이폰 단축어', 'SmartThings 앱', '구글 홈'],
    rows: [
      { feature: 'NFC 태그 지원', values: [true, true, false, false] },
      { feature: '설정 시간', values: ['5분', '30분+', '15분', '15분'] },
      { feature: '클라우드 백업', values: [true, false, true, true] },
      { feature: '크로스 플랫폼 통합', values: [true, false, false, false] },
      { feature: '락스크린 실행', values: [true, true, false, false] },
      { feature: '가격', values: ['₩9,900 일회성', '무료', '무료', '무료'] },
    ],
  },
  founderNote: {
    quote: '매일 출근 전 앱 4개를 열어서 하나씩 끄는 게 미치도록 귀찮았어요. 현관에 NFC 태그 하나면 끝나는 세상을 만들고 싶었습니다.',
    author: 'Tapout 팀',
    role: '스마트홈 유저가 직접 개발',
  },
  testimonial: {
    quote: '현관에 태그 하나 붙이고 나서 에어컨 끄는 걸 잊어버린 적이 없어요. 설정도 5분이면 끝.',
    author: '박승현',
    role: '1인 가구, 스마트홈 초보자',
  },
  faq: [
    { question: 'NFC 태그는 별도 구매인가요?', answer: '네. 편의점이나 온라인에서 500원~1,000원에 구매 가능합니다. 일반 NFC 스티커면 모두 호환됩니다.' },
    { question: 'SmartThings와 HomeKit 동시에 되나요?', answer: '네. Tapout은 SmartThings, HomeKit, Philips Hue를 하나의 루틴으로 묶을 수 있습니다.' },
    { question: '아이폰 바꿔도 설정이 유지되나요?', answer: '네. 클라우드 동기화가 기본 제공되어 새 폰에서 로그인하면 모든 루틴이 그대로 복원됩니다.' },
    { question: '안드로이드도 되나요?', answer: '안드로이드는 NFC 태깅이 기본 지원됩니다. iOS와 동일하게 락스크린 태깅으로 루틴을 실행할 수 있습니다.' },
  ],
  seo: {
    title: 'Tapout — NFC 태깅 한 번으로 집이 꺼진다',
    description: '조명·에어컨·도어락·테슬라를 NFC 태그 하나로 동시 제어. iOS 단축어보다 5분 설정, 클라우드 동기화.',
    keywords: ['NFC 스마트홈', '퇴근 루틴 자동화', 'NFC home automation'],
  },
}
