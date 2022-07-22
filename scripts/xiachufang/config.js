/**
 * @desc
 * @url ^https?:\/\/api\.xiachufang\.com\/v\d{1}\/config\/get\.json
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.content.my_course_url = ''
body.classroom_url = ''
body.content.splash_ad_req_time = 9999999
body.content.splash_ad_lifecycle_interval = 999999
body.content.iap_purchase_guide_url = ''
body.content.chustudio_url = ''
body.content.column_url = ''
body.content.banquet_url = ''
body.content.wakeup_white_list = []
delete(body.content.app_track_path)

body = JSON.stringify(body)

$done({
	body
})
