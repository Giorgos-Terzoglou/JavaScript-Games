document.addEventListener("keydown", function event(e) {
    switch (e.code) {
        case "ArrowLeft":
            if (playerMoving === "red" && redPlayer.moving === false) {
                redPlayer.moveLeft();
                count++;
                document.getElementById("count_span").innerHTML = count;
            } else if (playerMoving === "blue" && bluePlayer.moving === false) {
                bluePlayer.moveLeft();
                count++;
                document.getElementById("count_span").innerHTML = count;
            } else if (playerMoving === "green" && greenPlayer.moving === false) {
                greenPlayer.moveLeft();
                count++;
                document.getElementById("count_span").innerHTML = count;
            } else if (playerMoving === "yellow" && yellowPlayer.moving === false) {
                yellowPlayer.moveLeft();
                count++;
                document.getElementById("count_span").innerHTML = count;
            }
            break;
        case "ArrowRight":
            if (playerMoving === "red" && redPlayer.moving === false) {
                redPlayer.moveRight();
                count++;
                document.getElementById("count_span").innerHTML = count;
            } else if (playerMoving === "blue" && bluePlayer.moving === false) {
                bluePlayer.moveRight();
                count++;
                document.getElementById("count_span").innerHTML = count;
            } else if (playerMoving === "green" && greenPlayer.moving === false) {
                greenPlayer.moveRight();
                count++;
                document.getElementById("count_span").innerHTML = count;
            } else if (playerMoving === "yellow" && yellowPlayer.moving === false) {
                yellowPlayer.moveRight();
                count++;
                document.getElementById("count_span").innerHTML = count;
            }
            break;
        case "ArrowUp":
            if (playerMoving === "red" && redPlayer.moving === false) {
                redPlayer.moveUp();
                count++;
                document.getElementById("count_span").innerHTML = count;
            } else if (playerMoving === "blue" && bluePlayer.moving === false) {
                bluePlayer.moveUp();
                count++;
                document.getElementById("count_span").innerHTML = count;
            } else if (playerMoving === "green" && greenPlayer.moving === false) {
                greenPlayer.moveUp();
                count++;
                document.getElementById("count_span").innerHTML = count;
            } else if (playerMoving === "yellow" && yellowPlayer.moving === false) {
                yellowPlayer.moveUp();
                count++;
                document.getElementById("count_span").innerHTML = count;
            }
            break;
        case "ArrowDown":
            if (playerMoving === "red" && redPlayer.moving === false) {
                redPlayer.moveDown();
                count++;
                document.getElementById("count_span").innerHTML = count;
            } else if (playerMoving === "blue" && bluePlayer.moving === false) {
                bluePlayer.moveDown();
                count++;
                document.getElementById("count_span").innerHTML = count;
            } else if (playerMoving === "green" && greenPlayer.moving === false) {
                greenPlayer.moveDown();
                count++;
                document.getElementById("count_span").innerHTML = count;
            } else if (playerMoving === "yellow" && yellowPlayer.moving === false) {
                yellowPlayer.moveDown();
                count++;                
                document.getElementById("count_span").innerHTML = count;
            }
            break;
        case "KeyR":
            count = 0;
             document.getElementById("count_span").innerHTML = count;
            yellowPlayer.reset();
            greenPlayer.reset();
            redPlayer.reset();
            bluePlayer.reset();
    }
})