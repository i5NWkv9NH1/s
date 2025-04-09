const url = $request.url

if (!$response.body) {
  $done({})
}

let body = JSON.parse($response.body)
console.log("⚡ 正在处理 URL:", url)
console.log("原始数据：", JSON.stringify(body))

if (url.includes('/app/flash_menu.json')) {
  console.log('/app/flash_menu.json')
  body.flash_menu_check = []
  body.flash_menu = []
} else if (url.includes('/json/index/cates.json')) {
  body.video = []
} else if (url.includes('/app-configs.json')) {
  for (const key in body) {
    if (/apps_\d+\.\d+\.\d+/.test(key)) {
      body[key] = [];
    }
  }
  body.app_shield = []
  body.marketTip = []
  body.question = []
  body.ads = []
  body['apps_6.5.0'] = []
  body['apps_3.2.0'] = []
  body['apps_6.2.0'] = []
  body.flash_menu = []
  body.calendarTip = []
  body.hero_configs.limit.list = []
  body.guidebook_config = []
  body.refer_nav = []
  body.marketCheckShield = []
  body.flash_menu_new = []
  body.apps = []
  body.blockVirtualCurrency = []
  body.vipRecommendAward.enable = 0
  body.flash_menu_check = []
  body.speech.ios_vip = []
  body.speech.android = []
  body.speech.ios = []
} else if (url.includes('/tv/index/list')) {
  body.data = []
} else if (url.includes('/userinfo')) {
  body.data.vip_level = 1
  body.data.vip_str = "尊享会员"
  body.data.vip_expiration = "2026-04-09"
} else if (url.includes('/get_flash_list')) {
  const adKeywordsInContent = ["夜读", "交易的本质"];
  const adSources = ["某财经机构"];
  const adTags = ["推广", "广告"];

  body = body.filter(item => {
    const d = item.data;
    const isText = d.content && d.content.trim().length > 0;
    const isNotVip = d.lock !== true && !(d.remark || []).some(r => r.lock === true);
    const isNormalType = d.type === 0;
    const isNotAd = !(
      adKeywordsInContent.some(k => d.content.includes(k)) ||
      (d.source && adSources.includes(d.source)) ||
      (d.tags && d.tags.some(t => adTags.includes(t)))
    );
    return isText && isNotVip && isNormalType && isNotAd;
  });
} else if (url.includes('/app_tab_icon')) {
  const whitelist = ['flash', 'market', 'calendar']
  body = body.filter(item => whitelist.includes(item.name))
}

$done({ body: JSON.stringify(body) })
