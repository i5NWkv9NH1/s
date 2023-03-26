/**
 * @url ^https?:\/\/m.client.10010.com\/mobileserviceNine\/homefusion\/selTips
 */

let body = JSON.parse($response.body);

body['HomeFusion.jingxuanloucengAdv_A8']['jingxuanloucengAdv_A8'] = []
body['HomeFusion.homeAdv_A5']['advCntList'] = []

body = JSON.stringify(body)

$done({
	body
})
