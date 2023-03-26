/**
 * @url ^https?:\/\/m.client.10010.com\/mobileserviceNine\/v\d{1}\/nav\/home?
 */

let body = JSON.parse($response.body);

body.datas.home = []
body.datas.homeTwo = []

body = JSON.stringify(body)

$done({
	body
})
