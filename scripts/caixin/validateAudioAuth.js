/**
 * @desc
 * @url ^https:\/\/gateway\.caixin\.com\/api\/app\-api\/auth\/validateAudioAuth\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data.audioProductCodeList = []
body.data.power = 1

body = JSON.stringify(body)

$done({
  body
})
