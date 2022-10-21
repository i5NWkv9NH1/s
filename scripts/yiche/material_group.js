/**
 * @desc
 * @url ^https?:\/\/mapi\.yiche\.com\/app\_config\/api\/v\d{1}\/material\/v\d{1}\/common\_material\_groups\?
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.data.bj10205 = []
body.data.mytablogin = []
body.data.dianhuamiandarao = []
body.data.bendichengjiaojiawenan = []
body.data.baojiaswitchoption = []
body.data.bitautocalcdaikuanios = []
body.data.newenergyinquirycopy2 = []
body.data.newenergyjellybean = []
body.data.canshupeizhi = []
body.data.BaojiaMokaUserEntrances = []
body.data.newenergysugarbean = []
body.data.iosdiscoverindispensablesconf = []
body.data.tongzhiquanxiantishitanchuang = []
body.data.checkinrules = []
body.data.newergewaistclues = []
body.data.baojiadanxiansuorukoupeizhi = []
body.data.xunjiatancengyouhui = []
body.data.xinxunjiawanliutanchuang = []
body.data.autopriceappstorecheckversionconfig = []
body.data.bjapmconfig = []

body = JSON.stringify(body)

$done({
	body
})
