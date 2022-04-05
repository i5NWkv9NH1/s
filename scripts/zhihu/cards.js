/**
 * @description cards
 * @url ^https?:\/\/api\.zhihu\.com\/api\/v\d{1}\/profile\/cards
 */


 let body = JSON.parse($response.body);

	body.selected_cards = []

 body = JSON.stringify(body);
 $done({
		 body
 });
