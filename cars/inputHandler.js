document.addEventListener("keydown", function event(e) {
    switch (e.code) {
        //for the game
        case "Escape":
            Pause();
            break;
        case "Space":
            Space();
            break;           
            //for the right player
        case "ArrowLeft":
            rightPlayer.moveLeft();
            break;
        case "ArrowRight":
            rightPlayer.moveRight();
            break;
        case "ArrowUp":
            rightPlayer.moveUp();
            break;
        case "ArrowDown":
            rightPlayer.moveDown();
            break;
            //for the left player
        case "KeyA":
            leftPlayer.moveLeft();
            break;
        case "KeyD":
            leftPlayer.moveRight();
            break;
        case "KeyW":
            leftPlayer.moveUp();
            break;
        case "KeyS":
            leftPlayer.moveDown();
            break;
    }
})

document.addEventListener("keyup", function event(e) {
    switch (e.code) {
        case "ArrowLeft":
            if (rightPlayer.speed.x < 0) {            //gia na min kollaei
                rightPlayer.stopX();
                break;
            }
        case "ArrowRight":
            if (rightPlayer.speed.x > 0) {            //gia na min kollaei
                rightPlayer.stopX();
                break;
            }      
        case "ArrowUp":
            if (rightPlayer.speed.y < 0) {
                rightPlayer.stopY();
                break;
            }
        case "ArrowDown":
            if (rightPlayer.speed.y > 0) {
                rightPlayer.stopY();
                break;
            }
        case "KeyA":
            if (leftPlayer.speed.x < 0) {            //gia na min kollaei
                leftPlayer.stopX();
                break;
            }
        case "KeyD":
            if (leftPlayer.speed.x > 0) {            //gia na min kollaei
                leftPlayer.stopX();
                break;
            }
        case "KeyW":
            if (leftPlayer.speed.y < 0) {
                leftPlayer.stopY();
                break;
            }
        case "KeyS":
            if (leftPlayer.speed.y > 0) {
                leftPlayer.stopY();
                break;
            }
    }
})

//PAUSE
function Pause() {
    if (currentGameState === GAMESTATE.PLAY) {
        currentGameState = GAMESTATE.PAUSED;
    } else if (currentGameState === GAMESTATE.PAUSED) {
        currentGameState = GAMESTATE.PLAY;
    }
}

//SPACE
function Space() {
    if (currentGameState === GAMESTATE.MENU) {
        currentGameState = GAMESTATE.PLAY;
    }
}