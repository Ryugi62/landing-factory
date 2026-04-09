import type { PageConfig } from './type'
import { config as datemind } from './pages/datemind'
import { config as padsafe } from './pages/padsafe'
import { config as skinfit } from './pages/skinfit'
import { config as portfolioshield } from './pages/portfolioshield'
import { config as tapout } from './pages/tapout'
import { config as truetailor } from './pages/truetailor'
import { config as invoicenudge } from './pages/invoicenudge'
import { config as scope_lock } from './pages/scope-lock'
import { config as declog } from './pages/declog'
import { config as slotfill } from './pages/slotfill'
import { config as coach_on } from './pages/coach-on'
import { config as repurpose_os } from './pages/repurpose-os'
import { config as hwpdrop } from './pages/hwpdrop'
import { config as naira_dash } from './pages/naira-dash'
import { config as flowkit } from './pages/flowkit'
import { config as reportflow } from './pages/reportflow'
import { config as reviewdraft } from './pages/reviewdraft'
import { config as noshowshield } from './pages/noshowshield'
import { config as mealforge } from './pages/mealforge'
import { config as dealshield } from './pages/dealshield'

// 새 제품 추가: import 하고 아래 배열에 추가
export const ALL_CONFIGS: PageConfig[] = [datemind, padsafe, skinfit, portfolioshield, tapout, truetailor, invoicenudge, scope_lock, declog, slotfill, coach_on, repurpose_os, hwpdrop, naira_dash, flowkit, reportflow, reviewdraft, noshowshield, mealforge, dealshield]

export function getConfigBySlug(slug: string): PageConfig | undefined {
  return ALL_CONFIGS.find((c) => c.slug === slug)
}
