const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔══■□💙Toxic Bot💙■□══╗*\n           \n*⚜═Toxic Bot═⚜*\n\n*𝕆𝕨𝕟𝕖𝕣 Turbo - https://api.whatsapp.com/send?phone=+916380260672&text=Hi%20Bro%20i%20love%20your%20bot*\n*            *\n*╚══■□💙Toxic Bot💙■□══╝*\n\n*▷Creator: Turbo ✝︎*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Gɪᴛ Lɪɴᴋs*\n           *\n🌟═Toxic Bot ᴏᴡɴᴇʀ Turbo- »« ʀᴇᴀʟ ɴᴀᴍᴇ-Toxic turbo😜═🌟*\n\n*🔅git link coming soon*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔══■□💙Toxic Bot💙■□══╗*\n           \n*⚜═Toxic Bot═⚜*\n\n*𝕆𝕨𝕟𝕖𝕣 Turbo- - https://api.whatsapp.com/send?phone=+916380260672&text=Hi%20Bro%20i%20love%20your%20bot*\n*            *\n*╚══■□💙Toxic Bot💙■□══╝*\n\n*▷Cʀᴇᴀᴛᴇʀ: Turbo ✝︎*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Gɪᴛ Lɪɴᴋs*\n           *\n🌟═Toxic Bot ᴏᴡɴᴇʀ Turbo- »« ʀᴇᴀʟ ɴᴀᴍᴇ-Toxic turbo😜═🌟*\n\n*🔅git link coming soon*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
