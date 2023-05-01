/**
 * @name gaodemap
 * @desc 高德地图
 * @date 2023-05-01
 */
const url = $request.url;
if (!$response.body) $done({});

let body = JSON.parse($response.body);

/**
 * @match ^https?:\/\/sns\.amap\.com\/ws\/msgbox\/pull\d{1}\?
 * @match ^https?:\/\/m5\.amap\.com\/ws\/valueadded\/alimama\/splash\_screen\?
 * @match ^https:\/\/m5\-zb\.amap\.com\/ws\/vip\/user\-member\-info\?
 */
switch (url) {
  case url.match(/msgbox/)?.input: {
    body.msgs = [];
    break;
  }
  case url.match(/alimama\/splash\_screen/)?.input: {
    body.data.ad = [];
    break;
  }
  case url.match(/user\-member\-info/)?.input: {
    body.data.isVip88 = 1;
    body.data.isBannerDisplay = false;
    body.data.rightTypeDetail = [];
    break;
  }
}

$done({ body: JSON.stringify(body) });
