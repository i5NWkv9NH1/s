// xiaohongtu 
// 小红图
// 配置
// ^https?:\/\/xhtapi\.yuankan\.net\/index\/Version\/getConfig
let body = JSON.parse($response.body);

body.data.activateVip = true
body.data.baiduShow = false


$done({body: JSON.stringify(body)});
