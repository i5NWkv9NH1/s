// people app
// 人民日报 - 首页去广告
let body = JSON.parse($response.body);

body['data'] = body['data'].filter((item) => !item['adv_own_id']);

$done({ body: JSON.stringify(body) });
