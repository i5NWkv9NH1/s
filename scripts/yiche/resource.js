/**
 * @desc
 * @url ^https?:\/\/api\.ycapp\.yiche\.com\/yicheapp\/getresourcebygroup\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

const keywords = [
	'N首页-豪华品牌tab',
	'N经销商详情页',
	'N车型经销商列表',
	'N易车实测页面',
	'N消息中心',
	'N新闻详情页',
	'N视频详情页',
	'N问答详情页',
	'N点评详情页',
	'N社区详情页',
	'N发现-推荐tab',
	'N发现-直播tab',
	'N车币商城页',
	'N车币商城详情页',
	'N福利中心页',
	'N车币明细页'
]

body.data.bjPageTimeConfigIos.pageConfig =
	body.data.bjPageTimeConfigIos.pageConfig.filter(
		(item) => keywords.indexOf(item.name) === -1
	)

body = JSON.stringify(body)

$done({
	body
})
