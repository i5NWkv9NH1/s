/**
 * @desc
 * @url ^https?:\/\/m5\.amap\.com\/ws\/valueadded\/alimama\/splash\_screen\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data.ad = []

body = JSON.stringify(body)

$done({
  body
})
