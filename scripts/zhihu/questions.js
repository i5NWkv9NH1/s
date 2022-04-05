/**
 * @desc 回答列表广告
 * @url ^https?:\/\/api\.zhihu\.com\/questions\/\d{0,100}\/feeds?
 * @date 2021-09-22
 */

 let body = $response.body

 delete(body.ad_info)

 body = JSON.parse(body)

 body = JSON.stringify(body)

 $done({
	 body
 })
