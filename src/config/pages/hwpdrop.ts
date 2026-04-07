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
  },
  problems: [
    {
      icon: '😤',
      title: '스마트폰으로 hwp 파일이 안 열려요',
      desc: '학교 가정통신문, 공공기관 서류... 한글 파일은 스마트폰에서 열 수가 없어요.',
    },
    {
      icon: '⏱️',
      title: '구글 드라이브 변환은 너무 복잡해요',
      desc: '업로드 → 문서로 열기 → PDF 저장... 3단계가 필요하고 폰트가 깨지기도 해요.',
    },
    {
      icon: '🔒',
      title: '개인 서류를 외부 서버에 올리기 불안해요',
      desc: '주민등록등본, 학교 개인정보 서류... 어디로 가는지 모르는 서버에 올리기 꺼려져요.',
    }
  ],
  features: [
    {
      icon: '⚡',
      title: '30초 즉시 변환',
      desc: '파일 드래그앤드롭 → 30초 내 완벽한 PDF 다운로드. 회원가입·이메일 전혀 불필요.',
      badge: '가장 빠름',
    },
    {
      icon: '📱',
      title: '모바일 완벽 지원',
      desc: '카카오톡 첨부파일 → 직접 HWPDrop으로 공유 → 즉시 PDF 저장. 3탭으로 끝.',
    },
    {
      icon: '🛡️',
      title: '보안 보장',
      desc: '업로드 후 30분 내 파일 완전 삭제. 개인정보 미수집. 변환 이력 저장 없음.',
    }
  ],
  pricing: [
    {
      name: '무료',
      price: '₩0',
      period: 'forever',
      features: ['일 3건 변환', '파일 10MB 이하', '광고 표시'],
      highlight: false,
    },
    {
      name: '스마트',
      price: '₩4,900',
      period: '/month',
      features: ['무제한 변환', '파일 50MB', '광고 없음', '일괄 변환 5개'],
      highlight: true,
    },
    {
      name: '패밀리',
      price: '₩9,900',
      period: '/month',
      features: ['무제한 변환', '클라우드 저장 30일', '카카오톡 봇 연동', '우선 변환'],
      highlight: false,
    }
  ],
  cta: {
    title: '지금 바로 무료로 시작하세요',
    subtitle: '대기자 등록하고 출시 첫날 알림 받기.',
  },
  seo: {
    title: 'HWPDrop — HWP PDF 변환 무료 | 한글 파일 PDF 변환기',
    description: 'HWP 파일을 PDF로 무료 변환. 회원가입 불필요, 30초 즉시 변환, 모바일 최적화. 학교 가정통신문·공공서류 변환에 최적.',
    keywords: ['hwp pdf 변환', '한글 파일 pdf 변환', 'hwp to pdf 무료'],
  },
}
