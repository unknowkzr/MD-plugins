const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
let a = [{
    displayName: 'Owner',
    vcard: 'BEGIN:VCARD\n'
    + 'VERSION:3.0\n'
    + 'N:;Ownerbot;;;FN:~ สแดแดแดข ~\n'
    + 'ORG:Developer\n'
    + 'TEL;Creator Dan Developer ๐;waid=6283844009539:6283844009539\n'
    //+ 'item1.TEL;Support Whatsapp;waid=15517868060:15517868060\n'
    + `item1.X-ABLabel:๐ Creator ${global.wm} \n`
    + 'item2.EMAIL;type=INTERNET:xiuan@gmail.com\n'
    + 'item2.X-ABLabel:๐ ๐๐ข๐๐๐ก\n'
    + 'item3.URL:https://instagram.com/_dev\n'
    + 'item3.X-ABLabel:Instagram\n'
    + 'item4.ADR:;;๐ฒ๐จ Indonesia ๐ฒ๐จ;;;;\n'
    + 'item4.X-ABADR:ac\n'
    + 'item4.X-ABLabel:๐ ๐๐๐๐๐ค๐ฃ\n'
    + 'item5.X-ABLabel:Chat yg benar!\n'
    + 'END:VCARD'
  },
  {
   displayName: 'Halo',
   vcard: 'BEGIN:VCARD\n' // metadata of the contact card
   + 'VERSION:3.0\n' 
   + 'N:;Manusia;;;'
   + 'FN:~ orang ~\n' // full name
   + 'ORG:Pengembang\nTEL;Pengembang & Moderator โจ๏ธ;waid=994407430641:994407430641\n'
   //+ 'item1.TEL;Support Whatsapp;waid=6281299878753:6281299878753\n' // WhatsApp ID + phone number
   + `item1.X-ABLabel:๐ Moderator ${global.wm} \n`
   + 'item2.EMAIL;type=INTERNET:ryumd@gmail.com\n'
   + 'item2.X-ABLabel:๐ ๐๐ข๐๐๐ก\n'
   //+ 'item3.URL:https://instagram.com/_13\n'
   //+ 'item3.X-ABLabel:Instagram\n'
   + 'item4.ADR:;;๐ฒ๐จ Indonesian ๐ฒ๐จ;;;;\n'
   + 'item4.X-ABADR:ac\n'
   + 'item4.X-ABLabel:๐ ๐๐๐๐๐ค๐ฃ\n'
   + 'item5.X-ABLabel:Chat Yg Penting Saja\n'
   + 'END:VCARD'
}];

conn.sendMessage(m.chat, { contacts: { displayName: 'Huy', contacts: a }}, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
