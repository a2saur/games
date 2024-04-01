// function loc_in_rect(loc, rect) {
//     if (rect.x < loc.x && (rect.x+rect.width) > loc.x) {
//         if (rect.y < loc.y && (rect.y+rect.height) > loc.y) {
//             return true;
//         }
//     }
// }
function loc_in_rect(loc, rX, rY, rW, rH) {
    if (rY < loc.x && (rX+rW) > loc.x) {
        if (rY < loc.y && (rY+rH) > loc.y) {
            return true;
        }
    }
}


//Getting the Canvas
const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

// Getting Images
const cPATH = "./Images/translator/"
// const gooseImg = new Image();
// gooseImg.src = "Goose.png";

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
    width:150,
    height:250,
    img: aImg,
    value: "A",
    x: 10,
    y: 50,
}
b = {
    width:150,
    height:250,
    img: bImg,
    value: "B",
    x: 160,
    y: 50,
}
c = {
    width:150,
    height:250,
    img: cImg,
    value: "C",
    x: 310,
    y: 50,
}
d = {
    width:150,
    height:250,
    img: dImg,
    value: "D",
    x: 460,
    y: 50,
}
e = {
    width:150,
    height:250,
    img: eImg,
    value: "E",
    x: 610,
    y: 50,
}
f = {
    width:150,
    height:250,
    img: fImg,
    value: "F",
    x: 760,
    y: 50,
}
g = {
    width:150,
    height:250,
    img: gImg,
    value: "G",
    x: 910,
    y: 50,
}
h = {
    width:150,
    height:250,
    img: hImg,
    value: "H",
    x: 1060,
    y: 50,
}
i = {
    width:150,
    height:250,
    img: iImg,
    value: "I",
    x: 1210,
    y: 50,
}
j = {
    width:150,
    height:250,
    img: jImg,
    value: "J",
    x: 1360,
    y: 50,
}
k = {
    width:150,
    height:250,
    img: kImg,
    value: "K",
    x: 10,
    y: 300,
}
l = {
    width:150,
    height:250,
    img: lImg,
    value: "L",
    x: 160,
    y: 300,
}
m = {
    width:150,
    height:250,
    img: mImg,
    value: "M",
    x: 310,
    y: 300,
}
n = {
    width: 150,
    height: 250,
    img: nImg,
    value: "N",
    x: 460,
    y: 300,
}
o = {
    width:150,
    height:250,
    img: oImg,
    value: "O",
    x: 610,
    y: 300,
}
p = {
    width:150,
    height:250,
    img: pImg,
    value: "P",
    x: 760,
    y: 300,
}
q = {
    width:150,
    height:250,
    img: qImg,
    value: "Q",
    x: 910,
    y: 300,
}
r = {
    width:150,
    height:250,
    img: rImg,
    value: "R",
    x: 1060,
    y: 300,
}
s = {
    width:150,
    height:250,
    img: sImg,
    value: "S",
    x: 1210,
    y: 300,
}
t = {
    width:150,
    height:250,
    img: tImg,
    value: "T",
    x: 1360,
    y: 300,
}
u = {
    width:150,
    height:250,
    img: uImg,
    value: "U",
    x: 10,
    y: 550,
}
v = {
    width:150,
    height:250,
    img: vImg,
    value: "V",
    x: 160,
    y: 550,
}
w = {
    width:150,
    height:250,
    img: wImg,
    value: "W",
    x: 310,
    y: 550,
}
x = {
    width:150,
    height:250,
    img: xImg,
    value: "X",
    x: 460,
    y: 550,
}
y = {
    width:150,
    height:250,
    img: yImg,
    value: "Y",
    x: 610,
    y: 550,
}
z = {
    width:150,
    height:250,
    img: zImg,
    value: "Z",
    x: 760,
    y: 550,
}
period = {
    width:150,
    height:250,
    img: periodImg,
    value: ".",
    x: 910,
    y: 550,
}
comma = {
    width:150,
    height:250,
    img: commaImg,
    value: ",",
    x: 1060,
    y: 550,
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
        if (loc_in_rect(click, letter_buttons[i].x, letter_buttons[i].y, letter_buttons[i].width, letter_buttons[i].height)){
            message += letter_buttons[i].value;
            break;
        }
    }
    // ... x,y are the click coordinates relative to the
    // canvas itself
}
cvs.addEventListener('click', on_canvas_click, false);


//draw
function draw(){
    ctx.fillStyle = "#aaa";
    ctx.fillRect(0, 0, 500, 300);
    ctx.font = "100px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText(message, 10, 1000);

    for (let i = 0; i < letter_buttons.length; i++){
        ctx.drawImage(letter_buttons[i].img, letter_buttons[i].x, letter_buttons[i].y, 0.5*letter_buttons[i].width, 0.5*letter_buttons[i].height);
    }
}


let game = setInterval(draw, 100);