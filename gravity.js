//Getting the Canvas
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");

const cGRAVITY = 1;

// CLASSES
class Sprite {
    constructor (x, y, width, height, root, animation_info, gravity_affected=false, solid=true) {
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
    }

    update (frames, animation="default", reverse=false, solid_items=[]) {
        // Draw
        let num_frames = this.animation_info[animation][0];
        let frame_wait = this.animation_info[animation][1];

        this.currentImg.src = this.root+animation+"-"+this.current_frame.toString()+".png";

        ctx.drawImage(this.currentImg, this.pos.x, this.pos.y);
        
        if (reverse){
            if (frames % frame_wait == 0){
                this.current_frame--;
            }
            if (this.current_frame <= 0){
                this.current_frame = num_frames;
            }
        } else {
            if (frames % frame_wait == 0){
                this.current_frame++;
            }
            if (this.current_frame > num_frames){
                this.current_frame = 1;
            }
        }

        // Move
        let goY = true;
        let goX = true;
        let temp_y = 0;
        let temp_x = 0;
        //      check collision
        for (let x = 0; x < solid_items.length; x++){
            if (solid_items[x].pos.x < this.pos.x &&
                solid_items[x].pos.x + solid_items[x].width > this.pos.x &&
                solid_items[x].pos.y < this.pos.y+this.velocity.vY+this.height &&
                solid_items[x].height + solid_items[x].pos.y > this.pos.y+this.height) {
                // collision detected!
                goY = false;
                if (solid_items[x].pos.y > this.pos.y){
                    temp_y = solid_items[x].pos.y-this.height;
                } else {
                    temp_y = solid_items[x].pos.y+solid_items[x].height;
                }
            }
            if (solid_items[x].pos.x < this.pos.y &&
                solid_items[x].pos.x + solid_items[x].width > this.pos.y &&
                solid_items[x].pos.y < this.pos.x+this.velocity.vX+this.width &&
                solid_items[x].height + solid_items[x].pos.y > this.pos.x+this.width) {
                // collision detected!
                goX = false;
                if (solid_items[x].pos.x > this.pos.x){
                    temp_x = solid_items[x].pos.x-this.width;
                } else {
                    temp_x = solid_items[x].pos.x+solid_items[x].width;
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

        ctx.font = "30px Arial";
        ctx.fillStyle = "#000";
        ctx.fillText("Velocity: "+this.velocity.vX.toString(), 400, 400);
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

// Defining Images
const ghostR1 = new Image();
ghostR1.src = "./Images/ghost-right-1.png";

//Get Keys
document.addEventListener("keydown", direction);

function direction(event){
    if (event.keyCode == 38){
        //up
        current_anim = "jump";
        char.move(0, -10);
    } if (event.keyCode == 40){
        //down
        char.move(0, 10);
        current_anim = "idle"
    } if (event.keyCode == 37){
        //left
        current_anim = "walk";
        char.pos.x -= 20;
    } if (event.keyCode == 39){
        //right
        current_anim = "walk";
        char.pos.x += 20;
    }
}

let char = new Sprite(200, 200, 50, 50, "./Images/gravity/me-", {"default":[1, 5], "idle":[8, 3], "walk":[4, 1], "jump":[11, 1],}, true, true);
let block = new Sprite(0, 300, 700, 50, "./Images/gravity/me-", {"default":[1, 5]}, false, true);
// let char2 = new Sprite(400, 200, 50, 50, "./Images/gravity/me-", {"default":[1, 5], "idle":[8, 3], "walk":[4, 1], "jump":[11, 1],});
let frames = 0;
let current_anim = "idle"

// Draw
function draw(){
    frames++;
    ctx.fillStyle = "#ccc";
    ctx.fillRect(0, 0, 800, 500);

    ctx.drawImage(ghostR1, 0, 20);
    char.update(frames, current_anim, false, [block]);
    // document.write("Cool")
    block.update(frames);
    // char2.update(frames, "idle");
    // Done?
    // if (enemy.y-player.y <= 20){
    //     clearInterval(game);
    // }
}

let game = setInterval(draw, 100);