/**
 * @name maoyan
 * @desc 猫眼
 * @date 2023-05-01
 */
const url = $request.url
if (!$response.body) $done({})

let body = JSON.parse($response.body)

/**
 * @match ^https?:\/strategy\-movie\.maoyan\.com\/api\/olape\/hitexp\.json\?
 */
switch (url) {
  //? 移除多余的tab
  case url.match(/olape\/hitexp\.json\?/)?.input: {
    body.data = []
    break
  }

  default: {
    console.log('maoyan:: match default')
  }
}
$done({ body: JSON.stringify(body) })
