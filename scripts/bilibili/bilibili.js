/**
 * @name bilibili
 * @desc 哔哩哔哩动画
 * @date 2023-05-01
 */
const url = $request.url;
if (!$response.body) $done({});

let body = JSON.parse($response.body);

/**
 * @match ^https?:\/\/ap(p|i)\.bilibili\.com\/x\/v\d{1}\/feed\/index\?^https?:\/\/ap(p|i)\.bilibili\.com\/x\/v\d{1}\/feed\/index\?
 */
console.log('bilibili:: starting match');
switch (url) {
  case url.match(/feed/)?.input: {
    console.log('bilibili:: match feed');
    // prettier-ignore
    var KEYWORD = [
      'banner_v5','banner_v8', 'banner', 'cm_v2','large_cover_v6','small_cover_v10', 'cm_double_v9', 'ad_inline_av',  'game', 'small_cover_v9','large_cover_v1','banner','ad_web_s','ad_phone_s','live','bangumi','ad_web_gif', 'ad_ad', 'ad_player', 'ad_phone_s', 'article','vertical_av','static_banner','is_ad_loc','small_cover_v2'
    ];
    body.data.items = body.data.items.filter((item) => {
      // prettier-ignore
      if (item.hasOwnProperty('card_type') && item.hasOwnProperty('card_goto')) {
        if(KEYWORD.indexOf(item.card_type) !== -1) return false;
        if(KEYWORD.indexOf(item.card_goto) !== -1) return false;
      } else {
        return true
      }
    });
    break;
  }
  default: {
    console.log('bilibili:: match default');
  }
}
console.log('bilibili:: match done');
$done({ body: JSON.stringify(body) });
