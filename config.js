const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER="918972897084"? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,928972897084";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,928972897084";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,928972897084";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Niloy-XMD",
  ownername:process.env.OWNER_NAME|| "Niloy-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "SUHAIL_09_14_10_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDM3LFxuICAgICAgICA1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDgxLFxuICAgICAgICA3MCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5LFxuICAgICAgICA1OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDczLFxuICAgICAgICAxNzcsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4MCxcbiAgICAgICAgNjksXG4gICAgICAgIDMyLFxuICAgICAgICA0MixcbiAgICAgICAgMzQsXG4gICAgICAgIDk3LFxuICAgICAgICA2MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDMsXG4gICAgICAgIDE0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgODcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDUyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODksXG4gICAgICAgIDMzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDcyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkwLFxuICAgICAgICA4OSxcbiAgICAgICAgNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDczLFxuICAgICAgICA1NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDczLFxuICAgICAgICAyMzIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5ldzBkTHhzZnFWVGJhSTZaK1dxNFNFRXhqcHJPdk9QRHc4UmY5NHRLR0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE4OTcyODk3MDg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4MkI0MjU3MjM2RjBERTZEQUE5RUU4RkU2NTNERjZFN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjgyMDYwNjFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTg5NzI4OTcwODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjIzMUZEN0FBRUNFQUQ2QkU3NDM0REE4NjY3QTFDN0YxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODIwNjA2MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwQkhhN19hN1JyV1E4MmlCRjZZS3FBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY5ZjNlYjUyLTYwNGYtNGRmNS1hNDZiLTE5YzZhYjBlNGU3NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICAxNTIsXG4gICAgICAxNTAsXG4gICAgICA4NSxcbiAgICAgIDI0MCxcbiAgICAgIDQ3LFxuICAgICAgMTEzLFxuICAgICAgMTg0LFxuICAgICAgMjcsXG4gICAgICAyNDksXG4gICAgICAyNSxcbiAgICAgIDE2OSxcbiAgICAgIDUsXG4gICAgICAyNTAsXG4gICAgICAxNjksXG4gICAgICAxODAsXG4gICAgICA2MixcbiAgICAgIDc2LFxuICAgICAgNzUsXG4gICAgICA0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjcsXG4gICAgICAyNTIsXG4gICAgICAxNTksXG4gICAgICAxNDIsXG4gICAgICA2MSxcbiAgICAgIDE3NSxcbiAgICAgIDksXG4gICAgICAxNzIsXG4gICAgICA2NCxcbiAgICAgIDE5OCxcbiAgICAgIDM1LFxuICAgICAgMTMzLFxuICAgICAgMTQyLFxuICAgICAgMTM0LFxuICAgICAgMTc4LFxuICAgICAgMTYxLFxuICAgICAgMjMsXG4gICAgICAxNjMsXG4gICAgICAxNDMsXG4gICAgICAxNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNExIM0o3WE5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxODk3Mjg5NzA4NDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzcxMjkxMjM0MTAwNzU6MTVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiPiDwnZCNyarKn+G0nCDimqFcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJK1l1TDRHRU9lcGliZ0dHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjB6SW1UcldNVjZISGdYN1J2MTN6RHROeCt2aHhOSi9ZYmQxblpSQktVMTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiLyt6YmZBR1Zzd1phdDBqQ1RCMXd5TnZZblJxQkd6a1pRanJWWHV6OEtWeisrbHJqTlI0ZCtXc0l2Y1VLUEVpUXkwbzJOYlpMcHZBTnlVSWN4bjdSREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRGpHbk5lZk0wMjlFS1lLTmZBeGlnK3YxeEZxNXVwL1dUQVY3WUNGcVgrWmZVOFdjVW9qZ0w4UnRuYTFsdGxlenF5QUFUZ3hEa1NSVVdPZkRRWVFQaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4OTcyODk3MDg0OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODIwNjA1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxNTlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTE1OLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYlNHRkNhRXhWMVhMRnJMb3N5MW1Hckx4L1ZSQTZhcG9aZW83ZUlPd1ZyZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzQxNTU2NzUxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
