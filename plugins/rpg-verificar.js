import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: "Seleciona tu edad",
	rows: [
	    {title: "Cualquier edad", rowId: '.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: "",
	rows: [
	    {title: "30 años", rowId: '.daftar ' + namae + '.30 '},
	    {title: "29 años", rowId: '.daftar ' + namae + '.29 '},
	    {title: "28 años", rowId: '.daftar ' + namae + '.28 '},
	{title: "27 años", rowId: '.daftar ' + namae + '.27 '},
	{title: "26 años", rowId: '.daftar ' + namae + '.26 '},
	{title: "25 años", rowId: '.daftar ' + namae + '.25 '},
	{title: "24 años", rowId: '.daftar ' + namae + '.24 '},
	{title: "23 años", rowId: '.daftar ' + namae + '.23 '},
	{title: "22 años", rowId: '.daftar ' + namae + '.22 '},
	{title: "21 años", rowId: '.daftar ' + namae + '.21 '}
	]
    },
    {
	title: "Y O U N G",
	rows: [
	    {title: "20 amos", rowId: '.daftar ' + namae + '.20 '},
	    {title: "19 años", rowId: '.daftar ' + namae + '.19 '},
	    {title: "18 Yaños", rowId: '.daftar ' + namae + '.18 '},
	{title: "17 años", rowId: '.daftar ' + namae + '.17 '},
	{title: "16 años", rowId: '.daftar ' + namae + '.16 '},
	{title: "15 años", rowId: '.daftar ' + namae + '.15 '},
	{title: "14 años", rowId: '.daftar ' + namae + '.14 '},
	{title: "13 años", rowId: '.daftar ' + namae + '.13 '},
	{title: "12 años", rowId: '.daftar ' + namae + '.12 '},
	{title: "11 años", rowId: '.daftar ' + namae + '.11 '},
	{title: "10 años", rowId: '.daftar ' + namae + '.10 '},
	{title: "9 años", rowId: '.daftar ' + namae + '.9 '}
	]
    },
]

const listMessage = {
  text: `𝚂𝚎𝚕𝚎𝚌𝚌𝚒𝚘𝚗𝚎 𝚜𝚞 𝚎𝚍𝚊𝚍 𝚙𝚞𝚕𝚜𝚊𝚗𝚍𝚘 𝚊𝚋𝚊𝚓𝚘...\n*𝚂𝚞 𝚗𝚘𝚖𝚋𝚛𝚎:* ${conn.getName(m.sender)}\n𝚀𝚞𝚒𝚎𝚛𝚎𝚜 𝚞𝚗 𝚊𝚙𝚘𝚍𝚘 𝚎𝚜𝚌𝚛𝚒𝚋𝚎 *${usedPrefix + command} apodo.edad*`,
  footer: global.wm,
  title: "━━━━「 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎 」━━━━",
  buttonText: "𝙲𝙻𝙸𝙲𝙺 𝙰𝚀𝚄𝙸!",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙷𝙴𝚈! 𝚈𝙰 𝙴𝚂𝚃𝙰𝚂 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾*\n\n*𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝚀𝚄𝙸𝚃𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾? 𝚄𝚂𝙰 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix}unreg <numero de serie>*\n\n*𝚂𝙸 𝙽𝙾 𝚁𝙴𝙲𝚄𝙴𝚁𝙳𝙰𝚂 𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝙿𝚄𝙴𝙳𝙴𝚂 𝚄𝚂𝙰𝚁 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix}SN*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, m)
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '𝙴𝚕 𝚗𝚘𝚖𝚋𝚛𝚎 𝚗𝚘 𝚙𝚞𝚎𝚍𝚎 𝚚𝚞𝚎𝚍𝚊𝚛 𝚟𝚊𝚌í𝚘 (Apodo)'
  if (!age) throw '𝙻𝚊 𝚎𝚍𝚊𝚍 𝚗𝚘 𝚙𝚞𝚎𝚍𝚎 𝚚𝚞𝚎𝚍𝚊𝚛 𝚟𝚊𝚌í𝚊 (numero)'
  age = parseInt(age)
  if (age > 30) 𝙴𝚜𝚝𝚊𝚜 𝚖𝚞𝚢 𝚟𝚒𝚎𝚓𝚘𝚜 𝚌𝚞𝚒𝚍𝚊 𝚊 𝚝𝚞𝚜 𝚑𝚒𝚓𝚘𝚜 𝚖𝚎𝚓𝚘𝚛 (。-`ω´-)'
  if (age < 4) 𝙻𝚘𝚜 𝚋𝚎𝚋𝚎𝚜 𝚜𝚊𝚋𝚎𝚗 𝚎𝚜𝚌𝚛𝚒𝚋𝚒𝚛?'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  m.reply(`
━━━━ 「 *Successful Registration* 」━━━━

╭─• 〘 INFO 〙
│✧ *Name:* ${name}
│✧ *Age:* ${age} Years
│✧ *Sn:* ${sn}
▣──────···
`.trim())
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|verificar|verify|reg(ister)?)$/i

export default handler
