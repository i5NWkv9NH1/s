/**
 * @name xiaohongshu
 * @desc 小红书
 * @date 2023-05-01
 */
const url = $request.url;
if (!$response.body) $done({});

let body = JSON.parse($response.body);

/**
 * @match ^https?:\/\/www\.xiaohongshu\.com\/api\/sns\/v\d{1}\/tag\/ads\_engage
 * @match ^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d{1}\/homefeed\/categories?
 * @match ^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d{1}\/system_service\/config?
 * @match ^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d{1}\/homefeed?
 * @match ^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d{1}\/system_service\/splash\_config
 */

switch (url) {
  case url.match(/ads\_engage/)?.input: {
    body.data.default_img_list = [];
    break;
  }
  case url.match(/homefeed\/categories/)?.input: {
    // prettier-ignore
    var keywords = [ '视频','直播','美甲','潮鞋','文具手账','舞蹈','护肤','影视','情感','摄影','校园','阅读','健身','音乐','明星','旅行','搞笑','个护','婚礼','Vlog','职场','母婴','汽车','知识科普','体育','机车','绘画','头像','美甲','彩妆','游戏','科技数码','美食','时尚','头像','壁纸'
    ]
    body.data.categories = body.data.categories.filter(
      (item) => keywords.indexOf(item.name) === -1
    );
    break;
  }
  case url.match(/system_service\/config/)?.input: {
    body.data.home_banner = [];
    body.data.splash = [];
    body.data.cmt_words = [];
    body.data.home_top_banner = {};
    body.data.my_banner = {};
    body.data.tabbar.tabs = body.data.tabbar.tabs.fitler(
      (item) => item.title !== '购买'
    );
    break;
  }
  case url.match(/sns\/v\d{1}\/homefeed/)?.input: {
    try {
      body.data = body.data.filter((item) => item.is_ads !== true);
    } catch {
      if (body.data) {
        let newItems = [];
        for (let item of body.data) {
          // 信息流-直播
          if (item.model_type === 'live_v2') {
            continue;
            // 信息流-赞助
          } else if (item.ads_info) {
            continue;
            // 信息流-带货
          } else if (item.card_icon) {
            continue;
            // 信息流-商品
          } else if (item?.note_attributes?.includes('goods')) {
            continue;
          } else {
            newItems.push(item);
          }
        }
        body.data = newItems;
      }
    }
    break;
  }
  case url.match(/system_service\/splash\_config/)?.input: {
    body.data.ads_groups = [];
    break;
  }
}

$done({ body: JSON.stringify(body) });
