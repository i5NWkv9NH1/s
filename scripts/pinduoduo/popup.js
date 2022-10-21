/**
 * @description
 * @url ^https?:\/\/api\.pinduoduo\.com\/api\/aquarius\/hungary\/global\/app\_popup\?
 */

let body = JSON.parse($response.body)

body.list = []

body = JSON.stringify(body)
$done({
  body
})
