/**
 * @desc 小存图
 * @url ^https?:\/\/xhs\.xiaocuntu\.com\/v\d{3}\/user\/info
 * @date 2022-06-24
 */


 let body = JSON.parse($response.body);
 body = JSON.stringify(body);
 body.data.entities.show = {
  buyVip: true,
  fuli: true
 }
 body.data.entities.userInfo = {
  vipType: '会员',
  description: '剩余下载次数：999999'
 }
 
 $done({
   body
 })
 