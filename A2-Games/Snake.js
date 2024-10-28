const cvs = document.getElementById("snake"); //get canvas
const ctx = cvs.getContext("2d");

const box = 32; //define box

const foodImg = new Image();
foodImg.src = "red_square.png";

let snake = []; //create snake
snake[0] = {
  x : 9*box,
  y : 10*box
}

let food = { //create food
  x:Math.floor(Math.random()*17+1)*box,
  y:Math.floor(Math.random()*17+2)*box
}

let score = 0; //create score

function background(){
  let r = 0
  for (let y=64; y<608; y+=box){
    for (let x=32; x<576; x+=box){
      //ctx.fillStyle = (x%2 == 0)? "#0F0":"9F9";
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

document.addEventListener("keydown", direction);

function direction(event){
  if (event.keyCode == 37 && d != "r"){
    d = "l";
  } else if (event.keyCode == 38 && d != "d"){
    d = "u";
  } else if (event.keyCode == 39 && d != "l"){
    d = "r";
  } else if (event.keyCode == 40 && d != "u"){
    d = "d";
  }
}


// draw everything to canvas
function draw(){
  ctx.fillStyle = "#0B9300";
  ctx.fillRect(0, 0, 608, 640); //create ground
  background();
  for (let i = 0; i < snake.length; i++){
    ctx.fillStyle = (i==0)?"#3b70cc":"#5b90ec";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);

    ctx.strokeStyle = "red";
    ctx.strokeRect(snake[i].x, snake[i].y, box, box);
  }

  ctx.drawImage(foodImg, food.x, food.y);

  //old head position
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (snakeX == food.x && snakeY == food.y){
    score++;
    food = { //change food location
      x:Math.floor(Math.random()*17+1)*box,
      y:Math.floor(Math.random()*17+2)*box
    }
  } else {
    //remove tail
    snake.pop();
  }

  //change direction
  if(d == "l") snakeX -= box;
  if(d == "u") snakeY -= box;
  if(d == "r") snakeX += box;
  if(d == "d") snakeY += box;

  //new head
  let newHead = {
    x : snakeX,
    y : snakeY
  }

  //add head
  snake.unshift(newHead);

  ctx.fillStyle = "white";
  ctx.font = "45px Changa one";
  ctx.fillText("Score: "+score, 1*box, 1.5*box);

  //check collision
  function collision(head, array){
    for (let i = 1; i < array.length; i++){
      if (head.x == array[i].x && head.y == array[i].y){
        return true;
      }
    }
    return false;
  }

  //end game
  if(snakeX < 32 || snakeX > 544 || snakeY < 64 || snakeY > 576 || collision(newHead, snake)){
    clearInterval(game);
  }
}

let game = setInterval(draw, 100);