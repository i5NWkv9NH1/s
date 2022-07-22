/**
 * @desc
 * @url ^https?:\/\/api\.xiachufang\.com\/v\d{1}\/homepage\/paged\_waterfall\recommendations\.json
 * @date 2021-09-22
 */


 let body = JSON.parse($response.body);

var cells = body.cells.filter(item => item.label !== '广告').map(item => {
	delete(item.impression_sensor_events)
	delete(item.click_sensor_events)
	delete(item.tracking)
	return item
})

body.cells = cells;

 body = JSON.stringify(body);

 $done({
	 body
 })
