import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'hwpdrop',
  name: 'HWPDrop',
  tagline: '한글 파일을 PDF로, 드래그 한 번으로',
  description: '카카오톡에서 받은 hwp 파일을 30초 만에 PDF로 변환. 회원가입 불필요, 파일 30분 후 완전 삭제.',
  variant: 'minimal',
  theme: {
    accent: 'blue',
    emoji: '📄',
  },
  hero: {
    badge: 'HWP 변환 도구',
    title: '한글 파일, 드래그 한 번으로',
    titleHighlight: 'PDF 완성',
    subtitle: '회원가입 없이 30초. 카카오톡 첨부파일도 바로 변환. 업로드 30분 후 파일 완전 삭제.',
    cta: '지금 무료로 변환하기',
    layout: 'split',
  },
  trustBadges: [
    '회원가입 불필요',
    '30분 후 파일 완전 삭제',
    '모바일 최적화',
  ],
  problems: [
    { icon: '😤', title: '스마트폰으로 hwp 파일이 안 열려요', desc: '학교 가정통신문, 공공기관 서류... 한글 파일은 스마트폰에서 열 수가 없어요.' },
    { icon: '⏱️', title: '구글 드라이브 변환은 너무 복잡해요', desc: '업로드 → 문서로 열기 → PDF 저장... 3단계가 필요하고 폰트가 깨지기도 해요.' },
    { icon: '🔒', title: '개인 서류를 외부 서버에 올리기 불안해요', desc: '주민등록등본, 학교 개인정보 서류... 어디로 가는지 모르는 서버에 올리기 꺼려져요.' }
  ],
  features: [
    { icon: '⚡', title: '30초 즉시 변환', desc: '파일 드래그앤드롭 → 30초 내 완벽한 PDF 다운로드. 회원가입·이메일 전혀 불필요.', badge: '가장 빠름' },
    { icon: '📱', title: '모바일 완벽 지원', desc: '카카오톡 첨부파일 → 직접 HWPDrop으로 공유 → 즉시 PDF 저장. 3탭으로 끝.' },
    { icon: '🛡️', title: '보안 보장', desc: '업로드 후 30분 내 파일 완전 삭제. 개인정보 미수집. 변환 이력 저장 없음.' }
  ],
  pricing: [
    { name: '무료', price: '₩0', period: 'forever', features: ['일 3건 변환', '파일 10MB 이하', '광고 표시'], highlight: false },
    { name: '스마트', price: '₩4,900', period: '/month', features: ['무제한 변환', '파일 50MB', '광고 없음', '일괄 변환 5개'], highlight: true },
    { name: '패밀리', price: '₩9,900', period: '/month', features: ['무제한 변환', '클라우드 저장 30일', '카카오톡 봇 연동', '우선 변환'], highlight: false }
  ],
  cta: {
    title: '지금 바로 무료로 시작하세요',
    subtitle: '대기자 등록하고 출시 첫날 알림 받기.',
    reasons: ['일 3건 무료 변환', '개인정보 미수집', '출시 알림 + 얼리어답터 할인'],
  },
  productPreview: {
    title: '변환 결과 — 가정통신문.hwp',
    subtitle: '28초 만에 완벽한 PDF 변환 완료',
    items: [
      { label: '원본', value: '가정통신문_2학기.hwp (2.3MB)' },
      { label: '변환 결과', value: 'PDF 완성 — 폰트·표·이미지 100% 보존', highlight: true },
      { label: '소요 시간', value: '28초', highlight: true },
      { label: '보안', value: '30분 후 서버에서 완전 삭제' },
      { label: '다운로드', value: '바로 저장 가능 — 이메일 불필요', highlight: true },
    ],
  },
  howItWorks: [
    { step: 1, title: '파일 드래그앤드롭', description: '카카오톡에서 받은 hwp 파일을 그대로 올려주세요. 모바일에서는 공유 버튼으로 바로 전송.' },
    { step: 2, title: '30초 자동 변환', description: '폰트, 표, 이미지를 그대로 살려서 완벽한 PDF로 변환합니다.' },
    { step: 3, title: 'PDF 바로 다운로드', description: '변환된 PDF를 즉시 저장. 회원가입 없이, 이메일 입력 없이 바로 사용.' },
  ],
  comparison: {
    heading: '왜 구글 드라이브가 아닌 HWPDrop인가요?',
    subtitle: '구글 드라이브는 3단계에 폰트가 깨집니다. HWPDrop은 드래그 한 번에 완벽합니다.',
    product: 'HWPDrop',
    competitors: ['구글 드라이브', '한컴오피스', 'smallpdf'],
    rows: [
      { feature: '변환 시간', values: ['30초', '2-3분', '설치 필요', '1분'] },
      { feature: '폰트 보존', values: [true, false, true, false] },
      { feature: '회원가입 불필요', values: [true, false, false, false] },
      { feature: '모바일 지원', values: [true, true, false, true] },
      { feature: '파일 자동 삭제', values: [true, false, false, false] },
      { feature: '가격', values: ['무료(일 3건)', '무료', '유료', '무료(일 2건)'] },
    ],
  },
  founderNote: {
    quote: '아이 학교에서 보내는 가정통신문이 전부 hwp 파일이었어요. 매번 PC 켜서 변환하는 게 너무 번거로워서 만들었습니다.',
    author: 'HWPDrop 팀',
    role: '학부모가 직접 만든 도구',
  },
  testimonial: {
    quote: '카카오톡에서 받은 서류를 바로 PDF로 바꿀 수 있어서 너무 편해요. 이제 PC 안 켜도 됩니다.',
    author: '김민지',
    role: '초등학생 학부모',
  },
  faq: [
    { question: '파일이 서버에 남나요?', answer: '아니요. 변환 후 30분 이내에 서버에서 완전히 삭제됩니다. 변환 이력도 저장하지 않습니다.' },
    { question: '폰트가 깨지지 않나요?', answer: '한글 전용 폰트를 포함한 변환 엔진을 사용합니다. 바탕체, 돋움체, 나눔 시리즈 등 대부분의 한글 폰트를 지원합니다.' },
    { question: '모바일에서 어떻게 사용하나요?', answer: '카카오톡에서 hwp 파일을 받으면 공유 버튼 → HWPDrop 선택 → 30초 후 PDF 저장. 3탭이면 끝입니다.' },
    { question: '일 3건 이상 변환하려면?', answer: '스마트 플랜(월 4,900원)으로 업그레이드하면 무제한 변환이 가능합니다. 일괄 변환(최대 5개 동시)도 지원합니다.' },
  ],
  seo: {
    title: 'HWPDrop — HWP PDF 변환 무료 | 한글 파일 PDF 변환기',
    description: 'HWP 파일을 PDF로 무료 변환. 회원가입 불필요, 30초 즉시 변환, 모바일 최적화. 학교 가정통신문·공공서류 변환에 최적.',
    keywords: ['hwp pdf 변환', '한글 파일 pdf 변환', 'hwp to pdf 무료'],
  },
}
