const { createHash } = require('crypto')

let handler = async function (m, { args }) {
  if (!args[0]) throw 'Serial Number nya mana?'
  let user = db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Serial Number salah!\nKetik *.sn* Untuk melihat SN mu'
  user.registered = false
  m.reply(`Unreg berhasil!`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <SN>')
handler.tags = ['xp', 'main']
handler.command = /^unreg(ister)?$/i

handler.register = true

module.exports = handler