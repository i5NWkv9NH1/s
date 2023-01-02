/**
 * @desc
 * @url ^https?:\/\/data\.seeyouyima\.com\/v\d{1}\/user\_recommended\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data.list = []

body = JSON.stringify(body)

$done({
  body
})
