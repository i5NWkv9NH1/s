/**
 * @desc
 * @url ^https?:\/\/weibointl\.api\.weibo\.cn\/portal.php\?a=open\_app\&ct\=user
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data.me_isvip = 1
body.data.me_notvip = 0
body.new_ad_status_hot = 0
body.new_ad_status_search = 0
body.new_ad_status_timeline = 0
body.new_ad_uve_android = 0
body.uve_feed_ad = 0
body.uve_hot_ad = 0
body.vip_download_img_orignal = 1
body.vip_info.is_svip = 1
body.vip_info.is_vip = 1


body = JSON.stringify(body)

$done({
  body
})
