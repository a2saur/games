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

function collisionPoint(rect1, point){
    if (point.x > rect1.x && point.x < rect1.x+rect1.width) {
        if (point.y > rect1.y && point.y < rect1.y+rect1.height){
            // collision detected!
            return true;
        }
    } else {
        return false;
    }
}

function collisionRange(rect1, point, range){
    let tempPoint;
    for(let x=-range; x<range; x++){
        for(let y=-range; y<range; y++){
            tempPoint = {
                x:point.x+x,
                y:point.y+y
            }
            if(collisionPoint(rect1, tempPoint)){
                return true;
            }
        }
    }
    return false;
}

function inRange(rect1, rect2, radius){
    // range > sqrt((x1-x2)^2+(y1-y2)^2)
    if(radius>Math.sqrt(((rect1.x-rect2.x)*(rect1.x-rect2.x))+((rect1.y-rect2.y)*(rect1.y-rect2.y)))){
        return true;
    } else {
        return false;
    }
}

//Getting the Canvas
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");


// Change Variables
const gooseSteps = 5;
const charYSpeed = 10;
const charXSpeed = 10;
const geeseCol = 2;
const gooseWait = 10;
const beakRange = 10;
const moveRadius = 50;
const geeseInterval = 200;


//Defining things
const gooseImg = new Image();
gooseImg.src = "./images/goose-goose.png";

const gooseAngryImg = new Image();
gooseAngryImg.src = "./images/goose-angry-goose.png";

const charImg = new Image();
charImg.src = "./images/goose-character.png";

const background = new Image();
background.src = "./images/goose-background.png";

let geese = [];
let distance = 0;
let addGoose = 0;
let udd = "";
let lrd = "";

let character = {
    x:350,
    y:200,
    img:charImg,
    width:30,
    height:20,
    cooldown:0
}

let temp;
for(let i=0; i<10; i++){
    for(let j=0; j<geeseCol; j++){
        temp = Math.random()*moveRadius;
        let goose = {
            x:800+(i*geeseInterval),
            y:-50+(Math.random()*cvs.height),
            angry:false,
            width:60,
            height:30,
            dX:0,
            dY:0,
            countdown:0,
            distChangeX:-temp,
            distChangeY:moveRadius-temp,
            xPlus:true,
            yPlus:false
        }
        geese[geese.length] = goose;
    }
}

//Get Keys
document.addEventListener("keydown", direction);

function direction(event){
    if (event.keyCode == 38){
        //up
        if (udd == "d"){
            udd = "";
        }
        else {
            udd = "u";
        }
    } else if (event.keyCode == 40){
        //down
        if (udd == "u"){
            udd = "";
        }
        else {
            udd = "d";
        }
    } if (event.keyCode == 37){
        //left
        if (lrd == "r"){
            lrd = "";
        }
        else {
            lrd = "l";
        }
    } else if (event.keyCode == 39){
        //right
        if (lrd == "l"){
            lrd = "";
        }
        else {
            lrd = "r";
        }
    }
}


