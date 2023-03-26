/**
 * @url ^https?:\/\/m.client.10010.com\/mobileService/uniAdmsInterface\/getHomePageAd
 */

let body = JSON.parse($response.body);

body.signinAdv_A5.advCntList = []
body.signinAdv_A5_1.advCntList = []
body.yingxiaoAdv_A5.advCntList = []
body.fuchuangAdv_A8.advCntList = []
body.mainNavAdv_A8.advCntList = []
body.zhuanquloucengAdv_A5.advCntList = []
body.homeAdv_A5.advCntList = []

body = JSON.stringify(body)

$done({
	body
})
