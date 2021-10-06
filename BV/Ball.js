function Ball() {
    //LOAD IMAGE
    this.imgBall = document.getElementById("volleyball");
    this.startingPosition = {
        leftX: 400,
        y: 100,
        rightX: 1000
        
    };
    this.position = {
        x: 400,
        y: 100
    };
    this.size = {
        width: 40,
        height: 40
    };
    this.speed = {
        x: -5,
        y: 0
    };
    
    //bounce affect
    this.bounce = 0.6;
    

    //Update function
    this.Update = function () {
        //update the positions
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        this.speed.y += GRAVITY;
        //when scores
       /* if (this.position.y > GAME_HEIGHT - this.size.width) {
            this.position.y = GAME_HEIGHT - this.size.width;
            this.speed.y = -this.speed.y *this.bounce;
                     
        }*/ 
        //check if the ball hits the walls
        if (this.position.x < 0 || this.position.x + this.size.width > GAME_WIDTH) {
            //change speeds
            this.speed.x = -this.speed.x;
        }
        //when hits the net 
        if ((this.position.x + this.size.width / 2 >= NET.position.x 
            && this.position.x +this.size.width / 2 <= NET.position.x+NET.size.width
            && this.position.y + this.size.height > NET.position.y - NET.size.height)) {
            this.speed.x = -this.speed.x;

        }
            

        
            

    }

              
        

    
    //draw function
    this.Draw = function () {        
        ctx.drawImage(this.imgBall, this.position.x, this.position.y, this.size.width, this.size.height);
    }
    //
    this.ResetAll = function (winner) {
        if (winner == "left") {
            this.position.x = this.startingPosition.leftX;
            this.position.y = this.startingPosition.y;
            this.speed.x = -5;
            this.speed.y = 0;
        } else {
            this.position.x = this.startingPosition.rightX;
            this.position.y = this.startingPosition.y;
            this.speed.x = +5;
            this.speed.y = 0;
        }
    }
    

}

//COLLISION FUNCTION
function Collision(player, ball) {
    //points of every obj
    player.points = {
        top: player.position.y,
        bot: player.position.y + player.size.height,
        left: player.position.x,
        right: player.position.x + player.size.width
    };
    ball.points = {
        top: ball.position.y,
        bot: ball.position.y + ball.size.height,
        left: ball.position.x,
        right: ball.position.x + ball.size.width,
        centerX: ball.position.x + ball.size.width / 2,
        centerY: ball.position.y + ball.size.height / 2

    };
    //check if colision
    if (player.points.left < ball.points.right && player.points.right > ball.points.left && player.points.top < ball.points.bot && player.points.bot > ball.points.top) {
        //finds the collision points
        const collisionPointX = ball.points.centerX - (player.position.x + player.size.width / 2);
        const collisionPointY = ball.points.centerY - player.position.y - 10;
        //normalize them
        const normalizeX = (collisionPointX ) / (player.size.width/2);
        const normalizeY = (collisionPointY ) / (player.size.height);

        
        //change speeds
        
        ball.speed.x = normalizeX * 5 + player.speed.x;
        //vlepei pote xtupaei apo plagia kai pote apo panw!!!!
        //gia na karfwnei kai na min kanei lobes :D
        if (ball.points.centerX > player.points.right || ball.points.centerX < player.points.left) {
            ball.speed.y = normalizeY * 6;
            ball.points.x *= 1.5;
        } else {
            ball.position.y -= (ball.size.height +5) ;
            ball.speed.y = normalizeY * 6 + player.speed.y / 2 - ball.speed.y*ball.bounce;
           
        }
        ball.gravitySpeed = 0;

        
    }
    


}
