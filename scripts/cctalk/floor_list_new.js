/**
 * @desc
 * @url ^https:\/\/cctalk\.hjapi\.com\/find\/v\d{1}\.\d{1}\/floor_list_new\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data.items = []

body = JSON.stringify(body)

$done({
  body
})
