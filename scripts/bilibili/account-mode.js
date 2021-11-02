/**
 * @desc 屏蔽账号模式弹窗
 * @url ^https?:\/\/ap(i|p)\.bilibili\.com\/x\/v\d{1}\/account\/mode\/status\?
 * @date 2021-09-22
 */

let body = $response.body

body.data = []

body = JSON.parse(body)

body = JSON.stringify(body)

$done({
	body
})
