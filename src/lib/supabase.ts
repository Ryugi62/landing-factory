import { createClient } from '@supabase/supabase-js'

// Supabase client — anon key only, RLS enforced on waitlist table
export function getSupabaseClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

export type WaitlistEntry = {
  email: string
  product: string
  referral_source?: string
}

export async function insertWaitlist(entry: WaitlistEntry) {
  const supabase = getSupabaseClient()
  const { error } = await supabase.from('waitlist').insert(entry)
  if (error) throw error
}

export async function getWaitlistCount(product: string): Promise<number> {
  const supabase = getSupabaseClient()
  const { count, error } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true })
    .eq('product', product)
  if (error) return 0
  return count ?? 0
}
