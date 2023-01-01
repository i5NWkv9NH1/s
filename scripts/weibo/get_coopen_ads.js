/**
 * @desc
 * @url ^https?:\/\/weibointl\.api\.weibo\.cn\/portal.php\?a=get_coopen_ads
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data.ad_list = []
body.data.gdt_video_ad_ios = []
body.data.gdt_video_ad_android.horizontal_video = []
body.data.gdt_video_ad_android.vertical_video = []
body.data.display_ad = null
body.data.ad_type = null

body = JSON.stringify(body)

$done({
  body
})
