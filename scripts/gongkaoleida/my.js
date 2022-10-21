/**
 * @description
 * @url ^https?:\/\/api\.gongkaoleida\.com\/api\/v\d{1}\_\d{1}\/my\/index\?
 */

let body = JSON.parse($response.body)

body.data.btns = []

body = JSON.stringify(body)
$done({
	body
})
