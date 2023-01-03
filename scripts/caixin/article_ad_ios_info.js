/**
 * @desc
 * @url ^https:\/\/mappsv\d{1}\.caixin\.com\/channelv\d{1}\/article\_ad\_ios\_info\.json
 * @date 2021-09-22
 */
console.log($response.body)

let body = JSON.parse($response.body)

body.data.list520_video = []

body = JSON.stringify(body)

$done({
  body
})
