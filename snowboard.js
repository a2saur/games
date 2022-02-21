//Getting the Canvas
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");

function point_in_rect(pointX, pointY, rectX, rectY, rectW, rectH){
    if (pointX > rectX && pointX < (rectX+rectW)
        && pointY > rectY && pointY < (rectY+rectH)){
            return true;
    } else {
        return false;
    }
}

function drawCircle(x, y, radius, fill, stroke, strokeWidth) {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
    if (fill) {
      ctx.fillStyle = fill
      ctx.fill()
    }
    if (stroke) {
      ctx.lineWidth = strokeWidth
      ctx.strokeStyle = stroke
      ctx.stroke()
    }
  }

// Change Variables
const G = 1;
const X_INCREASE = G*0.5;
const Y_INCREASE = G*0.5;


// Defining Images
const playerFlat = new Image();
playerFlat.src = "./Images/snowboarding/player_flat.png";

const playerUp = new Image();
playerUp.src = "./Images/snowboarding/player_up.png";

const playerDown = new Image();
playerDown.src = "./Images/snowboarding/player_down.png";

const blockFlat = new Image();
blockFlat.src = "./Images/snowboarding/flat.png";

const blockUp = new Image();
blockUp.src = "./Images/snowboarding/up.png";

const blockDown = new Image();
blockDown.src = "./Images/snowboarding/down.png";

const blockSolid = new Image();
blockSolid.src = "./Images/snowboarding/solid.png";

const MAP_IMAGES = {
    "\\":blockDown,
    "/":blockUp,
    "_":blockFlat,
    "x":blockSolid
}


// Defining Variables
// let offset = {
//     x:-64,
//     y:-64
// }
let frames = 0;
let player = {
    x:0,
    y:128,
    vx:0,
    vy:0,
}
let map = [
    "                                                 ",
    "                                               __",
    "\\         _            _____                   /xx",
    "x\\       /x\\_____     /xxxxx\\____        _    /xxx",
    "xx\\_____/xxxxxxxx\\___/xxxxxxxxxxx\\______/x\\__/xxxx",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
];
let mode = "\\";
const MODE_IMAGES = {
    " ":playerFlat,
    "_":playerFlat,
    "\\":playerDown,
    "/":playerUp,
    "x":playerFlat,
}
let player_x_offset = 32;
let player_y_offset = 32;


//Get Keys
document.addEventListener("keydown", direction);

function direction(event){
    if (event.keyCode == 38){
        //up
    } else if (event.keyCode == 40){
        //down
    } if (event.keyCode == 37){
        //left
    } else if (event.keyCode == 39){
        //right
    }
}

// Draw
function draw(){
    ctx.fillStyle = "#5AF";
    ctx.fillRect(0, 0, 768, 576);
    
    frames++;
    
    for (let y=0; y<map.length; y++){
        for (let x=0; x<map[y].length; x++){
            // drawCircle(player.x+32, player.y, 5, "#F00", "#000", 3);
            if (map[y][x] == " "){
                // pass
                if (point_in_rect(player.x+32, player.y, x*64, y*64, 64, 64)){
                    mode = " ";
                }
            } else {
                ctx.drawImage(MAP_IMAGES[map[y][x]], (x*64), (y*64));
                
                if (point_in_rect(player.x+player_x_offset, player.y+player_y_offset, x*64, y*64, 64, 64)){
                    if (map[y][x] != mode){
                        if (mode == " "){
                            // hit the ground
                            player.vy = 0;
                        } else if ((mode == "/" || mode == "\\") && map[y][x] == "_"){
                            // hit a flat from a hill
                            player.vx = Math.sqrt(player.vx**2+player.vy**2);
                            player.vy = 0
                        } else if ((map[y][x] == "/" || map[y][x] == "\\") && mode == "_"){
                            // hit a hill from a flat
                            player.vy = 0.5*player.vx;
                            player.vx = 0.5*player.vx;
                        }
                    }
                    mode = map[y][x];
                    drawCircle(player.x+player_x_offset, player.y+player_y_offset, 5, "#0F0", "#000", 3);
                    // player.x = x*64;
                    // player.y = y*64;
                }
            }
        }
    }

    ctx.drawImage(MODE_IMAGES[mode], player.x, player.y);
    // ctx.drawImage(playerFlat, player.x, player.y);

    if (mode == "\\"){
        player.vx += X_INCREASE;
        player.vy += Y_INCREASE;
        if (player.vx**2 != player.vy**2){
            document.write("A");
        }
    } else if (mode == "/"){
        player.vx -= X_INCREASE;
        player.vy += Y_INCREASE;
    } else if (mode == "_"){
        player.vy = 0;
    } else if (mode == " "){
        player.vy += G;
    } else {
        player.y = parseInt(player.y/64)*64;
    }

    player.x += player.vx;
    player.y += player.vy;

    ctx.font = "30px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText("\""+mode+"\"", 100, 100);
}

let game = setInterval(draw, 100);