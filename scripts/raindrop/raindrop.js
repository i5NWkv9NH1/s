/**
 * @name raindrop
 * @desc raindrop
 * @date 2023-05-01
 */
const url = $request.url;
if (!$response.body) $done({});

let body = JSON.parse($response.body);

/**
 * @match ^https?:\/\/api\.raindrop\.io\/v\d{1}\/user
 */

switch (url) {
  case url.match(/v\d{1}\/user/)?.input: {
    body.user.pro = true;
    break;
  }
}

$done({ body: JSON.stringify(body) });
