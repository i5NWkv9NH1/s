const url = $request.url
if (!$response.body) $done({})

let body = JSON.parse($response.body)

switch(url) {
  case url.match(/launch\?/)?.input: {
    body.data = []
    break
  }

  case url.match(/users\/bc\/homeOperation/)?.input: {
    body.data.meetGiftList = []
    body.data.messageList = []
    break
  }

  case url.match(/bc\/myOperation/)?.input: {
    body.data = []
    break
  }

  case url.match(/get\_online\_app\_red\_dot/)?.input : {
    body.data = {}
    break
  }

  case url.match(/bc\/list/)?.input:{
    body.data = []
    break
  }

  case url.match(/bc\/popup\?/)?.input:{
    body.data = []
    break
  }

  case url.match(/tudou\/center\/config/)?.input :{
    body.data.redFlag = false
    body.data.userState = 0
    body.data.configList = []
    break
  }
}

$done({ body: JSON.stringify(body) })
