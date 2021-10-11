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

    update (frames, animation="default", reverse=false, solid_items=[]) {
        // Draw
        let num_frames = this.animation_info[animation][0];
        let frame_wait = this.animation_info[animation][1];

        this.currentImg.src = this.root+animation+"-"+this.current_frame.toString()+".png";
        ctx.strokeStyle = '#00f';
        ctx.lineWidth = 5;
        ctx.strokeRect(this.pos.x, this.pos.y, this.width, this.height);
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
        this.acted_friction = 0;
        this.grounded = false;
        //      check collision
        for (let x = 0; x < solid_items.length; x++){
            // if (solid_items[x].pos.x < this.pos.x &&
            //     solid_items[x].pos.x + solid_items[x].width > this.pos.x &&
            //     solid_items[x].pos.y < this.pos.y+this.velocity.vY+this.height &&
            //     solid_items[x].height + solid_items[x].pos.y > this.pos.y+this.height) {
            if (solid_items[x].collides_with({pos:{x:this.pos.x, y:this.pos.y}, width:this.width, height:this.velocity.vY+this.height})){
                // collision detected!
                goY = false;
                if (solid_items[x].pos.y > this.pos.y){
                    temp_y = solid_items[x].pos.y-this.height;
                } else {
                    temp_y = solid_items[x].pos.y+solid_items[x].height;
                }
                this.acted_friction = solid_items[x].friction
                this.grounded = true;
            }
            // if (solid_items[x].pos.y < this.pos.y &&
            //     solid_items[x].pos.y + solid_items[x].height > this.pos.y &&
            //     solid_items[x].pos.x < this.pos.x+this.velocity.vX+this.width &&
            //     solid_items[x].height + solid_items[x].pos.x > this.pos.x+this.width) {
            if (solid_items[x].collides_with({pos:{x:this.pos.x, y:this.pos.y}, width:this.velocity.vX+(this.width/2), height:this.height})){
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
document.addEventListener("keydown", direction); //keydown keypress keyup

function direction(event){
    if (event.keyCode == 38){
        //up
        current_anim = "default";
        if (char.grounded){
            char.move(0, -25);
        }
    } if (event.keyCode == 40){
        //down
        current_anim = "default"
        if (char.grounded){
            char.move(0, 25);
        }
    } if (event.keyCode == 37){
        //left
        current_anim = "default";
        char.move(-10, 0);
        // char.pos.x -= 25;
    } if (event.keyCode == 39){
        //right
        current_anim = "default";
        char.move(10, 0);
        // char.pos.x += 25;
    }
}

let char = new Sprite(200, 200, 50, 50, "./Images/gravity/me-", {"default":[1, 5], "idle":[8, 3], "walk":[4, 1], "jump":[11, 1],}, true, true);
let block1 = new Sprite(100, 300, 50, 50, "./Images/gravity/dirt-", {"default":[1, 5]}, false, true, 100);
let block2 = new Sprite(150, 300, 50, 50, "./Images/gravity/dirt-", {"default":[1, 5]}, false, true, 100);
let block3 = new Sprite(200, 300, 50, 50, "./Images/gravity/dirt-", {"default":[1, 5]}, false, true, 100);
let block4 = new Sprite(300, 300, 50, 50, "./Images/gravity/ice-", {"default":[1, 5]}, false, true, 1);
let block5 = new Sprite(350, 300, 50, 50, "./Images/gravity/ice-", {"default":[1, 5]}, false, true, 1);
let block6 = new Sprite(400, 300, 50, 50, "./Images/gravity/ice-", {"default":[1, 5]}, false, true, 1);
// let char2 = new Sprite(400, 200, 50, 50, "./Images/gravity/me-", {"default":[1, 5], "idle":[8, 3], "walk":[4, 1], "jump":[11, 1],});
let frames = 0;
let current_anim = "idle"

// Draw
function draw(){
    frames++;
    ctx.fillStyle = "#ccc";
    ctx.fillRect(0, 0, 800, 500);

    char.update(frames, current_anim, false, [block1, block2, block3, block4, block5, block6]);
    // document.write("Cool")
    block1.update(frames);
    block2.update(frames);
    block3.update(frames);
    block4.update(frames);
    block5.update(frames);
    block6.update(frames);
    // char2.update(frames, "idle");
    // Done?
    // if (enemy.y-player.y <= 20){
    //     clearInterval(game);
    // }
}

let game = setInterval(draw, 100);