//draw
function draw(){
    if (udd == "u"){
        //up
        if (character.y-charYSpeed >= 0){
            character.y -= charYSpeed;
        }
    } else if (udd == "d"){
        //down
        if (character.y+charYSpeed < cvs.height-10){
            character.y += charYSpeed;
        }
    } if (lrd == "l"){
        //left
        for(let i = 0; i<geese.length; i++){
            geese[i].x += charXSpeed;
        }
        distance -= charXSpeed;
        addGoose -= charXSpeed;
    } else if (lrd == "r"){
        //right
        for(let i = 0; i<geese.length; i++){
            geese[i].x -= charXSpeed;
        }
        distance += charXSpeed;
        addGoose += charXSpeed;
    }
    //draw
    // ctx.fillStyle = "#009dff";
    // ctx.fillRect(0, 0, 768, 576);
    ctx.drawImage(background, -(distance%3000), 0);

    ctx.font = "30px Arial";
    ctx.fillStyle = "#FFF";
    ctx.fillText("Distance: "+distance.toString(), 550, 550);

    ctx.drawImage(character.img, character.x, character.y);
    for(let i = 0; i<geese.length; i++){
        // draw collision box
        ctx.fillRect(geese[i].x-beakRange, geese[i].y-beakRange, beakRange*2, beakRange*2);

        // draw circle
        if (0 > geese[i].countdown && geese[i].countdown > -10 && geese[i].angry){
            ctx.strokeStyle = "#0F0";
        } else {
            ctx.strokeStyle = "#F00";
        }
        ctx.beginPath();
        ctx.arc(geese[i].x, geese[i].y, 100, 0, Math.PI*2);
        ctx.stroke();

        // draw
        if(geese[i].angry){
            ctx.save();
            ctx.translate(geese[i].x, geese[i].y);
            if(geese[i].dY>0 && geese[i].dX<0){
                //good
                ctx.rotate(Math.atan((geese[i].dY)/(geese[i].dX)));
            } else if(geese[i].dY<0 && geese[i].dX<0){
                //good
                ctx.rotate(Math.atan((geese[i].dY)/(geese[i].dX)));
            } else if(geese[i].dY>0 && geese[i].dX>0){
                //good
                ctx.rotate(Math.atan((geese[i].dY)/(geese[i].dX))+Math.PI);
            } else if(geese[i].dY<0 && geese[i].dX>0){
                //good
                ctx.rotate(Math.atan((geese[i].dY)/(geese[i].dX))+Math.PI);
            }
            
            ctx.drawImage(gooseAngryImg, 0, 0);
            ctx.restore();
        } else {
            ctx.drawImage(gooseImg, geese[i].x, geese[i].y);
        }

        // move
        if(geese[i].countdown > 0){
            geese[i].countdown--;
            geese[i].x += geese[i].dX;
            geese[i].y += geese[i].dY;
        } else if(geese[i].countdown > -gooseWait){
            geese[i].countdown--;
        }

        // angry?
        if(inRange(geese[i],character,100)){
            geese[i].angry = true;
            if (geese[i].countdown == -gooseWait){
                geese[i].countdown = gooseSteps;
                geese[i].dX = ((character.x+(character.width/2))-geese[i].x)/gooseSteps;
                geese[i].dY = ((character.y+(character.height/2))-geese[i].y)/gooseSteps;
            }
        } else {
            if (geese[i].countdown == -gooseWait){
                geese[i].angry = false;
            }
        }

        // off screen?
        if(geese[i].x<-200){
            geese[i].x = 900;
            geese[i].y = -50+(Math.random()*cvs.height);
        }
        
        // done?
        if(collisionRange(character,geese[i],beakRange)){
            clearInterval(game);
        }

        // move around
        if(geese[i].angry == false){
            if(geese[i].distChangeX>moveRadius){
                geese[i].xPlus = false;
            } else if(geese[i].distChangeX<-moveRadius){
                geese[i].xPlus = true;
            }
            if(geese[i].distChangeY>moveRadius){
                geese[i].yPlus = false;
            } else if(geese[i].distChangeY<-moveRadius){
                geese[i].yPlus = true;
            }

            if(geese[i].xPlus){
                geese[i].x += 10;
                geese[i].distChangeX += 10;
            } else {
                geese[i].x -= 10;
                geese[i].distChangeX -= 10;
            }
            if(geese[i].yPlus){
                geese[i].y += 10;
                geese[i].distChangeY += 10;
            } else {
                geese[i].y -= 10;
                geese[i].distChangeY -= 10;
            }
        }
    }
    if(addGoose == 100*charXSpeed){
        addGoose = 0;
        let goose = {
            x:100+(distance),
            y:-50+(Math.random()*cvs.height),
            angry:false,
            width:60,
            height:30,
            dX:0,
            dY:0,
            countdown:0
        }
        geese[geese.length] = goose;
    }
    
}


let game = setInterval(draw, 100);