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
const cvs = document.getElementById("platformer");
const ctx = cvs.getContext("2d");


//Defining things
const box = 32; 

const charImg = new Image();
charImg.src = "Blob.png";

const platformImg = new Image();
platformImg.src = "Platform.png";

const platGlowImg = new Image();
platGlowImg.src = "PlatGlow.png";

const rest1 = new Image();
rest1.src = "Drawing1.png";

const rest2 = new Image();
rest2.src = "Drawing2.png";

let platforms = [];
const gravity = 5;
let jump = 0;
let drawing = "draw";
let frames = 0;
let resting = [];
resting[0] = rest1;
resting[1] = rest2;

let character = {
    x:350,
    y:200,
    img:charImg,
    width:32,
    height:32
}

//add platforms
platforms[platforms.length] = {
    x:400,
    y:300,
    img:platGlowImg,
    width:64,
    height:32
}
platforms[platforms.length] = {
    x:200,
    y:300,
    img:platformImg,
    width:64,
    height:32
}
platforms[platforms.length] = {
    x:500,
    y:250,
    img:platformImg,
    width:64,
    height:32
}
platforms[platforms.length] = {
    x:100,
    y:250,
    img:platformImg,
    width:64,
    height:32
}



//Get Keys
document.addEventListener("keydown", direction);

function direction(event){
  if (event.keyCode == 37){
    if(drawing=="draw"){
        for(let x=0;x<platforms.length;x++){
            platforms[x].x += 10;
        }
    }
  } else if (event.keyCode == 39){
    if(drawing=="draw"){
        for(let x=0;x<platforms.length;x++){
            platforms[x].x -= 10;
        }
    }
  } else if (event.keyCode == 65){
    //ENTER
    character.y += character.height;
    if (collisions(character, platforms[0])){
        if(drawing=="draw"){
            drawing = "rest";
        } else if (drawing == "rest"){
            drawing = "draw";
        }
    }
    character.y -= character.height;
  }
  if (event.keyCode == 32){
    if(drawing=="draw"){
        for(let x=0;x<platforms.length;x++){
            if(collisions(character, platforms[x])){
                jump = gravity*-5;
            }
        }
    }
  }
}


//draw
function draw(){
    if(drawing=="draw"){
        //draw
        ctx.fillStyle = "#009dff";
        ctx.fillRect(0, 0, 768, 576);
        for(let x=0;x<platforms.length;x++){
            ctx.drawImage(platforms[x].img, platforms[x].x, platforms[x].y);
        }

        ctx.drawImage(character.img, character.x, character.y);

        //move character
        character.y += jump;

        //if touching, else go down
        for(let x=0;x<platforms.length;x++){
            if(collisions(character, platforms[x])){
                character.y = platforms[x].y-character.height;
            }
        }
        character.y += gravity;

        if(jump<0){
            jump += gravity;
        }

        //done?
        if (character.y > 550){
            character.y = 100;
            //clearInterval(game);
        }
    } else if (drawing=="rest"){
        //draw
        frames++;
        // ctx.fillStyle = "#a1fffc";
        // ctx.fillRect(0, 0, 768, 576);
        ctx.drawImage(resting[frames%2], 0, 0);
    }
}


let game = setInterval(draw, 100);