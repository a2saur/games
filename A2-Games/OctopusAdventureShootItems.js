function deleteItem(index, array){
    let newArray = [];
    for (let i=0; i<array.length; i++){
        if(i!=index){
            newArray[newArray.length] = array[i];
        }
    }
    return newArray;
}


function collision(rect1, rect2, rect1Width, rect1Height){
    if (rect1.x < rect2.x + 64 &&
        rect1.x + rect1Width > rect2.x &&
        rect1.y < rect2.y + 32 &&
        rect1.y + rect1Height > rect2.y) {
            return true;
         // collision detected!
     }
}


//Getting the Canvas
const cvs = document.getElementById("farm");
const ctx = cvs.getContext("2d");


//Defining things
const box = 32;

const octopusImg = new Image();
octopusImg.src = "Octopus 1.png";

const dumboImg = new Image();
dumboImg.src = "DumboOctopus.png"

const codImg = new Image();
codImg.src = "Cod_Cropped.png"

const haddockImg = new Image();
haddockImg.src = "Haddock_Cropped.png"

const inkImg = new Image();
inkImg.src = "Ink.png"

const shellImg = new Image();
shellImg.src = "Shell.png"

const toothImg = new Image();
toothImg.src = "SharkTooth.png"

let octopus = {
    x:2*box,
    y:9*box
}

let projectile = {
    x:2*box,
    y:0,
    type:"ink"
}

let score = 0;

let enemies = [];

const jump = 1.7;
const fall = 10;
const available = ["ink", "shell", "tooth"];
let distance = 1000;
const shotSpeed = 20;
const enemySpeed = 10;

let done = false;
let shot = false;
let nextType = "ink";


//check buttons
let d;

document.addEventListener("keydown", direction);

function direction(event){
    if (event.keyCode == 32){
        d = "s";
    } else if (event.keyCode == 70){
        d = "h"
    } else if (event.keyCode == 65){
        //a
        if(available.includes("ink")){
            nextType = "ink";
        }
    } else if (event.keyCode == 83){
        //s
        if(available.includes("shell")){
            nextType = "shell";
        }
    } else if (event.keyCode == 68){
        //d
        if(available.includes("tooth")){
            nextType = "tooth";
        }
    }
}

//background
function background(){
    ctx.fillStyle = "#009dff";
    ctx.fillRect(0, 0, 768, 576);
    ctx.fillStyle = "#f5e095";
    ctx.fillRect(0, 512, 768, 64);
}

function add_enemy(){
    let codHaddock = Math.ceil(Math.random() * 2);
    let fishType;
    if (codHaddock == 1){
        //haddock
        fishType = haddockImg;
    } else {
        //cod
        fishType = codImg;
    }
    let yLoc = Math.floor(Math.random() * 16*box);
    enemies[enemies.length] = {
        x:24*box,
        y:yLoc,
        image:fishType,
        countdown:0,
        hp:3
    }
}

let frames = 0;
//draw
function draw(){
    distance -= 10;
    frames++;

    if(frames%10 == 0 && done != true){
        add_enemy();
    }

    //delete offscreen fish
    for(let i = 0; i<enemies.length; i++){
        if (enemies[i].x <= -32){
            enemies = deleteItem(i, enemies);
        }
        if (enemies[i].hp <= 0){
            score += 100
            enemies = deleteItem(i, enemies);
        }
    }
    if(projectile.x >= 768){
        projectile.type = nextType;
        shot = false;
        projectile.x = octopus.x;
    }

    //draw
    background();

    ctx.drawImage(octopusImg, octopus.x, octopus.y);
    ctx.drawImage(dumboImg, octopus.x-(2*box), octopus.y);
    if(shot){
        if(projectile.type == "ink"){
            ctx.drawImage(inkImg, projectile.x, projectile.y);
        } else if(projectile.type == "shell"){
            ctx.drawImage(shellImg, projectile.x, projectile.y);
        } else if(projectile.type == "tooth"){
            ctx.drawImage(toothImg, projectile.x, projectile.y);
        }
        projectile.x += shotSpeed;
    }
    for(let i = 0; i<enemies.length; i++){
        enemies[i].countdown -= 1;
        if(enemies[i].countdown < 1){
            if(enemies[i].hp == 3){
                enemies[i].x -= enemySpeed;
            } else if(enemies[i].hp == 2){
                enemies[i].x -= enemySpeed-2;
            } else if(enemies[i].hp == 1){
                enemies[i].x -= enemySpeed-4;
            }
        }
        ctx.drawImage(enemies[i].image, enemies[i].x, enemies[i].y)
        if (shot && collision(projectile, enemies[i], 64, 32)){
            if(projectile.type == "ink"){
                enemies[i].countdown = 20;
            } else if(projectile.type == "shell"){
                enemies[i].hp -= 1;
            } else if(projectile.type == "tooth"){
                enemies[i].hp -= 3;
            }
            projectile.type = nextType;
            shot = false;
            projectile.x = octopus.x;
        }
        if(collision(octopus, enemies[i], 64, 64)){
            clearInterval(game);
        }
    }

    if(d == "s" && octopus.y > 0) octopus.y -= jump*box;
    // if(d == "d" && octopus.y < 15*box) octopus.y += box;
    if(d == "h" && shot == false){
        shot = true;
        projectile.y = octopus.y+(box*0.5);
    }
    if(octopus.y < 15*box) octopus.y += fall;
    d = "";

    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText("Score: "+score, 1*box, 1.5*box);
    ctx.fillText("Chosen: "+nextType, 16*box, 1.5*box);
    if(distance <= 0 && enemies.length == 0){
        clearInterval(game);
    }
    if(distance <= 0){
        done = true;
    }
}


let game = setInterval(draw, 100);