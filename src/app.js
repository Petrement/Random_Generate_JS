/* eslint-disable */
import "bootstrap";
import "./style.css";

const numeros = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
const palos = ["corazon", "diamante", "pica", "trebol"];

let topIcon = document.querySelector(".topIcon");
let numero = document.querySelector(".numero");
let lowerIcon = document.querySelector(".lowerIcon");
let myText = document.querySelector("h1");
let botones = document.getElementById("contenedordemenu");
let contenedorInput = document.getElementById("contenedorinput");

window.onload = function randomCardgenerator() {
  let randomNum = numeros[Math.floor(Math.random() * (numeros.length - 1))];
  let currentClove = palos[Math.floor(Math.random() * palos.length)];
  botones.innerHTML = `<button type="button" id="randomCardgenerator" class="btn">Choose random card</button>`;

  numero.innerHTML = randomNum;
  myText.innerHTML = "Your lucky card";

  if (currentClove === "corazon") {
    topIcon.innerHTML = "♥";
    lowerIcon.innerHTML = "♥";
    topIcon.style.color = "red";
    lowerIcon.style.color = "red";
  }
  if (currentClove === "diamante") {
    topIcon.innerHTML = "♦";
    lowerIcon.innerHTML = "♦";
    topIcon.style.color = "red";
    lowerIcon.style.color = "red";
  }
  if (currentClove === "pica") {
    topIcon.innerHTML = "♠";
    lowerIcon.innerHTML = "♠";
    topIcon.style.color = "black";
    lowerIcon.style.color = "black";
  } else if (currentClove === "trebol") {
    topIcon.innerHTML = "♣";
    lowerIcon.innerHTML = "♣";
    topIcon.style.color = "black";
    lowerIcon.style.color = "black";
  }
  let mybutton = document.querySelector(".btn");
  mybutton.addEventListener("click", e => {
    randomCardgenerator();
  });
  let input = document.querySelector("#yourWidth");
  let cuerpoCarta = document.querySelector(".carta");

  setTimeout(randomCardgenerator, 10000);
};
