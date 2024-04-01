function loc_in_rect(loc, rX, rY, rW, rH) {
    if (loc.y < rY+rH && loc.y > rY) {
        if (loc.x < rX+rW && loc.x > rX){
            return true;
        }
    }
}


//Getting the Canvas
const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

// Getting Images
const cPATH = "./Images/translator/"
const SCALER = 0.5;
const NUMINROW = 10;
const xSHIFT = 50;
const ySHIFT = 100;
const XSPACE = 10;
const YSPACE = 10;
const imgWidth = 150;
const imgHeight = 250;

const aImg = new Image();
aImg.src = cPATH+"A.png";

const bImg = new Image();
bImg.src = cPATH+"B.png";

const cImg = new Image();
cImg.src = cPATH+"C.png";

const dImg = new Image();
dImg.src = cPATH+"D.png";

const eImg = new Image();
eImg.src = cPATH+"E.png";

const fImg = new Image();
fImg.src = cPATH+"F.png";

const gImg = new Image();
gImg.src = cPATH+"G.png";

const hImg = new Image();
hImg.src = cPATH+"H.png";

const iImg = new Image();
iImg.src = cPATH+"I.png";

const jImg = new Image();
jImg.src = cPATH+"J.png";

const kImg = new Image();
kImg.src = cPATH+"K.png";

const lImg = new Image();
lImg.src = cPATH+"L.png";

const mImg = new Image();
mImg.src = cPATH+"M.png";

const nImg = new Image();
nImg.src = cPATH+"N.png";

const oImg = new Image();
oImg.src = cPATH+"O.png";

const pImg = new Image();
pImg.src = cPATH+"P.png";

const qImg = new Image();
qImg.src = cPATH+"Q.png";

const rImg = new Image();
rImg.src = cPATH+"R.png";

const sImg = new Image();
sImg.src = cPATH+"S.png";

const tImg = new Image();
tImg.src = cPATH+"T.png";

const uImg = new Image();
uImg.src = cPATH+"U.png";

const vImg = new Image();
vImg.src = cPATH+"V.png";

const wImg = new Image();
wImg.src = cPATH+"W.png";

const xImg = new Image();
xImg.src = cPATH+"X.png";

const yImg = new Image();
yImg.src = cPATH+"Y.png";

const zImg = new Image();
zImg.src = cPATH+"Z.png";

const commaImg = new Image();
commaImg.src = cPATH+"Comma.png";

const periodImg = new Image();
periodImg.src = cPATH+"Period.png";

// defining letters
a = {
    img: aImg,
    value: "A",
}
b = {
    img: bImg,
    value: "B",
}
c = {
    img: cImg,
    value: "C",
}
d = {
    img: dImg,
    value: "D",
}
e = {
    img: eImg,
    value: "E",
}
f = {
    img: fImg,
    value: "F",
}
g = {
    img: gImg,
    value: "G",
}
h = {
    img: hImg,
    value: "H",
}
i = {
    img: iImg,
    value: "I",
}
j = {
    img: jImg,
    value: "J",
}
k = {
    img: kImg,
    value: "K",
}
l = {
    img: lImg,
    value: "L",
}
m = {
    img: mImg,
    value: "M",
}
n = {
    img: nImg,
    value: "N",
}
o = {
    img: oImg,
    value: "O",
}
p = {
    img: pImg,
    value: "P",
}
q = {
    img: qImg,
    value: "Q",
}
r = {
    img: rImg,
    value: "R",
}
s = {
    img: sImg,
    value: "S",
}
t = {
    img: tImg,
    value: "T",
}
u = {
    img: uImg,
    value: "U",
}
v = {
    img: vImg,
    value: "V",
}
w = {
    img: wImg,
    value: "W",
}
x = {
    img: xImg,
    value: "X",
}
y = {
    img: yImg,
    value: "Y",
}
z = {
    img: zImg,
    value: "Z",
}
period = {
    img: periodImg,
    value: ".",
}
comma = {
    img: commaImg,
    value: ",",
}

// 10 * 3 (max 1360, 550s)
let letter_buttons = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, period, comma];

let click;
let message = "";

function on_canvas_click(ev) {
    var x = ev.clientX - cvs.offsetLeft;
    var y = ev.clientY - cvs.offsetTop;
    click = {
        x:x,
        y:y
    }

    for (let i = 0; i < letter_buttons.length; i++){
        if (loc_in_rect(click, xSHIFT+(i-parseInt(i/NUMINROW)*10)*(SCALER*imgWidth)+((i-parseInt(i/NUMINROW)*10)*XSPACE), (ySHIFT+parseInt(i/NUMINROW)*SCALER*imgHeight)+parseInt(i/NUMINROW)*YSPACE, SCALER*imgWidth, SCALER*imgHeight)){
            message += letter_buttons[i].value;
            break;
        }
    }
    // ... x,y are the click coordinates relative to the
    // canvas itself
}
cvs.addEventListener('click', on_canvas_click, false);

//Get Keys
document.addEventListener("keydown", direction);

function direction(event){
    if (event.keyCode == 8){
        //backspace
        message = message.slice(0, message.length - 1);
    } else if (event.keyCode == 13){
        //clear
        message = "";
    }
}


//draw
function draw(){
    ctx.fillStyle = "#aaa";
    ctx.fillRect(0, 0, 1000, 1000);
    ctx.font = "100px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText(message, xSHIFT, 100);

    for (let i = 0; i < letter_buttons.length; i++){
        ctx.drawImage(letter_buttons[i].img, xSHIFT+(i-parseInt(i/NUMINROW)*10)*(SCALER*imgWidth)+((i-parseInt(i/NUMINROW)*10)*XSPACE), (ySHIFT+parseInt(i/NUMINROW)*SCALER*imgHeight)+parseInt(i/NUMINROW)*YSPACE, SCALER*imgWidth, SCALER*imgHeight);
    }
}


let game = setInterval(draw, 100);