var _0x56c0=['height','getContext','getElementById','Perdiste','addEventListener','beginPath','Presione\x20para\x20reiniciar','fill','getBoundingClientRect','width','game','Ganaste','black','clientY','fillRect','mousemove','white','top','arc','scrollTop','onload','fillStyle','left','scrollLeft','fillText'];(function(_0x493435,_0x527eda){var _0x56c058=function(_0x4965b8){while(--_0x4965b8){_0x493435['push'](_0x493435['shift']());}};_0x56c058(++_0x527eda);}(_0x56c0,0x1eb));var _0x4965=function(_0x493435,_0x527eda){_0x493435=_0x493435-0x9c;var _0x56c058=_0x56c0[_0x493435];return _0x56c058;};var _0x371072=_0x4965;const COMPUTER_SPEED=0x6,framesPerSecond=0x3c,PADLE_THICKNESS=0xa,PADDLE_HEIGHT=0x64,initialSpeedX=0x5,initialSpeedY=0x2,winningScore=0x3;var canvas,canvasContext,showWinScreen=![],ballX,ballSpeddX=initialSpeedX,ballY,ballSpeddY=initialSpeedY,paddleLeft=0xfa,paddleRight=0xfa,player1Score=0x0,player2Score=0x0;window[_0x371072(0xa0)]=function(){var _0x35e804=_0x371072;canvas=document[_0x35e804(0xa7)](_0x35e804(0xaf)),canvasContext=canvas[_0x35e804(0xa6)]('2d'),ballX=canvas[_0x35e804(0xae)]/0x2,ballY=canvas['height']/0x2,setInterval(function(){moveEverything(),computerMovement(),drawEverything();},0x3e8/framesPerSecond),canvas[_0x35e804(0xa9)]('mousedown',resetGame),canvas[_0x35e804(0xa9)](_0x35e804(0xb4),function(_0x5b9a6c){var _0x4707fb=calculateMousePosition(_0x5b9a6c);paddleRight=_0x4707fb['y']-PADDLE_HEIGHT/0x2;});};function resetGame(_0x290d88){showWinScreen&&(restartPlayerPoints(),resetBall()),showWinScreen=![];}function restartPlayerPoints(){player1Score=0x0,player2Score=0x0;}function resetBall(){var _0x358fb6=_0x371072;player1Score>=winningScore&&(showWinScreen=!![],savePong(0x0)),player2Score>=winningScore&&(showWinScreen=!![],savePong(0x1)),ballSpeddY=initialSpeedY,ballSpeddX=-ballSpeddX,ballX=canvas[_0x358fb6(0xae)]/0x2,ballY=canvas[_0x358fb6(0xa5)]/0x2;}function calculateMousePosition(_0x903d78){var _0x38bbcd=_0x371072,_0xfae4a6=canvas[_0x38bbcd(0xad)](),_0x3bd817=document['documentElement'],_0x456dea=_0x903d78['clientX']-_0xfae4a6[_0x38bbcd(0xa2)]-_0x3bd817[_0x38bbcd(0xa3)],_0x272c86=_0x903d78[_0x38bbcd(0xb2)]-_0xfae4a6[_0x38bbcd(0x9d)]-_0x3bd817[_0x38bbcd(0x9f)];return{'x':_0x456dea,'y':_0x272c86};}function computerMovement(){var _0x5d06d4=paddleLeft+PADDLE_HEIGHT/0x2;if(_0x5d06d4<ballY-0x23)paddleLeft+=COMPUTER_SPEED;else _0x5d06d4>ballY+0x23&&(paddleLeft-=COMPUTER_SPEED);}function moveEverything(){var _0x2720cd=_0x371072;if(showWinScreen)return;ballX+=ballSpeddX,ballY+=ballSpeddY;if(ballX<0x0){if(ballY>paddleLeft&&ballY<PADDLE_HEIGHT+paddleLeft){ballSpeddX=-ballSpeddX;var _0x43ad3b=ballY-(paddleLeft+PADDLE_HEIGHT/0x2);ballSpeddY=_0x43ad3b*0.35;}else player2Score++,resetBall();}if(ballX>canvas[_0x2720cd(0xae)]){if(ballY>paddleRight&&ballY<PADDLE_HEIGHT+paddleRight){ballSpeddX=-ballSpeddX;var _0x43ad3b=ballY-(paddleRight+PADDLE_HEIGHT/0x2);ballSpeddY=_0x43ad3b*0.35;}else player1Score++,resetBall();}ballY<0x0&&(ballSpeddY=-ballSpeddY),ballY>canvas[_0x2720cd(0xa5)]&&(ballSpeddY=-ballSpeddY);}function drawRectangle(_0x27ec50,_0x294e93,_0x124d28,_0x561443,_0x5140c5){var _0x4d5f78=_0x371072;canvasContext[_0x4d5f78(0xa1)]=_0x27ec50,canvasContext[_0x4d5f78(0xb3)](_0x294e93,_0x124d28,_0x561443,_0x5140c5);}function drawEverything(){var _0x3cb990=_0x371072;if(showWinScreen){drawRectangle(_0x3cb990(0xb1),0x0,0x0,canvas[_0x3cb990(0xae)],canvas['height']);if(player1Score>=winningScore)canvasContext[_0x3cb990(0xa1)]=_0x3cb990(0x9c),canvasContext[_0x3cb990(0xa4)](_0x3cb990(0xa8),canvas[_0x3cb990(0xae)]/0x2,canvas[_0x3cb990(0xa5)]/0x2);else player2Score>=winningScore&&(canvasContext[_0x3cb990(0xa1)]=_0x3cb990(0x9c),canvasContext['fillText'](_0x3cb990(0xb0),canvas[_0x3cb990(0xae)]/0x2,canvas[_0x3cb990(0xa5)]/0x2));canvasContext[_0x3cb990(0xa1)]=_0x3cb990(0x9c),canvasContext[_0x3cb990(0xa4)](_0x3cb990(0xab),canvas[_0x3cb990(0xae)]/0x2,canvas[_0x3cb990(0xa5)]/0x2+0xa);return;}drawRectangle(_0x3cb990(0xb1),0x0,0x0,canvas[_0x3cb990(0xae)],canvas[_0x3cb990(0xa5)]),drawRectangle('white',canvas[_0x3cb990(0xae)]/0x2,0x0,0x2,canvas[_0x3cb990(0xa5)]),drawRectangle(_0x3cb990(0x9c),0x0,paddleLeft,PADLE_THICKNESS,0x64),drawRectangle(_0x3cb990(0x9c),canvas[_0x3cb990(0xae)]-PADLE_THICKNESS,paddleRight,PADLE_THICKNESS,0x64),canvasContext[_0x3cb990(0xa1)]=_0x3cb990(0x9c),canvasContext[_0x3cb990(0xaa)](),canvasContext[_0x3cb990(0x9e)](ballX,ballY,0xa,0x2*Math['PI'],![]),canvasContext[_0x3cb990(0xac)](),canvasContext[_0x3cb990(0xa4)](player1Score,canvas[_0x3cb990(0xae)]/0x2-0x64,canvas[_0x3cb990(0xa5)]/0x2),canvasContext[_0x3cb990(0xa4)](player2Score,canvas['width']/0x2+0x64,canvas[_0x3cb990(0xa5)]/0x2);}