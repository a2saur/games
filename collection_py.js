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

function remove_items(list, items){
    let new_list = [];
    let clear;
    for (let i = 0; i < list.length; i++){
        clear = true;
        for (let j = 0; j < items.length; j++){
            if (list[i] == items[j]) {
                // don't add
                clear = false;
                break
            }
        }
        if (clear) {
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

function str_bool(str){
    if (str == "true"){
        return true;
    } else if (str == "false"){
        return false;
    }
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
let shopImgs = [shop1Img, shop2Img, shop3Img, shop4Img, shop5Img, shop6Img, shop7Img, shop8Img]

const inHouseImg = new Image();
inHouseImg.src = root+"in-house.png";

const snorkelImg = new Image();
snorkelImg.src = root+"items/snorkel.png";
const snorkelOnImg = new Image();
snorkelOnImg.src = root+"items/snorkel-wear.png";
const wingsImg = new Image();
wingsImg.src = root+"items/wings.png";
const mapItemImg = new Image();
mapItemImg.src = root+"items/map-item.png";

const openingImg1 = new Image();
openingImg1.src = root+"items/opening-background.png";
const openingImg2 = new Image();
openingImg2.src = root+"items/opening-overlay-2.png";

const mapImg = new Image();
mapImg.src = root+"items/map.png";


const cMAP = [["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","W","B","B","B","B","B","W","W","W","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","W","W","W","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","G","G","G","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","B","B","B","B","B","W","W","W","W","W","W","B","W","W","B","B","B","B","B","B","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","B","B","B","B","W","W","W","W","W","W","W","W","B","B","B","B","B","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","B","B","B","W","W","W","W","B","W","B","B","B","B","B","B","B","B","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","B","B","B","W","W","W","W","W","B","B","B","B","B","B","B","B","B","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","B","B","B","B","B","B","B","B","B","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","B","B","B","B","B","B","B","B","B","B","B","B","G","B","B","B","B","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","W","W","W","W","B","B","B","G","G","G","B","G","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","B","B","B","B","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","B","B","B","B","B","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","W","B","B","B","B","B","B","B","G","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","G","B","B","B","B","B","B","B","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","G","B","B","B","B","B","B","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","G","G","G","G","G","G","G","B","B","B","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","W","W","W","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","G","G","G","G","G","G","G","B","B","B","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","W","W","W","W","W","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","G","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","G","G","G","G","G","G","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","G","G","G","G","G","G","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","W","W","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","G","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","W","W","B","B","B","B","B","B","B","W","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","W","B","B","B","B","W","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","W","B","B","B","B","W","W","W","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","W","W","W","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","W","W","W","W","W","W","B","W","W","W","B","B","B","B","B","B","B","G","G","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","G","G","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","G","G","G","G","G","G","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","G","B","B","B","B","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","W","W","W","W","W","W","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","B","B","B","B","B","B","B","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","W","B","B","W","W","W","W","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","B","B","B","B","B","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","W","B","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","G","B","G","B","B","B","B","B","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","B","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","G","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","W","W","W","W","B","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","G","G","G","G","B","G","B","B","B","B","B","B","W","W","W","B","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","W","W","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","G","G","G","B","B","B","G","B","B","B","B","B","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","W","W","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","G","G","G","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","G","B","B","B","B","W","W","W","B","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","W","W","W","B","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","W","B","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","G","G","G","G","G","G","G","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","G","G","G","G","G","G","G","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","G","G","G","G","G","G","G","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","G","G","G","G","G","G","G","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","G","G","G","G","G","G","G","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","G","G","G","G","G","G","G","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","G","G","G","G","G","G","G","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],]

const cMAP_NUM = [[2,2,0,2,2,2,2,2,2,2,2,0,1,0,1,2,1,2,2,2,1,0,2,0,1,1,1,2,1,1,2,1,0,2,1,0,2,1,2,2,2,0,0,1,0,0,2,1,1,2,2,1,2,2,1,2,1,0,1,1,0,1,2,0,2,0,2,0,2,1,1,2,1,1,0,2,1,2,0,2,1,2,0,2,0,1,0,2,1,0,2,1,0,2,0,1,0,2,0,2,0,1,1,1,0,0,2,0,2,2,2,2,2,0,1,1,2,1,1,1,2,2,2,1,2,2,0,1,1,1,0,1,1,0,2,2,1,2,2,1,1,2,2,1,2,1,0,2,2,2,],[1,0,2,0,2,0,0,0,1,2,1,1,0,2,1,2,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,2,0,2,2,2,0,1,0,1,1,1,0,2,1,2,1,1,1,0,0,2,1,2,1,0,0,1,0,0,0,1,0,1,2,1,1,2,0,0,0,2,1,0,1,0,1,0,2,2,2,0,1,1,2,0,1,0,1,0,2,2,2,0,1,0,0,0,1,0,1,2,1,1,0,1,1,2,0,2,0,2,2,1,2,0,1,2,1,0,0,1,0,0,1,1,2,2,0,0,1,0,1,0,0,0,0,1,1,1,2,2,1,2,1,0,0,2,],[1,2,0,0,2,1,1,0,0,2,0,1,2,1,0,2,1,0,2,2,2,2,1,2,0,0,2,0,0,1,1,0,0,1,2,2,2,1,0,1,1,1,1,1,0,0,0,2,1,0,0,2,2,2,1,2,1,1,2,2,0,1,1,1,0,2,1,2,0,1,2,0,1,2,2,2,2,2,2,1,0,0,1,1,2,2,0,2,0,1,2,0,0,2,2,0,2,0,2,2,1,0,2,0,2,1,1,0,0,0,0,1,1,1,0,2,0,1,0,1,1,1,1,2,1,1,0,1,1,2,2,0,1,1,0,1,0,0,1,1,0,2,0,1,1,2,2,2,2,0,],[0,2,1,1,1,1,2,0,1,1,1,1,0,0,2,0,2,1,2,1,2,2,0,1,0,1,0,1,2,0,2,0,1,2,1,2,1,2,1,0,2,1,0,0,2,2,1,2,0,2,1,1,2,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,2,0,1,1,0,0,0,0,2,2,2,0,0,2,2,2,2,1,1,0,0,0,2,1,1,2,1,2,2,2,0,1,0,1,2,2,2,2,0,0,1,0,1,1,1,2,0,2,2,1,0,2,2,2,1,2,1,0,1,1,2,2,0,2,1,0,1,1,0,2,1,0,0,0,2,1,1,0,2,0,2,1,],[1,1,2,0,2,1,1,2,1,0,1,0,2,0,1,2,2,1,0,2,0,0,1,1,0,2,2,2,0,2,0,2,2,0,1,1,1,0,0,1,1,0,1,2,2,0,0,1,2,0,1,0,0,0,0,2,1,0,0,2,2,1,1,0,2,2,0,2,0,2,2,2,2,0,0,2,1,0,0,2,0,1,1,1,2,1,1,2,2,1,1,0,2,1,1,1,1,1,0,0,1,0,1,1,1,0,2,2,1,2,2,1,0,1,1,2,0,1,0,0,1,1,0,2,1,2,2,1,2,0,2,0,0,0,0,2,0,1,0,1,1,1,1,1,1,1,2,2,2,0,],[2,0,2,2,1,1,2,0,2,0,1,1,2,0,0,2,2,0,2,0,0,2,2,1,1,2,1,0,2,2,0,0,1,1,0,2,2,1,0,1,0,2,0,1,0,2,0,1,0,0,1,0,1,1,0,1,1,0,0,0,2,2,2,1,1,2,0,1,0,2,0,0,1,2,2,0,2,0,2,2,0,0,2,2,0,2,0,0,0,2,2,2,2,2,2,1,2,0,0,0,2,1,0,2,1,1,0,1,2,1,0,0,1,0,1,0,2,2,1,1,2,2,1,1,1,2,1,2,2,2,2,1,1,0,2,1,0,1,2,1,2,0,1,1,1,1,2,0,1,2,],[2,0,1,0,2,0,2,2,0,2,2,2,2,1,0,2,1,0,2,0,0,2,1,0,1,2,1,2,0,1,1,1,2,0,1,1,2,2,2,1,0,0,1,1,2,2,0,2,1,2,1,2,1,1,2,2,1,1,0,1,2,1,2,1,0,2,0,2,1,2,1,1,0,0,0,2,0,0,2,1,1,0,1,2,1,0,0,1,0,2,1,2,2,2,0,0,1,0,2,2,2,1,2,1,0,1,1,0,1,1,2,2,1,0,2,0,1,2,0,0,0,1,1,0,2,2,0,1,1,1,2,2,0,1,2,1,2,2,1,2,1,0,0,2,1,1,2,1,0,1,],[2,2,2,2,2,1,1,0,2,1,0,1,0,0,0,2,2,0,2,0,1,1,0,1,2,0,0,2,2,1,1,1,1,2,2,2,1,2,0,2,1,2,0,0,0,0,2,2,0,1,2,2,0,1,1,0,2,2,1,0,2,0,0,0,0,2,2,0,1,0,0,2,1,1,0,0,1,2,2,1,2,0,2,1,2,0,2,2,1,1,2,0,0,0,1,1,0,2,2,1,1,2,0,2,2,1,2,2,2,0,0,2,2,1,1,0,1,1,2,2,1,2,2,0,1,1,0,2,1,2,2,0,1,0,2,0,1,1,2,1,0,0,1,0,0,1,0,0,1,1,],[1,2,0,2,0,1,2,1,2,1,0,1,2,1,1,1,0,2,2,2,2,2,1,0,0,0,0,0,1,2,2,0,1,2,2,0,2,1,2,2,2,1,0,1,2,1,1,2,0,0,0,2,1,0,0,0,2,0,2,1,2,2,1,2,2,0,2,1,0,2,1,1,1,0,2,0,0,1,2,0,1,1,2,0,2,0,1,2,1,0,0,0,2,1,0,0,0,0,2,2,1,0,1,1,1,2,2,2,1,0,0,0,0,1,1,0,1,0,2,2,2,1,0,0,1,1,2,2,1,0,0,2,1,1,2,2,1,0,1,2,2,1,0,2,0,2,2,0,2,0,],[2,0,1,0,0,0,0,1,0,2,2,0,1,0,1,1,2,2,2,1,1,1,0,0,1,2,2,2,0,1,1,2,0,1,0,1,1,1,2,0,0,1,2,1,1,1,1,0,1,0,2,2,2,2,2,2,2,2,0,2,1,0,1,0,2,1,1,2,0,1,2,2,2,0,0,2,0,0,2,0,2,2,2,0,2,0,1,2,2,2,2,0,2,1,2,1,2,1,2,2,0,2,2,0,2,0,1,2,2,0,2,1,0,1,2,1,2,0,0,1,2,2,1,1,1,1,1,1,1,1,1,1,0,0,0,2,2,0,2,2,0,1,1,1,2,2,0,0,2,0,],[0,1,1,1,0,2,0,2,2,2,2,2,0,1,2,2,2,2,0,2,0,0,0,1,1,0,2,2,0,1,1,2,1,0,0,1,1,2,0,1,2,0,0,2,2,1,0,0,0,1,0,0,1,2,1,0,1,0,2,2,1,2,0,1,1,1,0,2,1,2,1,0,2,1,0,1,2,2,0,0,1,1,2,0,1,1,1,2,1,0,2,1,0,1,2,2,0,0,1,2,2,1,2,1,1,2,0,0,1,2,2,0,2,0,0,1,2,1,0,2,1,0,0,2,2,2,1,2,0,1,2,0,0,2,0,0,2,1,0,0,2,1,2,2,0,0,1,1,2,0,],[0,0,2,1,1,0,1,0,0,2,2,1,0,0,2,0,2,1,0,1,1,0,1,2,1,0,1,1,1,2,0,0,1,0,1,0,0,2,2,1,2,0,1,0,0,2,0,2,1,0,0,1,2,2,2,2,2,2,1,1,0,1,0,2,2,2,0,0,0,1,1,0,1,2,1,2,2,0,0,1,0,2,0,0,1,1,2,0,1,2,2,2,1,0,1,0,1,2,1,2,2,0,2,0,1,0,1,2,1,0,0,0,0,2,0,2,0,2,1,0,1,1,2,0,0,0,1,1,1,0,2,2,2,2,1,0,1,0,1,0,2,0,1,0,2,0,2,0,2,1,],[1,0,2,1,2,1,0,0,2,0,0,1,0,1,0,2,0,1,2,2,2,0,1,2,1,2,0,0,0,1,1,2,1,2,1,0,1,1,0,2,1,1,2,2,1,1,0,0,0,0,1,0,1,2,0,1,0,2,0,0,0,2,1,0,1,2,1,1,0,1,1,1,2,0,0,1,0,2,2,2,0,2,0,0,2,0,0,2,1,1,1,2,1,0,0,2,2,0,0,0,2,0,0,2,1,1,0,0,1,1,1,2,1,1,2,2,0,2,2,2,1,1,1,2,0,2,0,1,1,2,2,0,1,2,0,0,2,2,2,0,0,1,2,0,1,2,2,0,0,1,],[2,0,0,2,0,2,2,2,0,0,0,2,0,0,1,2,0,1,1,0,0,2,1,2,1,0,2,2,2,2,2,2,0,2,2,0,1,0,0,0,2,0,1,2,1,1,2,2,1,2,2,0,0,1,0,2,0,0,1,1,1,1,1,1,0,0,2,2,2,1,1,1,0,1,0,1,0,0,2,2,1,2,0,1,0,2,0,2,2,1,1,2,2,1,2,2,1,2,1,1,1,1,1,0,0,0,0,1,2,1,0,0,0,1,0,1,1,2,1,1,0,0,0,2,1,2,0,2,1,1,0,1,1,0,0,0,2,2,1,1,2,0,0,0,0,1,2,1,1,1,],[1,0,2,0,0,2,1,2,2,1,0,1,0,2,0,1,0,0,2,1,2,2,1,1,1,2,2,2,1,1,2,2,0,1,0,0,2,1,2,0,2,2,1,2,0,0,2,2,1,2,1,1,1,0,0,0,2,0,2,0,0,1,1,0,2,0,1,1,0,2,0,2,2,2,0,1,2,2,0,1,1,0,2,0,2,1,2,0,1,1,1,1,2,2,2,2,2,0,0,0,2,0,0,1,2,1,2,1,0,1,1,1,1,0,1,1,2,2,0,2,0,1,2,1,2,1,2,0,2,0,1,2,1,2,1,0,2,2,0,1,1,2,2,1,2,1,0,0,0,1,],[0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,2,0,2,0,0,2,0,0,2,1,1,2,1,2,2,2,1,1,1,0,0,1,0,0,2,1,0,2,0,1,0,1,1,2,2,1,2,2,2,0,0,0,2,0,1,2,1,1,2,2,0,1,0,0,1,0,1,1,0,1,2,2,2,2,1,1,2,1,2,0,2,0,0,0,1,1,0,0,1,1,0,2,0,1,1,2,2,0,1,1,1,1,1,1,2,2,1,0,2,1,0,2,0,2,0,1,1,0,1,0,1,0,0,2,0,1,2,1,0,1,1,2,0,2,2,0,2,0,0,1,0,1,2,0,],[0,0,0,0,2,2,1,2,1,0,1,0,1,0,2,0,1,1,2,2,0,2,1,1,0,0,2,0,2,1,2,1,2,1,1,1,1,2,1,2,0,1,1,1,1,0,1,1,1,1,2,1,2,2,2,1,2,0,0,1,2,0,0,0,1,0,0,2,2,2,1,1,2,1,2,2,1,0,2,0,0,2,1,1,2,1,1,0,2,1,1,1,1,0,2,1,1,0,0,0,1,2,2,2,0,2,0,2,1,0,1,0,0,0,0,0,1,1,2,1,0,0,1,2,0,0,2,0,1,0,2,0,1,1,1,2,2,0,0,1,2,2,2,2,1,2,1,2,1,0,],[2,1,2,1,1,1,2,2,2,2,1,0,2,1,2,2,1,0,0,2,0,2,1,0,1,2,2,1,1,1,1,1,1,2,0,2,1,1,2,0,0,2,1,0,1,0,0,1,2,1,0,1,2,1,2,0,0,1,2,2,2,2,2,0,2,2,0,1,1,2,1,0,2,2,2,2,0,1,0,2,0,2,0,1,1,0,2,2,2,1,1,1,2,0,1,1,2,2,1,2,1,0,2,0,2,1,2,2,1,2,2,2,1,0,0,1,1,2,0,0,2,0,0,0,2,0,0,0,1,2,1,1,0,1,0,0,2,0,0,2,2,2,0,0,2,1,1,1,2,2,],[1,0,2,1,2,2,2,1,1,1,2,0,2,2,0,1,0,2,1,1,2,1,1,2,2,1,1,1,1,2,0,2,2,2,2,1,2,0,2,1,0,2,1,1,0,0,1,0,2,0,0,2,2,0,0,0,0,0,1,1,2,2,2,0,2,2,0,0,1,2,1,2,1,0,0,2,2,2,1,0,2,1,2,2,0,0,0,1,1,1,1,1,2,2,2,0,1,0,1,0,0,2,0,2,1,0,1,0,2,2,0,0,0,1,0,0,1,1,1,0,1,2,0,0,0,0,0,2,0,2,2,2,1,1,1,0,0,0,0,2,0,0,1,0,1,0,1,1,1,2,],[1,1,1,2,2,1,2,0,0,0,1,0,0,2,1,2,2,0,0,0,1,2,2,2,2,2,1,0,2,2,2,1,1,2,2,0,2,2,2,2,2,1,2,1,2,2,2,2,1,2,0,0,2,1,2,0,0,2,2,1,0,2,0,2,2,1,2,1,2,0,0,1,0,1,1,2,1,2,2,0,1,0,2,1,1,0,0,2,0,2,0,0,0,1,1,0,1,1,1,1,1,2,2,0,2,1,0,1,2,1,0,1,2,0,2,1,0,2,2,1,1,2,2,0,2,0,0,2,2,2,2,0,1,0,0,2,0,2,0,2,2,2,0,1,2,0,2,0,1,0,],[0,0,0,0,1,1,1,0,1,2,1,0,2,1,2,2,0,0,1,1,1,1,0,1,0,1,1,1,2,1,1,0,1,1,1,1,0,1,0,1,2,0,1,2,1,1,2,2,0,2,1,0,0,0,0,1,2,0,1,0,2,2,2,2,1,1,2,1,0,1,0,1,1,2,0,1,0,1,2,2,1,0,1,2,2,2,0,2,1,1,1,0,1,2,2,2,2,1,2,2,0,1,0,1,0,2,1,1,1,0,0,0,1,2,1,1,0,0,2,2,2,2,0,0,2,1,1,1,0,1,2,1,1,0,2,2,0,2,2,2,0,1,0,0,1,1,2,1,1,0,],[0,0,1,0,2,2,2,1,2,2,2,2,2,0,0,2,1,2,1,1,0,1,1,1,1,1,2,1,0,2,2,0,1,2,2,1,0,2,0,2,2,0,0,1,2,1,2,1,2,1,2,1,0,0,1,1,0,0,1,1,0,0,1,0,2,1,0,2,2,2,1,0,0,0,1,1,0,2,0,1,2,0,0,1,2,0,0,1,1,2,2,2,2,0,1,1,2,2,0,1,1,1,0,1,2,2,0,0,0,0,1,0,0,2,1,1,2,0,0,2,1,0,2,2,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,2,2,1,2,0,2,0,1,1,0,],[0,2,1,2,2,1,2,0,0,0,2,0,0,1,0,1,1,1,0,0,1,0,1,0,2,0,0,1,2,1,2,0,2,0,1,0,2,2,1,0,0,1,0,1,0,2,1,2,0,0,2,0,0,0,2,1,2,2,2,0,0,1,2,1,2,1,0,2,1,2,2,0,0,1,1,1,0,0,1,0,1,0,1,1,2,0,0,2,2,2,1,0,0,0,0,0,1,1,1,2,0,2,0,0,0,2,1,1,0,1,1,1,0,2,2,2,0,2,0,2,2,1,0,0,1,1,2,0,2,1,1,1,1,2,1,2,2,2,0,1,2,1,0,1,2,0,0,2,2,2,],[2,2,0,1,2,1,2,1,2,1,0,0,2,2,2,2,2,1,2,1,0,2,2,0,2,1,1,1,1,1,1,1,1,0,0,2,1,1,1,1,0,0,0,0,1,2,0,1,0,1,0,2,2,0,2,0,0,2,1,2,2,2,2,0,2,0,1,0,1,0,1,0,0,0,1,0,1,1,2,2,2,2,2,1,1,1,0,0,1,2,1,0,2,2,1,2,2,0,1,1,1,2,1,2,0,1,0,0,1,2,1,0,0,1,1,0,2,1,1,1,0,0,1,0,0,0,1,2,2,0,2,0,2,2,0,2,2,1,2,0,2,1,0,2,1,1,0,0,2,0,],[1,0,0,0,1,0,2,1,0,0,1,0,2,0,0,1,2,2,1,1,1,0,1,1,1,1,1,2,0,0,0,2,2,1,1,0,0,1,2,2,0,1,0,0,0,0,0,2,2,0,1,2,1,2,0,2,0,0,0,2,2,1,1,2,2,1,2,0,0,2,0,1,1,0,1,1,1,1,1,2,2,0,2,2,2,0,2,2,0,0,2,1,0,2,2,2,2,2,1,1,0,0,1,2,0,1,2,2,1,2,1,0,1,0,2,1,2,1,2,1,2,0,0,0,2,0,1,1,0,2,0,1,0,0,1,2,0,2,2,2,1,1,2,2,1,2,1,2,1,0,],[1,2,1,0,0,1,0,0,1,2,2,2,1,2,1,2,0,2,2,0,1,1,1,2,0,2,2,0,1,2,0,0,2,1,0,2,0,1,2,2,2,1,0,0,0,0,2,1,1,1,0,1,1,2,1,1,2,1,2,2,0,1,2,1,0,1,1,1,1,1,1,1,1,0,0,2,2,1,2,1,2,2,2,1,1,1,1,1,2,1,2,2,0,2,0,2,0,2,2,2,0,2,2,2,2,2,1,2,2,2,1,0,0,1,0,1,1,2,2,1,1,1,0,1,1,1,0,2,0,2,1,1,2,2,0,0,1,0,1,0,1,0,1,2,2,0,0,1,2,1,],[1,1,1,2,2,0,1,1,2,0,2,0,1,2,0,2,0,2,2,2,0,0,1,2,0,0,1,1,1,0,2,2,2,0,2,0,2,1,0,0,2,0,2,1,0,1,2,0,0,2,2,1,1,2,1,2,2,2,2,0,1,1,2,2,1,2,0,2,0,0,1,0,2,0,1,0,0,1,2,1,2,0,1,1,1,2,1,1,1,0,1,0,0,0,0,2,1,0,1,1,1,2,0,0,2,0,1,2,1,0,2,1,0,0,1,0,2,2,1,0,1,1,0,1,2,1,1,2,0,0,0,2,1,0,2,1,1,0,1,0,1,1,1,2,0,1,2,2,2,2,],[2,0,1,0,1,2,2,2,0,2,1,2,0,1,1,2,1,2,0,2,2,2,0,1,1,1,0,2,2,1,0,0,2,1,2,0,0,0,0,1,0,2,1,1,0,1,0,1,2,1,0,0,0,1,0,2,1,2,1,0,1,2,1,1,2,0,1,0,2,0,1,2,2,1,0,0,0,2,1,0,2,0,2,1,0,1,2,1,1,2,1,1,0,0,2,1,2,1,2,2,0,2,1,1,0,2,0,1,0,2,1,1,1,2,1,1,1,0,1,2,2,2,0,2,1,0,1,0,0,0,2,2,0,0,2,0,1,2,1,2,2,2,0,1,2,2,2,1,0,2,],[2,2,2,1,1,1,2,1,0,0,2,1,2,2,2,2,2,0,1,1,2,2,2,1,2,0,0,0,2,1,1,0,1,2,1,1,0,1,2,0,1,1,1,2,0,1,1,1,0,0,1,2,1,0,1,2,2,1,0,2,2,0,1,2,1,0,1,0,1,1,0,2,2,1,2,2,0,2,2,0,0,2,2,1,0,1,1,1,1,2,2,2,0,2,1,2,1,2,0,2,0,0,0,0,1,1,0,1,1,1,2,0,0,0,1,2,1,0,2,1,2,2,1,0,1,2,0,2,2,0,2,0,0,1,0,0,0,0,0,1,1,0,0,1,2,2,1,0,0,2,],[2,0,0,0,2,0,2,1,0,2,2,1,0,2,2,0,2,2,0,2,1,1,2,2,0,0,0,0,2,2,0,0,0,2,1,2,1,0,1,2,2,2,0,1,2,2,1,0,0,2,1,0,1,0,2,2,2,2,0,1,0,1,2,0,0,0,1,0,2,0,1,2,1,0,1,1,0,2,0,0,0,0,2,2,0,1,1,2,1,2,0,2,1,2,0,2,1,2,2,2,2,2,0,1,2,2,2,2,2,1,0,2,2,1,0,2,1,1,0,2,2,2,2,1,2,0,1,1,2,1,2,2,0,0,1,0,2,0,2,1,2,1,1,1,1,0,0,0,2,1,],[0,0,0,1,1,1,2,0,2,1,0,2,2,0,1,1,0,1,0,0,2,0,0,1,2,0,0,0,1,1,2,2,0,2,2,2,0,2,2,1,2,1,2,1,2,2,1,1,2,1,0,0,0,0,1,0,1,0,1,1,2,2,2,2,2,0,0,2,0,1,1,0,2,0,0,0,1,2,2,2,2,1,2,1,0,1,1,0,2,2,1,2,0,2,1,1,1,2,1,2,1,2,0,2,2,0,2,0,1,0,1,1,1,0,1,1,0,0,0,0,0,2,0,2,2,1,1,0,1,2,0,1,0,2,2,1,0,2,1,0,2,1,2,2,0,1,1,1,2,0,],[0,2,0,0,2,2,2,2,0,2,2,0,1,0,2,0,0,1,1,0,2,1,0,0,1,2,0,2,0,1,0,2,2,2,2,2,0,2,2,0,1,0,0,1,0,0,2,2,0,0,2,0,1,0,0,0,2,0,1,2,2,2,1,2,1,0,1,2,0,0,1,0,0,0,2,0,0,2,1,2,1,0,0,1,0,2,1,1,1,2,1,2,0,2,1,2,1,2,2,1,1,1,1,2,0,0,1,0,0,2,1,2,1,0,1,1,1,0,0,2,1,1,2,1,2,2,0,0,2,1,1,1,1,2,2,0,2,2,1,1,0,0,0,2,1,0,2,2,0,0,],[0,2,1,1,0,0,0,2,0,0,1,1,1,2,1,1,1,0,0,1,1,1,2,1,0,1,0,0,2,1,1,1,0,2,2,1,0,0,1,0,2,0,0,2,0,0,0,2,1,1,0,2,0,2,1,1,2,1,1,0,2,0,1,1,1,2,1,0,0,2,1,2,2,2,1,0,1,1,0,1,2,2,1,0,2,0,2,2,2,1,1,1,0,0,1,2,0,0,1,2,0,1,2,0,1,2,0,2,0,0,2,1,1,0,2,1,0,1,0,2,0,0,2,0,1,0,2,0,1,1,0,2,2,2,1,1,1,2,0,2,2,1,1,1,2,1,0,2,0,1,],[1,2,1,1,1,2,1,2,2,0,0,0,0,1,0,1,1,1,0,2,0,0,1,0,0,1,1,2,2,0,0,2,0,2,1,2,2,1,0,2,2,0,1,1,2,2,0,2,0,1,1,1,0,2,2,2,2,2,1,0,2,2,2,1,1,2,0,0,1,2,0,1,1,0,2,1,1,2,2,2,2,1,0,0,0,1,1,1,1,1,1,2,1,2,1,1,2,0,2,0,2,0,0,2,1,1,2,0,0,1,0,2,0,1,2,1,2,1,0,0,2,2,2,1,2,0,1,2,2,1,2,1,0,2,1,0,2,0,0,2,0,0,2,2,0,0,1,0,2,1,],[2,0,1,1,2,1,2,1,0,1,1,1,2,0,1,0,2,1,2,1,0,1,0,0,2,1,1,0,1,1,1,2,1,1,1,0,2,2,1,0,2,2,2,2,1,1,2,1,2,2,0,1,1,1,1,2,2,1,2,2,0,2,1,1,2,2,2,2,2,0,2,2,2,2,2,1,1,2,0,2,2,1,1,1,2,0,1,2,2,2,1,2,1,1,0,1,1,2,1,2,1,1,1,1,2,2,0,0,0,1,2,2,2,0,1,2,1,1,2,2,1,0,2,0,2,1,0,0,0,0,0,1,2,2,1,0,2,1,0,1,0,1,2,1,1,2,0,1,1,1,],[2,1,2,0,1,0,0,2,0,0,2,0,1,2,0,1,2,1,1,1,0,1,1,2,2,0,2,1,2,0,0,2,1,0,1,1,1,1,1,0,1,0,2,2,2,2,0,0,2,1,0,2,2,0,1,2,0,2,1,2,1,1,2,2,1,0,2,1,2,0,1,0,1,0,2,2,1,2,1,0,1,1,0,2,2,1,1,0,2,0,2,1,0,1,1,1,1,2,0,1,0,1,1,0,0,1,1,2,2,1,1,2,1,2,1,0,0,1,1,1,2,1,2,0,0,2,0,0,2,1,0,1,1,1,2,1,0,2,1,0,1,2,1,2,0,0,0,0,2,2,],[0,1,2,2,1,0,2,1,2,2,1,1,0,0,0,2,2,0,0,1,1,0,0,1,1,0,1,1,2,0,0,2,0,0,2,0,1,2,1,2,2,1,1,2,1,2,2,1,1,2,1,2,0,0,0,0,1,0,0,0,1,0,2,1,0,2,0,1,2,2,1,0,2,2,2,0,0,0,1,2,1,0,0,1,0,1,1,0,0,2,1,0,1,2,2,1,1,2,0,1,0,2,1,0,1,2,1,1,0,1,2,2,0,2,1,2,2,0,1,2,2,2,2,2,1,2,0,0,2,2,1,1,1,1,0,1,1,2,1,1,0,2,2,2,0,1,1,2,1,1,],[1,0,0,1,1,0,2,2,1,2,1,1,0,2,2,0,1,1,2,1,1,2,1,1,0,2,0,1,0,1,2,1,0,0,0,1,2,0,1,0,2,0,1,1,1,2,2,2,1,0,0,2,2,0,2,0,0,1,2,1,0,0,1,0,0,1,1,0,2,1,0,0,1,2,2,1,2,2,1,1,1,2,1,2,0,2,0,0,2,0,2,2,2,1,2,1,1,2,2,2,2,2,1,2,2,0,2,2,1,1,0,1,1,2,1,1,0,0,2,2,2,0,0,2,2,1,1,0,1,1,2,1,2,1,1,2,2,0,1,2,0,0,1,2,1,2,2,1,0,0,],[2,0,2,2,0,1,0,0,0,1,2,1,0,0,0,2,1,1,2,1,1,0,1,2,0,2,0,1,1,2,2,2,0,1,2,2,2,1,1,2,0,2,1,2,1,0,1,2,2,0,1,2,0,0,2,2,2,0,1,1,1,1,1,2,2,1,2,2,1,0,0,1,2,1,1,2,1,2,2,0,1,0,1,1,2,1,0,2,0,0,2,2,2,0,2,0,0,2,1,0,0,1,0,0,0,1,1,1,2,1,0,0,1,1,1,0,1,0,1,2,0,0,1,0,0,1,2,2,0,2,1,1,1,2,2,1,1,0,1,2,2,0,0,2,1,1,0,0,1,0,],[0,1,1,1,2,1,0,0,1,0,2,2,2,1,0,2,0,0,0,0,0,1,2,0,0,2,1,2,2,0,2,0,1,2,0,2,2,0,1,0,0,0,0,0,2,2,1,1,0,2,2,0,2,1,2,1,1,2,2,2,1,1,0,1,2,0,0,2,0,2,0,1,0,2,0,1,2,1,2,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,2,1,2,2,2,1,2,2,0,0,1,2,2,1,1,1,1,2,2,1,0,2,0,0,0,0,0,2,0,0,2,0,1,1,1,1,1,0,1,2,2,1,1,0,2,2,0,1,1,2,2,0,0,2,2,1,],[0,0,1,2,2,0,2,1,2,1,1,1,2,2,1,0,2,2,1,0,1,2,2,1,0,0,0,1,0,2,2,2,1,1,2,1,0,2,1,2,0,2,1,2,0,0,0,0,0,1,2,1,1,1,2,0,0,2,0,1,1,0,1,1,1,2,2,0,1,0,0,2,2,1,0,2,2,0,0,0,0,2,2,0,0,1,2,1,2,2,2,0,0,1,2,0,1,0,2,0,1,2,0,1,1,2,0,2,2,2,0,1,2,1,2,1,1,0,2,1,2,2,0,1,1,2,0,0,0,2,0,1,0,1,0,1,0,0,1,0,0,1,2,2,0,0,1,2,0,0,],[0,0,0,2,1,0,2,2,2,0,0,0,1,2,0,0,0,2,0,0,2,0,2,0,0,0,2,2,2,0,2,2,1,0,1,1,2,2,1,0,0,0,0,0,2,0,1,2,0,0,1,1,1,2,2,0,0,1,0,0,0,1,0,2,1,2,0,2,0,1,0,2,2,1,0,0,2,2,2,2,2,2,0,2,2,0,1,0,1,0,0,0,0,0,2,0,2,0,1,2,1,2,2,0,0,0,2,2,1,1,0,2,2,1,0,1,0,0,0,0,1,0,0,2,2,2,2,2,2,2,1,1,2,2,0,2,0,0,0,1,2,0,1,1,1,0,0,2,0,1,],[0,0,1,1,1,2,1,0,0,0,2,0,1,0,2,2,2,1,2,2,0,1,2,1,1,2,2,0,0,1,0,1,1,1,0,2,1,2,2,0,2,1,2,0,0,0,1,2,2,0,0,0,0,0,1,1,1,1,0,2,1,0,0,0,1,1,0,2,2,2,1,2,1,2,2,2,2,1,2,0,0,0,0,1,0,2,1,0,1,2,1,2,1,0,0,0,0,0,1,1,2,2,2,1,0,2,1,0,1,2,2,0,1,1,2,0,0,0,2,0,0,1,2,2,1,1,1,0,2,0,1,1,1,1,1,1,0,2,0,2,1,2,2,2,1,1,1,0,2,2,],[2,0,1,2,0,1,2,2,2,0,2,1,2,1,2,0,0,1,1,0,0,1,0,2,0,0,0,0,2,1,0,2,1,2,0,1,1,1,2,1,2,2,1,1,2,1,0,2,0,2,0,1,2,2,1,1,0,2,2,1,2,2,0,0,2,2,1,0,1,2,0,0,1,1,2,1,1,2,0,2,0,0,2,1,1,1,2,0,2,1,2,0,2,1,0,1,2,1,1,1,2,1,2,2,1,2,2,1,1,1,2,1,1,0,0,2,1,2,1,1,0,0,0,2,2,2,2,1,0,1,2,2,0,2,2,1,1,2,0,2,0,2,1,2,2,2,2,1,0,0,],[2,2,2,1,2,2,2,1,1,0,0,0,1,0,2,2,1,1,2,2,0,2,1,0,1,0,0,0,1,2,1,2,2,2,1,0,2,0,1,0,0,1,1,1,2,2,1,0,0,1,1,1,1,0,1,0,0,0,2,1,2,0,0,0,2,2,1,1,1,2,1,2,1,2,2,1,0,2,2,1,2,0,2,0,2,1,0,1,0,0,2,2,1,1,1,0,0,0,2,0,1,0,0,0,1,0,1,0,0,2,1,1,0,1,0,0,2,2,0,1,0,0,0,2,1,1,1,1,2,0,1,1,1,1,1,1,2,2,2,2,2,1,2,1,1,0,0,1,0,0,],[2,1,0,1,1,0,0,0,2,0,2,0,2,0,1,1,0,2,0,1,1,0,0,0,0,1,2,0,1,1,0,2,1,1,1,0,1,2,2,0,1,1,0,2,0,0,0,2,1,1,0,1,2,0,0,2,1,2,0,1,1,0,1,0,0,2,2,0,0,1,1,0,0,1,0,1,2,2,0,2,0,2,0,0,0,0,2,2,1,2,0,0,1,2,0,1,2,0,1,0,2,2,1,2,1,0,0,0,1,1,0,2,2,1,1,2,2,1,0,2,2,2,1,1,1,2,0,2,1,2,0,1,1,0,1,0,2,1,0,1,2,1,0,0,2,1,0,1,0,2,],[1,2,1,0,2,2,2,1,0,2,1,0,1,0,1,0,0,0,2,1,2,2,0,1,2,0,2,1,1,1,2,1,2,1,2,0,1,2,2,2,0,1,1,1,2,0,2,0,1,1,2,1,1,0,0,0,2,0,1,0,1,1,0,2,1,1,1,0,2,0,1,0,0,2,0,2,2,0,1,0,2,1,0,1,1,0,2,0,2,2,1,0,0,0,1,2,1,1,0,0,2,2,1,0,0,2,1,0,2,0,2,0,2,2,2,1,1,1,0,0,1,0,0,2,1,0,1,1,2,2,2,0,2,2,0,0,0,0,2,2,2,1,1,0,2,2,0,1,1,0,],[1,0,2,1,1,0,0,0,0,2,1,1,2,2,1,1,0,2,1,0,0,1,0,1,2,1,1,0,0,1,1,2,0,1,1,2,2,1,2,0,0,2,1,1,2,0,2,1,2,0,1,0,2,2,0,1,1,1,0,0,1,1,0,0,0,0,2,2,0,1,1,2,1,1,0,1,2,0,1,2,2,0,0,1,1,1,1,1,2,1,1,0,2,2,0,1,0,1,0,2,0,0,2,2,0,2,0,1,0,1,0,2,0,2,2,2,2,1,1,1,2,1,1,0,2,1,0,1,2,1,0,2,2,2,0,0,2,2,0,1,2,0,2,1,1,0,2,2,2,0,],[1,1,1,0,0,2,2,1,0,2,2,0,1,0,2,2,2,2,2,1,0,1,2,1,2,0,0,2,2,1,1,0,2,1,2,0,0,1,2,1,0,0,2,1,2,2,0,1,1,2,2,1,2,0,1,0,2,2,1,2,2,2,1,0,2,0,0,1,0,2,2,1,2,1,0,0,0,1,0,0,0,2,1,1,2,1,1,1,0,0,2,2,1,1,0,2,1,1,2,2,0,1,2,1,2,2,2,2,2,2,2,2,0,2,2,0,2,1,0,1,1,1,2,1,1,2,2,0,0,1,0,0,1,2,0,2,1,1,2,0,2,2,2,0,2,0,1,2,0,0,],[0,2,1,2,1,2,2,0,2,2,0,0,0,2,0,0,2,1,1,2,2,2,2,0,0,1,0,0,2,1,2,0,1,2,1,1,0,2,2,1,2,1,1,1,0,0,2,1,1,0,0,1,0,1,0,2,1,0,0,1,0,2,1,2,1,2,0,0,2,0,2,0,2,0,2,0,1,0,1,2,0,0,1,2,2,2,1,1,0,0,2,2,1,0,2,2,0,1,2,2,0,2,1,0,1,1,1,2,0,0,2,2,1,0,1,1,0,2,2,2,0,1,2,1,0,1,2,1,0,2,0,0,0,0,0,0,1,2,1,0,2,1,0,1,2,2,0,2,1,1,],[2,0,2,2,1,1,0,2,1,0,1,0,0,1,1,2,0,1,0,1,1,2,2,0,1,1,2,0,1,1,1,1,2,2,0,0,0,1,0,0,1,1,2,1,1,1,2,0,1,1,1,1,2,0,2,0,0,0,0,1,0,0,1,2,2,2,0,1,0,1,1,2,0,0,0,2,0,1,0,2,1,2,1,2,1,2,2,1,2,1,1,1,1,2,2,2,0,2,2,0,0,0,0,1,2,2,0,1,0,1,1,2,2,0,0,0,2,2,1,0,1,1,1,0,0,2,1,0,0,0,2,1,2,1,0,2,0,2,0,0,2,0,0,2,2,2,2,0,0,0,],[0,2,1,1,1,0,0,1,0,1,2,2,0,2,0,1,0,0,0,1,0,0,1,1,0,1,0,1,2,0,0,0,1,2,1,1,0,0,0,1,0,2,0,2,0,1,1,2,1,1,0,0,0,1,1,1,0,0,1,2,1,0,1,1,2,2,1,2,1,0,0,0,1,0,2,2,2,2,2,0,2,0,2,0,2,2,2,2,2,1,1,2,2,1,1,1,2,2,0,0,0,0,2,2,2,0,0,1,1,0,0,2,2,0,2,0,2,1,1,2,0,0,0,0,0,2,1,0,0,1,1,0,1,2,2,1,1,1,1,2,2,0,0,1,2,2,0,1,2,1,],[2,0,2,2,0,2,0,2,2,2,1,1,0,2,2,1,2,2,2,1,1,0,2,1,1,1,2,2,1,0,1,0,0,2,0,2,1,2,1,1,2,2,1,2,2,2,0,1,2,2,0,0,0,1,1,0,0,2,2,0,0,2,1,0,1,1,0,1,0,1,2,0,0,1,2,0,0,1,0,1,1,1,2,1,1,0,0,2,2,2,2,0,2,0,0,2,2,2,0,0,2,2,1,0,2,2,2,2,1,1,1,1,2,2,2,1,0,2,1,2,2,0,1,2,0,2,2,0,0,0,1,0,1,2,1,2,2,1,0,0,1,1,0,0,0,0,2,0,0,2,],[2,1,0,2,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,2,1,1,0,0,1,2,1,1,1,2,2,2,0,2,1,0,2,1,0,1,2,1,1,0,2,0,0,2,0,1,2,0,2,2,2,1,0,2,0,1,1,2,0,2,2,0,0,2,1,0,2,2,2,2,0,0,2,1,0,1,2,2,2,2,0,0,2,2,2,1,0,2,0,2,1,1,1,2,2,2,2,0,2,1,0,1,2,0,2,0,2,2,0,1,2,2,1,2,2,1,1,2,1,2,1,1,2,0,0,2,0,1,1,0,0,1,2,0,2,1,2,2,1,0,2,1,2,0,0,0,],[0,0,1,1,1,0,1,0,1,2,2,2,0,0,0,2,1,1,2,2,2,2,1,0,2,1,0,0,2,2,2,2,1,1,2,0,1,0,0,2,0,1,2,0,0,2,0,2,1,0,0,2,1,1,0,1,1,2,1,0,1,2,0,1,1,2,0,2,1,1,0,0,0,0,1,2,1,1,1,1,2,2,1,2,1,1,0,0,0,1,0,2,0,2,1,1,1,1,1,0,1,2,2,0,0,1,0,2,2,0,0,2,0,0,2,0,0,0,0,0,1,0,1,2,1,2,1,0,2,1,0,0,2,1,1,2,2,2,1,0,1,2,1,2,0,2,2,2,1,2,],[2,1,2,2,1,0,2,1,1,1,1,2,1,2,2,2,2,2,2,2,2,2,0,2,1,1,0,2,2,1,0,1,2,2,2,0,0,0,2,2,0,2,1,2,0,0,1,2,1,1,2,0,2,0,1,1,0,0,0,0,0,0,1,0,0,2,2,0,1,2,2,2,2,0,0,0,2,2,1,2,1,1,0,2,1,2,2,0,2,1,1,0,1,1,2,2,2,1,1,0,2,2,0,0,0,0,1,1,1,0,1,2,0,1,1,1,1,1,0,2,2,1,1,1,0,2,1,0,1,0,1,0,1,2,0,2,0,0,1,2,1,0,1,2,2,2,1,1,2,0,],[2,1,2,2,2,0,1,2,2,0,0,2,2,1,2,0,2,0,2,1,1,2,1,1,2,2,1,0,0,0,0,0,0,1,2,2,1,2,1,0,2,0,0,1,0,2,1,2,1,0,0,1,2,1,1,2,1,1,0,2,0,1,2,0,1,0,1,1,0,2,0,1,0,1,2,0,2,2,2,1,0,0,0,2,0,1,0,1,2,2,2,2,1,1,1,1,2,0,1,2,2,2,1,2,0,2,0,0,1,2,0,2,1,2,2,2,1,2,0,0,0,2,1,1,1,0,0,2,0,1,0,2,1,0,1,1,0,1,1,2,1,0,0,2,1,2,0,2,2,2,],[0,1,1,1,1,1,2,1,2,1,2,2,1,0,1,1,2,1,0,2,1,1,1,1,2,1,2,1,1,2,2,2,0,2,0,1,1,2,1,2,0,1,0,0,0,1,0,1,0,1,0,2,1,2,1,0,2,2,1,2,0,2,0,0,2,1,0,0,0,1,1,2,2,2,2,2,1,0,2,2,1,2,1,1,0,0,0,0,1,0,0,2,0,2,1,1,1,0,0,2,0,2,2,1,2,0,1,1,1,0,1,2,1,1,1,0,2,1,2,2,1,0,0,0,2,2,0,0,2,1,1,0,1,2,2,2,2,2,0,0,1,0,0,0,0,2,0,2,1,2,],[0,2,0,0,1,2,0,2,2,2,1,1,0,2,0,0,1,1,1,0,2,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,2,0,2,1,0,0,1,2,0,0,1,0,1,0,1,0,0,0,2,1,0,2,1,2,0,1,1,1,0,2,2,0,2,0,2,1,2,2,0,0,2,2,0,0,2,2,2,1,0,1,2,0,0,2,0,1,2,1,1,1,1,2,2,2,2,0,2,0,2,0,1,2,0,2,1,0,2,1,0,0,2,0,0,2,2,0,1,0,0,1,2,2,2,1,2,0,1,2,1,1,0,2,2,1,1,1,2,0,0,1,1,0,2,],[2,1,1,1,1,2,2,0,0,0,0,1,0,1,2,0,1,1,0,2,1,0,2,2,0,2,1,2,1,2,1,2,2,0,2,0,2,2,1,2,0,0,1,0,1,0,0,2,2,2,1,1,0,1,2,2,2,1,0,2,1,0,1,2,0,0,0,1,0,2,0,1,2,1,2,1,1,2,0,1,0,1,0,0,0,1,1,0,0,2,0,0,2,0,1,2,0,0,2,1,2,2,0,1,1,0,0,0,0,0,0,2,2,1,2,2,0,2,1,2,0,2,2,1,2,0,2,2,2,2,1,0,1,2,0,1,1,0,0,2,0,0,0,2,2,1,0,0,2,1,],[0,0,2,2,1,0,1,2,1,2,0,0,2,1,0,2,2,2,1,2,2,0,1,1,2,1,1,2,0,1,1,0,0,0,0,1,2,0,0,0,1,0,2,2,2,1,0,1,2,1,1,0,0,1,2,0,2,2,2,1,2,2,1,1,1,1,1,0,2,2,1,0,2,2,0,2,0,2,0,2,0,1,1,1,2,0,2,2,2,2,0,2,1,0,0,2,1,2,1,2,0,1,2,1,1,1,1,2,1,2,1,2,1,0,0,0,2,0,0,1,2,2,0,0,1,2,2,1,2,0,2,0,2,0,2,0,0,1,0,1,1,1,0,2,0,1,2,2,2,0,],[1,2,2,1,1,2,2,2,0,1,1,2,1,0,1,0,2,2,1,2,2,1,0,1,1,0,2,2,1,2,0,0,1,1,1,2,1,1,2,1,1,0,2,2,1,2,1,0,2,2,2,1,0,2,1,1,0,0,0,1,2,2,0,2,2,1,2,2,1,2,0,2,2,2,1,1,0,1,0,0,0,2,1,2,1,0,2,0,2,0,0,2,2,1,0,1,1,1,2,0,0,0,2,0,2,1,1,2,1,0,1,0,0,1,0,2,1,1,0,1,2,0,1,1,2,1,1,1,1,1,0,0,2,0,1,0,2,1,2,2,1,2,0,0,1,2,1,2,2,2,],[0,1,0,2,0,0,2,1,2,0,1,0,1,0,0,0,1,1,2,2,2,1,2,1,2,0,1,0,0,2,1,1,0,2,0,1,2,2,0,1,1,2,2,1,2,2,2,0,0,2,1,2,0,1,1,1,2,0,0,0,2,1,0,2,0,2,0,2,1,1,1,1,1,0,2,2,2,1,2,1,1,1,0,0,0,0,0,1,1,0,1,2,0,2,2,1,1,2,1,0,2,2,1,2,2,2,2,0,0,1,2,2,0,0,2,0,2,0,1,0,0,0,0,0,0,0,2,2,0,1,1,0,2,2,1,0,0,0,2,1,0,0,0,2,2,0,1,0,0,1,],[2,0,2,0,1,2,2,0,1,2,2,1,0,0,1,2,0,2,2,0,2,2,1,1,0,0,0,1,2,0,0,2,1,0,1,1,1,0,2,0,1,0,0,0,0,1,1,0,1,2,0,0,1,2,0,1,0,0,2,1,0,0,1,2,1,1,0,1,1,1,0,1,0,1,1,2,0,1,1,1,2,1,2,1,2,2,2,0,1,0,0,2,2,2,0,0,0,1,2,1,2,1,2,0,1,2,1,0,0,1,1,0,0,0,0,2,2,1,0,0,2,0,2,0,1,2,0,2,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,2,1,1,2,2,0,0,],[2,1,0,0,0,1,1,1,0,0,0,0,2,1,2,0,2,0,2,0,0,0,1,2,1,2,0,2,0,2,2,2,1,0,0,2,2,2,0,2,1,2,0,1,1,1,2,0,2,2,0,0,0,0,2,2,1,2,1,1,0,1,0,2,2,2,2,2,1,0,0,1,2,0,2,0,1,0,2,2,2,1,2,2,2,2,1,1,0,2,2,1,0,1,1,1,1,0,1,2,1,2,2,2,0,1,2,2,0,1,1,0,2,1,0,2,1,1,1,2,0,1,2,0,0,0,1,1,2,2,0,2,1,0,1,2,2,1,0,0,1,0,1,0,1,2,1,0,1,0,],[1,2,2,1,0,2,0,0,2,1,0,1,0,0,2,1,2,0,1,0,1,0,1,0,2,2,2,1,0,2,2,0,1,1,1,0,0,0,0,0,2,2,1,2,1,2,2,2,1,1,2,2,2,0,1,2,2,0,2,2,2,0,2,0,0,2,2,0,2,1,1,1,1,0,1,1,2,2,0,2,0,1,0,0,1,2,1,0,0,1,0,2,1,0,2,2,2,2,0,0,0,0,0,0,0,0,1,2,1,1,1,1,1,0,2,2,1,1,0,2,2,2,0,0,2,1,1,2,2,2,2,2,1,2,0,2,0,1,2,1,2,1,2,1,2,1,2,0,1,1,],[1,0,0,0,2,1,1,2,1,2,0,1,0,2,1,2,2,2,0,0,1,0,1,1,0,0,2,1,2,1,0,1,1,2,2,1,0,0,0,1,1,0,0,0,1,2,1,0,0,0,2,2,1,0,2,0,2,1,0,0,0,2,0,2,2,2,1,1,0,1,2,0,2,2,0,1,2,0,0,0,2,1,1,1,1,2,0,1,1,0,0,2,2,0,2,2,1,2,1,0,1,0,0,2,0,0,1,2,0,0,2,1,1,2,1,1,2,0,1,1,2,2,2,2,2,0,2,0,1,1,1,0,0,0,1,2,0,1,0,2,2,0,0,1,0,1,0,0,0,1,],[2,1,1,1,2,2,0,1,1,1,2,0,0,0,0,1,0,1,2,1,1,0,0,1,1,2,2,1,2,0,1,0,0,0,2,1,1,0,0,1,2,0,2,1,2,2,1,2,2,0,2,1,0,1,1,0,1,2,2,1,2,2,1,1,2,1,0,0,1,0,0,0,2,1,1,1,2,0,0,2,0,2,1,0,1,2,2,0,2,1,2,2,0,2,1,2,2,2,1,1,1,1,0,0,2,1,2,0,2,2,1,2,1,0,1,1,0,1,0,0,0,0,2,2,1,2,2,0,1,2,2,0,2,0,0,2,1,1,1,2,0,2,2,2,1,2,0,2,1,1,],[1,0,1,1,1,2,2,0,1,1,1,1,0,2,0,2,2,1,0,2,1,0,2,1,1,2,1,1,2,2,0,0,1,0,0,2,1,2,2,2,1,1,1,0,0,2,0,0,0,0,1,2,0,0,2,2,0,0,1,1,2,1,1,1,2,2,2,2,1,2,1,0,1,0,1,0,0,0,0,1,2,2,0,2,1,1,0,1,0,1,1,1,2,1,1,0,1,1,0,2,0,0,1,0,0,2,2,1,2,1,2,0,2,2,1,0,0,2,1,1,2,2,1,2,0,1,1,2,2,2,0,1,2,2,0,0,1,0,1,0,0,1,1,0,0,0,0,0,2,0,],[2,2,0,2,1,0,1,0,1,1,0,2,2,1,0,2,2,0,0,0,1,2,1,0,0,0,2,1,1,2,1,0,0,2,2,2,2,0,0,0,1,0,1,1,0,0,1,0,2,1,2,1,2,1,1,2,0,0,2,0,1,2,0,0,0,1,2,0,0,1,0,0,2,1,1,2,2,1,1,0,0,2,2,0,1,0,1,0,1,0,0,1,2,2,1,1,1,2,1,2,1,0,1,2,0,0,0,1,1,0,2,0,0,2,2,1,2,1,0,2,1,1,0,2,2,0,1,0,0,2,2,1,1,1,1,2,2,1,1,2,1,2,2,0,2,2,1,1,0,0,],[0,2,1,2,0,0,2,0,0,2,0,1,2,1,2,1,1,1,1,1,0,2,2,2,0,1,1,1,2,2,1,1,0,2,2,0,0,1,1,2,0,1,0,1,1,1,2,2,1,0,2,2,0,0,0,0,2,1,1,2,0,1,0,1,0,1,0,2,0,2,1,1,0,2,2,0,2,2,1,2,2,2,0,1,0,2,0,0,1,2,2,0,1,0,0,1,1,1,1,1,2,0,2,1,1,1,0,2,0,1,1,0,2,0,2,0,1,0,2,2,1,2,0,1,0,1,2,2,0,2,1,2,2,2,0,1,0,2,2,0,0,2,2,0,0,2,0,1,0,0,],[2,2,0,0,0,0,1,2,1,0,1,0,0,0,1,2,2,1,2,1,2,2,1,2,0,2,2,1,2,0,2,1,1,0,1,0,0,0,1,2,1,1,1,1,2,1,0,2,2,2,0,2,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,2,0,0,0,1,2,2,2,2,1,1,0,2,1,2,1,2,0,1,0,2,0,2,2,2,1,2,1,1,0,1,1,0,2,2,2,0,1,0,2,0,1,1,2,2,0,1,1,2,0,1,1,0,2,0,0,1,2,1,2,0,1,2,2,0,2,1,0,1,2,0,0,1,1,1,2,1,2,2,1,0,0,1,],[0,0,0,1,1,1,0,0,0,2,1,2,2,1,1,1,1,2,2,0,1,2,2,1,0,2,1,0,1,0,2,2,2,2,0,0,2,0,0,0,1,1,0,0,2,1,1,0,1,1,0,2,1,2,2,0,0,0,2,2,2,2,1,1,2,0,2,1,2,2,2,2,2,2,2,1,1,1,0,2,2,1,1,0,2,1,0,2,1,1,0,0,2,2,0,1,1,1,2,2,1,1,1,2,1,0,0,2,0,2,1,2,1,2,2,2,2,0,1,1,1,1,1,0,1,1,0,1,0,2,1,2,2,1,2,1,0,1,2,1,1,0,2,2,0,2,0,0,1,2,],[1,0,0,1,2,0,2,2,2,2,0,2,1,2,1,1,1,0,2,1,2,1,2,2,1,2,2,2,2,2,0,1,1,0,1,2,1,1,1,2,2,0,0,0,1,0,1,2,1,2,2,0,1,1,1,0,1,1,2,0,0,0,0,0,2,2,0,2,0,1,2,1,2,2,0,1,0,0,2,2,0,0,1,1,2,2,2,0,0,2,0,1,2,0,0,0,2,0,2,1,0,2,2,2,2,0,0,2,2,1,1,1,2,1,0,2,0,0,1,1,2,0,0,1,0,1,0,2,2,0,2,2,0,1,2,1,2,1,0,2,1,2,0,1,0,1,2,1,1,2,],[1,0,1,1,1,1,0,2,2,2,1,0,0,0,0,0,2,1,1,1,2,0,0,1,2,1,0,0,0,1,1,2,0,0,2,2,1,1,2,0,0,1,2,2,0,1,1,2,1,0,0,0,0,2,2,0,1,0,1,1,2,0,2,2,2,1,0,2,1,0,0,2,1,2,0,2,0,0,2,1,1,2,0,0,0,0,1,2,2,2,2,2,0,1,0,0,1,1,2,1,2,1,1,2,0,2,2,1,1,0,0,2,2,0,1,0,2,1,0,2,0,1,1,0,2,2,0,1,2,2,2,1,2,1,2,1,2,0,1,2,1,1,0,0,1,2,1,1,2,2,],[0,0,1,0,2,1,0,2,1,2,2,0,2,0,2,2,1,2,0,1,1,0,2,0,1,2,0,0,2,2,0,1,1,1,2,2,1,0,1,0,2,2,0,2,0,1,0,1,0,0,2,2,2,2,2,0,1,1,1,1,1,1,0,0,0,2,0,1,0,0,2,2,2,1,2,0,2,1,1,1,0,0,2,0,1,1,1,0,2,0,0,1,0,1,0,1,1,0,0,2,1,1,0,2,0,0,2,0,1,0,0,0,2,1,1,0,1,2,0,0,0,2,0,2,2,0,0,2,1,2,1,2,0,0,0,1,0,1,1,0,0,2,1,2,1,2,0,0,0,0,],[1,0,1,1,2,2,0,0,0,1,0,1,0,2,1,0,1,1,2,2,1,1,1,1,1,1,2,1,1,0,1,2,0,1,2,2,0,1,1,1,0,1,2,2,1,2,2,0,0,1,2,1,0,1,0,0,1,1,0,0,2,2,1,0,2,2,0,0,2,1,1,0,2,0,2,1,2,2,0,1,2,1,2,0,2,2,1,2,0,0,0,2,2,2,0,1,2,0,0,2,1,2,2,2,0,1,0,0,1,1,1,0,1,1,0,0,2,0,2,0,0,0,2,1,0,0,2,2,2,0,2,2,1,2,1,0,1,2,1,2,0,1,1,0,2,2,0,2,1,2,],[2,2,2,0,2,1,2,1,0,0,2,0,1,2,1,0,0,2,2,2,1,0,0,1,0,2,0,0,2,1,0,2,1,1,1,1,0,0,1,1,0,0,0,0,1,0,2,2,0,0,1,1,0,2,2,0,0,1,2,2,1,0,2,1,1,0,1,2,1,0,1,2,0,1,1,1,1,2,0,0,2,0,2,2,1,0,1,0,0,2,2,0,1,2,0,2,2,2,1,1,2,1,2,0,0,2,2,0,2,1,1,0,1,0,0,0,0,2,1,1,2,2,0,1,1,0,2,0,1,2,1,1,1,2,2,1,0,0,1,0,0,1,0,0,0,0,0,0,2,1,],[1,2,1,2,1,1,2,0,1,2,1,2,0,1,2,1,2,2,2,1,0,2,0,1,0,2,2,1,1,0,1,2,1,2,1,0,1,0,2,1,0,0,0,2,0,0,0,0,1,0,1,1,1,0,2,1,1,2,0,2,0,2,1,2,0,2,1,2,2,0,2,1,2,0,0,2,1,2,2,0,2,0,2,1,0,1,1,2,1,1,0,2,1,0,0,2,0,0,1,0,2,2,0,2,2,0,1,1,0,0,1,2,2,0,0,2,0,0,2,1,2,2,0,1,1,1,0,1,0,1,0,2,0,0,1,1,0,2,2,2,2,2,2,1,0,1,0,1,1,2,],[1,2,1,1,1,2,0,2,1,0,2,2,1,0,1,2,1,2,2,0,2,1,1,1,2,1,0,0,1,1,2,0,2,2,0,1,1,0,1,2,1,2,2,1,1,2,2,2,1,2,1,1,0,2,2,2,2,0,1,2,1,1,1,1,2,1,0,0,0,0,0,1,0,0,1,0,0,1,1,2,2,0,0,2,1,1,0,0,2,0,1,2,1,0,1,1,1,0,2,2,1,2,0,0,0,2,1,1,2,2,2,1,1,1,1,2,1,2,2,1,2,1,2,1,0,0,0,2,2,2,0,2,1,0,1,0,2,1,1,2,2,0,1,2,0,1,2,0,0,0,],[1,2,0,2,2,2,0,2,1,0,1,2,0,1,0,0,1,1,2,2,2,1,1,2,0,1,0,1,0,2,1,0,2,1,2,2,2,2,1,0,1,0,1,1,2,2,2,0,1,2,1,2,2,0,2,2,0,2,2,1,0,2,0,2,0,2,0,1,1,0,1,1,0,2,0,0,0,0,1,1,2,0,1,1,1,0,2,0,1,0,2,2,0,1,2,2,1,2,1,1,2,0,1,1,1,2,1,1,1,0,0,0,1,1,0,2,0,2,0,2,1,0,0,2,2,2,0,2,1,0,1,2,2,1,0,0,0,1,0,1,1,2,0,1,0,0,2,1,1,0,],[2,0,2,0,1,2,1,2,2,1,1,1,2,1,0,0,1,1,0,0,2,1,1,2,0,0,0,0,0,2,1,1,0,0,2,1,2,0,2,1,2,1,2,0,1,0,2,2,2,1,2,0,1,2,0,1,2,2,2,0,1,2,2,2,2,0,2,2,0,2,0,2,1,2,1,2,2,2,2,0,2,0,0,0,0,0,0,2,2,2,0,0,0,1,0,0,0,2,2,1,2,0,0,0,1,0,2,0,0,2,2,2,2,2,2,2,2,1,0,1,1,2,1,2,2,0,1,1,2,0,1,0,1,1,0,1,0,2,1,0,0,1,1,2,0,0,1,2,2,0,],[2,2,2,2,2,0,0,0,0,2,0,2,0,1,2,1,0,1,2,0,1,2,0,0,1,1,2,1,0,0,2,0,0,2,1,2,0,1,0,1,2,1,0,2,1,0,0,2,0,2,0,0,1,2,1,0,0,0,0,0,0,2,1,2,1,1,0,1,1,1,0,0,0,0,0,2,2,1,1,0,2,1,0,2,0,2,2,0,2,1,0,2,1,2,2,1,0,2,0,0,0,0,1,0,1,2,2,2,2,2,1,0,0,2,2,2,1,0,0,2,2,1,2,2,1,1,2,1,1,1,1,1,0,1,0,2,0,1,2,0,1,1,1,2,2,0,0,1,0,2,],[0,1,0,1,0,2,0,0,0,2,1,1,2,2,2,1,2,0,1,1,2,1,1,0,2,2,1,1,1,1,2,0,1,0,1,2,1,1,0,2,0,1,2,1,0,1,0,2,2,0,1,2,1,1,0,2,1,2,0,1,1,1,2,2,2,0,1,1,0,0,1,1,1,2,0,0,0,1,0,2,1,1,0,0,0,2,0,0,0,0,1,1,1,0,0,2,0,2,1,2,0,1,1,0,1,0,1,1,2,1,1,0,2,1,0,0,0,2,0,2,1,0,0,2,0,2,2,2,1,1,1,0,2,1,0,0,1,0,1,0,1,1,0,0,2,2,2,2,0,1,],[2,2,2,0,1,2,0,1,2,0,2,1,2,0,0,1,2,0,0,0,1,0,1,1,0,0,2,2,1,2,1,0,1,1,1,0,2,2,2,2,0,0,0,1,1,0,2,0,2,2,0,0,2,2,1,1,2,1,1,0,0,1,0,0,1,0,2,0,0,1,1,1,0,1,2,2,1,1,1,2,2,0,0,0,1,1,2,1,2,1,2,0,2,2,0,0,1,2,1,0,0,0,2,1,0,1,2,1,1,2,2,1,2,0,2,2,2,2,2,2,1,0,1,1,1,2,2,2,0,2,2,2,1,1,1,0,0,0,1,0,0,1,2,1,1,2,1,0,1,1,],[2,2,1,1,2,2,0,0,1,0,1,0,2,2,2,2,1,0,1,0,1,0,0,0,2,2,1,0,2,2,2,0,0,2,1,0,2,0,0,1,0,0,0,1,2,0,0,1,2,1,2,2,0,1,1,1,2,1,1,2,0,0,0,2,0,0,0,2,2,1,2,2,1,1,0,1,1,1,1,1,1,0,1,0,2,1,0,0,2,0,0,1,0,2,0,2,2,2,2,2,0,1,1,0,1,0,0,1,1,0,1,1,2,2,1,1,2,1,2,2,0,2,0,1,1,0,2,0,0,0,2,0,2,2,0,2,2,0,0,1,2,0,0,1,0,1,0,2,0,0,],[2,1,2,1,0,1,2,0,2,2,0,0,0,2,0,2,2,1,1,2,2,0,0,1,1,1,0,0,1,1,1,2,1,1,1,0,1,2,1,2,2,1,0,2,2,0,0,2,2,1,0,0,0,2,2,1,2,0,2,2,1,2,0,0,0,2,0,1,2,1,2,2,0,0,0,2,0,2,1,2,1,0,2,1,1,0,0,0,1,1,1,0,2,2,2,2,1,0,0,1,1,2,1,1,0,1,0,1,0,2,0,2,2,2,1,2,1,2,2,1,0,2,1,0,2,2,1,1,1,2,1,0,1,0,2,1,1,0,2,0,2,1,2,1,2,0,1,1,2,0,],[2,0,0,2,1,2,0,2,2,2,1,0,1,0,0,1,0,0,0,2,0,1,1,0,2,1,1,0,1,0,0,2,0,0,2,2,1,1,2,0,0,2,1,0,1,0,2,0,0,2,0,2,2,1,0,1,0,0,1,2,1,1,1,1,2,1,2,1,1,2,2,0,0,2,1,0,1,0,1,1,0,2,2,0,0,2,0,1,2,2,0,0,2,2,0,2,0,0,0,0,2,1,1,0,0,1,1,2,0,0,0,1,2,1,1,2,1,2,2,0,2,2,1,0,1,2,1,0,0,0,2,1,0,2,1,0,1,0,0,1,0,0,1,0,2,0,2,2,2,1,],[1,2,2,1,1,1,2,1,2,1,1,1,2,0,2,0,1,2,2,0,0,0,2,2,0,0,2,2,1,0,1,2,1,2,2,1,2,1,1,0,1,2,2,1,0,1,2,0,1,0,2,1,2,2,0,1,1,0,2,0,2,0,0,1,0,1,0,1,1,2,1,1,2,0,0,1,2,1,1,2,0,2,0,1,1,2,2,1,2,0,2,1,0,1,0,2,2,0,2,1,1,0,1,0,2,1,0,1,1,2,1,2,2,0,2,2,0,2,2,2,1,0,2,2,1,0,1,2,2,0,2,1,2,0,1,2,1,1,1,0,1,1,2,2,0,1,1,1,1,2,],[1,2,1,1,1,1,0,0,0,1,2,1,1,0,2,2,0,2,2,2,2,0,2,0,0,2,1,0,0,1,0,1,1,2,2,2,1,1,0,2,2,1,0,2,2,0,1,0,2,2,1,1,0,1,2,1,1,2,2,1,1,0,0,1,2,0,0,1,1,1,2,0,0,2,2,0,2,1,2,1,2,1,1,2,2,0,2,2,2,2,0,0,0,0,0,1,1,0,2,2,0,1,0,0,0,1,2,0,0,2,0,2,0,0,0,1,1,0,2,1,1,2,1,0,1,0,2,2,0,0,1,0,2,1,0,0,0,1,2,0,2,2,0,1,0,0,2,2,2,2,],[2,1,0,1,2,1,2,0,0,1,1,2,0,0,0,1,2,0,1,0,0,0,0,0,0,1,1,1,2,1,2,1,1,1,0,0,1,2,0,1,1,1,0,1,1,1,0,2,0,2,0,1,0,2,1,1,1,2,0,1,1,2,0,2,1,2,0,1,0,1,0,1,2,2,1,1,2,1,1,1,1,1,1,1,0,0,2,0,1,1,0,0,0,1,2,0,2,0,0,0,1,1,2,1,1,0,1,2,1,0,1,1,2,1,0,0,1,2,1,0,1,2,2,2,1,1,0,1,2,1,2,0,0,2,1,0,1,2,1,2,0,1,2,2,2,2,0,2,0,1,],[1,1,1,1,0,1,0,2,0,1,1,0,2,2,1,1,1,2,1,2,0,1,1,2,1,2,0,0,0,1,0,2,1,0,1,0,1,1,0,0,0,0,1,0,1,1,2,1,2,2,1,0,1,2,2,0,1,1,2,1,0,0,0,1,2,2,0,0,2,1,2,1,0,0,0,0,2,0,1,1,1,1,2,0,1,0,0,0,2,0,1,1,2,0,2,2,2,1,0,0,0,0,1,2,1,0,2,0,0,0,0,1,2,1,1,1,2,0,1,1,0,2,2,0,1,2,2,2,1,0,0,2,1,1,1,1,1,2,1,0,0,1,0,1,1,1,0,1,0,1,],[0,2,1,1,1,1,1,2,2,1,2,0,0,1,2,2,2,2,2,1,0,0,1,1,2,0,2,1,1,0,2,2,2,2,0,1,0,0,0,1,1,2,2,1,1,2,2,1,2,1,1,2,2,1,1,0,0,2,1,2,1,1,0,2,2,2,0,2,2,0,1,2,2,2,0,2,1,2,2,0,0,1,0,2,0,0,1,2,1,0,0,2,2,1,1,1,1,2,1,0,1,1,2,0,2,2,0,0,2,0,0,0,2,1,0,1,0,2,0,0,1,1,0,1,1,2,2,1,1,1,2,0,1,0,1,2,0,0,1,2,0,2,1,0,1,2,1,2,2,1,],[0,0,0,0,2,2,0,0,1,0,2,2,0,2,2,0,0,2,2,1,1,1,1,1,2,2,0,2,0,2,0,2,2,0,1,1,0,1,0,2,2,1,2,1,2,0,0,0,1,1,0,0,1,1,0,0,2,1,1,0,0,0,1,0,0,2,1,0,0,2,2,2,1,1,2,0,0,0,2,0,1,0,2,1,0,1,2,0,2,0,2,0,2,1,0,1,1,0,0,2,2,1,0,2,2,0,2,0,2,0,2,0,1,2,1,0,2,0,2,0,2,0,1,0,0,2,1,1,1,0,1,2,0,0,1,0,0,1,1,0,1,2,1,1,0,2,2,1,2,0,],[0,0,1,0,2,2,2,0,1,2,1,0,2,2,0,2,2,2,0,1,1,2,1,2,2,0,1,0,1,0,2,2,2,1,0,1,2,0,0,2,1,1,2,1,0,0,2,0,2,1,0,1,2,0,0,0,2,1,0,1,0,2,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,2,0,0,1,0,2,0,1,2,2,1,1,1,2,1,1,0,0,2,1,2,2,2,1,1,0,0,2,2,2,1,2,1,1,0,0,0,2,2,1,0,1,0,2,2,2,0,2,0,0,1,1,1,0,0,0,1,2,1,1,0,2,1,1,0,2,0,0,2,1,2,2,0,],[1,1,0,0,2,0,0,0,2,1,1,1,2,0,1,1,0,2,1,1,2,0,1,0,0,1,1,2,1,0,1,2,1,0,0,2,0,0,1,2,0,1,1,1,0,0,2,2,0,0,2,2,0,1,1,1,2,0,0,0,0,1,1,1,0,1,1,0,2,2,2,2,0,1,1,1,1,0,2,0,1,0,0,1,1,2,0,0,2,0,2,1,0,2,1,2,1,0,0,2,2,0,0,0,1,2,1,0,0,0,1,0,0,2,1,0,1,2,2,2,1,2,0,1,0,2,2,0,0,1,2,0,1,2,0,0,1,2,0,2,0,2,1,0,0,1,2,2,2,0,],[2,2,2,1,2,2,0,0,0,1,0,2,1,0,1,2,0,0,1,2,0,0,0,1,1,2,2,2,1,1,2,2,1,0,1,0,1,0,1,2,1,1,1,1,1,1,0,1,0,2,2,1,0,0,0,1,0,2,2,2,2,2,0,0,1,1,1,1,0,2,1,0,1,2,1,0,0,1,0,0,1,0,1,0,2,0,0,1,1,2,1,1,1,0,2,2,1,1,2,1,1,1,0,0,1,0,2,2,2,2,2,2,0,0,2,2,0,1,1,2,0,2,2,0,0,0,0,2,2,2,1,0,0,2,2,0,1,0,2,0,2,0,0,0,2,1,0,2,1,2,],[2,0,0,2,0,2,1,2,1,1,1,2,1,1,1,1,2,1,2,0,1,1,2,1,0,1,2,0,1,0,1,0,2,0,0,2,1,2,2,0,1,1,1,1,2,2,0,2,0,1,0,0,2,2,1,1,1,0,1,2,1,2,1,0,2,1,2,2,1,0,1,1,1,1,2,0,2,1,2,2,1,1,2,1,2,1,1,1,2,0,0,0,1,0,1,2,0,1,1,2,1,0,1,2,2,1,2,1,2,0,0,2,0,0,2,1,0,0,1,1,2,2,2,0,0,2,0,2,1,0,2,2,1,1,2,2,0,1,1,0,2,0,2,0,2,0,2,1,1,0,],[2,0,1,1,1,2,2,2,2,0,0,0,2,2,0,2,1,0,1,2,2,0,2,1,0,0,1,1,1,0,0,2,2,2,1,1,1,0,2,1,1,2,0,1,2,2,2,0,1,0,1,2,1,2,0,1,0,0,2,0,0,0,0,2,1,0,2,2,0,2,0,2,1,1,1,2,2,1,2,1,2,0,1,2,0,2,1,1,0,2,0,1,1,0,2,1,1,1,0,2,2,0,1,2,2,2,0,0,0,2,2,2,0,1,0,2,2,2,1,1,2,2,2,1,1,0,1,1,2,1,0,1,1,1,2,0,2,0,1,1,0,0,2,0,1,2,1,0,1,1,],[2,2,2,0,2,0,2,0,0,1,2,1,1,2,0,0,1,0,0,0,1,2,0,2,0,0,0,1,0,0,0,1,2,2,0,2,1,1,2,0,1,0,2,0,1,2,2,2,2,1,0,2,2,1,1,0,2,0,0,0,0,1,2,2,0,1,2,2,2,0,2,1,2,0,2,0,0,0,2,1,1,2,2,1,2,2,1,1,1,0,2,2,2,1,2,1,2,0,1,1,1,1,1,0,1,0,2,2,1,2,1,2,2,1,0,1,2,1,1,0,1,1,2,0,0,0,2,1,0,0,2,1,1,2,1,0,0,1,0,1,2,2,2,1,0,0,2,2,1,0,],[1,1,2,1,0,1,0,1,0,0,2,1,0,1,2,1,0,2,1,2,1,1,0,1,0,1,0,1,0,2,2,1,2,0,0,2,1,2,1,0,2,0,1,0,1,0,1,0,0,1,2,0,0,2,0,2,1,1,2,2,1,1,0,0,0,2,2,1,0,2,2,1,2,2,1,1,2,1,2,1,0,1,0,2,0,1,0,0,0,0,0,0,0,2,2,2,1,2,0,0,1,1,0,2,1,0,0,1,1,0,2,1,0,0,0,0,1,1,0,0,0,2,0,1,0,1,1,0,2,0,0,2,2,2,1,2,2,2,1,0,2,0,2,2,2,0,2,2,1,2,],[0,1,2,0,2,0,0,2,0,1,1,2,1,0,2,2,1,1,0,2,0,2,2,1,1,1,2,1,2,1,1,0,0,1,2,0,2,0,2,1,0,2,0,2,2,2,0,2,1,1,2,0,2,1,0,1,1,1,0,1,2,1,0,2,2,0,1,1,1,0,0,1,0,2,0,2,2,1,0,1,2,0,1,0,2,2,1,1,0,2,1,2,0,0,1,1,0,2,2,1,1,1,1,0,0,1,0,1,0,0,1,1,2,2,2,2,2,0,1,2,2,2,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,2,1,0,1,1,1,1,2,0,1,0,1,],[1,1,2,2,2,2,0,2,2,1,1,1,1,1,2,0,0,1,1,2,1,1,1,0,0,2,1,1,0,1,2,0,2,1,0,0,2,1,0,0,2,1,1,2,1,2,0,0,0,2,2,0,0,1,2,1,1,1,0,2,1,2,2,1,0,2,0,0,0,1,1,2,0,0,2,2,1,1,1,1,0,2,2,2,0,2,0,1,1,2,2,2,2,1,0,2,2,1,0,1,0,1,1,2,2,2,1,1,2,0,0,0,2,1,2,1,1,0,2,1,2,1,2,1,1,2,0,1,2,2,2,1,2,2,2,1,0,0,0,0,0,0,2,2,0,1,0,1,2,0,],[0,0,2,2,2,2,0,2,0,0,1,2,0,2,1,2,1,0,0,2,0,2,0,0,0,0,2,0,0,1,1,0,2,2,0,1,0,2,1,1,0,0,1,1,0,1,0,2,1,2,2,1,2,2,1,2,0,2,1,1,2,1,2,2,2,2,2,1,0,0,1,0,2,2,2,0,0,0,1,0,1,1,0,1,0,2,0,2,2,1,1,1,2,1,0,2,2,2,0,0,1,1,0,1,2,1,2,2,0,1,2,0,0,1,1,1,1,0,1,2,1,0,1,2,2,2,0,0,1,2,2,0,1,2,0,1,1,0,0,1,1,0,2,1,2,1,2,2,0,2,],[1,1,0,1,1,0,2,2,0,0,1,1,2,0,0,0,1,2,0,1,0,0,0,2,2,1,0,1,0,0,2,2,0,2,0,1,2,1,0,1,1,2,2,0,0,0,0,0,2,1,0,1,0,0,2,1,1,0,0,2,0,0,1,0,0,2,2,2,2,2,0,2,2,1,0,1,2,0,1,0,0,1,0,2,0,0,2,1,0,2,2,2,2,2,1,1,1,0,1,1,1,2,0,0,1,1,1,0,2,0,0,1,1,1,1,2,1,0,1,2,1,2,1,0,2,1,0,2,2,0,2,1,0,1,2,0,0,2,1,2,1,0,1,0,1,1,1,1,1,1,],[2,2,1,1,2,2,0,1,2,1,0,0,0,1,0,0,2,2,0,1,1,1,1,1,1,1,2,0,0,0,1,1,0,2,2,0,1,0,1,2,1,1,2,1,0,2,1,1,1,0,0,0,1,2,0,2,1,0,0,1,2,1,1,2,0,2,0,1,0,2,2,2,0,2,0,0,1,1,2,0,2,1,2,0,0,0,0,1,0,1,1,1,2,1,0,1,2,2,0,2,2,2,0,2,0,2,0,0,0,1,2,2,1,0,1,1,0,0,2,0,1,2,0,0,0,2,0,1,0,2,2,1,0,2,0,0,2,2,2,0,1,1,0,2,2,0,2,1,1,1,],[2,0,1,0,2,1,1,1,0,1,1,2,0,1,2,2,0,2,2,1,2,1,0,1,2,0,1,2,1,0,2,2,1,2,0,2,1,0,2,0,0,2,1,1,2,0,2,2,2,0,0,2,1,2,0,0,0,0,2,2,2,0,0,0,1,0,1,0,1,1,1,1,2,2,1,1,2,0,1,2,1,2,2,2,2,0,0,2,0,1,0,2,0,1,0,1,2,2,2,2,1,0,2,0,2,1,1,1,1,1,2,0,1,2,2,1,1,0,1,2,1,0,1,1,2,2,1,1,2,0,0,0,1,0,1,1,1,2,0,1,0,2,1,0,2,0,0,1,1,1,],[1,2,1,1,2,2,0,1,2,2,2,1,2,0,0,0,2,1,1,0,1,2,1,0,2,2,0,1,1,1,2,0,2,0,2,0,1,1,0,0,2,2,2,1,1,0,0,2,0,0,1,1,2,2,1,0,2,1,0,2,1,2,0,2,0,2,2,0,1,0,0,2,2,0,0,1,2,0,0,0,2,2,2,2,2,1,0,0,2,2,0,2,1,2,1,1,2,1,1,1,2,1,0,2,0,1,1,2,0,0,2,1,1,1,1,0,2,0,1,0,2,2,2,1,2,0,0,2,2,1,1,1,0,2,1,1,1,2,0,2,2,1,2,0,1,1,0,1,0,2,],[2,0,2,0,0,1,0,2,1,1,2,2,2,1,2,0,0,0,2,1,1,1,0,2,0,1,2,2,1,1,1,1,1,1,2,1,2,1,1,1,1,1,0,0,1,0,0,2,0,1,1,2,0,1,1,0,0,1,2,0,2,0,1,1,2,2,0,0,0,1,0,2,2,0,2,2,1,2,0,0,2,0,1,0,2,0,0,1,0,2,1,2,1,1,2,1,1,0,0,0,2,1,1,0,1,2,1,0,2,0,2,0,2,2,0,1,1,1,1,0,0,2,0,1,0,0,2,0,2,0,1,0,0,1,0,2,1,1,2,0,2,2,0,0,0,2,1,0,1,2,],[0,1,1,2,1,1,1,2,0,0,2,2,1,1,1,2,0,2,0,0,0,0,0,1,2,1,0,2,0,0,2,2,1,0,1,0,0,2,2,2,2,2,1,1,2,0,2,1,1,2,0,0,2,1,1,1,0,2,0,2,1,0,1,2,0,1,2,0,1,2,0,2,1,2,2,1,0,1,2,2,1,0,2,0,0,1,1,0,0,1,0,2,2,1,2,0,1,2,0,2,1,1,1,1,2,0,2,1,1,0,1,0,2,0,2,2,0,2,0,0,0,2,1,0,2,1,2,2,2,1,2,0,2,0,0,2,2,1,1,0,0,2,0,0,0,2,2,0,1,0,],[0,0,0,2,0,2,1,1,0,2,1,0,0,2,1,0,1,2,2,2,0,1,2,0,0,1,1,0,2,2,1,2,2,0,0,2,0,1,1,2,0,2,2,2,2,2,2,2,1,0,2,1,1,1,1,0,2,1,1,1,2,0,1,2,0,1,2,2,1,2,2,2,2,1,0,2,0,0,1,1,2,2,1,2,2,2,0,0,0,2,2,0,0,0,1,0,0,2,2,0,1,0,1,2,1,1,2,1,1,1,1,0,0,1,2,1,2,0,2,1,0,2,1,2,2,1,1,0,1,1,1,1,2,1,2,1,2,1,1,0,0,0,2,1,1,0,0,1,0,2,],[0,2,2,0,2,2,2,2,2,2,1,2,2,1,1,0,1,1,0,1,0,2,2,2,0,2,1,1,2,1,2,0,0,2,1,0,1,2,0,0,0,0,1,2,2,0,0,0,2,2,1,0,0,2,0,0,1,1,0,0,2,1,1,2,1,1,0,1,2,1,1,2,2,0,0,2,1,2,1,1,0,2,2,1,2,2,1,0,1,2,1,2,1,2,0,1,1,1,2,1,1,2,2,1,1,2,0,0,2,1,0,2,0,2,0,1,0,0,2,0,2,0,2,0,2,2,1,1,2,2,2,0,0,1,0,1,0,0,1,1,2,2,2,2,0,2,2,1,1,1,],[2,1,2,2,0,2,2,1,2,2,1,2,1,0,1,1,1,1,1,0,1,1,2,0,0,1,0,1,2,2,2,1,2,1,1,2,0,0,2,0,1,0,0,0,0,1,0,0,0,2,1,1,2,2,0,0,2,2,1,0,1,2,1,2,1,1,1,2,1,2,0,0,0,2,0,2,1,1,2,2,1,0,0,1,2,2,0,1,2,2,0,0,2,0,2,0,2,0,2,1,2,1,2,1,1,2,2,2,0,0,1,0,0,0,2,0,2,2,0,2,0,1,1,0,0,1,0,1,2,2,2,0,0,2,2,1,0,1,1,2,2,0,1,0,0,0,2,1,1,1,],[2,0,1,1,0,1,0,2,0,1,0,0,0,1,1,2,1,2,2,0,1,2,2,0,2,2,0,2,0,2,0,2,1,2,2,1,1,0,1,0,2,2,0,1,0,1,0,1,0,1,2,1,0,2,2,0,1,1,0,1,1,1,0,1,2,0,0,1,1,2,0,2,1,0,1,1,1,2,2,2,2,0,1,2,0,1,0,2,2,2,1,2,1,0,1,1,0,0,2,2,2,2,0,1,0,0,2,0,2,2,0,2,2,2,1,2,2,0,0,1,0,2,1,1,2,2,2,0,0,0,0,1,0,2,0,1,1,0,2,0,0,2,0,1,1,2,0,1,0,2,],[0,2,0,0,2,0,2,2,0,1,1,1,2,1,0,1,1,0,2,0,1,0,2,0,1,1,0,2,0,0,0,0,1,0,2,0,0,0,2,2,0,1,1,2,1,0,2,0,0,1,1,0,2,0,2,0,0,0,0,2,1,1,1,0,0,2,2,2,2,2,2,0,1,1,0,0,0,0,0,2,1,1,1,2,2,0,2,0,0,1,2,1,1,2,1,0,0,1,1,2,2,1,2,2,2,2,0,1,1,0,2,1,1,0,1,2,0,2,1,2,0,0,0,1,0,1,0,2,1,2,0,0,0,1,2,0,2,0,1,2,0,2,1,2,1,2,2,1,1,2,],[2,0,2,0,1,1,2,0,1,1,2,1,1,1,0,0,1,1,2,1,1,2,0,2,1,2,2,1,1,1,0,0,2,2,0,0,2,1,1,0,0,0,2,2,0,0,0,2,1,1,0,2,0,1,2,2,0,1,1,1,2,2,1,1,2,2,1,2,1,0,2,2,2,2,2,0,1,2,2,1,2,1,2,0,2,0,1,2,0,2,1,1,1,2,0,0,1,2,2,1,2,1,0,2,1,2,2,0,0,1,1,2,2,1,1,2,1,1,2,2,1,1,2,0,1,1,2,1,2,1,0,2,1,2,0,1,1,2,1,1,0,0,1,0,0,2,2,2,1,0,],[1,2,1,0,2,1,0,0,2,1,0,2,0,1,2,2,2,0,0,0,1,2,0,2,1,2,0,0,2,1,0,2,1,0,1,2,1,2,2,2,2,2,0,1,1,0,0,1,0,2,0,2,2,2,2,0,1,2,0,2,2,0,2,0,2,1,2,2,1,1,1,0,2,0,2,1,2,1,1,1,2,1,0,1,1,0,1,1,0,1,2,1,2,1,1,0,0,2,2,0,0,1,2,1,0,1,1,0,2,0,0,2,2,1,2,0,2,1,0,1,0,0,0,0,0,0,2,2,2,1,2,2,0,1,1,1,2,0,2,1,0,0,1,2,0,0,1,0,1,2,],[1,2,0,2,1,1,1,2,2,1,2,2,2,2,0,1,2,0,0,2,0,0,0,2,0,1,2,0,1,1,2,2,1,1,0,1,1,2,2,1,2,1,2,0,2,2,0,1,0,0,0,0,1,1,2,0,1,0,2,2,2,2,1,1,2,0,2,1,1,1,2,2,1,1,1,2,2,2,0,1,0,2,0,0,2,1,0,0,2,0,2,2,1,2,2,0,0,2,0,2,0,2,1,0,1,0,1,2,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,2,2,0,2,2,1,2,1,0,0,2,2,0,1,1,1,1,1,2,0,0,1,0,0,0,2,],[2,1,0,2,1,2,0,0,2,2,2,1,2,1,2,2,0,1,1,1,0,0,2,2,1,0,2,2,2,0,0,1,1,2,0,2,2,0,2,0,0,1,0,2,2,1,1,2,2,2,0,0,1,2,1,2,1,0,1,1,1,0,1,2,0,0,0,0,2,1,0,0,0,0,1,1,0,1,0,0,2,0,0,1,2,2,1,2,0,1,2,2,2,2,0,1,2,2,1,1,2,1,2,1,2,2,0,0,1,0,1,2,1,1,2,1,0,1,1,0,0,1,1,2,2,1,0,2,0,1,1,2,0,0,1,2,1,1,0,0,2,0,2,1,1,0,2,2,0,0,],[1,0,0,0,1,0,1,0,1,2,2,2,1,2,1,2,1,0,1,2,1,2,2,0,0,0,2,0,2,0,1,2,1,2,2,1,2,1,2,1,1,2,0,1,0,2,0,2,0,2,0,2,2,1,2,2,2,2,2,0,0,2,0,0,1,1,1,0,1,2,2,2,0,0,1,2,1,1,1,2,2,1,0,1,1,0,2,2,2,2,1,0,1,2,0,1,0,0,0,2,2,0,1,2,0,2,2,1,0,2,1,1,1,2,1,1,2,2,0,0,0,2,2,0,1,1,1,2,1,1,2,0,0,0,2,0,0,2,0,1,2,1,2,0,0,0,2,2,2,2,],[2,2,0,0,2,0,1,1,0,2,0,1,0,0,1,2,0,1,2,2,0,1,0,2,0,2,1,2,2,1,2,1,1,2,2,2,0,2,0,1,1,1,2,1,2,1,1,0,0,0,1,2,1,1,1,2,0,2,0,1,0,0,2,2,0,1,1,0,2,2,1,1,2,2,1,1,1,0,2,2,1,1,1,2,1,0,1,2,0,2,0,2,2,1,1,0,1,0,0,0,1,1,0,0,1,2,0,2,0,0,1,0,2,2,2,1,0,0,0,0,1,0,2,1,2,0,0,0,1,2,0,0,1,1,1,0,2,2,1,2,0,0,2,1,0,1,2,2,1,2,],[1,2,2,0,2,0,1,2,2,2,0,1,2,1,0,1,1,2,2,2,1,0,1,0,1,2,0,2,1,1,1,2,2,0,0,1,0,2,1,1,0,1,1,0,1,1,2,2,1,2,1,1,1,0,0,0,0,1,2,2,2,0,2,2,0,1,0,2,2,0,2,2,1,2,2,1,2,1,0,2,2,0,0,0,2,1,1,1,1,0,0,0,1,1,0,2,1,1,0,0,2,0,0,2,2,0,0,2,2,2,0,2,0,2,1,1,2,1,0,1,2,2,1,0,1,0,1,0,0,2,1,2,2,1,2,0,1,1,0,0,1,1,0,0,2,0,2,0,1,2,],[1,1,2,1,0,2,2,1,0,1,2,0,0,1,0,2,0,0,2,0,1,0,2,0,1,1,2,2,1,0,0,0,1,2,0,1,0,2,0,1,1,0,2,2,2,0,2,2,1,2,2,0,1,0,2,0,1,2,2,2,1,2,0,0,0,2,0,1,2,0,0,0,2,0,1,0,0,0,0,1,0,2,2,2,0,0,0,2,0,0,2,2,1,2,0,0,0,2,0,0,0,2,2,0,0,2,1,1,1,0,0,2,2,1,0,0,0,1,0,0,0,1,0,2,1,0,0,0,1,0,1,1,0,2,1,1,1,0,1,2,2,0,0,1,0,1,1,0,1,2,],[2,2,0,2,1,1,1,0,0,0,2,0,2,0,2,1,0,1,2,0,2,2,0,0,2,1,1,1,2,1,2,0,0,0,1,1,1,1,2,0,0,0,0,0,2,1,2,2,1,2,0,1,0,0,1,2,1,2,0,2,1,0,2,0,1,2,0,2,1,1,1,2,2,1,1,2,2,0,1,0,0,1,2,2,0,2,2,0,1,1,0,2,0,0,0,2,1,2,2,0,1,1,2,0,0,0,2,1,2,2,0,2,2,0,2,1,0,0,0,2,2,1,1,2,2,2,2,2,1,1,0,2,2,0,0,1,1,1,0,2,2,2,1,2,2,0,0,1,0,2,],[0,0,0,1,2,0,0,0,1,0,2,2,0,2,1,1,2,0,1,0,2,0,2,0,1,0,0,2,2,0,2,1,1,0,1,2,2,2,1,0,2,1,1,2,1,2,2,0,0,2,2,0,1,2,2,0,0,1,2,0,0,1,0,1,0,0,2,1,1,2,1,1,1,2,0,2,1,0,2,2,0,2,2,2,0,2,2,2,0,1,1,2,1,0,1,2,0,2,1,0,2,0,1,0,2,2,2,2,1,1,2,1,0,0,0,0,1,2,0,0,0,0,0,2,1,0,0,2,1,0,0,1,2,0,2,2,1,2,0,2,2,1,2,0,2,2,2,2,1,1,],[2,0,1,2,1,0,0,1,1,2,0,2,0,2,0,1,1,0,1,2,0,1,1,0,1,0,0,2,0,2,0,2,2,2,2,2,1,0,2,0,1,0,0,1,2,0,0,2,0,2,1,2,0,1,2,1,2,1,1,0,2,2,1,1,0,2,1,0,0,1,1,0,0,0,1,2,2,2,1,2,0,2,0,1,0,2,2,2,1,2,2,2,1,1,1,2,1,2,0,0,1,2,0,1,0,0,0,1,1,1,2,1,0,1,0,1,0,1,1,2,0,2,2,2,1,1,2,1,2,2,1,1,1,0,0,2,1,1,0,1,1,1,1,2,0,0,2,1,0,0,],[1,2,0,0,1,0,1,1,1,0,1,1,1,2,0,0,0,2,2,1,1,1,2,2,2,1,0,1,1,0,0,0,0,1,1,1,2,2,2,0,2,2,0,1,1,0,2,0,1,1,0,0,0,0,2,2,0,1,1,1,0,2,0,2,0,1,0,1,0,0,2,2,0,1,0,2,1,2,2,2,1,1,1,2,0,0,1,0,1,2,0,2,0,2,1,2,0,1,2,2,2,0,1,2,2,2,2,2,2,2,0,2,2,1,0,1,0,0,1,2,2,1,2,0,1,0,1,1,1,2,1,0,1,2,1,1,0,2,0,1,1,1,2,2,0,2,2,2,2,1,],[2,0,1,2,0,0,2,0,2,0,1,0,1,1,0,2,0,1,1,0,1,0,2,2,0,2,2,2,2,1,1,2,1,1,0,2,0,1,2,2,2,0,0,2,0,2,2,0,2,1,2,2,1,1,0,0,2,0,1,2,0,1,1,1,2,0,0,1,2,1,0,2,0,2,1,2,0,0,2,1,1,0,1,2,0,0,0,1,2,1,1,0,1,2,0,0,0,1,2,0,0,1,1,1,0,1,0,0,2,2,0,0,2,1,1,1,1,0,0,1,1,2,0,2,2,0,1,1,2,0,2,2,0,0,0,1,1,0,2,0,0,0,0,2,2,2,2,1,2,1,],[2,2,2,1,2,0,2,1,2,0,2,0,0,1,0,1,2,0,0,1,2,2,2,0,1,1,1,2,0,0,0,2,1,2,0,0,0,0,2,2,0,2,0,0,2,0,1,1,0,1,0,0,2,2,2,1,2,1,0,2,1,1,1,1,2,1,0,1,1,2,0,2,1,2,1,2,1,2,1,0,1,1,0,2,1,1,0,2,1,1,0,1,0,0,1,0,0,2,0,2,2,1,1,1,0,2,0,2,1,1,0,2,1,0,0,2,0,2,1,2,0,2,2,2,1,1,0,2,2,1,2,2,2,1,0,1,2,2,2,0,2,0,2,1,0,1,0,1,1,0,],[1,0,0,2,0,0,0,0,2,2,0,2,1,0,2,2,1,1,1,1,1,0,1,0,1,2,0,0,0,2,2,2,2,0,1,1,0,0,0,1,2,2,1,2,1,1,2,0,1,2,0,0,2,1,1,0,0,2,2,0,0,0,2,2,1,1,0,0,0,2,2,1,1,2,0,0,0,2,1,1,1,2,1,0,1,0,1,0,2,1,1,0,1,0,2,1,2,1,2,2,2,2,1,1,0,2,0,0,0,0,1,0,1,0,1,1,2,1,0,1,0,1,2,0,0,0,2,2,1,1,0,1,2,2,0,1,1,0,0,1,1,1,1,0,1,1,1,2,2,1,],[2,1,2,1,1,0,1,0,1,1,1,0,1,1,2,2,0,1,0,1,0,1,2,1,1,1,2,0,0,2,2,1,0,0,2,0,2,1,1,1,2,1,0,2,1,2,2,1,0,2,0,0,2,0,1,0,2,2,0,1,2,1,1,1,1,2,2,0,1,0,1,0,1,2,2,2,1,0,0,0,0,1,1,1,1,2,1,1,0,0,2,1,2,2,2,1,0,2,1,1,2,0,0,1,1,2,2,0,1,0,0,0,2,0,2,1,0,2,1,0,2,0,1,0,2,0,2,2,2,1,1,0,2,0,1,1,1,1,1,1,2,0,0,1,0,2,2,2,1,2,],[2,1,0,1,2,1,0,0,2,2,0,1,2,2,1,0,1,2,2,2,2,0,2,1,1,2,2,2,1,2,0,2,0,2,1,1,1,1,2,2,0,2,2,2,0,0,0,0,2,1,2,0,0,2,2,2,2,0,0,0,2,1,2,0,2,2,0,0,1,1,2,2,0,1,0,0,0,0,0,0,2,2,2,0,2,2,2,1,0,1,1,2,1,0,1,1,0,0,1,2,1,0,2,0,1,0,0,1,2,0,2,1,0,2,2,1,2,1,1,0,1,2,1,1,1,0,2,0,0,2,2,0,2,2,1,1,1,1,2,1,0,2,0,0,1,0,1,0,1,2,],[0,2,0,0,2,0,2,1,0,0,2,1,2,0,0,0,0,1,2,1,1,0,0,0,1,2,0,0,1,2,1,2,2,0,0,1,1,2,0,2,0,1,2,1,1,0,2,2,0,2,2,2,2,2,1,1,0,2,1,0,1,0,0,1,0,0,1,2,1,2,2,0,1,1,0,0,1,2,1,0,2,1,1,0,1,1,1,0,0,2,0,1,0,1,0,0,1,2,2,2,1,2,1,1,0,0,2,0,2,1,0,2,2,1,0,0,2,2,1,2,2,0,2,1,2,2,2,1,0,0,1,0,2,0,0,0,2,1,0,0,2,1,2,0,0,0,2,1,0,2,],[0,1,0,1,0,2,0,1,1,1,0,0,2,0,0,1,0,0,0,1,1,0,2,0,2,0,2,2,2,0,1,1,2,0,0,1,1,1,1,2,2,1,2,0,1,0,0,0,2,0,1,0,1,1,2,0,2,2,1,0,2,1,0,2,2,2,2,2,1,1,0,1,0,2,0,0,0,1,0,2,1,2,1,0,2,0,2,1,1,1,0,0,1,2,2,1,1,1,0,0,1,1,1,0,2,0,2,0,0,1,0,2,1,2,1,1,0,0,2,2,1,1,0,2,1,1,2,1,2,0,1,0,1,2,0,0,0,0,1,2,1,0,1,0,1,2,1,1,2,0,],[2,1,1,0,1,2,2,1,0,0,1,2,0,1,1,2,1,0,1,1,1,2,2,0,2,0,2,1,2,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,2,2,1,2,1,2,1,2,0,1,0,0,1,0,2,1,0,2,1,1,0,0,1,2,2,2,0,1,2,0,1,0,0,2,1,2,2,0,0,0,0,2,2,2,0,0,0,0,2,0,0,0,1,0,2,1,0,0,0,1,1,1,1,1,1,2,2,0,0,1,0,2,0,1,2,0,2,2,0,0,1,0,1,1,1,0,0,0,1,2,2,2,2,2,0,0,2,0,2,2,1,],[0,1,2,0,1,2,0,0,0,2,2,1,0,2,0,0,2,2,0,0,0,2,1,2,1,2,1,2,2,0,0,0,1,2,1,2,2,2,1,2,2,1,1,0,1,1,1,2,1,2,1,1,2,2,1,0,0,1,2,2,2,2,1,2,0,1,1,0,1,0,2,2,1,1,2,1,1,1,2,0,1,1,1,2,0,2,0,2,1,2,1,1,2,1,0,0,0,0,1,2,0,0,1,2,2,1,0,1,0,2,1,2,2,2,0,0,1,0,1,2,2,2,0,0,2,2,1,0,0,2,2,0,2,1,1,0,1,2,1,2,0,1,0,1,2,0,0,1,2,2,],[0,0,1,1,2,1,2,0,0,1,1,1,1,2,0,1,2,0,0,0,1,1,1,2,0,0,2,1,0,0,0,1,2,2,1,0,2,2,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,2,0,0,0,0,2,1,2,0,0,2,0,1,1,1,1,2,2,0,1,2,0,0,1,1,1,0,0,1,1,0,2,0,0,0,1,1,1,1,1,1,1,0,2,0,1,0,2,1,0,0,0,2,0,2,0,1,2,1,1,0,1,1,0,1,0,1,2,1,1,2,0,1,1,1,0,2,2,2,0,1,2,1,1,1,1,0,0,1,2,1,0,2,0,1,],[2,2,2,1,0,2,0,2,1,1,2,1,1,0,2,2,2,1,0,1,1,2,0,2,2,1,0,0,0,0,0,0,2,2,0,2,0,0,2,0,1,2,2,0,1,2,2,2,0,1,0,0,2,2,2,0,1,0,0,0,0,1,0,1,0,2,1,2,0,0,1,1,2,0,0,0,0,2,0,1,0,2,1,2,0,2,2,2,1,1,1,2,2,2,1,1,0,2,0,0,2,1,2,0,1,0,1,1,1,1,0,0,0,2,1,0,2,2,0,2,0,0,1,1,0,1,1,1,0,2,0,0,0,2,2,0,2,0,1,2,0,1,2,2,2,2,2,0,0,1,],[0,2,1,2,0,1,1,2,0,1,0,2,2,1,1,1,2,1,2,1,0,0,0,1,1,2,0,1,0,0,1,2,2,1,0,1,0,0,2,1,2,0,0,1,0,0,1,0,1,1,1,2,2,2,2,1,1,0,0,1,2,1,2,1,0,2,1,0,0,1,0,1,0,2,1,1,2,1,0,1,0,1,1,0,1,1,2,1,0,2,0,2,1,2,2,1,2,0,2,2,0,0,2,0,0,2,2,1,1,1,1,0,2,1,1,2,2,0,0,0,0,0,1,0,1,1,2,1,2,2,0,1,0,0,0,0,1,1,2,1,2,0,1,0,2,0,1,2,0,1,],[0,2,1,2,2,1,0,2,1,0,2,0,2,0,2,2,0,2,2,0,0,1,2,1,2,1,2,0,2,2,0,2,2,0,2,1,2,2,2,1,1,1,1,2,0,2,0,0,0,2,2,2,2,0,1,0,2,0,2,0,1,0,0,2,0,2,1,0,0,0,1,2,2,1,2,0,1,1,2,2,1,1,1,1,1,2,2,0,0,0,0,1,1,1,2,0,2,1,1,0,1,2,2,1,2,0,0,1,1,0,1,1,0,1,2,2,2,1,0,0,1,1,2,1,0,0,0,2,1,2,0,1,2,0,0,2,2,1,1,1,2,1,0,1,0,1,1,1,0,2,],[2,1,1,1,2,0,2,1,0,1,2,0,2,2,0,0,2,1,0,0,1,2,0,0,1,2,2,1,0,2,0,2,1,1,0,0,0,2,1,2,2,0,1,1,0,1,2,2,1,2,2,2,2,2,2,1,0,0,1,1,0,2,1,2,2,2,0,2,0,0,2,0,0,2,1,1,2,1,1,1,2,2,0,1,1,1,0,1,2,2,0,0,2,0,1,0,1,0,1,1,1,2,0,0,0,2,0,1,1,1,0,1,1,2,0,1,1,0,2,0,0,1,1,0,2,0,2,0,0,1,2,1,1,0,1,2,2,1,1,1,1,2,1,2,1,1,2,0,1,0,],[1,2,2,0,2,1,1,0,0,0,1,2,2,0,0,1,2,2,1,1,2,0,0,1,1,1,2,0,1,2,1,2,1,1,2,0,1,2,0,0,2,2,0,2,2,1,2,0,1,0,1,0,1,1,0,1,1,1,2,0,2,1,0,2,1,1,1,1,2,1,1,2,1,2,1,1,0,0,1,0,1,1,0,2,2,1,1,1,1,1,2,0,1,2,1,1,2,2,0,2,1,2,0,0,2,0,2,1,2,1,2,1,1,2,1,0,0,2,0,1,2,2,1,1,0,0,1,2,2,1,0,1,2,1,2,2,0,1,1,2,2,0,1,0,2,1,2,0,0,2,],[0,1,0,0,2,1,2,0,0,2,1,0,2,2,2,2,0,0,0,2,2,0,2,1,2,2,2,2,0,0,0,2,2,1,2,2,1,1,0,1,1,0,1,0,1,0,1,1,2,0,2,0,1,0,2,2,1,2,2,2,2,1,2,2,0,0,2,0,0,1,0,2,2,0,0,1,0,2,1,0,2,2,1,0,2,1,2,1,0,2,0,1,1,1,0,2,1,2,0,2,2,2,1,1,2,0,0,0,0,2,0,2,0,0,2,1,0,2,1,0,0,1,0,2,2,1,2,1,0,0,2,1,2,2,1,1,0,2,0,2,0,0,2,2,2,2,1,1,2,1,],[0,1,1,2,1,1,0,1,0,0,1,1,2,1,0,2,2,2,1,0,2,0,1,0,0,0,0,1,2,1,2,0,2,2,0,1,1,1,2,1,1,1,2,2,2,1,0,2,0,2,0,1,1,2,0,1,2,0,0,2,1,0,2,1,1,2,0,1,1,2,1,1,2,1,2,1,0,2,2,2,1,0,0,1,1,0,2,0,0,2,1,1,0,1,2,0,2,2,1,0,1,1,1,2,0,0,0,2,2,0,2,2,2,0,0,2,1,0,0,2,0,0,1,2,1,2,2,0,0,0,2,2,0,1,0,1,2,1,0,0,1,1,1,0,0,0,1,1,2,2,],[2,2,0,2,1,1,2,1,1,1,0,2,2,0,0,2,0,1,1,2,0,2,0,2,2,2,2,1,1,1,2,1,2,2,2,1,2,0,1,0,1,2,0,2,1,0,0,2,1,1,0,2,1,1,1,1,1,1,2,2,0,1,1,0,2,2,2,1,1,2,1,2,2,0,1,1,0,0,0,1,0,0,2,2,1,1,1,1,1,1,1,1,1,2,0,1,0,1,0,1,2,0,0,0,1,0,0,2,1,1,1,1,2,0,0,2,0,0,1,1,1,2,1,2,1,2,1,1,0,1,1,1,0,1,1,1,1,2,0,0,2,1,1,1,2,2,2,0,2,1,],[1,0,2,0,1,2,1,0,0,1,2,1,1,1,2,2,2,2,1,2,0,1,2,1,0,2,0,2,2,2,0,1,1,0,1,0,2,1,1,2,2,2,0,2,1,1,2,0,1,0,1,2,1,2,1,0,0,0,2,0,1,0,1,1,1,1,0,1,2,1,2,2,2,0,0,1,0,1,0,2,0,1,1,2,0,0,2,0,2,1,1,0,1,2,1,1,0,2,2,2,1,0,0,1,1,2,1,0,2,1,2,2,0,0,1,2,0,1,0,1,1,2,1,2,0,0,0,2,0,1,0,2,1,2,2,2,0,1,0,2,1,0,0,1,2,2,0,2,0,2,],[1,1,2,0,1,0,2,2,2,0,0,2,1,0,2,0,0,0,1,2,2,1,1,0,0,1,0,0,2,1,2,1,1,2,1,2,0,0,0,1,0,0,2,0,1,0,1,1,1,1,2,2,1,1,2,2,2,0,1,2,1,1,2,0,1,2,0,1,0,0,2,2,0,0,1,0,1,0,0,1,0,0,0,1,0,2,0,0,1,0,0,1,0,1,1,2,1,2,0,2,2,1,2,2,1,2,0,2,2,0,1,0,0,0,1,1,1,0,0,1,1,2,0,1,0,0,1,0,0,0,2,0,1,0,0,0,0,2,1,0,0,1,0,1,1,2,0,0,1,2,],[2,0,1,0,0,2,0,0,2,0,2,2,1,2,1,0,0,1,1,0,1,0,2,2,0,2,0,0,1,0,1,2,0,2,1,0,0,2,1,0,2,0,1,2,2,0,2,0,1,0,0,0,2,0,2,2,0,2,0,2,2,0,1,2,2,0,1,2,0,2,2,0,1,2,2,2,0,0,1,0,0,1,1,1,0,2,0,1,1,2,1,2,2,2,1,2,2,0,1,1,1,0,0,0,0,0,0,2,1,2,0,2,0,1,0,0,2,2,0,1,1,0,1,0,2,1,1,1,1,2,0,1,1,2,2,1,2,0,2,2,2,0,2,0,0,2,2,0,2,2,],[2,2,0,2,2,1,1,0,2,0,0,2,0,1,2,1,2,2,1,1,1,1,2,2,2,0,1,2,2,0,2,0,2,1,2,0,1,0,1,2,2,1,1,0,2,0,1,2,1,1,2,1,1,0,0,1,1,1,2,1,2,0,2,2,2,2,2,0,1,1,0,0,1,1,0,0,1,1,2,0,2,2,1,1,1,0,0,0,1,0,2,1,0,1,1,0,1,2,1,1,1,0,0,2,0,1,2,2,1,2,0,1,1,0,1,0,0,2,1,1,0,1,0,2,2,0,1,2,0,2,1,2,1,2,0,2,0,0,2,2,2,1,2,2,2,0,1,2,0,0,],[2,1,1,1,0,1,2,0,0,1,2,2,2,0,2,2,2,1,0,1,0,1,2,0,2,1,1,2,1,2,2,1,2,2,1,0,1,1,1,2,1,1,0,0,2,2,1,1,2,0,2,0,0,2,2,0,1,2,2,0,1,0,0,2,1,1,1,1,0,2,2,1,2,2,2,2,0,0,2,2,0,0,2,2,2,0,1,2,2,2,1,2,0,0,1,0,2,2,0,0,0,2,0,2,1,2,0,1,2,1,2,2,1,1,1,2,0,2,2,0,1,0,2,1,0,2,0,0,0,1,0,1,1,2,2,2,2,0,0,2,2,2,0,1,0,0,1,1,2,0,],]


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


const BusinessGoose1Img = new Image();
BusinessGoose1Img.src = root+"business-goose-1.png";
const BusinessGoose2Img = new Image();
BusinessGoose2Img.src = root+"business-goose-2.png";
const BusinessGoose3Img = new Image();
BusinessGoose3Img.src = root+"business-goose-3.png";
const BusinessGoose4Img = new Image();
BusinessGoose4Img.src = root+"business-goose-4.png";

const FlyingFrog1Img = new Image();
FlyingFrog1Img.src = root+"butterfly-frog-1.png";
const FlyingFrog2Img = new Image();
FlyingFrog2Img.src = root+"butterfly-frog-2.png";
const FlyingFrog3Img = new Image();
FlyingFrog3Img.src = root+"butterfly-frog-3.png";
const FlyingFrog4Img = new Image();
FlyingFrog4Img.src = root+"butterfly-frog-4.png";
const FlyingFrog5Img = new Image();
FlyingFrog5Img.src = root+"butterfly-frog-5.png";
const FlyingFrog6Img = new Image();
FlyingFrog6Img.src = root+"butterfly-frog-6.png";
const FlyingFrog7Img = new Image();
FlyingFrog7Img.src = root+"butterfly-frog-7.png";
const FlyingFrog8Img = new Image();
FlyingFrog8Img.src = root+"butterfly-frog-8.png";
const FlyingFrog9Img = new Image();
FlyingFrog9Img.src = root+"butterfly-frog-9.png";
const FlyingFrog10Img = new Image();
FlyingFrog10Img.src = root+"butterfly-frog-10.png";

const FlowerBunny1Img = new Image();
FlowerBunny1Img.src = root+"flower-bunny-1.png";
const FlowerBunny2Img = new Image();
FlowerBunny2Img.src = root+"flower-bunny-2.png";

const Marimoss1Img = new Image();
Marimoss1Img.src = root+"marimo-algae-1.png";
const Marimoss2Img = new Image();
Marimoss2Img.src = root+"marimo-algae-2.png";
const Marimoss3Img = new Image();
Marimoss3Img.src = root+"marimo-algae-3.png";
const Marimoss4Img = new Image();
Marimoss4Img.src = root+"marimo-algae-4.png";
const Marimoss5Img = new Image();
Marimoss5Img.src = root+"marimo-algae-5.png";
const Marimoss6Img = new Image();
Marimoss6Img.src = root+"marimo-algae-6.png";
const Marimoss7Img = new Image();
Marimoss7Img.src = root+"marimo-algae-7.png";

const PlantTurtle1Img = new Image();
PlantTurtle1Img.src = root+"plant-turtle-1.png";
const PlantTurtle2Img = new Image();
PlantTurtle2Img.src = root+"plant-turtle-2.png";
const PlantTurtle3Img = new Image();
PlantTurtle3Img.src = root+"plant-turtle-3.png";
const PlantTurtle4Img = new Image();
PlantTurtle4Img.src = root+"plant-turtle-4.png";
const PlantTurtle5Img = new Image();
PlantTurtle5Img.src = root+"plant-turtle-5.png";
const PlantTurtle6Img = new Image();
PlantTurtle6Img.src = root+"plant-turtle-6.png";
const PlantTurtle7Img = new Image();
PlantTurtle7Img.src = root+"plant-turtle-7.png";

const RuneClam1Img = new Image();
RuneClam1Img.src = root+"rune-clam-1.png";
const RuneClam2Img = new Image();
RuneClam2Img.src = root+"rune-clam-2.png";
const RuneClam3Img = new Image();
RuneClam3Img.src = root+"rune-clam-3.png";
const RuneClam4Img = new Image();
RuneClam4Img.src = root+"rune-clam-4.png";
const RuneClam5Img = new Image();
RuneClam5Img.src = root+"rune-clam-5.png";
const RuneClam6Img = new Image();
RuneClam6Img.src = root+"rune-clam-6.png";
const RuneClam7Img = new Image();
RuneClam7Img.src = root+"rune-clam-7.png";
const RuneClam8Img = new Image();
RuneClam8Img.src = root+"rune-clam-8.png";
const RuneClam9Img = new Image();
RuneClam9Img.src = root+"rune-clam-9.png";
const RuneClam10Img = new Image();
RuneClam10Img.src = root+"rune-clam-10.png";
const RuneClam11Img = new Image();
RuneClam11Img.src = root+"rune-clam-11.png";
const RuneClam12Img = new Image();
RuneClam12Img.src = root+"rune-clam-12.png";
const RuneClam13Img = new Image();
RuneClam13Img.src = root+"rune-clam-13.png";

const SnowBird1Img = new Image();
SnowBird1Img.src = root+"snow-bird-1.png";
const SnowBird2Img = new Image();
SnowBird2Img.src = root+"snow-bird-2.png";
const SnowBird3Img = new Image();
SnowBird3Img.src = root+"snow-bird-3.png";
const SnowBird4Img = new Image();
SnowBird4Img.src = root+"snow-bird-4.png";
const SnowBird5Img = new Image();
SnowBird5Img.src = root+"snow-bird-5.png";
const SnowBird6Img = new Image();
SnowBird6Img.src = root+"snow-bird-6.png";
const SnowBird7Img = new Image();
SnowBird7Img.src = root+"snow-bird-7.png";
const SnowBird8Img = new Image();
SnowBird8Img.src = root+"snow-bird-8.png";
const SnowBird9Img = new Image();
SnowBird9Img.src = root+"snow-bird-9.png";
const SnowBird10Img = new Image();
SnowBird10Img.src = root+"snow-bird-10.png";
const SnowBird11Img = new Image();
SnowBird11Img.src = root+"snow-bird-11.png";

const TomatoBunny1Img = new Image();
TomatoBunny1Img.src = root+"tomato-bunny-1.png";
const TomatoBunny2Img = new Image();
TomatoBunny2Img.src = root+"tomato-bunny-2.png";

const GlowFrog1Img = new Image();
GlowFrog1Img.src = root+"glowing-frog-1.png";
const GlowFrog2Img = new Image();
GlowFrog2Img.src = root+"glowing-frog-2.png";
const GlowFrog3Img = new Image();
GlowFrog3Img.src = root+"glowing-frog-3.png";
const GlowFrog4Img = new Image();
GlowFrog4Img.src = root+"glowing-frog-4.png";

const Shoop1Img = new Image();
Shoop1Img.src = root+"shoop-1.png";
const Shoop2Img = new Image();
Shoop2Img.src = root+"shoop-2.png";
const Shoop3Img = new Image();
Shoop3Img.src = root+"shoop-3.png";
const Shoop4Img = new Image();
Shoop4Img.src = root+"shoop-4.png";
const Shoop5Img = new Image();
Shoop5Img.src = root+"shoop-5.png";
const Shoop6Img = new Image();
Shoop6Img.src = root+"shoop-6.png";
const Shoop7Img = new Image();
Shoop7Img.src = root+"shoop-7.png";
const Shoop8Img = new Image();
Shoop8Img.src = root+"shoop-8.png";
const Shoop9Img = new Image();
Shoop9Img.src = root+"shoop-9.png";
const Shoop10Img = new Image();
Shoop10Img.src = root+"shoop-10.png";
const Shoop11Img = new Image();
Shoop11Img.src = root+"shoop-11.png";
const Shoop12Img = new Image();
Shoop12Img.src = root+"shoop-12.png";
const Shoop13Img = new Image();
Shoop13Img.src = root+"shoop-13.png";
const Shoop14Img = new Image();
Shoop14Img.src = root+"shoop-14.png";
const Shoop15Img = new Image();
Shoop15Img.src = root+"shoop-15.png";
const Shoop16Img = new Image();
Shoop16Img.src = root+"shoop-16.png";
const Shoop17Img = new Image();
Shoop17Img.src = root+"shoop-17.png";
const Shoop18Img = new Image();
Shoop18Img.src = root+"shoop-18.png";
const Shoop19Img = new Image();
Shoop19Img.src = root+"shoop-19.png";

const cCREATURE_INFO = {"Business Goose":[[BusinessGoose1Img,BusinessGoose2Img,BusinessGoose3Img,BusinessGoose4Img,],2.0,0.005,50.0,],"Flying Frog":[[FlyingFrog1Img,FlyingFrog2Img,FlyingFrog3Img,FlyingFrog4Img,FlyingFrog5Img,FlyingFrog6Img,FlyingFrog7Img,FlyingFrog8Img,FlyingFrog9Img,FlyingFrog10Img,],4.0,0.001,100.0,],"Flower Bunny":[[FlowerBunny1Img,FlowerBunny2Img,],10.0,0.025,10.0,],"Marimoss":[[Marimoss1Img,Marimoss2Img,Marimoss3Img,Marimoss4Img,Marimoss5Img,Marimoss6Img,Marimoss7Img,],2.0,0.0001,1000.0,],"Plant Turtle":[[PlantTurtle1Img,PlantTurtle2Img,PlantTurtle3Img,PlantTurtle4Img,PlantTurtle5Img,PlantTurtle6Img,PlantTurtle7Img,],7.0,0.0005,250.0,],"Rune Clam":[[RuneClam1Img,RuneClam2Img,RuneClam3Img,RuneClam4Img,RuneClam5Img,RuneClam6Img,RuneClam7Img,RuneClam8Img,RuneClam9Img,RuneClam10Img,RuneClam11Img,RuneClam12Img,RuneClam13Img,],1.0,0.0003,500.0,],"Snow Bird":[[SnowBird1Img,SnowBird2Img,SnowBird3Img,SnowBird4Img,SnowBird5Img,SnowBird6Img,SnowBird7Img,SnowBird8Img,SnowBird9Img,SnowBird10Img,SnowBird11Img,],3.0,0.0003,500.0,],"Tomato Bunny":[[TomatoBunny1Img,TomatoBunny2Img,],10.0,0.05,5.0,],"Glow Frog":[[GlowFrog1Img,GlowFrog2Img,GlowFrog3Img,GlowFrog4Img,],3.0,0.001,100.0,],"Shoop":[[Shoop1Img,Shoop2Img,Shoop3Img,Shoop4Img,Shoop5Img,Shoop6Img,Shoop7Img,Shoop8Img,Shoop9Img,Shoop10Img,Shoop11Img,Shoop12Img,Shoop13Img,Shoop14Img,Shoop15Img,Shoop16Img,Shoop17Img,Shoop18Img,Shoop19Img,],5.0,0.0005,250.0,],};

const cSPAWNING_INFO = {'M': ['Snow Bird'], 'G': ['Business Goose', 'Flying Frog', 'Flower Bunny', 'Plant Turtle', 'Tomato Bunny', 'Glow Frog', 'Shoop'], 'B': ['Rune Clam'], 'W': ['Marimoss']};
let town_locs = [["Korn",[15, 53],[['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'S', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'G', 'G', 'G', 'G', 'H', 'G'], ['G', 'G', 'G', 'G', 'B', 'B', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'B', 'W', 'W', 'B', 'G', 'H', 'G'], ['G', 'G', 'G', 'B', 'W', 'W', 'B', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'B', 'B', 'G', 'G', 'H', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'G', 'G', 'G', 'G', 'H', 'G'], ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'G', 'G']],[[2, 2, 1, 0, 1, 0, 0, 2, 1, 1], [2, 1, 2, 0, 2, 0, 1, 2, 2, 2], [2, 1, 2, 2, 0, 0, 2, 0, 3, 2], [0, 0, 1, 0, 2, 2, 0, 2, 2, 1], [0, 2, 0, 2, 1, 2, 1, 1, 2, 2], [2, 0, 1, 0, 0, 1, 2, 0, 2, 2], [2, 3, 0, 0, 2, 1, 1, 1, 2, 1], [0, 0, 0, 2, 2, 1, 2, 2, 0, 1], [0, 4, 1, 0, 1, 0, 2, 2, 3, 0], [2, 1, 0, 2, 0, 0, 2, 1, 0, 1]],[['Gardora', [2, 1]], ['Swan', [2, 8]], ['Swan', [4, 1]], ['Swan', [4, 8]], ['Swan', [6, 1]], ['Gardora', [6, 8]], ['Gardora', [8, 1]], ['Swan', [8, 8]]], false],["Lupava",[95, 93],[['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'B', 'B', 'B', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'B', 'H', 'B', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'B', 'B', 'B', 'G', 'G', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'H', 'H', 'G', 'G', 'G', 'G'], ['G', 'G', 'S', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'G', 'G']],[[0, 2, 1, 1, 2, 2, 1, 2, 0, 0], [2, 0, 0, 2, 0, 0, 0, 2, 0, 0], [0, 0, 3, 2, 2, 0, 2, 0, 2, 1], [0, 0, 1, 0, 2, 0, 1, 0, 2, 0], [0, 2, 1, 1, 0, 0, 2, 0, 2, 0], [1, 1, 1, 2, 4, 1, 0, 2, 0, 1], [0, 0, 0, 2, 1, 0, 2, 0, 1, 1], [1, 2, 1, 0, 1, 0, 2, 4, 0, 1], [1, 1, 1, 0, 0, 1, 2, 0, 0, 0], [2, 0, 2, 2, 0, 0, 1, 0, 2, 2]],[['Gardora', [2, 2]], ['Swan', [3, 7]], ['Swan', [5, 4]], ['Gardora', [5, 5]], ['Gardora', [7, 7]]], false],["Desef",[77, 31],[['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'S', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'G', 'G', 'G', 'G', 'H', 'G'], ['G', 'G', 'G', 'G', 'B', 'B', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'B', 'W', 'W', 'B', 'G', 'H', 'G'], ['G', 'G', 'G', 'B', 'W', 'W', 'B', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'B', 'B', 'G', 'G', 'H', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'G', 'G', 'G', 'G', 'H', 'G'], ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'G', 'G']],[[1, 2, 1, 1, 0, 0, 1, 1, 0, 2], [1, 1, 2, 0, 2, 0, 2, 1, 1, 1], [2, 0, 1, 2, 0, 0, 2, 1, 0, 1], [1, 2, 2, 1, 1, 2, 0, 0, 0, 0], [2, 1, 0, 1, 2, 2, 1, 1, 3, 2], [2, 1, 2, 2, 0, 1, 0, 2, 2, 2], [2, 0, 1, 0, 2, 1, 1, 0, 4, 1], [0, 1, 1, 2, 1, 1, 0, 0, 2, 2], [1, 2, 2, 0, 2, 0, 0, 0, 0, 2], [0, 2, 2, 2, 0, 0, 1, 1, 0, 2]],[['Swan', [2, 1]], ['Gardora', [2, 8]], ['Gardora', [4, 1]], ['Swan', [4, 8]], ['Swan', [6, 1]], ['Gardora', [6, 8]], ['Swan', [8, 1]], ['Gardora', [8, 8]]], false],["Lenes",[59, 102],[['M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M'], ['M', 'H', 'M', 'M', 'G', 'G', 'M', 'M', 'H', 'M'], ['M', 'M', 'M', 'G', 'G', 'G', 'G', 'M', 'M', 'M'], ['M', 'M', 'G', 'G', 'G', 'H', 'G', 'G', 'M', 'M'], ['M', 'G', 'G', 'M', 'G', 'G', 'G', 'G', 'G', 'M'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'H', 'H', 'G', 'S', 'G', 'G', 'H', 'H', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['H', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'M'], ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'M', 'M']],[[1, 1, 2, 0, 2, 2, 2, 1, 0, 0], [0, 4, 0, 1, 1, 1, 2, 2, 3, 2], [0, 1, 1, 2, 1, 1, 2, 0, 2, 0], [2, 0, 0, 0, 0, 1, 0, 2, 1, 1], [2, 0, 0, 2, 0, 1, 1, 0, 1, 1], [0, 0, 0, 2, 1, 1, 0, 1, 1, 0], [0, 1, 1, 2, 0, 1, 1, 1, 2, 1], [1, 2, 1, 1, 1, 0, 1, 0, 1, 0], [4, 0, 2, 1, 2, 0, 1, 1, 2, 0], [1, 0, 2, 1, 0, 0, 2, 1, 0, 2]],[['Swan', [1, 1]], ['Swan', [1, 8]], ['Swan', [3, 5]], ['Swan', [6, 1]], ['Gardora', [6, 2]], ['Gardora', [6, 7]], ['Gardora', [6, 8]], ['Gardora', [8, 0]]], false],["Gensira",[131, 36],[['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'B', 'B', 'B', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'B', 'H', 'B', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'B', 'B', 'B', 'G', 'G', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'H', 'H', 'G', 'G', 'G', 'G'], ['G', 'G', 'S', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'G', 'G']],[[0, 0, 0, 2, 1, 2, 0, 2, 0, 1], [2, 2, 1, 1, 2, 0, 2, 2, 0, 1], [2, 2, 3, 0, 0, 2, 2, 1, 1, 1], [2, 0, 0, 0, 1, 2, 2, 2, 2, 0], [1, 2, 0, 0, 1, 2, 1, 1, 0, 0], [0, 1, 2, 1, 3, 0, 1, 1, 2, 2], [2, 1, 0, 0, 1, 2, 1, 1, 1, 2], [0, 2, 2, 0, 2, 2, 2, 3, 0, 2], [1, 1, 2, 0, 1, 2, 0, 2, 2, 0], [2, 1, 0, 2, 0, 1, 1, 0, 1, 0]],[['Gardora', [2, 2]], ['Swan', [3, 7]], ['Gardora', [5, 4]], ['Swan', [5, 5]], ['Swan', [7, 7]]], false],["Eidedi",[97, 66],[['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'S', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'G', 'G', 'G', 'G', 'H', 'G'], ['G', 'G', 'G', 'G', 'B', 'B', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'B', 'W', 'W', 'B', 'G', 'H', 'G'], ['G', 'G', 'G', 'B', 'W', 'W', 'B', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'B', 'B', 'G', 'G', 'H', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'G', 'G', 'G', 'G', 'H', 'G'], ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'G', 'G']],[[2, 2, 1, 1, 2, 0, 0, 2, 2, 0], [2, 0, 1, 1, 1, 0, 2, 2, 0, 0], [2, 4, 2, 1, 1, 0, 0, 1, 0, 0], [0, 1, 1, 1, 2, 1, 0, 2, 0, 2], [1, 0, 0, 2, 1, 1, 1, 2, 2, 2], [0, 1, 0, 2, 1, 0, 0, 0, 2, 1], [2, 3, 1, 2, 1, 1, 0, 2, 3, 2], [1, 0, 0, 1, 1, 2, 1, 0, 1, 1], [0, 1, 2, 0, 2, 1, 2, 0, 3, 2], [2, 2, 2, 1, 0, 1, 1, 0, 2, 0]],[['Gardora', [2, 1]], ['Gardora', [2, 8]], ['Swan', [4, 1]], ['Gardora', [4, 8]], ['Gardora', [6, 1]], ['Gardora', [6, 8]], ['Swan', [8, 1]], ['Gardora', [8, 8]]], false],["Sosons",[14, 113],[['M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M'], ['M', 'H', 'M', 'M', 'G', 'G', 'M', 'M', 'H', 'M'], ['M', 'M', 'M', 'G', 'G', 'G', 'G', 'M', 'M', 'M'], ['M', 'M', 'G', 'G', 'G', 'H', 'G', 'G', 'M', 'M'], ['M', 'G', 'G', 'M', 'G', 'G', 'G', 'G', 'G', 'M'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'H', 'H', 'G', 'S', 'G', 'G', 'H', 'H', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['H', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'M'], ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'M', 'M']],[[0, 2, 2, 2, 1, 0, 1, 2, 2, 2], [2, 1, 2, 1, 2, 0, 1, 0, 0, 1], [1, 2, 2, 2, 0, 2, 1, 0, 2, 0], [2, 2, 1, 1, 1, 4, 0, 1, 2, 1], [0, 2, 0, 2, 0, 0, 0, 1, 2, 1], [0, 0, 2, 1, 2, 0, 2, 1, 0, 2], [0, 3, 0, 0, 0, 1, 2, 1, 0, 2], [0, 2, 1, 2, 2, 1, 2, 1, 1, 1], [1, 0, 1, 1, 1, 2, 0, 2, 0, 0], [2, 2, 2, 2, 0, 0, 0, 1, 1, 0]],[['Gardora', [1, 1]], ['Gardora', [1, 8]], ['Gardora', [3, 5]], ['Swan', [6, 1]], ['Gardora', [6, 2]], ['Swan', [6, 7]], ['Gardora', [6, 8]], ['Gardora', [8, 0]]], false],["Cavik",[57, 14],[['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'B', 'B', 'B', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'B', 'H', 'B', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'B', 'B', 'B', 'G', 'G', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'H', 'H', 'G', 'G', 'G', 'G'], ['G', 'G', 'S', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'G', 'G']],[[0, 2, 2, 1, 1, 0, 1, 2, 1, 0], [0, 2, 0, 0, 2, 2, 1, 1, 2, 2], [2, 2, 2, 2, 1, 0, 0, 1, 2, 1], [1, 1, 1, 1, 2, 1, 2, 4, 0, 2], [0, 2, 2, 2, 0, 0, 1, 0, 0, 1], [1, 2, 2, 2, 1, 1, 1, 1, 1, 2], [1, 0, 0, 0, 1, 1, 1, 1, 1, 2], [0, 0, 1, 1, 1, 2, 2, 1, 2, 1], [0, 1, 1, 0, 2, 2, 0, 2, 1, 1], [1, 0, 0, 0, 0, 2, 1, 1, 0, 0]],[['Swan', [2, 2]], ['Swan', [3, 7]], ['Gardora', [5, 4]], ['Gardora', [5, 5]], ['Gardora', [7, 7]]], false],["Cansluk",[14, 133],[['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'S', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'G', 'G', 'G', 'G', 'H', 'G'], ['G', 'G', 'G', 'G', 'B', 'B', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'B', 'W', 'W', 'B', 'G', 'H', 'G'], ['G', 'G', 'G', 'B', 'W', 'W', 'B', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'B', 'B', 'G', 'G', 'H', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'G', 'G', 'G', 'G', 'H', 'G'], ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'G', 'G']],[[2, 2, 0, 1, 2, 1, 0, 1, 1, 1], [0, 2, 2, 0, 2, 0, 0, 0, 2, 1], [0, 3, 0, 2, 1, 1, 2, 0, 2, 1], [1, 0, 1, 1, 1, 0, 2, 0, 0, 0], [0, 0, 0, 2, 1, 0, 0, 1, 1, 2], [2, 2, 2, 0, 2, 1, 0, 2, 0, 1], [2, 3, 2, 0, 2, 2, 0, 2, 0, 1], [1, 2, 1, 2, 1, 0, 0, 1, 2, 0], [1, 1, 2, 2, 0, 2, 1, 0, 4, 1], [1, 1, 2, 2, 0, 0, 0, 0, 2, 2]],[['Gardora', [2, 1]], ['Swan', [2, 8]], ['Swan', [4, 1]], ['Gardora', [4, 8]], ['Swan', [6, 1]], ['Swan', [6, 8]], ['Swan', [8, 1]], ['Swan', [8, 8]]], false],["Tareda",[57, 65],[['M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M'], ['M', 'H', 'M', 'M', 'G', 'G', 'M', 'M', 'H', 'M'], ['M', 'M', 'M', 'G', 'G', 'G', 'G', 'M', 'M', 'M'], ['M', 'M', 'G', 'G', 'G', 'H', 'G', 'G', 'M', 'M'], ['M', 'G', 'G', 'M', 'G', 'G', 'G', 'G', 'G', 'M'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'H', 'H', 'G', 'S', 'G', 'G', 'H', 'H', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['H', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'M'], ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'M', 'M']],[[2, 0, 2, 0, 1, 2, 1, 2, 2, 2], [0, 0, 2, 1, 0, 2, 1, 2, 1, 2], [1, 0, 0, 1, 1, 2, 0, 2, 1, 0], [0, 2, 2, 0, 0, 4, 0, 1, 2, 1], [1, 1, 0, 0, 1, 0, 0, 2, 2, 1], [0, 0, 0, 2, 2, 0, 1, 1, 2, 0], [0, 0, 2, 2, 0, 0, 0, 2, 4, 1], [2, 1, 2, 0, 2, 1, 0, 0, 2, 2], [3, 1, 0, 2, 0, 0, 2, 0, 2, 2], [2, 1, 1, 1, 0, 2, 1, 2, 1, 2]],[['Swan', [1, 1]], ['Swan', [1, 8]], ['Swan', [3, 5]], ['Gardora', [6, 1]], ['Gardora', [6, 2]], ['Swan', [6, 7]], ['Swan', [6, 8]], ['Gardora', [8, 0]]], false],]



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
            add_text(this.all_lines[this.lines_set_idx][this.current_line_idx], 70, 45, 200, "15px Arial", "#fff")
            ctx.fillText();
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
const HIGHLIGHT_COLOR = "#0F0";

let player = new Sprite([charImg], 0, 128, 128);

let player_map_pos = {
    x:randrange(cMAP[0].length),
    y:randrange(cMAP.length),
}
while (cMAP[player_map_pos.y][player_map_pos.x] == "W"){
    player_map_pos = {
        x:randrange(cMAP[0].length),
        y:randrange(cMAP.length),
    }
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
let current_scene = "opening";
let temp_town;
let current_town_idx;
let current_person;
let shop_animation_idx;
let shop_selection = "unselected";
let shop_selection_idx = 0;
let shop_options = ["Goodbye", "Who are you?", "I wanna sell!", "What do you have in stock?"];
let shop_conversation = ["I am the shop keeper, Kotu.", "Any creatures you find, I will buy.", "Currently, we are only selling the snorkel."]
let shop_page = 0;
let temp_info;
let temp_idx;
let coins = 0;
let shop_coins;
let shop_selected_idxs = [];
// item: image(0), cost(1), bought(2)
let store_items = {
    "Ondu (snorkel)":[snorkelImg, 1000, false],
    "Kort (map)":[mapItemImg, 150, false],
    "Leitis (landmarks)":[mapItemImg, 150, false],
    "Vengi (wings)":[wingsImg, 2500, false]
}
let store_items_keys = ["Ondu (snorkel)", "Kort (map)", "Leitis (landmarks)", "Vengi (wings)"];
let current_bought_store_items = [];
let wing_selection;
let diff;
let opening_pos = {
    x:-470,
    y:-100,
}
let opening_colors = ["#000", "#112", "#334", "#556", "#778", "#99A", "#BBC", "#DDE", "#EEF", "#DDE", "#BBC", "#99A", "#778", "#556", "#334", "#112", "#000"];

if (localStorage.getItem("collection-coins") != null && localStorage.getItem("collection-coins") != "null"){
    coins = parseInt(localStorage.getItem("collection-coins"));
}
if (localStorage.getItem("collection-creatures") != null && localStorage.getItem("collection-creatures") != "null"){
    creatures_caught = localStorage.getItem("collection-creatures").split(",");
}

for (let i = 0; i < store_items_keys.length; i++){
    if (localStorage.getItem("collection-"+store_items_keys[i]) != null && localStorage.getItem("collection-"+store_items_keys[i]) != "null" && localStorage.getItem("collection-"+store_items_keys[i]) != undefined){
        store_items[store_items_keys[i]][2] = str_bool(localStorage.getItem("collection-"+store_items_keys[i]));
    }
}

// add town sprites
for (let i=0; i < town_locs.length; i++) {
    temp_town = new Sprite([town1Img, town2Img, town3Img, town4Img], 1, ((town_locs[i][1][0]*32)-(player_map_pos.x*32))+128, ((town_locs[i][1][1]*32)-(player_map_pos.y*32))+128, undefined, town_locs[i][0]);
    town_locs[i].push(temp_town);
}

// Get Keys
document.addEventListener("keydown", direction);

function direction(event){
    // a  b  c  d  e  f  g  h  i  j  k  l  m  n  o  p  q
    // 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81
    // r  s  t  u  v  w  x  y  z
    // 82 83 84 85 86 87 88 89 90
    if (current_scene == "opening"){
        if (event.keyCode == 32){
            // space - select
            current_scene = "main";
        }
    } else if (current_scene == "town"){
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
                if (cMAP[player_map_pos.y-1][player_map_pos.x] == "W"){
                    if (store_items["Ondu (snorkel)"][2]){
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
                        alert("You need a snorkel to go in the water");
                    }
                } else {
                    // move all
                    for (let i=0; i<showing_creatures.length; i++){
                        showing_creatures[i].move_down();
                    }
                    for (let i=0; i<town_locs.length; i++){
                        town_locs[i][6].move_down();
                    }
                    player_map_pos.y--;
                    movement = "up";
                }
            } else {
                alert("YOU CANNOT PASS");
            }
        } else if (event.keyCode == 40){
            //down
            if (player_map_pos.y+1 < cMAP.length){
                if (cMAP[player_map_pos.y+1][player_map_pos.x] == "W"){
                    if (store_items["Ondu (snorkel)"][2]){
                        for (let i=0; i<showing_creatures.length; i++){
                            showing_creatures[i].move_up();
                        }
                        for (let i=0; i<town_locs.length; i++){
                            town_locs[i][6].move_up();
                        }
                        player_map_pos.y++;
                        movement = "down";
                    } else {
                        alert("You need a snorkel to go in the water");
                    }
                } else {
                    for (let i=0; i<showing_creatures.length; i++){
                        showing_creatures[i].move_up();
                    }
                    for (let i=0; i<town_locs.length; i++){
                        town_locs[i][6].move_up();
                    }
                    player_map_pos.y++;
                    movement = "down";
                }
            } else {
                alert("YOU CANNOT PASS");
            }
        } if (event.keyCode == 37){
            //left
            if (player_map_pos.x-1 >= 0){
                if (cMAP[player_map_pos.y][player_map_pos.x-1] == "W"){
                    if (store_items["Ondu (snorkel)"][2]){
                        for (let i=0; i<showing_creatures.length; i++){
                            showing_creatures[i].move_right();
                        }
                        for (let i=0; i<town_locs.length; i++){
                            town_locs[i][6].move_right();
                        }
                        player_map_pos.x--;
                        movement = "left";
                    } else {
                        alert("You need a snorkel to go in the water");
                    }
                } else {
                    for (let i=0; i<showing_creatures.length; i++){
                        showing_creatures[i].move_right();
                    }
                    for (let i=0; i<town_locs.length; i++){
                        town_locs[i][6].move_right();
                    }
                    player_map_pos.x--;
                    movement = "left";
                }
            } else {
                alert("YOU CANNOT PASS");
            }
        } else if (event.keyCode == 39){
            //right
            if (player_map_pos.x+1 < cMAP[0].length){
                if (cMAP[player_map_pos.y][player_map_pos.x+1] == "W"){
                    if (store_items["Ondu (snorkel)"][2]){
                        for (let i=0; i<showing_creatures.length; i++){
                            showing_creatures[i].move_left();
                        }
                        for (let i=0; i<town_locs.length; i++){
                            town_locs[i][6].move_left();
                        }
                        player_map_pos.x++;
                        movement = "right";
                    } else {
                        alert("You need a snorkel to go in the water");
                    }
                } else {
                    for (let i=0; i<showing_creatures.length; i++){
                        showing_creatures[i].move_left();
                    }
                    for (let i=0; i<town_locs.length; i++){
                        town_locs[i][6].move_left();
                    }
                    player_map_pos.x++;
                    movement = "right";
                }
            } else {
                alert("YOU CANNOT PASS");
            }
        } if (event.keyCode == 77){
            // m - map
            if (store_items["Kort (map)"][2]){
                current_scene = "map";
            } else {
                alert("You don\'t have a map");
            }
        } if (event.keyCode == 87){
            // w - wings
            if (store_items["Vengi (wings)"][2]){
                current_scene = "wings";
                wing_selection = 0;
            } else {
                alert("You don\'t have wings");
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
                if (shop_options[shop_selection_idx%shop_options.length] == "Who are you?") {
                    shop_selection = "conversation";
                    shop_selection_idx = 0;
                } else if (shop_options[shop_selection_idx%shop_options.length] == "I wanna sell!") {
                    shop_selection = "sell";
                    shop_coins = 0;
                    shop_selection_idx = 0;
                    shop_page = 0;
                    shop_selected_idxs = [];
                } else if (shop_options[shop_selection_idx%shop_options.length] == "What do you have in stock?") {
                    shop_selection = "buy";
                    shop_coins = 0;
                    shop_selection_idx = 0;
                    shop_page = 0;
                    shop_selected_idxs = [];
                    current_bought_store_items = [];
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
        } else if (shop_selection == "buy"){
            if (event.keyCode == 38){
                // up
                shop_selection_idx -= 1;
            } if (event.keyCode == 40){
                // down
                shop_selection_idx += 1;
            } if (event.keyCode == 32){
                // select
                if (store_items[store_items_keys[shop_selection_idx]][2]){
                    store_items[store_items_keys[shop_selection_idx]][2] = false;
                    shop_coins -= store_items[store_items_keys[shop_selection_idx]][1];
                    current_bought_store_items = remove_item(current_bought_store_items, store_items_keys[shop_selection_idx]);
                } else {
                    store_items[store_items_keys[shop_selection_idx]][2] = true;
                    shop_coins += store_items[store_items_keys[shop_selection_idx]][1];
                    current_bought_store_items.push(store_items_keys[shop_selection_idx]);
                }
            } if (event.keyCode == 13){
                if (shop_coins <= coins){
                    coins -= shop_coins;
                    shop_selection = "unselected";
                    shop_selection_idx = 0;
                    store_items_keys = remove_items(store_items_keys, current_bought_store_items);
                } else {
                    alert("You don't have enough money");
                }
            }

            if (shop_selection_idx < 0){
                shop_selection_idx = store_items_keys.length-1;
            } else if (shop_selection_idx >= store_items_keys.length){
                shop_selection_idx = 0;
            }
        } 
    } else if (current_scene == "map"){
        // m - map
        current_scene = "main";
    } else if (current_scene == "wings"){
        if (event.keyCode == 38){
            // up
            wing_selection++;
        } else if (event.keyCode == 40){
            // down
            wing_selection--;
        } else if (event.keyCode == 32){
            // space - select
            current_scene = "main";
            // Y MOVE
            diff = Math.abs(player_map_pos.y-town_locs[wing_selection][1][1]);
            if (town_locs[wing_selection][1][1] < player_map_pos.y){
                for (let m = 0; m < diff; m++){
                    // move all
                    for (let i=0; i<showing_creatures.length; i++){
                        showing_creatures[i].move_down();

                    }
                    for (let i=0; i<town_locs.length; i++){
                        town_locs[i][6].move_down();
                    }
                    player_map_pos.y--;
                }
            } else if (town_locs[wing_selection][1][1] > player_map_pos.y){
                for (let m = 0; m < diff; m++){
                    // move all
                    for (let i=0; i<showing_creatures.length; i++){
                        showing_creatures[i].move_up();
                    }
                    for (let i=0; i<town_locs.length; i++){
                        town_locs[i][6].move_up();
                    }
                    player_map_pos.y++;
                }
            }

            // X MOVE
            diff = Math.abs(player_map_pos.x-town_locs[wing_selection][1][0]);
            if (town_locs[wing_selection][1][0] < player_map_pos.x){
                for (let m = 0; m < diff; m++){
                    // move all
                    for (let i=0; i<showing_creatures.length; i++){
                        showing_creatures[i].move_right();

                    }
                    for (let i=0; i<town_locs.length; i++){
                        town_locs[i][6].move_right();
                    }
                    player_map_pos.x--;
                }
            } else if (town_locs[wing_selection][1][0] > player_map_pos.x){
                for (let m = 0; m < diff; m++){
                    // move all
                    for (let i=0; i<showing_creatures.length; i++){
                        showing_creatures[i].move_left();
                    }
                    for (let i=0; i<town_locs.length; i++){
                        town_locs[i][6].move_left();
                    }
                    player_map_pos.x++;
                }
            }
        } if (event.keyCode == 87){
            // w - wings
            current_scene = "main";
        }
        if (wing_selection >= town_locs.length){
            wing_selection = 0;
        } else if (wing_selection < 0){
            wing_selection = town_locs.length-1;
        }
    } if (event.keyCode == 82){
        // r - remove save
        // WIP - OPTION TO CHANGE MAP (KEEP COINS ETC)
        // WIP - "ARE YOU SURE YOU WANT TO RESET"
        if (confirm("Are you sure you want to reset your coins and stash?")){
            localStorage.setItem("collection-coins", "null");
            localStorage.setItem("collection-creatures", "null");
            localStorage.setItem("collection-items", "null")
            for (let i = 0; i < store_items_keys.length; i++){
                localStorage.setItem("collection-"+store_items_keys[i], "null");
            }
            clearInterval(game);
            // alert("RESET");
            location.reload();
        }
    }
}

// Draw
function draw(){
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, 288, 288);
    
    frames++;

    if (current_scene == "opening"){
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
        ctx.fillStyle = opening_colors[parseInt(frames/3)%opening_colors.length];
        ctx.fillText("Collection Game - Press Space to Start", 10, 310);
    } else if (current_scene == "town"){
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
        ctx.fillText("Items: "+creatures_caught.length.toString(), 140, 310);
        ctx.fillText("$: "+coins.toString(), 210, 310);

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
        if (cMAP[player_map_pos.y][player_map_pos.x] == "W"){
            ctx.drawImage(snorkelOnImg, 128, 128);
        }

        ctx.fillStyle = "#eef"
        ctx.fillRect(0, 288, 288, 320);

        // add text
        ctx.font = "15px Arial";
        ctx.fillStyle = "#000"
        ctx.fillText("Coords: ("+player_map_pos.x.toString()+", "+player_map_pos.y.toString()+")", 10, 310);

        ctx.font = "15px Arial";
        ctx.fillStyle = "#000";
        ctx.fillText("Items: "+creatures_caught.length.toString(), 140, 310);
        ctx.fillText("$: "+coins.toString(), 210, 310);
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
                    add_text(shop_options[i], 25, 135+(i*16), 115, "15px Arial", HIGHLIGHT_COLOR);
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
            ctx.fillText("Items: "+creatures_caught.length.toString(), 140, 310);
            ctx.fillText("$: "+coins.toString(), 210, 310);
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
            ctx.fillText("Items: "+creatures_caught.length.toString(), 140, 310);
            ctx.fillText("$: "+coins.toString(), 21, 310);
        } else if (shop_selection == "sell") {
            shop_page = parseInt(shop_selection_idx/72)
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
                            ctx.fillStyle = HIGHLIGHT_COLOR;
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
            ctx.fillText("|Sell|", 125, 25);
            ctx.fillText("Page "+(shop_page+1).toString()+"/"+Math.ceil(creatures_caught.length/72), 205, 25);
            ctx.fillText("$: "+coins.toString(), 210, 310);
        } else if (shop_selection == "buy") {
            ctx.fillStyle = "#eef";
            ctx.fillRect(0, 0, 288, 320);
            for (let i = 0; i < store_items_keys.length; i++){
                if (store_items[store_items_keys[i]][2]){
                    ctx.fillStyle = HIGHLIGHT_COLOR
                    ctx.fillRect(0, (i+1)*32, 32, 32);
                }
                ctx.drawImage(store_items[store_items_keys[i]][0], 32, (i+1)*32);
                ctx.font = "15px Arial";
                if (i == shop_selection_idx){
                    ctx.fillStyle = HIGHLIGHT_COLOR;
                } else {
                    ctx.fillStyle = "#000";
                }
                ctx.fillText(store_items_keys[i], 75, ((i+1)*32)+20);
                ctx.fillText(store_items[store_items_keys[i]][1].toString(), 220, ((i+1)*32)+20);
            }
            ctx.font = "15px Arial";
            ctx.fillStyle = "#000";
            ctx.fillText("Total: "+shop_coins.toString(), 10, 25);
            ctx.fillText("|Buy|", 125, 25);
            ctx.fillText("$: "+coins.toString(), 210, 310);
        }
    } else if (current_scene == "map"){
        ctx.drawImage(mapImg, 0, 0, 288, 288);
        ctx.beginPath();
        ctx.strokeStyle = HIGHLIGHT_COLOR;
        ctx.arc((player_map_pos.x/cMAP[0].length)*288, (player_map_pos.y/cMAP.length)*288, 5, 0, Math.PI*2);
        ctx.stroke();
        if (store_items["Leitis (landmarks)"][2]){
            ctx.strokeStyle = "#000";
            for (let l = 0; l < town_locs.length; l++){
                ctx.beginPath();
                ctx.arc((town_locs[l][1][0]/cMAP[0].length)*288, (town_locs[l][1][1]/cMAP.length)*288, 5, 0, Math.PI*2);
                ctx.stroke();
            }
        }
    } else if (current_scene == "wings"){
        ctx.fillStyle = "#eef";
        ctx.fillRect(0, 0, 288, 288);

        for (let l = 0; l < town_locs.length; l++){
            if (wing_selection == l){
                add_text(town_locs[l][1].toString(), 32, (32*l)+32, undefined, undefined, HIGHLIGHT_COLOR);
                add_text(town_locs[l][0].toString(), 105, (32*l)+32, undefined, undefined, HIGHLIGHT_COLOR);
            } else {
                add_text(town_locs[l][1].toString(), 32, (32*l)+32, undefined, undefined, "#000");
                add_text(town_locs[l][0].toString(), 105, (32*l)+32, undefined, undefined, "#000");
            }
        }
    }

    // SAVE - coins, creatures, items
    // OPTIONAL SAVE - map, position
    localStorage.setItem("collection-coins", coins);
    localStorage.setItem("collection-creatures", creatures_caught);
    for (let i = 0; i < store_items_keys.length; i++){
        localStorage.setItem("collection-"+store_items_keys[i], store_items[store_items_keys[i]][2]);
    }
}

let game = setInterval(draw, 100);