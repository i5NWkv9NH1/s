/**
 * @name fenbi
 * @desc 粉笔
 * @date 2023-05-01
 */
const url = $request.url;
if (!$response.body) $done({});

let body = JSON.parse($response.body);

/**
 * @match ^https?:\/\/keapi\.fenbi\.com\/iphone\/xingce\/small\_banner\?
 * @match ^https?:\/\/market\-api\.fenbi\.com\/iphone\/v\d{1}\/assistant\/entrance\/show?
 * @match ^https?:\/\/ke\.fenbi\.com\/iphone\/v\d{1}\/user\_member\/entry\?
 * @match ^https?:\/\/ke\.fenbi\.com\/iphone\/v\d{1}\/guide\_center\/guides\?
 * @match ^https?:\/\/market\-api\.fenbi\.com\/iphone\/v\d{1}\/assistant\/my\?
 * @match ^https?:\/\/hera\-webapp\.fenbi\.com\/iphone\/recommend\/tablist?
 */
switch (url) {
  case url.match(/small\_banner/)?.input: {
    body.data.items = [];
    break;
  }
  case url.match(/entrance\/show/)?.input: {
    body.data.show = false;
    break;
  }
  case url.match(/user\_member\/entry/)?.input: {
    body.data.banners = [];
    break;
  }
  case url.match(/guides/)?.input: {
    body.datas = [];
    break;
  }
  case url.match(/assistant\/my/)?.input: {
    body.data.msgList = [];
    body.data.show = false;
    break;
  }
  case url.match(/recommend\/tablist/)?.input: {
    body.total = 3;
    body.datas = [
      // 移除
      // { id: 0, name: '推荐' },
      // { id: 1, name: '干货' },
      { id: 2, name: '圈子' },
      { id: 5, name: '招考' },
      { id: 3, name: '关注' }
    ];
    break;
  }
}

$done({ body: JSON.stringify(body) });
