/**
 * @desc
 * @url ^https?:\/\/bj\.app\.yiche\.com\/webapi\/app\d{4}\/v\d{3}\/ad\/app\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.Data = []

body = JSON.stringify(body)

$done({
	body
})
