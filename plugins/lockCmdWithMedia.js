module.exports = Object.assign(async function handler(m, { command }) {
    if (!m.quoted) throw 'balas stikernya!'
    if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
    let sticker = global.db.data.sticker
    let hash = m.quoted.fileSha256.toString('hex')
    if (!(hash in sticker)) throw 'Hash tidak ditemukan di database'
    sticker[hash].locked = !/^un/i.test(command)
    m.reply('Berhasil!')
}, {
    rowner: true,
    help: ['un', ''].map(v => v + 'lockcmd'),
    tags: ['advanced'],
    command: /^(un)?lockcmd$/i
})
