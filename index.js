import TelegramBot from "node-telegram-bot-api";
import { token, bot } from "./config.js";
import { kb } from "./keyboards.js";
import fs from "fs";
let bot = new TelegramBot(token, { polling: true });

const html = ` <b>helllo</b>
  <p>loremsdf;ksdj</p>`;

let arr = ["Камінь", "Ножиці", "Бумага"];
let score = 0;
let rssDate = {
  hour: 10,
  minutes: 0,
  lastSuccessRssDay: 23,
};

function rssDay() {
  setInterval(() => {
    let today = new Date();
    let currentDay = today.getDate();
    if (currentDay != rssDate.lastSuccessRssDay) {
      bot.sendMessage();
    }
  }, 1000 * 60 * 5);
}
// 10-10^20 4

bot.on("message", (message) => {
  let userID = message.from.id;

  if (message.text == "/start") {
    let ids = fs.readFile("db.txt", () => {});
    fs.writeFile("db.txt", userID.toString(), () => {});

    console.log(message);
    bot.sendSticker(
      userID,
      "https://chpic.su/_data/stickers/h/hamster_senia/hamster_senia_001.webp"
    );
    bot.sendMessage(
      userID,
      `<b>Привіт ДРУЖЕ ${message.from.first_name}</b> 
    
Давай пограємо з тобою у відому гру "Камінь - Ножиці - Бумага"`,
      { parse_mode: "HTML", ...kb.keyboardGame() }
    );
  }
  if (
    message.text == "Камінь" ||
    message.text == "Ножиці" ||
    message.text == "Бумага"
  ) {
    let random = arr[Math.floor(Math.random() * arr.length)];
    if (
      (random == "Ножиці" && message.text == "Камінь") ||
      (random == "Бумага" && message.text == "Ножиці") ||
      (random == "Камінь" && message.text == "Бумага")
    ) {
      score += 10;
      //
    } else if (
      (random == "Ножиці" && message.text == "Ножиці") ||
      (random == "Бумага" && message.text == "Бумага") ||
      (random == "Камінь" && message.text == "Камінь")
    ) {
      bot.sendMessage(userID, "Нічия, спробуй ще раз");
    }
    //else if ( message.text == "Завершити гру,  та показати мої бали"){
    //     bot.sendMessage(userID, `Дякуємо за гру`, ...kb.keyboardAgain)
    // } 
    else {
      score -= 10;
    }
    bot.sendMessage(userID, random);
    bot.sendMessage(userID, score);
  }
});
