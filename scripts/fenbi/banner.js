/**
 * @description banner
 * @url ^https?:\/\/keapi\.fenbi\.com\/iphone\/xingce\/small\_banner\?
 */

let body = JSON.parse($response.body)

body.data.items = []

body = JSON.stringify(body)
$done({
	body
})
