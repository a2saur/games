//Getting the Canvas
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");

const cGRAVITY = 3;

function plus_reverse(list){
    for (let x=list.length-1; x >= 0; x--){
        list.push(list[x])
    }
    return list
}

function remove(list, index){
    let new_list = [];
    for (let x=0; x<list.length; x++){
        if (x != index){
            new_list.push(list[x])
        }
    }
    return new_list
}

// CLASSES
class Sprite {
    constructor (x, y, width, height, root, animation_info, gravity_affected=false, solid=false, friction=0, health=-100) {
        this.root = root;
        this.health = health;
        this.animation_info = animation_info;
        this.width = width;
        this.height = height;
        this.pos = {
            x:x,
            y:y
        }

        this.gravity_affected = gravity_affected
        this.solid = solid;
        
        this.currentImg = new Image();
        this.currentImg.src = root+"default-1.png";

        this.current_frame = 1;
        this.velocity = {
            vX:0, 
            vY:0
        }

        this.friction = friction;
        this.acted_friction = 0;
        this.grounded = false;
    }

    update (frames, animation="default", reverse=false, solid_items=[], baseX=0, baseY=0) {
        if (this.health <= 0 && this.health != -100){
            return;
        } else {
            // Draw
            let num_frames = this.animation_info[animation][0];
            let frame_wait = this.animation_info[animation][1];
            let repeat = this.animation_info[animation][2];

            this.currentImg.src = this.root+animation+"-"+this.current_frame.toString()+".png";
            // ctx.strokeStyle = '#00f';
            // ctx.lineWidth = 5;
            // ctx.strokeRect(this.pos.x+baseX, this.pos.y+baseY, this.width, this.height);
            ctx.drawImage(this.currentImg, this.pos.x+baseX, this.pos.y+baseY);
            
            if (reverse){
                if (frames % frame_wait == 0){
                    this.current_frame--;
                }
                if (this.current_frame <= 0){
                    if (repeat){
                        this.current_frame = num_frames;
                    } else {
                        this.current_frame = 1
                    }
                }
            } else {
                if (frames % frame_wait == 0){
                    this.current_frame++;
                }
                if (this.current_frame > num_frames){
                    if (repeat){
                        this.current_frame = 1;
                    } else {
                        this.current_frame = num_frames
                    }
                }
            }

            // Move
            let goY = true;
            let goX = true;
            let temp_y = 0;
            let temp_x = 0;
            this.acted_friction = 0;
            this.grounded = false;
            //      check collision
            for (let x = 0; x < solid_items.length; x++){
                if (this.velocity.vX > 0){
                    if (solid_items[x].collides_with({pos:{x:this.pos.x, y:this.pos.y}, width:this.velocity.vX+this.width, height:this.height})){
                        // collision detected!
                        goX = false;
                        // right
                        temp_x = solid_items[x].pos.x-this.width;
                    }
                } else if (this.velocity.vX < 0){
                    if (solid_items[x].collides_with({pos:{x:this.pos.x+(this.velocity.vX), y:this.pos.y}, width:Math.abs(this.velocity.vX), height:this.height})){
                        // collision detected!
                        goX = false;
                        // right
                        temp_x = solid_items[x].pos.x+solid_items[x].width;
                    }
                }

                //vertical

                if (this.velocity.vY > 0){
                    // going down
                    if (solid_items[x].collides_with({pos:{x:this.pos.x, y:this.pos.y}, width:this.width, height:this.velocity.vY+this.height})){
                        // collision detected!
                        goY = false;
                        temp_y = solid_items[x].pos.y-this.height;
                        this.grounded = true;
                        this.acted_friction = solid_items[x].friction
                    }
                } else if (this.velocity.vY < 0){
                    // going up
                    if (solid_items[x].collides_with({pos:{x:this.pos.x, y:this.pos.y+(this.velocity.vY)}, width:this.width, height:Math.abs((this.velocity.vY))})){
                        // collision detected!
                        goY = false;
                        temp_y = solid_items[x].pos.y+solid_items[x].height;
                    }
                }

                // if (solid_items[x].collides_with({pos:{x:this.pos.x, y:this.pos.y}, width:this.width, height:this.velocity.vY+this.height})){
                //     // collision detected!
                //     goY = false;
                //     if (solid_items[x].pos.y > this.pos.y){
                //         // up
                //         temp_y = solid_items[x].pos.y-this.height;
                //         this.grounded = true;
                //         this.acted_friction = solid_items[x].friction
                //     } else {
                //         temp_y = solid_items[x].pos.y+solid_items[x].height;
                //     }
                // }
            }
            if (goY){
                this.pos.y += this.velocity.vY;
            } else {
                this.pos.y = temp_y;
                this.velocity.vY = 0;
            }

            if (goX){
                this.pos.x += this.velocity.vX;
            } else {
                this.pos.x = temp_x;
                this.velocity.vX = 0;
            }

            if (this.gravity_affected && goX && goY){
                this.velocity.vY += cGRAVITY;
            }
            if (this.velocity.vX < 0) {
                if (this.velocity.vX+this.acted_friction > 0) {
                    this.velocity.vX = 0;
                } else {
                    this.velocity.vX += this.acted_friction
                }
            } else if (this.velocity.vX > 0) {
                if (this.velocity.vX-this.acted_friction < 0) {
                    this.velocity.vX = 0;
                } else {
                    this.velocity.vX -= this.acted_friction
                }
            }

            if (this.velocity.vX > 10){
                this.velocity.vX = 10;
            } else if (this.velocity.vX < -5){
                this.velocity.vX = -5;
            }
        }
    }

