/**
 * @desc
 * @url ^https:\/\/gateway\.caixin\.com\/api\/push\/pushTag\/getUserTags
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data.tags = ['caixin_personality', 'login_user', 'PRO']

body = JSON.stringify(body)

$done({
  body
})
