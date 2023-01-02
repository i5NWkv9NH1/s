/**
 * @description 广告
 * @url ^https?:\/\/www\.xiaohongshu\.com\/api\/sns\/v\d{1}\/tag\/ads\_engage
 */

let body = JSON.parse($response.body)

body.data.default_img_list = []

body = JSON.stringify(body)
$done({
  body
})
