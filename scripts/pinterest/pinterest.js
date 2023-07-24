/**
 * @name Pinterest
 * @date
 */
const url = $request.url
if (!$response.body) $done({})

let body = JSON.parse($response.body)

/**
 * @match ^https?:\/\/api\.pinterest\.com\/v\d{1}\/pins\/[\W\w]+\/related\/modules\?
 */

switch (url) {
  case url.match(/pins\/[\W\w]\/related\/modules\?/)?.input: {
    body.data = body.data.filter((item) => item.is_shopping_ad != true)
    break
  }
}

$done({ body: JSON.stringify(body) })
