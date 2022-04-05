/**
 * @description show entry
 * @url ^https?:\/\/api\.zhihu\.com\/flow\/show\_entrance?
 */


 let body = JSON.parse($response.body);

 body.status = 0
 body.exp_group = ""

 body = JSON.stringify(body);
 $done({
		 body
 });