    collides_with(sprite2){
        if (this.pos.x < sprite2.pos.x + sprite2.width &&
            this.pos.x + this.width > sprite2.pos.x &&
            this.pos.y < sprite2.pos.y + sprite2.height &&
            this.height + this.pos.y > sprite2.pos.y) {
                return true;
        } else {
            return false;
        }
    }

    touching(sprite2, buffer=5){
        if (Math.abs(this.pos.y-sprite2.pos.y) < this.height){
            if (Math.abs((this.pos.x+this.width)-sprite2.pos.x) < buffer) {
                // left
                return "l";
            } else if (Math.abs((sprite2.pos.x+sprite2.width)-this.pos.x) < buffer) {
                // right
                return "r";
            }
        } else if (Math.abs(this.pos.x-sprite2.pos.x) < this.width){
            if (Math.abs((this.pos.y+this.height)-sprite2.pos.y) < buffer) {
                // up
                return "u";
            } else if (Math.abs((sprite2.pos.y+sprite2.height)-this.pos.y) < buffer) {
                // down
                return "d";
            }
        }
    }

    move(vX, vY){
        this.velocity.vX += vX;
        this.velocity.vY += vY;
    }

    hit(dangers, hp=1){
        if (this.health <= 0 && this.health != -100){
            return -1;
        } else {
            for (let x=0; x<dangers.length; x++){
                if (dangers[x].health <= 0 && dangers[x].health != -100) {
                    //
                } else if (this.collides_with(dangers[x])){
                    this.health -= hp;
                    return x;
                }
            }
            return -1;
        }
    }
}

//Get Keys
document.addEventListener("keydown", function(event){
    if (event.keyCode == 38){
        //up
        current_anim = "jump";
        if (jump_counter < 1){//char.grounded){
            jump_counter++;
            char.move(0, -30);
        }
    } if (event.keyCode == 37){
        //left
        if (jump_counter < 1){
            current_anim = "walk";
        }
        walk = "l";
        // char.move(-10, 0);
        // char.pos.x -= 25;
    } if (event.keyCode == 39){
        //right
        if (jump_counter < 1){
            current_anim = "walk";
        }
        // char.move(10, 0);
        // char.pos.x += 25;
        walk = "r";
    } if (event.keyCode == 13){
        clearInterval(opening);
        let game = setInterval(draw, 100);
    } if (event.keyCode == 49){
        // 1
        if (moon_fire.length <= 2) {
            let fire = new Sprite(char.pos.x, char.pos.y, 50, 50, "./Images/gravity/moon-power-", {"default":[1, 5, true]})
            fire.move(15, 0);
            moon_fire.push(fire);
        }
    } if (event.keyCode == 50){
        // 2
        if (sun_fire.length <= 2) {
            let fire = new Sprite(char.pos.x, char.pos.y, 50, 50, "./Images/gravity/sun-power-", {"default":[1, 5, true]})
            fire.move(15, 0);
            sun_fire.push(fire);
        }
    } if (event.keyCode == 51){
        // 3
        if (star_fire.length <= 2) {
            let fire = new Sprite(char.pos.x, char.pos.y, 50, 50, "./Images/gravity/star-power-", {"default":[1, 5, true]})
            fire.move(15, 0);
            star_fire.push(fire);
        }
    }
});

