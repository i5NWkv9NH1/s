/**
 * @name xiachufang
 * @desc 下厨房
 * @date 2023-05-01
 */
const url = $request.url
if (!$response.body) $done({})

let body = JSON.parse($response.body)

/**
 * @match ^https?:\/\/api\.xiachufang\.com\/v\d{1}\/config\/get\.json
 * @match ^https?:\/\/api\.xiachufang\.com\/v\d{1}\/homepage\/paged\_waterfall\recommendations\.json
 */

switch (url) {
  case url.match(/config\/get\.json/)?.input: {
    body.content.my_course_url = ''
    body.classroom_url = ''
    body.content.splash_ad_req_time = 9999999
    body.content.splash_ad_lifecycle_interval = 999999
    body.content.iap_purchase_guide_url = ''
    body.content.chustudio_url = ''
    body.content.column_url = ''
    body.content.banquet_url = ''
    body.content.wakeup_white_list = []
    body.tab_name = ['推荐', '分类']
    delete body.content.app_track_path
    break
  }
  case url.match(/paged\_waterfall\recommendations\.json/)?.input: {
    body.cells = body.cells
      .filter((item) => item.label !== '广告')
      .map((item) => {
        delete item.impression_sensor_events
        delete item.click_sensor_events
        delete item.tracking
        return item
      })
    break
  }
}

$done({ body: JSON.stringify(body) })
