/**
 * @desc
 * @url ^https?:\/\/pan\.baidu\.com\/act\/api\/activityentry\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.popup_list = []

body = JSON.stringify(body)

$done({
	body
})
