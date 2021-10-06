//------------------------------------FOR Drawing the board------------------------------
var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext("2d");
//------------------------------------FOR drawing the starting points------------------------------
var tileWidth = canvas.width / 16;
var tileHeight = canvas.height / 16;

var count = 0;

//ftiaxnw to map
var walls = [];
walls.push(new componets(7 * tileWidth - 3, 7 * tileHeight - 3, tileWidth * 2 + 6, tileHeight * 2 + 6, "black"));


//gia ta gurw gurw
walls.push(new componets(0 * tileWidth, 0 * tileHeight - 3, tileWidth * 16, 6, "black"));
walls.push(new componets(0 * tileWidth, 16 * tileHeight - 3, tileWidth * 16, 6, "black"));
walls.push(new componets(0 * tileWidth - 3, 0 * tileHeight, 6, tileHeight * 16, "black"));
walls.push(new componets(16 * tileWidth - 3, 0 * tileHeight, 6, tileHeight * 16, "black"));
//gia ta katheta
walls.push(new componets(6 * tileWidth - 3, 0 * tileHeight, 6, tileHeight, "black"));
walls.push(new componets(10 * tileWidth - 3, 0 * tileHeight, 6, tileHeight, "black"));
walls.push(new componets(3 * tileWidth - 3, 2 * tileHeight, 6, tileHeight, "black"));
walls.push(new componets(12 * tileWidth - 3, 1 * tileHeight, 6, tileHeight, "black"));
walls.push(new componets(5 * tileWidth - 3, 3 * tileHeight, 6, tileHeight, "black"));
walls.push(new componets(9 * tileWidth - 3, 3 * tileHeight, 6, tileHeight, "black"));
walls.push(new componets(3 * tileWidth - 3, 4 * tileHeight, 6, tileHeight, "black"));
walls.push(new componets(15 * tileWidth - 3, 4 * tileHeight, 6, tileHeight, "black"));
walls.push(new componets(5 * tileWidth - 3, 5 * tileHeight, 6, tileHeight, "black"));
walls.push(new componets(11 * tileWidth - 3, 5 * tileHeight, 6, tileHeight, "black"));
walls.push(new componets(4 * tileWidth - 3, 9 * tileHeight, 6, tileHeight, "black"));
walls.push(new componets(8 * tileWidth - 3, 10 * tileHeight, 6, tileHeight, "black"));
walls.push(new componets(13 * tileWidth - 3, 10 * tileHeight, 6, tileHeight, "black"));
walls.push(new componets(1 * tileWidth - 3, 11 * tileHeight, 6, tileHeight, "black"));
walls.push(new componets(11 * tileWidth - 3, 11 * tileHeight, 6, tileHeight, "black"));
walls.push(new componets(7 * tileWidth - 3, 12 * tileHeight, 6, tileHeight, "black"));
walls.push(new componets(14 * tileWidth - 3, 12 * tileHeight, 6, tileHeight, "black"));
walls.push(new componets(2 * tileWidth - 3, 14 * tileHeight, 6, tileHeight, "black"));
walls.push(new componets(10 * tileWidth - 3, 14 * tileHeight, 6, tileHeight, "black"));
walls.push(new componets(6 * tileWidth - 3, 15 * tileHeight, 6, tileHeight, "black"));
walls.push(new componets(12 * tileWidth - 3, 15 * tileHeight, 6, tileHeight, "black"));
//gia ta orizodia
walls.push(new componets(12 * tileWidth, 1 * tileHeight - 3, tileWidth, 6, "black"));
walls.push(new componets(3 * tileWidth, 2 * tileHeight - 3, tileWidth, 6, "black"));
walls.push(new componets(15 * tileWidth, 2 * tileHeight - 3, tileWidth, 6, "black"));
walls.push(new componets(0 * tileWidth, 4 * tileHeight - 3, tileWidth, 6, "black"));
walls.push(new componets(2 * tileWidth, 4 * tileHeight - 3, tileWidth, 6, "black"));
walls.push(new componets(5 * tileWidth, 4 * tileHeight - 3, tileWidth, 6, "black"));
walls.push(new componets(9 * tileWidth, 4 * tileHeight - 3, tileWidth, 6, "black"));
walls.push(new componets(10 * tileWidth, 5 * tileHeight - 3, tileWidth, 6, "black"));
walls.push(new componets(14 * tileWidth, 5 * tileHeight - 3, tileWidth, 6, "black"));
walls.push(new componets(4 * tileWidth, 6 * tileHeight - 3, tileWidth, 6, "black"));
walls.push(new componets(3 * tileWidth, 9 * tileHeight - 3, tileWidth, 6, "black"));
walls.push(new componets(15 * tileWidth, 9 * tileHeight - 3, tileWidth, 6, "black"));
walls.push(new componets(8 * tileWidth, 10 * tileHeight - 3, tileWidth, 6, "black"));
walls.push(new componets(13 * tileWidth, 10 * tileHeight - 3, tileWidth, 6, "black"));
walls.push(new componets(1 * tileWidth, 12 * tileHeight - 3, tileWidth, 6, "black"));
walls.push(new componets(10 * tileWidth, 12 * tileHeight - 3, tileWidth, 6, "black"));
walls.push(new componets(6 * tileWidth, 13 * tileHeight - 3, tileWidth, 6, "black"));
walls.push(new componets(14 * tileWidth, 13 * tileHeight - 3, tileWidth, 6, "black"));
walls.push(new componets(0 * tileWidth, 14 * tileHeight - 3, tileWidth, 6, "black"));
walls.push(new componets(2 * tileWidth, 14 * tileHeight - 3, tileWidth, 6, "black"));
walls.push(new componets(9 * tileWidth, 14 * tileHeight - 3, tileWidth, 6, "black"));



