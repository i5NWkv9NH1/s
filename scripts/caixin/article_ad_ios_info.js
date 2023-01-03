/**
 * @desc
 * @url ^https:\/\/mappsv\d{1}\.caixin\.com\/channelv\d{1}\/article\_ad\_ios\_info\.json
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data.list520_video = []
body.data.list_audio = []
body.data.list513_rate.ad_id = 0
body.data.list513_rate.ad_rate = 0

body = JSON.stringify(body)

$done({
  body
})
