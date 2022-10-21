/**
 * @desc
 * @url ^https?:\/\/pan\.baidu\.com\/point\/product\/optlist\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data.list = []

body = JSON.stringify(body)

$done({
	body
})
