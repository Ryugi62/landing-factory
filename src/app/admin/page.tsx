'use client'

import { useState } from 'react'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!

type ProductRow = {
  product: string
  signups: number
  email1: number
  email2: number
  email3: number
}

type UtmSourceRow = {
  utm_source: string
  count: number
}

type UtmCampaignRow = {
  utm_campaign: string
  count: number
}

type ProductCampaignRow = {
  product: string
  utm_campaign: string
  count: number
}

type ReferralSourceRow = {
  referral_source: string
  count: number
}

type DailySignupRow = {
  date: string
  count: number
}

type Dashboard = {
  total_signups: number
  by_product: ProductRow[]
  daily_30d: DailySignupRow[]
  by_utm_source: UtmSourceRow[]
  by_utm_campaign: UtmCampaignRow[]
  by_product_campaign: ProductCampaignRow[]
  by_referral_source: ReferralSourceRow[]
  email_queue: { pending: number; sent: number; failed: number }
  updated_at: string
}

export default function AdminPage() {
  const [secret, setSecret] = useState('')
  const [data, setData] = useState<Dashboard | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function load() {
    if (!secret) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/dashboard-metrics`, {
        headers: { Authorization: `Bearer ${secret}` },
      })
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
      setData(await res.json())
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed')
    } finally {
      setLoading(false)
    }
  }

  const maxDaily = data ? Math.max(...data.daily_30d.map((d) => d.count), 1) : 1

  return (
    <div className="min-h-screen bg-slate-50 p-6 font-[var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold mb-6">Waitlist Dashboard</h1>

      {!data && (
        <div className="space-y-2 max-w-md">
          <p className="text-sm text-slate-500">Enter `DASHBOARD_SECRET` to load metrics.</p>
          <div className="flex gap-2">
            <input
              type="password"
              placeholder="DASHBOARD_SECRET"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && load()}
              className="flex-1 border border-slate-200 rounded-lg px-4 py-2 text-sm"
            />
            <button
              onClick={load}
              disabled={loading}
              className="bg-slate-900 text-white rounded-lg px-4 py-2 text-sm font-medium disabled:opacity-50"
            >
              {loading ? 'Loading…' : 'Load'}
            </button>
          </div>
        </div>
      )}

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      {data && (
        <div className="space-y-8">
          {/* Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Card label="Total Signups" value={data.total_signups} />
            <Card label="Products" value={data.by_product.length} />
            <Card label="Email Queue Pending" value={data.email_queue.pending} />
            <Card label="Emails Sent" value={data.email_queue.sent} />
          </div>

          {/* By Product */}
          <Section title="Signups by Product">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-slate-500 border-b">
                  <th className="pb-2 font-medium">Product</th>
                  <th className="pb-2 font-medium text-right">Signups</th>
                  <th className="pb-2 font-medium text-right">Email 1</th>
                  <th className="pb-2 font-medium text-right">Email 2</th>
                  <th className="pb-2 font-medium text-right">Email 3</th>
                </tr>
              </thead>
              <tbody>
                {data.by_product.map((r) => (
                  <tr key={r.product} className="border-b border-slate-100">
                    <td className="py-2 font-medium">{r.product}</td>
                    <td className="py-2 text-right">{r.signups}</td>
                    <td className="py-2 text-right text-slate-500">{r.email1}</td>
                    <td className="py-2 text-right text-slate-500">{r.email2}</td>
                    <td className="py-2 text-right text-slate-500">{r.email3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>

          {/* By Source */}
          <Section title="Signups by UTM Source">
            <CountBars
              rows={data.by_utm_source.map((r) => ({ label: r.utm_source, count: r.count }))}
              emptyText="No UTM source data yet"
            />
          </Section>

          <Section title="Signups by UTM Campaign">
            <CountBars
              rows={data.by_utm_campaign.map((r) => ({ label: r.utm_campaign, count: r.count }))}
              emptyText="No UTM campaign data yet"
            />
          </Section>

          {/* Daily Chart */}
          <Section title="Daily Signups (last 30 days)">
            {data.daily_30d.length === 0 ? (
              <p className="text-slate-400 text-sm">No data yet</p>
            ) : (
              <div className="flex items-end gap-1 h-32">
                {data.daily_30d.map((d) => (
                  <div key={d.date} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full bg-slate-800 rounded-t min-h-[2px]"
                      style={{ height: `${(d.count / maxDaily) * 100}%` }}
                    />
                    <span className="text-[9px] text-slate-400 -rotate-45 origin-top-left whitespace-nowrap">
                      {d.date.slice(5)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </Section>

          <Section title="Signups by Product + UTM Campaign">
            {data.by_product_campaign.length === 0 ? (
              <p className="text-slate-400 text-sm">No campaign data yet</p>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-500 border-b">
                    <th className="pb-2 font-medium">Product</th>
                    <th className="pb-2 font-medium">UTM Campaign</th>
                    <th className="pb-2 font-medium text-right">Signups</th>
                  </tr>
                </thead>
                <tbody>
                  {data.by_product_campaign.map((r) => (
                    <tr key={`${r.product}-${r.utm_campaign}`} className="border-b border-slate-100">
                      <td className="py-2 font-medium">{r.product}</td>
                      <td className="py-2 text-slate-600">{r.utm_campaign}</td>
                      <td className="py-2 text-right">{r.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </Section>

          {/* Email Queue */}
          <Section title="Email Queue Status">
            <div className="grid grid-cols-3 gap-4">
              <Card label="Pending" value={data.email_queue.pending} />
              <Card label="Sent" value={data.email_queue.sent} />
              <Card label="Failed" value={data.email_queue.failed} />
            </div>
          </Section>

          <Section title="Raw Referral Source (legacy / debug)">
            <CountBars
              rows={data.by_referral_source.map((r) => ({ label: r.referral_source, count: r.count }))}
              emptyText="No referral source data yet"
            />
          </Section>

          <p className="text-xs text-slate-400">Updated: {new Date(data.updated_at).toLocaleString()}</p>

          <button
            onClick={load}
            className="text-sm text-slate-500 hover:text-slate-700 underline"
          >
            Refresh
          </button>
        </div>
      )}
    </div>
  )
}

function Card({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4">
      <p className="text-xs text-slate-500 mb-1">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <h2 className="font-semibold mb-4">{title}</h2>
      {children}
    </div>
  )
}

function CountBars({
  rows,
  emptyText,
}: {
  rows: Array<{ label: string; count: number }>
  emptyText: string
}) {
  if (rows.length === 0) {
    return <p className="text-slate-400 text-sm">{emptyText}</p>
  }

  const max = Math.max(...rows.map((r) => r.count), 1)

  return (
    <div className="space-y-2">
      {rows.map((row) => (
        <div key={row.label} className="flex items-center gap-3">
          <span className="text-sm w-48 truncate text-slate-600">{row.label}</span>
          <div className="flex-1 bg-slate-100 rounded-full h-5 overflow-hidden">
            <div
              className="bg-slate-800 h-full rounded-full"
              style={{ width: `${(row.count / max) * 100}%` }}
            />
          </div>
          <span className="text-sm font-medium w-10 text-right">{row.count}</span>
        </div>
      ))}
    </div>
  )
}
