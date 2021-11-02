/**
 * @desc
 * @url ^https?:\/\/sns\.amap\.com\/ws\/msgbox\/pull\d{1}\?
 * @date 2021-09-22
 */

 let body = $response.body;
 body = JSON.parse(body);

 body.msgs = []

 body = JSON.stringify(body);

 $done({
	 body
 })
