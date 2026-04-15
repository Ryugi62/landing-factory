import type { PageConfig } from './type'
import { config as datemind } from './pages/datemind'
import { config as slotfill } from './pages/slotfill'
import { config as declog } from './pages/declog'
import { config as flowkit } from './pages/flowkit'
import { config as reportflow } from './pages/reportflow'
import { config as repurpose_os } from './pages/repurpose-os'
import { config as scope_lock } from './pages/scope-lock'
import { config as reviewdraft } from './pages/reviewdraft'
import { config as mealforge } from './pages/mealforge'
import { config as dealshield } from './pages/dealshield'
import { config as churnguard } from './pages/churnguard'
import { config as challengepulse } from './pages/challengepulse'
import { config as sponsorkit } from './pages/sponsorkit'
import { config as prooflock } from './pages/prooflock'
import { config as shadowguard } from './pages/shadowguard'
import { config as ai_audit } from './pages/ai-audit'

// 새 제품 추가: import 하고 아래 배열에 추가
export const ALL_CONFIGS: PageConfig[] = [datemind, slotfill, declog, flowkit, reportflow, repurpose_os, scope_lock, reviewdraft, mealforge, dealshield, churnguard, challengepulse, sponsorkit, prooflock, shadowguard, ai_audit]

export function getConfigBySlug(slug: string): PageConfig | undefined {
  return ALL_CONFIGS.find((c) => c.slug === slug)
}
