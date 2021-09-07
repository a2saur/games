// Getting the Canvas
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");

function randrange(len){
    return Math.floor(Math.random() * len);
}

function random_choice(list){
    return list[Math.floor(Math.random()*list.length)];
}

// Defining Images
const root = "./Images/collection-"

const charImg = new Image();
charImg.src = root+"main-char.png";

const water1Img = new Image();
water1Img.src = root+"water-1.png";

const water2Img = new Image();
water2Img.src = root+"water-2.png";

const water3Img = new Image();
water3Img.src = root+"water-3.png";

const grass1Img = new Image();
grass1Img.src = root+"grass-1.png";

const grass2Img = new Image();
grass2Img.src = root+"grass-2.png";

const grass3Img = new Image();
grass3Img.src = root+"grass-3.png";

const beach1Img = new Image();
beach1Img.src = root+"beach-1.png";

const beach2Img = new Image();
beach2Img.src = root+"beach-2.png";

const beach3Img = new Image();
beach3Img.src = root+"beach-3.png";

const mountain1Img = new Image();
mountain1Img.src = root+"mountain-1.png";

const mountain2Img = new Image();
mountain2Img.src = root+"mountain-2.png";

const mountain3Img = new Image();
mountain3Img.src = root+"mountain-3.png";

const tomatoBunny1Img = new Image();
tomatoBunny1Img.src = root+"tomato-bunny-1.png";

const tomatoBunny2Img = new Image();
tomatoBunny2Img.src = root+"tomato-bunny-2.png";

// Defining Constants
const cBLOCK_WIDTH = 32;
const cBLOCK_HEIGHT = 32;

const cMAP = [
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
]

const cMAP_NUM = [
    ["1", "2", "0", "1", "2", "0", "1", "2", "0", "1"],
    ["1", "2", "0", "2", "2", "0", "2", "2", "1", "2"],
    ["1", "2", "0", "0", "0", "1", "0", "1", "2", "1"],
    ["1", "2", "0", "2", "1", "2", "0", "2", "1", "0"],
    ["1", "2", "0", "1", "2", "2", "0", "1", "2", "0"],
    ["1", "2", "0", "0", "0", "0", "2", "0", "2", "2"],
    ["1", "2", "0", "1", "1", "1", "2", "0", "1", "0"],
    ["1", "2", "0", "2", "2", "0", "1", "1", "2", "1"],
    ["1", "2", "0", "0", "1", "2", "2", "2", "0", "1"],
    ["1", "2", "0", "1", "0", "1", "1", "0", "1", "2"],
]

const cTOWN_LOCS = [
    [0, 0], [6, 3], [10, 9]
]

const cCREATURE_INFO = {
    "Tomato Bunny":[[tomatoBunny1Img, tomatoBunny1Img], 15, 0.1]
}

const cSPAWNING_INFO = {
    "M":["Tomato Bunny"],
    "G":["Tomato Bunny"],
    "B":["Tomato Bunny"],
    "W":["Tomato Bunny"],
}

class Sprite {
    constructor(images, frame_wait, x, y, frame_start=-1, notes=""){
        this.notes = notes;
        this.images = images;
        this.frame_wait = frame_wait;
        this.x = x;
        this.y = y;
        if (frame_start == -1) {
            this.current_frame = randrange(images.length);
        } else {
            this.current_frame = frame_start;
        }
    }

    draw(frames){
        if (this.frame_wait == 0) {
            ctx.drawImage(this.images[this.current_frame], this.x, this.y);
        } else {
            if (frames%this.frame_wait == 0){
                this.current_frame++;
                if (this.current_frame >= this.images.length) {
                    this.current_frame = 0;
                }
            }
            ctx.drawImage(this.images[this.current_frame], this.x, this.y);
        }
    }

    move_right(){
        this.x += cBLOCK_WIDTH;
    }

    move_left(){
        this.x -= cBLOCK_WIDTH;
    }

    move_up(){
        this.y -= cBLOCK_HEIGHT;
    }

    move_down(){
        this.y += cBLOCK_HEIGHT;
    }
}



const cBLOCK_IMAGES = {
    "M":[mountain1Img, mountain2Img, mountain3Img],
    "G":[grass1Img, grass2Img, grass3Img],
    "B":[beach1Img, beach2Img, beach3Img],
    "W":[water1Img, water2Img, water3Img],    
}

// Defining Variables
let player = new Sprite([charImg], 0, 128, 128);
let player_map_pos = {
    x:7,
    y:7
}
let frames = 0;
let background = new Array(81);
let counter;
let temp_y;
let temp_x;
let showing_creatures = [];
let movement = "";
let creature_type;
let temp_creature;
let creatures_caught = [];

// Get Keys
document.addEventListener("keydown", direction);

