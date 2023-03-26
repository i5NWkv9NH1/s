/**
 * @url ^https?:\/\/m.client.10010.com\/mobileService\/customer\/indexExpressNewsAndRecommend.htm
 */

let body = JSON.parse($response.body);

body.content = []

body = JSON.stringify(body)

$done({
	body
})
