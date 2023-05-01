/**
 * @name gongkaoleida
 * @desc 公考雷达
 * @date 2023-05-01
 */
const url = $request.url;
if (!$response.body) $done({});

let body = JSON.parse($response.body);

/**
 * @match ^https?:\/\/api\.gongkaoleida\.com\/api\/v\d{1}\_\d{1}\_\d{1}\/index?
 * @match ^https?:\/\/api\.gongkaoleida\.com\/api\/v\d{1}\_\d{1}\/my\/index\?
 * @match ^https?:\/\/api\.gongkaoleida\.com\/api\/v\d{1}\_\d{1}\_\d{1}\/user\/vip\/product
 * @match ^https?:\/\/api\.gongkaoleida\.com\/api\/v\d{1}\_\d{1}\_\d{1}\/user\/getInfo?
 */
switch (url) {
  case url.match(/index/)?.input: {
    const keywords = ['签到', '助考锦鲤', '选调生'];

    body.data.bottomSlogan = '';
    body.data.bottomShare = {
      title: '',
      shareInfo: {
        weiboShareTitle: '',
        shareUrl: '',
        shareDesc: '',
        shareTitle: ''
      },
      tag: '',
      scheme: ''
    };
    body.data.blockList[0].list = body.data.blockList[0].list.filter(
      (item) => keywords.indexOf(item.name) === -1
    );
    break;
  }
  case url.match(/my\/index/)?.input: {
    body.data.btns = [];
    break;
  }
  case url.match(/user\/vip\/product/)?.input: {
    const remainDays = 360;
    const vipExpire = 1704788322;

    body.data.productList.forEach((product) => {
      product.list.forEach((item) => {
        item.labelIsShow = 0;
      });
    });

    const index = body.data.productList.findIndex(
      (item) => item.vipGrade === 2
    );

    if (index !== -1) {
      body.data.productList[1].isVip = 1;
      body.data.productList[1].remainDays = remainDays;
      body.data.productList[1].vipExpire = vipExpire;
    }
    break;
  }
  case url.match(/user\/getInfo/)?.input: {
    body.data.userInfo.vipGrade = 2;
    body.data.userInfo.isVip = 1;
    body.data.userInfo.vipExire = 2650197302;
    body.data.userInfo.vipGradeList[1].vipExpire = 2650197302;
    body.data.userInfo.vipGradeList[1].isVip = 1;
    body.data.userInfo.vipGradeList[1].remainDays = 999999;
  }
}

$done({ body: JSON.stringify(body) });
