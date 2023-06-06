/**
 * @name pinduoduo
 * @desc 拼多多
 * @date 2023-05-01
 */
const url = $request.url
if (!$response.body) $done({})

let body = JSON.parse($response.body)

/**
 * @match ^https?:\/\/api\.pinduoduo\.com\/api\/alexa\/homepage\/hub\?
 * @match ^https?:\/\/api\.pinduoduo\.com\/api\/cappuccino\/splash\?
 * @match ^https?:\/\/api\.pinduoduo\.com\/api\/social\/timeline\/v\d{1}\/get\/entrance\?
 * @match ^https?:\/\/api\.pinduoduo\.com\/api\/social\/my\/info\?
 * @match ^https?:\/\/api\.pinduoduo\.com\/api\/aquarius\/hungary\/global\/app\_popup\?
 */
console.log('pinduoduo:: starting match')
switch (url) {
  case url.match(/homepage\/hub/)?.input: {
    console.log('pingduoduo:: match homepage hub')
    const keywords = ['首页', '聊天', '个人中心']
    const modules = [
      'carousel_banner',
      'timeline',
      'courier_info',
      'icon_set',
      'new_user_zone',
      'new_user_zone_dy',
      'silent_user_zone',
      'return_gift_zone',
      'fun_mpu',
      'nmpu_free_order',
      'nmpu_wallet_guide',
      'nmpu_lower_price',
      'community_goods',
      'pay_later',
      'temu_guide',
      'women_clothing',
      'billion_subsidy_entrance',
      'billion_subsidy_entrance_dy',
      'billion_subsidy_entrance_lite',
      'irregular_banner',
      'three_order_zone',
      'new_user_zone_v2'
    ]

    body.result.icon_set = []
    body.result.module_order = []
    body.result.all_top_opts = body.result.all_top_opts.filter(
      (item) => item.tab_id === 1
    )
    body.result.bottom_tabs = body.result.bottom_tabs.filter((item) => {
      if (keywords.indexOf(item.title) === -1) {
        return false
      }
      return true
    })
    body.result.buffer_bottom_tabs = body.result.buffer_bottom_tabs.filter(
      (item) => {
        if (keywords.indexOf(item.title) === -1) {
          return false
        }
        return true
      }
    )

    delete body.result.dy_module.recommend_fresh_info
    delete body.result.dy_module.billion_subsidy_entrance_dy

    break
  }
  case url.match(/social\/timeline\/v\d{1}\/get\/entrance/)?.input: {
    body.entrace.content = []
    body.entrace.url = ''
    body.extra_data = {}
    delete body.track_map
    break
  }
  case url.match(/social\/my\/info\?/)?.input: {
    body.commend_friends_enabled = false
    body.tl_font_ab = false
    body.need_fill_self_introduction = false
    body.contacts_friends_enabled = false
    body.self_introduction_enabled = false
    body.recommend_friends_enabled = false
    body.self_introduction_enabled = false
    body.hide_entrance = true
    body.tl_font_ab = false
    body.timeline_guide_type = 0
    body.disable_topic_publish = true
    body.disable_quote_sync = true
    break
  }
  case url.match(/aquarius\/hungary\/global\/app\_popup\?/)?.input: {
    body.list = []
    break
  }
  case url.match(/aquarius\/hungary\/global\/homepage\?/)?.input: {
    body.list = []
    break
  }
  case url.match(/cappuccino\/splash\?/)?.input: {
    body.splash_list = []
  }
  default: {
    console.log('pinduoduo:: match default')
    break
  }
  //? startingad plugin
  // case url.match(/splash/)?.input: {
  //   body.splash_list = [];
  //   break;
  // }
}

console.log('pinduoduo:: match done')
$done({ body: JSON.stringify(body) })
