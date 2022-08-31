let inputDir = { x: 0, y: 0 };
let foodSound = new Audio("../assets/eat.mp3");
let moveSound = new Audio("../assets/direction.mp3");
let gameOverSound = new Audio("../assets/gameover.mp3");
let musicSound = new Audio("../assets/gameSound.mp3");
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [{ x: 13, y: 15 }];
let food = { x: 4, y: 5 };
// let board = document.getElementById("board");

//Game functions

function main(ctime) {
  window.requestAnimationFrame(main);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime;
  console.log(ctime);
  gameEngine();
}

function gameEngine() {
  //part1: updating the snake array

  //part2: display the snake and food
  //--Display the snake
  board.innerHTML = "";
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;

    if (index === 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("snake");
    }
    board.appendChild(snakeElement);
  });
  //--Food element

  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

window.requestAnimationFrame(main);
