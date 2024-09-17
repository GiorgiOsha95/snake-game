const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let snake = [{x: 200, y: 200}];
let dx = 20;
let dy = 0;
let food = {x: 0, y: 0};
let score = 0;

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
    snake.forEach(part => {
        ctx.fillStyle = 'green';
        ctx.fillRect(part.x, part.y, 20, 20);
    });
}

function moveSnake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score += 10;
        document.getElementById('score').textContent = score;
        createFood();
    } else {
        snake.pop();
    }
}

function changeDirection(event) {
    const keyPressed = event.keyCode;
    if (keyPressed === 37 && dx === 0) {
        dx = -20;
        dy = 0;
    } else if (keyPressed === 38 && dy === 0) {
        dx = 0;
        dy = -20;
    } else if (keyPressed === 39 && dx === 0) {
        dx = 20;
        dy = 0;
    } else if (keyPressed === 40 && dy === 0) {
        dx = 0;
        dy = 20;
    }
}

function createFood() {
    food.x = Math.floor(Math.random() * canvas.width / 20) * 20;
    food.y = Math.floor(Math.random() * canvas.height / 20) * 20;
}

function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, 20, 20);
}

function checkCollision() {
    const head = snake[0];
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        return true;
    }
    for (let i = 4; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            return true;
        }
    }
    return false;
}

function gameLoop() {
    if (checkCollision()) {
        alert('Game Over');
        document.location.reload();
    } else {
        clearCanvas();
        drawFood();
        moveSnake();
        drawSnake();
        setTimeout(gameLoop, 100);
    }
}

document.addEventListener("keydown", changeDirection);
createFood();
gameLoop();
