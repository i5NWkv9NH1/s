/**
 * @name bilibili
 * @desc 哔哩哔哩动画
 * @date 2023-05-01
 */
const url = $request.url
if (!$response.body) $done({})

let body = JSON.parse($response.body)

/**
 * @match ^https?:\/\/ap(p|i)\.bilibili\.com\/x\/v\d{1}\/feed\/index\?^https?:\/\/ap(p|i)\.bilibili\.com\/x\/v\d{1}\/feed\/index\?
 * @match ^https?:\/\/ap(p|i)\.bilibili\.com\/x\/v\d{1}\/search\?
 */
console.log('bilibili:: starting match')
switch (url) {
  case url.match(/feed/)?.input: {
  const params = url
                .split('&')
                .map(p => p.split('='))
                .reduce((obj, pair) => {
  const [key, value] = pair.map(decodeURIComponent);
  obj[key] = value;
    return obj;
  }, {});
    const device = params.device
    const deviceName = params.device_name
    const mobiApp = params.mobi_app
    const isPad =
      device.includes('pad') ||
      deviceName.includes('pad') ||
      mobiApp.includes('ipad')

    if (isPad) {
      // prettier-ignore
      const keywords = [
        'banner_v5','banner_v8', 'banner', 'cm_v2', 'cm_double_v9', 'ad_inline_av',  'game' ,'banner','ad_web_s','ad_phone_s','live','bangumi','ad_web_gif', 'ad_ad', 'ad_player', 'ad_phone_s', 'article','vertical_av','static_banner','is_ad_loc', 'banner_ipad_v8', 'cm_v1', 'ad_av'
      ];

      body.data.items = body.data.items.filter((item) => {
        // prettier-ignore
        const isCardTypeExist = keywords.indexOf(item.card_type) !== -1
        const isCardGoExist = keywords.indexOf(item.card_goto) !== -1
        if (isCardTypeExist || isCardGoExist) {
          return false
        } else {
          return true
        }
      })
      body.data.config.ipad_hd_abtest = 0
      body.data.config.enable_rcmd_guide = false
      body.data.config.show_inline_danmaku = 0

      break
    } else {
      console.log('bilibili:: match feed')
      // prettier-ignore
      const keywords = [
        'banner_v5','banner_v8', 'banner', 'cm_v2', 'cm_double_v9', 'ad_inline_av',  'game' ,'banner','ad_web_s','ad_phone_s','live','bangumi','ad_web_gif', 'ad_ad', 'ad_player', 'ad_phone_s', 'article','vertical_av','static_banner','is_ad_loc', 'banner_ipad_v8', 'cm_v1', 'ad_av'
      ];
      body.data.items = body.data.items.filter((item) => {
        // prettier-ignore
        const isCardTypeExist = keywords.indexOf(item.card_type) !== -1
        const isCardGoExist = keywords.indexOf(item.card_goto) !== -1
        if (isCardTypeExist || isCardGoExist) {
          return false
        } else {
          return true
        }
      })
      break
    }
  }
  case url.match(/search/)?.input: {
    var keywords = ['ad', 'game_ad', 'video_ad']
    body.data.item = body.data.item.filter((item) => {
      const isAd = keywords.indexOf(item.linktype) !== -1
      if (isAd) return false
      else return true
    })
    break
  }
  default: {
    console.log('bilibili:: match default')
  }
}
console.log('bilibili:: match done')
$done({ body: JSON.stringify(body) })
