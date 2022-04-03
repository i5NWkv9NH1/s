/**
 * @description 首页浮动按钮
 * @url ^https?:\/\/market\-api\.fenbi\.com\/iphone\/v\d{1}\/assistant\/entrance\/show?
 */


 let body = JSON.parse($response.body);

body.data.show = false

 body = JSON.stringify(body);
 $done({
		 body
 });
