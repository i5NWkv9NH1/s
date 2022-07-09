/**
 * @description 华尔街见闻 user
 * @url ^https?:\/\/api\-one\.wallstcn\.com\/apiv\d{1}\/vipv\d{1}\/vip\_info?
 */


let body = JSON.parse($response.body);

body.data.is_vip = true

if (body.data.expire_day) {
	body.data.expire_day = 2650197302
}
if (body.data.end_time) {
	body.data.end_time = 2650197302
}
if (body.data.bought_count) {
	body.data.bought_count = 1
}

 body = JSON.stringify(body);
 $done({
		 body
 });
