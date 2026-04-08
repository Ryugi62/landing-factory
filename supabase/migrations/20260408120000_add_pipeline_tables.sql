-- Pipeline tracking tables for autonomous AI company system
-- Rollback: DROP TABLE IF EXISTS experiment_log; DROP TABLE IF EXISTS ads_performance_log; DROP TABLE IF EXISTS product_pipeline; DROP FUNCTION IF EXISTS update_updated_at_column();

-- Auto-update updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Product pipeline: tracks each hypothesis through stages
CREATE TABLE IF NOT EXISTS product_pipeline (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text NOT NULL UNIQUE,
  stage text NOT NULL DEFAULT 'idea'
    CHECK (stage IN ('idea','board_review','approved','rejected','pivoted','validating','live','paused','killed')),
  hypothesis text NOT NULL,
  board_decision jsonb,
  landing_live boolean DEFAULT false,
  ads_campaign_id text,
  ads_status text,
  daily_budget_micros bigint,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE product_pipeline ENABLE ROW LEVEL SECURITY;
CREATE POLICY "service_role_all" ON product_pipeline FOR ALL TO service_role USING (true);

CREATE TRIGGER set_product_pipeline_updated_at
  BEFORE UPDATE ON product_pipeline
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Ads performance: daily snapshots of campaign metrics
CREATE TABLE IF NOT EXISTS ads_performance_log (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text NOT NULL,
  campaign_resource text NOT NULL,
  date date NOT NULL,
  impressions int DEFAULT 0,
  clicks int DEFAULT 0,
  cost_micros bigint DEFAULT 0,
  conversions numeric(10,2) DEFAULT 0,
  waitlist_signups int DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  UNIQUE(slug, date)
);

ALTER TABLE ads_performance_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "service_role_all" ON ads_performance_log FOR ALL TO service_role USING (true);

-- Experiment log: records all marketing experiments and outcomes
CREATE TABLE IF NOT EXISTS experiment_log (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text NOT NULL,
  experiment_type text NOT NULL,
  description text,
  before_state jsonb,
  after_state jsonb,
  outcome jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE experiment_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "service_role_all" ON experiment_log FOR ALL TO service_role USING (true);
