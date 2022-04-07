/**
 * @desc 虎扑 首页热榜页 去广告
 * @url ^https?:\/\/bbs\.mobileapi\.hupu\.com\/\d{1}\/\d{1}.\d{1}\.\d{0,4}\/bbsallapi\/recommend\/v\d{1}\/getRecommendList?
 */
 let body = JSON.parse($response.body);

 var keywords = ['娱乐圈', '虎扑助学基金会', '汽车区', '影视区', '数码综合讨论', ]

 delete body.result.ad_inside_pop
 body.result.ad_flow = []
 body.result.recommendTags = []
 body.result.data = body.result.data.filter(item => {
	 return keywords.indexOf(item.forum_name) === -1
 })

 body.result.recommendHotTopTags = []
 body.result.recommendOperatingBanners = []

 delete body.result.ad_poster;


 body = JSON.stringify(body);

 $done({
	 body
 })
