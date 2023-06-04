/**
 * @name zhihu
 * @desc 知乎
 * @date 2023-05-01
 */
const url = $request.url
if (!$response.body) $done({})

let body = JSON.parse($response.body)

/**
 * @match ^https?:\/\/api\.zhihu\.com\/feed\/render\/tab\/config?
 */
switch (url) {
  //? 移除多余的tab
  case url.match(/feed\/render\/tab\/config/)?.input: {
    // const tabs = ['全站', '直播']
    const tabs = ['全站']

    body.more_sections = body.more_sections.filter((item) => {
      //? 存在 tabs
      if (tabs.indexOf(item.title) !== -1) {
        return true
      }
      return false
    })
    break
  }
  case url.match(/market\/popovers\_v\d{1}/)?.input: {
    delete body.data.content.poster
    break
  }

  default: {
    console.log('zhihu:: match default')
  }
}
$done({ body: JSON.stringify(body) })
