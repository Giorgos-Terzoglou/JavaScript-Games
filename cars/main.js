//get canvas element and context
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

//GAMESTATES
const GAMESTATE = {
    PAUSED: 0,
    PLAY: 1,
    MENU: 2,
    WIN:3
};

let currentGameState = GAMESTATE.MENU;

var gameSpeed = 5;
var winner = "none";

//OBJECTS
var line = [];
var rightPlayer = new cars(100, 80, "orange", 100, 100);
var leftPlayer = new cars(100, 80, "pink", 100, 300);
var enemys = [];

//frames
let frames = 0;

//Lines Class
function lines() {
    
    this.position = {
        x: canvas.width,
        y: 150
    }
    this.size = {
        width: 200,
        height: 10
    }
    this.speedX = -gameSpeed;
    this.update = function () {
        this.position.x += this.speedX;
        //this.speedX = -gameSpeed;
    }
    this.draw = function () {
        
        ctx.fillStyle = "white";
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
        ctx.fillRect(this.position.x, this.position.y + 150, this.size.width, this.size.height);
        ctx.fillRect(this.position.x, this.position.y + 300, this.size.width, this.size.height);
        ctx.fillRect(this.position.x, this.position.y + 450, this.size.width, this.size.height);
        ctx.fillRect(this.position.x, this.position.y + 600, this.size.width, this.size.height);
    }
}


//interval function to calculate time
function everyinterval(n) {
    if ((frames / n) % 1 == 0) { return true; }
    return false;
}

//UPDATE FUNCTION
function Update(frames) {
    if (currentGameState === GAMESTATE.PLAY) {
        //every 80 frame creates new obj lines
        if (everyinterval(80)) {
            line.push(new lines());
        }
        for (let i = 0; i < line.length; i++) {
            line[i].update();
        }
        //when players hit each other
        if (rightPlayer.crashWith(leftPlayer)) {

            rightPlayer.position.x = rightPlayer.position.x + leftPlayer.speed.x * 2;
            rightPlayer.position.y = rightPlayer.position.y + leftPlayer.speed.y * 2;
            leftPlayer.position.x = leftPlayer.position.x + rightPlayer.speed.x * 2;
            leftPlayer.position.y = leftPlayer.position.y + rightPlayer.speed.y * 2;

            rightPlayer.stopX();
            rightPlayer.stopY();
            leftPlayer.stopX();
            leftPlayer.stopY();
        }
        rightPlayer.update();
        leftPlayer.update();


        if (everyinterval(300)) {
            //every 1500 frame(1 canvas size) div 5 (the game speed), 5 new enemys at random 
            enemys.push(new cars(200, 100, "red", canvas.width + Math.floor(Math.random() * 1500), 30 + Math.floor(Math.random() * 6) * 150));
            enemys.push(new cars(200, 100, "red", canvas.width + Math.floor(Math.random() * 1500), 30 + Math.floor(Math.random() * 6) * 150));
            enemys.push(new cars(200, 100, "red", canvas.width + Math.floor(Math.random() * 1500), 30 + Math.floor(Math.random() * 6) * 150));
            enemys.push(new cars(200, 100, "red", canvas.width + Math.floor(Math.random() * 1500), 30 + Math.floor(Math.random() * 6) * 150));
            enemys.push(new cars(200, 100, "red", canvas.width + Math.floor(Math.random() * 1500), 30 + Math.floor(Math.random() * 6) * 150));

        }

        //moving enemys left
        for (let i = 0; i < enemys.length; i++) {
            enemys[i].position.x -= gameSpeed;
            //when players hit enemys
            if (leftPlayer.crashWith(enemys[i])) {
                winner = "right";
                leftPlayer.reset();
                rightPlayer.reset();
                enemys.length = 0;
                line.length = 0;
                currentGameState = GAMESTATE.WIN;
                
            }else 
            if (rightPlayer.crashWith(enemys[i])) {
                winner = "left";
                leftPlayer.reset();
                rightPlayer.reset();
                enemys.length = 0;
                line.length = 0;
                currentGameState = GAMESTATE.WIN;
                
            }
        }
    }
}
  
    
    


//DRAW FUNCTION
function Draw() {
    if (currentGameState === GAMESTATE.PAUSED) {

        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fill();

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Paused", canvas.width / 2, canvas.height / 2);
    }
    if (currentGameState === GAMESTATE.MENU) {
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fill();

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(
          "Press SPACEBAR To Start",
          canvas.width / 2,
          canvas.height / 2
        );
    }
    if (currentGameState === GAMESTATE.WIN) {
        ctx.rect(0, 0, canvas.width, canvas.height);
        if(winner==="left"){
            ctx.fillStyle = leftPlayer.color;
        }else {
            ctx.fillStyle = rightPlayer.color;
        } 
        
        
        ctx.fill();

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        if(winner==="left"){
            ctx.fillText(
              leftPlayer.color + " Player is the winner",
              canvas.width / 2,
              canvas.height / 2
            );
        } else {
            ctx.fillText(
              rightPlayer.color + " Player is the winner",
              canvas.width / 2,
              canvas.height / 2
            );
        }
        //after 3 sec takes us to menu
        setTimeout(function () {
            currentGameState = GAMESTATE.MENU;
        },3000)
    }
    if (currentGameState === GAMESTATE.PLAY) {
        for (let i = 0; i < line.length; i++) {
            line[i].draw();
        }
        rightPlayer.draw();
        leftPlayer.draw();
        for (let i = 0; i < enemys.length; i++) {
            enemys[i].draw();
        }
        
    }
}

//GAMELOOP FUNCTION

function GameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    Update(frames);
    Draw();
    frames++;

    requestAnimationFrame(GameLoop);
}
GameLoop();