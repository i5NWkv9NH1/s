/**
 * @name ccgq
 * @desc 虫虫钢琴
 * @date 2023-05-01
 */
const url = $request.url
if (!$response.body) $done({})

let body = JSON.parse($response.body)

/**
 * @match ^https?:\/\/gangqinpu\.lzjoy\.com\/\?urlparam\=cginfo\/env\/config
 * @match ^https?:\/\/gangqinpu\.lzjoy\.com\/\?urlparam\=home\/coupon\/getMyCouponAll
 * @match ^https?:\/\/gangqinpu\.lzjoy\.com\/\?urlparam\=home\/ccgq\/FissionShare
 * @match ^https?:\/\/gangqinpu\.lzjoy\.com\/\?urlparam\=home\/coupon\/getCouponByMy
 * @match ^https?:\/\/gangqinpu\.lzjoy\.com\/\?urlparam\=home\/ccgq\/tab
 * @match ^https?:\/\/gangqinpu\.lzjoy\.com\/\?urlparam\=home\/popups\/HomePopups
 * @match ^https?:\/\/gangqinpu\.lzjoy\.com\/\?urlparam\=home\/ccgq\/advConfig&ccgq_uuid\=
 * @match ^https?:\/\/gangqinpu\.lzjoy\.com\/\?urlparam\=home\/user\/indexV\d{3}
 * @match ^https?:\/\/gangqinpu\.lzjoy\.com\/\?urlparam\=task\/newbie\/config
 * @match ^https?:\/\/cc\.lzjoy\.com\/\?urlparam\=common\/user\/GetVip
 * @match ^https?:\/\/cc.lzjoy.com\/\?urlparam\=common\/vip\/(.*)
 * @match ^https?:\/\/gangqinpu\.lzjoy\.com\/\?urlparam\=user\/vip\/GetUserFissionInfo
 * @match ^https?:\/\/gangqinpu\.lzjoy\.com\/\?urlparam\=pay\/pay\/GetGoodsPayInfo
 * @match ^https?:\/\/gangqinpu\.lzjoy\.com\/\?urlparam\=pad\/detail\/operninfov002
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
    body.datas = body.datas.filter((item) => item.container_type !== 'banner')
    break
  }
  // case url.match(/urlparam\=home\/ccgq\/tab/)?.input: {
  //   body.tab_list = [
  //     { id: '1', name: '分类' },
  //     { id: '2', name: '精选' },
  //     { id: '10001', name: '伴奏' },
  //     { id: '10', name: '教材' },
  //     { id: '5', name: 'ACG' }
  //   ]
  //   // remove banner, nav
  //   body.datas.splice(0, 2)

  //   const blocks = [
  //     '推荐音乐人',
  //     '初学C调｜满足你的演奏欲',
  //     '四手联弹｜快乐成双',
  //     '弹唱｜干净｜清脆｜自由',
  //     '热门音乐人',
  //     '学钢琴｜练技法',
  //     '首发专区',
  //     '原创推荐',
  //     '新人｜新风格｜新想法',
  //     '学霸请留步！',
  //     '最热视频UP主',
  //     '话题广场'
  //   ]

  //   for (let i in blocks) {
  //     var index = body.datas.findIndex((item) => {
  //       if (item.data.length === 1) {
  //         return item.data[0].title.includes(blocks[i])
  //       }
  //     })

  //     //? remove title and items
  //     body.datas.splice(index, 2)
  //   }

  //   break
  // }

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
    body.datas.userinfo = {
      id: '14330478',
      is_yinyueren: '0',
      total_shortvideo_num: '0',
      total_collect_num: '0',
      is_svip_forever: '0',
      total_fans_num: '1',
      vip_will_expire: '0',
      province: '',
      third_party_wxnickname: '',
      has_old_photo: 1,
      third_party_wbportrait: '',
      username: '',
      pad_equity:
        'https://s201.lzjoy.com/res/statics/fileupload/1fc33dd14a842ae2b59f62272ff48305.jpg',
      vip_create: '2023-06-25 21:38:15',
      total_like_num: '0',
      is_phone: '1',
      platform: 'web-ccgq',
      third_party_googleuid: null,
      total_collect_singer_num: '0',
      addtime: '2023-05-05 18:53:28',
      user_photo:
        'https://s201.lzjoy.com/res/statics/fileupload/normal/202305/299881e783836aaa30e46b57d0c7e095.png?1e99e9d5ea00306a9733c4f136f99fbbb6a59824&x-oss-process=image/resize,h_300,m_lfit&x-oss-process=image/resize,h_300,m_lfit',
      vip_expire_time: '2099-06-26 21:38:15',
      user_phone: '15697544152',
      area: '',
      status: '1',
      cg_uid: '14330478',
      old_password: '',
      today_is_sign: false,
      ysuid: '0',
      is_email: '0',
      album: {
        not_original_made_num: '0',
        collect_total: '0',
        original_made_num: '0',
        total: '0',
        made_total: '0'
      },
      third_party_qqportrait: '',
      third_party_facebookuid: null,
      old_salt: '',
      perform: '0',
      checktime: '0000-01-01 00:00:00',
      signature: '',
      home_photo: '',
      total_comment_num: '1',
      openid: null,
      total_fans_num_plus: '0',
      visit: {
        be_visited_num: 0,
        be_visited_num_plus: '0',
        unread: 0
      },
      save_money_by_vip: '0',
      eqid: '',
      chong_age: '0年',
      third_party_wxportrait: '',
      total_follow_num: '0',
      channel: 'default',
      svip_create: '',
      email: '',
      is_black: '0',
      personal_profile: '',
      third_party_qq_unionid: '',
      phone_area_code: '',
      is_svip_five: '0',
      head_portrait_image:
        'https://s201.lzjoy.com/res/statics/fileupload/normal/202305/299881e783836aaa30e46b57d0c7e095.png?1e99e9d5ea00306a9733c4f136f99fbbb6a59824&x-oss-process=image/resize,h_300,m_lfit&x-oss-process=image/resize,h_300,m_lfit',
      birthday: null,
      third_party_wbuid: '',
      is_vip: '2',
      third_party_wbnickname: '',
      total_collect_album_num: '1',
      old_username: '',
      is_followed_by: '0',
      uid: '14330478',
      total_opern_num: '0',
      third_party_wxuid: '',
      level: '1',
      total_orbit_num: '0',
      nickname: '156****4152',
      version: '',
      third_party_wx_unionid: '',
      gender: '0',
      total_collect_by_num: '0',
      vip_expire_date: '2023-06-26 21:38:15',
      is_teacher: '0',
      city: '',
      head_portrait_type: '2',
      firsttime: '0000-01-01 00:00:00',
      svip_expire_date: '',
      is_buy_vip: '2',
      third_party_qqnickname: '',
      equity:
        'http://s201.lzjoy.com/res/statics/fileupload/75f9f0680c5da9bab9f849c7d76e411a.png',
      third_party_qquid: '',
      register_type: '1',
      third_party_wxgzh_openid: ''
    }
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
    body.list = {
      vip_expire_date: '2099-06-26 21:38:15',
      ipad_barcode_pay:
        'ccpiano://web/site?url=http%3A%2F%2Fcc.lzjoy.com%2Fpublic%2Fweb%2Fwebmobile%2Fvip%2Fccgq_barcode.html&requireRefresh=1&translucentStatusBar=true&requireResult=1&isOpenAutommaticScreen=1',
      vip_type: '',
      tuning_url:
        'ccpiano://web/site?translucentStatusBar=false&url=http%3A%2F%2Fcc.lzjoy.com%2Fpublic%2Fweb%2Ftemperament%2Frelease%2Fh5%2Findex.html%23%2F&requireLogin=1&vtype=ANDROID_GUIDE',
      vip_will_expire_year: '1',
      svip_expire_date: '',
      prevert_download_opern: false,
      vip_create: '2023-06-25 21:38:15',
      vip_will_expire: '0',
      expire_date: '',
      svip_create: '',
      vip_num: 1,
      is_buy: '1',
      is_lifelong_vip: '0',
      ipad_barcode_buy_vip:
        'ccpiano://web/site?url=http%3A%2F%2Fcc.lzjoy.com%2Fpublic%2Fweb%2Fwebmobile%2Fvip%2Fccgq_barcode_vip.html&requireRefresh=1&translucentStatusBar=true&requireResult=1&isOpenAutommaticScreen=1',
      expire_date_1: '',
      apple_pay_amount: '',
      apple_pay_amount_list: '',
      vip_name: '',
      user_balance: '0',
      is_vip: '2'
    }
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

  case url.match(/urlparam\=pay\/pay\/GetGoodsPayInfo/)?.input: {
    body.datas.vip = {
      price: 488,
      vip_id: 2001043
    }
    body.datas.list = []
    break
  }

  case url.match(/urlparam\=pad\/detail\/operninfov002/)?.input: {
    // body.list.lifelong_vip_price = '1'
    // body.list.has_buy = '1'
    console.log('pad/detail/operninfov002')
    break
  }

  default: {
    console.log('虫虫钢琴:: match default')
  }
}
console.log('虫虫钢琴:: match done')
$done({ body: JSON.stringify(body) })
