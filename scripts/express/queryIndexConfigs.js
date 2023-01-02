/**
 * @desc
 * @url ^https?:\/\/ccsp\-egmas\.sf\-express\.com\/cx\-app\-base\/base\/app\/user\/queryIndexConfigs
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

const features = ['快速寄件', '扫一扫', '取快递']

body.obj.datas.filter((item) => features.indexOf(item.name) !== -1)

body = JSON.stringify(body)

$done({
  body
})
