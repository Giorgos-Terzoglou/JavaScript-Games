function Player(x,width,height) {    
    this.startingPosition = {
        x: x,
        
    };
    this.size = {
        width: width,
        height: height
    };
    this.position = {
        x: x,
        y: GAME_HEIGHT-this.size.height
    };
    this.speed = {
        x: 0,
        y: 0
    };
    this.maxSpeed = {
        x: 10,
        y: 15
    };
    //score
    this.score = 0;
    //if player is left or not
    if (this.position.x < GAME_WIDTH / 2) {
        this.leftPlayer = true;
    } else {
        this.leftPlayer = false;
    }
    this.gravitySpeed = 0;

    //update function
    this.Update = function () {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y + this.gravitySpeed;
        //checks when player hits  the canvas or the net
        if (this.leftPlayer) {
            if (this.position.x < 0) this.position.x = 0;
            if (this.position.x+this.size.width > GAME_WIDTH / 2 - 2) this.position.x = GAME_WIDTH / 2 - 2 - this.size.width;
        } else {
            if (this.position.x < GAME_WIDTH / 2 + 2) this.position.x = GAME_WIDTH / 2 + 2;
            if (this.position.x + this.size.width > GAME_WIDTH) this.position.x = GAME_WIDTH - this.size.width;
        }
        //effect of gravity
        this.gravitySpeed += GRAVITY;
        if (this.position.y > GAME_HEIGHT - this.size.height) {
            this.position.y = GAME_HEIGHT - this.size.height;
            this.gravitySpeed = 0;
        }

        
    }
    //draw function
    this.Draw = function () {
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }
    //move functions on X direction
    this.MoveRight = function () {
        this.speed.x = +this.maxSpeed.x;
    }
    this.MoveLeft = function () {
        this.speed.x = -this.maxSpeed.x;
    }
    this.StopX = function () {
        this.speed.x = 0;        
    }
    this.StopY = function () {
        this.speed.y = 0;
    }
    //jump function on y direction
    this.Jump = function () {
        this.speed.y = -this.maxSpeed.y;
    }
    this.ResetAll = function () {
        this.position.x = x;
        this.position.y = y;
        this.score = 0;
    }
    this.ResetPosition = function () {
        this.position.x = this.startingPosition.x;
        this.position.y = GAME_HEIGHT - this.size.height;
    }
}
