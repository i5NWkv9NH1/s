/**
 * @desc
 * @url ^https?:\/\/pan\.baidu\.com\/pmall\/points\/goodslist\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.userinfo = {
	vip: 1,
	evip: 0,
	svip: 1,
	year_vip: 0,
	year_svip: 1,
	end_time: 2147483648
}
body.tablist = []
body.list = []

body = JSON.stringify(body)

$done({
	body
})
