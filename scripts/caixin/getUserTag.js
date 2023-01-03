/**
 * @desc
 * @url ^https:\/\/gateway\.caixin\.com\/api\/usertag\/api\/getUserTag\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data = ['PRO']

body = JSON.stringify(body)

$done({
  body
})
