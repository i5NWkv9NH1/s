/**
 * @description 华尔街见闻 user
 * @url ^https?:\/\/api\-one\.wallstcn\.com\/apiv\d{1}\/user\/info\/me
 */


 let body = JSON.parse($response.body);

body.data.is_vip = true

 body = JSON.stringify(body);
 $done({
		 body
 });
