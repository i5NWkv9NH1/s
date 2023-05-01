/**
 * @name Express
 * @desc 顺丰
 * @date 2023-05-01
 */
const url = $request.url;
if (!$response.body) $done({});

let body = JSON.parse($response.body);

/**
 * @match ^https?:\/\/ccsp\-egmas\.sf\-express\.com\/cx\-app\-base\/base\/app\/user\/queryIndexConfigs
 * @mathc ^https?:\/\/ccsp\-egmas\.sf\-express\.com\/cx\-app\-base\/base\/app\/ad\/queryInfoFlow
 * @match ^https?:\/\/ccsp\-egmas\.sf\-express\.com\/cx\-app\-base\/base\/app\/messageCenter\/queryMessageCenterList
 * @match ^https?:\/\/ccsp\-egmas\.sf\-express\.com\/cx\-app\-base\/base\/app\/user\/queryModuleConfig
 * @match ^https?:\/\/ccsp\-egmas\.sf\-express\.com\/cx\-app\-base\/base\/app\/bms\/queryRecommend
 */
switch (url) {
  case url.match(/user\/queryIndexConfigs/)?.input: {
    const features = ['快速寄件', '扫一扫', '取快递'];
    body.obj.datas.filter((item) => features.indexOf(item.name) !== -1);
    break;
  }
  case url.match(/queryInfoFlow/)?.input: {
    body.obj = [];
    break;
  }
  case url.match(/queryMessageCenterList/)?.input: {
    body.obj = [];
    break;
  }
  case url.match(/queryModuleConfig/)?.input: {
    const features = ['寄快递', '学生专享'];

    body.obj = body.obj.filter((item) => item.id === 'app-index-2022');
    body.obj[0].sceneList = body.obj[0].sceneList.filter(
      (item) => features.indexOf(item.sceneName) !== -1
    );
    break;
  }
  case url.match(/queryRecommend/)?.input: {
    body.obj = [];
    break;
  }
}

$done({ body: JSON.stringify(body) });
