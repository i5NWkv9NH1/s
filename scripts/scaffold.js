/**
 * @desc
 * @url
 * @date 2021-09-22
 */


let body = JSON.parse($response.body);

body = JSON.stringify(body);

$done({
	body
})
