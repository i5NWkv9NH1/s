/**
 * @description banner
 * @url ^https?:\/\/ke\.fenbi\.com\/iphone\/v\d{1}\/user\_member\/entry\?
 */

let body = JSON.parse($response.body)

body.data.banners = []

body = JSON.stringify(body)
$done({
	body
})
