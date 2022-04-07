/**
 * @desc 虎扑 首页tab
 * @url ^https?:\/\/games\.mobileapi\.hupu\.com\/\d{1}\/\d{1}.\d{1}\.\d{0,4}\/hot\/category?
 */
 let body = JSON.parse($response.body);

 body.data = [
	 { id: 0, name: '全站', sort: 1 },
	 { id: 1, name: '步行街', sort: 2 },
 ]

 body = JSON.stringify(body);

 $done({
	 body
 })
