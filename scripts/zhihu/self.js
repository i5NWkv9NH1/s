/**
 * @description selfs
 * @url ^https?:\/\/api\.zhihu\.com\/people\/self
 */


 let body = JSON.parse($response.body);

	body.vip_info.is_vip = true
	body.vip_info.entrance = {
		button_jump_url: "zhihu://vip/purchase",
		sub_title: null,
		title: "我的盐选会员",
		button_text: "你好，知乎！",
		jump_url: "zhihu://vip/purchase",
		sub_title_new: null,
		icon: {
			url: "https://pic1.zhimg.com/v2-5b7012c8c22fd520f5677305e1e551bf.png",
			night_mode_url: "https://pic1.zhimg.com/v2-e51e3252d7a2cb016a70879defd5da0b.png",
		},
		identity: "svip",
		expires_day: "2033-12-24",
	}
	body.vip_info.entrance_v2 = {
		title: "我的盐选会员",
		sub_title: "畅享 5000W+ 优质内容",
		card_jump_url: "zhihu://vip/my",
		sub_title_list: [
			"畅享 5000W+ 优质内容"
		],
		sub_title_color: "#CE994F",
		jump_url: "zhihu://vip/my",
		button_text: "查看权益",
		coupon_remain_sec: -1
	}

	body.vip_info.entrance_new =  {
		left_button: {
			title: "精选会员内容",
			description: "为您严选好内容",
			jump_url: "zhihu://market/home",
		},
		right_button: {
			title: "我的盐选会员",
			description: "畅享 10w+ 优质内容",
			jump_url: "zhihu://vip/my",
		}
	}

	body.is_realname = true

	delete body.mcn_user_info;


 body = JSON.stringify(body);
 $done({
		 body
 });
