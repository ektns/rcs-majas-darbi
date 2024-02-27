const cells = document.querySelectorAll(".cells");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "x";
let running = false;

initializedGame();

function initializedGame() {}
function cellClicked() {}
function updateCell(cell, index) {}
function changePlayer() {}
function checkWinner() {}
function restartGame() {}
