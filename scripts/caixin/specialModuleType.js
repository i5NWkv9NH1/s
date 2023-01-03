/**
 * @desc
 * @url ^https:\/\/gateway\.caixin\.com\/api\/app\-api\/specialModuleType\/getAll
 * @date 2021-09-22
 */
console.log($response.body)

let body = JSON.parse($response.body)

body.data = []

body = JSON.stringify(body)

$done({
  body
})
