/**
 * @name 10010
 * @desc 联通
 * @date 2023-05-01
 */
const url = $request.url;
if (!$response.body) $done({});

let body = JSON.parse($response.body);

/**
 * @match ^https?:\/\/m.client.10010.com\/mobileService/customer/getclientconfig.htm?
 * @mathc ^https?:\/\/m.client.10010.com\/mobileService/uniAdmsInterface\/getHomePageAd
 * @match ^https?:\/\/m.client.10010.com\/mobileserviceNine\/homefusion\/fuInter
 * @match ^https?:\/\/m.client.10010.com\/mobileserviceNine\/homefusion\/selTips
 * @match ^https?:\/\/m.client.10010.com\/mobileService/query\/querySmartBizHome.htm?
 * @match ^https?:\/\/m.client.10010.com\/mobileService\/customer\/indexExpressNewsAndRecommend.htm
 * @match ^https?:\/\/m.client.10010.com\/mobileserviceNine\/v\d{1}\/nav\/home?
 * @match ^https?:\/\/m.10010.com\/decoration\-data\/scaffold\/queryNewHomePageidShowData?
 */
switch (url) {
  case url.match(/getclientconfig/)?.input: {
    body.adMaxTime = '0';
    body.backstageWakeDesc = '';
    body.backstageWakeTitle = '';
    body.homeNewsRemindShowTime = '0';
    body.homePopUpUrl = '';
    body.homeUpdownTime = '';
    break;
  }
  case url.match(/getHomePageAd/)?.input: {
    body.signinAdv_A5.advCntList = [];
    body.signinAdv_A5_1.advCntList = [];
    body.yingxiaoAdv_A5.advCntList = [];
    body.fuchuangAdv_A8.advCntList = [];
    body.mainNavAdv_A8.advCntList = [];
    body.zhuanquloucengAdv_A5.advCntList = [];
    body.homeAdv_A5.advCntList = [];
    break;
  }
  case url.match(/fuInter/)?.input: {
    body['HomeFusion.fuchuangAdv_A8']['advCntList'] = [];
    body['HomeFusion.backGroundQuery']['result'] = [];
    body['HomeFusion.homeAdv_A5']['advCntList'] = [];
    break;
  }
  case url.match(/selTips/)?.input: {
    body['HomeFusion.jingxuanloucengAdv_A8']['jingxuanloucengAdv_A8'] = [];
    body['HomeFusion.homeAdv_A5']['advCntList'] = [];
    break;
  }
  case url.match(/querySmartBizHome/)?.input: {
    body.list = [];
    break;
  }
  case url.match(/indexExpressNewsAndRecommend/)?.input: {
    body.content = [];
    break;
  }
  case url.match(/nav/)?.input: {
    body.datas.home = [];
    body.datas.homeTwo = [];
    break;
  }
  case url.match(/queryNewHomePageidShowData/)?.input: {
    body.data = [];
    break;
  }
}

$done({ body: JSON.stringify(body) });
