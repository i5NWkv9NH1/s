/**
 * @desc
 * @url ^https?:\/\/pan\.baidu\.com\/api\/usercfg\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.user_new_define_cards = []

body = JSON.stringify(body)

$done({
	body
})
