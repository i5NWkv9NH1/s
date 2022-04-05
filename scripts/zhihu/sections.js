/**
 * @description sections
 * @url ^https?:\/\/api\.zhihu\.com\/feed\_root\/sections\/query\/v\d{1}?
 */


 let body = JSON.parse($response.body);

	body.more_sections = []
	body.guess_like_sections = []
	body.selected_sections = []

 body = JSON.stringify(body);
 $done({
		 body
 });
