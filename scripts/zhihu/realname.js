/**
 * @desc 解除账号实名
 * @url ^https?:\/\/api\.zhihu\.com\/realname\/gov
 * @date 2021-09-22
 */

 let body = JSON.parse($response.body);

body.data = {
	progress: 'submit',
	sub_auth_type: null,
	is_realname: true,
	auth_type: 'realname'
}



body = JSON.stringify(body)

$done({
	body
})
