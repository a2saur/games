// Getting the Canvas
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");

// Defining Images
const root = "./Images/collection/"

const openingImg1 = new Image();
openingImg1.src = root+"items/opening-background.png";
const openingImg2 = new Image();
openingImg2.src = root+"items/opening-overlay-2.png";


let opening_pos = {
    x:-470,
    y:-100,
}
let opening_colors = ["#000", "#112", "#334", "#556", "#778", "#99A", "#BBC", "#DDE", "#EEF", "#DDE", "#BBC", "#99A", "#778", "#556", "#334", "#112", "#000"];
let frames = 0;
function draw(){
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, 288, 288);
    
    frames++;
    ctx.drawImage(openingImg1, 0, 0, 4096/10, 3072/10);
    ctx.drawImage(openingImg2, opening_pos.x, opening_pos.y, 4096/5, 3072/5);

    opening_pos.x += 4.7/2;
    opening_pos.y += 1/2;
    
    if (opening_pos.x == 0 || opening_pos.y == 0){
        opening_pos = {
            x:-470,
            y:-100,
        }
    }

    ctx.fillStyle = "#EEF";
    ctx.fillRect(0, 288, 288, 32);

    ctx.font = "15px Arial";
    // ctx.fillStyle = opening_colors[frames%opening_colors.length];
    ctx.fillStyle = opening_colors[frames%opening_colors.length];
    ctx.fillText("Collection Game - Press Enter to Start", 10, 310);
}

let game = setInterval(draw, 100);