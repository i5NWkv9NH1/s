/**
 * @name ccgq
 * @desc 虫虫钢琴
 * @date 2023-05-01
 */
const url = $request.url
if (!$response.body) $done({})

let body = JSON.parse($response.body)

/**
 * @match ^https?:\/\/gangqinpu\.lzjoy\.com\/?urlparam\=cginfo\/env\/config
 * @match ^https?:\/\/gangqinpu\.lzjoy\.com\/?urlparam\=home\/coupon\/getMyCouponAll
 * @match ^https?:\/\/gangqinpu\.lzjoy\.com\/?urlparam\=home\/ccgq\/FissionShare
 * @match ^https?:\/\/gangqinpu\.lzjoy\.com\/?urlparam\=home\/coupon\/getCouponByMy
 * @match ^https?:\/\/gangqinpu\.lzjoy\.com\/?urlparam\=home\/ccgq\/tab
 * @match ^https?:\/\/gangqinpu\.lzjoy\.com\/?urlparam\=home\/popups\/HomePopups
 * @match ^https?:\/\/gangqinpu\.lzjoy\.com\/?urlparam\=home\/ccgq\/advConfig&ccgq_uuid\=
 * @match ^https?:\/\/gangqinpu\.lzjoy\.com\/?urlparam\=home\/user\/indexV\d{3}
 * @match ^https?:\/\/gangqinpu\.lzjoy\.com\/?urlparam\=task\/newbie\/config
 * @match ^https?:\/\/cc\.lzjoy\.com\/?urlparam\=common\/user\/GetVip
 * @match ^https?:\/\/cc.lzjoy.com\/?urlparam\=common\/vip\/(.*)
 * @match ^https?:\/\/gangqinpu\.lzjoy\.com\/?urlparam\=user\/vip\/GetUserFissionInfo
 * @match ^https?:\/\/gangqinpu\.lzjoy\.com\/?urlparam\=pay\/pay\/GetGoodsPayInfo
 */
console.log('虫虫钢琴:: starting match')
switch (url) {
  case url.match(/urlparam\=cginfo\/env\/config/)?.input: {
    body.ai_advertisement_2 = ''
    body.enterprise_wechat_link = ''
    body.vip_rights_link = ''
    body.advertisement_price = ''
    body.ai_advertisement = ''
    body.opern_svip_upgrade_warning = ''
    body.svip_buy_img_list = {}
    body.ai_ontry_time = ''
    body.activity_config = {}
    body.tiktok_promot = ''
    body.user_label_grade = []
    body.svip_popups_code = ''
    body.checkout_qrcode = ''
    body.report_url = ''
    body.opern_accopmpaniment_popups_img = ''
    body.fqa_url = ''
    body.playersheet_waterfall_enable = 0
    body.opern_detail_suspension_title = ''
    body.adv001 = {}
    body.enable_apple_pay = 0
    body.vip_advertisement = ''
    body.score_comment_candidates = []
    body.adv_is_close = 1
    body.is_open_svip = 0
    body.user_label_frequency = []
    body.login_desc = ''
    body.ad = {}

    break
  }
  case url.match(/urlparam\=home\/coupon\/getMyCouponAll/)?.input: {
    body.datas.total_count = 0
    body.datas.url = ''
    body.datas.adv_picture = ''
    body.datas.popups_state = 0
    body.datas.list = []
    body.datas.count_price = 0
    break
  }
  case url.match(/urlparam\=home\/ccgq\/FissionShare/)?.input: {
    body.datas.adv_list = []
    body.datas.score_img = ''
    break
  }
  case url.match(/urlparam\=home\/coupon\/getCouponByMy/)?.input: {
    body.datas.conpon = []
    body.datas.price = ''
    body.datas.popups_state = 0
    body.datas.time = ''
    break
  }
  case url.match(/urlparam\=home\/ccgq\/tab/)?.input: {
    body.tab_list = [
      { id: '1', name: '分类' },
      { id: '2', name: '精选' },
      { id: '10001', name: '伴奏' },
      { id: '10', name: '教材' },
      { id: '5', name: 'ACG' }
    ]
    // remove banner, nav
    body.datas.splice(0, 2)

    const blocks = [
      '推荐音乐人',
      '初学C调｜满足你的演奏欲',
      '四手联弹｜快乐成双',
      '弹唱｜干净｜清脆｜自由',
      '热门音乐人',
      '学钢琴｜练技法',
      '首发专区',
      '原创推荐',
      '新人｜新风格｜新想法',
      '学霸请留步！',
      '最热视频UP主',
      '话题广场'
    ]

    for (let i in blocks) {
      var index = body.datas.findIndex((item) => {
        if (item.data.length === 1) {
          return item.data[0].title.includes(blocks[i])
        }
      })

      //? remove title and items
      body.datas.splice(index, 2)
    }

    break
  }

  case url.match(/urlparam\=home\/popups\/HomePopups/)?.input: {
    body.datas.suspension_list = {
      state: 0,
      discount_price: '0',
      time: 0,
      jumpurl: '',
      title: '',
      vtype: '0',
      btn: '',
      vip_name: ''
    }
    body.datas.popups_list = {
      state: 0
    }
    break
  }
  case url.match(/urlparam\=home\/ccgq\/advConfig/)?.input: {
    body.datas.home.is_show = 0
    body.datas.placeholder.is_show = 0
    body.datas.search.is_show = 0
    body.datas.album.is_show = 0
    body.datas.my.is_show = 0
    body.datas.opern.is_show = 0
    break
  }

  case url.match(/urlparam\=home\/user\/indexV\d{3}/)?.input: {
    body.datas.userinfo.is_svip_forever = '1'
    body.datas.userinfo.vip_create = '1686403545'
    body.datas.userinfo.vip_expire_time = '1718025996'
    body.datas.userinfo.is_vip = '1'
    body.datas.userinfo.is_buy_vip = '1'
    break
  }

  case url.match(/urlparam\=task\/newbie\/config/)?.input: {
    body.datas = {
      title: '',
      is_toast: '0',
      is_new_message: '0',
      cover: '',
      target: ''
    }
    break
  }
  case url.match(/urlparam\=common\/user\/GetVip/)?.input: {
    body.list.vip_name = '至尊vip'
    body.list.is_vip = '1'
    body.list.expire_date_1 = '1718025996'
    body.list.is_lifelong_vip = '1'
    body.list.is_buy = '1'
    ;(body.list.vip_num = 2), (body.list.svip_create = '1686403545')
    body.list.expire_date = '1718025996'
    body.list.vip_type = '2'
    body.list.vip_expire_date = '1718025996'
    body.list.ipad_barcode_buy_vip = ''
    body.list.ipad_barcode_pay = ''
    break
  }

  case url.match(/urlparam\=common\/vip\/(.*)/)?.input: {
    body.list = []
    break
  }

  case url.match(/urlparam\=user\/vip\/GetUserFissionInfo/)?.input: {
    body.datas.list = []
    break
  }

  case url.match(/urlparam\=home\/ccgq\/GetUserFissionInfo/)?.input: {
    body.datas.vip = {
      price: 0,
      vip_id: 0
    }
    body.datas.list = []
    break
  }

  default: {
    console.log('虫虫钢琴:: match default')
  }
}
console.log('虫虫钢琴:: match done')
$done({ body: JSON.stringify(body) })
