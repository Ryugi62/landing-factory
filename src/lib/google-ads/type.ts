export type GoogleAdsInput = {
  slug: string
  productTitle: string
  valueProposition: string
  targetCustomer: string
  painPoint: string
  keywordIntent: string
}

export type GoogleAdsOverride = Partial<Omit<GoogleAdsInput, 'slug'>> & {
  audienceLabel?: string
  adGroupName?: string
  keywordSeeds?: string[]
  negativeKeywords?: string[]
  calloutHints?: string[]
  rsaHeadlines?: string[]
  descriptions?: string[]
  sitelinks?: GoogleAdsSitelinkOverride[]
  callouts?: string[]
}

export type GoogleAdsSitelink = {
  linkText: string
  finalUrl: string
  description1: string
  description2: string
}

export type GoogleAdsSitelinkOverride = {
  linkText: string
  description1: string
  description2: string
  path?: string
}

export type GoogleAdsBlueprint = {
  slug: string
  generatedAt: string
  input: GoogleAdsInput & {
    audienceLabel?: string
  }
  selection: {
    eligible: boolean
    score: number
    reasons: string[]
  }
  campaign_name: string
  ad_group_name: string
  final_url: string
  final_url_suffix: string
  exact_keywords: string[]
  phrase_keywords: string[]
  negative_keywords: string[]
  rsa_headlines: string[]
  descriptions: string[]
  sitelinks: GoogleAdsSitelink[]
  callouts: string[]
}

export type GoogleAdsCandidate = {
  slug: string
  productTitle: string
  eligible: boolean
  score: number
  reasons: string[]
}
