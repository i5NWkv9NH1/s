/**
 * @desc
 * @url ^https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/membership\/proxy\/guide\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data.button_list = []
body.data.new_show = false
body.data.recent_buy_list = []

body = JSON.stringify(body)

$done({
	body
})
