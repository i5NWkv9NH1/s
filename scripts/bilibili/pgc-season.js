/**
 * @desc pgc season? 修改番剧页面的会员状态
 * @url ^https?:\/\/ap(i|p)\.bilibili\.com\/pgc\/view\/v\d{1}\/app\/season\?
 * @date 2021-09-22
 */

let body = $response.body

body.data.user_status.vip = 1

body = JSON.parse(body)

body = JSON.stringify(body)

$done({
	body
})
