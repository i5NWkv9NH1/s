/**
 * @url ^https?:\/\/m.client.10010.com\/mobileService\/query\/querySmartBizHome.htm?
 */

let body = JSON.parse($response.body);

body.list = []

body = JSON.stringify(body)

$done({
	body
})
