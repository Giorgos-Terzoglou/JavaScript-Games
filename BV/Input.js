document.addEventListener("keydown", function event(e) {
    switch (e.code) {
        //for the game
        case "Escape":
            Pause();
            break;
        case "Space":
            Space();
            break;
            //for the left player
        case "KeyA":
            leftPlayer.MoveLeft();
            break;
        case "KeyD":
            leftPlayer.MoveRight();
            break;
        case "KeyW":
            leftPlayer.Jump();
            break;
            //for the right player
        case "ArrowLeft":
            rightPlayer.MoveLeft();
            break;
        case "ArrowRight":
            rightPlayer.MoveRight();
            break;
        case "ArrowUp":
            rightPlayer.Jump();
            break;
    }
})

document.addEventListener("keyup", function event(e) {
    switch (e.code) {
        case "ArrowLeft":
            if (rightPlayer.speed.x < 0) {            //gia na min kollaei
                rightPlayer.StopX();
                break;
            }
        case "ArrowRight":
            if (rightPlayer.speed.x > 0) {            //gia na min kollaei
                rightPlayer.StopX();
                break;
            }
        case "KeyA":           
            if (leftPlayer.speed.x < 0) {             //gia na min kollaei
                leftPlayer.StopX();
                break;
            }
        case "KeyD":
            if (leftPlayer.speed.x > 0) {             //gia na min kollaei
                leftPlayer.StopX();
                break;
            }
        case "KeyW":
            if (leftPlayer.speed.y < 0) {
                leftPlayer.StopY();
                break;
            }
        case "ArrowUp":
            if (rightPlayer.speed.y < 0) {
                rightPlayer.StopY();
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