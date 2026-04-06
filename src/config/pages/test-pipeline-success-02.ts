import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'test-pipeline-success-02',
  name: 'FocusJot',
  tagline: '흩어진 메모를 AI가 정리해 오늘 집중할 것만 보여주는 도구',
  description: '아이디어, 할 일, 실험 메모를 한 곳에 던져두면 AI가 자동으로 분류하고 오늘 집중할 것 top 3를 뽑아줍니다. 노션보다 단순하고 Keep보다 똑똑한 개인 프로젝트 정리 도구.',
  variant: 'bold',
  theme: {
    accent: 'indigo',
    emoji: '🗂️',
  },
  hero: {
    badge: 'AI 메모 정리',
    title: '흩어진 메모,',
    titleHighlight: 'AI가 정리해줍니다',
    subtitle: '아무렇게나 메모해도 AI가 분류하고 오늘 집중할 것만 보여줍니다. 가입 없이 30초 시작.',
    cta: 'Join the waitlist',
  },
  problems: [
    {
      icon: '📱',
      title: '메모가 3군데에 분산',
      desc: '카카오톡, 노션, 구글 킵에 흩어져 어제 적은 아이디어를 찾는 데 30분이 걸립니다.',
    },
    {
      icon: '😩',
      title: '뭘 먼저 해야 할지 모름',
      desc: '아이디어는 20개인데 오늘 뭘 할지 결정하는 것 자체가 일이 되어버립니다.',
    },
    {
      icon: '🗃️',
      title: '정리하다 지침',
      desc: '주말에 한꺼번에 정리하려다 결국 포기. 메모 앱이 오히려 짐이 됩니다.',
    }
  ],
  features: [
    {
      icon: '🤖',
      title: 'AI 자동 분류',
      desc: '아무렇게나 붙여넣어도 프로젝트/업무/아이디어로 자동 분류됩니다.',
      badge: 'Most popular',
    },
    {
      icon: '🎯',
      title: '오늘의 집중 아이템',
      desc: '긴급도와 중요도 기준으로 지금 바로 해야 할 것 top 3를 AI가 추천합니다.',
    },
    {
      icon: '⚡',
      title: '30초 빠른 시작',
      desc: '가입 없이 즉시 시작. 메모 붙여넣기 → AI 정리 → 완료. 3단계 이상 없습니다.',
    }
  ],
  pricing: [
    {
      name: 'Free',
      price: '₩0',
      period: 'forever',
      features: ['메모 30개', '기본 AI 분류', '일주일 히스토리'],
      highlight: false,
    },
    {
      name: 'Solo',
      price: '₩7,900',
      period: '/month',
      features: ['메모 무제한', 'AI 우선순위 추천', '캘린더 연동', '무제한 히스토리'],
      highlight: true,
    },
    {
      name: 'Pro',
      price: '₩15,900',
      period: '/month',
      features: ['Solo 전체 기능', '팀 공유 (5명)', 'API 접근', '우선 지원'],
      highlight: false,
    }
  ],
  cta: {
    title: '지금 대기자 등록하고 첫 번째 사용자가 되세요',
    subtitle: 'Join the waitlist. Be first when we launch.',
  },
  seo: {
    title: 'FocusJot — AI 메모 정리 도구 | 오늘 집중할 것만 보여줍니다',
    description: '흩어진 메모를 AI가 자동 분류하고 오늘 집중할 것 top 3를 추천합니다. 개인 프로젝트 운영자를 위한 단순하고 스마트한 메모 정리 도구.',
    keywords: ['AI 메모 앱', '개인 프로젝트 정리 앱', '할 일 우선순위 자동 정렬'],
  },
}
