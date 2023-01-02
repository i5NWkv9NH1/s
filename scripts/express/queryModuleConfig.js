/**
 * @desc
 * @url ^https?:\/\/ccsp\-egmas\.sf\-express\.com\/cx\-app\-base\/base\/app\/user\/queryModuleConfig
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

const features = ['寄快递', '学生专享']

body.obj = body.obj.filter((item) => item.id === 'app-index-2022')
body.obj[0].sceneList = body.obj[0].sceneList.filter(
  (item) => features.indexOf(item.sceneName) !== -1
)

body = JSON.stringify(body)

$done({
  body
})
