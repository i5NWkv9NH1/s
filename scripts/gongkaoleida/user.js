/**
 * @description vip
 * @url ^https?:\/\/api\.gongkaoleida\.com\/api\/v\d{1}\_\d{1}\_\d{1}\/login\/captcha\/verify
 * @url ^https?:\/\/api\.gongkaoleida\.com\/api\/v\d{1}\_\d{1}\_\d{1}\/login\/getUserInfo?
 */


 let body = JSON.parse($response.body);

 var vipGradeList = [
	 { vipExpire: 0, vipGradeName: '黄金VIP', vipGrade: 1, remainDays: 0, isVip: 0 },
	 { vipExpire: 2650197302000, vipGradeName: '星钻VIP', vipGrade: 2, remainDays: 999999, isVip: 1 },
 ]
 body.data.userInfo = Object.assign(body.data.userInfo, { vipExpire: 2650197302000, isVip: 1, vipGradeList, vipGrade: 2 })

 body = JSON.stringify(body);
 $done({
		 body
 });
