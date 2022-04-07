/**
 * @desc 虎扑 首页 热榜页面 话题
 * @url ^https?:\/\/bbs\.mobileapi\.hupu\.com\/\d{1}\/\d{1}.\d{1}\.\d{0,4}\/bbsallapi\/tag\/v\d{1}\/heatTag?
 */
 let body = JSON.parse($response.body);

 body.data.content = []
 body.data.pageSize = 1
 body.data.totalPage = 1
 body.data.totalElements = 0

 body = JSON.stringify(body);

 $done({
	 body
 })
