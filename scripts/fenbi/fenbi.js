/**
 * @name fenbi
 * @desc 粉笔
 * @date 2023-05-01
 */
const url = $request.url
if (!$response.body) $done({})

let body = JSON.parse($response.body)

/**
 * @match ^https?:\/\/keapi\.fenbi\.com\/app\/(.*)\/small\_banner\?
 * @match ^https?:\/\/tiku\.fenbi\.com\/(.*)\/banners\/v\d{1}?
 * @match ^https?:\/\/market\-api\.fenbi\.com\/iphone\/v\d{1}\/assistant\/entrance\/show?
 * @match ^https?:\/\/ke\.fenbi\.com\/iphone\/v\d{1}\/user\_member\/entry\?
 * @match ^https?:\/\/ke\.fenbi\.com\/iphone\/v\d{1}\/guide\_center\/guides\?
 * @match ^https?:\/\/market\-api\.fenbi\.com\/iphone\/v\d{1}\/assistant\/my\?
 * @match ^https?:\/\/hera\-webapp\.fenbi\.com\/iphone\/recommend\/tablist?
 * @match ^https?:\/\/tiku\.fenbi\.com\/iphone\/xingce\/banners\/v\d{1}?
 * @match ^https?:\/\/tiku.fenbi.com\/[\W\w]+\/[\W\w]+\/course\/module\/config
 */
switch (url) {
  case url.match(/small\_banner\?/)?.input: {
    body.data.items = []
    break
  }
  case url.match(/banners/)?.input: {
    body.banners.datas = []
    body.banners.total = 0
    break
  }
  case url.match(/entrance\/show/)?.input: {
    body.data.show = false
    break
  }
  case url.match(/user\_member\/entry/)?.input: {
    body.data.banners = []
    break
  }
  case url.match(/guides/)?.input: {
    body.datas = []
    break
  }
  case url.match(/assistant\/my/)?.input: {
    body.data.msgList = []
    body.data.show = false
    break
  }
  case url.match(/recommend\/tablist/)?.input: {
    body.total = 3
    body.datas = [
      // 移除
      // { id: 0, name: '推荐' },
      // { id: 1, name: '干货' },
      { id: 2, name: '圈子' },
      { id: 5, name: '招考' },
      { id: 3, name: '关注' }
    ]
    break
  }
  case url.match(/iphone\/xingce\/banners\/v\d{1}/)?.input: {
    body.banners.datas = []
    body.banners.total = 0

    body.miniBanners.total = 0
    body.miniBanners.datas = []
    break
  }

  case url.match(/course\/module\/config/)?.input: {
    const blocks = [
      '剩余批改',
      '我的体系课',
      '我的1对1',
      '会员中心',
      '套卷批改',
      '新手特训',
      '精品人工批改',
      '免费资料',
      '单题批改',
      '小模考',
      '精品课',
      '冲刺备考群',
      '精品服务',
      '每日演练',
      '线下自习室',
      'PK',
      '1对1',
      '精品班',
      '精品点评',
      '精品面试辅导',
      '精品模考',
      '精品答题指导',
      '会员周报'
    ]
    body.users = body.users.filter((item) => {
      if (blocks.indexOf(item.name) !== -1) {
        return false
      }
      return item
    })
    body.cover = body.cover.filter((item) => {
      if (blocks.indexOf(item.name) !== -1) {
        return false
      }
      return item
    })

    break
  }
}

$done({ body: JSON.stringify(body) })
