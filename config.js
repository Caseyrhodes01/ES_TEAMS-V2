//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "examsolutionteam@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ec33ecf51f928d0a89a1b.jpg";
global.devs = "https://t.me/examsolutionteam";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "254112192119";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a81247659e996130a88ea.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.scan = "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUk3QURMQ3JLaFQ3WjM5dlRkaDc2Q3hDQzdFcXl2MHBrNEpkeHk0Myszaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVRhWGJGRjBxdXRGU20vLzNNT2VtRGtmeHA3ejRLQ1plNGRCMFJZMjMzQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSVlGakFBMjRObFJ1K2xyTVY0ZllXK3IyekJxdVIxcHd3b1lmT3M3RmtVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYV3lycFpSVlE1VUJlME5UMEEzeGk3VnJqMHYrWlBqWkdsc0ppeVE1azJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFOZ2RHMUNRazNtcmcyOGxHT01WMStueG50RTI3U2l4NjJUd0c3TEJSMzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJzV3lGem1SbDRWblUxQ2ZUU2wrL1RvL0hHdlMxRzhkYzl4eFVDU2VIR0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0NmaWlqM2U1WENOcDZ3eU4vd00wbDVuMkNWTzZGd3E2OXhjMFNVamkyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWthL0NqdW9PaFBtY2JDaktMaHJBRVMyc1l3eEx5MmhBdndxbTNRU0NFYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRzYS9LODd5ZHZLVjlHbzhYSXNlbkdzcGFTei90L0daQWtZQ3EzWHpYNGZmcmlNc1N0N3FtREtUdWFuSlZsY2prSWNFZHRVWFRiRjN4dlM4eW9BakRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDAsImFkdlNlY3JldEtleSI6IkxxTDVsVldUK0tBUndjY1M1NEhNQXFGbHZYRmdGOERWcDhLVTY5U0JqNFE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik1PakpYVkFPVHVhTE9QNll3WmxmdHciLCJwaG9uZUlkIjoiMGQ4YTc4YzAtMGMyMC00MTA4LWE0NTMtZjEwMzU3Mjg2MTg1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhabWJLeGF2L2IwVmljZ3R5bjg4NUVsYm43cz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzNTZkSnRKSXJxYUFrQ1E2a3ZFWlFGVmhzZDA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVEMxNERYNU4iLCJtZSI6eyJpZCI6IjI1NDExMjE5MjExOTozNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDQVNFWVJIT0RFUyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTERteFBBQkVQTCswTGNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoidmp0TldWbDBQWTdMK3ZPR0NzS3h2U0lpNTFoYWM4Z016aTE2Y2Rxa25CYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiS1FtSDVyVEIxUXBYZk1GV09vY21LMEE3N2tGR0lGZDJUYVlIZG9ldVRvWTBXZE1nQlpCKzVJTXRtbWs4dCsycGR4U0dYVW1STWFoQzFlTlFqRzNlQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IldTOU14c1hXVlo1a2NvR2dhRkdVak5sb0xrWks2N0pBdmRpQjFQTGFyV1YvYlhKVGw4Vi9oMGQ5MWpVTnF1eFM5UFhsdG16M0kzeTFpMWtoaEZUUENRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0MTEyMTkyMTE5OjM2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmI0N1RWbFpkRDJPeS9yemhnckNzYjBpSXVkWVduUElETTR0ZW5IYXBKd1gifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjcyODMwNzEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT0NZIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 CASEYRHODES-𝕍2👑",
  author: process.env.PACK_AUTHER || " CASEYRHODES-𝕍2👑",
  packname: process.env.PACK_NAME || " CASEYRHODES-𝕍2👑",
  botname: process.env.BOT_NAME || " CASEYRHODES-𝕍2👑",
  ownername: process.env.OWNER_NAME || " CASEYRHODES-𝕋𝔼ℂℍ👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ES TEAMS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
