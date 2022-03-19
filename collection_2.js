// Getting the Canvas
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");

function randrange(len){
    return Math.floor(Math.random() * len);
}

function random_choice(list){
    return list[Math.floor(Math.random()*list.length)];
}

function random_idx(list){
    return Math.floor(Math.random()*list.length);
}

function getTextWidth(text, font) {
    ctx.font = font;
    const metrics = ctx.measureText(text);
    return metrics.width;
    // return text.length*15;
}

function break_last_item(list, string, part2, idx){
    let new_list = [];
    for (let i = 0; i < list.length-1; i++){
        new_list.push(list[i]);
    }
    new_list.push(string);
    let part2str = part2[idx];
    for (let i = idx+1; i < part2.length; i++){
        part2str += " ";
        part2str += part2[i];
    }
    new_list.push(part2str);
    return new_list;
}

function add_text(text, x, y, width=1000, font="15px Arial", style="#000"){
    ctx.font = font;
    ctx.fillStyle = style;
    let text_lines = [text];
    let text_split;
    let temp_line;
    /* 
    go through the text
    if the text is too long:
        go through words and add until it would be too long
        once it would be too long, break the text in two
    */
    let counter = 1;
    while (getTextWidth(text_lines[text_lines.length-1], font) > width){
        counter++;
        if (counter > 20){
            break;
        }
        text_split = text_lines[text_lines.length-1].split(" ");
        temp_line = text_split[0]; // create new line
        for (let i = 1; i < text_split.length; i++){
            if (getTextWidth(temp_line+" "+text_split[i], font) > width){
                // BREAK
                text_lines = break_last_item(text_lines, temp_line, text_split, i);
                break;
            } else {
                    temp_line += " ";
                    temp_line += text_split[i];
            }
        }
    }
    for (let i = 0; i < text_lines.length; i++){
        ctx.fillText(text_lines[i], x, y+(15*i));
    }
}

function list_contains(list, item){
    for (let i = 0; i < list.length; i++){
        if (list[i] == item) {
            return true;
        }
    }
    return false;
}

function remove_item(list, item){
    let new_list = [];
    for (let i = 0; i < list.length; i++){
        if (list[i] == item) {
            // don't add
        } else {
            new_list.push(list[i])
        }
    }
    return new_list;
}

function remove_idxs(list, idxs){
    let new_list = [];
    for (let i = 0; i < list.length; i++){
        if (list_contains(idxs, i)) {
            // don't add
        } else {
            new_list.push(list[i]);
        }
    }
    return new_list;
}

// Defining Images
const root = "./Images/collection/"

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

const town1Img = new Image();
town1Img.src = root+"house-1.png";
const town2Img = new Image();
town2Img.src = root+"house-2.png";
const town3Img = new Image();
town3Img.src = root+"house-3.png";
const town4Img = new Image();
town4Img.src = root+"house-4.png";

const exit1Img = new Image();
exit1Img.src = root+"town-exit-1.png";
const exit2Img = new Image();
exit2Img.src = root+"town-exit-2.png";
const exit3Img = new Image();
exit3Img.src = root+"town-exit-3.png";
const exit4Img = new Image();
exit4Img.src = root+"town-exit-4.png";
const exit5Img = new Image();
exit5Img.src = root+"town-exit-5.png";
const exit6Img = new Image();
exit6Img.src = root+"town-exit-6.png";
const exit7Img = new Image();
exit7Img.src = root+"town-exit-7.png";

const house1Img = new Image();
house1Img.src = root+"house-version-1.png";
const house2Img = new Image();
house2Img.src = root+"house-version-2.png";
const house3Img = new Image();
house3Img.src = root+"house-version-3.png";
const house4Img = new Image();
house4Img.src = root+"house-version-4.png";
const house5Img = new Image();
house5Img.src = root+"house-version-5.png";

const shopImg = new Image();
shopImg.src = root+"shop.png";

const shop1Img = new Image();
shop1Img.src = root+"shop-1.png";
const shop2Img = new Image();
shop2Img.src = root+"shop-2.png";
const shop3Img = new Image();
shop3Img.src = root+"shop-3.png";
const shop4Img = new Image();
shop4Img.src = root+"shop-4.png";
const shop5Img = new Image();
shop5Img.src = root+"shop-5.png";
const shop6Img = new Image();
shop6Img.src = root+"shop-6.png";
const shop7Img = new Image();
shop7Img.src = root+"shop-7.png";
const shop8Img = new Image();
shop8Img.src = root+"shop-8.png";
shopImgs = [shop1Img, shop2Img, shop3Img, shop4Img, shop5Img, shop6Img, shop7Img, shop8Img]

const inHouseImg = new Image();
inHouseImg.src = root+"in-house.png";

// *****

