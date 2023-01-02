/**
 * @desc 猜你喜欢
 * @url ^https:\/\/cctalk\.hjapi\.com\/find\/v\d{1}\.\d{1}\/m\/channel\/content\_list\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data.list = []

body = JSON.stringify(body)

$done({
  body
})
