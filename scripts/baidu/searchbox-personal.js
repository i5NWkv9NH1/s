/**
 * @desc
 * @url ^https?:\/\/mbd\.baidu\.com\/searchbox\?action\=personal
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data = {}

body = JSON.stringify(body)

$done({
	body
})
