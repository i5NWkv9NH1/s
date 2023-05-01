'use strict';
/**
 * @desc 首页移除广告
 * @url ^https?:\/\/ap(p|i)\.bilibili\.com\/x\/v\d{1}\/feed\/index\?
 * @date 2021-09-22
 */
// @ts-ignore
const url = $request.url;
const method = $request.method;
const getMethod = 'GET';
const notifiTitle = 'bilibili-feed';
let body = JSON.parse($response.body);

var KEYWORD = [
  'banner_v5',
  'cm_v2',
  'large_cover_v6',
  'small_cover_v9',
  'large_cover_v1',
  'banner',
  'ad_web_s',
  'ad_phone_s',
  'live',
  'bangumi',
  'ad_web_gif',
  'article',
  'vertical_av',
  'static_banner',
  'is_ad_loc',
  'small_cover_v2'
];
body.data.items = body.data.items.filter((i) => {
  if (i.hasOwnProperty('card_type') && i.hasOwnProperty('card_goto')) {
    const cardType = i.card_type;
    const cardGoto = i.card_goto;
    if (cardType === 'banner_v8' && cardGoto === 'banner') {
      console.log(`轮播图去除`);
      return false;
    } else if (
      cardType === 'cm_v2' &&
      ['ad_web_s', 'ad_av', 'ad_web_gif', 'ad_player', 'ad_phone_s'].includes(
        cardGoto
      )
    ) {
      // ad_player大视频广告 ad_web_gif大gif广告 ad_web_s普通小广告 ad_av创作推广广告
      console.log(`${cardGoto}广告去除)`);
      return false;
    } else if (cardType === 'small_cover_v10' && cardGoto === 'game') {
      console.log('游戏广告去除');
      return false;
    } else if (cardType === 'cm_double_v9' && cardGoto === 'ad_inline_av') {
      console.log('创作推广-大视频广告');
      return false;
    } else if (cardType === 'live' || cardGoto === 'live') {
      console.log('移除直播');
      return false;
    }
  } else {
    console.log('body:' + $response.body);
    $notification.post(notifiTitle, '推荐页', '无card_type/card_goto');
  }
  return true;
});

body = JSON.stringify(body);
$done({
  body
});
