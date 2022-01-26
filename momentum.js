//Getting the Canvas
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");

function randInt(min, max){
    return min+Math.floor(Math.random() * (max-min));
}

function random_color(){
    let colors = Array.from("0123456789ABCDEF")
    let final_color = "#";
    for(let i=0; i<6; i++){
        c = colors[randInt(0, colors.length)];
        final_color += c;
    }
    return final_color;
}

function merge_colors(c1, c2, m1=1, m2=1){
    let color_numbers = {
        "0":0,
        "1":1,
        "2":2,
        "3":3,
        "4":4,
        "5":5,
        "6":6,
        "7":7,
        "8":8,
        "9":9,
        "A":10,
        "B":11,
        "C":12,
        "D":13,
        "E":14,
        "F":15,
    }
    let colors = Array.from("0123456789ABCDEF")
    let final_color = "#";
    for(let i=0; i<6; i++){
        final_color += colors[parseInt(((color_numbers[c1.charAt(i+1)]*m1)+(color_numbers[c2.charAt(i+1)]*m2))/(m1+m2))]
    }
    return final_color
}

function remove_items(list, indexes){
    new_list = [];
    for (let a=0; a<list.length; a++){
        if (indexes.includes(a)){
            //
        } else {
            new_list.push(list[a]);
        }
    }
    return new_list;
}


// function circle_intersect(rect1, rect2){
//     if (rect1.xx-rect1.r < rect2.xx-rect2.r + rect2.r &&
//         rect1.xx-rect1.r + rect1.r > rect2.xx-rect2.r &&
//         rect1.xy-rect1.r < rect2.xy + rect2.r &&
//         rect1.xy-rect1.r + rect1.r > rect2.xy-rect2.r) {
//         // collision detected!
//         return true;
//     } else {
//         return false;
//     }
// }

function circle_intersect(obj1, obj2) {
    a = obj1.xx
    b = obj1.xy
    x = obj2.xx
    y = obj2.xy
    r = obj1.r+obj2.r
    var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
    r *= r;
    if (dist_points < r) {
        return true;
    }
    return false;
}


// Change Variables
const NUM_BLOBS = 100;
const MAX_SPEED = 25;
const MIN_MAX_RADIUS = [3, 25];

// Defining Images
// const ghostR1 = new Image();
// ghostR1.src = "./Images/ghost-right-1.png";

// Defining Variables
let frames = 0;
// let color = "#000";
let blobs = [];
for (let i=0; i<NUM_BLOBS; i++){
    let blob = {
        xx:randInt(0, cvs.width),
        xy:randInt(0, cvs.height),
        vx:randInt(-MAX_SPEED, MAX_SPEED), //pixels
        vy:randInt(-MAX_SPEED, MAX_SPEED), //pixels
        r:randInt(MIN_MAX_RADIUS[0], MIN_MAX_RADIUS[1]),
        color:random_color()
    }
    blob.m = (4/3)*Math.PI*(blob.r**3)
    blobs.push(blob);
}

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
        center_mass.x -= 25;
        for (let i=0; i<objects.length; i++){
            objects[i].x -= 25;
        }
    } if (event.keyCode == 68){
        //d
        center_mass.x += 25;
        for (let i=0; i<objects.length; i++){
            objects[i].x += 25;
        }
    } if (event.keyCode == 87){
        //w
        center_mass.y -= 25;
        for (let i=0; i<objects.length; i++){
            objects[i].y -= 25;
        }
    } if (event.keyCode == 83){
        //s
        center_mass.y += 25;
        for (let i=0; i<objects.length; i++){
            objects[i].y += 25;
        }
    }
}

// document.addEventListener("mousemove", function(e) { 
//     // ctx.fillStyle = "#000";
//     // ctx.fillText(e.x, 10, 20);
//     mouse_pos.x = e.x-cvs.getBoundingClientRect().left;
//     mouse_pos.y = e.y-cvs.getBoundingClientRect().top;
// });

// document.addEventListener("mousedown", function(e) { 
//     let ball = {
//         x_speed:0,
//         y_speed:0,
//         x:mouse_pos.x*zoom,
//         y:mouse_pos.y*zoom,
//         color:"#970",
//         r:launch_radius,
//     }
//     objects.push(ball);
//     starting_point[0] = mouse_pos.x;
//     starting_point[1] = mouse_pos.y;
// });

// document.addEventListener("mouseup", function(e) { 
//     objects[objects.length-1].x_speed = (mouse_pos.x-starting_point[0])/10; // in pixels per second
//     objects[objects.length-1].y_speed = (mouse_pos.y-starting_point[1])/10;
//     starting_point = [-100, -100];
// });


// Draw

function draw(){
    frames++;
    // Done?
    // if (enemy.y-player.y <= 20){
    //     clearInterval(game);
    // }

    if (frames%1==0){
        ctx.fillStyle = "#FFF"
        ctx.fillRect(0, 0, 768, 576);
        for(let i=0; i<blobs.length; i++){
            ctx.beginPath();
            ctx.arc(blobs[i].xx, blobs[i].xy, blobs[i].r, 0, 2 * Math.PI, false);
            ctx.fillStyle = blobs[i].color;
            ctx.lineWidth = 3;
            ctx.strokeStyle = "#000";
            ctx.fill();
            ctx.stroke();

            blobs[i].xx += blobs[i].vx;
            // document.write("AAa")
            blobs[i].xy += blobs[i].vy;


            if (blobs[i].xx <= 0){
                if (blobs[i].vx < 0){
                    blobs[i].vx *= -1;
                }
            } else if (blobs[i].xx >= cvs.width){
                if (blobs[i].vx > 0){
                    blobs[i].vx *= -1;
                }
            }

            if (blobs[i].xy <= 0){
                if (blobs[i].vy < 0){
                    blobs[i].vy *= -1;
                }
            } else if (blobs[i].xy >= cvs.width){
                if (blobs[i].vy > 0){
                    blobs[i].vy *= -1;
                }
            }

            for(let i2=0; i2<blobs.length; i2++){
                if (circle_intersect(blobs[i], blobs[i2]) && i != i2){
                    // color = "#0F0";
                    let blob = {
                        xx:(blobs[i].xx+blobs[i2].xx)/2,
                        xy:(blobs[i].xy+blobs[i2].xy)/2,
                        vx:((blobs[i].m*blobs[i].vx)+(blobs[i2].m*blobs[i2].vx))/(blobs[i].m+blobs[i2].m),
                        vy:((blobs[i].m*blobs[i].vy)+(blobs[i2].m*blobs[i2].vy))/(blobs[i].m+blobs[i2].m),
                        r:Math.cbrt(((blobs[i].m+blobs[i2].m)*(3/4))/Math.PI),
                        m:(blobs[i].m+blobs[i2].m),
                        color:merge_colors(blobs[i].color, blobs[i2].color, parseInt(blobs[i].m/500), parseInt(blobs[i2].m/500))
                    }
                    // document.write(blobs[i].m)//merge_colors(blobs[i].color, blobs[i2].color))
                    blobs = remove_items(blobs, [i, i2]);
                    blobs.push(blob);
                    // document.write(frames.toString()+": "+i.toString()+", "+i2.toString()+"|")
                    break;
                }
            }
            // document.write("AA")
        }
    }
}

let game = setInterval(draw, 100);