/**
 * @desc 个人页
 * @url ^https?:\/\/ap(i|p)\.bilibili\.com\/x\/v\d{1}\/account\/mine\?
 * @date 2021-09-22
 */

 let body = $response.body;

 // body.data
 body.data.vip_type = 2;
 body.data.vip_section = null;

 // body.data.vip
 body.data.vip.status = 1;
 body.data.vip.due_date = 1669824160;
 body.data.vip.vip_pay_type = 1;
 body.data.vip.type = 2;

 // fake! xD
 body.data.level = 6;
 body.data.coin = 52312;
 body.data.follower = 218549;
 body.data.bcoin = 4058;

 const myFeats = [
	 {
		 id: 397,
		 title: "历史记录",
		 icon: "http://i0.hdslb.com/bfs/archive/8385323c6acde52e9cd52514ae13c8b9481c1a16.png",
		 uri: "bilibili://user_center/history",
	 },
	 {
		 id: 398,
		 title: "我的收藏",
		 icon: "http://i0.hdslb.com/bfs/archive/d79b19d983067a1b91614e830a7100c05204a821.png",
		 uri: "bilibili://user_center/favourite",
	 },
	 {
		 id: 396,
		 title: "离线缓存",
		 icon: "http://i0.hdslb.com/bfs/archive/5fc84565ab73e716d20cd2f65e0e1de9495d56f8.png",
		 uri: "bilibili://user_center/download",
	 },
 ];

 const upFeats = [];

 const suggestFeats = [
	 {
		 id: 410,
		 title: "设置",
		 icon: "http://i0.hdslb.com/bfs/archive/e932404f2ee62e075a772920019e9fbdb4b5656a.png",
		 uri: "bilibili://user_center/setting",
	 },
 ];
 const moreFeats = [];

 body.data.sections_v2 = [
	 { items: [...myFeats], style: 1, button: {} },
	 {
		 items: [...upFeats],
		 up_title: "创作中心",
		 title: "创作中心",
		 style: 1,
		 button: {},
	 },
	 { items: [...suggestFeats], title: "推荐服务", style: 1, button: {} },
	 { items: [...moreFeats], title: "更多服务", style: 2, button: {} },
 ];

 body = JSON.parse(body);

 body = JSON.stringify(body);

 $done({
	 body,
 });
