/**
 * @name peopleapp
 * @desc 人民日报
 * @date 2023-05-01
 */
const url = $request.url;
if (!$response.body) $done({});

let body = JSON.parse($response.body);

/**
 * @match ^https?:\/\/app\.peopleapp\.com\/Api\/\d{3}\/HomeApi\/getContentList
 * @match ^https?:\/\/app\.peopleapp\.com\Api\/\d{3}\/UserLevelApi\/experienceIncrease
 * @match ^https?:\/\/app\.peopleapp\.com\Api\/\d{3}\/MineApi\/getUserInfo
 * @match ^https?:\/\/app\.peopleapp\.com\Api\/\d{3}\/HomeApi\/showCategory
 */

switch (url) {
  case url.match(/getContentList/)?.input: {
    body['data'] = body['data'].filter((item) => !item['adv_own_id']);
    break;
  }
  case url.match(/experienceIncrease/)?.input: {
    body.data.is_upgrade = 1;
    body.data.level = '999';
    body.data.level_name = '登峰造极';
    break;
  }
  case url.match(/MineApi\/getUserInfo/)?.input: {
    body.data.coming_date = 9999;
    body.data.sign_special_tasks = [];
    body.data.level = '999';
    body.data.sign_tasks.points = [];
    body.data.sign_tasks.sign_days = 999;
    body.data.sign_tasks.task_break_sign = 1;
    body.data.sign_tasks.sign_task_finish = 1;
    body.data.level_name = '登峰造极';
    delete body.data.prompt;
    delete body.data.point_shop;
    break;
  }
  case url.match(/showCategory/)?.input: {
    body.data.show_data = [
      // prettier-ignore
      { id: "234", shortName: "推", category_type: "1", type: 1, local: 0, is_recom: 1, category_model: "normal", name: "推荐" }
    ];
  }
}

$done({ body: JSON.stringify(body) });
