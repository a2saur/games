//Getting the Canvas
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");


// Change Variables

// Defining Images
const root = "./Images/collection/"

const charImg = new Image();
charImg.src = root+"main-char.png";

const waterImg = new Image();
waterImg.src = root+"water-1.png";
const grassImg = new Image();
grassImg.src = root+"grass-1.png";
const beachImg = new Image();
beachImg.src = root+"beach-1.png";
const mountainImg = new Image();
mountainImg.src = root+"mountain-1.png";


// Defining Variables
let current_scene = "main";
let player = {
    x:0,
    y:0,
}
let frames = 0;
let temp_x;
let temp_y;

const cBLOCK_IMAGES = {
    "G":grassImg,
    "W":waterImg,
    "M":mountainImg,
    "B":beachImg,
}

// *****
const cSHADES = ["rgb(0, 0, 0, 0.0)", "rgb(0, 0, 0, 0.1)", "rgb(0, 0, 0, 0.2)", "rgb(0, 0, 0, 0.3)", "rgb(0, 0, 0, 0.4)"]

const cMAP = [
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
]

const cMAP_NUM = [
    [0, 1, 1, 3, 1, 3, 4, 0, 3, 2], 
    [2, 4, 1, 3, 2, 4, 0, 3, 0, 3], 
    [4, 3, 4, 1, 3, 3, 2, 0, 3, 1], 
    [1, 1, 1, 2, 4, 3, 0, 0, 0, 1], 
    [0, 4, 2, 4, 4, 1, 4, 1, 1, 4], 
    [4, 4, 2, 2, 3, 0, 4, 4, 0, 1], 
    [2, 1, 2, 3, 2, 0, 0, 4, 4, 2], 
    [2, 0, 1, 1, 2, 0, 0, 2, 4, 4], 
    [1, 4, 1, 3, 3, 4, 3, 2, 3, 0],
    [0, 1, 2, 2, 0, 1, 0, 2, 0, 2],
]
// *****

//Get Keys
document.addEventListener("keydown", direction);

function direction(event){
    if (event.keyCode == 38){
        //up
        player.y -= 1;
    } else if (event.keyCode == 40){
        //down
        player.y += 1;
    } if (event.keyCode == 37){
        //left
        player.x -= 1;
    } else if (event.keyCode == 39){
        //right
        player.x += 1;
    }

    if (player.x < 0) {
        player.x = 0;
    } if (player.x >= cMAP[0].length) {
        player.x = cMAP[0].length-1;
    }

    if (player.y < 0) {
        player.y = 0;
    } if (player.y >= cMAP.length) {
        player.y = cMAP.length-1;
    }
}

// Draw
function draw(){
    ctx.fillStyle = "#eef";
    ctx.fillRect(0, 0, 768, 576);

    frames++;

    if (current_scene == "main"){
        // draw background
        temp_y = 0;
        for (let y = -4; y <= 4; y++){
            temp_x = 0;
            for (let x = -4; x <= 4; x++){
                if (player.y+y >= 0 && player.x+x >= 0 && player.y+y < cMAP.length && player.x+x < cMAP[0].length){
                    ctx.drawImage(cBLOCK_IMAGES[cMAP[player.y+y][player.x+x]], (x+4)*32, (y+4)*32)
                    ctx.fillStyle = cSHADES[cMAP_NUM[player.y+y][player.x+x]];
                    ctx.fillRect((x+4)*32, (y+4)*32, 32, 32)
                }
            }
        }
        // player.draw(frames);

        ctx.fillStyle = "#eef"
        ctx.fillRect(0, 288, 288, 320);

        // add text
        ctx.font = "15px Arial";
        ctx.fillStyle = "#000"
        ctx.fillText("Coordinates: ("+player.x.toString()+", "+player.y.toString()+")", 10, 310);
    }

    // Done?
    // if (enemy.y-player.y <= 20){
    //     clearInterval(game);
    // }
}

let game = setInterval(draw, 100);