import TelegramBot from "node-telegram-bot-api";

let token = "6596902925:AAEI7KwHkH9akrsWCo9cVUGT_F9UmOIpdi8";
let bot = new TelegramBot(token, { polling: true });
export {token, bot}