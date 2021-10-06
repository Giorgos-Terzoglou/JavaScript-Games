function cars(width, height, color, x, y) {
    this.startPosition = {
        x: x,
        y:y
    }
    this.position = {
        x: x,
        y: y
    };
    this.size = {
        width: width,
        height: height
    };
    this.speed = {
        x: 0,
        y:0
    }
    this.maxSpeed = {
        x: 10,
        y: 10
    };
    this.color = color;
    this.draw = function () {
        ctx.fillStyle = color;
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    };
    this.update = function () {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        if (this.position.x < 0) this.position.x = 0;
        if (this.position.x > canvas.width - this.size.width) this.position.x = canvas.width - this.size.width;
        if (this.position.y < 0) this.position.y = 0;
        if (this.position.y > canvas.height - this.size.height) this.position.y = canvas.height - this.size.height;

    }
    this.crashWith = function (otherObject) {
        var myLeft = this.position.x;
        var myRight = this.position.x + this.size.width;
        var myTop = this.position.y;
        var myBottom = this.position.y + this.size.height;

        var otherLeft = otherObject.position.x;
        var otherRight = otherObject.position.x + otherObject.size.width;
        var otherTop = otherObject.position.y;
        var otherBottom = otherObject.position.y + otherObject.size.height;

        var crash = false;
        if ((myBottom+10 > otherTop) &&
            (myTop-10 < otherBottom) &&
            (myRight+10 > otherLeft) &&
            (myLeft-10 < otherRight)) {
            crash = true;
        }
        return crash;
    }
    
    //move functions on X direction
    this.moveRight = function () {
        this.speed.x = +this.maxSpeed.x;
    }
    this.moveLeft = function () {
        this.speed.x = -this.maxSpeed.x;
    }
    //move on y direction
    this.moveUp = function () {
        this.speed.y = -this.maxSpeed.y;
    }
    this.moveDown = function () {
        this.speed.y = +this.maxSpeed.y;
    }
    //stop functions
    this.stopX = function () {
        this.speed.x = 0;
    }
    this.stopY = function () {
        this.speed.y = 0;
    }

    this.reset = function () {
        this.position.x = this.startPosition.x;
        this.position.y = this.startPosition.y;
    }
}