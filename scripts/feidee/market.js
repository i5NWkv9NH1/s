/**
 * @desc
 * @url ^https?:\/\/yunmk\.feidee\.net\/cab\-market\-ws\/market\/v\d{1}\/contents
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data = []

body = JSON.stringify(body)

$done({
  body
})
