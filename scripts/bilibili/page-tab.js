/**
 * @desc 番剧页面只保留推荐
 * @url ^https?:\/\/ap(i|p)\.bilibili\.com\/pgc\/page\/tab\?
 * @date 2021-09-22
 */

 let body = JSON.parse($response.body);

body.data = [
	{
		is_icon_loop: 0,
		report: {
			index_type: '',
			tab_name: '推荐',
			tab_id: 8,
			page_id: '105',
			url: 'bilibili://pgc/partition/tab?sub_page_id=8',
			index: '1'
		},
		color_style: {
			tab_text_select_color: '#FFFFFF',
			tab_text_unselect_color: '#99FFFFFF',
			pinned: 0,
			top_color: '#492C6E',
			status_bar_color_type: 0
		},
		id: 8,
		before_click_icon: '',
		after_click_icon: '',
		title: '推荐',
		link: 'bilibili://pgc/partition/tab?sub_page_id=8'
	}
]

body = JSON.stringify(body)

$done({
	body
})
