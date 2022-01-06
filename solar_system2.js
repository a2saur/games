//Getting the Canvas
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");

function check_a_point(a, b, x, y, r) {
    var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
    r *= r;
    if (dist_points < r) {
        return true;
    }
    return false;
}

function remove_item(list, index){
    let new_list = [];
    for (let i = 0; i < list.length; i++){
        if (i != index){
            new_list.push(list[i]);
        }
    }
    return new_list
}

// Change Variables
let GRAVITY = [0, 10];
const G = 6.672*(10**-2);//6.672*(10**-11);

// Defining Images
// const ghostR1 = new Image();
// ghostR1.src = "./Images/ghost-right-1.png";

// Defining Variables
let frames = 0;
let starting_point = [-100, -100];
let mouse_pos = {
    x:-100,
    y:-100
}
let objects = [];
let launch_radius = 3;
let zoom = 1;

//Get Keys
document.addEventListener("keydown", direction);

function direction(event){
    // 87 w, 68 d, 83 s, 65 a
    if (event.keyCode == 39){
        //right
        launch_radius += 5;
    } if (event.keyCode == 37){
        //left
        launch_radius -= 5;
    } if (event.keyCode == 189){
        //minus
        zoom += 0.1;
    } if (event.keyCode == 187){
        //plus
        zoom -= 0.1;
    } if (event.keyCode == 65){
        //a
        for (let i=0; i<objects.length; i++){
            objects[i].x -= 25;
        }
    } if (event.keyCode == 68){
        //d
        for (let i=0; i<objects.length; i++){
            objects[i].x += 25;
        }
    } if (event.keyCode == 87){
        //w
        for (let i=0; i<objects.length; i++){
            objects[i].y -= 25;
        }
    } if (event.keyCode == 83){
        //s
        for (let i=0; i<objects.length; i++){
            objects[i].y += 25;
        }
    }
}

document.addEventListener("mousemove", function(e) { 
    // ctx.fillStyle = "#000";
    // ctx.fillText(e.x, 10, 20);
    mouse_pos.x = e.x-cvs.getBoundingClientRect().left;
    mouse_pos.y = e.y-cvs.getBoundingClientRect().top;
});

document.addEventListener("mousedown", function(e) { 
    let ball = {
        x_speed:0,
        y_speed:0,
        x:mouse_pos.x*zoom,
        y:mouse_pos.y*zoom,
        color:"#970",
        r:launch_radius,
    }
    objects.push(ball);
    starting_point[0] = mouse_pos.x;
    starting_point[1] = mouse_pos.y;
});

document.addEventListener("mouseup", function(e) { 
    objects[objects.length-1].x_speed = (mouse_pos.x-starting_point[0])/10; // in pixels per second
    objects[objects.length-1].y_speed = (mouse_pos.y-starting_point[1])/10;
    starting_point = [-100, -100];
});


// Draw
function draw(){
    ctx.fillStyle = "#FFF"
    ctx.fillRect(0, 0, 768, 576);
    
    frames++;

    if (starting_point[0] != -100 && starting_point[1] != -100){
        ctx.beginPath();
        ctx.fillStyle = "#000";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1;
        ctx.moveTo(starting_point[0], starting_point[1]);
        ctx.lineTo(mouse_pos.x, mouse_pos.y);
        ctx.stroke();
    }

    for (let i=0; i<objects.length; i++){
        // objects[i].x, objects[i].y;
        ctx.beginPath();
        ctx.arc(objects[i].x/zoom, objects[i].y/zoom, objects[i].r/zoom, 0, 2 * Math.PI, false);
        ctx.fillStyle = objects[i].color;
        ctx.lineWidth = 5/zoom;
        ctx.strokeStyle = objects[i].color;
        ctx.fill();
        ctx.stroke();
        if (objects[i].x_speed == 0 && objects[i].y_speed == 0 && i == objects.length-1){
        } else {
            objects[i].x += objects[i].x_speed;
            objects[i].y += objects[i].y_speed;

            for (let j=0; j<objects.length; j++){
                if (j != i){
                    dY = objects[j].y-objects[i].y;
                    dX = objects[j].x-objects[i].x;
                    r2 = dY**2 + dX**2;
                    mo = (4/3)*Math.PI*(objects[j].r**3);
                    a_vec = (G*mo)/r2;
                    theta = Math.atan(dY/dX);
                    ax = a_vec*Math.cos(theta);
                    ay = a_vec*Math.sin(theta);

                    if (objects[i].y > objects[j].y){
                        if (ay > 0) ay *= -1;
                    } if (objects[i].y < objects[j].y){
                        if (ay < 0) ay *= -1;
                    }

                    if (objects[i].x > objects[j].x){
                        if (ax > 0) ax *= -1;
                    } if (objects[i].x < objects[j].x){
                        if (ax < 0) ax *= -1;
                    } 

                    objects[i].x_speed += ax;
                    objects[i].y_speed += ay;

                    if (check_a_point(objects[i].x, objects[i].y, objects[j].x, objects[j].y, objects[j].r)) {
                        objects[j].r = Math.cbrt((objects[j].r**3)+(objects[i].r**3));
                        objects = remove_item(objects, i);
                    }
                }
            }
        }
    }
    // Done?
    // if (enemy.y-player.y <= 20){
    //     clearInterval(game);
    // }
}

let game = setInterval(draw, 100);