/**
 * @description 首页feeed去广告
 * @url ^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d{1}\/homefeed?
 */

let body = JSON.parse($response.body)

body.data = body.data.filter((item) => item.is_ads !== true)

body = JSON.stringify(body)
$done({
  body
})
