const url = $request.url
if (!$response.body) $done({})

let body = JSON.parse($response.body)

switch (url) {
  case url.includes('/securities-info/appcenter/ui_custom?type=home_page&info_channel'): {
    body.data.custom_items = []; // 直接清空所有 custom_items
    break;
  }
  case url.includes('/securities-info/promotion/activity/banner'): {
    body.data = {};
    break
  }
  case url.includes('/securities-info/mall/fin-recommends?project_category=jbq'): {
    body.fin_recommends = [];
    break;
  }
  case url.includes('/securities-info/fund/etf/track/today?secu_code='): {
    body.data = [];
    break;
  }
  case url.includes('/servlet/json'): {
    body.manager_info = []
    body.max_yield = []
    body.contextMap = []
    body.product_info = []
    break
  }
  case url.includes('/securities-info/notices'): {
    body.notice_items = [];
    break;
  }
  case url.includes('/securities-info/promotion/focus-map'): {
    body.data = []
    break
  }
  case url.includes('/securities-forwarder/big-data2/fund-recommend-list'): {
    body.data.fund_list = []
    break
  }
  case url.includes('/securities-info/mall/fin-recommends'): {
    body.data.fin_recommends = []
    break
  }
}

$done({ body: JSON.stringify(body) })
