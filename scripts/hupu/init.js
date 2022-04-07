/**
 * @desc 虎扑 初始化
 * @url ^https?:\/\/games\.mobileapi\.hupu\.com\/\d{1}\/\d{1}.\d{1}\.\d{0,4}\/bplapi\/device\/v\d{1}\/init?
 */
 let body = JSON.parse($response.body);

 body.result.core = {
	 is_ad: 0,
	 ad_type: 0000000,
	 ad_show: 0,
	 show: 0
 }
 body.result.watermark_cfg = []
 body.result.client.schema = []
 body.result.client.team_select = []
 body.result.third_ad = ''
 body.result.base_line.is_ad_show = "0"

 body.result.use_wk = 0

 delete body.result.toutiao_sdk


 body = JSON.stringify(body);

 $done({
	 body
 })
