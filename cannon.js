//Getting the Canvas
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");


// Change Variables
let GRAVITY = [0, 10];

// Defining Images
// const ghostR1 = new Image();
// ghostR1.src = "./Images/ghost-right-1.png";

// Defining Variables
let frames = 0;
let starting_point = [10, 10];
let mouse_pos = {
    x:-100,
    y:-100
}
let cannon_balls = []

//Get Keys
document.addEventListener("keydown", direction);

function direction(event){
    if (event.keyCode == 38){
        //up
        starting_point[1] -= 10;
    } if (event.keyCode == 39){
        //right
        starting_point[0] += 10;
    } if (event.keyCode == 40){
        //down
        starting_point[1] += 10;
    } if (event.keyCode == 37){
        //left
        starting_point[0] -= 10;
    }
}

document.addEventListener("mousemove", function(e) { 
    // ctx.fillStyle = "#000";
    // ctx.fillText(e.x, 10, 20);
    mouse_pos.x = e.x-cvs.getBoundingClientRect().left;
    mouse_pos.y = e.y-cvs.getBoundingClientRect().top;
});

document.addEventListener("mousedown", function(e) { 
    // ctx.fillStyle = "#000";
    // ctx.fillText(e.x, 10, 20);
    // document.write("AA")
    let ball = {
        x_speed:(mouse_pos.x-starting_point[0])/10, // in pixels per second
        y_speed:(mouse_pos.y-starting_point[1])/10,
        x:starting_point[0],
        y:starting_point[1],
        color:"#F00"
    }
    cannon_balls.push(ball);
});


// Draw
function draw(){
    ctx.fillStyle = "#FFF"
    ctx.fillRect(0, 0, 768, 576);
    
    frames++;

    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;
    ctx.moveTo(starting_point[0], starting_point[1]);
    ctx.lineTo(mouse_pos.x, mouse_pos.y);
    ctx.stroke();

    for (let i=0; i<cannon_balls.length; i++){
        cannon_balls[i].x, cannon_balls[i].y;
        
        ctx.beginPath();
        ctx.arc(cannon_balls[i].x, cannon_balls[i].y, 10, 0, 2 * Math.PI, false);
        ctx.fillStyle = cannon_balls[i].color;
        ctx.lineWidth = 5;
        ctx.strokeStyle = cannon_balls[i].color;
        ctx.fill();
        ctx.stroke();

        cannon_balls[i].x += cannon_balls[i].x_speed;
        cannon_balls[i].y += cannon_balls[i].y_speed;

        cannon_balls[i].x_speed += GRAVITY[0];
        cannon_balls[i].y_speed += GRAVITY[1];

        ctx.fillStyle = "#000";
        ctx.fillText(Math.sqrt((cannon_balls[i].x_speed**2)+(cannon_balls[i].y_speed**2)), cannon_balls[i].x, cannon_balls[i].y);

    }

    // Done?
    // if (enemy.y-player.y <= 20){
    //     clearInterval(game);
    // }
}

let game = setInterval(draw, 100);