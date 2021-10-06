//CREATE CONTEXT
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

//GAME CONSTS
const GAME_WIDTH=1400;
const GAME_HEIGHT=800;
const GRAVITY=0.4;

//CANVAS COLOR
ctx.fillStyle = "black";
ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

//GAMESTATES
const GAMESTATE = {
    PAUSED: 0,
    PLAY: 1,
    MENU:2
};
let currentGameState = GAMESTATE.MENU;

//OBJECTS
let leftPlayer = new Player(200, 100, 200);
let rightPlayer = new Player(1200-100, 100, 200); //to meion 100 einai to width
let ball = new Ball();

 
//NET
const NET = {
    size: {
        width: 14,
        height: 300
    },
    position: {
        x: GAME_WIDTH / 2-6,
        y: GAME_HEIGHT
    },
    
    //NET DRAW FUNCTION
    Draw: function () {
        ctx.fillStyle = "white";
        ctx.fillRect(this.position.x, this.position.y - this.size.height, this.size.width, this.size.height);
    }
}

//DRAW TEXTS FUNCTION
function DrawTexts(text, x, y) {
    ctx.fillStyle = "white";
    ctx.font = "75px fantasy";
    ctx.fillText(text, x, y);
}

//UPDATE SCORE FUNCTION
function UpdateScore() {
    
    if (ball.position.y + ball.size.height > GAME_HEIGHT) {
        if (ball.position.x < NET.position.x) {
            rightPlayer.score++;
            ball.ResetAll("right");
            rightPlayer.ResetPosition();
            leftPlayer.ResetPosition();
            if (rightPlayer.score > 20 && rightPlayer.score > leftPlayer.score + 1) {
                currentGameState = GAMESTATE.MENU;
                rightPlayer.score = 0;
                leftPlayer.score = 0;
                
            }
        } else {
            leftPlayer.score++;
            ball.ResetAll("left");
            rightPlayer.ResetPosition();
            leftPlayer.ResetPosition();
            if (leftPlayer.score > 20 && leftPlayer.score > rightPlayer.score + 1) {
                currentGameState = GAMESTATE.MENU;
                rightPlayer.score = 0;
                leftPlayer.score = 0;
                
            }
        }
    }
}

//DRAW FUNCTION
function Draw() {
    if (currentGameState === GAMESTATE.PAUSED) {

        ctx.rect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fill();

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Paused", GAME_WIDTH / 2, GAME_HEIGHT / 2);
    }
    if (currentGameState === GAMESTATE.MENU) {
        ctx.rect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fill();

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(
          "Press SPACEBAR To Start",
          GAME_WIDTH / 2,
          GAME_HEIGHT / 2
        );
    }
    if (currentGameState === GAMESTATE.PLAY) {
        NET.Draw();
        leftPlayer.Draw();
        rightPlayer.Draw();
        ball.Draw();
        DrawTexts(leftPlayer.score, GAME_WIDTH / 4, GAME_HEIGHT / 6);
        DrawTexts(rightPlayer.score, GAME_WIDTH * 3 / 4, GAME_HEIGHT / 6);

    }
}

//UPDATE FUNCTION
function Update() {
    if (currentGameState === GAMESTATE.PLAY) {
        leftPlayer.Update();
        rightPlayer.Update();
        UpdateScore();
        ball.Update();
        //check for collision
        Collision(leftPlayer, ball);
        Collision(rightPlayer, ball);
    }
}


//GAMELOOP FUNCTION
let frames=0;
function GameLoop() {
    ctx.fillStyle = "black";
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    Update();
    Draw();
    frames++;
    
    requestAnimationFrame(GameLoop);
}
GameLoop();

