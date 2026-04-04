import type { PageConfig } from './type'
import { config as datemind } from './pages/datemind'
import { config as padsafe } from './pages/padsafe'

// 새 제품 추가: import 하고 아래 배열에 추가
export const ALL_CONFIGS: PageConfig[] = [datemind, padsafe]

export function getConfigBySlug(slug: string): PageConfig | undefined {
  return ALL_CONFIGS.find((c) => c.slug === slug)
}
