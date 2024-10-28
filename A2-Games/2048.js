/*// ArrowUp, ArrowDown, etc
//Get Keys
let direction = "";
document.addEventListener("keydown", function(event) {
    direction = event.key;
});*/

/*
ctx.fillRect(20, 20, 150, 100)

ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);
*/

//Getting the Canvas
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");