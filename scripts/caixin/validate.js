/**
 * @desc
 * @url ^https:\/\/gateway\.caixin\.com\/api\/app\-api\/auth\/validate\?
 * @date 2021-09-22
 */
console.log($response.body)

let body = JSON.parse($response.body)

body.data.info.power = 1

body = JSON.stringify(body)

$done({
  body
})
