//Getting the Canvas
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");

function canvas_arrow(fromx, fromy, tox, toy, color="#000", lineWidth=10, label="") {
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = Math.abs(lineWidth);
    // document.write("A")

    let headlen = Math.abs(lineWidth); // length of head in pixels
    let dx = tox - fromx;
    let dy = toy - fromy;
    let angle = Math.atan2(dy, dx);
    ctx.font = "20px Arial";
    ctx.fillText(label, tox, toy);
    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
    ctx.fill();
  }

function check_a_point(a, b, x, y, r) {
    let dist_points = (a - x) * (a - x) + (b - y) * (b - y);
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

function pos_in_rect(x, y, rectx, recty, rectw, recth){
    return rectx <= x && x <= rectx + rectw && recty <= y && y <= recty + recth
}

function a(F, m){
    // document.write(F/m)
    return F/m;
}

function friction_a(F, v, m){
    // document.write(m)
    if (v < 0){
        if(v+a(F, m)>0){
            return v*-1;
        } else {
            return a(F, m);
        }
    } else if (v > 0){
        if(v+a(F, m)<0){
            return v*-1;
        } else {
            return a(F, m);
        }
    } else if (v == 0){
        return 0;
    } else {
        return a(F, m);
    }
}

// Change Variables
const G = -10;
const LINELEN = 100;
const us = 2;
const uk = 1;

// Defining Variables
let frames = 0;
let mouse_pos = {
    x:0,
    y:0
}
let block = {
    m:10,
    x:0,//384,
    v:0
}

let Fg = block.m*G;
let Fn = -Fg;
let Fs = 0;
let Fk = 0;
let F = 0;

let moving = false;


//Get Keys
document.addEventListener("keydown", direction);

function direction(event){
    // 87 w, 68 d, 83 s, 65 a
    if (event.keyCode == 39){
        //right
    } if (event.keyCode == 37){
        //left
    }
}

document.addEventListener("mousemove", function(e) { 
    // ctx.fillStyle = "#000";
    // ctx.fillText(e.x, 10, 20);
    mouse_pos.x = e.x-cvs.getBoundingClientRect().left;
    mouse_pos.y = e.y-cvs.getBoundingClientRect().top;
});

document.addEventListener("mousedown", function(e) { 
    if (pos_in_rect(mouse_pos.x, mouse_pos.y, block.x, 375, 50, 50)){
        moving = true;
    }
});

document.addEventListener("mouseup", function(e) {
    moving = false;
    F = 0;
});


// Draw
function draw(){
    ctx.fillStyle = "#FFF"
    ctx.fillRect(0, 0, 768, 576);

    ctx.fillStyle = "#555"
    ctx.fillRect(0, 400, 768, 176);
    
    frames++;

    ctx.fillStyle = "#AAA"
    ctx.fillRect(block.x, 350, 50, 50);


    if (moving){
        F = mouse_pos.x-block.x;
        canvas_arrow(block.x+25, 375, mouse_pos.x, mouse_pos.y, "#AAF"); // mouse
    }
    if (true){
        // document.write(F);
        // ctx.font = "20px Arial";
        // ctx.fillText(Math.cos((mouse_pos.x-block.x)), mouse_pos.x, mouse_pos.y);
        // ctx.fillText(Math.sqrt(((mouse_pos.x-block.x)**2)+((mouse_pos.y-375)**2)), mouse_pos.x, mouse_pos.y);

        if (block.v == 0) {
            if (F < 0) {
                // document.write("NEGATIVE")
                canvas_arrow(block.x+25, 375, (block.x+25)-LINELEN, 375, "#000", F/10, "Pulling"); // force
                block.v += a(F, block.m);
                Fs = (us*Math.abs(Fn));
                block.v += friction_a(Fs, block.v, block.m);
                canvas_arrow(block.x+25, 375, (block.x+25)+LINELEN, 375, "#000", Fs/10, "Friction"); // friction
            } else {
                canvas_arrow(block.x+25, 375, (block.x+25)+LINELEN, 375, "#000", F/10, "Pulling"); // force
                block.v += a(F, block.m);
                Fs = -1*(us*Math.abs(Fn));
                block.v += friction_a(Fs, block.v, block.m);
                // document.write(friction_a(Fs, block.v, block.m), "|", block.v, "+")
                canvas_arrow(block.x+25, 375, (block.x+25)-LINELEN, 375, "#000", Fs/10, "Friction"); // friction
            }
        } else {
            if (block.v < 0) {
                canvas_arrow(block.x+25, 375, (block.x+25)-LINELEN, 375, "#000", F/10, "Pulling"); // force
                block.v += a(F, block.m);
                Fk = (uk*Math.abs(Fn));
                block.v += friction_a(Fk, block.v, block.m);
                canvas_arrow(block.x+25, 375, (block.x+25)+LINELEN, 375, "#000", Fk/10, "Friction"); // friction
            } else {
                canvas_arrow(block.x+25, 375, (block.x+25)+LINELEN, 375, "#000", F/10, "Pulling"); // force
                block.v += a(F, block.m);
                Fk = -1*(uk*Math.abs(Fn));
                block.v += friction_a(Fk, block.v, block.m);
                canvas_arrow(block.x+25, 375, (block.x+25)-LINELEN, 375, "#000", Fk/10, "Friction"); // friction
            }
        }
    }

    canvas_arrow(block.x+25, 375, (block.x+25), 375+LINELEN, "#000", Fg/10, "Gravity"); // gravity
    canvas_arrow(block.x+25, 375, (block.x+25), 375-LINELEN, "#000", Fn/10, "Normal"); // normal

    block.x += block.v;
    ctx.font = "20px Arial";
    // ctx.fillText(block.v, 400, 400);
    // ctx.fillText(friction_a(Fs, block.v, block.m), 400, 450);
    // ctx.fillText(Fk, 400, 475);
    // ctx.fillText(F, 400, 500);
    // ctx.fillText(Fn, 400, 550);
}

let game = setInterval(draw, 100);