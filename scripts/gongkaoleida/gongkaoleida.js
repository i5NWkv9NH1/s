/**
 * @name gongkaoleida
 * @desc 公考雷达
 * @date 2023-05-01
 */
const url = $request.url
if (!$response.body) $done({})

let body = JSON.parse($response.body)

/**
 * @match ^https?:\/\/api\.gongkaoleida\.com\/api\/v\d{1}\_\d{1}\_\d{1}\/index?
 * @match ^https?:\/\/api\.gongkaoleida\.com\/api\/v\d{1}\_\d{1}\/my\/index\?
 * @match ^https?:\/\/api\.gongkaoleida\.com\/api\/v\d{1}\_\d{1}\_\d{1}\/user\/vip\/product
 * @match ^https?:\/\/api\.gongkaoleida\.com\/api\/v\d{1}\_\d{1}\_\d{1}\/user\/getInfo?
 * @match ^https?:\/\/api\.gongkaoleida\.com\/api\/v\d{1}\_\d{1}\_\d{1}\/my\/vipCardInfo?
 */
switch (url) {
  case url.match(/v\d{1}\_\d{1}\_\d{1}\/index?/)?.input: {
    const keywords = [
      '签到',
      '助考锦鲤',
      '选调生',
      '领券专区',
      '专业库',
      '免费资料'
    ]

    body.data.bottomSlogan = ''
    body.data.bottomShare = {
      title: '',
      shareInfo: {
        weiboShareTitle: '',
        shareUrl: '',
        shareDesc: '',
        shareTitle: ''
      },
      tag: '',
      scheme: ''
    }
    body.data.blockList[0].list = body.data.blockList[0].list.filter(
      (item) => keywords.indexOf(item.name) === -1
    )
    break
  }
  case url.match(/my\/index/)?.input: {
    body.data.btns = []
    break
  }
  case url.match(/user\/vip\/product/)?.input: {
    const remainDays = 360
    const vipExpire = 1704788322

    body.data.productList.forEach((product) => {
      product.list.forEach((item) => {
        item.labelIsShow = 0
      })
    })

    const index = body.data.productList.findIndex((item) => item.vipGrade === 2)

    if (index !== -1) {
      body.data.productList[1].isVip = 1
      body.data.productList[1].remainDays = remainDays
      body.data.productList[1].vipExpire = vipExpire
    }
    break
  }
  case url.match(/user\/getInfo/)?.input: {
    body.data.userInfo.vipGrade = 2
    body.data.userInfo.isVip = 1
    body.data.userInfo.vipExire = 1688313599
    body.data.userInfo.vipGradeList = [
      {
        vipExpire: 0,
        vipGradeName: '黄金VIP',
        vipGrade: 1,
        remainDays: 0,
        isVip: 0
      },
      {
        vipExpire: 1688313599,
        vipGradeName: '星钻VIP',
        vipGrade: 2,
        remainDays: 8,
        isVip: 1
      }
    ]
    break
  }
  case url.match(/my\/vipCardInfo/)?.input: {
    body.data = {
      btnScheme: 'gkld://gongkaoleida/vipMemberCenter?param1=1&param2=167',
      greetingMsg: '尊贵的星钻VIP用户，下午好~',
      bottomType: 1,
      btnText: '立即查看',
      vipGrade: 2,
      bottomList: [
        {
          textColor: '#5C342A',
          id: 6,
          schemeUrl:
            'gkld://gongkaoleida/vipMemberCenter?type=2&param3=13&param1=1&param2=169',
          iconUrl:
            'https://static.gongkaoleida.com/2022/media/images/20221209172622HAEo3V.png',
          text: '一键筛选编制岗，星钻VIP端午福利价>>'
        }
      ]
    }
    break
  }
}

$done({ body: JSON.stringify(body) })
