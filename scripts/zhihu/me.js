/**
 * @description me
 * @url ^https?:\/\/www\.zhihu\.com\/api\/v\d{1}\/me?
 */


 let body = JSON.parse($response.body);

	body.vip_info.is_vip = true
	body.is_realname = true



 body = JSON.stringify(body);
 $done({
		 body
 });
