/**
 * @desc 关闭右上角通知
 * @url ^https?:\/\/ap(i|p)\.bilibili\.com\/x\/member\/v\d{1}\/notice\?
 * @date 2021-09-22
 */

let body = $response.body

body.data = {
	status: 0
}

body = JSON.parse(body)

body = JSON.stringify(body)

$done({
	body
})
