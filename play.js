let scroe = 0;
const scoreElement = document.getElementById("score");
const zombieElement = document.getElementById("zombie");
const buttonPS = document.getElementById("buttonPlayStop");
const playerElement = document.getElementById("player");
const backgroundEleement = document.getElementById("background");
const playerWidth = playerElement.offsetWidth;

document.addEventListener("click", function () {
  playerElement.classList.add("playerJump");
});
document.addEventListener("keyup", function (event) {
  if (event.which == 32) {
    playerElement.classList.add("playerJump");
  }
});

playerElement.addEventListener("animationend", function () {
  playerElement.classList.remove("playerJump");
});

setInterval(function () {
  scroe++;
  scoreElement.innerText = scroe;
}, 1000);

buttonPS.addEventListener("click", restarBtn);

function checkcrash() {
  const rightCrush =
    zombieElement.offsetLeft < playerElement.offsetLeft + playerWidth;
  const leftCrush = zombieElement.offsetLeft > playerElement.offsetLeft;
  const upCrush =
    playerElement.offsetTop <=
    zombieElement.offsetTop + zombieElement.offsetHeight;
  return rightCrush && leftCrush && upCrush;
}

function pauseGame(event) {
  pauseAnimation();
  pauseScore();
}

function restarBtn() {
  scroe = 0;
}

function resumeGame() {}
function pauseAnimation() {
  zombieElement.style.animationPlayState = "paused";
  playerElement.style.animationPlayState = "paused";
  backgroundEleement.style.animationPlayState = "paused";
}

function pauseScore() {}
