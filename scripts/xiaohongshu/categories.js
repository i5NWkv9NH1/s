/**
 * @description 首页分类
 * @url ^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d{1}\/homefeed\/categories?
 */


let body = JSON.parse($response.body);

// keywords
var keywords = ['视频', '直播', '美甲', '潮鞋', '文具手账', '舞蹈', '护肤', '影视', '情感', '摄影', '校园', "阅读", "健身", "音乐", "明星", "旅行", "搞笑", "个护", "婚礼", "Vlog", "职场", "母婴", "汽车", "知识科普", "体育", "机车", '绘画', '头像', '美甲', '彩妆', '游戏', '科技数码', '美食', '时尚', '头像', '壁纸']

body.data.categories = body.data.categories.filter(item => keywords.indexOf(item.name) === -1)

body = JSON.stringify(body);
$done({
    body
});
