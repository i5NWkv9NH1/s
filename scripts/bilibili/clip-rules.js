/**
 * @desc 屏蔽分享视频时弹出的 Popup
 * @url ^https?:\/\/ap(i|p)\.bilibili\.com\/x\/share\/clipboardRules\?
 * @date 2021-09-22
 */

let body = $response.body

body.data = {
	clipboard_rules: [
		{
			priority: 50,
			regex:
				'^((http|https)://(www.bilibili.com/(video/)?|bilibili.com/|b23.tv/))?BV1[1-9A-NP-Za-km-z]{9}$',
			self_copied_active: true,
			id: 1,
			user_status: 1,
			url: '',
			popup_mode: 1,
			popup_rule: 4,
			business: 'BV',
			name: 'bv匹配规则',
			start_pattern: 3
		}
	]
}

body = JSON.parse(body)

body = JSON.stringify(body)

$done({
	body
})
