/**
 * @description 华尔街见闻 vip stream
 * @url ^https?:\/\/api\-one\.wallstcn\.com\/apiv\d{1}\/content\/vip\/stream\?
 */

 let body = JSON.parse($response.body);

	body.data.items = body.data.items.map(item => {
		item.resource.is_paid = true;
		return item
	})

body = JSON.stringify(body);
$done({
		body
});
