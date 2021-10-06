//--------------------------------------------componets class------------
function componets(x, y, width, height, color) {
    this.startPosition = {
        x: x,
        y: y
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
        y: 0
    }
    this.maxSpeed = {
        x: 10,
        y: 10
    };
    this.color = color;
    this.moving = false;
    this.draw = function () {
        ctx.fillStyle = color;
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    };
    this.update = function () {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        if (this.position.x < 0) { this.position.x = 0; this.speed.x = 0; }
        if (this.position.x > canvas.width - this.size.width) { this.position.x = canvas.width - this.size.width; this.speed.x = 0; }
        if (this.position.y < 0) { this.position.y = 0; this.speed.y = 0; }
        if (this.position.y > canvas.height - this.size.height) { this.position.y = canvas.height - this.size.height; this.speed.y = 0; }
        if (this.speed.x != 0 || this.speed.y != 0) { this.moving = true } else { this.moving = false }
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
        if ((myBottom  > otherTop) &&
            (myTop  < otherBottom) &&
            (myRight  > otherLeft) &&
            (myLeft  < otherRight)) {
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
    this.stop = function () {
        this.speed.x = 0;
        this.speed.y = 0;
    }
    this.reset = function () {
        this.position.x = this.startPosition.x;
        this.position.y = this.startPosition.y;
    }
}