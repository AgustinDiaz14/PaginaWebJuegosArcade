const COMPUTER_SPEED = 6
const framesPerSecond = 60
const PADLE_THICKNESS = 10
const PADDLE_HEIGHT = 100
const initialSpeedX = 5
const initialSpeedY = 2
const winningScore = 3
var canvas
var canvasContext
var showWinScreen = false
var ballX
var ballSpeddX = initialSpeedX
var ballY
var ballSpeddY = initialSpeedY

var paddleLeft = 250
var paddleRight = 250

var player1Score = 0
var player2Score = 0



window.onload = function () {
	canvas = document.getElementById('game');
	canvasContext = canvas.getContext('2d');
	ballX = canvas.width / 2
	ballY = canvas.height / 2


	setInterval(function () {
		moveEverything()
		computerMovement()
		drawEverything()
	}, 1000 / framesPerSecond)

	canvas.addEventListener(
		'mousedown',
		resetGame
	)
	canvas.addEventListener(
		'mousemove',
		function (evt) {
			var mousePos = calculateMousePosition(evt)
			paddleRight = mousePos.y - (PADDLE_HEIGHT / 2)
		}
	)

}

function resetGame(evt) {
	if (showWinScreen) {
		restartPlayerPoints()
		resetBall()
	}
	showWinScreen = false
}

function restartPlayerPoints() {
	player1Score = 0
	player2Score = 0
}

function resetBall() {
	if (player1Score >= winningScore) {
		showWinScreen = true
		savePong(0)
	}

	if(player2Score >= winningScore){
		showWinScreen = true
		savePong(1)
	}

	ballSpeddY = initialSpeedY

	ballSpeddX = -ballSpeddX
	ballX = canvas.width / 2
	ballY = canvas.height / 2
}

function calculateMousePosition(evt) {
	var rect = canvas.getBoundingClientRect()
	var root = document.documentElement
	var mouseX = evt.clientX - rect.left - root.scrollLeft
	var mouseY = evt.clientY - rect.top - root.scrollTop

	return {
		x: mouseX,
		y: mouseY
	}
}
function computerMovement() {
	var paddleLeftCenter = paddleLeft + (PADDLE_HEIGHT / 2)
	if (paddleLeftCenter < ballY - 35) {
		paddleLeft += COMPUTER_SPEED
	}

	else if (paddleLeftCenter > ballY + 35) {
		paddleLeft -= COMPUTER_SPEED
	}

}
function moveEverything() {
	if (showWinScreen) { return }
	ballX += ballSpeddX
	ballY += ballSpeddY
	if (ballX < 0) {
		if (ballY > paddleLeft && ballY < PADDLE_HEIGHT + paddleLeft) {
			ballSpeddX = -ballSpeddX

			var deltaY = ballY - (paddleLeft + PADDLE_HEIGHT / 2)
			ballSpeddY = deltaY * 0.35
		}
		else {
			player2Score++
			resetBall()
		}

	}
	if (ballX > canvas.width) {
		if (ballY > paddleRight && ballY < PADDLE_HEIGHT + paddleRight) {
			ballSpeddX = -ballSpeddX
			var deltaY = ballY - (paddleRight + PADDLE_HEIGHT / 2)
			ballSpeddY = deltaY * 0.35
		}
		else {
			player1Score++
			resetBall()
		}
	}

	if (ballY < 0) {
		ballSpeddY = -ballSpeddY
	}
	if (ballY > canvas.height) {
		ballSpeddY = -ballSpeddY
	}
}

function drawRectangle(color, positionX, positionY, width, height) {
	canvasContext.fillStyle = color
	canvasContext.fillRect(positionX, positionY, width, height)
}

function drawEverything() {
	if (showWinScreen) {
		drawRectangle("black", 0, 0, canvas.width, canvas.height)
		if(player1Score >= winningScore){
			canvasContext.fillStyle = "white";
			canvasContext.fillText("Perdiste", canvas.width/2, canvas.height/2)	
		}

		else if(player2Score >= winningScore){
			canvasContext.fillStyle = "white";
			canvasContext.fillText("Ganaste", canvas.width/2, canvas.height/2)
		}
		canvasContext.fillStyle = "white";
		canvasContext.fillText("Presione para reiniciar", canvas.width / 2, canvas.height / 2 + 10)
		return
	}

	drawRectangle("black", 0, 0, canvas.width, canvas.height)

	drawRectangle("white", canvas.width/2, 0, 2, canvas.height)

	drawRectangle("white", 0, paddleLeft, PADLE_THICKNESS, 100)

	drawRectangle("white", canvas.width - PADLE_THICKNESS, paddleRight, PADLE_THICKNESS, 100)

	canvasContext.fillStyle = "white";
	canvasContext.beginPath()
	canvasContext.arc(ballX, ballY, 10, 2 * Math.PI, false)
	canvasContext.fill()


	canvasContext.fillText(player1Score, canvas.width / 2 - 100, canvas.height / 2)
	canvasContext.fillText(player2Score, canvas.width / 2 + 100, canvas.height / 2)
}
