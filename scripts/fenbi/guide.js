/**
 * @description
 * @url ^https?:\/\/ke\.fenbi\.com\/iphone\/v\d{1}\/guide\_center\/guides\?
 */

let body = JSON.parse($response.body)

body.datas = []

body = JSON.stringify(body)
$done({
	body
})
