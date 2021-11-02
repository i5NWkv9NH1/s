"use strict";
/**
 * @desc 首页移除广告
 * @url ^https?:\/\/ap(p|i)\.bilibili\.com\/x\/v\d{1}\/feed\/index\?
 * @date 2021-09-22
 */
// @ts-ignore
var body = $response.body;
body = JSON.parse(body);
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
var items = body.data.items.filter(function (item) {
    return (KEYWORD.indexOf(item.card_type) === -1 &&
        KEYWORD.indexOf(item.card_goto) === -1 &&
        KEYWORD.indexOf(item.goto) === -1);
});
body.data.items = items;
body.data.config = {
    auto_refresh_time: null,
    autoplay_card: 0,
    column: 2,
    feed_clean_abtest: 0,
    home_transfer_test: 0,
    show_inline_danmaku: 0,
    toast: {
        has_toast: false,
        toast_message: '测试'
    }
};
body.data.items.forEach(function (item) {
    item.track_id = '';
});
body = JSON.stringify(body);
$done({
    body: body
});
