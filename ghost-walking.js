//Getting the Canvas
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");


// Change Variables
const cNUMFRAMES = 2;

// Defining Images
const ghostR1 = new Image();
ghostR1.src = "./Images/ghost-right-1.png";

const ghostR2 = new Image();
ghostR2.src = "./Images/ghost-right-2.png";

const ghostL1 = new Image();
ghostL1.src = "./Images/ghost-left-1.png";

const ghostL2 = new Image();
ghostL2.src = "./Images/ghost-left-2.png";

// Defining Variables
let player = {
    x:0,
    y:0,
    direction:"R"
}
let frames = 0;
let frame_sets = 0;
let x_speed = 50;
let y_speed = 50;

//Get Keys
document.addEventListener("keydown", direction);

function direction(event){
    if (event.keyCode == 38){
        //up
        player.y -= y_speed;
    } else if (event.keyCode == 40){
        //down
        player.y += y_speed;
    } if (event.keyCode == 37){
        //left
        player.x -= x_speed;
        player.direction = "L";
    } else if (event.keyCode == 39){
        //right
        player.x += x_speed;
        player.direction = "R";
    } else if (event.keyCode == 188){
        // <
        x_speed -= 10;
        y_speed += 10;
    } else if (event.keyCode == 190){
        // >
        x_speed += 10;
        y_speed += 10;
    }
}

// Draw
function draw(){
    ctx.fillRect(0, 0, 768, 576);

    frames++;
    if (frames == cNUMFRAMES) {
        frames = 0;
        frame_sets++;
    }

    if (player.direction == "R"){
        if (frame_sets%2 == 0){
            ctx.drawImage(ghostR1, player.x, player.y);
        } else {
            ctx.drawImage(ghostR2, player.x, player.y);
        }
    } else if (player.direction == "L"){
        if (frame_sets%2 == 0){
            ctx.drawImage(ghostL1, player.x, player.y);
        } else {
            ctx.drawImage(ghostL2, player.x, player.y);
        }
    }

    // Done?
    // if (enemy.y-player.y <= 20){
    //     clearInterval(game);
    // }
}

let game = setInterval(draw, 100);