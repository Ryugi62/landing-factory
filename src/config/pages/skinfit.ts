import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'skinfit',
  name: 'Skinfit',
  tagline: 'Your AI skin coach, not just an ingredient checker.',
  description: '피부 타입·생활습관·날씨를 분석해 오늘 내 피부에 맞는 루틴을 AI가 직접 설계해드립니다.',
  variant: 'warm',
  theme: {
    accent: 'rose',
    emoji: '✨',
  },
  hero: {
    badge: 'AI 뷰티 코치',
    title: '오늘 내 피부 상태에 딱 맞는',
    titleHighlight: 'AI 루틴',
    subtitle:
      '화해는 성분을 알려주지만, Skinfit은 오늘 내 컨디션에 맞는 루틴을 짜줍니다. 미세먼지, 수면 시간, 피부 고민까지 반영한 1:1 AI 스킨케어 코치.',
    cta: 'Join the waitlist',
  },
  problems: [
    {
      icon: '😵',
      title: '정보는 넘치는데 내 피부엔 뭐가 맞는지 모르겠음',
      desc: '화해, 유튜버, 지인 추천 다 달라서 결국 직접 다 써봐야 앎. 돈과 시간 낭비.',
    },
    {
      icon: '🌤️',
      title: '어제 루틴이 오늘도 맞을까?',
      desc: '미세먼지 심한 날, 수면 부족한 날, 생리 전후 피부 달라지는데 루틴은 항상 똑같음.',
    },
    {
      icon: '💸',
      title: '좋다는 거 다 사봤는데 효과 없음',
      desc: '성분은 좋은데 내 피부와 궁합이 안 맞는 조합이었을 수도. 제대로 된 조합을 모름.',
    },
  ],
  features: [
    {
      icon: '🤖',
      title: '5분 온보딩 → AI 맞춤 루틴',
      desc: '피부 타입, 고민, 생활 습관 입력 → GPT-4o가 이유 있는 아침/저녁 루틴 즉시 생성',
      badge: 'Most popular',
    },
    {
      icon: '🌡️',
      title: '오늘 컨디션 반영 스마트 업데이트',
      desc: '날씨·미세먼지·수면 기록 → "오늘은 진정 위주로" 루틴 자동 조정',
    },
    {
      icon: '🛒',
      title: '추천 제품 쿠팡 바로 연결',
      desc: '루틴에 맞는 제품 추천 + 쿠팡 최저가 링크 직접 연결. 성분 궁합 충돌 경고 포함.',
    },
  ],
  pricing: [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['피부 타입 분석', '기본 루틴 1개', '제품 3개 추천'],
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$9',
      period: '/month',
      features: ['무제한 루틴 생성', '날씨·수면 연동', '성분 궁합 체크', '쿠팡 최저가 연동', '계절 루틴 알림'],
      highlight: true,
    },
    {
      name: 'Premium',
      price: '$19',
      period: '/month',
      features: ['Pro 전체 포함', '월 1회 피부 전문가 Q&A', '제품 교체 알림', '우선 고객 지원'],
      highlight: false,
    },
  ],
  cta: {
    title: '내 피부를 아는 AI 코치, 지금 대기자로 등록하세요',
    subtitle: 'Join the waitlist. Be first when we launch.',
  },
  seo: {
    title: 'Skinfit — AI 맞춤 스킨케어 루틴 추천',
    description:
      '피부 타입, 생활습관, 날씨를 분석해 오늘 내 피부에 딱 맞는 스킨케어 루틴을 AI가 설계합니다.',
    keywords: ['화장품 추천 AI', '맞춤 화장품 추천', '피부 루틴 추천', 'AI 스킨케어', '피부 타입 분석'],
  },
}
