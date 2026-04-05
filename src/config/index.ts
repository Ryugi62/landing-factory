import type { PageConfig } from './type'
import { config as datemind } from './pages/datemind'
import { config as padsafe } from './pages/padsafe'
import { config as skinfit } from './pages/skinfit'
import { config as portfolioshield } from './pages/portfolioshield'

// 새 제품 추가: import 하고 아래 배열에 추가
export const ALL_CONFIGS: PageConfig[] = [datemind, padsafe, skinfit, portfolioshield]

export function getConfigBySlug(slug: string): PageConfig | undefined {
  return ALL_CONFIGS.find((c) => c.slug === slug)
}
