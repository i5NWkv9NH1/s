/**
 * @description banner
 * @url ^https?:\/\/market\-api\.fenbi\.com\/iphone\/v\d{1}\/assistant\/my\?
 */

let body = JSON.parse($response.body)

body.data.msgList = []
body.data.show = false

body = JSON.stringify(body)
$done({
	body
})
