/**
 * @desc
 * @url ^https?:\/\/mbd\.baidu\.com\/userx\/v\d{1}\/info\/get\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data.fields.vip = '1'
body.data.fields.member = {
	is_vip: 1,
	end_time: 2147483648
}

body = JSON.stringify(body)

$done({
	body
})
