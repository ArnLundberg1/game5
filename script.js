const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

// Player
const player = {
  x: canvas.width / 2 - 40,
  y: canvas.height - 30,
  width: 80,
  height: 20,
  speed: 7
};

// Falling object
const obj = {
  x: Math.random() * (canvas.width - 30),
  y: 0,
  width: 30,
  height: 30,
  speed: 4
};

let score = 0;
let keys = {};

// Input
document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

function update() {
  // Move player
  if (keys["ArrowLeft"] && player.x > 0) player.x -= player.speed;
  if (keys["ArrowRight"] && player.x < canvas.width - player.width) player.x += player.speed;

  // Move falling object
  obj.y += obj.speed;
  if (obj.y > canvas.height) {
    obj.y = 0;
    obj.x = Math.random() * (canvas.width - obj.width);
  }

  // Collision
  if (
    obj.y + obj.height > player.y &&
    obj.x < player.x + player.width &&
    obj.x + obj.width > player.x
  ) {
    score++;
    obj.y = 0;
    obj.x = Math.random() * (canvas.width - obj.width);
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Player
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.width, player.height);

  // Object
  ctx.fillStyle = "red";
  ctx.fillRect(obj.x, obj.y, obj.width, obj.height);

  // Score
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 10, 20);
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
