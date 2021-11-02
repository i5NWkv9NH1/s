/**
 * @desc
 * @url
 * @date 2021-09-22
 */


let body = $response.body;
body = JSON.parse(body);

body = JSON.stringify(body);

$done({
	body
})
