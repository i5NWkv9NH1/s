/**
 * @desc
 * @url ^https?:\/\/bj\.app\.yiche\.com\/webapi\/api\/piece\/getpiece\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.nearbydealersbrands.Defaultbrand = []
body.nearbydealersbrands.Recommendbrand = []

body = JSON.stringify(body)

$done({
	body
})
