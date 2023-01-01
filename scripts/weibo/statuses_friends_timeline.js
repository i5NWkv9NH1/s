/**
 * @desc
 * @url ^https?:\/\/api\.weibo\.cn\/\d{1}\/statuses\/friends\/timeline
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.ad = []
body.advertises = []

body = JSON.stringify(body)

$done({
  body
})
