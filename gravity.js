//Getting the Canvas
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");

const cGRAVITY = 3;

// CLASSES
class Sprite {
    constructor (x, y, width, height, root, animation_info, gravity_affected=false, solid=true, friction=0) {
        this.root = root;
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
        // Draw
        let num_frames = this.animation_info[animation][0];
        let frame_wait = this.animation_info[animation][1];
        let repeat = this.animation_info[animation][2];

        this.currentImg.src = this.root+animation+"-"+this.current_frame.toString()+".png";
        ctx.strokeStyle = '#00f';
        ctx.lineWidth = 5;
        ctx.strokeRect(this.pos.x+baseX, this.pos.y+baseY, this.width, this.height);
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
            // if (solid_items[x].pos.x < this.pos.x &&
            //     solid_items[x].pos.x + solid_items[x].width > this.pos.x &&
            //     solid_items[x].pos.y < this.pos.y+this.velocity.vY+this.height &&
            //     solid_items[x].height + solid_items[x].pos.y > this.pos.y+this.height) {
            // if (solid_items[x].pos.y < this.pos.y &&
            //     solid_items[x].pos.y + solid_items[x].height > this.pos.y &&
            //     solid_items[x].pos.x < this.pos.x+this.velocity.vX+this.width &&
            //     solid_items[x].height + solid_items[x].pos.x > this.pos.x+this.width) {
            if (solid_items[x].collides_with({pos:{x:this.pos.x, y:this.pos.y}, width:this.velocity.vX+this.width, height:this.height})){
                // collision detected!
                goX = false;
                if (solid_items[x].pos.x > this.pos.x){
                    temp_x = solid_items[x].pos.x-this.width;
                } else {
                    temp_x = solid_items[x].pos.x+solid_items[x].width;
                }
            }
            if (solid_items[x].collides_with({pos:{x:this.pos.x, y:this.pos.y}, width:this.width, height:this.velocity.vY+this.height})){
                // collision detected!
                goY = false;
                if (solid_items[x].pos.y > this.pos.y){
                    // up
                    temp_y = solid_items[x].pos.y-this.height;
                    this.grounded = true;
                    this.acted_friction = solid_items[x].friction
                } else {
                    temp_y = solid_items[x].pos.y+solid_items[x].height;
                }
            }
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

        if (this.velocity.vX > 25){
            this.velocity.vX = 25;
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
    } if (event.keyCode == 40){
        //down
        // current_anim = "default"
        // if (true){//char.grounded){
        //     char.move(0, 30);
        // }
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

let char = new Sprite(200, 200, 50, 50, "./Images/gravity/me-", {"default":[1, 5, false], "idle":[8, 3, true], "walk":[4, 1, true], "jump":[11, 1, false],}, true, true);

// Blocks
let maps = [
    [
        "       -              ",
        "       -              ",
        "          -           ",
        "          -           ",
        "          -           ",
        "       -              ",
        "       -              ",
        "       -              ",
        " ---------========--- ",
    ]
]

let info = {
    "-":["./Images/gravity/dirt-", {"default":[1, 5, true]}, 100],
    "=":["./Images/gravity/ice-", {"default":[1, 5, true]}, 1],
}

let block_map = [];

let row;
let value;
for (let i=0; i < maps.length; i++){
    for (let x=0; x < maps[i].length; x++){
        row = maps[i][x];
        for (let y=0; y < row.length; y++){
            value = row.charAt(y);
            if (value != " "){
                let block = new Sprite((y*50), (x*50), 50, 50, info[value][0], info[value][1], false, true, info[value][2]);
                block_map.push(block)
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

// Draw
function draw(){
    frames++;
    ctx.fillStyle = "#ccc";
    ctx.fillRect(0, 0, 800, 500);

    offsetX = (cvs.width/2)-char.pos.x;
    offsetY = (cvs.height/2)-char.pos.y;

    char.update(frames, current_anim, false, block_map, offsetX, offsetY);
    if (char.grounded){
        if (jump_counter > 0){
            jump_counter = 0;
            current_anim = "idle";
        }
    }

    for (let x=0; x<block_map.length; x++){
        block_map[x].update(frames, "default", false, [], baseX=offsetX, baseY=offsetY);
    }

    ctx.font = "30px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText(char.pos.x.toString()+", "+char.pos.y.toString(), 200, 300);

    char.move(dir_ref[walk][0], dir_ref[walk][1]);
    // char2.update(frames, "idle");
    // Done?
    // if (enemy.y-player.y <= 20){
    //     clearInterval(game);
    // }
}

let game = setInterval(draw, 100);