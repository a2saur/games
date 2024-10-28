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
const cvs = document.getElementById("squirrel");
const ctx = cvs.getContext("2d");


// Change Variables
const playerSpeed = 10;
const acornFreq = 10;
const acornSpeed = 10;

//Defining things
const acorn1Img = new Image();
acorn1Img.src = "Acorn1.png";

const acorn2Img = new Image();
acorn2Img.src = "Acorn2.png";

const acorn3Img = new Image();
acorn3Img.src = "Acorn3.png";

const background = new Image();
background.src = "Background.png";

const bigSquirrel1Img = new Image();
bigSquirrel1Img.src = "Big_Squirrel1.png";

const bigSquirrel2Img = new Image();
bigSquirrel2Img.src = "Big_Squirrel2.png";

const squirrel1Img = new Image();
squirrel1Img.src = "Squirrel1.png";

const squirrel2Img = new Image();
squirrel2Img.src = "Squirrel2.png";

const bigSquirrel1Img_Color = new Image();
bigSquirrel1Img_Color.src = "Big_Squirrel1_Color.png";

const bigSquirrel2Img_Color = new Image();
bigSquirrel2Img_Color.src = "Big_Squirrel2_Color.png";

const squirrel1Img_Color = new Image();
squirrel1Img_Color.src = "Squirrel1_Color.png";

const squirrel2Img_Color = new Image();
squirrel2Img_Color.src = "Squirrel2_Color.png";

const acornImgs = [acorn1Img, acorn2Img, acorn3Img];

let player = {
    x:200,
    y:300,
    imgs:[squirrel1Img, squirrel2Img],
    width:25,
    height:50    
}

let enemy = {
    y:350,
    imgs:[bigSquirrel1Img, bigSquirrel2Img],
    width:50,
    height:75    
}

let acornScore = 0;
let frames = 0;
let d = "u";
let acorn;
let acorns = [];
let code = "";
let color = false;

//Get Keys
document.addEventListener("keydown", direction);

function direction(event){
    if (event.keyCode == 38){
        //up
        d = "u";
        code = "";
    } else if (event.keyCode == 40){
        //down
        d = "d";
        code = "";
    } if (event.keyCode == 37){
        //left
        if (player.x-25 >= 0){
            player.x -= 25;
        }
        code = "";
    } else if (event.keyCode == 39){
        //right
        if (player.x+25 <= 375){
            player.x += 25;
        }
        code = "";
    } if (event.keyCode == 32){
        //cut (space)
        for (let i = 0; i < acorns.length; i++){
            if (collisions(acorns[i], player)){
                acorns[i].cuts += 1;
                if (acorns[i].cuts > 2){
                    acorns = deleteItem(i, acorns);
                    acornScore++;
                }
            }
        }
        code = "";
    } if (event.keyCode == 68){
        code += "D";
    } else if (event.keyCode == 65){
        code += "A";
    }
}

function draw(){
    if (code == "DAD"){
        color = true;
        player.imgs = [squirrel1Img_Color, squirrel2Img_Color];
        enemy.imgs = [bigSquirrel1Img_Color, bigSquirrel2Img_Color];
    }
    if (frames%acornFreq == 0 && d == "u"){
        acorn = {
            x: Math.floor(Math.random()*16)*25,
            y:-20,
            cuts:0,
            width:25,
            height:30
        }
        acorns[acorns.length] = acorn;
    }
    frames++;
    if (d == "u"){
        //up
        for(let i = 0; i < acorns.length; i++){
            acorns[i].y += playerSpeed+acornSpeed;
        }
        enemy.y += playerSpeed;
    } else if (d == "d"){
        //down
        enemy.y -= playerSpeed;
    }

    // Draw Images
    ctx.drawImage(background, 0, 0);

    ctx.font = "20px Arial";
    ctx.fillStyle = "#FFF";
    ctx.fillText("Acorns: "+acornScore.toString(), 300, 475);
    ctx.fillText("Distance from Big Squirrel: "+((enemy.y-player.y)-20).toString(), 10, 30);

    ctx.drawImage(enemy.imgs[frames%2], player.x, enemy.y);

    if (d == "u"){
        ctx.drawImage(player.imgs[frames%2], player.x, player.y);
    } else {
        ctx.drawImage(player.imgs[0], player.x, player.y);
    }

    for(let i = 0; i < acorns.length; i++){
        ctx.drawImage(acornImgs[acorns[i].cuts], acorns[i].x, acorns[i].y);
    }

    // Done?
    if (enemy.y-player.y <= 20){
        clearInterval(game);
    }
}

let game = setInterval(draw, 100);