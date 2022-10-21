/**
 * @desc
 * @url ^https?:\/\/mbd\.baidu\.com\/baiduboxapp\/personal\/index\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data.groups = []

body = JSON.stringify(body)

$done({
	body
})
