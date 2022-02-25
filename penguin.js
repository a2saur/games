//Functions
function deleteItem(index, array){
    let newArray = [];
    for (let i=0; i<array.length; i++){
        if(i!=index){
            newArray[newArray.length] = array[i];
        }
    }
    return newArray;
}

function collisions(rect1, rect2){
    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y) {
        // collision detected!
        return true;
    } else {
        return false;
    }
}

//Getting the Canvas
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");


// Change Variables
const penguinsPerPlayer = 5;
const pooTime = 15;
const directionTime = 20;
const pooSpeed = 20;

// Defining Images
const background = new Image();
background.src = "./Images/penguin/background.png";

const penguinDownImg = new Image();
penguinDownImg.src = "./Images/penguin/penguin-down.png";

const penguinUpImg = new Image();
penguinUpImg.src = "./Images/penguin/penguin-up.png";

const penguinPooDownImg = new Image();
penguinPooDownImg.src = "./Images/penguin/penguin-poo-down.png";

const penguinPooUpImg = new Image();
penguinPooUpImg.src = "./Images/penguin/penguin-poo-up.png";

const playerImg = new Image();
playerImg.src = "./Images/penguin/player.png";

const poopUpImg = new Image();
poopUpImg.src = "./Images/penguin/poop-up.png";

const poopDownImg = new Image();
poopDownImg.src = "./Images/penguin/poop-down.png";

// Definig Variables
let player1 = {
	x:500/(penguinsPerPlayer+1),
	y:350,
	width:25,
	height:25
}
let player2 = {
	x:500/(penguinsPerPlayer+1),
	y:50,
	width:25,
	height:25
}

let p1index = 0;
let p2index = 0;

let p1Penguins = [];
let p2Penguins = [];
let poops = [];

let p1Dirtiness = 0;
let p2Dirtiness = 0;

// let tempText = "";

for (let i = 1; i<=penguinsPerPlayer; i++){
	let penguin1 = {
		x:(500/(penguinsPerPlayer+1))*i,
		y:300,
		width:25,
        height:25,
        up:false,
        poo:false,
        countdownToNext:10+Math.floor(Math.random()*100),
        pooCountdown:-10,
        directionCountdown:-10
	}
	p1Penguins[p1Penguins.length] = penguin1;
	
	let penguin2 = {
		x:(500/(penguinsPerPlayer+1))*i,
		y:100,
		width:25,
        height:25,
        up:true,
        poo:false,
        countdownToNext:10+Math.floor(Math.random()*100),
        pooCountdown:-10,
        directionCountdown:-10
	}
	p2Penguins[p2Penguins.length] = penguin2;
}

//Get Keys
document.addEventListener("keydown", direction);

function direction(event){
    if (event.keyCode == 38){
        //p1 fire
        if (p1Penguins[p1index].up == false) {
            p1Penguins[p1index].up = true;
            p1Penguins[p1index].directionCountdown = directionTime;
        }    
    } else if (event.keyCode == 37){
        //p1 Left
        if (p1index-1 != -1){
            p1index -= 1;
        }
    } else if (event.keyCode == 39){
        //p1 Right
        if (p1index+1 != p1Penguins.length){
            p1index += 1;
        }
    }

    if (event.keyCode == 87){
        //p2 fire
        if (p2Penguins[p2index].up == true) {
            p2Penguins[p2index].up = false;
            p2Penguins[p2index].directionCountdown = directionTime;
        } 
    } else if (event.keyCode == 65){
        //p2 Left
        if (p2index-1 != -1){
            p2index -= 1;
        }
    } else if (event.keyCode == 68){
        //p2 Right
        if (p2index+1 != p2Penguins.length){
            p2index += 1;
        }
    }
}

