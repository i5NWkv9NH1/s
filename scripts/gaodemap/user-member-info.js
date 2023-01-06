/**
 * @desc
 * @url ^https:\/\/m5\-zb\.amap\.com\/ws\/vip\/user\-member\-info\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data.isVip88 = 1
body.data.isBannerDisplay = false
body.data.rightTypeDetail = []

body = JSON.stringify(body)

$done({
  body
})
