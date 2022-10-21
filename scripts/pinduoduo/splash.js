/**
 * @description
 * @url ^https?:\/\/api\.pinduoduo\.com\/api\/cappuccino\/splash\?
 */

let body = JSON.parse($response.body)

body.splash_list = []

body = JSON.stringify(body)
$done({
  body
})
