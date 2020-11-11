
var direction = "Right"
var canvas
var canvasContext
var isGameFinished = false
var fruit = [
    180, 
    30
]
const snakeUnitWidth = 30
const snakeUnitHeight = 30


var snake = [
    [snakeUnitWidth, snakeUnitHeight],
    [snakeUnitWidth * 2, snakeUnitHeight],
    [snakeUnitWidth * 3, snakeUnitHeight]
]


window.onload = function () {
    canvas = document.getElementById("snake")
    canvasContext = canvas.getContext("2d")
    setInterval(function () {
        drawRectangle("black", 0, 0, canvas.width, canvas.height)
        if (!isGameFinished) {
            for (var i = 0; i < snake.length; i++) {
                drawRectangle("white", snake[i][0], snake[i][1], snakeUnitWidth, snakeUnitHeight)
            }
            drawRectangle("white", fruit[0], fruit[1], snakeUnitWidth, snakeUnitHeight)
            moveSnake(direction)
        }
        else {
		    canvasContext.fillStyle = "white"
		    canvasContext.fillText("Puntaje: ", canvas.width / 2, canvas.height / 2)
            canvasContext.fillText(snake.length - 3, canvas.width / 2+40, canvas.height / 2)
		    canvasContext.fillText("Presione para reiniciar", canvas.width / 2, canvas.height / 2 + 20)
        }
    }, 1000/10)

    
    addEventListener(
        'mousedown',
        resetGame
    )

    
    addEventListener(
        'keydown',
        determineDirection
    )
}

function resetGame(){
    if(isGameFinished){
        snake = [
            [snakeUnitWidth, snakeUnitHeight],
            [snakeUnitWidth * 2, snakeUnitHeight],
            [snakeUnitWidth * 3, snakeUnitHeight]
        ]
        fruit = [
            180, 
            30
        ]
        isGameFinished = false
    
    }
    
}

function determineDirection(evt) {
    switch (evt.keyCode) {
        case 37:
            if (direction != "Right") {
                direction = "Left"
            }
            break
        case 38:
            if (direction != "Down") {
                direction = "Up"
            }

            break
        case 39:
            if (direction != "Left") {
                direction = "Right"
            }

            break
        case 40:
            if (direction != "Up") {
                direction = "Down"
            }

            break
    }

}

function checkForColision() {
    console.log(snake[snake.length-1])
    if(snake[snake.length - 1][0] == fruit[0] && snake[snake.length - 1][1] == fruit[1]){
        
        snake.unshift([snake[0]]);

        fruit[0] = Math.round(Math.random() * canvas.width/snakeUnitWidth)*snakeUnitWidth;
        fruit[1] = Math.floor(Math.random() * canvas.height/snakeUnitHeight)*snakeUnitHeight;
    }
    
    if(
    snake[snake.length - 1][0] == canvas.width || 
	snake[snake.length - 1][0] == -30 || 
	snake[snake.length - 1][1] == canvas.height ||
	snake[snake.length - 1][1] == -30){
        console.log("game finished")
        isGameFinished = true
        saveToFirestore(snake.length - 3)
	}
}

function moveSnake(direction) {
    switch (direction) {
        case "Right":
            positions = snake.shift()
            positions[0] = snake[snake.length - 1][0] + snakeUnitWidth
            positions[1] = snake[snake.length - 1][1]
            snake.push(positions)
            checkForColision()
            break
        case "Left":
            positions = snake.shift()
            positions[0] = snake[snake.length - 1][0] - snakeUnitWidth
            positions[1] = snake[snake.length - 1][1]
            snake.push(positions)
            checkForColision()
            break

        case "Up":
            positions = snake.shift()
            positions[0] = snake[snake.length - 1][0]
            positions[1] = snake[snake.length - 1][1] - snakeUnitHeight
            snake.push(positions)
            checkForColision()
            break
        case "Down":
            positions = snake.shift()
            positions[0] = snake[snake.length - 1][0]
            positions[1] = snake[snake.length - 1][1] + snakeUnitHeight
            snake.push(positions)
            checkForColision()
            break

    }
}

function drawRectangle(color, positionX, positionY, width, height) {
    canvasContext.fillStyle = color
    canvasContext.fillRect(positionX, positionY, width, height)
}
