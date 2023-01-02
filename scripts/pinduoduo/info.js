/**
 * @description
 * @url ^https?:\/\/api\.pinduoduo\.com\/api\/social\/my\/info\?
 */

let body = JSON.parse($response.body)

body.commend_friends_enabled = false
body.tl_font_ab = false
body.need_fill_self_introduction = false
body.contacts_friends_enabled = false
body.self_introduction_enabled = false

body = JSON.stringify(body)
$done({
  body
})
