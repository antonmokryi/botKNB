class Keyboard {

  keyboardGame() {
    return {
      reply_markup: {
        keyboard: [
          [{ text: "Камінь" }, { text: "Ножиці" }, { text: "Бумага" }],
          [{ text: "Завершити гру,  та показати мої бали" }],
        ],
        resize_keyboard: true,
      },
    };
  }

  keyboardAgain(){
    return{
      reply_markup: {
        keyboard: [
          [{text: "Розпочати нову гру"}]
        ],
        resize_keyboard: true
      }
    }
  }




}

let kb = new Keyboard()

export {kb}
