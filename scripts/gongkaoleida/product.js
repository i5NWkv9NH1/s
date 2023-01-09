/**
 * @description
 * @url ^https?:\/\/api\.gongkaoleida\.com\/api\/v\d{1}\_\d{1}\_\d{1}\/user\/vip\/product
 */

let body = JSON.parse($response.body)

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

body = JSON.stringify(body)
$done({
  body
})
