/**
 * Google Ads Script — Landing Factory 포트폴리오 성과 리포트
 *
 * 사용법:
 *   1. Google Ads > 도구 > 스크립트 > 새 스크립트
 *   2. 이 코드 붙여넣기
 *   3. 실행 (또는 매일 자동 실행 예약)
 *
 * 출력: Logger에 JSON 형식으로 출력 → 복사해서 Claude에게 전달
 */

function main() {
  var DAYS = 14; // 최근 14일
  var today = new Date();
  var startDate = new Date(today.getTime() - DAYS * 24 * 60 * 60 * 1000);

  var dateRange = formatDate(startDate) + ',' + formatDate(today);

  var report = {
    generated_at: today.toISOString(),
    date_range: { start: formatDate(startDate), end: formatDate(today), days: DAYS },
    account: {
      id: AdsApp.currentAccount().getCustomerId(),
      name: AdsApp.currentAccount().getName()
    },
    campaigns: [],
    keywords: [],
    ads: [],
    daily: []
  };

  // ─── 캠페인 성과 ───
  var campIter = AdsApp.campaigns()
    .withCondition("Status != REMOVED")
    .forDateRange(formatDate(startDate), formatDate(today))
    .get();

  while (campIter.hasNext()) {
    var camp = campIter.next();
    var stats = camp.getStatsFor(formatDate(startDate), formatDate(today));
    report.campaigns.push({
      name: camp.getName(),
      status: camp.isEnabled() ? 'ENABLED' : camp.isPaused() ? 'PAUSED' : 'OTHER',
      budget_daily: camp.getBudget().getAmount(),
      impressions: stats.getImpressions(),
      clicks: stats.getClicks(),
      cost: stats.getCost(),
      ctr: stats.getCtr(),
      avg_cpc: stats.getAverageCpc(),
      conversions: stats.getConversions(),
      conversion_rate: stats.getConversionRate()
    });
  }

  // ─── 키워드 성과 ───
  var kwIter = AdsApp.keywords()
    .withCondition("Status != REMOVED")
    .withCondition("Impressions > 0")
    .forDateRange(formatDate(startDate), formatDate(today))
    .orderBy("Impressions DESC")
    .withLimit(50)
    .get();

  while (kwIter.hasNext()) {
    var kw = kwIter.next();
    var stats = kw.getStatsFor(formatDate(startDate), formatDate(today));
    report.keywords.push({
      campaign: kw.getCampaign().getName(),
      ad_group: kw.getAdGroup().getName(),
      text: kw.getText(),
      match_type: kw.getMatchType(),
      impressions: stats.getImpressions(),
      clicks: stats.getClicks(),
      cost: stats.getCost(),
      ctr: stats.getCtr(),
      avg_cpc: stats.getAverageCpc(),
      conversions: stats.getConversions(),
      quality_score: kw.getQualityScore()
    });
  }

  // ─── 광고 성과 ───
  var adIter = AdsApp.ads()
    .withCondition("Status != REMOVED")
    .withCondition("Impressions > 0")
    .forDateRange(formatDate(startDate), formatDate(today))
    .orderBy("Impressions DESC")
    .withLimit(20)
    .get();

  while (adIter.hasNext()) {
    var ad = adIter.next();
    var stats = ad.getStatsFor(formatDate(startDate), formatDate(today));
    report.ads.push({
      campaign: ad.getCampaign().getName(),
      ad_group: ad.getAdGroup().getName(),
      type: ad.getType(),
      impressions: stats.getImpressions(),
      clicks: stats.getClicks(),
      cost: stats.getCost(),
      ctr: stats.getCtr(),
      conversions: stats.getConversions()
    });
  }

  // ─── 일별 추세 (캠페인별) ───
  var query = 'SELECT campaign.name, segments.date, '
    + 'metrics.impressions, metrics.clicks, metrics.cost_micros, '
    + 'metrics.ctr, metrics.average_cpc, metrics.conversions '
    + 'FROM campaign '
    + 'WHERE segments.date BETWEEN "' + formatDate(startDate) + '" AND "' + formatDate(today) + '" '
    + 'AND campaign.status != "REMOVED" '
    + 'ORDER BY segments.date ASC';

  var rows = AdsApp.search(query);
  while (rows.hasNext()) {
    var row = rows.next();
    report.daily.push({
      campaign: row.campaign.name,
      date: row.segments.date,
      impressions: row.metrics.impressions,
      clicks: row.metrics.clicks,
      cost: row.metrics.costMicros / 1000000,
      ctr: row.metrics.ctr,
      avg_cpc: row.metrics.averageCpc / 1000000,
      conversions: row.metrics.conversions
    });
  }

  // ─── 노출 0인 키워드 (문제 진단용) ───
  var zeroImpKw = [];
  var zeroIter = AdsApp.keywords()
    .withCondition("Status = ENABLED")
    .withCondition("Impressions = 0")
    .forDateRange(formatDate(startDate), formatDate(today))
    .withLimit(30)
    .get();

  while (zeroIter.hasNext()) {
    var kw = zeroIter.next();
    zeroImpKw.push({
      campaign: kw.getCampaign().getName(),
      text: kw.getText(),
      match_type: kw.getMatchType(),
      quality_score: kw.getQualityScore(),
      bid: kw.bidding().getCpc()
    });
  }
  report.zero_impression_keywords = zeroImpKw;

  // ─── 출력 ───
  Logger.log('=== LANDING FACTORY REPORT START ===');
  Logger.log(JSON.stringify(report, null, 2));
  Logger.log('=== LANDING FACTORY REPORT END ===');
}

function formatDate(d) {
  var yyyy = d.getFullYear();
  var mm = ('0' + (d.getMonth() + 1)).slice(-2);
  var dd = ('0' + d.getDate()).slice(-2);
  return yyyy + mm + dd;
}
