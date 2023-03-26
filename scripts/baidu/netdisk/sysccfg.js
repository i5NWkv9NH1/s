/**
 * @description baidu sysconfig
 * @url ^https?:\/\/pan\.baidu\.com\/api\/getsyscfg?
 */

let body = JSON.parse($response.body)

// 签到文案
body.active_sigin_text.cfg_list = []
// 企业热门工具
body.enterprise_hot_tools_area.cfg_list = []

body.personal_page_area.cfg_list = []
body.share_tool_area.cfg_list = [
  {
    "node_name": "更多",
    "red_dot_corner_start_time": 1111111111,
    "cfg_version": 3,
    "node_key": "share_tool_more"
  },
  {
    "red_dot_corner_type": "1",
    "protocol": "bdnetdisk://n/action.sharefile?page=myshare",
    "red_dot_corner_start_time": 1597655085,
    "node_key": "share_my_share",
    "cfg_version": 2,
    "card_id": "1002",
    "red_dot_corner_end_time": 1597655085,
    "red_dot_corner_disappear_type": "1",
    "node_name": "我的分享"
  },
]
body.home_card_area.cfg_list = []
body.business_ad_config_area.cfg_list = []
body.album_story_config.cfg_list = []
body.enterprise_space_config_area.cfg_list = []
body.bdnc_commerce_expire_alert_area.cfg_list = []
body.wechat_share_area.cfg_list = []
body.public_imprint_config.cfg_list = []
body.public_guide_config.cfg_list = []
body.new_user_card.cfg_list = []
body.enterprise_space_document_pay_guide.cfg_list = []
body.tabbar_vip_config_area.cfg_list = []
body.application_area.cfg_list = []
body.ocr_ai_scan_entrance_area.cfg_list = []
body.bdnc_commerce_video_ad_area_pad.cfg_list = []
body.share_Im_idol_area.cfg_list = []
body.enterprise_banner_area.cfg_list = []
body.public_home_config.cfg_list = []
body.plus_panel_entrance_config.cfg_list = []
body.thrid_ad_funads_service.cfg_list = []
body.docscan_share_wechat_area.cfg_list = []
body.bottom_area.cfg_list = [
  {
    "node_name": "首页",
    "description": "首页描述",
    "cfg_version": 1,
    "node_key": "home_page"
  },
  {
    "node_name": "文件",
    "description": "文件描述",
    "cfg_version": 1,
    "node_key": "file_page"
  },
  {
    "node_name": "共享",
    "description": "共享描述",
    "cfg_version": 1,
    "node_key": "shared_page"
  },
  {
    "node_name": "我的",
    "description": "我的描述",
    "cfg_version": 1,
    "node_key": "mine_page"
  }
]
body.enterprise_share_file_list.cfg_list = []
body.tool_area.cfg_list = []
body.push_active_area.cfg_list = []
body.my_person_service.cfg_list = []
body.enterprise_tools.cfg_list = []
body.cloud_image_service.cfg_list = []
body.thrid_ad_buads_service.cfg_list = []
body.splash_advertise_type_area.cfg_list = []
body.upload_retrieve.cfg_list = []
body.home_tool_area_all_tool_item_area.cfg_list = []
body.flow_package_config_area.cfg_list = []
body.public_original_video_upload.cfg_list = []
body.splash_advertise_fetch_config_area.cfg_list = []
body.universal_card_area.cfg_list = []
body.my_share_tag_area.cfg_list = []
body.bdnc_commerce_config_area.cfg_list = []
body.certification_user_area.cfg_list = []
body.enterprise_bottom_banner.cfg_list = []
body.active_sigin_text.cfg_list = []

body = JSON.stringify(body)
$done({
  body
})
