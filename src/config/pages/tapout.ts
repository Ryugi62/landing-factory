import type { PageConfig } from '@/config/type'

export const config: PageConfig = {
  slug: 'tapout',
  name: 'Tapout',
  tagline: '태깅 한 번으로 집이 꺼진다',
  description:
    '출근 전 앱 4개 여는 시간 끝. NFC 태그 하나로 조명·에어컨·도어락·테슬라를 동시에 제어하세요.',
  variant: 'bold',
  theme: {
    accent: 'indigo',
    emoji: '🏠',
  },
  hero: {
    badge: '스마트홈 자동화',
    title: '출근 전 앱 4개 여는 거',
    titleHighlight: '이제 그만',
    subtitle:
      '현관 NFC 태그 하나. 조명·에어컨·도어락·테슬라 동시 종료. 락스크린에서도 작동.',
    cta: 'Join the waitlist',
  },
  problems: [
    {
      icon: '📱',
      title: '앱 4개 열기',
      desc: '에어컨 앱, 조명 앱, 도어락 앱, 테슬라 앱. 출근 전 매일 반복',
    },
    {
      icon: '😰',
      title: '껐는지 불안',
      desc: '사무실 도착 후 에어컨 켠 채로 나온 것 같아서 다시 앱 열기',
    },
    {
      icon: '🔄',
      title: '단축어 설정 포기',
      desc: 'SmartThings 연동에서 막히고, 아이폰 바꾸면 다시 처음부터',
    },
  ],
  features: [
    {
      icon: '⚡',
      title: '루틴 빌더',
      desc: 'SmartThings·HomeKit·Hue 액션을 드래그앤드롭으로 묶기. 설정 5분',
      badge: '핵심 기능',
    },
    {
      icon: '📶',
      title: 'NFC 태그 등록',
      desc: '500원짜리 NFC 스티커를 앱으로 프로그래밍. 이후 락스크린에서 태깅만',
    },
    {
      icon: '☁️',
      title: '클라우드 동기화',
      desc: '아이폰 교체해도 루틴 그대로. 가족과 루틴 공유 가능',
    },
  ],
  pricing: [
    {
      name: 'Free',
      price: '₩0',
      period: 'forever',
      features: ['NFC 태그 1개', '루틴 1개', '연동 2개'],
      highlight: false,
    },
    {
      name: 'Pro',
      price: '₩9,900',
      period: '일회성',
      features: ['무제한 태그·루틴', '모든 플랫폼 연동', '클라우드 동기화', '루틴 공유'],
      highlight: true,
    },
    {
      name: '오브제 번들',
      price: '₩59,000',
      period: '(추후 출시)',
      features: ['디자이너 NFC 오브제', 'Pro 포함', '인테리어 감성'],
      highlight: false,
    },
  ],
  cta: {
    title: '앱 열지 않는 스마트홈을 먼저 경험하세요',
    subtitle: 'Join the waitlist. Be first when we launch.',
  },
  seo: {
    title: 'Tapout — NFC 태깅 한 번으로 집이 꺼진다',
    description:
      '조명·에어컨·도어락·테슬라를 NFC 태그 하나로 동시 제어. iOS 단축어보다 5분 설정, 클라우드 동기화.',
    keywords: ['NFC 스마트홈', '퇴근 루틴 자동화', 'NFC home automation'],
  },
}
