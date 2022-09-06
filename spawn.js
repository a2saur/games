//Getting the Canvas
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");


// Change Variables
const GRAVITY = 15;
const xMOVE = 15;
const CANVASHEIGHT = 800;
const CANVASWIDTH = 1000;
const imgWidth = 105;
const imgHeight = 92.4;


// Defining Images
const creatureRight1Img = new Image();
creatureRight1Img.src = "./Images/spawn/wooper right 1.png";

const creatureRight2Img = new Image();
creatureRight2Img.src = "./Images/spawn/wooper right 2.jpeg";

const creatureLeft1Img = new Image();
creatureLeft1Img.src = "./Images/spawn/wooper left 1.png";

const creatureLeft2Img = new Image();
creatureLeft2Img.src = "./Images/spawn/wooper left 2.jpeg";

const crImgs = [creatureRight1Img, creatureRight2Img];
const clImgs = [creatureLeft1Img, creatureLeft2Img];

// Defining Variables
let frames = 0;
let slow_frames = 0;
let mouseDown = false;
let mouse_pos = {
    x:-100,
    y:-100
}
let creatures = [];

//Get Keys
document.addEventListener("keydown", direction);

function direction(event){
    // 87 w, 68 d, 83 s, 65 a
    if (event.keyCode == 189){
        //minus = clear
    }
}

document.addEventListener("mousedown", function(e) { 
    mouse_pos.x = e.x-cvs.getBoundingClientRect().left;
    mouse_pos.y = e.y-cvs.getBoundingClientRect().top;
    mouseDown = true;
});

document.addEventListener("mousemove", function(e) { 
    mouse_pos.x = e.x-cvs.getBoundingClientRect().left;
    mouse_pos.y = e.y-cvs.getBoundingClientRect().top;
});

document.addEventListener("mouseup", function(e) { 
    mouseDown = false;
});

// Draw
function draw(){
    ctx.fillStyle = "#FFF"
    ctx.fillRect(0, 0, 1000, 800);
    
    frames++;

    if (frames % 10 == 0){
        slow_frames++;
    }

    if (frames % 1 == 0 && mouseDown){
        // spawn
        c = {
            x: mouse_pos.x,
            y: mouse_pos.y,
            dir: "l",
            wait:Math.random()*10
        }
        creatures.push(c);
    }

    // update creatures
    for (let i = 0; i < creatures.length; i++){
        // document.write(creatures[i].y)
        if (creatures[i].dir == "l"){
            ctx.drawImage(clImgs[slow_frames % clImgs.length], creatures[i].x, creatures[i].y, imgWidth, imgHeight);
            if (creatures[i].wait < 0){
                if ((creatures[i].x - xMOVE) > 0){
                    creatures[i].x -= xMOVE;
                } else {
                    creatures[i].x = xMOVE;
                    creatures[i].dir = "r";
                }
            } else {
                creatures[i].wait -= 1;
            }
        } else if (creatures[i].dir == "r"){
            ctx.drawImage(crImgs[slow_frames % crImgs.length], creatures[i].x, creatures[i].y, imgWidth, imgHeight);
            if (creatures[i].wait < 0){
                if ((creatures[i].x + xMOVE + imgWidth) < CANVASWIDTH){
                    creatures[i].x += xMOVE;
                } else {
                    creatures[i].x = CANVASWIDTH-(xMOVE + imgWidth);
                    creatures[i].dir = "l";
                }
            } else {
                creatures[i].wait -= 1;
            }
        }

        if ((creatures[i].y + GRAVITY + imgHeight) < CANVASHEIGHT){
            creatures[i].y += GRAVITY;
        } else {
            creatures[i].y = CANVASHEIGHT-(GRAVITY + imgHeight);
        }

        if (frames%10 == 0){
            if (creatures[i].wait < 0){
                if (Math.random() < 0.25){
                    creatures[i].wait = Math.random()*50;
                    if (Math.random() < 0.5){
                        creatures[i].dir = "l";
                    } else {
                        creatures[i].dir = "r";
                    }
                }
            }
        }
    }
}

let game = setInterval(draw, 75);