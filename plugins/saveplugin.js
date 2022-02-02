let fs = require('fs')

let handler = async (m, { text }) => {
    if (!text || !m.quoted) return m.reply('Tag pesan code pluginsnya dan pastikan lokasi file sudah benar!\nContoh: #sf plugins/afk.js')
    let trny = m.quoted ? m.quoted.text ? m.quoted.text : m.quoted.contentText : text
    await fs.writeFileSync(text, trny)
    m.reply('Berhasil mengganti file '+ text + '\n Mereset bot untuk perubahan file...')
    await global.db.write()
    process.send('reset')
}
handler.help = ['sf'].map(v => v + ' <tag code>')
handler.tags = ['owner']
handler.command = /^(saveplugin|sf)$/i

handler.owner = 1

module.exports = handler