/**
 * @name pinduoduo
 * @desc 拼多多
 * @date 2023-05-01
 */
const url = $request.url;
if (!$response.body) $done({});

let body = JSON.parse($response.body);

/**
 * @match ^https?:\/\/api\.pinduoduo\.com\/api\/alexa\/homepage\/hub\?
 * @match ^https?:\/\/api\.pinduoduo\.com\/api\/cappuccino\/splash\?
 */
console.log('pinduoduo:: starting match');
switch (url) {
  case url.match(/homepage\/hub/)?.input: {
    console.log('pingduoduo:: match homepage hub');
    const keywords = ['首页', '聊天', '个人中心'];

    body.result.icon_set = [];
    body.result.all_top_opts = body.result.all_top_opts.filter(
      (item) => item.tab_id === 1
    );
    body.result.bottom_tabs = body.result.bottom_tabs.filter((item) => {
      if (keywords.indexOf(item.title) !== -1) {
        return false;
      }
      return true;
    });
    body.result.buffer_bottom_tabs = body.result.buffer_bottom_tabs.filter(
      (item) => {
        if (keywords.indexOf(item.title) !== -1) {
          return false;
        }
        return true;
      }
    );
    break;
  }
  default: {
    console.log('pinduoduo:: match default');
    break;
  }
  //? startingad plugin
  // case url.match(/splash/)?.input: {
  //   body.splash_list = [];
  //   break;
  // }
}

console.log('pinduoduo:: match done');
$done({ body: JSON.stringify(body) });
