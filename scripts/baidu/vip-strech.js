/**
 * @desc
 * @url ^https?:\/\/mbd\.baidu\.com\/v\d{1}\/vip\/strech\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data.end_time = 2147483648
body.data.is_vip = 1

body = JSON.stringify(body)

$done({
	body
})
