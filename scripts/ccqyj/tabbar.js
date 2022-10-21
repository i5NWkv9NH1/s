/**
 * @desc
 * @url ^https?:\/\/weatherapi\.ccqyj\.com\/navigation\/tabbar
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

const keywords = ['listen', 'video', 'calendar']

body.data = body.data.filter(
	(item) => keywords.indexOf(item.identification) === -1
)

body = JSON.stringify(body)

$done({
	body
})
