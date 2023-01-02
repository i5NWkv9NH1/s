/**
 * @desc
 * @url ^https?:\/\/jingqi\.youzibuy\.com\/tae\_config\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body = []

body = JSON.stringify(body)

$done({
  body
})
