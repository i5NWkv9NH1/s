/**
 * @description 发现页 tab
 * @url ^https?:\/\/hera\-webapp\.fenbi\.com\/iphone\/recommend\/tablist?
 */


 let body = JSON.parse($response.body);

	body.total = 3
	body.datas = [
		// 移除
		// { id: 0, name: '推荐' },
		// { id: 1, name: '干货' },
		{ id: 2, name: '圈子' },
		{ id: 5, name: '招考' },
		{ id: 3, name: '关注' },
	]

 body = JSON.stringify(body);
 $done({
		 body
 });
