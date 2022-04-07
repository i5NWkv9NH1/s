/**
 * @desc 虎扑 搜索关键字
 * @url ^https?:\/\/games\.mobileapi\.hupu\.com\/\d{1}\/\d{1}.\d{1}\.\d{0,4}\/search\/v\d{1}\/hotkeylist?
 */
 let body = JSON.parse($response.body);

 body.result.list = []
 body.result.ad_page_id = ''
 delete body.result.banner

 body = JSON.stringify(body);

 $done({
	 body
 })
