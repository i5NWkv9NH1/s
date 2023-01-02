/**
 * @description 开屏广告
 * @url ^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d{1}\/system_service\/splash\_config
 */

let body = JSON.parse($response.body)

body.data.ads_groups = []

body = JSON.stringify(body)
$done({
  body
})
