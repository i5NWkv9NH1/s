/**
 * @desc
 * @url
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data = []
body.exclude_id_list = []

body = JSON.stringify(body)

$done({
  body
})
