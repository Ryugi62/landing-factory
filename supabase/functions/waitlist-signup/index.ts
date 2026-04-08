import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const TURNSTILE_SECRET = Deno.env.get('TURNSTILE_SECRET_KEY')!
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const {
      email,
      product,
      referral_source,
      turnstile_token,
      landing_slug,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      gclid,
      ref_code,
    } = await req.json()

    if (!email || !product || !turnstile_token) {
      return new Response(
        JSON.stringify({ error: 'missing_fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } },
      )
    }

    // Verify Turnstile token
    const verifyRes = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: TURNSTILE_SECRET,
          response: turnstile_token,
        }),
      },
    )
    const verifyData = await verifyRes.json()

    if (!verifyData.success) {
      return new Response(
        JSON.stringify({ error: 'turnstile_failed' }),
        { status: 403, headers: { 'Content-Type': 'application/json', ...corsHeaders } },
      )
    }

    // Insert into waitlist via service_role (bypasses anon RLS)
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
    const signup = {
      email,
      product,
      referral_source: referral_source?.trim() || null,
      landing_slug: landing_slug?.trim() || product,
      utm_source: utm_source?.trim() || null,
      utm_medium: utm_medium?.trim() || null,
      utm_campaign: utm_campaign?.trim() || null,
      utm_content: utm_content?.trim() || null,
      utm_term: utm_term?.trim() || null,
      gclid: gclid?.trim() || null,
      ref_code: ref_code?.trim() || null,
    }
    const { error } = await supabase
      .from('waitlist')
      .insert(signup)

    if (error) {
      const isDuplicate =
        error.message?.includes('duplicate') || error.code === '23505'
      return new Response(
        JSON.stringify({ error: isDuplicate ? 'duplicate' : 'insert_failed' }),
        {
          status: isDuplicate ? 409 : 500,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        },
      )
    }

    return new Response(
      JSON.stringify({ ok: true }),
      { headers: { 'Content-Type': 'application/json', ...corsHeaders } },
    )
  } catch (e) {
    console.error(e)
    return new Response(
      JSON.stringify({ error: 'internal' }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } },
    )
  }
})
