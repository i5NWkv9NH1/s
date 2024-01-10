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
  case url.match(/ShenExam\/getLists/)?.input: {
    body.data.lists = []
    break
  }
  case url.match(/ExameData\/new\_exameList/)?.input: {
    body.data.paper_list = []
    break
  }
  case url.match(/ExameData\/menu\_title/)?.input: {
    body.data = {}
    break
  }

}

$done({ body: JSON.stringify(body) })
