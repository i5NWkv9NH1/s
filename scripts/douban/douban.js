/**
 * @name douban
 * @desc 豆瓣
 * @date 2023-05-01
 */
const url = $request.url
if (!$response.body) $done({})

let body = JSON.parse($response.body)

/**
 * @match ^https?:\/\/frodo\.douban\.com\.api\/v\d{1}\/elendil\/recommend\_feed?
 * @match ^https?:\/\/frodo\.douban\.com\.api\/v\d{1}\/home\_banner?
 */
switch (url) {
  case url.match(/recommend\_feed/)?.input: {
    body.toast = ''
    body.items = body.items.filter((item) => item.type_cn)
    break
  }
  case url.match(/home\_banner/)?.input: {
    body = {}
  }
  default: {
    console.log('douban:: match default')
  }
}
console.log('douban:: match done')
$done({ body: JSON.stringify(body) })
