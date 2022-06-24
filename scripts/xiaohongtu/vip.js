// xiaohongtu 
// 小红图
// vip
// ^https?:\/\/xhtapi\.yuankan\.net\/index\/Member\/vipInfo
let body = JSON.parse($response.body);

body.data.vip_expire_time = '2099-10-10 10:10:10'
body.data.left_desc = '999999次'
body.data.vip_desc = '已开通 vip'
body.data.vip = 1
body.data.can_download = true
body.data.left_times = 999999
body.data.show_member = true


$done({body: JSON.stringify(body)});
