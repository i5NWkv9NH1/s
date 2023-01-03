/**
 * @desc
 * @url ^https:\/\/gateway\.caixin\.com\/api\/app\-api\/caixinapp\/appinfo
 * @date 2021-09-22
 */

console.log($response.body)
let body = JSON.parse($response.body)

body.data.integralGroup.isShow = false
body.data.integralGroup.integralBtnList = []
body.data.articlePromotionList = []
body.data.downloadNeedPower = []

body = JSON.stringify(body)

$done({
  body
})
