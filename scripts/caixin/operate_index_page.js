/**
 * @desc
 * @url ^https:\/\/mappsv\d{1}\.caixin\.com\/index\_page\_v\d{1}\/operate\_index\_page\_\d{1}.json
 * @date 2021-09-22
 */

console.log(typeof $response.body)
console.log(typeof $response.body.data.ios_ad_513)
console.log(typeof $response.body.data.list)

let body

if (typeof $response.body === 'object') {
  body = $response.body
} else if (typeof $response.body === 'string') {
  body = JSON.parse($response.body)
} else {
  console.log('typeof response body: ', typeof $response.body)
}

// let body = $response.body

body.data.ios_ad_513 = []
body.data.android_ad_513 = []
body.data.list = body.data.list.filter((item) => item.id !== '0')

if (typeof $response.body === 'string') {
  body = JSON.stringify(body)
}

$done({
  body
})
