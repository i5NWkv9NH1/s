/**
 * @desc
 * @url ^https?:\/\/userapi\.feidee\.net\/v\d{1}\/profile\/basic\_info
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.is_vip = true

body = JSON.stringify(body)

$done({
  body
})
