/**
 * @url ^https?:\/\/m.client.10010.com\/mobileService/customer/getclientconfig.htm?
 */

let body = JSON.parse($response.body);

let dto = JSON.parse(body.DTO)
dto.adMaxTime = "0"
dto.backstageWakeDesc = ""
dto.backstageWakeTitle = ""
dto.homeNewsRemindShowTime = "0"
dto.homePopUpUrl = ""
dto.homeUpdownTime = ""

body = JSON.stringify(body)

$done({
	body
})
