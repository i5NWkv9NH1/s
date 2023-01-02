/**
 * @description
 * @url ^https?:\/\/api\.pinduoduo\.com\/api\/aquarius\/hungary\/global\/homepage\?
 */

let body = JSON.parse($response.body)

body.list = []

body = JSON.stringify(body)
$done({
  body
})
