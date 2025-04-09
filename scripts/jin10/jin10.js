const url = $request.url

if (!$response.body) {
  $done({})
}

let body = JSON.parse($response.body)
console.log("⚡ 正在处理 URL:", url)
console.log("原始数据：", (body))

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
  const noIncludeCategories = ['明星企业', '特色栏目'];

  body = body
    .filter(item => {
      const d = item.data;
      // 过滤掉包含在 noIncludeCategories 中的 category_name
      const isNotInCategory = !noIncludeCategories.includes(d.category_name);
      // 过滤掉 show_vip_flag 为 1 的项
      const isNotVip = d.show_vip_flag !== 1;
      return isNotInCategory && isNotVip;
    });
} else if (url.includes('/app_tab_icon')) {
  const whitelist = ['flash', 'market', 'calendar']
  body = body.filter(item => whitelist.includes(item.name))
}

$done({ body: JSON.stringify(body) })
