/**
 * @desc
 * @url ^https?:\/\/data\.seeyouyima\.com\/v\d{1}\/jingqi\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data.general_tools_bar.list = []
body.data.jq_top_banner.is_show = false

body = JSON.stringify(body)

$done({
  body
})
