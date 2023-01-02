/**
 * @description 系统设置
 * @description 移除底部购买页入口
 * @url ^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d{1}\/system_service\/config?
 */

let body = JSON.parse($response.body)

body.data.home_banner = []
body.data.splash = []
body.data.cmt_words = []
body.data.home_top_banner = {}
body.data.my_banner = {}
body.data.tabbar.tabs = body.data.tabbar.tabs.fitler(
  (item) => item.title !== '购买'
)

body = JSON.stringify(body)
$done({
  body
})
