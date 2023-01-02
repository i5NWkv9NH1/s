/**
 * @desc
 * @url ^https?:\/\/users\.seeyouyima\.com\/v\d{1}\/wo\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data.items = []
body.data.sections = []

body = JSON.stringify(body)

$done({
  body
})
