# Landing Factory

## 목적
가설마다 config 파일 1개만 추가하면 새 랜딩페이지가 자동으로 생성되는 시스템.

## 기술 스택
- Framework: Next.js 15 + Tailwind CSS v4
- 배포: Cloudflare Pages (`output: 'export'` 정적 빌드)
- Waitlist: Supabase (Edge Function `waitlist-signup` 경유, Turnstile 검증 필수)
- Bot Protection: Cloudflare Turnstile (invisible)
- Email: Resend 3단계 시퀀스 (welcome → value_prop → early_access)

## 새 제품 추가 방법

### 자동화 방법 (권장, 5분 이내)
1. Ada [DEBATE] VERDICT에서 JSON 아티팩트 복사 → `build.json` 저장
2. `npm run new-product -- --from build.json`
   - config 파일 생성 + index.ts 등록 + build 검증 자동 완료
3. 결과 리뷰 후 `git push` → Cloudflare Pages 자동 배포

사전 확인 (파일 미생성):
```
npm run new-product -- --from build.json --dry-run
```

JSON 형식 예시: `scripts/example-build-artifact.json`

### 수동 방법 (fallback)
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

## Supabase 스키마
```sql
-- waitlist 테이블
CREATE TABLE waitlist (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL,
  product text NOT NULL,
  referral_source text,
  landing_slug text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  utm_term text,
  gclid text,
  ref_code text,
  email_1_sent_at timestamptz,  -- welcome (Day 0)
  email_2_sent_at timestamptz,  -- value_prop (Day 2)
  email_3_sent_at timestamptz,  -- early_access (Day 5)
  created_at timestamptz DEFAULT now()
);
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
-- anon INSERT 제거됨 — 모든 삽입은 waitlist-signup Edge Function 경유
CREATE POLICY "allow service role select" ON waitlist FOR SELECT TO service_role USING (true);

-- 이메일 예약 큐
CREATE TABLE email_queue (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  waitlist_id uuid NOT NULL REFERENCES waitlist(id) ON DELETE CASCADE,
  email_type text NOT NULL CHECK (email_type IN ('welcome', 'value_prop', 'early_access')),
  scheduled_at timestamptz NOT NULL,
  sent_at timestamptz,
  error text,
  created_at timestamptz DEFAULT now()
);
```

## Edge Functions
| Function | 역할 | JWT |
|----------|------|-----|
| `waitlist-signup` | Turnstile 검증 → waitlist INSERT | No (공개 폼) |
| `notify-waitlist` | DB webhook → 관리자 알림 + 유저 환영 메일 + 큐 삽입 | No (webhook) |
| `send-scheduled-emails` | 크론으로 호출 → 예약 이메일 발송 | No (CRON_SECRET 인증) |
| `dashboard-metrics` | `/admin`용 성과 집계 응답 | No (`DASHBOARD_SECRET` 인증) |

## Waitlist 흐름
1. WaitlistForm → `waitlist-signup` Edge Function (Turnstile 검증 + service_role INSERT)
2. DB webhook → `notify-waitlist` (관리자 알림 + 환영 메일 + Day 2/5 큐 삽입)
3. 크론 (매시간) → `send-scheduled-emails` (큐에서 due 항목 발송)

## 환경변수
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` — 클라이언트 (.env.local + CF Pages)
- `TURNSTILE_SECRET_KEY` — Edge Function secret
- `RESEND_API_KEY` — Edge Function secret
- `FROM_EMAIL` — Edge Function secret (커스텀 도메인 설정 후)
- `CRON_SECRET` — Edge Function secret (크론 인증용)
- `DASHBOARD_SECRET` — Edge Function secret (`/admin` 대시보드 인증용, `CRON_SECRET`과 분리)
- `GOOGLE_ADS_DEVELOPER_TOKEN` — Google Ads API developer token
- `GOOGLE_ADS_CLIENT_ID` — OAuth client ID
- `GOOGLE_ADS_CLIENT_SECRET` — OAuth client secret
- `GOOGLE_ADS_REFRESH_TOKEN` — Google Ads scope refresh token
- `GOOGLE_ADS_CUSTOMER_ID` — 실제 광고를 생성할 client account ID (`-` 없이)
- `GOOGLE_ADS_LOGIN_CUSTOMER_ID` — MCC로 호출할 때 사용하는 manager account ID (`-` 없이, 선택)
- `GOOGLE_ADS_API_VERSION` — 기본값 `v23`
- `GOOGLE_ADS_DAILY_BUDGET` 또는 `GOOGLE_ADS_DAILY_BUDGET_MICROS` — launch 기본 예산 입력용

## Google Ads 스크립트
- `npm run ads:prepare -- --slug slotfill` — blueprint/export/editor-export/validate 일괄 실행
- `npm run ads:launch -- --slug slotfill --dry-run --daily-budget 25000` — Google Ads launch plan 생성만 수행
- `npm run ads:launch -- --slug slotfill --daily-budget 25000` — Google Ads API로 budget → campaign(PAUSED 기본) → ad group → keywords → RSA 생성
- `ads:launch` 1차 범위는 핵심 search 구조까지만 자동화한다. sitelink/callout는 `generated/google-ads/{slug}.launch.json`에 `manualAssetsPending`으로 남긴다.

## 커밋 규칙
- author: Ryugi62 <66805752+Ryugi62@users.noreply.github.com>
- prefix: feat:, fix:, seo:, chore:, launch:

## 중요 규칙
- ~/Desktop/pickflow 절대 건드리지 않음
- ~/ventures/datemind 건드리지 않음
- output: 'export' 유지 (API 라우트 없음)
