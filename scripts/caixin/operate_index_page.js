/**
 * @desc
 * @url ^https:\/\/mappsv\d{1}\.caixin\.com\/index\_page\_v\d{1}\/operate\_index\_page\_\d{1}.json
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data.ios_ad_513 = []
body.data.android_ad_513 = []
body.data.list = body.data.list.filter((item) => item.id !== '0')

body = JSON.stringify(body)

$done({
  body
})
