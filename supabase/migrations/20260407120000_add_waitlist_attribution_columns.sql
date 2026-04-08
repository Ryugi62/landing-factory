ALTER TABLE waitlist
ADD COLUMN IF NOT EXISTS landing_slug text,
ADD COLUMN IF NOT EXISTS utm_source text,
ADD COLUMN IF NOT EXISTS utm_medium text,
ADD COLUMN IF NOT EXISTS utm_campaign text,
ADD COLUMN IF NOT EXISTS utm_content text,
ADD COLUMN IF NOT EXISTS utm_term text,
ADD COLUMN IF NOT EXISTS gclid text,
ADD COLUMN IF NOT EXISTS ref_code text;

UPDATE waitlist
SET landing_slug = product
WHERE landing_slug IS NULL;

UPDATE waitlist
SET
  utm_source = COALESCE(utm_source, NULLIF(split_part(referral_source, ':', 2), '')),
  utm_medium = COALESCE(utm_medium, NULLIF(split_part(referral_source, ':', 3), '')),
  utm_campaign = COALESCE(utm_campaign, NULLIF(split_part(referral_source, ':', 4), ''))
WHERE referral_source LIKE 'utm:%';

UPDATE waitlist
SET ref_code = COALESCE(ref_code, NULLIF(substring(referral_source FROM 5), ''))
WHERE referral_source LIKE 'ref:%';
