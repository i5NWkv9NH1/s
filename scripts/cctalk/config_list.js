/**
 * @desc
 * @url ^https:\/\/cctalk\.hjapi\.com\/sns\/v\d{1}\.\d{1}\/medal\/all\/config_list\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data.list = []

body = JSON.stringify(body)

$done({
  body
})
