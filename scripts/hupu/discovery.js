/**
 * @desc 虎扑 我的 移除多余的游戏块
 * @url ^https?:\/\/more\.mobileapi\.hupu\.com\/api\/old\/discovery?
 */
 let body = JSON.parse($response.body);

 body.data.ad_page_id = ''
 body.data.discovery = []

 delete body.data.banner
 delete body.data.games
 delete body.data.package_icon

 body = JSON.stringify(body);

 $done({
	 body
 })
