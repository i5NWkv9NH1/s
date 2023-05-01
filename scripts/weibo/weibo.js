/**
 * @name weibo
 * @desc 微博国际版
 * @date 2023-05-01
 */
const url = $request.url;
if (!$response.body) $done({});

let body = JSON.parse($response.body);

/**
 * @match ^https?:\/\/api\.weibo\.cn\/\d{1}\/statuses\/friends\/timeline
 * @match ^https?:\/\/weibointl\.api\.weibo\.cn\/portal.php\?a=get_coopen_ads
 * @match ^https?:\/\/weibointl\.api\.weibo\.cn\/portal.php\?a=open\_app\&ct\=user
 */

switch (url) {
  case url.match(/friends\/timeline/)?.input: {
    body.ad = [];
    body.advertises = [];
    break;
  }
  case url.match(/a=get_coopen_ads/)?.input: {
    if (
      url.indexOf('a=get_coopen_ads') !== -1 ||
      url.indexOf('c=ad') !== -1 ||
      url.indexOf('slot=coopen') !== -1
    ) {
      body.data.ad_list = [];
      body.data.gdt_video_ad_ios = [];
      body.data.gdt_video_ad_android.horizontal_video = [];
      body.data.gdt_video_ad_android.vertical_video = [];
      body.data.display_ad = null;
      body.data.ad_type = null;
    }
    break;
  }
  case url.match(/a=open\_app\&ct\=user/)?.input: {
    body.data.me_isvip = 1;
    body.data.me_notvip = 0;
    body.data.new_ad_status_hot = 0;
    body.data.new_ad_status_search = 0;
    body.data.new_ad_status_timeline = 0;
    body.data.new_ad_uve_android = 0;
    body.data.uve_feed_ad = 0;
    body.data.uve_hot_ad = 0;
    body.data.vip_download_img_orignal = 1;
    body.data.vip_info.is_svip = 1;
    body.data.vip_info.is_vip = 1;
    break;
  }
}

$done({ body: JSON.stringify(body) });
