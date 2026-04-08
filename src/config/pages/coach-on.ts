import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'coach-on',
  name: '코치온',
  tagline: '회원을 일일이 쫓지 않아도 체크인이 돌아가는 코치 자동화 OS',
  description: '온라인 코치를 위한 체크인 자동화 솔루션. 카카오 알림톡으로 자동 발송, 미응답 대시보드로 한눈에 파악, AI 코멘트 어시스트로 30초 만에 답장.',
  variant: 'bold',
  theme: { accent: 'blue', emoji: '📋' },
  hero: {
    badge: '온라인 코치 체크인 자동화',
    title: '회원 30명 체크인에 매일 2시간 쓰는 건',
    titleHighlight: '이제 끝',
    subtitle: '설정 30분이면 체크인 발송부터 미응답 추적, AI 코멘트까지 전부 자동. 코치가 할 일은 대시보드 확인 15분뿐.',
    cta: '무료로 시작하기',
    layout: 'split',
  },
  trustBadges: ['카카오 알림톡 연동', '설정 30분이면 끝', '언제든 해지 가능'],
  problems: [
    { icon: '😩', title: '아침마다 DM 30개 확인', desc: '누가 응답했는지, 누가 안 했는지 카카오톡 뒤지는 데 2시간이 사라집니다.' },
    { icon: '📊', title: '미응답 회원 추적 불가', desc: '3일째 체크인 안 한 회원을 스프레드시트 뒤져야 알 수 있는 상황.' },
    { icon: '💬', title: '답장 하나하나 직접 작성', desc: '30명에게 각각 피드백 코멘트 쓰다 보면 진짜 코칭 할 에너지가 남지 않습니다.' }
  ],
  features: [
    { icon: '🔔', title: '스마트 체크인 자동 발송', desc: '카카오 알림톡 또는 이메일로 설정한 주기마다 자동 발송. 회원은 링크 클릭 한 번으로 30초 내 응답 완료.', badge: '핵심 기능' },
    { icon: '📋', title: '미응답 대시보드 + 원터치 리마인더', desc: '오늘 응답 현황 한눈에 확인, 미응답 회원에게 리마인더 1클릭 발송.' },
    { icon: '🤖', title: 'AI 코멘트 어시스트', desc: '회원 응답을 AI가 요약하고 코멘트 초안을 자동 생성. 1명당 30초면 충분.' }
  ],
  pricing: [
    { name: '무료 체험', price: '₩0', period: '14일', features: ['최대 10명 회원', '자동 발송 + 대시보드', '이메일 알림'], highlight: false },
    { name: '스타터', price: '₩29,000', period: '/월', features: ['최대 30명 회원', '카카오 알림톡 발송', '미응답 추적 + 리마인더', '응답 이력 관리'], highlight: false },
    { name: '프로', price: '₩49,000', period: '/월', features: ['최대 100명 회원', 'AI 코멘트 어시스트', '이탈 위험 회원 자동 플래그', '우선 지원'], highlight: true },
    { name: '비즈니스', price: '₩89,000', period: '/월', features: ['회원 무제한', '화이트레이블', '팀 계정 (3명)', '전담 온보딩'], highlight: false }
  ],
  cta: {
    title: '체크인 자동화, 오늘부터 시작하세요',
    subtitle: '얼리어답터 등록 시 3개월 50% 할인.',
    reasons: ['얼리어답터 3개월 50% 할인', '설정 도움 무료 제공', '첫 14일 무료 체험'],
  },
  productPreview: {
    title: '오늘의 체크인 현황 — 김코치',
    subtitle: '회원 28명 중 24명 응답 완료',
    items: [
      { label: '이수진 회원', value: '체크인 완료 — 식단 사진 포함' },
      { label: '박민수 회원', value: '미응답 3일째 — 리마인더 발송됨', highlight: true },
      { label: '최지영 회원', value: '체크인 완료 — AI 코멘트 준비됨' },
      { label: '오늘 응답률', value: '85% (24/28명)', highlight: true },
      { label: '이번 주 평균', value: '91% — 지난주 대비 +6%', highlight: true },
    ],
  },
  howItWorks: [
    { step: 1, title: '체크인 폼 설정', description: '질문 항목을 설정하고 발송 주기를 정합니다. 30분이면 완료.' },
    { step: 2, title: '카카오 자동 발송', description: '설정한 시간에 회원에게 카카오 알림톡이 자동 발송됩니다.' },
    { step: 3, title: '대시보드에서 한눈에 관리', description: '응답 현황, 미응답 회원, AI 코멘트 초안을 대시보드에서 확인.' },
  ],
  comparison: {
    heading: '왜 카카오톡 단톡방이 아닌 코치온인가요?',
    subtitle: '단톡방은 메시지가 묻힙니다. 스프레드시트는 업데이트가 안 됩니다. 코치온은 자동입니다.',
    product: '코치온',
    competitors: ['카카오 단톡방', '구글 스프레드시트', 'Trainerize'],
    rows: [
      { feature: '자동 체크인 발송', values: [true, false, false, true] },
      { feature: '미응답 자동 추적', values: [true, false, false, true] },
      { feature: 'AI 코멘트 생성', values: [true, false, false, false] },
      { feature: '카카오 알림톡', values: [true, true, false, false] },
      { feature: '회원 이력 관리', values: [true, false, true, true] },
      { feature: '가격', values: ['₩29,000/월', '무료', '무료', '$30+/월'] },
    ],
  },
  founderNote: {
    quote: '온라인 코칭 3년 하면서 매일 아침 2시간을 DM 확인에 썼습니다. 그 시간을 진짜 코칭에 쓰고 싶어서 코치온을 만들었습니다.',
    author: '코치온 팀',
    role: '현직 온라인 코치가 직접 개발',
  },
  testimonial: {
    quote: '30명 관리하는데 매일 아침 2시간이 15분으로 줄었어요.',
    author: '이준형 코치',
    role: '온라인 PT 코치, 회원 32명',
  },
  faq: [
    { question: '카카오 알림톡 비용이 별도로 드나요?', answer: '기본 플랜에 월 300건 알림톡이 포함되어 있습니다.' },
    { question: '회원이 앱을 설치해야 하나요?', answer: '아니요. 카카오 알림톡 링크를 클릭하면 브라우저에서 바로 체크인할 수 있습니다.' },
    { question: 'AI 코멘트가 자연스러운가요?', answer: '회원의 체크인 내용을 분석해서 맥락에 맞는 코멘트를 생성합니다. 수정하거나 그대로 전송 가능합니다.' },
    { question: '기존 회원 데이터를 옮길 수 있나요?', answer: '엑셀/CSV 파일로 회원 정보를 일괄 등록할 수 있습니다.' },
  ],
  seo: {
    title: '코치온 — 온라인 코치 체크인 자동화 OS',
    description: '온라인 코치를 위한 체크인 자동화 솔루션. 카카오 알림톡 자동 발송, 미응답 대시보드, AI 코멘트 어시스트.',
    keywords: ['온라인 코치 관리', '코칭 체크인 자동화', '헬스 코치 회원 관리', '다이어트 코치 앱', '코치 CRM', '퍼스널트레이닝 관리'],
  },
}
