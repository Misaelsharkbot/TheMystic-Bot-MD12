let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('El bot saldra del grupo, , ! (≧ω≦)ゞ', m.chat) 
        await  conn.groupLeave(group)
        }
handler.help = ['leavegc', 'out']
handler.tags = ['owner']
handler.command = /^(salir|leavegc)$/i

handler.rowner = true

export default handler