function direction(event){
    // alert(player_map_pos.y);
    if (event.keyCode == 38){
        //up
        for (let i=0; i<showing_creatures.length; i++){
            showing_creatures[i].move_down();
        }
        if (player_map_pos.y-1 >= 0){
            player_map_pos.y--;
            movement = "up";
        } else {
            alert("YOU CANNOT PASS");
        }
    } else if (event.keyCode == 40){
        //down
        for (let i=0; i<showing_creatures.length; i++){
            showing_creatures[i].move_up();
        }
        if (player_map_pos.y+1 < cMAP.length){
            player_map_pos.y++;
            movement = "down";
        } else {
            alert("YOU CANNOT PASS");
        }
    } if (event.keyCode == 37){
        //left
        for (let i=0; i<showing_creatures.length; i++){
            showing_creatures[i].move_right();
        }
        if (player_map_pos.x-1 >= 0){
            player_map_pos.x--;
            movement = "left";
        } else {
            alert("YOU CANNOT PASS");
        }
    } else if (event.keyCode == 39){
        //right
        for (let i=0; i<showing_creatures.length; i++){
            showing_creatures[i].move_left();
        }
        if (player_map_pos.x+1 < cMAP[0].length){
            player_map_pos.x++;
            movement = "right";
        } else {
            alert("YOU CANNOT PASS");
        }
    }
}

// Draw
function draw(){
    ctx.fillStyle = "#000"
    ctx.fillRect(0, 0, 288, 288);
    
    frames++;

    // draw background
    counter = 0;
    temp_y = 0;
    for (let y = -4; y <= 4; y++){
        temp_x = 0;
        for (let x = -4; x <= 4; x++){
            // document.write(temp_x, ", ", temp_y, " | ");
            if (player_map_pos.y+y >= 0 && player_map_pos.x+x >= 0 && player_map_pos.y+y < cMAP.length && player_map_pos.x+x < cMAP[0].length){
                background[counter] = new Sprite(cBLOCK_IMAGES[cMAP[player_map_pos.y+y][player_map_pos.x+x]], 0, temp_x, temp_y, parseInt(cMAP_NUM[player_map_pos.y+y][player_map_pos.x+x]));
                background[counter].draw(frames);
                // document.write("SUCCESS");
                if (movement == "up" && y == -4){
                    // spawn
                    creature_type = random_choice(cSPAWNING_INFO[cMAP[player_map_pos.y+y][player_map_pos.x+x]]);
                    if (Math.random() <= cCREATURE_INFO[creature_type][2]) {
                        // spawned!
                        temp_creature = new Sprite(cCREATURE_INFO[creature_type][0], cCREATURE_INFO[creature_type][1], temp_x, temp_y, 0, creature_type);
                        showing_creatures.push(temp_creature);
                    }
                } else if (movement == "down" && y == 4){
                    // spawn
                    creature_type = random_choice(cSPAWNING_INFO[cMAP[player_map_pos.y+y][player_map_pos.x+x]]);
                    if (Math.random() <= cCREATURE_INFO[creature_type][2]) {
                        // spawned!
                        temp_creature = new Sprite(cCREATURE_INFO[creature_type][0], cCREATURE_INFO[creature_type][1], temp_x, temp_y, 0, creature_type);
                        showing_creatures.push(temp_creature);
                    }
                } else if (movement == "right" && x == 4){
                    // spawn
                    creature_type = random_choice(cSPAWNING_INFO[cMAP[player_map_pos.y+y][player_map_pos.x+x]]);
                    if (Math.random() <= cCREATURE_INFO[creature_type][2]) {
                        // spawned!
                        temp_creature = new Sprite(cCREATURE_INFO[creature_type][0], cCREATURE_INFO[creature_type][1], temp_x, temp_y, 0, creature_type);
                        showing_creatures.push(temp_creature);
                    }
                } else if (movement == "left" && x == -4){
                    // spawn
                    creature_type = random_choice(cSPAWNING_INFO[cMAP[player_map_pos.y+y][player_map_pos.x+x]]);
                    if (Math.random() <= cCREATURE_INFO[creature_type][2]) {
                        // spawned!
                        temp_creature = new Sprite(cCREATURE_INFO[creature_type][0], cCREATURE_INFO[creature_type][1], temp_x, temp_y, 0, creature_type);
                        showing_creatures.push(temp_creature);
                    }
                }
            }
            counter++;
            temp_x += cBLOCK_WIDTH;
        }
        // document.write(y);
        temp_y += cBLOCK_HEIGHT;
    }
    movement = "";

    to_remove = [];
    for (let i=0; i < showing_creatures.length; i++){
        showing_creatures[i].draw(frames);
        if (showing_creatures[i].x == player.x && showing_creatures[i].y == player.y) {
            // caught
            creatures_caught.push(showing_creatures[i].notes);
            showing_creatures.splice(i, 1);
        }
    }
    // *** CHECK DESPAWN
    // *** CHECK IF CAUGHT
    player.draw(frames);

    ctx.fillStyle = "#eef"
    ctx.fillRect(0, 288, 288, 320);

    // add text
    ctx.font = "15px Arial";
    ctx.fillStyle = "#000"
    ctx.fillText("Coordinates: ("+player_map_pos.x.toString()+", "+player_map_pos.y.toString()+")", 10, 310);

    ctx.font = "15px Arial";
    ctx.fillStyle = "#000"
    ctx.fillText("# of Items: "+creatures_caught.length.toString(), 150, 310);
    
}

let game = setInterval(draw, 100);