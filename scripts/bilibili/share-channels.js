/**
 * @desc 关闭其它分享渠道
 * @url ^https?:\/\/ap(i|p)\.bilibili\.com\/x\/share\/channels\?
 * @date 2021-09-22
 */

 let body = JSON.parse($response.body);

body.data = {
	text: '分享',
	above_channels: [
		{
			name: '动态',
			picture:
				'https://i0.hdslb.com/bfs/share/80f8068a2c7388e69d8aee278fa906027988c049.png',
			share_channel: 'biliDynamic'
		},
		{
			name: '复制链接',
			picture:
				'https://i0.hdslb.com/bfs/share/9f7ce8985eff2927c265d1b7b02221170b74106f.png',
			share_channel: 'COPY'
		}
	]
}


body = JSON.stringify(body)

$done({
	body
})
