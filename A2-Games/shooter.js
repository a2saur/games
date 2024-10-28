function getRandomItem(array){
    return array[Math.floor(Math.random() * array.length)];
}

//-------------------------------------
const cvs = document.getElementById("shoot"); //get canvas
const ctx = cvs.getContext("2d");

const box = 32; //define box

const gunImg = new Image();
gunImg.src = "gun.jpg";

const laserImg = new Image();
laserImg.src = "laser.jpg";

const enemyImg = new Image();
enemyImg.src = "red_square.png";

let gun = {
    x:9*box,
    y:18*box
}

let lasers = [];
lasers[0] = {
    x:0,
    y:0
}
lasers[1] = {
    x:0,
    y:0
}

let enemy = {
    x:9*box,
    y:2*box
}

let shot1 = false;
let shot2 = false;
let score = 0;

function background(){
  ctx.fillStyle = "#0B9300";
  ctx.fillRect(0, 0, 608, 640); //create ground
  let r = 0
  for (let y=64; y<608; y+=box){
    for (let x=32; x<576; x+=box){
      if (((x/32)%2)-r == 0){
        ctx.fillStyle = "#4ded21";
      }else {
        ctx.fillStyle = "#8dff6e";
      }
      ctx.fillRect(x, y, box, box);
    }
    if (r==0){
      r = 1;
    }
    else{
      r = 0;
    }
  }
}



let d;
let ed;

document.addEventListener("keydown", direction);

function direction(event){
  if (event.keyCode == 37){
    d = "l";
  } else if (event.keyCode == 39){
    d = "r";
  } else if (event.keyCode == 32){
    d = "s";
  }
}


function draw(){
    background()
    ctx.drawImage(gunImg, gun.x, gun.y);
    if (shot1 == true){
        ctx.drawImage(laserImg, lasers[0].x, lasers[0].y);
        //move laser
        lasers[0].y -= box;
        //check location
        if (lasers[0].y<2*box){
            shot1 = false;
        }
    }
    if (shot2 == true){
        ctx.drawImage(laserImg, lasers[1].x, lasers[1].y);
        //move laser
        lasers[1].y -= box;
        //check location
        if (lasers[1].y<2*box){
            shot2 = false;
        }
    }
    ctx.drawImage(enemyImg, enemy.x, enemy.y);
    
    //move gun + lasers
    if(d == "l"&&gun.x>32) gun.x -= box;
    if(d == "r"&&gun.x<544) gun.x += box;
    if(d == "s"){
        if (shot1 == false){
            lasers[0] = {
                x:gun.x,
                y:gun.y
            }
            shot1 = true;
        } else if (shot2 == false){
            lasers[1] = {
                x:gun.x,
                y:gun.y
            }
            shot2 = true;
        }
    }
    d = "";

    //check laser and enemy collision
    if (lasers[0].x == enemy.x && lasers[0].y == enemy.y){
        shot1 = false;
        enemy = {
            x:9*box,
            y:2*box
        }
        score += 100;
    }
    if (lasers[1].x == enemy.x && lasers[1].y == enemy.y){
        shot2 = false;
        enemy = {
            x:9*box,
            y:2*box
        }
        score += 100;
    }

    //move enemy
    ed = getRandomItem(["d","d","l","r", "", "", "", ""]);
    if(ed == "l"&&enemy.x>32) enemy.x -= box;
    if(ed == "r"&&enemy.x<544) enemy.x += box;
    if(ed == "d"&&enemy.x<544) enemy.y += box;

    //check if enemy is off screen
    if (enemy.y >= 608){
        enemy.y = 2*box;
    }

    //check if enemy collided with player
    if (gun.x == enemy.x && gun.y == enemy.y){
        clearInterval(game);
        ctx.fillStyle = "black";
        ctx.font = "45px Changa one";
        ctx.fillText("YOU LOSE!!!", 6*box, 10*box);
    }

    //score
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText("Score: "+score, 1*box, 1.5*box);
}

let game = setInterval(draw, 100);