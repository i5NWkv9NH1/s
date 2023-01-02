/**
 * @desc
 * @url ^https?:\/\/api\.raindrop\.io\/v\d{1}\/user
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.user.pro = true

body = JSON.stringify(body)

$done({
  body
})
