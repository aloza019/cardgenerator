/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  let suit = generaterandomsuit();
  if (suit == "&hearts;" || suit == "&diams;") {
    document.querySelector("#topsuit").style.color = "red";
    document.querySelector("#botoomsuit").style.color = "red";
  }
  document.querySelector("#topsuit").innerHTML = suit;
  document.querySelector("#numbers").innerHTML = generaterandomnumber();
  document.querySelector("#botoomsuit").innerHTML = suit;
};

let generaterandomsuit = () => {
  let cardsuit = ["&hearts;", "&spades;", "&clubs;", "&diams;"];

  let cardsuitrd = Math.floor(Math.random() * cardsuit.length);

  return cardsuit[cardsuitrd];
};

let generaterandomnumber = () => {
  let randomnum = ["A", "2", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  let randomnumberrd = Math.floor(Math.random() * randomnum.length);

  return randomnum[randomnumberrd];
};
