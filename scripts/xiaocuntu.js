/**
 * @desc 小存图
 * @url ^https?:\/\/xhs\.xiaocuntu\.com\/v\d{3}\/user\/info
 * @date 2022-06-24
 */


 let body = JSON.parse($response.body);
 body.data.entities.show.buyVip = true;
 body.data.entities.show.fuli = true;
 body.data.entities.userInfo.vipType = '会员';
 body.data.entities.userInfo.description = '剩余下载次数：999999';

 body = JSON.stringify(body);
 
 $done({
   body
 })
 