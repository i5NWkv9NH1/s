/**
 * @desc 屏蔽小游戏
 * @url ^https?:\/\/miniapp\.bilibili\.com\/api\/miniapp\/configs\/global\?
 * @date 2021-09-22
 */

 let body = JSON.parse($response.body);

body.data = {
	maxRunningCount: 0,
	andEngineType: 0,
	maxGameRunningCount: 0,
	maxAppletRunningCount: 0,
	menuConfig: {
		tabList: []
	},
	scrappedRuntimeCount: 0
}

body = JSON.stringify(body)

$done({
	body
})