const cMAP = [["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","G","G","G","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","W","W","W","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","G","G","G","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","W","W","W","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","B","W","W","W","B","B","B","B","B","B","B","B","B","W","W","B","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","W","W","B","B","B",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W","B","B","B","B","B","G","B","B","B","B","B","B","B","B",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","B","B","B","B","B","B","G","B","B","B","B","B","B","B","B","B","B",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","B","B","B",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","B","B","B","G","G","G","G","G","G","G","G","G","G",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","B","B","B","B","B","G","B","B","G","G","G","G","G","G","G","G","G","G","G",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","G","B","B","B","B","B","G","G","G","G","G","G","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","B","B","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","B","B","G","G","G","B","B","B","B","G","G","G","G","G","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","B","B","G","G","G","B","B","B","B","B","B","B","G","G","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","G","G","G","B","B","B","B","B","B","B","G","G","G","B","B","B","G","G","G","G","G","G","G","G","G","G","G",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","G","B","B","G","G","G","G","G","B","B","B","B","B","G",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","B","B","G","B","B","B","G","B",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B",],["G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","G","B","B","B","B","B","B","B","B","B","B","B","B","B",],["G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","G","G","G","B","B","B","B","B","B","W","W","W","W","W","W",],["G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","M","M","M","M","M","M","M","M","M","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","G","G","G","B","B","B","B","B","B","W","W","W","W","W","W",],["G","G","G","G","M","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","M","M","M","M","M","M","M","M","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","G","B","B","B","B","B","W","W","W","W","W","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","W","W","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","W","W","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","W","W","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","W","W","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","G","B","B","B","B","B","B","W","W","W","W","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","M","M","M","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","W","W","W","W","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","W","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","W","B","B","B","B","W","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","W","B","B","B","B","B","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","M","M","G","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","M","M","M","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","M","M","M","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","M","M","M","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","B","B","B","B","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","G","G","G","B","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","G","B","B","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","G","B","B","G","G","G","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","G","G","G","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","G","G","G","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","G","G","G","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","G","G","B","B","B","G","G","G","B","B","B","B","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","M","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","G","G","G","B","B","B","B","B","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","G","G","G","B","B","B","B","B","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","B","B","B","B","G","G","G","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W",],["G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","B","B","B","B","B","B","B","B","W","W","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","W","W","W","W","W","W","W","W","B","W","W","W",],["G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","B","W","W","W","W","W","W","W","W","G","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W",],["G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","M","M","M","M","G","G","G","G","G","G","G","B","W","W","W","W","W","W","W","W","G","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W",],["G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","M","M","G","G","G","G","G","G","G","B","W","W","W","W","W","W","W","W","G","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W",],["G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","M","M","M","M","M","M","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","B","B","W","W","W","W","W","W","W","W","W","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W",],["G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","B","W","W","W","W","W","W","W","W","G","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","G","B","B","B","B","B","B","W","W","W","W","W","W",],["G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","W","W","W","W","W","W","W","W","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","G","B","B","B","W","W","W","W","W","W","W","W",],["G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","W","W","W","W","W","W","W","W","G","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W",],["G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","W","W","W","W","W","W","W","W","W","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","W","W","W","W","W","B","W","W",],["G","G","G","G","G","G","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","W","W","B","W","W","W","W","W",],["G","G","G","G","G","G","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","G","G","G","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","G","G","G","G","G","B","B","B","B","B","B","W","W","W","W","W","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","G","G","G","B","B","B","B","B","B","B","W","W","W","W","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","G","G","G","B","B","B","B","B","B","B","W","B","W","W","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","B","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","G","G","G","G","G","M","M","M","M","M","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","M","G","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","G","G","G","B","B","B","B","B","B","W","W","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","G","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","G","G","G","B","B","B","B","B","B","B","W","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","G","G","G","B","B","B","B","B","B","B","W","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W",],]

const cMAP_NUM = [[1,2,2,1,0,0,0,1,2,0,1,2,1,0,2,2,0,2,2,2,2,0,1,1,1,1,0,0,1,1,0,2,1,2,0,0,0,1,0,0,2,2,2,0,1,2,0,1,2,1,2,0,0,0,1,0,1,2,0,1,2,2,2,2,2,0,0,1,2,2,1,0,0,2,2,1,1,1,2,2,1,0,0,0,1,0,0,1,1,2,1,1,1,0,1,0,2,0,0,1,],[1,1,2,2,0,0,1,1,1,0,1,0,1,2,2,2,0,1,0,2,1,0,1,2,0,0,2,0,1,1,2,0,2,2,1,1,0,1,2,2,1,2,1,1,2,2,2,0,1,0,2,0,1,0,1,0,1,0,1,1,1,0,1,2,2,1,0,2,2,1,0,2,2,0,0,2,1,0,2,2,2,1,1,1,2,2,0,0,0,2,1,0,2,2,0,2,1,1,2,0,],[0,1,2,0,1,2,2,0,2,2,0,1,0,1,0,2,1,1,0,1,1,1,2,0,2,2,0,0,2,2,1,1,0,0,2,0,1,1,2,0,2,1,2,1,0,1,0,2,2,0,1,0,0,2,1,1,1,2,1,1,1,0,1,1,0,2,2,0,1,0,1,2,2,1,2,0,2,2,1,0,0,2,2,1,2,2,0,0,2,2,2,1,1,0,2,0,1,2,0,2,],[0,1,2,1,1,2,0,1,1,0,2,2,0,2,2,0,2,1,0,1,0,0,2,0,0,1,0,1,1,0,1,0,1,1,1,1,2,2,0,1,0,2,1,0,1,1,0,1,0,1,1,1,1,1,0,0,2,2,0,1,2,1,2,0,1,1,2,1,2,1,2,2,0,2,1,2,1,1,1,0,2,1,0,2,2,0,0,1,1,1,0,1,0,0,0,1,0,1,2,1,],[0,0,0,2,0,1,1,0,2,2,2,2,1,2,0,2,1,0,0,0,1,1,0,0,1,1,1,1,2,1,2,2,1,0,0,1,2,0,1,1,2,1,2,1,0,1,1,0,2,1,2,1,1,2,2,0,2,0,1,1,0,1,2,0,0,1,0,0,2,1,0,2,1,2,1,0,1,1,0,0,2,0,1,2,1,2,1,2,0,0,0,1,2,0,2,0,1,1,2,1,],[0,2,2,2,0,1,2,1,0,0,2,0,2,2,1,1,1,1,2,1,0,2,1,1,1,1,0,0,1,2,2,0,1,2,1,1,0,2,1,0,2,0,2,0,1,2,2,1,1,1,0,1,0,1,1,1,2,0,2,2,2,2,1,0,1,0,2,2,1,1,1,1,0,2,1,0,1,0,0,2,2,2,1,2,1,2,0,1,1,1,1,1,2,1,2,1,2,1,2,0,],[1,2,2,0,1,2,0,1,0,2,1,2,1,1,1,2,0,1,1,1,2,1,0,2,0,2,1,1,1,0,2,0,2,1,0,1,0,2,1,0,2,1,0,0,2,2,2,0,0,0,0,2,2,0,1,1,2,1,1,2,2,2,1,2,0,0,1,0,0,2,0,2,0,1,1,0,1,2,1,1,2,0,0,0,1,1,0,1,2,1,1,0,2,0,2,1,2,0,1,1,],[2,2,1,1,0,1,0,2,1,2,1,2,2,1,2,1,0,2,2,1,2,1,0,0,0,2,0,1,0,2,1,0,0,1,0,0,2,2,0,1,1,1,0,2,2,1,2,2,2,0,1,0,1,1,1,1,0,0,1,0,1,2,1,0,1,2,1,1,2,0,2,0,1,2,2,0,0,0,2,0,2,1,2,0,1,1,0,2,1,1,0,0,0,0,1,2,0,2,0,1,],[2,0,0,1,0,2,2,2,0,2,2,1,2,2,0,1,2,0,2,2,0,0,1,2,1,1,2,2,2,2,2,1,1,1,2,1,0,2,0,2,1,0,2,2,1,0,0,0,1,2,0,1,1,0,0,2,0,1,1,2,2,1,0,0,2,1,2,1,2,1,1,0,2,2,1,0,1,0,1,2,1,1,0,0,0,1,0,0,0,0,1,0,0,2,2,0,2,1,1,1,],[2,1,0,2,0,2,2,0,0,0,0,1,2,1,1,1,2,2,0,0,1,2,0,0,2,1,1,1,2,0,0,1,0,0,1,1,1,1,1,0,2,0,1,1,0,0,2,2,2,1,2,1,2,0,0,2,0,2,0,0,2,2,0,0,0,0,0,2,2,2,2,1,1,2,1,1,1,0,0,1,1,1,0,1,1,2,1,1,2,1,0,2,0,2,2,2,0,1,1,2,],[1,2,1,2,1,0,1,2,1,1,0,0,2,1,0,0,2,0,2,1,1,2,0,1,2,2,1,0,1,1,1,1,0,0,1,2,0,0,1,0,1,0,0,2,1,0,1,2,1,0,2,2,2,0,0,2,2,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,2,0,2,0,1,2,2,1,0,1,2,2,2,1,1,0,2,1,0,0,2,0,0,1,1,2,0,],[1,2,1,1,2,1,1,1,2,0,0,2,2,0,1,0,1,0,0,2,2,0,2,0,2,1,0,1,2,2,2,0,1,1,2,0,1,0,2,2,2,1,0,2,1,2,0,1,1,0,1,2,0,2,0,1,1,0,1,2,2,0,1,2,2,0,1,1,1,0,2,0,0,0,0,2,2,2,1,0,2,0,0,1,1,2,1,2,1,2,1,2,0,0,2,1,2,2,2,0,],[0,1,2,1,1,0,0,2,2,1,0,1,0,1,2,2,0,1,0,0,1,2,1,1,1,0,1,1,1,2,2,2,1,0,1,1,0,2,1,0,0,2,2,1,0,2,2,1,1,0,0,0,2,2,0,0,1,1,0,0,1,1,1,0,1,0,1,1,2,0,1,0,0,0,2,2,1,1,0,2,0,2,1,2,1,0,0,0,1,1,2,2,1,2,2,2,2,0,2,0,],[0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,2,2,2,1,1,2,0,1,0,1,1,0,2,2,0,2,1,0,2,2,1,0,2,1,1,2,0,1,1,1,1,0,1,2,1,0,1,1,0,0,2,0,2,0,0,2,1,0,2,1,2,1,0,0,2,0,0,0,1,1,2,2,1,1,0,1,1,1,0,0,2,0,1,2,0,2,0,1,2,2,1,2,0,2,0,],[0,1,1,2,1,1,2,2,0,2,0,0,1,2,0,2,1,1,1,0,0,0,0,1,0,0,0,2,1,2,2,2,2,0,0,2,0,2,1,0,0,2,2,1,0,2,1,2,1,2,1,1,1,2,0,0,0,0,0,2,2,1,0,0,1,1,1,1,1,0,0,1,0,2,0,1,0,2,1,1,0,0,1,0,1,0,1,2,1,0,2,2,1,0,1,1,1,2,0,2,],[2,1,2,0,0,2,1,0,2,2,2,0,1,0,2,2,1,0,1,0,0,0,2,1,0,0,2,1,1,0,2,2,2,2,0,2,2,2,0,1,2,2,2,1,0,0,2,1,0,1,0,0,0,1,0,2,2,0,0,1,2,1,1,0,2,0,1,0,1,0,1,0,2,0,2,0,2,1,1,0,0,0,1,2,1,1,1,2,0,2,2,2,2,0,2,1,0,0,1,1,],[1,1,2,2,2,2,1,1,2,2,0,0,0,0,0,1,1,2,1,2,2,1,2,0,0,2,0,2,2,1,2,0,1,0,2,1,1,2,2,2,2,1,0,2,2,1,2,0,2,1,2,1,1,1,2,1,0,2,2,1,1,2,2,1,0,1,2,0,1,1,1,2,1,0,1,0,2,2,2,1,1,1,1,0,0,0,2,1,0,2,2,1,2,0,2,1,0,2,1,1,],[1,1,2,2,1,2,1,0,1,2,0,0,0,1,0,2,0,0,0,0,2,2,0,1,2,1,0,2,0,2,1,0,2,0,0,1,0,0,0,1,2,0,0,2,0,1,0,0,0,2,0,0,1,1,0,0,0,1,1,2,2,1,2,1,0,1,1,1,1,1,1,2,0,0,2,2,0,0,1,0,2,2,0,1,1,2,2,1,2,2,1,2,2,2,1,0,1,2,0,1,],[1,0,2,0,1,0,0,2,1,1,1,0,2,2,2,0,0,1,2,2,1,2,1,2,2,1,2,1,1,1,2,2,2,2,0,0,2,2,2,2,2,0,2,1,2,1,0,0,1,0,0,2,0,0,0,1,2,2,0,2,0,0,0,0,0,2,0,1,2,0,1,1,1,1,0,0,1,0,2,2,1,1,2,2,1,2,0,2,2,1,1,1,2,1,1,2,2,2,2,2,],[0,1,1,0,2,2,2,2,2,0,0,0,0,2,0,1,0,0,2,2,2,1,2,2,2,0,1,1,2,0,0,2,1,0,1,2,2,1,0,1,2,0,2,0,1,1,2,2,2,2,1,0,0,2,2,2,2,0,2,1,1,0,1,1,2,0,1,2,0,1,2,2,2,1,2,0,2,0,0,0,1,2,1,1,0,0,1,0,1,1,2,0,2,0,2,0,2,0,1,1,],[2,0,1,2,0,2,0,0,2,0,2,2,1,2,2,0,1,2,2,0,1,2,2,0,1,1,1,1,0,0,1,2,1,2,0,1,2,1,2,2,0,0,0,0,2,2,1,0,0,1,2,0,2,2,1,0,0,1,2,2,2,1,0,1,0,2,2,0,2,1,1,2,2,1,0,1,2,1,0,0,2,1,0,0,2,1,2,2,0,2,0,0,2,1,1,0,0,1,0,0,],[0,0,2,0,0,2,2,0,0,0,2,1,0,2,2,2,1,1,2,1,1,1,1,0,1,0,0,0,1,1,2,2,2,2,0,0,0,1,1,2,0,0,1,2,2,0,0,1,2,2,1,0,0,2,1,2,2,2,0,0,1,0,0,2,1,2,0,1,1,1,0,1,2,0,0,1,0,0,0,2,2,0,1,2,0,0,0,2,2,1,0,0,1,0,2,1,1,1,2,2,],[1,1,1,2,0,2,0,1,1,0,2,1,0,1,0,2,0,1,2,2,2,0,2,1,1,0,0,2,1,1,2,0,2,1,1,2,2,1,1,2,1,2,1,1,2,1,1,1,1,0,1,0,0,2,2,2,1,1,1,2,0,0,0,2,1,1,2,2,0,2,2,2,2,0,0,0,1,1,0,1,0,2,2,1,0,1,1,0,1,1,0,2,0,0,1,2,1,0,0,0,],[2,0,0,0,1,2,1,1,0,0,2,1,2,0,0,0,1,0,1,2,0,1,0,1,1,2,0,1,2,1,2,1,1,1,2,1,0,2,2,1,0,0,2,1,0,1,0,0,2,0,0,1,0,2,2,0,2,1,0,1,2,2,2,0,1,0,2,0,2,0,1,1,2,2,1,0,0,1,2,0,2,0,1,0,2,2,1,0,1,2,1,1,2,2,0,0,0,1,2,0,],[2,0,2,0,2,1,2,0,1,0,2,2,2,0,0,0,2,2,0,2,2,1,0,1,0,2,1,1,1,0,1,0,2,0,1,2,0,0,0,0,2,1,0,1,0,1,2,1,0,2,0,2,0,1,1,2,1,2,2,1,1,0,2,2,1,1,2,1,1,2,0,0,2,0,1,1,1,1,2,0,2,1,1,1,0,0,1,2,0,1,2,2,1,1,1,2,0,1,1,2,],[2,2,1,0,2,2,0,2,0,0,0,1,0,1,0,0,1,0,0,2,2,1,0,1,2,0,1,0,1,0,1,0,2,2,2,2,0,2,2,0,1,0,2,1,0,2,2,1,2,0,2,2,0,0,1,0,1,2,1,1,2,2,2,2,0,1,2,2,1,2,2,0,1,1,0,1,2,2,0,2,1,0,2,2,0,1,1,1,1,1,0,1,1,1,0,1,2,1,2,1,],[0,1,0,2,1,2,2,1,0,0,0,2,0,2,2,1,1,0,1,0,1,0,0,2,0,2,2,1,2,1,0,2,0,0,0,1,2,1,1,2,1,1,2,2,1,2,1,0,1,1,0,1,1,1,1,2,0,2,0,0,2,1,2,2,0,0,0,2,0,1,1,1,1,0,0,1,2,0,1,2,1,0,0,0,2,1,1,0,0,0,1,1,2,2,0,0,2,0,1,2,],[2,1,1,1,1,0,0,1,0,0,0,2,1,0,0,2,2,2,0,0,2,2,1,1,0,2,1,1,2,0,1,0,0,0,2,1,0,0,1,0,1,1,2,2,1,2,1,2,2,1,2,1,0,2,0,2,0,1,1,0,1,0,2,1,2,1,2,2,1,2,0,1,1,1,0,1,0,1,2,1,2,0,0,2,1,0,0,1,0,0,1,0,0,2,2,1,1,2,0,2,],[0,1,0,2,2,1,0,0,1,0,0,2,1,2,1,1,2,2,1,0,1,0,2,0,0,1,1,1,2,1,2,1,2,0,1,1,2,0,2,0,2,2,2,2,2,2,2,2,0,1,0,2,2,2,1,1,0,0,2,2,0,1,1,1,2,2,1,0,1,1,1,2,2,0,1,1,2,1,0,0,0,0,0,2,0,0,1,0,0,0,1,2,0,1,2,1,1,2,2,0,],[0,0,2,0,1,1,1,0,0,1,2,0,2,2,0,0,2,2,1,0,1,1,1,0,0,0,0,2,2,1,2,2,0,0,2,2,0,0,0,1,1,2,0,0,1,1,2,2,2,0,0,0,2,1,0,2,1,2,0,1,0,0,0,2,0,0,0,1,1,0,0,1,0,2,2,0,1,2,1,2,0,1,2,2,0,0,2,0,2,1,0,0,0,2,0,1,0,1,2,2,],[0,2,1,0,1,0,2,0,0,1,2,2,2,2,1,1,1,2,0,2,1,2,0,2,0,1,1,1,0,1,2,2,1,0,0,2,1,2,0,0,0,2,1,0,0,1,2,0,0,2,1,1,2,0,0,1,2,1,2,1,0,2,0,2,0,2,1,2,1,2,1,1,2,0,1,1,2,2,1,1,1,1,0,1,0,1,2,2,0,0,1,2,1,0,2,0,0,0,1,2,],[1,1,0,0,1,0,2,2,2,2,0,1,1,0,1,2,0,0,0,2,0,0,0,1,0,2,2,0,1,0,0,0,2,2,0,1,0,2,0,2,1,0,0,1,2,2,1,0,2,0,0,0,0,1,1,0,0,2,2,0,2,2,0,2,0,0,1,2,0,1,1,0,1,2,1,1,2,0,1,0,0,1,0,1,2,1,0,1,2,2,2,0,0,2,2,1,1,2,0,2,],[1,0,1,0,1,0,2,2,1,2,1,2,1,0,2,2,0,0,2,1,0,2,1,2,2,0,2,2,0,2,1,2,2,1,1,1,0,0,0,2,1,1,1,0,1,2,2,1,2,1,1,2,1,1,0,2,2,2,1,0,1,2,0,2,2,0,2,1,1,1,2,2,2,1,1,2,2,1,0,0,1,1,2,0,0,1,2,1,0,2,2,1,1,2,1,2,2,2,0,1,],[2,0,0,2,0,1,1,1,0,1,2,1,1,0,0,0,0,1,0,2,2,2,0,2,1,1,1,0,2,2,2,1,1,1,2,0,0,2,0,0,0,0,0,2,1,0,1,1,2,0,0,0,1,0,0,2,0,0,0,0,2,2,1,1,2,2,0,1,2,2,2,2,2,0,1,1,2,2,1,0,2,2,1,1,2,1,0,0,2,1,2,0,1,2,2,2,0,2,0,0,],[0,1,2,1,2,2,2,2,0,1,1,1,0,1,1,2,0,1,2,1,2,2,0,0,2,1,0,1,2,0,0,2,0,1,1,1,2,0,0,2,0,1,2,2,1,1,2,1,2,1,0,1,0,0,1,1,1,0,0,0,2,1,2,1,2,2,0,2,2,0,0,0,2,0,2,2,0,0,1,2,1,2,1,1,2,1,2,1,1,2,0,0,0,0,1,0,0,2,0,2,],[0,2,0,2,2,2,1,1,1,1,0,0,2,0,1,2,2,0,0,0,0,1,0,2,2,1,1,2,2,2,0,1,2,1,0,1,1,0,0,2,0,0,2,0,0,0,1,1,1,1,0,1,0,2,2,2,2,1,1,1,2,0,1,0,0,2,2,1,2,1,1,2,0,0,2,1,0,1,0,2,1,0,2,0,2,0,0,2,0,0,0,2,0,0,2,1,0,2,1,2,],[1,0,0,0,2,2,1,2,1,0,0,1,1,1,1,1,2,0,1,2,0,0,2,2,1,1,1,0,2,0,2,1,2,0,0,1,1,2,2,0,1,2,2,1,2,1,0,2,1,2,0,1,1,1,2,1,1,2,1,2,1,2,1,0,0,0,2,0,0,2,0,2,2,1,1,0,2,2,1,1,2,1,1,1,1,0,2,1,2,2,2,1,2,0,1,0,1,2,1,1,],[1,2,0,2,0,1,0,2,1,0,2,1,0,0,2,1,1,2,1,0,1,1,1,2,1,2,1,0,0,0,0,2,2,1,1,2,0,1,2,1,1,0,0,0,1,2,0,1,1,1,0,2,1,0,1,0,0,0,1,2,1,2,2,1,1,2,0,1,2,2,2,0,1,0,0,0,0,0,1,2,0,0,2,1,0,1,2,0,0,0,0,0,2,0,2,2,0,0,0,1,],[1,1,2,0,1,2,1,2,2,0,0,2,2,2,0,2,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,2,2,2,0,2,2,0,2,0,2,2,2,2,1,2,2,1,1,0,2,1,2,1,2,2,2,0,1,2,2,1,2,2,0,0,2,0,0,0,2,0,0,2,2,2,2,0,2,2,1,1,2,1,1,2,1,0,0,1,2,0,2,2,1,1,2,1,],[1,0,1,2,2,0,1,2,2,0,0,0,0,1,0,0,0,0,0,1,0,1,2,1,2,1,0,0,1,0,1,1,0,2,2,1,0,0,0,0,1,0,0,2,2,2,1,2,2,0,1,2,2,2,0,2,2,2,0,2,0,2,2,0,1,1,2,1,0,2,0,2,2,0,2,2,1,2,2,1,0,2,2,1,1,1,1,2,1,0,0,1,0,2,1,1,1,1,2,2,],[1,2,2,1,1,1,0,1,1,1,1,1,1,0,2,2,1,0,2,0,1,2,1,1,1,0,0,1,0,0,0,1,1,2,0,1,2,2,2,1,2,0,2,0,1,0,1,1,1,1,0,1,2,1,2,0,1,2,1,2,0,0,2,0,0,1,1,1,0,0,1,0,1,0,1,2,2,2,2,1,2,1,1,1,0,0,1,0,0,1,0,1,0,2,1,0,1,0,1,2,],[0,1,0,2,2,2,0,2,0,0,2,2,0,2,1,0,2,2,2,2,0,2,0,0,2,2,0,2,2,0,0,0,2,2,1,2,1,2,2,0,2,0,0,1,0,2,2,2,1,0,2,0,1,1,0,0,2,0,2,1,2,1,1,0,0,1,1,0,2,0,0,2,2,2,1,1,2,1,2,0,0,1,0,2,1,2,0,2,2,1,1,2,0,1,1,0,2,0,0,2,],[0,0,0,0,2,0,1,0,0,2,0,0,2,1,2,1,2,2,0,0,1,2,0,2,2,2,1,0,1,1,1,2,0,1,0,2,0,0,1,1,1,2,2,1,0,0,1,2,2,0,1,2,1,1,1,0,1,0,0,0,2,2,2,0,0,2,2,2,0,0,0,0,1,2,2,0,2,0,2,0,1,1,2,2,1,2,1,1,1,2,2,1,1,2,1,1,1,2,0,1,],[2,0,2,0,2,0,0,0,1,2,0,1,1,2,0,1,2,0,1,0,0,1,0,2,0,1,1,2,2,2,1,0,0,2,2,0,1,0,1,2,1,1,0,0,1,0,1,2,0,2,0,2,2,1,1,2,2,2,0,2,0,0,1,1,1,1,0,0,1,2,2,2,1,2,0,0,2,0,2,1,1,1,2,1,1,0,0,2,2,2,0,1,1,1,1,0,1,0,0,1,],[1,1,2,1,1,1,0,2,2,0,1,2,0,1,2,1,1,1,1,0,2,2,1,1,0,2,0,0,0,1,1,0,1,2,2,0,0,2,0,0,2,1,2,0,0,0,2,1,2,2,2,0,0,0,1,0,2,1,1,1,2,2,2,0,0,1,2,2,1,2,0,2,1,0,2,1,2,0,2,0,1,1,0,2,0,0,2,1,2,2,0,0,2,1,1,1,0,2,1,0,],[2,2,1,2,2,2,0,2,0,0,2,1,2,1,0,0,2,0,2,2,1,1,2,1,0,2,0,1,1,0,0,2,2,0,1,1,0,1,0,1,2,2,0,2,0,2,0,1,2,2,1,0,1,1,1,1,1,0,2,0,1,2,0,2,0,1,0,0,1,2,1,2,1,0,1,0,0,0,1,0,2,2,1,0,1,1,2,1,1,1,1,1,1,0,1,0,1,0,2,1,],[0,2,1,0,1,0,0,1,2,1,0,1,0,0,1,1,0,0,2,1,1,0,2,1,0,0,0,0,1,1,1,1,2,0,0,2,0,0,1,2,0,2,0,1,0,1,0,0,0,0,1,0,0,2,0,2,2,1,1,1,0,1,0,1,2,1,2,0,0,1,0,0,2,2,1,2,0,1,2,2,1,0,0,0,0,0,0,1,0,1,2,2,2,0,1,0,1,0,2,2,],[1,0,0,2,0,0,0,2,1,2,1,2,1,2,0,0,1,2,2,1,1,2,1,2,2,1,0,2,0,0,0,2,1,0,0,0,1,2,1,2,0,1,2,1,0,2,1,1,0,1,2,2,2,2,0,1,2,0,0,1,2,0,0,2,2,0,0,1,1,2,1,1,1,2,1,1,1,0,0,2,2,0,1,1,0,2,1,2,2,0,0,2,0,2,1,1,2,2,0,0,],[2,1,1,1,1,0,1,1,1,0,1,0,2,1,2,2,0,1,2,1,2,2,2,0,1,0,0,1,1,0,0,2,1,2,1,1,2,2,2,1,1,1,2,1,1,0,2,0,2,1,2,1,1,0,0,2,2,1,2,2,2,1,0,0,1,1,2,2,2,2,1,2,1,1,1,2,2,1,0,2,0,0,1,2,0,0,0,1,2,2,1,1,1,0,1,2,2,1,1,1,],[1,0,1,2,2,1,0,0,2,0,2,1,2,2,1,1,2,0,1,0,0,1,2,2,0,1,2,2,0,2,2,0,2,1,0,0,0,2,2,1,1,0,0,0,2,1,1,2,2,2,1,1,2,1,1,0,2,2,0,2,1,0,0,1,0,0,2,2,2,2,0,2,1,2,2,0,0,2,0,0,2,0,0,2,1,1,0,1,1,2,2,2,1,1,1,0,2,2,0,0,],[0,0,0,0,1,0,2,1,1,2,0,0,0,0,2,0,1,1,2,2,0,1,1,0,0,0,1,2,0,2,2,1,0,1,0,1,1,1,0,1,1,0,1,0,2,0,2,2,1,0,1,0,2,2,1,2,2,0,1,0,2,0,0,0,0,2,2,1,2,0,0,2,2,0,1,2,0,2,1,1,1,0,0,0,0,1,0,2,1,2,2,0,0,1,1,1,1,1,0,2,],[0,2,2,1,0,0,0,2,1,0,0,2,2,1,1,2,1,1,1,0,1,0,1,1,2,1,1,2,0,2,2,1,0,0,0,1,1,0,2,2,1,2,1,2,1,1,1,1,0,2,2,1,0,0,2,1,0,2,0,1,0,2,2,2,2,1,1,2,2,0,2,0,1,2,0,2,1,2,0,1,0,2,0,1,2,2,1,1,2,1,2,1,2,0,0,2,2,1,1,1,],[0,1,2,2,2,1,2,0,2,2,0,0,0,2,1,1,1,0,1,0,2,1,1,1,1,1,2,2,1,0,1,1,2,2,1,2,0,1,1,2,1,2,2,1,0,0,0,1,1,2,1,2,2,0,2,0,2,2,1,0,2,0,2,2,2,1,2,0,0,0,1,2,1,0,2,1,0,1,2,1,2,0,1,2,0,2,0,1,2,2,2,1,0,0,0,1,2,0,1,0,],[2,2,2,1,1,1,1,1,1,2,0,1,2,1,1,2,2,1,2,2,0,2,2,1,1,1,0,2,1,1,2,0,1,0,1,0,2,2,0,0,2,2,1,0,1,1,1,2,2,2,0,1,0,0,0,1,0,2,0,1,0,2,1,2,1,1,2,0,2,0,2,2,2,2,2,0,1,1,1,2,1,0,0,2,1,1,2,2,2,2,2,1,2,2,0,1,0,0,2,1,],[1,0,0,1,1,0,1,2,1,1,0,1,1,1,0,2,0,2,0,0,1,1,2,0,1,1,1,2,1,1,1,1,0,0,1,2,1,2,1,1,0,1,2,0,2,0,0,1,2,2,1,0,2,1,1,2,0,0,2,1,0,0,0,0,2,1,1,2,1,2,1,1,2,2,0,2,0,2,2,2,2,0,0,1,1,2,1,2,2,0,2,2,1,2,2,0,2,1,1,1,],[1,1,2,2,0,1,0,1,0,1,2,2,0,1,2,0,0,0,1,2,2,0,0,2,0,1,0,1,2,0,2,1,2,1,2,0,0,1,0,0,2,2,2,2,2,0,2,1,1,0,0,2,0,1,0,0,1,2,1,2,2,1,1,0,1,1,1,2,2,1,2,1,0,1,1,1,1,1,0,0,1,1,2,0,0,1,1,2,2,0,2,2,1,2,2,2,0,1,0,1,],[2,1,2,1,1,0,2,2,2,2,2,0,1,0,1,1,0,1,1,1,1,2,1,0,1,1,2,2,0,1,2,1,0,0,0,0,2,0,1,2,0,1,0,1,2,0,2,1,0,0,0,0,1,2,0,2,0,2,2,2,0,1,1,0,1,2,0,0,0,1,1,2,0,1,1,1,1,2,2,0,0,1,2,1,0,1,2,1,0,0,2,2,1,2,0,2,2,1,0,1,],[2,1,1,0,0,0,1,1,1,0,2,1,0,0,2,1,0,0,2,2,1,1,2,2,2,1,1,1,2,0,2,2,0,1,0,2,2,2,2,0,1,1,2,2,2,0,2,2,0,0,0,0,1,1,2,0,0,0,2,2,0,1,2,1,0,1,1,0,1,2,0,1,1,1,2,2,1,0,0,0,0,1,0,2,1,2,0,1,0,2,1,2,0,0,0,0,0,1,1,2,],[2,2,0,1,0,1,0,2,0,0,1,1,1,0,1,1,2,2,0,2,0,0,2,1,2,1,0,0,0,0,1,0,1,2,2,0,0,2,0,0,1,2,1,1,0,1,1,0,2,1,1,1,2,2,0,1,0,1,0,1,1,1,0,1,0,0,0,2,0,1,2,0,0,0,1,0,0,1,1,0,0,1,2,1,0,2,1,1,0,2,2,2,1,1,0,1,0,0,2,0,],[1,1,1,2,0,2,0,0,1,2,2,0,1,1,1,2,2,2,2,1,1,1,0,0,0,1,1,0,2,0,1,0,1,0,2,0,2,2,1,1,2,0,2,0,0,2,2,1,1,0,0,2,1,2,1,2,0,1,0,1,0,0,1,0,1,2,2,1,2,1,0,1,1,2,0,2,1,2,1,0,0,1,2,1,0,1,0,2,2,1,0,2,1,1,1,2,0,0,1,2,],[2,2,2,0,2,1,1,0,2,2,2,0,2,2,2,2,1,0,1,1,2,2,1,1,1,0,2,2,2,0,1,1,1,2,1,2,1,0,1,1,2,0,1,1,1,2,2,1,2,2,2,1,0,1,0,1,0,0,2,2,2,2,2,2,1,2,0,0,0,2,0,1,2,1,2,1,1,1,0,0,2,0,0,0,1,0,2,0,0,0,1,0,0,2,1,0,2,0,2,1,],[2,2,1,2,0,1,2,2,2,0,0,2,2,1,0,0,1,2,2,2,1,2,1,2,2,0,1,1,1,0,0,2,0,1,2,1,2,1,0,2,2,2,1,2,0,1,2,2,0,2,2,2,1,0,1,1,1,0,0,1,1,0,1,2,2,0,0,2,0,1,0,0,2,2,0,2,2,1,2,2,2,2,2,1,2,0,2,0,0,1,0,0,2,0,0,2,0,1,2,2,],[2,0,0,2,2,2,1,0,0,0,2,1,1,2,1,2,0,2,0,0,0,0,2,1,1,1,1,1,0,2,2,2,1,1,1,0,1,1,1,1,0,1,2,1,2,2,2,0,2,1,1,1,1,1,0,1,1,1,1,2,2,0,2,0,1,0,1,0,1,0,2,2,0,1,0,1,1,0,1,1,1,1,2,0,2,2,2,2,0,2,0,2,0,2,0,0,1,1,1,0,],[1,1,0,1,0,0,2,1,1,0,1,2,0,0,1,2,2,2,0,1,1,0,1,2,2,0,2,2,0,1,1,1,1,2,2,1,0,0,0,0,2,0,0,0,2,2,1,1,2,0,2,0,2,0,1,1,2,2,2,0,2,0,1,0,2,1,2,0,2,0,1,1,0,1,2,0,1,2,0,0,2,1,2,2,2,1,2,2,1,2,2,0,2,1,0,2,0,2,2,0,],[2,2,2,0,1,1,2,0,1,0,0,0,2,1,1,2,2,2,0,0,2,0,2,2,2,2,2,1,1,0,2,1,1,2,2,0,2,2,1,2,2,2,2,1,2,1,0,2,1,1,2,1,1,0,0,0,1,1,2,2,2,1,0,1,2,0,2,1,2,1,1,2,2,0,0,1,0,2,0,2,2,2,0,0,1,0,2,2,2,2,0,1,1,0,1,0,1,2,2,2,],[1,0,1,2,1,2,2,1,2,1,0,2,1,1,1,0,2,0,2,1,2,0,1,0,0,2,2,2,2,1,2,0,2,2,1,2,1,2,2,2,1,1,0,1,0,0,1,1,2,0,2,1,0,0,2,1,0,0,1,0,1,0,1,2,1,2,1,2,0,1,2,0,2,2,2,1,1,2,0,0,1,1,0,1,2,2,1,1,1,1,1,0,1,0,0,1,0,2,1,2,],[1,0,0,2,2,0,2,1,1,2,2,0,1,2,0,2,0,2,2,0,1,0,1,0,1,0,2,1,0,2,0,0,0,0,1,0,1,2,0,1,2,0,2,1,1,2,2,0,1,1,2,0,2,2,0,2,2,2,1,1,0,2,0,0,2,2,0,1,0,2,1,1,1,2,1,1,1,1,2,0,2,1,2,2,1,0,0,2,0,2,1,2,2,0,2,1,1,0,2,0,],[2,0,1,1,0,0,2,0,2,2,2,0,2,0,2,2,2,1,2,2,1,1,1,2,0,2,0,2,0,1,2,2,1,2,1,2,1,2,2,1,2,2,2,2,2,2,0,2,1,0,1,0,2,1,0,2,0,0,0,0,0,0,2,1,1,2,1,2,0,2,1,1,1,1,2,2,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,2,1,],[1,2,1,1,0,1,1,0,0,0,1,2,0,0,2,2,0,2,2,1,0,2,0,1,1,0,0,0,1,1,2,0,2,1,2,2,0,0,0,0,0,1,0,0,2,0,0,1,1,2,1,0,2,1,0,2,1,2,2,2,2,0,0,1,0,2,1,2,1,2,2,1,1,0,2,2,0,1,2,2,1,2,2,2,1,1,2,1,1,0,1,1,1,1,2,1,0,0,1,1,],[0,2,1,1,1,1,0,0,1,1,0,0,0,0,1,2,0,1,1,1,0,2,2,0,2,2,2,2,0,1,1,1,0,0,0,0,2,2,0,2,0,1,0,1,2,0,2,0,2,1,0,0,1,1,2,1,1,2,0,2,1,1,1,2,1,1,1,1,2,1,0,1,1,1,0,1,2,0,1,0,0,0,0,1,1,0,2,2,1,2,1,0,0,0,2,1,1,2,0,2,],[2,2,1,2,0,2,2,2,2,0,1,0,0,1,0,1,2,1,0,1,0,2,1,0,2,0,2,1,0,2,2,0,1,1,0,0,2,2,2,2,1,1,0,1,1,0,2,0,2,0,0,0,0,1,2,2,0,0,1,2,1,2,0,0,0,0,2,1,2,2,2,0,1,0,0,1,1,0,2,2,2,2,2,1,2,2,1,2,1,1,2,2,0,2,1,0,1,1,1,1,],[0,2,0,1,2,0,2,0,1,1,2,0,1,0,2,0,1,2,2,2,0,2,2,1,2,0,1,0,0,0,2,1,0,1,2,1,1,1,1,1,2,1,2,0,2,0,1,1,2,1,1,2,1,2,2,0,2,2,2,1,0,1,0,2,2,0,2,0,1,0,0,0,0,2,0,2,1,2,1,1,1,0,1,0,2,2,2,2,1,1,2,0,1,0,0,1,1,0,2,1,],[0,0,1,0,1,1,1,0,0,1,0,0,2,0,2,1,1,2,0,2,1,1,0,2,0,1,0,2,0,2,0,0,2,0,2,0,0,0,0,2,1,1,2,2,2,0,2,0,2,1,2,0,2,1,0,1,1,0,2,1,1,2,1,2,2,2,2,0,0,2,1,0,1,2,1,2,0,0,0,2,2,0,0,0,2,0,2,0,0,1,2,1,2,1,2,2,1,0,0,2,],[0,0,0,1,1,2,2,2,1,2,0,0,2,0,2,2,0,1,0,1,0,1,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,2,2,2,0,0,1,2,1,0,0,2,0,1,1,2,2,2,1,2,2,2,1,1,0,2,2,1,1,2,0,2,1,1,2,2,1,1,0,0,0,2,0,2,2,2,1,2,0,1,2,1,2,2,0,0,0,1,],[1,2,0,1,0,1,2,2,2,0,0,2,1,2,0,1,1,0,2,1,0,0,0,2,2,1,0,1,1,0,1,1,2,2,1,2,0,1,2,0,2,1,2,2,0,1,2,2,0,0,1,0,2,2,1,2,2,0,1,0,0,0,2,2,0,0,0,1,2,2,1,0,1,0,0,1,0,2,1,1,0,2,1,0,2,1,2,1,0,0,1,0,1,2,2,2,2,1,0,0,],[1,2,2,1,2,0,1,0,0,1,0,1,1,2,0,1,2,2,0,2,2,2,2,1,0,1,1,2,0,0,1,1,2,2,0,1,1,2,2,1,2,2,0,2,2,2,2,2,1,1,0,2,2,1,1,1,0,1,0,0,1,1,1,0,2,2,1,0,1,2,2,1,2,2,2,0,0,0,0,1,1,0,1,1,0,0,1,2,0,0,1,2,0,0,1,1,0,1,1,1,],[0,2,2,2,2,1,1,0,1,0,2,1,0,2,2,0,0,2,2,1,2,0,0,2,1,2,1,0,2,1,2,1,0,0,2,2,0,0,0,1,0,2,0,0,1,2,0,1,2,1,0,2,0,1,0,1,1,2,1,0,2,0,1,2,0,0,2,1,2,2,1,0,1,1,2,1,0,1,1,2,1,1,1,1,0,0,2,1,2,0,0,1,0,0,0,1,1,2,0,2,],[1,1,1,0,0,2,1,0,0,2,0,1,0,2,1,0,1,1,1,2,2,0,2,2,0,2,1,1,2,1,0,2,2,2,1,2,1,2,1,0,1,1,0,0,2,1,1,0,1,1,2,0,2,2,1,1,2,0,0,0,2,1,2,0,1,0,2,1,2,0,2,0,1,1,1,0,0,2,1,0,1,2,0,2,0,2,0,2,1,1,2,1,2,0,1,0,2,2,1,1,],[2,0,2,0,0,1,0,2,1,0,2,2,1,1,0,0,0,2,2,1,1,1,1,2,2,1,1,1,2,0,1,1,2,2,1,1,0,1,0,2,2,1,0,0,1,0,1,1,0,2,2,0,1,0,2,2,0,2,2,0,2,0,2,2,0,1,1,1,1,2,0,0,0,2,0,0,1,0,1,1,2,2,1,1,0,1,2,1,0,1,1,2,2,0,0,2,1,0,2,2,],[2,1,1,0,2,0,0,0,1,1,2,0,1,0,2,0,2,1,0,1,1,0,2,1,0,1,0,0,2,2,0,0,1,0,0,1,2,2,0,2,1,2,0,0,0,0,0,2,0,0,0,1,1,1,1,2,2,0,1,0,1,1,2,1,1,1,2,1,1,2,0,2,0,1,1,2,2,0,0,2,0,0,0,2,2,1,1,0,2,0,1,1,2,1,1,2,1,1,2,0,],[0,1,0,0,0,0,2,0,0,0,2,0,1,1,1,2,0,1,2,2,1,1,1,1,1,2,0,2,1,1,0,1,2,1,1,1,1,0,2,0,2,1,0,2,1,0,2,1,2,2,0,0,2,0,0,1,2,2,2,1,2,2,2,0,1,1,2,2,2,2,2,2,2,0,1,0,1,1,2,2,0,0,2,1,2,2,2,0,0,1,2,1,0,1,1,0,0,1,0,2,],[0,1,0,1,1,1,2,0,2,2,2,1,1,2,0,2,0,1,0,2,1,2,0,0,0,2,2,1,1,2,0,2,2,2,2,1,1,0,1,0,1,1,0,0,0,0,2,0,0,0,2,1,1,1,2,1,0,1,0,2,1,1,2,2,1,2,2,1,0,0,1,1,1,2,1,2,1,2,0,1,1,2,0,1,1,1,0,0,1,0,2,0,2,2,1,2,2,0,2,0,],[1,0,0,0,1,0,2,2,2,1,1,1,0,1,1,0,2,1,1,2,2,1,0,2,2,1,1,0,2,1,0,2,2,1,2,1,2,0,1,2,1,0,2,0,1,1,2,2,2,1,1,1,2,0,1,2,0,2,1,0,2,0,1,0,2,0,1,0,0,0,0,2,1,0,0,0,0,1,1,2,0,2,0,1,2,2,0,0,1,1,0,0,1,1,0,0,1,1,1,1,],[1,1,0,2,0,0,2,1,2,1,1,2,0,2,1,0,2,2,0,0,0,1,2,2,2,0,0,0,1,1,0,2,2,1,1,1,0,0,1,1,1,0,0,1,1,2,2,1,0,1,0,0,2,1,1,0,1,0,0,2,0,2,0,2,2,2,1,1,1,2,1,2,2,1,1,2,0,0,2,1,0,0,1,2,2,0,2,1,0,1,0,2,1,1,0,1,0,0,1,0,],[2,2,0,2,0,2,2,2,1,1,2,2,1,1,0,0,0,2,0,1,0,0,0,1,2,1,1,2,0,1,0,0,1,2,0,0,2,1,1,0,2,1,0,1,0,1,0,1,1,2,1,2,0,2,2,0,1,0,1,1,2,2,1,0,0,0,1,0,2,2,1,2,1,1,1,0,1,1,2,1,2,0,0,0,1,1,1,0,1,2,0,0,0,2,1,1,2,2,0,2,],[1,2,0,1,0,0,0,1,1,0,1,0,2,1,0,0,2,1,1,2,2,1,2,1,2,1,0,0,1,1,0,1,0,1,2,0,0,1,2,0,2,2,2,0,1,2,0,2,2,1,1,0,2,2,1,0,0,2,0,1,1,2,2,0,2,1,1,1,1,2,0,2,2,2,1,0,0,1,2,1,1,1,0,2,2,2,0,0,1,0,0,1,2,0,1,0,2,2,0,1,],[0,1,0,1,1,1,0,1,1,1,2,2,1,0,1,1,1,0,1,0,0,2,0,2,2,2,2,2,2,1,0,2,2,2,2,1,1,1,2,0,2,1,1,0,0,0,2,2,2,1,2,1,2,2,0,2,0,1,1,2,0,1,2,1,2,0,2,1,1,0,2,0,0,0,0,1,0,1,2,2,1,2,2,1,0,2,2,2,2,2,0,0,2,0,2,1,2,0,2,0,],[1,1,2,2,0,2,2,2,2,0,0,0,0,1,2,0,1,1,0,1,2,1,2,1,0,2,0,0,2,1,2,0,0,0,0,2,1,0,2,1,2,1,2,1,2,2,0,0,0,2,2,0,1,1,1,1,0,1,0,1,2,2,0,0,1,0,2,2,1,0,0,1,0,2,1,1,2,2,1,2,1,2,1,2,2,0,1,1,0,1,2,2,2,1,0,0,2,0,0,1,],[1,2,1,0,0,1,1,0,0,2,0,2,0,2,2,1,0,1,0,0,0,1,2,2,1,1,2,1,2,0,0,0,1,1,2,0,1,1,0,2,0,1,0,1,2,2,1,2,2,1,0,2,0,1,2,1,0,0,1,2,1,1,2,0,1,2,0,2,2,2,1,1,2,1,2,2,2,2,2,2,0,0,0,0,0,2,2,0,0,1,0,1,1,2,0,0,1,0,1,1,],[0,2,0,0,2,2,2,1,2,0,1,2,1,0,1,1,1,0,2,0,0,1,1,2,2,0,0,1,0,0,1,1,2,1,1,2,2,2,0,2,1,0,1,0,0,1,1,2,2,2,2,1,1,1,0,1,1,2,0,1,2,0,0,1,0,0,1,1,1,2,0,0,0,2,1,0,0,1,1,0,1,0,0,1,1,2,1,0,1,0,0,1,0,2,1,2,2,1,2,0,],[0,2,1,0,0,0,2,2,2,2,1,1,0,0,0,1,1,1,1,0,2,2,1,0,1,0,1,2,0,1,2,0,2,0,2,0,1,0,2,1,2,0,1,2,1,1,1,0,2,0,0,0,2,2,1,1,1,0,1,0,1,0,0,1,0,1,2,0,0,2,0,1,2,0,0,2,1,2,0,1,0,2,1,1,0,0,0,1,0,2,0,2,0,0,2,2,1,1,0,0,],[2,1,2,2,2,1,1,1,0,2,1,0,2,0,0,1,2,2,0,2,0,0,0,2,2,0,1,0,1,2,2,0,0,2,0,1,2,0,0,1,0,0,0,1,0,1,2,1,1,0,1,2,0,1,1,0,2,0,2,2,2,0,2,2,2,2,0,2,2,1,1,2,0,0,0,1,1,1,1,0,2,2,2,0,1,1,1,0,0,1,2,2,1,0,2,2,1,2,1,1,],[2,0,0,1,1,0,0,2,0,2,2,0,1,2,0,1,0,0,0,0,0,2,0,2,2,2,0,1,1,1,1,1,0,2,1,1,0,0,0,0,0,1,2,2,0,0,0,1,0,0,1,1,0,2,2,0,2,2,2,1,2,0,2,0,2,1,2,0,2,1,2,0,1,1,1,2,0,1,0,0,2,2,0,0,2,2,1,0,0,0,2,0,2,0,0,1,0,2,1,0,],[0,0,2,0,2,1,1,1,2,0,0,1,2,0,1,0,1,1,2,2,1,1,2,0,2,1,2,1,0,2,1,0,2,2,0,2,1,0,0,2,2,2,0,1,0,0,1,2,2,0,2,0,0,2,0,1,0,0,0,2,1,0,1,2,2,0,0,2,0,2,0,0,2,2,1,0,0,0,2,2,2,2,1,1,0,0,2,2,2,1,2,0,0,2,1,2,0,2,2,2,],[0,0,2,2,1,1,1,0,1,2,1,0,2,0,0,1,1,1,0,1,0,1,0,1,0,1,1,2,1,0,1,0,2,0,1,2,2,2,1,0,1,0,0,0,2,1,0,1,0,0,0,1,0,1,0,2,0,2,2,0,2,0,1,1,2,2,0,0,0,0,0,2,1,2,0,0,1,2,1,2,0,0,2,1,0,2,1,1,1,0,2,1,1,2,0,1,1,2,2,1,],[1,0,0,1,2,1,1,2,1,1,2,0,2,1,2,0,1,2,2,0,1,0,2,0,2,1,1,0,2,0,2,0,2,0,2,0,1,1,0,2,2,2,2,0,0,1,2,1,0,2,1,2,1,2,2,1,0,1,1,2,2,1,0,1,0,2,1,1,2,2,1,1,1,2,0,0,2,1,1,0,0,1,2,2,1,0,2,2,0,2,0,1,2,2,0,0,0,0,1,0,],[0,0,1,1,0,1,0,2,0,0,1,1,1,1,1,2,1,0,0,1,1,0,2,2,2,0,2,2,0,2,2,1,0,1,1,2,0,0,1,2,0,2,0,0,0,1,0,1,0,1,0,0,1,0,1,2,0,2,1,1,1,2,1,0,0,1,0,0,2,0,2,2,0,1,2,2,1,1,0,1,2,1,0,2,0,1,2,1,1,2,1,0,1,1,0,0,0,0,2,1,],[0,0,2,2,2,0,0,1,0,1,2,0,1,2,1,1,2,2,1,2,0,2,1,1,1,0,2,1,2,2,0,2,1,1,1,1,2,1,0,1,2,1,2,0,0,2,1,2,0,1,0,2,2,2,1,0,2,2,2,0,2,2,0,0,2,0,0,1,1,2,2,1,2,2,2,1,1,1,0,0,0,0,0,0,2,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,],[1,1,0,0,1,2,0,1,0,2,1,1,2,2,2,2,1,0,2,0,1,0,2,0,2,0,0,1,1,2,2,2,0,2,0,0,1,2,0,1,2,1,0,2,1,1,0,0,1,0,1,0,2,0,1,0,1,1,1,1,1,1,0,1,1,1,2,0,2,0,1,0,2,2,1,0,1,2,2,0,2,1,2,0,2,0,1,2,2,1,2,2,0,0,1,2,0,2,0,0,],[0,2,0,0,0,2,2,0,2,0,0,0,0,2,0,0,2,2,0,0,2,1,2,0,1,0,0,2,2,0,0,1,2,0,1,0,2,1,1,1,2,2,0,1,1,1,0,2,2,0,0,2,0,1,1,0,2,1,0,2,1,1,2,0,1,0,0,0,2,1,2,1,1,1,0,2,1,1,2,2,2,1,0,1,0,1,0,1,0,2,2,0,0,0,1,1,0,0,2,0,],]


const swan1Img = new Image();
swan1Img.src = root+"swan-1.png";
const swan2Img = new Image();
swan2Img.src = root+"swan-2.png";
const swan3Img = new Image();
swan3Img.src = root+"swan-3.png";
const swan4Img = new Image();
swan4Img.src = root+"swan-4.png";
const swan5Img = new Image();
swan5Img.src = root+"swan-5.png";
const swan6Img = new Image();
swan6Img.src = root+"swan-6.png";
const swan7Img = new Image();
swan7Img.src = root+"swan-7.png";
const swan8Img = new Image();
swan8Img.src = root+"swan-8.png";
const swan9Img = new Image();
swan9Img.src = root+"swan-9.png";
const swan10Img = new Image();
swan10Img.src = root+"swan-10.png";
const swanSpeechImg = new Image();
swanSpeechImg.src = root+"swan-speech.png";

const gardora1Img = new Image();
gardora1Img.src = root+"gardora-1.png";
const gardora2Img = new Image();
gardora2Img.src = root+"gardora-2.png";
const gardora3Img = new Image();
gardora3Img.src = root+"gardora-3.png";
const gardora4Img = new Image();
gardora4Img.src = root+"gardora-4.png";
const gardora5Img = new Image();
gardora5Img.src = root+"gardora-5.png";
const gardora6Img = new Image();
gardora6Img.src = root+"gardora-6.png";
const gardora7Img = new Image();
gardora7Img.src = root+"gardora-7.png";
const gardora8Img = new Image();
gardora8Img.src = root+"gardora-8.png";
const gardoraSpeechImg = new Image();
gardoraSpeechImg.src = root+"gardora-speech.png";

const cPERSON_INFO = {"Swan":[[swan1Img,swan2Img,swan3Img,swan4Img,swan5Img,swan6Img,swan7Img,swan8Img,swan9Img,swan10Img,],1,swanSpeechImg,[['Why am I sweeping?', "Everything seems nicer when it's clean"], ['*Swish swish*', 'Hmm... needs more cleaning'], ['My favorite creature?', 'Hmm...', 'The tomato bunny, probably', "They're very shiny and smooth"], ["I don't like getting lost...", "It's scary..."], ['I like being near water', "Sometimes there's no ocean or lake...", "That's okay too"], ['Being clean and organized calms me.', 'I know where everything is!', "And I'm less stressed, too!"], ['What am I?', "Don't you know?", "I'm a cat.", 'Not like ___ at the shop, though'], ['My favorite drink?', 'I think just water.', 'Sometimes things taste different than I expect...', 'But water is always the same']],],"Gardora":[[gardora1Img,gardora2Img,gardora3Img,gardora4Img,gardora5Img,gardora6Img,gardora7Img,gardora8Img,],1,gardoraSpeechImg,[['♩♫♩'], ['I heard plants like music', "I can't play any instruments...", 'So I hum to them instead'], ['Plants are very cute!'], ['This plant is named Beepo', 'I love them♡'], ['I have a room full of plants!', "It's a little unorganized..."], ['My favorite creature?\\Any plant creature!', 'Hmm... if I really had to choose...', 'Maybe the flower bunny!', "They're so cute!"], ['My favorite drink?', 'Tea!', 'There are so many different flavors!']],],}


const TomatoBunny1Img = new Image();
TomatoBunny1Img.src = root+"tomato-bunny-1.png";
const TomatoBunny2Img = new Image();
TomatoBunny2Img.src = root+"tomato-bunny-2.png";

const cCREATURE_INFO = {"Tomato Bunny":[[TomatoBunny1Img,TomatoBunny2Img,],10.0,0.05,5.0,],};

const cSPAWNING_INFO = {'M': ['Tomato Bunny'], 'G': ['Tomato Bunny'], 'B': ['Tomato Bunny'], 'W': ['Tomato Bunny']};
let town_locs = [["Gensaka",[64, 6],[['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'S', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'G', 'G', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'B', 'B', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'B', 'W', 'W', 'B', 'H', 'G', 'G'], ['G', 'G', 'G', 'B', 'W', 'W', 'B', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'B', 'B', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'G', 'G', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'G', 'G']],[[2, 1, 2, 2, 1, 0, 0, 2, 1, 1], [0, 1, 2, 2, 0, 0, 0, 1, 2, 1], [2, 1, 1, 1, 1, 2, 1, 3, 0, 1], [0, 1, 0, 1, 1, 1, 2, 1, 1, 2], [1, 2, 2, 0, 2, 1, 0, 0, 2, 0], [0, 1, 1, 1, 2, 0, 1, 0, 1, 2], [0, 4, 0, 0, 1, 0, 2, 3, 1, 1], [2, 0, 2, 0, 0, 2, 0, 1, 0, 2], [1, 4, 1, 2, 1, 1, 0, 0, 2, 0], [2, 0, 2, 0, 0, 1, 0, 1, 2, 2]],[['Swan', [2, 1]], ['Gardora', [2, 7]], ['Swan', [4, 1]], ['Swan', [4, 7]], ['Gardora', [6, 1]], ['Gardora', [6, 7]], ['Swan', [8, 1]], ['Gardora', [8, 7]]], false],["Ukan",[52, 78],[['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'S', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'G', 'G', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'B', 'B', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'B', 'W', 'W', 'B', 'H', 'G', 'G'], ['G', 'G', 'G', 'B', 'W', 'W', 'B', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'B', 'B', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'G', 'G', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'G', 'G']],[[1, 1, 1, 0, 1, 0, 1, 2, 1, 0], [2, 0, 1, 1, 1, 0, 2, 2, 0, 1], [0, 4, 0, 2, 1, 2, 1, 4, 2, 2], [1, 2, 0, 2, 0, 0, 0, 1, 1, 1], [0, 4, 0, 1, 1, 1, 2, 1, 1, 0], [1, 0, 1, 1, 2, 1, 2, 2, 2, 2], [0, 0, 1, 1, 2, 0, 2, 4, 1, 0], [2, 2, 0, 0, 1, 0, 0, 1, 2, 2], [0, 1, 2, 0, 1, 0, 2, 4, 0, 2], [0, 1, 2, 2, 0, 0, 2, 1, 0, 2]],[['Swan', [2, 1]], ['Swan', [2, 7]], ['Gardora', [4, 1]], ['Swan', [4, 7]], ['Gardora', [6, 1]], ['Swan', [6, 7]], ['Swan', [8, 1]], ['Swan', [8, 7]]], false],]


// *****


const cBLOCK_WIDTH = 32;
const cBLOCK_HEIGHT = 32;

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

class Speech {
    constructor(image, all_lines, name="???") {
        this.image = image;
        this.all_lines = all_lines;
        this.lines_set_idx = 0
        this.current_line_idx = -1;
        this.name = name;
    }

    update(){
        if (this.current_line_idx >= 0) {
            ctx.drawImage(this.image, 10, 10);
            ctx.font = "15px Arial";
            ctx.fillStyle = "#fff"
            ctx.fillText(this.name, 70, 25)
            ctx.fillText(this.all_lines[this.lines_set_idx][this.current_line_idx], 70, 45);
        }
    }

    next_line(){
        if (this.current_line_idx == -1) {
            this.lines_set_idx = random_idx(this.all_lines)
        }

        this.current_line_idx++;
        if (this.current_line_idx >= this.all_lines[this.lines_set_idx].length){
            this.current_line_idx = -1
        }
    }
}



const cBLOCK_IMAGES = {
    "M":[mountain1Img, mountain2Img, mountain3Img],
    "G":[grass1Img, grass2Img, grass3Img],
    "B":[beach1Img, beach2Img, beach3Img],
    "W":[water1Img, water2Img, water3Img],
}

const cBLOCK_IMAGES_TOWNS = {
    "M":[mountain1Img, mountain2Img, mountain3Img],
    "G":[grass1Img, grass2Img, grass3Img],
    "B":[beach1Img, beach2Img, beach3Img],
    "W":[water1Img, water2Img, water3Img],
    "X":[exit1Img, exit2Img, exit3Img, exit4Img, exit5Img, exit6Img, exit7Img],
    "H":[house1Img, house2Img, house3Img, house4Img, house5Img],
    "S":[shopImg]
}

// Defining Variables
let player = new Sprite([charImg], 0, 128, 128);
let player_map_pos = {
    x:7,
    y:7
}
let player_town_pos = {
    x:0,
    y:0
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
let current_scene = "main";
let temp_town;
let current_town_idx;
let current_person;
let shop_animation_idx;
let shop_selection = "unselected";
let shop_selection_idx = 0;
let shop_options = ["Who are you?", "I wanna sell!", "Goodbye"];
let shop_conversation = ["I am the shop keeper, Kotu.", "Any creatures you find, I will buy.", "Currently, we are not selling anything."]
let shop_page = 0;
let temp_info;
let temp_idx;
let coins = 0;
let shop_coins;
let shop_selected_idxs = [];

// add town sprites
for (let i=0; i < town_locs.length; i++) {
    // WIP ADD TOWN NAME AS NOTES + WAYPOINTS
    temp_town = new Sprite([town1Img, town2Img, town3Img, town4Img], 1, ((town_locs[i][1][0]+1)*32)-player.x, ((town_locs[i][1][1]+1)*32)-player.y, undefined, town_locs[i][0]);
    town_locs[i].push(temp_town);
}

// Get Keys
document.addEventListener("keydown", direction);

function direction(event){
    if (current_scene == "town"){
        if (event.keyCode == 38){
            //up
            if (player_town_pos.y-1 >= 0){
                player_town_pos.y--;
            } else {
                alert("YOU CANNOT PASS");
            }
        } else if (event.keyCode == 40){
            //down
            if (player_town_pos.y+1 < town_locs[current_town_idx][2].length){
                player_town_pos.y++;
            } else {
                alert("YOU CANNOT PASS");
            }
        } if (event.keyCode == 37){
            //left
            if (player_town_pos.x-1 >= 0){
                player_town_pos.x--;
            } else {
                alert("YOU CANNOT PASS");
            }
        } else if (event.keyCode == 39){
            //right
            if (player_town_pos.x+1 < town_locs[current_town_idx][2][0].length){
                player_town_pos.x++;
            } else {
                alert("YOU CANNOT PASS");
            }
        }
    } else if (current_scene == "house"){
        if (event.keyCode == 38){
            //up
            if (player_house.y-32 == 0 && player_house.x == 128){
                //
            } else if (player_house.y-32 >= 0){
                player_house.y -= 32;
            } else {
                //
            }
        } else if (event.keyCode == 40){
            //down
            if (player_house.y+32 == 0 && player_house.x == 128){
                //
            } else if (player_house.y+32 < 256){
                player_house.y += 32;
            } else {
                // leave
                current_scene = "town";
                player_town_pos.y++;
            }
        } if (event.keyCode == 37){
            //left
            if (player_house.y == 0 && player_house.x-32 == 128){
                //
            } else if (player_house.x-32 >= 0){
                player_house.x -= 32;
            } else {
                //
            }
        } else if (event.keyCode == 39){
            //right
            if (player_house.y == 0 && player_house.x+32 == 128){
                //
            } else if (player_house.x+32 < 288){
                player_house.x += 32;
            } else {
                //
            }
        } else if (event.keyCode == 32){
            //talk
            if (player_house.x == 128 && player_house.y == 32){
                house_speech.next_line();
            }
        }
    } else if (current_scene == "main"){
        if (event.keyCode == 38){
            //up
            if (player_map_pos.y-1 >= 0){
                // move all
                for (let i=0; i<showing_creatures.length; i++){
                    showing_creatures[i].move_down();
                }
                for (let i=0; i<town_locs.length; i++){
                    town_locs[i][6].move_down();
                }
                player_map_pos.y--;
                movement = "up";
            } else {
                alert("YOU CANNOT PASS");
            }
        } else if (event.keyCode == 40){
            //down
            if (player_map_pos.y+1 < cMAP.length){
                for (let i=0; i<showing_creatures.length; i++){
                    showing_creatures[i].move_up();
                }
                for (let i=0; i<town_locs.length; i++){
                    town_locs[i][6].move_up();
                }
                player_map_pos.y++;
                movement = "down";
            } else {
                alert("YOU CANNOT PASS");
            }
        } if (event.keyCode == 37){
            //left
            if (player_map_pos.x-1 >= 0){
                for (let i=0; i<showing_creatures.length; i++){
                    showing_creatures[i].move_right();
                }
                for (let i=0; i<town_locs.length; i++){
                    town_locs[i][6].move_right();
                }
                player_map_pos.x--;
                movement = "left";
            } else {
                alert("YOU CANNOT PASS");
            }
        } else if (event.keyCode == 39){
            //right
            if (player_map_pos.x+1 < cMAP[0].length){
                for (let i=0; i<showing_creatures.length; i++){
                    showing_creatures[i].move_left();
                }
                for (let i=0; i<town_locs.length; i++){
                    town_locs[i][6].move_left();
                }
                player_map_pos.x++;
                movement = "right";
            } else {
                alert("YOU CANNOT PASS");
            }
        }
    } else if (current_scene == "shop"){
        if (shop_selection == "unselected"){
            if (event.keyCode == 38){
                // up
                shop_selection_idx--;
                if (shop_selection_idx < 0){
                    shop_selection_idx = shop_options.length-1;
                }
            } if (event.keyCode == 40){
                // down
                shop_selection_idx++;
            } if (event.keyCode == 32){
                // space - select
                if (shop_selection_idx%shop_options.length == 0) {
                    shop_selection = "conversation";
                    shop_selection_idx = 0;
                } else if (shop_options[shop_selection_idx%shop_options.length] == "I wanna sell!") {
                    shop_selection = "sell";
                    shop_coins = 0;
                    shop_selection_idx = 0;
                    shop_page = 0;
                    shop_selected_idxs = [];
                } else if (shop_options[shop_selection_idx%shop_options.length] == "Goodbye") {
                    current_scene = "town";
                    player_town_pos.y += 1;
                }
            }
        } else if (shop_selection == "conversation"){
            if (event.keyCode == 32){
                // space - select
                shop_selection_idx++;
            }
        } else if (shop_selection == "sell"){
            if (event.keyCode == 38){
                // up
                shop_selection_idx -= 9;
            } if (event.keyCode == 40){
                // down
                shop_selection_idx += 9;
            } if (event.keyCode == 37){
                // left
                shop_selection_idx -= 1;
            } if (event.keyCode == 39){
                // right
                shop_selection_idx += 1;
            } if (event.keyCode == 32){
                // select
                if (list_contains(shop_selected_idxs, shop_selection_idx)){
                    shop_selected_idxs = remove_item(shop_selected_idxs, shop_selection_idx);
                    shop_coins -= cCREATURE_INFO[creatures_caught[shop_selection_idx]][3];
                } else {
                    shop_selected_idxs.push(shop_selection_idx);
                    shop_coins += cCREATURE_INFO[creatures_caught[shop_selection_idx]][3];
                }
            } if (event.keyCode == 13){
                coins += shop_coins;
                creatures_caught = remove_idxs(creatures_caught, shop_selected_idxs);
                // alert("WOO");
                shop_selection = "unselected";
                shop_selection_idx = 0;
            }

            if (shop_selection_idx < 0){
                shop_selection_idx = creatures_caught.length-1;
            } else if (shop_selection_idx >= creatures_caught.length){
                shop_selection_idx = 0;
            }
        }
    }
}

// Draw
function draw(){
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, 288, 288);
    
    frames++;

    if (current_scene == "town"){
        // draw background
        counter = 0;
        temp_y = 0;
        for (let y = -4; y <= 4; y++){
            temp_x = 0;
            for (let x = -4; x <= 4; x++){
                if (player_town_pos.y+y >= 0 && player_town_pos.x+x >= 0 && player_town_pos.y+y < town_locs[current_town_idx][2].length && player_town_pos.x+x < town_locs[current_town_idx][2][0].length){
                    background[counter] = new Sprite(cBLOCK_IMAGES_TOWNS[town_locs[current_town_idx][2][player_town_pos.y+y][player_town_pos.x+x]], 0, temp_x, temp_y, town_locs[current_town_idx][3][player_town_pos.y+y][player_town_pos.x+x]);
                    background[counter].draw(frames);
                }
                counter++;
                temp_x += cBLOCK_WIDTH;
            }
            temp_y += cBLOCK_HEIGHT;
        }

        player.draw(frames);

        ctx.fillStyle = "#eef"
        ctx.fillRect(0, 288, 288, 320);

        // add text
        ctx.font = "15px Arial";
        ctx.fillStyle = "#000"
        ctx.fillText("Town: "+town_locs[current_town_idx][0], 10, 310);

        ctx.font = "15px Arial";
        ctx.fillStyle = "#000";
        ctx.fillText("Items: "+creatures_caught.length.toString(), 120, 310);
        ctx.fillText("Coins: "+coins.toString(), 200, 310);

        // update exit animation
        if (town_locs[current_town_idx][3][9][4] >= 6){
            town_locs[current_town_idx][3][9][4] = 0;
        } else {
            town_locs[current_town_idx][3][9][4]++;
        }
        // check if going into house
        for (let i=0; i < town_locs[current_town_idx][4].length; i++){
            if (player_town_pos.x == town_locs[current_town_idx][4][i][1][1] && player_town_pos.y == town_locs[current_town_idx][4][i][1][0]){
                current_scene = "house";
                current_person = town_locs[current_town_idx][4][i][0];
                person_sprite = new Sprite(cPERSON_INFO[current_person][0], cPERSON_INFO[current_person][1], 128, 0)
                player_house = new Sprite([charImg], 0, 128, 224);
                house_speech = new Speech(cPERSON_INFO[current_person][2], cPERSON_INFO[current_person][3], current_person)
            }
        }
        // check if going into shop
        if (town_locs[current_town_idx][2][player_town_pos.y][player_town_pos.x] == "S"){
            shop_animation_idx = 0;
            shop_selected_idxs = [];
            shop_coins = 0;
            current_scene = "shop";
            shop_selection = "unselected";
        }

        // check if leaving
        if (player_town_pos.x == 4 && player_town_pos.y == 9){
            current_scene = "main";
            // move down
            if (player_map_pos.y+1 < cMAP.length){
                for (let i=0; i<showing_creatures.length; i++){
                    showing_creatures[i].move_up();
                }
                for (let i=0; i<town_locs.length; i++){
                    town_locs[i][6].move_up();
                }
                player_map_pos.y++;
                movement = "down";
            } else {
                alert("YOU CANNOT PASS");
            }
        }
    } else if (current_scene == "house"){
        //current_person
        ctx.drawImage(inHouseImg, 0, 0);
        person_sprite.draw(frames);
        player_house.draw(frames);
        house_speech.update();
    } else if (current_scene == "main"){
        // draw background
        counter = 0;
        temp_y = 0;
        for (let y = -4; y <= 4; y++){
            temp_x = 0;
            for (let x = -4; x <= 4; x++){
                if (player_map_pos.y+y >= 0 && player_map_pos.x+x >= 0 && player_map_pos.y+y < cMAP.length && player_map_pos.x+x < cMAP[0].length){
                    background[counter] = new Sprite(cBLOCK_IMAGES[cMAP[player_map_pos.y+y][player_map_pos.x+x]], 0, temp_x, temp_y, parseInt(cMAP_NUM[player_map_pos.y+y][player_map_pos.x+x]));
                    background[counter].draw(frames);
                    if (movement == "up" && y == -4){
                        // spawn
                        creature_type = random_choice(cSPAWNING_INFO[cMAP[player_map_pos.y+y][player_map_pos.x+x]]);
                        if (Math.random() <= cCREATURE_INFO[creature_type][2]) {
                            // spawned!
                            temp_creature = new Sprite(cCREATURE_INFO[creature_type][0], cCREATURE_INFO[creature_type][1], temp_x, temp_y, undefined, creature_type);
                            showing_creatures.push(temp_creature);
                        }
                    } else if (movement == "down" && y == 4){
                        // spawn
                        creature_type = random_choice(cSPAWNING_INFO[cMAP[player_map_pos.y+y][player_map_pos.x+x]]);
                        if (Math.random() <= cCREATURE_INFO[creature_type][2]) {
                            // spawned!
                            temp_creature = new Sprite(cCREATURE_INFO[creature_type][0], cCREATURE_INFO[creature_type][1], temp_x, temp_y, undefined, creature_type);
                            showing_creatures.push(temp_creature);
                        }
                    } else if (movement == "right" && x == 4){
                        // spawn
                        creature_type = random_choice(cSPAWNING_INFO[cMAP[player_map_pos.y+y][player_map_pos.x+x]]);
                        if (Math.random() <= cCREATURE_INFO[creature_type][2]) {
                            // spawned!
                            temp_creature = new Sprite(cCREATURE_INFO[creature_type][0], cCREATURE_INFO[creature_type][1], temp_x, temp_y, undefined, creature_type);
                            showing_creatures.push(temp_creature);
                        }
                    } else if (movement == "left" && x == -4){
                        // spawn
                        creature_type = random_choice(cSPAWNING_INFO[cMAP[player_map_pos.y+y][player_map_pos.x+x]]);
                        if (Math.random() <= cCREATURE_INFO[creature_type][2]) {
                            // spawned!
                            temp_creature = new Sprite(cCREATURE_INFO[creature_type][0], cCREATURE_INFO[creature_type][1], temp_x, temp_y, undefined, creature_type);
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

        // draw and check towns
        for (let i=0; i < town_locs.length; i++) {
            town_locs[i][6].draw(frames);
            if (town_locs[i][6].x == player.x && town_locs[i][6].y == player.y) {
                current_town_idx = i;
                current_scene = "town";
                player_town_pos = {
                    x:5,
                    y:9
                }
                
            }
        }

        // draw and check creatures
        to_remove = [];
        for (let i=0; i < showing_creatures.length; i++){
            showing_creatures[i].draw(frames);
            if (showing_creatures[i].x == player.x && showing_creatures[i].y == player.y) {
                // caught
                creatures_caught.push(showing_creatures[i].notes);
                showing_creatures.splice(i, 1);
            }
        }
        player.draw(frames);

        ctx.fillStyle = "#eef"
        ctx.fillRect(0, 288, 288, 320);

        // add text
        ctx.font = "15px Arial";
        ctx.fillStyle = "#000"
        ctx.fillText("Coords: ("+player_map_pos.x.toString()+", "+player_map_pos.y.toString()+")", 10, 310);

        ctx.font = "15px Arial";
        ctx.fillStyle = "#000";
        ctx.fillText("Items: "+creatures_caught.length.toString(), 120, 310);
        ctx.fillText("Coins: "+coins.toString(), 200, 310);
    } else if (current_scene == "shop"){
        ctx.drawImage(shopImgs[shop_animation_idx%8], 0, 0);
        shop_animation_idx++;
        if (shop_selection == "unselected"){
            ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
            ctx.fillRect(20,110,125,100);
            ctx.fillRect(84,30,120,70);
            add_text("How can I help you?", 89, 55, 110, "15px Arial");
            for (let i = 0; i < shop_options.length; i++){
                if (i == [shop_selection_idx%shop_options.length]){
                    add_text(shop_options[i], 25, 135+(i*16), 115, "15px Arial", "#0F0");
                } else {
                    add_text(shop_options[i], 25, 135+(i*16), 115, "15px Arial", "#000");
                }
            }
            // add text
            ctx.fillStyle = "#eef"
            ctx.fillRect(0, 288, 288, 320);

            ctx.font = "15px Arial";
            ctx.fillStyle = "#000"
            ctx.fillText("Town: "+town_locs[current_town_idx][0], 10, 310);

            ctx.font = "15px Arial";
            ctx.fillStyle = "#000";
            ctx.fillText("Items: "+creatures_caught.length.toString(), 120, 310);
            ctx.fillText("Coins: "+coins.toString(), 200, 310);
        } else if (shop_selection == "conversation"){
            ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
            ctx.fillRect(20,110,125,100);
            ctx.fillRect(84,30,120,70);
            if (shop_selection_idx == shop_conversation.length){
                shop_selection = "unselected";
                shop_selection_idx = 0;
            } else {
                add_text(shop_conversation[shop_selection_idx], 89, 55, 110, "15px Arial");
            }
            // add text
            ctx.fillStyle = "#eef"
            ctx.fillRect(0, 288, 288, 320);

            ctx.font = "15px Arial";
            ctx.fillStyle = "#000"
            ctx.fillText("Town: "+town_locs[current_town_idx][0], 10, 310);

            ctx.font = "15px Arial";
            ctx.fillStyle = "#000";
            ctx.fillText("Items: "+creatures_caught.length.toString(), 120, 310);
            ctx.fillText("Coins: "+coins.toString(), 200, 310);
        } else if (shop_selection == "sell") {
            // WIP
            ctx.fillStyle = "#eef"
            ctx.fillRect(0, 0, 288, 320);
            for (let y = 0; y < 8; y++){
                for (let x = 0; x < 9; x++){
                    temp_idx = (shop_page*72)+(y*9)+x;
                    if (temp_idx >= creatures_caught.length){
                        break;
                    } else {
                        // document.write(creatures_caught[temp_idx])
                        if (list_contains(shop_selected_idxs, temp_idx)){
                            ctx.fillStyle = "#0F0";
                            ctx.fillRect(x*32, (y*32)+32, 32, 32);
                        } if (temp_idx == shop_selection_idx){
                            ctx.fillStyle = "rgba(0, 0, 150, 0.5)";
                            ctx.fillRect(x*32, (y*32)+32, 32, 32);
                        }
                        temp_info = cCREATURE_INFO[creatures_caught[temp_idx]];
                        ctx.drawImage(temp_info[0][parseInt(shop_animation_idx/temp_info[1])%temp_info[0].length], x*32, (y*32)+32);
                    }
                }
            }
            ctx.font = "15px Arial";
            ctx.fillStyle = "#000"
            ctx.fillText("Total: "+shop_coins.toString(), 10, 25);
            ctx.fillText("|Select What to Sell|", 65, 25);
            ctx.fillText("Page "+(shop_page+1).toString()+"/"+Math.ceil(creatures_caught.length/72), 205, 25);
            ctx.fillText("Coins: "+coins.toString(), 200, 310);
        }
    }
}

let game = setInterval(draw, 100);