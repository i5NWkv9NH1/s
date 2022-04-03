/**
 * @description 首页
 * @url ^https?:\/\/api\.gongkaoleida\.com\/api\/v\d{1}\_\d{1}\_\d{1}\/index?
 */


 let body = JSON.parse($response.body);

 var keywords = ['签到', '助考锦鲤', '选调生']

 body.data.bottomSlogan = ''
 body.data.bottomShare = {
	 title: '',
	 shareInfo: {
		 weiboShareTitle: '',
		 shareUrl: '',
		 shareDesc: '',
		 shareTitle: '',
	 },
	 tag: '',
	 scheme: ''
 }
 body.data.blockList[0].list = body.data.blockList[0].list.filter(item => keywords.indexOf(item.name) === -1)

 body = JSON.stringify(body);
 $done({
		 body
 });
