/**
 * @url ^https?:\/\/m.client.10010.com\/mobileserviceNine\/homefusion\/fuInter
 */

let body = JSON.parse($response.body);

body['HomeFusion.fuchuangAdv_A8']['advCntList'] = []
body['HomeFusion.backGroundQuery']['result'] = []
body['HomeFusion.homeAdv_A5']['advCntList'] = []

body = JSON.stringify(body)

$done({
	body
})