document.addEventListener("keyup", function(event){
    if (event.keyCode == 37){
        //left
        if (jump_counter < 1){
            current_anim = "idle";
        }
        walk = " ";
        // char.move(-10, 0);
        // char.pos.x -= 25;
    } if (event.keyCode == 39){
        //right
        if (jump_counter < 1){
            current_anim = "idle";
        }
        // char.move(10, 0);
        // char.pos.x += 25;
        walk = " ";
    }
});

let char = new Sprite(200, 200, 50, 50, "./Images/gravity/me-", {"default":[1, 5, false], "idle":[8, 3, true], "walk":[4, 1, true], "jump":[11, 1, false],}, true, true, 0, 10);

// Blocks
let maps = [
    [
        "       -              ",
        "       -              ",
        "       -  -           ",
        "       -  -           ",
        "      s-  -        x  ",
        "       -              ",
        "       -              ",
        "       -        m     ",
        " ---------========--- ",
    ]
]

let info = {
    "-":["./Images/gravity/dirt-", {"default":[1, 5, true]}, 100, "block"],
    "=":["./Images/gravity/ice-", {"default":[1, 5, true]}, 1, "block"],
    "m":["./Images/gravity/moon-enemy-", {"default":[1, 5, true]}, 1, "enemy"],
    "s":["./Images/gravity/sun-enemy-", {"default":[1, 5, true]}, 3, "enemy"],
    "x":["./Images/gravity/star-enemy-", {"default":[1, 5, true]}, 6, "enemy"],
}

let block_map = [];
let enemy_map = {
    "m":[],
    "s":[],
    "x":[],
};
let enemy_fire = [];
let moon_fire = [];
let sun_fire = [];
let star_fire = [];

let row;
let value;
for (let i=0; i < maps.length; i++){
    for (let x=0; x < maps[i].length; x++){
        row = maps[i][x];
        for (let y=0; y < row.length; y++){
            value = row.charAt(y);
            if (value != " "){
                if (info[value][3] == "block"){
                    let block = new Sprite((y*50), (x*50), 50, 50, info[value][0], info[value][1], false, true, info[value][2]);
                    block_map.push(block)
                } else if (info[value][3] == "enemy"){
                    let enemy = new Sprite((y*50), (x*50), 50, 50, info[value][0], info[value][1], true, true, 0, info[value][2]);
                    enemy_map[value].push(enemy);
                }
            }
        }
    }
}
// let char2 = new Sprite(400, 200, 50, 50, "./Images/gravity/me-", {"default":[1, 5], "idle":[8, 3], "walk":[4, 1], "jump":[11, 1],});
let frames = 0;
let current_anim = "idle"
let jump_counter = 0;
let walk = "";
let dir_ref = {
    "l":[-5, 0],
    "r":[5, 0],
    "":[0, 0]
}


// starting stuff
const background1 = new Image();
background1.src = "./Images/gravity/opening-1.png";

const background2 = new Image();
background2.src = "./Images/gravity/opening-2.png";

const background3 = new Image();
background3.src = "./Images/gravity/opening-3.png";

const background4 = new Image();
background4.src = "./Images/gravity/opening-4.png";

const background5 = new Image();
background5.src = "./Images/gravity/opening-5.png";

const background6 = new Image();
background6.src = "./Images/gravity/opening-6.png";

const background7 = new Image();
background7.src = "./Images/gravity/opening-7.png";

const background8 = new Image();
background8.src = "./Images/gravity/opening-8.png";

const background9 = new Image();
background9.src = "./Images/gravity/opening-9.png";

let colors = plus_reverse(["#FFF", "#EEE", "#CCC", "#AAB", "#88A", "#669", "#448", "#226", "#005",]);
let opening_images = plus_reverse([background1, background2, background3, background4, background5, background6, background7, background8, background9]);

let temp_list;
let temp;

