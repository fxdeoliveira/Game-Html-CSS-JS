const playerElement = document.getElementById("player");
document.addEventListener("click", function () {
  playerElement.classList.add("playerJump");
});

playerElement.addEventListener("animationend", function () {
  playerElement.classList.remove("playerJump");
});