function draw(){
    player1.x = p1Penguins[p1index].x;
    player2.x = p2Penguins[p2index].x;
    // DRAW
    ctx.drawImage(background, 0, 0);

    ctx.font = "20px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText("Player 2 Dirtiness - "+p2Dirtiness.toString(), 10, 30);
    ctx.fillText("Player 1 Dirtiness - "+p1Dirtiness.toString(), 275, 375);

    ctx.drawImage(playerImg, player1.x, player1.y);
    ctx.drawImage(playerImg, player2.x, player2.y);

    for (let i = 0; i<p1Penguins.length; i++){
        if (p1Penguins[i].up){
            if (p1Penguins[i].poo){
                ctx.drawImage(penguinPooUpImg, p1Penguins[i].x, p1Penguins[i].y);
            } else if (p1Penguins[i].poo == false){
                ctx.drawImage(penguinUpImg, p1Penguins[i].x, p1Penguins[i].y);
            }
        } else if (p1Penguins[i].up == false){
            if (p1Penguins[i].poo){
                ctx.drawImage(penguinPooDownImg, p1Penguins[i].x, p1Penguins[i].y);
            } else if (p1Penguins[i].poo == false){
                ctx.drawImage(penguinDownImg, p1Penguins[i].x, p1Penguins[i].y);
            }
        }

        if (p2Penguins[i].up){
            if (p2Penguins[i].poo){
                ctx.drawImage(penguinPooUpImg, p2Penguins[i].x, p2Penguins[i].y);
            } else if (p2Penguins[i].poo == false){
                ctx.drawImage(penguinUpImg, p2Penguins[i].x, p2Penguins[i].y);
            }
        } else if (p2Penguins[i].up == false){
            if (p2Penguins[i].poo){
                ctx.drawImage(penguinPooDownImg, p2Penguins[i].x, p2Penguins[i].y);
            } else if (p2Penguins[i].poo == false){
                ctx.drawImage(penguinDownImg, p2Penguins[i].x, p2Penguins[i].y);
            }
        }
    }

    // SWITCH PENGUIN?
    for (let i = 0; i<p1Penguins.length; i++){
        if (p1Penguins[i].directionCountdown == 0){
            p1Penguins[i].up = false;
            p1Penguins[i].directionCountdown = -10;
        } else {
            p1Penguins[i].directionCountdown -= 1;
        }
    }
    for (let i = 0; i<p2Penguins.length; i++){
        if (p2Penguins[i].directionCountdown == 0){
            p2Penguins[i].up = true;
            p2Penguins[i].directionCountdown = -10;
        } else {
            p2Penguins[i].directionCountdown -= 1;
        }
    }

    // TIME TO POO?
    for (let i = 0; i<p1Penguins.length; i++){
        // About to poo?
        if (p1Penguins[i].countdownToNext == 0){
            p1Penguins[i].poo = true;
            p1Penguins[i].countdownToNext = 10+Math.floor(Math.random()*100);
            p1Penguins[i].pooCountdown = pooTime;
        } else {
            p1Penguins[i].countdownToNext -= 1;
        }

        if (p2Penguins[i].countdownToNext == 0){
            p2Penguins[i].poo = true;
            p2Penguins[i].countdownToNext = 10+Math.floor(Math.random()*100);
            p2Penguins[i].pooCountdown = pooTime;
        } else {
            p2Penguins[i].countdownToNext -= 1;
        }

        // Poo?
        if (p1Penguins[i].pooCountdown == 0){
            p1Penguins[i].poo = false;
            p1Penguins[i].pooCountdown = -10;
            //add poo
            poops[poops.length] = {
                x:p1Penguins[i].x,
                y:p1Penguins[i].y,
                up:p1Penguins[i].up,
                index:i
            }
        } else {
            p1Penguins[i].pooCountdown -= 1;
        }

        if (p2Penguins[i].pooCountdown == 0){
            p2Penguins[i].poo = false;
            p2Penguins[i].pooCountdown = -10;
            //add poo
            poop2 = {
                x:p2Penguins[i].x,
                y:p2Penguins[i].y,
                up:p2Penguins[i].up,
                index:i
            }
            poops[poops.length] = poop2;
            // tempText = p2Penguins[i].x;
        } else {
            p2Penguins[i].pooCountdown -= 1;
        }
    }

    // UPDATE POOPS
    for (let i = 0; i<poops.length; i++){
        if (poops[i].y >= 350){
            if (poops[i].index == p1index){
                p1Dirtiness += 50;
            } else {
                p1Dirtiness += 10;
            }
            poops = deleteItem(i, poops);
        } else if (poops[i].y <= 50){
            if (poops[i].index == p2index){
                p2Dirtiness += 50;
            } else {
                p2Dirtiness += 10;
            }
            poops = deleteItem(i, poops);
        }

        if (poops[i].up){
            ctx.drawImage(poopUpImg, poops[i].x, poops[i].y);
            poops[i].y -= pooSpeed;
        } else if (poops[i].up == false){
            ctx.drawImage(poopDownImg, poops[i].x, poops[i].y);
            poops[i].y += pooSpeed;
        }
    }

    // Done?
    // if (enemy.y-player.y <= 20){
    //     clearInterval(game);
    // }
}

let game = setInterval(draw, 100);