//vazw arithmous
function arithmoi() {
    ctx.font = "40px Georgia";
    ctx.fillText("2", 3.35 * tileWidth, 2.7 * tileHeight);
    ctx.fillText("1", 12.35 * tileWidth, 1.7 * tileHeight);
    ctx.fillText("3", 5.35 * tileWidth, 3.7 * tileHeight);
    ctx.fillText("4", 9.35 * tileWidth, 3.7 * tileHeight);
    ctx.fillText("5", 2.35 * tileWidth, 4.7 * tileHeight);
    ctx.fillText("6", 14.35 * tileWidth, 4.7 * tileHeight);
    ctx.fillText("7", 4.35 * tileWidth, 5.7 * tileHeight);
    ctx.fillText("8", 10.35 * tileWidth, 5.7 * tileHeight);
    ctx.fillText("9", 3.35 * tileWidth, 9.7 * tileHeight);
    ctx.fillText("10", 8.2 * tileWidth, 10.7 * tileHeight);
    ctx.fillText("11", 13.2 * tileWidth, 10.7 * tileHeight);
    ctx.fillText("12", 1.2 * tileWidth, 11.7 * tileHeight);
    ctx.fillText("13", 10.2 * tileWidth, 11.7 * tileHeight);
    ctx.fillText("14", 6.2 * tileWidth, 12.7 * tileHeight);
    ctx.fillText("15", 14.2 * tileWidth, 12.7 * tileHeight);
    ctx.fillText("16", 2.2 * tileWidth, 14.7 * tileHeight);
    ctx.fillText("17", 9.2 * tileWidth, 14.7 * tileHeight);
}
//UPDATE FUNCTION
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    redPlayer.update();
    yellowPlayer.update();
    greenPlayer.update();
    bluePlayer.update();
    if (playerMoving === "red") {
        //an trakarei me toixo
        for (let i = 0; i < walls.length; i++) {
            if (redPlayer.crashWith(walls[i])) {
                let courentTileX = Math.round((redPlayer.position.x + redPlayer.size.width / 4) / tileWidth);
                let courentTileY = Math.round((redPlayer.position.y ) / tileHeight);
                redPlayer.stop();
                redPlayer.position.x = courentTileX * tileWidth + 0.1 * tileWidth;
                redPlayer.position.y = courentTileY * tileHeight + 0.1 * tileHeight;
            }
        }

        //an trakarei me paikti o kokkinos
        if (redPlayer.crashWith(yellowPlayer) ||
            redPlayer.crashWith(greenPlayer) ||
            redPlayer.crashWith(bluePlayer)) {
            let courentTileX = Math.round((redPlayer.position.x + redPlayer.size.width / 15) / tileWidth);
            let courentTileY = Math.round((redPlayer.position.y + redPlayer.size.height / 20) / tileHeight);
            redPlayer.stop();
            redPlayer.position.x = courentTileX * tileWidth + 0.1 * tileWidth;
            redPlayer.position.y = courentTileY * tileHeight + 0.1 * tileHeight;

        }
    } else if (playerMoving === "yellow") {
        //an trakarei me toixo
        for (let i = 0; i < walls.length; i++) {
            if (yellowPlayer.crashWith(walls[i])) {
                let courentTileX = Math.round((yellowPlayer.position.x + yellowPlayer.size.width / 4) / tileWidth);
                let courentTileY = Math.round((yellowPlayer.position.y ) / tileHeight);
                yellowPlayer.stop();
                yellowPlayer.position.x = courentTileX * tileWidth + 0.1 * tileWidth;
                yellowPlayer.position.y = courentTileY * tileHeight + 0.1 * tileHeight;
            }
        }

        //an trakarei me paikti o kokkinos
        if (yellowPlayer.crashWith(redPlayer) ||
            yellowPlayer.crashWith(greenPlayer) ||
            yellowPlayer.crashWith(bluePlayer)) {
            let courentTileX = Math.round((yellowPlayer.position.x + yellowPlayer.size.width / 15) / tileWidth);
            let courentTileY = Math.round((yellowPlayer.position.y + yellowPlayer.size.height / 20) / tileHeight);
            yellowPlayer.stop();
            yellowPlayer.position.x = courentTileX * tileWidth + 0.1 * tileWidth;
            yellowPlayer.position.y = courentTileY * tileHeight + 0.1 * tileHeight;

        }
    } else if (playerMoving === "green") {
        //an trakarei me toixo
        for (let i = 0; i < walls.length; i++) {
            if (greenPlayer.crashWith(walls[i])) {
                let courentTileX = Math.round((greenPlayer.position.x + greenPlayer.size.width / 4) / tileWidth);
                let courentTileY = Math.round((greenPlayer.position.y ) / tileHeight);
                greenPlayer.stop();
                greenPlayer.position.x = courentTileX * tileWidth + 0.1 * tileWidth;
                greenPlayer.position.y = courentTileY * tileHeight + 0.1 * tileHeight;
            }
        }

        //an trakarei me paikti o kokkinos
        if (greenPlayer.crashWith(redPlayer) ||
            greenPlayer.crashWith(yellowPlayer) ||
            greenPlayer.crashWith(bluePlayer)) {
            let courentTileX = Math.round((greenPlayer.position.x + greenPlayer.size.width / 15) / tileWidth);
            let courentTileY = Math.round((greenPlayer.position.y + greenPlayer.size.height / 20) / tileHeight);
            greenPlayer.stop();
            greenPlayer.position.x = courentTileX * tileWidth + 0.1 * tileWidth;
            greenPlayer.position.y = courentTileY * tileHeight + 0.1 * tileHeight;

        }
    } else if (playerMoving === "blue") {
        //an trakarei me toixo
        for (let i = 0; i < walls.length; i++) {
            if (bluePlayer.crashWith(walls[i])) {
                let courentTileX = Math.round((bluePlayer.position.x + bluePlayer.size.width / 4) / tileWidth);
                let courentTileY = Math.round((bluePlayer.position.y ) / tileHeight);
                bluePlayer.stop();
                bluePlayer.position.x = courentTileX * tileWidth + 0.1 * tileWidth;
                bluePlayer.position.y = courentTileY * tileHeight + 0.1 * tileHeight;
            }
        }

        //an trakarei me paikti o kokkinos
        if (bluePlayer.crashWith(yellowPlayer) ||
            bluePlayer.crashWith(greenPlayer) ||
            bluePlayer.crashWith(redPlayer)) {
            let courentTileX = Math.round((bluePlayer.position.x + bluePlayer.size.width / 15) / tileWidth);
            let courentTileY = Math.round((bluePlayer.position.y + bluePlayer.size.height / 20) / tileHeight);
            bluePlayer.stop();
            bluePlayer.position.x = courentTileX * tileWidth + 0.1 * tileWidth;
            bluePlayer.position.y = courentTileY * tileHeight + 0.1 * tileHeight;

        }
    }
}
//draw function
function draw() {
    
    for (let i = 0; i < walls.length; i++) {
        walls[i].draw();
    }
    arithmoi();
    redPlayer.draw();
    yellowPlayer.draw();
    greenPlayer.draw();
    bluePlayer.draw();
    for (let i = 0; i < 16; i++) {
        ctx.beginPath();
        ctx.moveTo(i * canvas.width / 16, 0);
        ctx.lineTo(i * canvas.width / 16, canvas.height);
        ctx.stroke();
    }
    for (let i = 0; i < 16; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * canvas.height / 16);
        ctx.lineTo(canvas.width, i * canvas.height / 16);
        ctx.stroke();
    }
}

//GAMELOOP FUNCTION
var frames = 0;
function GameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    update();
    draw();
    frames++;

    requestAnimationFrame(GameLoop);
}