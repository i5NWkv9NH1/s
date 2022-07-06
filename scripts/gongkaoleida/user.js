/**
 * @description vip
 * @url ^https?:\/\/api\.gongkaoleida\.com\/api\/v\d{1}\_\d{1}\_\d{1}\/login\/captcha\/verify
 * @url ^https?:\/\/api\.gongkaoleida\.com\/api\/v\d{1}\_\d{1}\_\d{1}\/login\/getUserInfo?
 */

 let body = JSON.parse($response.body);

 body.data.userInfo.vipGrade = 2;
 body.data.userInfo.isVip = 1;
 body.data.userInfo.vipExire = 2650197302
 body.data.userInfo.vipGradeList[1].vipExpire = 2650197302
 body.data.userInfo.vipGradeList[1].isVip = 1
 body.data.userInfo.vipGradeList[1].remainDays = 999999
 body = JSON.stringify(body);

 $done({
		 body
 });
