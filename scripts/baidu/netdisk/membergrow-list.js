/**
 * @desc
 * @url ^https?:\/\/pan\.baidu\.com\/act\/v\d{1}\/membergrow\/list\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.list = []

body = JSON.stringify(body)

$done({
	body
})
