// xiaohongtu 
// 小红图
// 菜单
// ^https?:\/\/xhtapi\.yuankan\.net\/index\/Member\/indexMenu
let body = JSON.parse($response.body);

body.data.menu_baidu.show = false


$done({body: JSON.stringify(body)});
