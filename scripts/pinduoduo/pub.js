/**
 * @description
 * @url ^https?:\/\/api\.pinduoduo\.com\/api\/alexa\/homepage\/hub\?
 */

let body = JSON.parse($response.body)

const keywords = ['首页', '聊天', '个人中心']

body.result.icon_set = []
body.result.all_top_opts = body.result.all_top_opts.filter(
  (item) => item.tab_id === 1
)
body.result.bottom_tabs = body.result.bottom_tabs.filter(
  (item) => keywords.indexOf(item.title) === -1
)
body = JSON.stringify(body)
$done({
  body
})
