-- Track whether the DealShield Starter Toolkit offer email has been sent to a waitlist user.
-- Used by supabase/functions/send-toolkit-offer for idempotent batch send.

ALTER TABLE waitlist
  ADD COLUMN IF NOT EXISTS toolkit_offer_sent_at timestamptz;

-- Partial index to speed up "who still needs the offer?" queries.
CREATE INDEX IF NOT EXISTS waitlist_toolkit_offer_pending_idx
  ON waitlist (created_at)
  WHERE toolkit_offer_sent_at IS NULL;
