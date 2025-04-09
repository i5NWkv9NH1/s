const url = $request.url
if (!$response.body) $done({})

let body = JSON.parse($response.body)
console.log("⚡ 正在处理 URL:", url)
console.log("原始数据：", (body))

if (url.includes('/securities-info/appcenter/ui_custom?type=home_page&info_channel')) {
  body.data.custom_items = [] // 清空首页自定义项
} else if (url.includes('/securities-info/promotion/activity/banner')) {
  body.data = {} // 清空 banner 活动
} else if (url.includes('/securities-info/mall/fin-recommends?project_category=jbq')) {
  body.fin_recommends = [] // 清空精选推荐
} else if (url.includes('/securities-info/fund/etf/track/today?secu_code=')) {
  body.data = [] // 清空 ETF 当日追踪
} else if (url.includes('/servlet/json')) {
  body.manager_info = []
  body.max_yield = []
  body.contextMap = []
  body.product_info = []
} else if (url.includes('/securities-info/notices')) {
  body.notice_items = [] // 清空公告
} else if (url.includes('/securities-info/promotion/focus-map')) {
  body.data = [] // 清空轮播图或焦点图
} else if (url.includes('/securities-forwarder/big-data2/fund-recommend-list')) {
  body.data.fund_list = [] // 清空基金推荐列表
} else if (url.includes('/securities-info/mall/fin-recommends')) {
  body.data.fin_recommends = [] // 清空理财推荐（非 JBQ 的）
}

$done({ body: JSON.stringify(body) })
