function deleteItems(indexes, array){
    let newArray = [];
    for (let i=0; i<array.length; i++){
        if(indexes.includes(i)){
            // pass
        } else {
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

function dist_rects(rect1, rect2){
    let xDist = Math.abs((rect1.x+(rect1.width/2))-(rect2.x+(rect1.width/2)));
    let yDist = Math.abs((rect1.y+(rect1.height/2))-(rect2.y+(rect1.height/2)));
    return Math.sqrt(xDist**2 + yDist**2);
}

//Getting the Canvas
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");

// Change Variables
const childrenSteps = 5;
const charYSpeed = 10;
const charXSpeed = 10;
const childrenCol = 2; // children per column
const moveRadius = 50;
const childrenInterval = 200;

//Defining things
const gooseImg = new Image();
gooseImg.src = "./Images/goose/goose.png";

const gooseAngryImg = new Image();
gooseAngryImg.src = "./Images/goose/angry-goose.png";

const charImg = new Image();
charImg.src = "./Images/goose/Child_Large.png";

const background = new Image();
background.src = "./Images/goose/background.png";

const breadImg = new Image();
breadImg.src = "./Images/goose/bread.png";

let children = [];
let breads = [];
let distance = 0;
let addChild = 0;
let bread_count = 0;
let udd = "";
let lrd = "";

let character = {
    x:cvs.width-350,
    y:200,
    img:gooseImg,
    width:60,
    height:30,
}

let temp;
let size;
for(let i=0; i<10; i++){
    for(let j=0; j<childrenCol; j++){
        size = 100+(Math.random()*50);
        child = {
            x:-(i*childrenInterval),
            y:-50+(Math.random()*cvs.height),
            img:charImg,
            xAddMax:(Math.random()*100),
            yAddMax:(Math.random()*100),
            xAdded:0,
            yAdded:0,
            xMaxDelay:10+(Math.random()*90),
            yMaxDelay:10+(Math.random()*90),
            xAdding:true,
            yAdding:true,
            xWaited:-1,
            yWaited:-1,
            width:size,
            height:size,
            runningSpeed:(Math.random()*9)
        }
        children[children.length] = child;
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
        for(let i = 0; i<children.length; i++){
            children[i].x += charXSpeed;
        }
        for(let i = 0; i<breads.length; i++){
            breads[i].x += charXSpeed;
        }
        distance += charXSpeed;
        addChild += charXSpeed;
    } else if (lrd == "r"){
        //right
        for(let i = 0; i<children.length; i++){
            children[i].x -= charXSpeed;
        }
        for(let i = 0; i<breads.length; i++){
            breads[i].x -= charXSpeed;
        }
        distance -= charXSpeed;
        addChild -= charXSpeed;
    }


    ctx.drawImage(background, -3000+((distance)%3000), 0);

    ctx.font = "30px Arial";
    ctx.fillStyle = "#FFF";
    ctx.fillText("Breads: "+bread_count.toString(), 550, 550);

    if (lrd == ""){
        ctx.drawImage(gooseImg, character.x, character.y);
    } else {
        ctx.drawImage(gooseAngryImg, character.x, character.y);
    }

    for(let i = 0; i<children.length; i++){
        // draw collision box

        // draw
        ctx.drawImage(children[i].img, children[i].x, children[i].y, children[i].width, children[i].height);

        // move
        if (dist_rects(children[i], character) > 250){
            if (children[i].xWaited < 0){
                if (children[i].xAdding){
                    children[i].x += children[i].xAddMax/children[i].xMaxDelay;
                    children[i].xAdded += children[i].xAddMax/children[i].xMaxDelay;
                    if (children[i].xAdded > children[i].xAddMax){
                        children[i].xWaited = children[i].xMaxDelay;
                        children[i].xAdding = false;
                        children[i].xAdded = children[i].xAddMax;
                    }
                } else {
                    children[i].x -= children[i].xAddMax/children[i].xMaxDelay;
                    children[i].xAdded -= children[i].xAddMax/children[i].xMaxDelay;
                    if (children[i].xAdded < 0){
                        children[i].xWaited = children[i].xMaxDelay;
                        children[i].xAdding = true;
                        children[i].xAdded = 0;
                    }
                }
            } else {
                children[i].xWaited--
            }

            if (children[i].yWaited < 0){
                if (children[i].yAdding){
                    children[i].y += children[i].yAddMax/children[i].yMaxDelay;
                    children[i].yAdded += children[i].yAddMax/children[i].yMaxDelay;
                    if (children[i].yAdded > children[i].yAddMax){
                        children[i].yWaited = children[i].yMaxDelay;
                        children[i].yAdding = false;
                        children[i].yAdded = children[i].yAddMax;
                    }
                } else {
                    children[i].y -= children[i].yAddMax/children[i].yMaxDelay;
                    children[i].yAdded -= children[i].yAddMax/children[i].yMaxDelay;
                    if (children[i].yAdded < 0){
                        children[i].yWaited = children[i].yMaxDelay;
                        children[i].yAdding = true;
                        children[i].yAdded = 0;
                    }
                }
            } else {
                children[i].yWaited--;
            }
        } else {
            if (children[i].x < character.x){
                // move left
                children[i].x -= children[i].runningSpeed;
            } else if (children[i].x > character.x){
                // move right
                children[i].x += children[i].runningSpeed;
            }

            if (children[i].y < character.y){
                // move up
                children[i].y -= children[i].runningSpeed;
            } else if (children[i].y > character.y){
                // move down
                children[i].y += children[i].runningSpeed;
            }
        }

        // off screen?
        if(children[i].x>(cvs.width+100) || children[i].y>(cvs.height+100) || children[i].y<-100){
            children[i].x = -100;
            children[i].y = -50+(Math.random()*cvs.height);
        }

        if(collisions(character, children[i])){
            // collision detected
            children[i].runningSpeed *= 10;
            // add bread
            size = 0.5+(Math.random()*0.5);
            let bread = {
                x:children[i].x,
                y:children[i].y,
                width:100*size,
                height:55*size
            }
            breads[breads.length] = bread;
        }
        
        // done?
        // if(collisionRange(character,children[i],beakRange)){
        //     clearInterval(game);
        // }
    }

    toRemove = [];
    for (let i = 0; i < breads.length; i++){
        ctx.drawImage(breadImg, breads[i].x, breads[i].y, breads[i].width, breads[i].height);

        if(collisions(character, breads[i])){
            // collision detected
            bread_count++;
            toRemove.push(i);
        } 
    }

    breads = deleteItems(toRemove, breads);
    // if(addChild == 100*charXSpeed){
    //     addChild = 0;
    // 
    //     children[children.length] = child;
    // }
    
}


let game = setInterval(draw, 100);