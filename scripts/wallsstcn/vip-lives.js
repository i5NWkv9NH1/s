/**
 * @description 华尔街见闻 user
 * @url ^https?:\/\/api\-one\.wallstcn\.com\/apiv\d{1}\/content\/lives\?
 */

let body = JSON.parse($response.body)

body.data.items = body.data.items.map((item) => {
	item.is_priced = true
	return item
})

body = JSON.stringify(body)
$done({
	body
})
