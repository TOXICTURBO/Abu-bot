const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.postimg.cc/sXg5dsrt/toxic.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*✌︎Toxic Bot☜✌︎*
ᴄʀᴇᴀᴛᴏʀ ɴᴜᴍʙᴇʀ: wa.me/916380260672

Tʜɪs ʙᴏᴛ Oᴡɴᴇʀ Nᴀᴍᴇ : ❤️🥰 ✌︎Toxic Bot ➪ Turbo

Aʙᴜ ʙᴏᴛ ɢʀᴏᴜᴘ: https://chat.whatsapp.com/EQiRSt1omhJ3EqilWhacvo

Gɪᴛʜᴜʙ ʟɪɴᴋ:    coming soon

Aᴜᴅɪᴏ ᴄᴏᴍᴍᴀᴅᴇ :   coming soon

Sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀᴅᴇ: coming soon

Cʜᴀɴɴᴇʟ : https://www.youtube.com/channel/UCl9aA2wbht33FrDaKfJKX1Q

💝Toxic Bᴏᴛ Cʀᴇᴀᴛᴇᴅ Bʏ Turbo💝
`}) 

}));
