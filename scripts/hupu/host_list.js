/**
 * @desc 虎扑 首页推荐页 移除广告、视频、关键字
 * @url ^https?:\/\/games\.mobileapi\.hupu\.com\/\d{1}\/\d{1}.\d{1}\.\d{0,4}\/buffer\/hotList?
 */
 let body = JSON.parse($response.body);
 var keywords = ['娱乐圈', '虎扑助学基金会', '汽车区', '影视区', '数码综合讨论', ]

 body.result.notice = ''
 body.result.banner_nav = []
 body.result.data = body.result.data.filter(item => {
	 item.data.light_replies = []
	 delete item.data.share
	 // 移除视频
	 return item.type !== 'vt' && keywords.indexOf(item.topic_name) === -1
 })

 body = JSON.stringify(body);

 $done({
	 body
 })
