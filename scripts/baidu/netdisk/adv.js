/**
 * @desc
 * @url ^https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/pcs\/adv\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.scene_list = []

body = JSON.stringify(body)

$done({
	body
})
