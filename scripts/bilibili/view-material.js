/**
 * @desc 关闭视频下方推荐
 * @url ^https?:\/\/ap(p|i)\.bilibili\.com\/x\/v\d{1}\/view\/material\?
 * @date 2021-09-22
 */

let body = $response.body

body.data = []

body = JSON.parse(body)

body = JSON.stringify(body)

$done({
	body
})
