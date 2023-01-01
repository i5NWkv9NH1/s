/**
 * @desc
 * @url ^https?:\/\/message\.feidee\.com\/message\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.Messages = []

body = JSON.stringify(body)

$done({
  body
})
