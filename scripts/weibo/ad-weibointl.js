/**
 * @desc
 * @url ^https:\/\/api\.weibo\.cn\/2\/ad\/weibointl\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data = []

body = JSON.stringify(body)

$done({
  body
})
