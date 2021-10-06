//CREATE CONTEXT TO CANVAS 

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
//GAME CONST
const GAME_WIDTH = 1024, GAME_HEIGHT = 600;

//BACKGROUND COLOR
ctx.fillStyle = "black";
ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

//GAMESTATES
const GAMESTATE = {
    PAUSED: 0,
    PLAY: 1,
    MENU: 2
};

let gamestate=GAMESTATE.MENU;

//TIMES 
var fireTimeLeft = new Date();
var fireTimeRight = new Date();

//LEFT PADDLE
const leftPaddle = {
    //PADDLE VARS
    height: 150,
    width: 20,
    //PADDLE SPEED
    maxSpeed: 7,
    speed: 0,
    //PADDLE POSITION
    x: 10,
    y: GAME_HEIGHT / 2,
    //PADDLE SCORE
    score: 0,
    //left paddle bullets
    bulls:[],
    //PADDLE UPDATE
    update: function () {
        this.y += this.speed;
        if (this.y >= GAME_HEIGHT - this.height) this.y = GAME_HEIGHT - this.height;
        if (this.y <= 0) this.y = 0;
    },
    //PADDLE DRAW
    draw: function () {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
    moveUp: function () {
        this.speed = -this.maxSpeed;
    },
    moveDown: function () {
        this.speed = this.maxSpeed;
    },
    //STOPS THE PADDLE WHEN KEYUP IN ORDER TO STOP MOVING
    stop: function () {
    this.speed = 0;
    },
    //RESETS WHEN GAME ENDS
    reset: function () {
        this.x = 10;
        this.y = GAME_HEIGHT / 2;
        this.score = 0;
    },
    fire: function () {
        //create new bullet
        this.bulls.push(new Bullet(this.x, this.y + this.height / 2, leftPaddle));
        
    },
    //RESETS WHEN SCORE
    reseto: function () {
        this.x = 10;
        this.y = GAME_HEIGHT / 2;
    }
}


//RIGHT PADDLE
const rightPaddle = {
    //PADDLE VARS
    height: 150,
    width: 20,
    //PADDLE SPEED
    maxSpeed: 7,
    speed: 0,
    //PADDLE POSITION
    x: GAME_WIDTH-30,
    y: GAME_HEIGHT / 2,
    //PADDLE SCORE
    score: 0,
    //bullets
    bulls:[],
    //PADDLE UPDATE
    update: function () {
        this.y += this.speed;
        if (this.y >= GAME_HEIGHT - this.height) this.y = GAME_HEIGHT - this.height;
        if (this.y <= 0) this.y = 0;
    },
    //PADDLE DRAW
    draw: function () {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
    moveUp: function () {
        this.speed = -this.maxSpeed;
    },
    moveDown: function () {
        this.speed = this.maxSpeed;
    },
    stop: function () {
        this.speed = 0;
    },
    reset: function () {
        this.x = GAME_WIDTH - 30;
        this.y = GAME_HEIGHT / 2;
        this.score = 0;
    },
    fire: function () {
        this.bulls.push(new Bullet(this.x, this.y + this.height / 2, rightPaddle));

    },
    reseto: function () {
        this.x = GAME_WIDTH - 30;
        this.y = GAME_HEIGHT / 2;
    }

}
//DRAW TEXTS
function drawText(text, x, y) {
    ctx.fillStyle = "white";
    ctx.font = "75px fantasy";
    ctx.fillText(text, x, y);
}

//BALL
const ball = {
    //TAKE ELEMENT
    imgBall: document.getElementById("img_ball"),
    //BALL POSITION
    x: GAME_WIDTH / 2,
    y: GAME_HEIGHT / 2,
    //BALL SPEED
    speed: {
        x: 10,
        y:10
    },
    //BALL SIZE
    size: 20,
    //BALL UPDATE
    update: function () {
        //UPDATES THE BALL
        this.x += this.speed.x;
        this.y += this.speed.y;

        //CHECKS IF THE BALL HITS THE WALLS
        if (this.y > GAME_HEIGHT - this.size) this.speed.y = -this.speed.y;
        if (this.y < 0) this.speed.y = -this.speed.y;
                        
    },
    //BALL DRAW
    draw: function () {
        ctx.drawImage(this.imgBall, this.x, this.y, this.size, this.size);
    },
    reset: function () {
        this.x = GAME_WIDTH / 2;
        this.y = GAME_HEIGHT / 2;
        this.speed.x = 10;
        this.speed.y = 10;
    }
}

//SETS TIMES FOR NOT SHOOTING ALL THE TIME
var fireTimeLeft = new Date();
var fireTimeRight = new Date();

//BULLET
function Bullet(x, y, user) {
    //constructor
    this.x = x;
    this.y = y;
    this.user = user;
    if (this.user === leftPaddle) {
        this.img = document.getElementById("leftBullet");
        this.speed = 8;
    } else {
        this.img = document.getElementById("rightBullet");
        this.speed = -8;
    }    
    this.width = 40;
    this.height = 25;
    
    //draw bullet
    Bullet.prototype.draw = function () {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    //update
    Bullet.prototype.update = function () {
        this.x += this.speed;
    }
    

}

//CONTROL THE GAME
document.addEventListener("keydown", function event(e) {

    switch (e.code) {
        case "Escape":
            pause();
            break;
        case "Space":
            space();
            break;
        case "ArrowUp":
            rightPaddle.moveUp();
            break;
        case "ArrowDown":
            rightPaddle.moveDown();
            break;
        case "KeyW":
            leftPaddle.moveUp();
            break;
        case "KeyS":
            leftPaddle.moveDown();
            break;
        case "KeyB":
            let currentTimeLeft = new Date();
            if (currentTimeLeft - fireTimeLeft > 1000) {        //can fire if 1 sec passed
                fireTimeLeft = currentTimeLeft;
                leftPaddle.fire();
            }
            break;

        case "KeyP":
            let currentTimeRight = new Date();
            if (currentTimeRight - fireTimeRight > 1000) {      //cant fire all the time
                fireTimeRight = currentTimeRight;
                rightPaddle.fire();
            }
            break;

    }  })

document.addEventListener("keyup", function event(e) {
    switch (e.code) {
        case "ArrowUp":
            if (rightPaddle.speed < 0) {            //gia na min kollaei
                rightPaddle.stop();
                break;
            }
        case "ArrowDown":
            if (rightPaddle.speed > 0) {            //gia na min kollaei
                rightPaddle.stop();
                break;
            }
        case "KeyW":
            if (leftPaddle.speed < 0) {             //gia na min kollaei
                leftPaddle.stop();
                break;
            }
        case "KeyS":
            if (leftPaddle.speed > 0) {             //gia na min kollaei
                leftPaddle.stop();
                break;
            }
    }
})



//PAUSE
function pause() {
    if (gamestate === GAMESTATE.PLAY) {
        gamestate = GAMESTATE.PAUSED;
    } else if (gamestate === GAMESTATE.PAUSED) {
        gamestate = GAMESTATE.PLAY;
    }
}

//SPACE
function space() {
    if (gamestate === GAMESTATE.MENU) {
        gamestate = GAMESTATE.PLAY;
    }
}


//UPDATE
function update() {
    if (gamestate === GAMESTATE.MENU || gamestate === GAMESTATE.PAUSED) return;
    if (gamestate === GAMESTATE.PLAY) {
        leftPaddle.update();
        rightPaddle.update();
        ball.update();
        updateScore();
        collision();
        hit();
        //update bullets for left paddle
        for (var i = 0; i < leftPaddle.bulls.length; i++) {
            leftPaddle.bulls[i].update();
        }
        //update bullets for right paddle
        for (var i = 0; i < rightPaddle.bulls.length; i++) {
            rightPaddle.bulls[i].update();
        }
    }
}

//DRAW
function draw() {
        //PAUSED SCREEN
        if (gamestate === GAMESTATE.PAUSED ) {
        
            ctx.rect(0, 0, GAME_WIDTH, GAME_HEIGHT);
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Paused", GAME_WIDTH / 2, GAME_HEIGHT / 2);
        }
        //MENU SCREEN
        if (gamestate === GAMESTATE.MENU) {
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
        //PLAY SCREEN
        if (gamestate === GAMESTATE.PLAY) {
            
            leftPaddle.draw();
            rightPaddle.draw();
            ball.draw();
            drawText(leftPaddle.score, GAME_WIDTH / 4, GAME_HEIGHT / 6);
            drawText(rightPaddle.score, GAME_WIDTH * 3 / 4, GAME_HEIGHT / 6);
            //draw bullets
            for (var i = 0; i < leftPaddle.bulls.length; i++) {
                leftPaddle.bulls[i].draw();
            }
            //draw bullets for right
            for (var i = 0; i < rightPaddle.bulls.length; i++) {
                rightPaddle.bulls[i].draw();
            }
           
        }
    }

//UPDATE SCORE
function updateScore() {
    if (ball.x > GAME_WIDTH) {
        leftPaddle.score++;
        //  resets everything
        ball.reset();
        rightPaddle.reseto();
        leftPaddle.reseto();
        return;
    }
    if (ball.x < 0) {
        rightPaddle.score++;
        //  resets everything
        ball.reset();
        rightPaddle.reseto();
        leftPaddle.reseto();
        return;
    }
}
//CHECK IF WIN
function CIF() {
    if (leftPaddle.score > 7 || rightPaddle.score > 7) {
        gamestate = GAMESTATE.MENU;
        ball.reset();
        leftPaddle.reset();
        rightPaddle.reset();
    }
}

//hit detection
function hit() {
    //right paddle
    rightPaddle.top = rightPaddle.y;
    rightPaddle.bottom = rightPaddle.y + rightPaddle.height;
    rightPaddle.left = rightPaddle.x;
    rightPaddle.right = rightPaddle.x + rightPaddle.width;
    //left paddle
    leftPaddle.top = leftPaddle.y;
    leftPaddle.bottom = leftPaddle.y + leftPaddle.height;
    leftPaddle.left = leftPaddle.x;
    leftPaddle.right = leftPaddle.x + leftPaddle.width
    //check if left bullet hit the right paddle
    for (let i = 0; i < leftPaddle.bulls.length; i++) {
        let top = leftPaddle.bulls[i].y;
        let bottom = leftPaddle.bulls[i].y+leftPaddle.bulls[i].height;
        let left = leftPaddle.bulls[i].x;
        let right = leftPaddle.bulls[i].x + leftPaddle.bulls[i].width;

        if (rightPaddle.left < right && rightPaddle.top < bottom && rightPaddle.right > left && rightPaddle.bottom > top) {
            rightPaddle.x=-50;
        }
    }
    //check if right bullet hit the left paddle
    for (let i = 0; i < rightPaddle.bulls.length; i++) {
        let top = rightPaddle.bulls[i].y;
        let bottom = rightPaddle.bulls[i].y + rightPaddle.bulls[i].height;
        let left = rightPaddle.bulls[i].x;
        let right = rightPaddle.bulls[i].x + rightPaddle.bulls[i].width;

        if (leftPaddle.left < right && leftPaddle.top < bottom && leftPaddle.right > left && leftPaddle.bottom > top) {
            leftPaddle.x = 5000;
        }
    }
}

//COLLISSION DETECTION
function collision() {
    //CHECKS WHERE IS THE BALL AND MAKE PLAYER LEFT OR RIGHT
    let player = (ball.x + ball.size < GAME_WIDTH / 2) ? leftPaddle : rightPaddle;

    ball.top = ball.y;
    ball.bottom = ball.y + ball.size;
    ball.left = ball.x;
    ball.right = ball.x + ball.size;

    player.top = player.y;
    player.bottom = player.y + player.height;
    player.left = player.x;
    player.right = player.x + player.width;

    
    let bool = false;
    if (player.left < ball.right && player.top < ball.bottom && player.right > ball.left && player.bottom > ball.top) {
        //check where the ball hits the paddle
        let collidePoint = ball.y - (player.y + player.height / 2);
        //normalize the point to 0-4
        let normalized = (collidePoint * 10) / (player.height / 2);
        //reverse the balls speed
        ball.speed.x = -ball.speed.x;
        ball.speed.y = normalized;
    }

}

let frames = 0;
//GAMELOOP
function game() {

    CIF();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 300, 150);
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    update();
    draw();
    
    frames++

    requestAnimationFrame(game);
}

game();



