const url = $request.url
if (!$response.body) $done({})

let body = JSON.parse($response.body)

switch(url) {
  case url.match(/member\/index\_new/)?.input: {
    body.data.banner = []
    break
  }
  case url.match(/StartPage\/welcome/)?.input: {
    body.data.banner = []
    break
  }
  case url.match(/Member\/ndexHangingWindow/)?.input: {
    body.data = {}
    break
  }
  case url.match(/startPage\/windowAdv/)?.input: {
    body.data = {}
    break
  }
}

$done({ body: JSON.stringify(body) })
