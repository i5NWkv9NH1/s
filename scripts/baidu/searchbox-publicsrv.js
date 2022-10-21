/**
 * @desc
 * @url ^https?:\/\/mbd\.baidu\.com\/searchbox\?action\=publicsrv
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.result.surround_poi = []

body = JSON.stringify(body)

$done({
	body
})
