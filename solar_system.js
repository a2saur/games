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
let center_mass = {
    x:cvs.width/2,
    y:cvs.height/2,
    r:50
}

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

//Get Keys
document.addEventListener("keydown", direction);

function direction(event){
    if (event.keyCode == 39){
        //right
        launch_radius += 5;
    } if (event.keyCode == 37){
        //left
        launch_radius -= 5;
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
        x:mouse_pos.x,
        y:mouse_pos.y,
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

    ctx.beginPath();
    ctx.arc(center_mass.x, center_mass.y, center_mass.r, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#000";
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#000";
    ctx.fill();
    ctx.stroke();

    for (let i=0; i<objects.length; i++){
        // objects[i].x, objects[i].y;
        
        ctx.beginPath();
        ctx.arc(objects[i].x, objects[i].y, objects[i].r, 0, 2 * Math.PI, false);
        ctx.fillStyle = objects[i].color;
        ctx.lineWidth = 5;
        ctx.strokeStyle = objects[i].color;
        ctx.fill();
        ctx.stroke();

        if (objects[i].x_speed != 0 && objects[i].y_speed != 0){
            objects[i].x += objects[i].x_speed;
            objects[i].y += objects[i].y_speed;

            dY = center_mass.y-objects[i].y;
            dX = center_mass.x-objects[i].x;
            r2 = dY**2 + dX**2;
            mo = (4/3)*Math.PI*(center_mass.r**3);
            a_vec = (G*mo)/r2;
            theta = Math.atan(dY/dX);
            ax = a_vec*Math.cos(theta);
            ay = a_vec*Math.sin(theta);


            if (objects[i].y > center_mass.y){
                if (ay > 0) ay *= -1;
            } if (objects[i].y < center_mass.y){
                if (ay < 0) ay *= -1;
            }

            if (objects[i].x > center_mass.x){
                if (ax > 0) ax *= -1;
            } if (objects[i].x < center_mass.x){
                if (ax < 0) ax *= -1;
            } 

            objects[i].x_speed += ax;
            objects[i].y_speed += ay;

            if (check_a_point(objects[i].x, objects[i].y, center_mass.x, center_mass.y, center_mass.r)) {
                center_mass.r = Math.cbrt((center_mass.r**3)+(objects[i].r**3));
                objects = remove_item(objects, i);
            }
        }
    }
    // Done?
    // if (enemy.y-player.y <= 20){
    //     clearInterval(game);
    // }
}

let game = setInterval(draw, 100);