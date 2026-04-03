# Landing Factory

## 목적
가설마다 config 파일 1개만 추가하면 새 랜딩페이지가 자동으로 생성되는 시스템.

## 기술 스택
- Framework: Next.js 15 + Tailwind CSS v4
- 배포: Cloudflare Pages (`output: 'export'` 정적 빌드)
- Waitlist: Supabase (anon key로 클라이언트에서 직접 insert)

## 새 제품 추가 방법 (30분 이내)
1. `src/config/pages/` 에 `{slug}.ts` 파일 생성 (기존 파일 복사)
2. config 내용 수정
3. `src/config/index.ts` 에 import + `ALL_CONFIGS` 배열에 추가
4. `git push` → Cloudflare Pages 자동 배포

## 디렉토리 구조
```
src/
  config/
    type.ts              # PageConfig 타입
    index.ts             # 모든 config 집계 + getConfigBySlug
    pages/
      datemind.ts        # 각 제품 config
  components/sections/
    Hero.tsx
    Problem.tsx
    Features.tsx
    Pricing.tsx
    CtaSection.tsx       # 하단 CTA + Waitlist
    WaitlistForm.tsx     # 클라이언트 컴포넌트
    Footer.tsx
  lib/
    supabase.ts          # Supabase anon client + insertWaitlist
    accent.ts            # 테마 색상 → Tailwind 클래스 매핑
  app/
    [slug]/page.tsx      # 동적 라우트
    page.tsx             # 루트 → 첫 제품으로 redirect (1개일 때)
    sitemap.ts
    robots.ts
```

## Supabase waitlist 테이블 SQL
```sql
CREATE TABLE waitlist (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL,
  product text NOT NULL,
  referral_source text,
  created_at timestamptz DEFAULT now()
);

-- RLS: anon insert 허용
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
CREATE POLICY "allow anon insert" ON waitlist FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "allow service role select" ON waitlist FOR SELECT TO service_role USING (true);
```

## Resend 알림
Supabase Edge Function (`supabase/functions/notify-waitlist/`) 에서 처리.
DB webhook → Edge Function → Resend API.
클라이언트에 Resend API 키 노출 금지.

## 커밋 규칙
- author: Ryugi62 <66805752+Ryugi62@users.noreply.github.com>
- prefix: feat:, fix:, seo:, chore:, launch:

## 중요 규칙
- ~/Desktop/pickflow 절대 건드리지 않음
- ~/ventures/datemind 건드리지 않음
- output: 'export' 유지 (API 라우트 없음)
