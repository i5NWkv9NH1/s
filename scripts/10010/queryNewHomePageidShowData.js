/**
 * @url ^https?:\/\/m.10010.com\/decoration\-data\/scaffold\/queryNewHomePageidShowData?
 */

let body = JSON.parse($response.body);

body.data = []

body = JSON.stringify(body)

$done({
	body
})
