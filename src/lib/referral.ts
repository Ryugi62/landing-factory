/**
 * Generates a unique referral code for a waitlist signup.
 * Format: {slug}-{8-char hex} — e.g. "dealshield-a3f9bc12"
 *
 * Uses crypto.randomUUID() (built-in, no dependency) sliced to 8 chars.
 * Collision probability at 10,000 signups per product: ~0.00023% — acceptable for waitlist scale.
 */
export function generateRefCode(slug: string): string {
  const suffix = crypto.randomUUID().replace(/-/g, '').slice(0, 8)
  return `${slug}-${suffix}`
}