function start(){
    frames++;

    ctx.fillStyle = "#005";
    ctx.fillRect(0, 0, 800, 500);

    ctx.drawImage(opening_images[frames%opening_images.length], 0, 0)

    ctx.font = "30px Arial";
    ctx.fillStyle = colors[frames%colors.length];
    ctx.fillText("-Press enter to start-", 275, 250);
}
// end starting stuff
// Draw
function draw(){
    frames++;
    ctx.fillStyle = "#ccc";
    ctx.fillRect(0, 0, 800, 500);

    offsetX = (cvs.width/2)-char.pos.x;
    offsetY = (cvs.height/2)-char.pos.y;

    char.update(frames, current_anim, false, block_map, offsetX, offsetY);
    char.hit(enemy_fire);
    if (char.grounded){
        if (jump_counter > 0){
            jump_counter = 0;
            current_anim = "idle";
        }
    }

    //

    for (let x=0; x<block_map.length; x++){
        block_map[x].update(frames, "default", false, [], baseX=offsetX, baseY=offsetY);
    }

    //
    temp = [];
    for (let x=0; x<moon_fire.length; x++){
        moon_fire[x].update(frames, "default", false, [], baseX=offsetX, baseY=offsetY);
        // document.write(Math.abs(moon_fire[x].pos.x-char.pos.x).toString()+" | ")
        if (Math.abs(moon_fire[x].pos.x-char.pos.x) > 250){
            // alert(x)
            temp.push(x)
        }
    }
    for (let x=0; x<temp.length; x++){
        moon_fire = remove(moon_fire, temp[x]);
    }

    temp = [];
    for (let x=0; x<sun_fire.length; x++){
        sun_fire[x].update(frames, "default", false, [], baseX=offsetX, baseY=offsetY);
        if (Math.abs(sun_fire[x].pos.x-char.pos.x) > 250){
            temp.push(x)
        }
    }
    for (let x=0; x<temp.length; x++){
        sun_fire = remove(sun_fire, temp[x]);
    }

    temp = [];
    for (let x=0; x<star_fire.length; x++){
        star_fire[x].update(frames, "default", false, [], baseX=offsetX, baseY=offsetY);
        if (Math.abs(star_fire[x].pos.x-char.pos.x) > 250){
            temp.push(x)
        }
    }
    for (let x=0; x<temp.length; x++){
        star_fire = remove(star_fire, temp[x]);
    }


    //

    temp_list = [];
    for (let x=0; x<enemy_map["m"].length; x++){
        enemy_map["m"][x].update(frames, "default", false, block_map, baseX=offsetX, baseY=offsetY);
        temp = enemy_map["m"][x].hit(moon_fire);
        // document.write(temp);
        if (Number(temp) == -1){
            //
        } else {
            // document.write("A")
            moon_fire[temp].health = -1;
            temp_list.push(temp)
        }
    }
    for (let x=0; x<temp_list.length; x++){
        moon_fire = remove(moon_fire, temp_list[x]);
    }

    temp_list = [];
    for (let x=0; x<enemy_map["s"].length; x++){
        enemy_map["s"][x].update(frames, "default", false, block_map, baseX=offsetX, baseY=offsetY);
        temp = enemy_map["s"][x].hit(sun_fire);
        // document.write(temp);
        if (Number(temp) == -1){
            //
        } else {
            sun_fire[temp].health = -1;
            temp_list.push(temp)
        }
    }
    for (let x=0; x<temp_list.length; x++){
        sun_fire = remove(sun_fire, temp_list[x]);
    }

    temp_list = [];
    for (let x=0; x<enemy_map["x"].length; x++){
        enemy_map["x"][x].update(frames, "default", false, block_map, baseX=offsetX, baseY=offsetY);
        temp = enemy_map["x"][x].hit(star_fire);
        // document.write(temp);
        if (Number(temp) == -1){
            //
        } else {
            // document.write("A")
            star_fire[temp].health = -1;
            temp_list.push(temp)
        }
    }
    for (let x=0; x<temp_list.length; x++){
        star_fire = remove(star_fire, temp_list[x]);
    }

    // ctx.font = "30px Arial";
    // ctx.fillStyle = "#000";
    // ctx.fillText(char.pos.x.toString()+", "+char.pos.y.toString(), 200, 300);

    char.move(dir_ref[walk][0], dir_ref[walk][1]);
    // Done?
    // if (enemy.y-player.y <= 20){
    //     clearInterval(game);
    // }
}

let opening = setInterval(start, 100);
// let game = setInterval(draw, 100);