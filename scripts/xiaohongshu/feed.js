/**
 * @description 首页feeed去广告
 * @url ^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d{1}\/homefeed?
 */

let body = JSON.parse($response.body)

try {
  body.data = body.data.filter((item) => item.is_ads !== true)
} catch {
  if(body.data) {
    let newItems = [];
    for (let item of obj.data) {
      // 信息流-直播
      if (item.model_type === "live_v2") {
        continue;
        // 信息流-赞助
      } else if (item.ads_info) {
        continue;
        // 信息流-带货
      } else if (item.card_icon) {
        continue;
        // 信息流-商品
      } else if (item?.note_attributes?.includes("goods")) {
        continue;
      } else {
        newItems.push(item);
      }
    }
    body.data = newItems;
  }
}

body = JSON.stringify(body)
$done({
  body
})
