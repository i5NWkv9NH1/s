/**
 * @desc
 * @url ^https?:\/\/minipro\.baidu\.com\/ma\/history\/list\?branchname\=baiduboxapp
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data.items = []

body = JSON.stringify(body)

$done({
	body
})
