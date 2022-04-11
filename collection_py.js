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

const bookImg = new Image();
bookImg.src = root+"items/book.png";

const unknownImg1 = new Image();
unknownImg1.src = root+"unknown-1.png";
const unknownImg2 = new Image();
unknownImg2.src = root+"unknown-2.png";
const unknownImg3 = new Image();
unknownImg3.src = root+"unknown-3.png";
const unknownImg4 = new Image();
unknownImg4.src = root+"unknown-4.png";
const unknownImg5 = new Image();
unknownImg5.src = root+"unknown-5.png";
const unknownImg6 = new Image();
unknownImg6.src = root+"unknown-6.png";
const unknownImg7 = new Image();
unknownImg7.src = root+"unknown-7.png";
const unknownImg8 = new Image();
unknownImg8.src = root+"unknown-8.png";
const unknownImg9 = new Image();
unknownImg9.src = root+"unknown-9.png";
const unknownImg10 = new Image();
unknownImg10.src = root+"unknown-10.png";
const unknownImg11 = new Image();
unknownImg11.src = root+"unknown-11.png";
const unknownImg12 = new Image();
unknownImg12.src = root+"unknown-12.png";
const unknownImg13 = new Image();
unknownImg13.src = root+"unknown-13.png";
const unknownImg14 = new Image();
unknownImg14.src = root+"unknown-14.png";
const unknownImg15 = new Image();
unknownImg15.src = root+"unknown-15.png";
const unknownImg16 = new Image();
unknownImg16.src = root+"unknown-16.png";
const unknownImg17 = new Image();
unknownImg17.src = root+"unknown-17.png";
const unknownImg18 = new Image();
unknownImg18.src = root+"unknown-18.png";
const unknownImg19 = new Image();
unknownImg19.src = root+"unknown-19.png";
const unknownImg20 = new Image();
unknownImg20.src = root+"unknown-20.png";
const unknownImg21 = new Image();
unknownImg21.src = root+"unknown-21.png";
const unknownImg22 = new Image();
unknownImg22.src = root+"unknown-22.png";
const unknownImg23 = new Image();
unknownImg23.src = root+"unknown-23.png";
const unknownImg24 = new Image();
unknownImg24.src = root+"unknown-24.png";
const unknownImg25 = new Image();
unknownImg25.src = root+"unknown-25.png";
const unknownImg26 = new Image();
unknownImg26.src = root+"unknown-26.png";
const unknownImg27 = new Image();
unknownImg27.src = root+"unknown-27.png";
const unknownImg28 = new Image();
unknownImg28.src = root+"unknown-28.png";
const unknownImg29 = new Image();
unknownImg29.src = root+"unknown-29.png";
const unknownImg30 = new Image();
unknownImg30.src = root+"unknown-30.png";
const unknownImg31 = new Image();
unknownImg31.src = root+"unknown-31.png";
const unknownImg32 = new Image();
unknownImg32.src = root+"unknown-32.png";
const unknownImg33 = new Image();
unknownImg33.src = root+"unknown-33.png";
const unknownImg34 = new Image();
unknownImg34.src = root+"unknown-34.png";
const unknownImg35 = new Image();
unknownImg35.src = root+"unknown-35.png";
const unknownImg36 = new Image();
unknownImg36.src = root+"unknown-36.png";
const unknownImg37 = new Image();
unknownImg37.src = root+"unknown-37.png";
const unknownImg38 = new Image();
unknownImg38.src = root+"unknown-38.png";
const unknownImg39 = new Image();
unknownImg39.src = root+"unknown-39.png";
const unknownImg40 = new Image();
unknownImg40.src = root+"unknown-40.png";
const unknownImg41 = new Image();
unknownImg41.src = root+"unknown-41.png";
const unknownImg42 = new Image();
unknownImg42.src = root+"unknown-42.png";

let unknown_images = [unknownImg1,unknownImg2,unknownImg3,unknownImg4,unknownImg5,unknownImg6,unknownImg7,unknownImg8,unknownImg9,unknownImg10,unknownImg11,unknownImg12,unknownImg13,unknownImg14,unknownImg15,unknownImg16,unknownImg17,unknownImg18,unknownImg19,unknownImg20,unknownImg21,unknownImg22,unknownImg23,unknownImg24,unknownImg25,unknownImg26,unknownImg27,unknownImg28,unknownImg29,unknownImg30,unknownImg31,unknownImg32,unknownImg33,unknownImg34,unknownImg35,unknownImg36,unknownImg37,unknownImg38,unknownImg39,unknownImg40,unknownImg41,unknownImg42]


const cMAP = [["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","W","W","W","W","W","W","W","W","W","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","W","W","W","W","W","W","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","W","W","W","W","W","W","B","B","B","B","B","B","W","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","W","B","W","W","W","W","W","W","B","B","B","B","B","W","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","W","W","W","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","W","W","W","W","B","W","W","B","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","W","B","B","B","W","W","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","G","B","B","B","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","B","B","B","B","B","W","B","W","W","W","W","W","W","B","W","W","W","W","W","W","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","W","W","W","W","W","B","B","B","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","B","G","G","G","G","G","B","B","B","B","B","W","W","W","W","W","W","B","B","B","W","W","W","W","W","B","W","W","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","G","B","B","G","G","G","G","G","G","G","B","B","B","G","G","G","G","G","G","G","G","B","B","B","B","B","W","B","B","B","W","W","B","B","B","W","W","W","W","W","B","B","B","B","B","B","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","B","B","B","G","G","G","G","G","G","G","G","B","B","B","B","B","W","B","B","B","W","W","B","B","B","B","B","W","W","W","B","B","B","B","B","B","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","B","B","B","B","B","B","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","W","W","W","W","W","W","W","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","G","G","G","G","G","G","B","B","B","B","B","B","B","B","W","W","W","W","B","B","B","B","B","B","B","B","B","B","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","B","B","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","B","B","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","B","B","B","B","B","W","W","W","W","B","B","B","B","B","B","B","G","G","G","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","B","B","B","W","W","W","B","B","B","W","W","W","W","W","W","W","W","W","W","W","B","B","B","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","W","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","B","B","B","B","B","B","B","B","G","G","G","B","G","B","B","B","B","B","B","B","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","W","W","B","W","W","W","W","W","W","W","W","W","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","G","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","W","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","G","B","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","W","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","W","W","W","B","W","W","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","B","B","B","B","B","W","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","W","W","W","B","B","B","B","B","B","B","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","B","B","B","B","G","G","G","G","G","G","G","G","B","B","B","B","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","G","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","G","G","G","B","B","G","G","G","G","G","W","G","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","W","W","W","W","W","W","B","B","B","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","B","W","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","B","B","W","G","G","G","G","G","G","W","W","W","W","W","W","W","W","W","W","W","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","G","B","B","G","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","G","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","G","W","W","W","W","W","W","W","W","W","W","W","W","W","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","G","G","G","G","G","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","G","G","G","G","G","B","B","B","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","G","W","W","W","W","W","W","W","W","W","W","W","W","W","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","G","G","G","G","G","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","W","B","B","B","B","B","B","G","B","B","G","G","G","G","G","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","G","B","B","G","B","G","G","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","W","W","W","W","W","B","W","W","W","W","W","W","W","W","W","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","G","G","G","G","G","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","G","W","W","W","W","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","B","B","B","B","W","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","G","G","G","G","G","G","G","G","G","M","G","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","G","G","G","G","G","G","G","M","G","G","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","G","G","G","G","M","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","M","G","G","G","G","G","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","G","G","G","G","G","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","G","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","W","W","W","W","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","W","W","W","W","W","W","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","W","W","W","W","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","W","W","B","W","W","W","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","W","W","W","W","W","W","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","W","B","B","B","B","B","W","W","W","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","W","W","W","W","W","W","B","B","B","B","B","B","G","B","B","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","W","W","W","W","W","W","B","B","B","G","G","G","G","G","G","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","W","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","W","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","G","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","G","M","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","W","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","W","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","B","B","B","W","W","W","W","W","W","W","W","W","W","W","B","W","W","W","W","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","W","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","M","M","M","M","M","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","B","B","B","B","B","W","W","W","B","B","B","B","B","W","W","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","M","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","M","M","M","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","B","B","B","B","W","W","W","B","B","B","B","B","W","W","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","M","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","M","M","M","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","M","M","M","G","G","G","G","G","G","G","M","M","M","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","M","M","M","G","G","G","G","G","G","G","G","G","M","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","M","M","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","B","B","B","B","B","B","G","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","B","B","B","B","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","W","W","W","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","B","B","B","B","G","B","B","B","B","B","B","W","W","W","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","B","B","B","B","B","G","G","G","B","B","B","W","B","W","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","W","W","W","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","B","B","B","G","B","B","B","B","B","B","B","W","B","B","B","W","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","M","M","M","G","M","M","M","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","B","W","W","W","B","B","B","B","B","B","B","G","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","G","G","M","M","M","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","G","M","M","M","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","G","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","M","M","M","M","M","G","G","M","M","M","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","G","G","G","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","G","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","B","W","W","W","B","B","B","G","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","G","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","M","M","M","G","G","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","B","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","B","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","B","B","B","W","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","B","B","B","W","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","B","B","B","W","W","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","B","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","B","B","B","W","W","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","G","B","B","B","B","B","B","W","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","W","B","B","B","G","G","G","B","B","B","B","B","W","B","B","B","W","W","W","W","W","W","B","B","B","G","G","G","G","G","G","G","G","G","G","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","G","B","B","B","B","B","B","B","B","G","G","G","G","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","G","G","G","B","B","B","W","W","B","W","W","W","W","W","B","W","W","W","B","B","B","G","G","G","G","G","G","G","G","G","G","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","G","G","G","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","G","G","G","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","B","B","B","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","G","B","B","G","G","G","B","G","G","G","G","G","B","B","B","B","G","B","B","B","B","B","B","B","B","G","G","G","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B",],["W","W","W","W","W","W","W","W","W","W","W","W","B","W","W","W","W","B","B","B","G","G","G","B","B","B","B","W","W","W","W","W","W","W","B","W","W","W","B","B","B","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","B","B","B","B","B","B","B","B","B","W","W","B","B","B","B","B","B","G","G","G","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","G","G","G","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","G","G","G","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","G","G","G","B","B","B","B","B","B","B","B","G","B","B","B","B","B","G","G","G","B","B","B","B","B","B","B","B","B","W","W","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","W","W","B","B","B","G","G","G","B","B","B","W","B","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","G","G","G","B","B","B","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","B","W","W","W","W","W","W","W","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","W","W","W","B","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","W","W","W","W","W",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","W","W","W","B","W","W","W","W","W","W","W","W","W","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","W","W","W","W","W","W","W","W",],]

const cMAP_NUM = [[2,0,0,2,1,1,1,0,2,0,0,2,1,0,2,0,2,1,2,2,0,0,2,2,1,2,1,1,0,1,1,0,0,2,2,2,2,1,1,2,0,0,1,0,2,2,2,1,1,1,1,1,1,1,1,0,0,1,0,0,2,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,2,1,0,2,0,2,0,0,0,2,2,1,0,0,1,2,1,0,2,0,2,1,1,1,1,0,2,1,0,1,2,0,0,1,1,1,0,1,1,2,0,2,1,1,1,1,1,0,2,2,0,0,2,0,1,2,2,0,0,2,0,2,0,1,0,2,0,2,0,1,0,2,1,0,],[0,2,1,0,1,1,1,2,2,0,2,0,0,0,1,2,1,0,0,2,1,0,2,1,2,2,2,1,2,1,0,0,2,0,2,0,1,0,0,2,2,2,0,1,2,2,0,2,1,0,2,0,2,1,1,2,2,2,2,2,1,2,1,2,2,0,2,2,0,0,0,1,2,1,0,1,2,0,2,1,1,0,2,1,0,2,0,1,0,2,0,2,0,2,1,1,2,2,2,0,2,0,1,2,2,2,1,0,1,1,0,0,0,1,2,2,0,0,1,2,2,1,2,2,1,2,1,0,2,0,0,0,1,1,1,2,2,1,2,0,2,2,1,0,2,1,2,0,0,0,],[2,1,2,0,2,1,0,1,2,1,0,0,2,2,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,2,2,0,2,2,2,0,1,0,0,2,2,2,2,1,1,0,2,1,2,0,2,0,0,2,2,2,1,2,2,2,2,1,1,1,1,2,0,2,2,1,0,2,1,1,0,2,2,1,0,2,0,0,2,2,2,2,2,1,0,0,1,0,2,2,2,0,0,1,2,2,1,1,2,1,1,2,1,0,0,1,2,2,0,2,1,1,1,0,0,2,1,1,0,1,0,2,2,0,2,0,2,0,2,2,2,2,0,0,1,2,0,1,2,1,1,1,],[2,1,2,0,0,1,0,1,0,2,1,0,1,2,1,2,1,2,1,2,2,0,0,1,1,0,0,0,0,1,2,1,0,1,2,1,2,0,2,0,1,1,1,2,1,0,2,2,2,1,1,0,1,0,0,1,0,1,0,0,2,1,2,2,2,0,0,1,1,1,2,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,2,1,1,1,0,1,1,2,0,1,0,2,1,2,2,1,0,0,2,2,2,0,1,0,0,1,0,0,2,0,1,2,0,0,0,0,0,2,1,2,2,0,0,2,1,1,0,0,0,0,1,1,1,2,0,1,1,2,2,2,2,1,2,2,],[2,2,1,1,0,1,0,2,1,2,1,2,2,0,0,0,0,1,0,1,2,2,1,2,2,2,1,1,0,1,1,0,1,2,0,1,1,0,1,0,2,0,1,1,0,0,0,1,0,0,1,2,1,0,2,0,1,2,0,1,0,1,0,0,1,0,2,2,0,2,1,1,0,2,0,2,2,1,2,0,1,2,0,1,2,1,0,2,0,2,0,2,1,0,2,2,2,0,0,1,0,2,2,1,2,2,1,2,0,1,0,2,1,2,1,1,0,1,2,0,2,0,2,2,1,1,0,1,0,2,0,0,0,2,0,2,1,2,2,2,2,2,1,0,0,0,1,1,1,0,],[2,0,0,1,0,2,2,0,2,0,2,2,0,2,0,1,1,0,1,0,2,1,0,1,1,1,0,1,1,2,2,0,2,0,0,0,2,0,2,0,0,0,0,1,2,1,1,1,2,2,0,2,1,2,1,1,2,2,0,2,2,2,2,1,1,0,0,1,0,2,1,1,0,0,1,2,0,2,1,1,2,0,1,2,1,1,1,2,2,1,2,2,2,0,2,1,0,0,0,0,1,0,1,1,2,2,2,2,1,2,1,2,1,2,2,1,1,1,2,2,1,0,0,2,1,1,1,1,1,0,2,1,0,1,0,1,0,1,0,1,0,1,0,0,1,2,0,2,1,0,],[2,1,2,2,0,1,2,1,1,1,2,0,0,2,1,2,0,1,1,2,2,1,2,2,1,2,1,1,0,0,0,1,2,0,2,0,1,1,0,2,1,1,1,0,1,1,0,2,2,1,0,1,2,1,2,1,2,0,1,1,1,0,0,0,0,2,0,1,1,0,1,0,1,1,2,1,0,0,1,0,2,1,2,0,2,2,2,2,2,1,2,2,2,0,0,0,0,0,2,0,2,2,2,1,1,1,0,1,1,2,0,2,2,2,0,1,2,2,1,0,0,1,1,2,1,0,1,0,1,2,2,2,1,0,2,1,0,0,1,0,1,1,1,0,2,0,0,2,1,1,],[1,0,2,2,2,1,2,0,1,2,1,2,2,0,2,0,1,0,0,0,1,0,0,2,1,2,1,1,1,2,2,1,1,1,0,2,1,0,1,0,2,2,1,2,0,0,0,1,0,1,0,2,0,2,1,0,0,2,1,1,0,2,1,2,0,0,0,0,1,2,0,0,1,2,2,1,2,1,2,1,2,1,0,2,0,0,2,0,1,1,0,2,2,0,1,1,1,2,0,2,0,1,2,0,1,1,0,2,1,2,0,2,2,0,0,0,1,2,0,0,1,2,1,2,1,1,2,0,2,1,1,2,2,1,2,2,1,2,1,0,0,2,1,1,0,2,1,2,1,1,],[0,0,0,1,1,1,0,1,1,1,0,1,1,2,1,2,2,2,0,2,0,1,0,1,2,2,2,2,1,1,1,2,1,2,0,1,2,1,0,2,1,1,0,0,1,0,0,1,1,0,1,0,0,1,2,0,2,2,0,2,1,0,1,1,0,1,1,2,2,0,2,1,0,1,1,1,2,0,2,1,2,1,2,1,1,1,0,0,0,2,1,2,0,0,2,0,2,2,2,2,1,1,2,2,1,2,1,1,2,2,0,1,0,1,1,0,1,1,1,1,0,0,1,1,2,0,1,2,2,2,2,1,0,1,0,0,1,0,0,0,1,2,2,0,2,0,1,2,0,1,],[1,1,2,2,2,2,1,0,0,2,2,1,2,1,0,1,2,2,0,2,1,1,1,2,0,1,0,1,2,0,1,0,0,2,1,1,2,2,1,1,2,0,0,1,0,0,1,2,1,0,1,2,1,0,2,0,2,2,1,0,0,0,1,1,0,0,2,0,2,2,0,0,1,1,0,1,1,0,1,2,2,2,0,1,1,2,2,2,1,1,1,2,1,1,1,1,2,2,2,1,0,1,1,1,2,1,0,1,2,2,1,2,1,1,1,0,2,1,1,0,1,2,0,1,1,2,2,0,0,1,1,0,0,2,1,1,1,2,1,0,0,1,0,2,1,2,0,1,1,0,],[0,0,0,1,2,1,0,0,0,0,0,1,2,1,0,1,1,1,0,1,1,0,2,2,1,2,1,1,0,1,1,0,2,0,2,1,1,1,0,2,2,2,0,0,1,1,1,0,1,2,1,0,2,0,2,0,0,0,0,1,1,2,2,1,2,2,0,0,0,0,0,0,1,0,1,1,2,0,1,0,1,2,0,1,1,1,2,0,0,0,2,0,1,2,1,0,1,2,2,2,1,1,2,0,2,0,1,1,1,0,1,2,2,1,0,0,1,0,2,0,1,2,2,2,1,1,0,0,1,0,0,2,1,2,0,1,0,1,1,0,0,1,2,0,1,2,2,2,0,2,],[1,2,2,2,2,2,2,2,0,0,2,1,0,1,1,2,1,0,2,0,0,1,1,2,2,2,1,2,2,1,0,0,1,2,2,2,1,0,1,0,2,2,2,0,2,0,1,0,0,1,2,0,2,0,0,1,1,0,0,0,1,0,1,0,1,0,0,2,0,1,0,1,0,1,0,0,2,2,0,0,1,1,2,0,0,2,1,2,0,2,1,0,2,0,1,0,0,1,1,0,0,2,0,1,0,2,1,2,1,0,2,1,2,1,0,0,0,2,1,2,1,1,1,2,1,1,0,1,1,0,0,1,1,0,1,1,1,2,2,2,2,2,2,1,2,0,1,0,2,0,],[0,2,0,2,2,2,0,1,2,1,2,2,0,2,0,1,1,1,0,0,0,1,0,2,0,1,1,0,2,1,1,1,1,0,2,2,0,2,1,1,1,2,1,0,2,0,2,0,1,2,2,0,0,1,1,0,2,0,1,1,2,1,0,2,2,0,1,0,2,1,0,0,1,2,1,0,1,2,1,2,0,1,2,2,0,1,1,1,0,1,0,1,2,0,1,1,2,2,0,0,0,1,0,1,0,2,0,0,2,1,1,2,1,2,0,0,1,1,1,0,1,0,0,0,2,0,2,0,2,1,2,2,0,1,0,2,1,0,1,2,0,0,1,1,1,1,2,0,2,0,],[1,0,0,2,1,2,2,0,1,1,2,2,2,1,1,2,1,2,0,1,0,2,2,2,0,1,1,1,2,2,2,2,2,2,2,0,1,2,0,0,1,1,0,0,1,0,0,0,1,2,2,0,2,1,2,2,0,2,1,2,0,0,0,2,2,1,2,0,2,1,1,1,0,1,0,0,0,2,2,2,1,1,1,2,1,2,2,1,1,0,1,0,1,0,2,1,1,0,2,0,2,0,0,1,2,0,2,0,0,2,0,0,0,1,2,2,0,2,2,0,2,1,0,1,2,0,0,0,2,1,1,0,1,2,2,2,2,2,2,2,2,1,2,0,1,2,0,2,0,2,],[0,2,1,2,0,0,1,2,1,0,0,1,1,0,0,0,2,0,1,1,0,0,2,1,2,0,2,2,1,1,2,0,0,0,1,0,0,1,2,0,2,2,2,2,1,2,2,2,1,0,1,2,0,0,0,1,0,2,0,2,0,2,1,1,0,1,1,1,0,2,2,0,1,0,2,2,0,0,2,0,1,0,1,2,2,1,0,1,1,1,0,2,2,2,1,0,0,1,1,2,2,2,0,2,1,2,0,2,1,1,1,2,2,0,0,2,2,2,2,1,2,1,1,2,2,0,2,0,2,0,0,0,0,0,2,1,2,2,0,0,0,2,1,1,0,1,2,1,0,1,],[1,2,0,2,1,0,1,0,1,1,2,0,0,1,0,0,1,0,1,0,2,0,0,2,1,2,1,2,2,2,1,0,1,0,2,1,2,2,1,1,2,1,0,2,2,2,0,2,0,0,1,0,0,2,2,2,2,2,1,2,1,1,1,1,2,1,1,0,1,1,0,2,2,0,1,2,0,0,1,2,1,2,0,0,1,1,2,1,0,2,1,2,1,2,2,2,0,0,1,2,0,1,0,1,0,1,2,2,1,0,1,1,2,0,2,2,0,2,2,2,0,2,2,0,0,1,2,0,0,2,0,1,1,0,2,1,0,1,2,1,0,0,1,1,1,1,1,1,1,2,],[1,0,0,1,0,2,1,1,2,2,2,1,2,1,1,0,2,2,0,1,0,0,2,0,2,2,1,1,2,0,2,2,0,1,2,2,0,0,2,2,0,0,1,1,1,2,2,2,1,1,0,1,2,1,2,2,0,2,0,1,0,0,2,0,0,0,2,1,1,1,0,2,0,2,0,0,2,1,1,1,1,1,0,0,1,1,2,0,0,2,0,1,2,0,1,2,0,2,1,0,0,2,0,0,1,0,1,2,2,2,2,1,1,2,0,2,1,0,0,0,2,0,0,0,0,1,0,0,0,1,0,0,2,1,1,2,1,2,0,1,0,1,0,1,1,2,1,2,2,0,],[2,2,1,1,2,0,0,0,0,2,1,0,1,1,2,0,1,1,2,2,2,0,2,2,0,0,1,2,1,0,2,0,2,1,1,1,1,2,0,2,1,1,0,2,2,0,0,2,2,0,0,0,1,0,1,1,0,0,1,0,0,2,0,1,0,2,1,0,0,1,2,2,2,1,0,0,2,0,1,1,0,2,1,1,1,0,2,1,0,0,0,1,1,2,2,1,1,2,0,2,1,1,1,1,2,1,1,1,0,2,1,1,1,0,2,2,0,2,1,1,1,1,0,2,2,2,1,1,0,1,0,0,0,1,2,1,1,2,2,1,2,1,1,2,0,2,2,0,1,2,],[2,1,2,2,0,2,1,1,2,2,1,0,2,1,2,1,2,0,1,1,1,2,0,0,1,2,2,0,1,2,0,2,1,0,0,0,1,0,2,2,0,1,2,2,2,0,2,1,1,2,1,2,2,1,0,0,0,2,0,1,0,2,2,2,1,0,0,2,2,1,0,2,1,0,1,1,2,0,2,1,2,0,0,0,0,2,2,1,1,0,0,2,2,0,1,1,2,2,0,1,1,2,1,1,1,2,2,2,1,1,2,0,1,2,2,0,0,1,2,0,1,0,1,0,1,1,0,1,2,0,0,0,2,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,2,2,],[1,1,1,1,1,1,1,1,1,1,0,0,2,2,0,2,0,1,2,1,0,1,1,2,1,1,2,2,1,1,2,1,0,2,1,1,1,1,2,0,0,0,0,1,0,2,2,2,2,1,0,2,0,1,2,0,1,2,2,0,1,0,0,1,1,0,2,2,1,2,1,0,1,0,2,2,0,2,0,0,1,1,0,0,2,1,2,1,0,1,2,0,0,1,1,1,2,2,0,2,1,1,1,1,1,2,2,0,2,0,2,0,1,0,2,0,0,1,2,1,1,1,0,2,1,0,0,0,2,2,0,0,1,2,2,1,1,0,1,1,2,1,2,1,2,1,0,1,1,1,],[1,0,0,2,2,1,0,0,0,0,0,2,0,1,0,1,2,1,0,0,2,1,2,2,0,0,2,2,1,0,2,1,1,2,2,1,1,1,1,1,2,2,2,2,0,1,2,1,1,1,0,0,2,2,2,1,0,0,1,2,1,2,0,0,1,0,2,1,1,1,0,0,0,2,1,0,0,0,0,0,0,2,0,0,2,1,2,2,2,0,0,0,0,0,1,0,2,0,1,1,0,0,2,0,2,1,2,0,2,0,1,1,0,0,1,0,1,2,1,0,1,1,0,1,1,0,2,2,0,0,1,2,1,2,1,0,2,1,1,2,1,1,1,2,1,2,0,0,1,2,],[1,1,2,0,1,2,0,1,1,1,0,0,1,2,0,1,0,0,0,1,2,2,2,1,2,0,1,2,2,0,1,2,2,2,2,2,1,2,1,2,2,0,0,2,1,0,1,0,0,2,0,1,2,0,0,2,2,0,2,2,1,0,1,0,1,0,2,0,2,2,1,0,1,0,0,2,0,1,2,1,2,2,0,1,1,0,0,2,0,0,1,2,2,0,1,0,1,0,1,1,2,2,0,2,1,1,2,2,0,0,1,2,1,0,0,1,1,1,1,2,0,2,0,1,2,0,2,2,2,0,0,0,2,1,1,1,2,1,1,1,0,0,2,0,2,2,0,0,1,0,],[0,2,2,1,0,1,1,1,0,1,0,0,0,2,0,1,0,2,2,0,0,0,2,0,2,0,2,1,1,1,2,0,1,1,2,0,0,0,0,2,2,2,1,0,2,0,0,0,2,0,2,0,1,0,2,1,1,2,1,0,1,2,2,0,0,2,1,1,2,2,2,1,1,2,0,1,1,0,1,1,1,1,2,1,0,0,1,0,2,0,2,1,1,0,1,1,2,1,0,0,0,1,2,1,2,1,2,0,0,0,2,0,0,0,2,2,1,0,0,2,1,0,2,2,1,2,0,1,1,0,1,1,2,2,2,2,1,2,1,2,1,1,2,0,0,2,1,2,0,1,],[1,2,2,2,0,0,2,0,0,1,2,0,2,1,2,2,2,1,0,0,1,1,1,2,0,0,1,1,1,1,1,1,2,1,1,1,2,1,1,0,0,2,0,1,2,1,1,2,1,1,1,1,1,0,0,1,1,0,1,0,2,1,2,0,1,2,0,0,1,2,1,0,1,0,0,1,1,2,0,1,1,0,2,2,0,1,2,0,2,2,2,0,2,1,0,0,1,1,1,2,1,0,2,1,2,1,2,2,1,1,1,1,0,2,2,1,1,2,2,0,1,2,1,1,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0,0,1,1,0,1,1,1,2,1,0,1,],[2,2,1,1,1,1,0,0,2,0,1,1,2,1,1,1,1,1,1,2,2,1,2,2,0,0,0,0,0,0,2,0,1,0,2,1,2,0,2,2,2,1,2,0,0,1,2,2,1,0,2,2,1,2,0,1,1,0,1,1,1,0,0,1,0,1,0,2,0,1,0,2,1,0,1,1,1,2,0,1,2,0,2,0,2,2,2,0,2,1,1,0,2,2,0,2,1,1,1,1,2,0,1,0,2,0,1,0,2,0,0,1,2,2,1,1,2,2,1,2,1,0,2,2,0,2,2,1,0,2,2,2,1,2,2,0,2,2,0,0,2,1,0,0,0,1,1,2,0,2,],[1,1,0,0,2,2,2,2,2,1,2,1,0,2,0,0,1,2,0,1,1,2,0,0,2,1,2,2,2,2,0,2,2,2,2,2,0,1,1,2,2,0,2,1,1,1,2,2,0,0,0,1,2,2,1,1,0,2,2,1,2,2,0,2,1,2,0,0,0,2,2,1,2,0,2,0,2,1,2,1,0,2,2,0,0,0,2,0,2,0,1,1,1,2,1,1,0,1,1,1,2,1,1,1,1,1,2,2,0,2,2,1,2,2,2,1,1,1,1,1,2,0,2,1,1,2,1,1,0,2,1,1,0,0,0,2,0,1,0,0,2,0,2,2,1,1,1,1,2,0,],[0,2,2,0,1,2,0,0,0,1,1,0,1,0,2,1,2,1,0,0,0,1,1,2,2,2,1,1,0,0,2,2,2,0,1,0,2,2,1,0,0,1,0,0,2,0,0,2,2,1,1,2,1,0,1,0,0,1,0,2,1,2,1,0,2,0,0,0,2,0,0,1,1,0,0,2,2,2,2,0,0,2,0,1,2,1,0,0,2,1,0,2,1,2,1,0,1,0,0,1,2,0,1,1,2,1,0,2,1,2,1,2,2,2,2,1,1,1,2,1,1,2,0,2,1,2,2,2,1,1,0,1,1,0,1,1,0,2,2,2,2,2,2,1,0,0,2,1,1,2,],[1,1,2,2,0,2,1,1,2,1,2,2,1,0,2,1,2,0,2,1,1,1,2,1,0,0,0,2,0,2,0,2,2,2,1,0,0,1,1,0,1,0,0,2,1,0,1,0,2,0,1,2,2,1,2,0,1,2,2,1,1,2,2,0,2,1,2,2,2,1,1,0,0,0,1,0,2,1,1,1,0,1,0,0,1,0,2,1,2,1,2,1,2,0,0,2,2,2,1,0,2,1,1,2,1,1,1,2,1,1,0,2,2,1,1,2,0,0,0,1,0,2,0,2,0,1,0,0,1,2,1,0,0,0,2,0,1,2,2,2,2,2,1,1,1,0,0,1,2,1,],[1,1,1,0,0,1,0,2,2,0,2,1,1,1,0,1,1,0,0,0,2,1,2,0,1,1,1,1,0,1,1,1,2,1,1,1,0,0,1,2,0,1,1,0,0,2,1,1,0,2,2,1,1,2,0,0,2,2,1,2,0,2,0,1,2,2,0,2,0,2,1,0,1,2,0,2,1,1,2,0,1,2,0,0,1,2,1,0,2,1,2,0,1,2,1,2,2,2,1,1,0,2,1,0,1,0,2,1,0,1,1,2,2,2,1,0,1,1,2,1,2,2,0,0,1,1,0,0,2,0,1,0,1,2,2,0,0,2,2,2,0,0,0,0,0,0,0,1,1,0,],[1,1,1,2,0,1,1,1,0,1,0,2,1,1,1,1,2,2,2,2,1,0,2,1,0,0,1,1,2,0,1,0,2,1,1,1,0,0,2,1,0,1,0,2,0,1,2,1,1,1,1,1,2,2,2,2,1,0,2,1,0,2,2,1,0,2,1,2,0,0,2,0,2,1,2,2,0,0,0,2,2,0,2,2,1,0,0,1,1,0,2,2,1,0,1,1,0,0,0,1,2,0,1,0,1,0,2,2,0,2,1,2,1,2,1,2,1,0,0,1,1,2,2,0,1,0,1,1,2,1,0,0,0,1,0,1,0,2,0,2,1,0,0,1,0,1,1,0,1,2,],[1,1,1,0,0,1,2,0,0,0,0,2,1,0,2,0,1,2,2,2,2,2,2,1,2,2,1,0,1,2,0,2,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,2,1,0,0,1,1,0,0,0,1,0,2,0,0,2,0,2,1,1,1,2,2,1,0,0,0,2,0,1,2,2,2,1,1,1,2,2,1,0,1,2,2,0,1,1,0,2,0,2,0,0,0,1,0,1,0,2,0,0,2,2,0,1,0,0,2,2,1,1,0,2,0,1,2,0,1,1,0,0,1,2,0,2,1,1,0,0,2,0,2,1,2,1,1,2,1,],[1,1,2,2,2,0,2,1,0,2,2,1,1,0,0,0,2,1,0,2,2,0,0,1,0,2,2,1,0,2,2,1,0,0,2,1,1,1,2,0,1,1,2,2,0,0,0,0,2,1,1,0,1,1,2,0,0,2,0,0,0,2,0,2,0,2,2,2,2,2,2,1,2,1,0,2,0,0,0,0,2,1,0,2,0,1,0,0,1,2,2,0,2,0,2,1,1,1,0,0,0,2,0,1,1,1,1,1,1,1,2,0,2,1,2,0,0,0,2,0,0,2,1,2,1,2,0,0,1,2,0,1,0,1,0,0,2,2,1,0,1,0,0,0,1,1,2,0,2,2,],[2,2,0,2,2,2,2,0,1,1,2,2,2,2,0,1,2,1,0,2,1,2,0,1,0,0,1,1,0,0,0,0,1,0,2,1,2,2,1,2,1,0,2,1,2,1,2,0,0,1,0,1,0,0,1,1,1,1,2,2,2,2,1,0,1,0,1,0,1,1,0,1,0,2,2,2,1,1,0,0,0,1,0,0,0,0,2,2,1,2,2,2,0,2,1,0,2,0,1,1,2,1,2,2,0,2,1,0,2,0,0,2,0,0,2,2,1,2,1,1,0,0,1,0,2,2,1,1,2,2,2,2,1,2,2,1,2,1,0,1,0,1,1,2,2,0,2,0,2,2,],[1,0,2,2,1,1,0,1,2,1,0,2,0,1,1,0,0,0,1,1,2,1,0,2,0,2,2,1,2,1,2,0,1,1,2,0,0,0,2,0,2,2,1,2,1,0,1,1,0,1,1,0,0,2,2,0,0,2,2,0,1,2,0,0,0,2,0,0,2,2,2,2,1,0,1,0,0,1,1,1,0,2,2,1,0,2,2,2,0,0,2,2,1,1,0,1,2,2,0,0,0,1,1,0,2,1,0,2,0,0,0,0,2,0,2,1,2,0,1,2,0,2,0,2,1,2,1,1,2,1,1,2,2,0,1,2,2,1,0,0,2,0,0,0,2,2,1,1,2,0,],[2,2,0,0,0,0,2,1,0,2,1,0,1,0,2,0,0,2,2,1,0,1,0,2,2,0,0,2,2,2,0,1,1,2,0,2,0,0,2,1,1,1,0,0,1,1,0,2,2,1,2,2,2,2,1,1,1,2,2,2,0,2,1,1,0,1,2,2,2,1,1,1,2,2,1,0,0,1,0,0,2,2,1,2,2,2,0,0,2,1,2,0,0,1,2,2,1,1,1,1,1,0,1,2,1,0,1,2,0,2,2,2,1,0,0,2,2,0,1,1,1,2,0,2,1,0,1,0,2,2,1,1,0,1,2,1,2,0,0,0,1,2,0,0,0,0,1,0,1,1,],[2,0,2,0,1,0,0,1,2,0,1,2,1,1,0,0,1,0,0,1,2,0,1,0,2,0,1,2,1,2,1,0,0,1,0,0,0,1,1,0,0,0,1,1,2,1,2,2,2,2,2,0,2,2,1,1,1,1,2,2,0,1,1,2,2,2,2,0,2,1,0,1,0,2,0,2,1,1,2,2,0,1,1,0,1,0,2,0,1,2,0,1,1,1,0,1,2,1,0,2,1,2,0,0,0,0,0,2,0,2,2,2,1,1,0,2,2,1,2,0,1,2,1,1,0,2,0,1,0,1,1,1,0,1,2,2,1,0,0,0,2,1,0,0,0,2,1,2,1,2,],[1,2,0,2,1,0,1,2,0,1,0,0,0,1,2,1,2,0,0,2,1,0,0,0,0,1,2,1,2,1,1,2,2,1,1,2,2,2,0,0,2,0,1,2,2,0,1,2,2,2,0,1,2,0,0,1,2,1,0,0,1,1,0,0,1,0,0,2,1,0,0,2,1,0,1,2,2,2,2,1,2,0,2,1,2,1,2,0,2,0,2,0,0,1,2,1,1,1,0,0,0,1,1,2,2,2,0,1,1,2,1,2,1,1,2,0,1,2,1,1,1,2,0,0,2,2,1,0,1,1,0,1,0,1,2,2,0,2,1,0,2,1,0,1,1,0,2,1,1,2,],[2,1,1,0,1,2,1,1,1,1,1,0,2,0,1,2,2,2,2,2,2,1,0,1,2,1,0,2,0,1,0,0,2,2,2,1,2,2,2,1,0,1,1,0,2,1,2,1,1,0,2,2,0,2,1,0,0,0,0,1,1,1,1,2,0,0,0,1,1,1,2,1,1,1,0,0,2,0,0,1,0,0,1,0,2,1,0,0,1,0,0,0,0,1,2,0,0,2,0,2,0,2,2,1,0,0,0,2,2,1,0,1,1,0,0,2,1,2,0,0,1,1,0,1,0,1,2,2,1,2,2,2,1,0,0,2,1,2,1,2,2,1,1,1,1,0,0,0,2,1,],[2,0,1,0,1,0,0,1,1,2,2,0,2,1,0,0,2,1,1,0,2,2,0,1,0,2,2,0,0,2,1,1,0,1,1,1,0,2,0,1,2,2,2,1,2,0,0,0,2,1,2,2,1,0,0,2,1,1,2,0,1,2,0,1,2,2,0,0,0,1,0,1,1,1,1,2,1,0,0,0,2,0,2,1,2,2,0,0,0,2,1,2,1,2,0,1,2,0,1,2,1,0,1,1,2,1,0,1,0,2,2,1,1,1,1,0,2,1,2,2,0,2,0,2,1,0,2,2,0,1,1,2,0,2,0,0,0,1,2,1,2,2,1,0,0,0,2,2,0,1,],[0,2,1,0,2,0,2,0,0,1,1,0,1,0,2,0,2,0,0,1,0,1,1,1,2,2,1,1,0,0,2,0,0,0,0,0,0,0,0,0,2,1,1,0,0,2,0,1,1,1,0,2,1,1,0,1,2,2,1,2,0,1,0,0,1,1,2,0,2,1,2,0,2,1,1,0,0,0,2,2,1,1,2,1,2,1,1,2,0,0,2,0,1,1,1,0,0,2,2,2,2,2,0,1,0,0,0,0,2,2,2,2,0,1,2,0,2,2,0,1,0,1,0,1,2,0,0,2,0,2,2,1,2,0,0,1,2,2,0,2,1,0,1,2,0,1,0,2,0,0,],[1,2,0,0,1,1,2,2,0,0,0,1,1,1,2,0,1,1,2,0,0,0,0,1,1,2,2,2,2,2,1,1,1,2,1,1,0,0,2,1,1,2,2,2,2,2,0,2,2,0,0,1,2,0,1,2,1,1,2,0,0,1,2,2,1,1,1,0,0,0,0,2,2,0,0,2,2,1,0,1,1,2,1,0,2,1,2,1,1,2,1,2,1,1,1,0,1,2,2,1,1,0,0,0,2,2,2,2,0,1,0,1,1,0,0,0,0,1,0,0,0,1,2,2,2,1,0,0,0,2,0,0,0,1,1,1,2,1,0,0,0,0,1,1,2,1,0,2,1,2,],[2,2,2,2,0,2,2,2,2,0,1,0,1,0,2,2,0,2,0,0,1,1,0,2,1,2,0,1,1,2,1,0,2,2,1,2,1,2,1,1,2,2,2,2,2,0,0,0,2,2,0,1,0,1,1,0,0,1,1,1,2,2,2,1,1,0,1,0,0,0,0,2,1,0,2,0,2,0,2,2,2,2,1,0,1,0,2,2,1,2,1,0,1,1,0,1,1,2,1,0,2,1,1,2,1,0,2,0,1,0,0,1,0,2,0,0,2,2,0,1,2,0,0,0,1,0,2,1,0,2,2,2,0,1,0,0,0,2,1,2,1,1,0,2,0,2,0,0,2,1,],[0,2,1,1,2,0,1,0,1,1,1,2,0,2,0,0,1,1,1,2,1,1,2,1,1,1,1,2,0,0,0,2,1,2,1,1,2,1,2,1,0,2,0,0,0,2,1,0,2,1,1,2,1,2,1,1,1,2,1,0,0,2,1,0,1,0,2,1,1,1,2,1,2,0,2,1,1,2,0,1,0,1,0,1,0,1,2,1,0,0,2,1,1,0,1,0,2,0,0,0,1,1,2,1,2,0,2,0,0,0,1,0,0,1,0,1,0,0,0,2,0,0,1,2,1,0,1,0,2,1,0,0,0,0,1,1,0,0,2,0,2,2,0,1,1,0,0,1,0,0,],[1,1,1,2,1,1,0,2,0,1,0,0,0,2,2,0,0,2,1,1,0,0,0,1,1,1,1,2,1,0,2,0,0,2,2,0,0,0,2,1,0,0,2,2,2,2,1,1,1,2,1,1,1,2,2,0,2,1,2,0,1,0,0,2,0,1,1,0,1,2,1,0,2,2,1,2,1,1,2,2,2,1,1,2,1,2,1,0,2,2,0,1,2,1,0,2,1,0,0,2,2,2,2,1,0,2,0,0,0,1,1,2,2,1,0,1,2,2,0,2,0,0,1,1,0,1,1,1,2,0,1,2,2,2,1,0,1,0,0,1,1,2,0,0,2,2,1,1,0,0,],[1,2,0,2,1,1,2,1,2,0,0,2,0,2,1,2,0,0,1,2,1,2,2,0,0,0,0,0,2,1,1,2,2,0,0,1,1,2,0,1,1,2,1,0,0,1,2,2,1,0,0,0,1,2,0,0,0,0,0,0,0,1,2,1,2,1,0,2,2,1,1,1,1,2,1,1,0,1,2,1,1,1,2,2,1,2,1,1,2,0,0,1,1,1,0,0,1,1,1,2,2,0,2,0,2,2,0,1,1,1,0,1,0,1,1,2,1,1,0,0,2,0,1,1,2,1,1,0,0,0,0,1,2,2,1,1,0,0,1,0,0,1,2,2,2,1,1,2,2,2,],[1,1,1,2,0,2,0,2,2,1,1,0,2,2,1,0,1,0,2,2,1,1,2,0,0,1,0,2,1,0,0,0,2,1,0,0,1,2,0,2,1,0,1,0,2,0,2,1,2,0,0,0,0,0,2,2,2,1,0,2,0,1,2,1,2,1,1,0,0,2,2,0,0,0,0,2,2,1,1,2,0,2,1,1,1,1,1,0,0,2,1,2,1,1,1,1,2,1,1,0,2,1,0,1,2,2,1,2,0,1,0,0,0,2,1,1,0,1,0,0,1,1,1,2,2,0,2,0,2,0,1,0,2,2,0,0,2,0,2,1,1,0,0,2,2,1,0,1,0,2,],[0,0,2,2,1,0,0,1,1,2,1,0,2,2,1,0,1,0,1,1,1,0,0,0,1,0,1,1,2,2,1,0,1,1,1,0,0,1,1,0,2,1,1,2,0,2,0,1,1,0,1,0,1,2,2,1,0,0,2,0,2,2,1,0,0,2,0,2,0,2,0,2,0,2,1,2,0,0,1,1,1,2,0,2,0,0,1,1,0,2,0,1,0,1,1,2,1,2,1,2,2,0,2,0,1,1,2,0,2,1,1,1,1,1,1,0,0,1,2,2,1,1,0,2,0,0,2,0,1,0,1,2,2,1,0,1,1,1,2,1,1,1,0,0,0,0,2,2,0,2,],[2,2,1,2,1,2,1,1,1,0,0,0,1,2,1,1,2,1,2,2,2,1,1,0,0,2,2,1,1,0,1,2,0,1,1,1,2,1,0,2,0,1,0,1,1,0,1,0,0,1,1,0,2,0,2,0,1,1,2,1,1,1,0,1,1,0,0,2,2,2,2,2,0,1,1,1,1,1,1,2,1,1,1,2,1,2,2,2,0,2,2,2,2,0,1,0,1,1,1,2,2,1,2,0,2,2,1,0,2,0,2,0,0,2,1,0,2,0,2,0,2,2,0,2,1,0,0,2,2,2,1,1,1,2,0,0,0,1,2,1,2,2,2,1,2,0,1,1,1,1,],[0,2,2,2,2,2,0,1,0,0,1,1,1,1,2,1,1,0,1,1,2,2,1,2,1,0,2,1,2,1,1,1,1,1,0,2,0,0,1,2,1,0,0,2,2,2,1,1,2,0,2,0,2,0,1,2,1,2,1,1,2,1,0,1,0,2,0,2,2,0,2,2,0,2,1,0,1,2,2,1,0,0,2,0,0,0,2,1,1,1,0,2,0,2,0,2,0,0,1,2,0,1,2,1,1,2,2,0,1,1,2,0,2,1,2,2,0,1,0,0,1,2,0,0,1,1,2,2,0,1,1,2,2,1,2,2,1,0,2,0,1,1,2,1,0,0,2,0,2,2,],[0,1,1,0,0,2,1,0,2,2,2,1,2,2,1,2,2,1,1,0,2,2,0,2,2,2,0,1,1,0,2,1,2,2,0,2,2,1,1,2,2,2,0,2,1,2,2,1,1,2,2,1,2,0,2,0,0,0,1,0,1,2,1,1,2,0,0,1,0,1,1,2,0,0,1,1,0,1,1,0,2,0,0,1,2,1,2,1,1,2,2,2,1,1,0,0,2,0,2,2,2,1,1,0,0,1,2,1,2,1,2,2,2,0,0,2,0,2,1,2,1,2,1,1,2,2,2,2,0,0,1,0,1,2,2,1,1,2,1,0,2,1,2,0,2,2,0,2,0,0,],[1,2,0,2,1,0,2,2,1,0,0,1,1,0,1,1,0,2,2,1,1,2,1,2,1,0,0,0,1,2,2,0,2,2,1,1,0,2,0,1,2,0,1,2,0,1,2,2,1,0,2,1,1,0,1,1,1,1,0,2,1,2,0,0,1,1,1,2,1,0,2,0,1,2,0,0,1,1,1,2,0,2,1,1,1,1,2,1,2,1,2,2,2,1,2,2,2,2,1,0,0,2,0,0,1,0,2,2,0,2,0,2,1,1,2,0,1,0,0,0,0,2,1,0,1,2,2,0,1,1,1,0,0,1,0,2,1,2,1,1,0,1,0,0,1,1,0,1,1,0,],[2,0,2,0,2,1,1,0,2,2,1,2,1,1,0,1,0,1,0,1,0,2,1,2,1,2,1,0,2,2,2,1,2,0,0,2,2,0,2,0,1,0,2,1,1,2,0,0,0,1,2,0,1,0,1,1,1,0,2,0,1,0,0,2,1,2,0,2,2,0,2,0,1,1,0,2,0,2,1,1,2,0,2,2,2,1,1,2,1,0,2,1,0,1,2,0,2,1,1,2,0,2,2,0,0,0,2,0,2,2,0,0,1,2,1,0,2,2,2,2,2,0,1,0,1,0,0,2,2,2,2,1,2,2,1,0,2,1,0,2,2,0,0,0,2,0,2,2,1,2,],[0,0,2,1,2,0,2,1,2,2,2,0,2,2,0,1,1,1,1,2,2,1,2,2,1,0,0,1,0,2,1,2,0,1,1,0,2,1,2,1,0,2,0,2,0,2,0,0,0,1,2,1,2,0,1,2,0,2,2,0,1,2,1,0,2,0,2,0,2,2,2,1,0,1,2,0,2,0,0,0,2,2,0,2,0,0,1,2,2,2,0,2,2,1,2,0,2,1,2,0,0,0,2,2,1,2,2,0,0,0,2,0,0,2,1,2,2,1,0,2,2,1,2,1,0,1,2,1,0,1,0,1,1,0,2,1,0,2,2,1,2,1,2,2,1,1,0,0,0,1,],[1,0,2,1,0,1,2,0,0,1,2,1,1,0,1,2,0,1,1,1,0,2,2,0,2,0,0,0,0,1,1,2,2,2,0,0,0,2,2,2,0,2,2,0,0,0,1,1,2,0,2,0,1,2,0,1,1,1,1,1,0,2,0,0,0,1,2,2,0,2,0,1,0,1,1,2,2,0,1,0,2,1,2,0,0,0,2,2,1,2,2,0,2,1,2,1,2,2,0,1,2,2,1,0,1,0,2,1,1,1,0,1,1,0,2,1,0,0,2,1,1,2,1,0,2,2,0,0,1,1,0,0,1,2,0,2,1,0,1,0,2,2,0,0,2,2,1,0,0,2,],[0,0,0,1,0,0,0,1,0,1,0,2,1,2,1,0,1,2,2,1,0,2,1,1,2,1,1,2,2,1,2,2,2,2,2,1,1,1,1,2,0,0,2,2,2,1,1,2,0,2,1,0,1,1,0,1,0,2,0,1,1,2,1,1,0,0,0,1,2,2,2,1,0,1,0,1,0,0,0,1,1,0,2,0,2,1,2,0,1,0,1,1,0,0,0,2,1,2,0,0,2,1,0,1,1,1,1,1,0,2,2,0,2,2,2,1,0,1,1,0,2,0,1,1,1,1,1,0,1,1,0,0,2,2,1,2,0,2,1,2,2,1,2,0,2,0,0,0,0,0,],[0,2,2,2,1,1,0,2,1,2,0,0,2,1,1,2,1,1,2,2,0,1,0,1,0,0,0,0,2,0,1,1,1,2,0,2,0,0,1,1,1,1,2,0,0,0,2,1,0,0,0,0,1,0,2,2,2,1,2,1,1,2,0,0,0,1,0,2,1,1,0,1,1,2,0,1,0,0,1,0,0,1,0,2,2,2,1,0,2,1,0,0,2,2,2,1,1,2,0,2,0,2,1,2,2,0,1,0,1,1,1,2,1,1,0,2,2,2,0,0,1,1,2,1,2,1,2,1,0,0,2,2,2,0,1,1,2,0,1,0,1,2,0,1,2,1,0,1,2,2,],[2,2,1,1,1,0,0,1,2,2,0,0,0,1,2,2,1,2,0,1,2,2,1,2,1,1,2,1,2,2,2,1,0,2,2,1,0,0,0,2,2,2,2,1,0,1,1,2,1,2,0,1,1,1,2,1,1,1,0,0,0,0,1,0,2,2,2,0,2,1,2,0,1,1,2,2,1,1,0,2,1,0,2,1,0,0,2,1,0,2,2,0,2,0,0,2,2,2,0,2,0,1,0,1,2,2,1,0,1,1,1,0,0,0,2,2,2,2,2,1,1,1,1,0,0,0,0,1,2,1,0,0,1,1,2,0,2,2,1,2,2,1,0,2,2,0,2,2,0,2,],[2,2,2,0,2,2,1,2,1,0,2,2,0,1,0,1,0,2,2,1,1,0,2,1,2,0,1,2,0,1,1,0,1,1,0,1,2,0,1,2,0,1,2,1,0,1,1,1,1,1,0,1,0,1,2,2,2,2,2,1,0,0,1,0,2,1,2,2,0,2,1,1,2,0,2,0,2,2,1,2,0,0,0,0,2,1,2,0,1,2,2,1,2,1,1,0,0,0,2,1,2,1,0,2,1,1,1,2,1,2,1,1,1,2,2,1,1,2,2,2,2,2,1,0,0,0,2,1,0,2,2,0,1,1,1,2,1,1,0,1,1,2,0,0,0,0,0,2,1,0,],[1,1,2,2,2,2,1,2,2,1,2,0,2,0,0,2,0,2,0,0,1,0,2,2,2,2,1,1,1,1,0,1,2,0,2,2,0,2,0,2,1,0,1,0,2,0,2,2,2,1,1,1,2,0,2,1,1,2,0,2,1,2,2,1,0,2,2,1,1,0,2,0,1,1,1,1,2,2,0,0,0,1,0,0,1,2,0,2,1,0,1,1,0,2,0,0,1,2,2,0,2,1,1,1,0,0,2,0,2,2,2,0,0,2,2,1,0,1,0,2,0,1,2,1,2,2,0,2,1,2,0,0,0,0,1,1,1,0,1,1,0,2,0,1,2,1,0,0,1,0,],[2,0,0,0,1,2,0,0,1,0,0,2,2,1,2,0,1,0,2,2,1,2,1,1,1,1,1,2,0,0,2,0,0,2,2,1,2,2,1,2,0,1,2,1,1,2,1,1,2,0,2,2,1,1,2,1,1,0,2,2,1,0,0,2,2,0,1,2,2,2,2,1,0,2,2,0,2,2,1,2,0,1,0,0,1,2,1,2,1,0,0,2,1,1,1,1,1,1,1,2,0,2,0,1,0,1,0,2,2,1,0,1,1,0,0,1,2,1,2,0,1,1,2,1,1,1,1,0,0,1,2,2,2,1,2,1,1,1,0,1,2,0,2,1,0,1,2,2,1,0,],[0,2,2,2,0,0,2,0,1,2,1,1,0,2,0,2,1,1,1,2,1,0,0,0,2,1,1,1,0,2,0,2,1,2,2,1,2,2,1,1,2,2,2,1,2,1,2,0,0,1,2,0,2,2,0,0,0,1,2,1,2,1,0,2,0,1,0,1,0,1,1,1,0,0,0,0,2,1,2,1,0,0,2,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,2,0,2,1,2,2,2,1,1,0,1,1,1,1,1,1,2,2,0,1,0,2,1,0,0,1,2,2,2,0,0,1,2,1,0,1,0,2,2,2,2,0,1,2,1,2,1,0,1,2,0,],[1,1,0,0,1,1,2,2,1,0,2,0,1,1,0,2,1,1,2,0,1,0,2,1,1,1,0,0,0,1,1,2,0,1,2,1,2,1,2,2,1,2,2,1,1,1,1,1,2,2,0,0,2,2,0,2,1,0,1,1,2,1,1,2,2,0,0,1,2,1,2,0,0,0,0,1,0,0,2,1,0,0,1,0,0,2,1,1,0,1,0,0,2,0,1,1,1,2,1,2,2,1,1,0,2,0,2,1,1,1,0,2,0,0,0,1,0,2,1,2,1,2,1,1,2,0,1,1,2,1,2,2,2,0,2,1,2,1,0,2,1,0,0,0,2,0,0,1,1,0,],[0,2,1,2,1,1,2,2,0,0,0,1,1,1,2,2,1,2,1,1,1,0,2,2,1,1,1,2,2,2,0,1,2,0,1,2,2,0,0,2,0,0,1,2,2,2,2,2,2,1,2,2,0,0,1,1,1,1,2,0,1,2,1,0,1,0,0,0,2,0,2,0,1,0,1,1,1,2,2,2,2,0,2,2,2,0,2,0,0,1,2,1,2,2,0,1,2,0,2,0,2,0,1,2,2,1,0,2,0,1,1,1,1,2,1,1,1,0,1,0,1,2,0,1,2,2,1,0,0,2,0,1,0,0,0,2,2,1,2,1,0,2,0,1,1,2,1,1,2,0,],[2,0,2,2,2,0,0,2,2,2,1,0,1,2,1,1,0,0,2,0,2,2,0,2,2,2,0,1,0,2,2,2,2,1,2,1,0,2,1,2,0,1,1,2,1,2,1,1,1,0,1,2,0,2,2,0,2,1,1,2,0,2,1,0,2,1,1,1,2,0,2,0,0,0,0,2,1,2,0,1,1,1,2,0,0,0,1,2,0,1,2,0,2,0,0,0,1,1,2,2,2,1,2,1,1,1,1,0,2,1,1,1,1,2,1,0,0,0,0,1,0,1,1,1,0,2,0,0,0,1,0,1,0,2,1,2,1,2,2,2,2,1,1,2,2,2,0,2,0,0,],[0,1,2,0,0,0,1,2,2,0,2,1,1,0,2,2,2,2,1,1,1,1,2,0,2,2,0,1,2,1,0,1,1,1,2,1,2,0,0,2,2,1,0,2,0,0,2,1,1,0,2,1,0,1,0,0,1,0,0,2,2,1,1,2,2,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,2,1,1,1,2,0,0,0,1,1,2,1,2,0,2,1,1,2,1,1,0,1,0,0,1,0,0,1,2,2,2,1,2,0,0,0,2,2,2,2,2,0,2,0,0,1,1,0,2,1,0,2,2,1,2,0,2,1,0,2,0,2,1,2,2,2,2,2,],[2,2,2,0,1,0,0,0,0,0,1,0,2,2,2,0,0,0,0,2,2,2,1,1,1,2,1,0,0,0,1,2,2,2,2,1,1,0,2,0,1,2,1,2,2,0,2,1,0,1,2,1,2,1,1,0,1,0,2,1,2,1,2,1,0,1,2,1,2,2,2,0,2,2,0,2,1,2,2,2,2,1,2,2,0,2,0,1,1,1,1,0,0,2,2,0,2,0,0,2,1,1,0,2,1,1,0,2,0,2,2,1,2,1,0,2,0,2,2,0,0,1,1,0,2,2,0,1,1,2,1,1,2,2,0,2,1,2,0,0,0,1,1,0,2,2,0,1,0,0,],[1,0,1,0,0,0,1,0,0,1,2,0,2,1,0,2,2,0,1,1,0,0,0,0,0,2,0,2,2,0,2,2,2,2,2,1,0,1,1,0,0,1,1,0,0,1,0,2,0,2,2,1,2,1,1,0,0,0,2,1,0,2,0,2,2,1,2,2,1,2,0,0,1,2,1,1,0,0,1,2,1,0,2,0,2,0,0,2,0,2,1,2,0,1,2,0,1,0,1,2,0,1,2,1,0,0,0,0,0,2,0,2,1,0,1,2,1,2,0,1,2,0,1,2,2,1,2,2,2,2,0,2,0,0,0,2,2,0,2,2,0,1,1,0,0,2,0,0,1,1,],[0,2,2,0,0,1,0,1,2,2,0,0,1,1,1,1,1,0,2,1,0,0,2,0,2,0,2,1,2,1,1,2,1,0,0,2,1,0,2,0,0,1,2,2,0,0,2,2,1,0,0,0,1,2,1,2,1,1,1,1,1,0,0,1,0,2,1,0,1,1,2,0,1,0,1,0,0,0,2,1,0,0,1,2,1,1,0,1,0,1,1,1,1,2,0,2,0,1,1,0,0,1,1,0,0,0,1,2,1,2,2,1,0,2,2,1,0,0,2,1,1,0,0,2,2,0,0,0,0,1,0,2,1,2,0,1,0,1,2,0,2,2,0,0,2,2,0,1,2,2,],[0,0,2,0,2,2,2,1,0,1,2,2,2,0,0,0,1,0,1,1,0,1,2,2,0,0,2,2,2,0,1,1,1,0,0,0,2,2,2,1,0,0,2,0,1,0,1,2,1,1,2,2,0,2,2,2,0,2,0,1,2,2,0,1,0,1,0,2,1,0,2,2,1,1,0,2,2,2,0,0,0,2,1,1,1,1,1,0,0,1,2,0,2,2,1,1,0,1,0,1,1,2,2,0,1,0,0,1,0,1,1,1,1,1,1,2,1,1,1,0,1,2,2,0,1,0,0,0,1,2,1,2,0,1,0,2,0,1,2,1,1,2,0,1,2,1,0,2,1,2,],[1,0,0,2,1,1,0,1,0,2,2,0,0,1,2,2,0,1,0,1,2,2,0,2,1,1,1,0,0,0,1,2,2,0,2,2,0,2,0,0,1,1,1,1,1,1,1,0,2,0,0,1,0,2,0,1,0,1,2,1,1,1,1,0,0,1,2,1,2,1,2,2,0,2,1,2,1,1,2,0,1,2,1,2,1,0,2,1,0,0,1,1,2,2,1,0,0,1,0,0,0,2,2,0,0,1,2,2,1,0,0,1,2,2,1,2,0,0,1,1,0,2,2,2,1,1,2,2,0,0,0,1,1,1,2,2,0,1,2,0,0,1,1,1,2,2,0,0,1,1,],[1,2,2,0,2,2,2,2,0,1,0,2,1,1,0,1,1,1,0,1,2,0,2,2,1,0,1,1,2,2,0,1,2,1,2,0,0,2,0,2,1,2,1,0,1,1,1,0,2,2,1,2,2,2,1,1,0,0,1,0,0,1,1,2,1,2,2,2,2,2,1,1,0,0,2,2,2,0,0,1,1,1,1,0,1,2,2,0,0,2,2,2,0,1,0,0,1,2,2,0,0,2,0,0,0,2,0,1,1,0,1,0,1,1,2,0,1,2,2,1,2,2,0,1,0,1,1,2,2,2,2,0,0,0,2,0,2,2,1,0,2,0,2,1,1,1,1,0,1,1,],[2,2,2,2,2,1,0,0,0,2,1,1,1,2,0,2,0,0,1,1,0,0,2,2,0,1,2,1,0,1,1,2,1,2,1,1,2,2,1,2,0,0,1,0,2,1,1,1,2,1,1,2,2,0,1,2,2,1,2,1,1,2,0,2,1,0,0,1,1,1,1,1,1,0,1,0,2,0,0,2,2,0,1,1,0,2,1,2,2,2,0,2,0,0,1,1,1,2,1,0,1,0,1,0,2,1,1,0,2,1,1,2,2,0,1,2,1,1,2,0,2,2,0,1,0,1,0,1,2,2,0,0,1,0,2,1,0,1,0,0,0,0,2,0,0,0,0,2,0,1,],[2,2,1,1,2,1,0,2,0,0,0,1,0,2,2,1,1,0,1,1,1,1,2,2,1,2,2,0,1,2,1,0,0,0,0,2,1,0,0,2,0,1,0,2,0,1,2,0,0,2,2,0,2,2,0,2,1,0,1,1,2,2,1,0,1,0,2,0,2,2,2,2,2,1,2,1,2,1,0,1,0,1,0,2,2,1,0,1,2,0,0,1,1,0,1,2,0,0,1,0,2,0,1,0,0,0,2,0,2,2,2,0,2,2,0,2,1,0,1,1,1,1,2,1,0,1,1,1,0,2,2,1,1,1,2,2,1,1,0,2,2,2,1,2,2,0,1,2,0,0,],[2,2,1,0,0,2,0,1,1,0,0,1,0,2,0,2,1,0,1,0,2,0,2,0,1,1,1,1,2,2,2,0,2,0,0,1,1,2,1,0,0,0,2,2,1,1,1,2,2,2,0,1,0,0,0,2,0,2,1,1,2,1,0,0,1,2,1,0,1,2,2,0,1,1,2,0,2,1,1,1,1,2,1,0,2,2,0,2,0,2,1,1,0,2,1,2,0,0,2,0,2,1,0,0,0,2,2,2,1,2,2,0,0,2,1,2,1,1,0,0,2,0,0,0,1,0,1,1,0,1,2,0,0,1,1,1,0,0,2,2,2,1,1,1,0,1,0,0,2,1,],[2,2,0,1,2,0,0,2,2,0,0,1,1,1,0,1,1,2,0,1,1,1,0,1,2,2,1,0,2,1,1,0,1,2,2,1,2,1,0,1,0,0,1,2,0,0,1,1,2,1,1,0,2,1,1,0,2,1,1,0,2,1,1,1,0,2,0,1,0,1,0,2,2,0,0,2,1,0,1,2,0,0,2,0,2,2,0,1,1,2,2,1,2,1,2,1,0,2,1,2,0,1,0,1,1,1,2,2,2,1,0,1,2,0,0,0,1,0,0,0,2,0,0,2,1,0,2,2,0,1,2,2,2,1,0,0,1,2,0,0,2,0,1,0,1,2,0,2,2,2,],[2,0,1,0,0,2,1,0,2,0,2,1,0,0,1,2,1,1,1,1,2,1,1,0,0,2,1,2,1,1,1,1,0,1,1,1,1,0,2,0,2,1,0,2,1,2,1,0,2,1,2,1,2,1,2,0,1,1,1,2,2,0,2,1,1,0,0,0,1,0,1,1,0,2,2,0,1,0,1,0,0,2,1,1,1,0,1,0,0,0,2,0,2,1,0,0,1,0,0,0,2,0,0,0,2,2,1,0,2,1,2,0,0,1,2,2,0,1,0,0,1,0,2,1,0,2,0,1,2,1,1,2,2,1,0,1,0,0,1,1,1,1,2,0,1,0,1,2,0,2,],[0,2,0,1,0,2,0,0,0,1,1,1,0,2,1,1,2,0,1,2,1,0,1,2,2,0,0,2,1,2,1,1,0,0,0,0,0,1,1,0,2,1,2,0,2,2,1,1,0,2,2,2,0,2,1,2,0,1,1,0,0,1,1,0,1,1,2,2,0,1,1,0,2,2,0,0,1,2,1,1,0,0,2,1,1,0,1,0,2,2,0,1,0,1,1,1,1,0,1,0,2,2,1,0,0,2,1,2,1,2,2,1,2,1,1,2,0,1,2,1,2,0,0,2,1,2,0,1,0,2,0,2,1,2,1,0,1,2,0,1,1,0,0,0,0,2,1,1,2,0,],[2,2,1,1,0,2,2,1,2,2,0,1,2,2,0,1,1,1,2,1,1,0,0,1,2,0,0,0,1,1,1,0,1,0,2,2,0,1,0,2,2,0,2,0,0,2,1,1,1,0,0,0,1,2,0,2,1,0,1,2,2,0,1,2,1,2,1,2,2,2,1,1,0,2,0,2,1,2,1,2,2,1,2,0,0,1,0,2,1,0,1,0,2,2,0,0,1,2,2,0,2,0,2,0,1,1,1,0,2,0,2,0,2,2,1,2,2,0,0,2,2,1,1,2,0,2,1,2,1,1,2,1,0,1,2,0,1,1,1,1,2,2,1,2,2,1,0,1,0,2,],[0,2,2,2,0,2,0,2,2,1,1,0,0,0,2,1,2,1,1,2,0,0,0,0,0,1,2,1,1,1,0,1,2,0,2,1,0,2,1,2,2,1,2,0,1,0,1,1,0,0,0,0,0,2,2,2,2,1,1,0,2,1,1,2,0,2,0,0,0,1,0,2,1,1,0,1,0,1,2,0,1,2,2,1,2,1,2,1,1,1,1,1,2,2,0,0,2,0,2,0,2,1,2,0,0,0,1,1,1,2,1,2,1,2,2,0,2,0,0,1,0,0,1,0,1,0,0,0,1,1,1,2,1,0,0,0,2,0,1,2,0,0,0,1,0,2,0,1,0,2,],[1,2,1,2,1,2,1,2,2,1,1,1,1,1,2,1,1,1,2,2,0,2,0,2,0,1,1,1,0,1,2,2,2,1,2,2,1,0,1,0,2,1,2,1,1,2,0,1,0,0,2,0,0,1,0,2,0,1,1,2,2,2,1,2,1,0,1,0,2,2,1,1,1,0,0,1,1,0,2,1,2,1,0,1,0,0,0,2,0,0,2,0,1,1,1,0,0,2,1,1,0,2,0,1,1,2,1,0,2,0,2,1,2,2,1,2,1,1,0,1,1,2,0,2,0,2,2,0,1,2,2,2,1,0,1,1,2,0,1,1,0,2,0,2,2,0,0,2,1,2,],[0,1,1,2,2,1,1,2,1,1,2,2,0,2,1,0,0,0,2,1,0,2,1,0,0,1,1,2,0,2,2,1,1,0,1,2,2,0,0,2,1,2,1,2,2,2,1,0,0,1,1,2,0,0,1,2,2,2,1,0,2,2,1,0,0,2,0,0,2,2,1,2,2,0,1,1,1,2,0,2,1,0,2,2,1,2,2,0,0,2,1,2,1,1,1,2,2,2,0,0,2,2,2,1,0,2,1,1,2,2,2,1,2,2,0,2,2,0,2,0,2,2,0,0,1,1,2,1,2,0,1,2,1,1,0,2,1,0,1,1,0,1,0,2,1,2,0,1,0,1,],[0,2,2,0,0,2,0,2,1,2,2,1,0,1,1,2,1,0,1,2,0,1,1,2,0,0,2,1,2,1,0,2,0,1,0,2,1,0,1,0,1,1,2,2,0,0,0,0,2,1,0,1,1,2,0,2,0,0,0,2,2,2,1,2,1,2,0,2,1,2,1,1,0,1,2,1,2,2,0,1,1,1,2,1,0,1,1,1,0,2,0,0,2,1,1,0,1,2,0,2,2,2,0,0,2,2,0,2,1,2,0,2,2,1,2,1,0,0,2,0,0,1,0,1,1,1,1,2,2,0,1,0,0,1,1,1,0,0,2,0,1,2,2,1,2,1,1,0,1,0,],[1,0,2,0,1,1,1,2,2,2,1,2,2,2,1,1,2,1,1,2,1,0,1,1,1,1,2,1,0,2,2,2,2,0,0,1,0,0,0,2,2,2,2,1,0,1,0,2,1,2,2,1,0,0,0,2,0,2,2,0,0,1,1,0,0,0,1,0,2,2,1,2,1,1,0,1,1,2,2,1,1,0,0,1,0,1,0,2,2,1,2,0,2,0,1,0,0,0,1,1,1,2,0,2,0,2,1,1,1,2,1,1,1,1,2,0,2,1,2,1,0,1,0,0,0,0,2,1,0,1,1,1,1,0,2,1,1,0,2,1,1,2,0,1,1,1,2,2,0,2,],[0,0,2,2,2,2,2,0,2,2,1,1,0,1,1,2,2,2,0,2,0,2,1,1,0,2,2,1,0,2,2,0,2,2,2,1,1,2,1,0,0,2,0,1,1,0,1,2,1,1,1,2,0,0,1,2,2,0,1,0,1,0,2,2,2,1,0,2,2,1,1,2,0,2,0,2,1,0,2,2,2,1,1,0,0,1,0,1,0,0,0,0,2,0,1,0,1,0,1,0,2,0,0,0,0,0,2,1,0,2,2,1,1,0,0,0,0,0,2,0,2,2,1,0,2,2,1,1,0,1,0,2,1,0,1,1,2,0,0,2,2,1,0,1,0,0,0,0,2,1,],[2,2,2,1,1,2,2,0,0,1,2,1,2,0,1,2,1,0,1,1,0,2,1,0,0,1,1,1,1,1,2,1,2,0,2,1,0,2,1,1,0,1,1,0,0,1,1,1,0,1,1,2,0,0,2,0,1,1,1,1,0,1,1,1,1,0,0,2,0,0,1,2,2,0,1,1,1,2,0,0,1,2,0,0,1,1,0,0,0,2,2,2,0,0,2,2,0,2,0,2,0,1,0,2,2,0,2,2,1,2,1,1,0,1,0,0,1,2,2,0,0,0,2,0,2,2,2,0,0,1,2,2,2,1,1,1,2,0,1,1,1,2,2,1,1,2,0,0,0,1,],[0,0,2,2,1,2,0,0,0,1,2,0,1,1,1,1,1,0,0,2,0,1,0,0,0,1,0,1,0,2,1,0,2,1,1,1,0,1,2,0,2,0,1,1,1,0,0,1,2,0,0,1,1,2,0,2,2,1,2,2,2,2,0,1,2,2,2,0,1,0,1,1,1,2,1,1,2,0,1,2,2,0,0,0,0,2,0,0,2,2,2,0,2,0,2,2,0,0,0,0,0,2,1,1,1,1,2,1,1,0,1,2,0,2,0,2,2,0,2,1,0,1,1,2,0,1,0,0,2,2,1,1,2,0,0,1,0,1,1,2,0,2,2,2,2,2,0,2,1,2,],[1,1,2,2,2,0,1,1,2,2,0,1,2,2,1,1,1,1,1,1,1,2,2,1,0,0,2,0,2,0,0,2,2,0,0,0,2,1,0,1,0,2,1,0,0,0,1,1,1,0,2,2,0,0,1,1,0,1,0,2,2,0,2,2,0,2,2,0,1,0,1,0,2,2,2,2,0,2,0,2,1,0,0,1,0,0,2,0,0,1,2,0,0,2,2,1,1,2,1,0,1,0,0,0,1,2,1,2,0,2,2,2,1,0,2,0,0,1,0,2,0,1,0,0,2,1,0,0,2,2,2,2,2,2,1,0,2,2,2,0,1,0,2,2,2,1,0,1,1,2,],[2,1,0,0,1,2,0,0,0,1,1,1,1,1,1,1,2,0,0,1,0,2,0,2,1,1,1,2,2,0,1,2,2,2,1,2,1,0,2,2,2,0,2,0,2,1,0,2,0,1,1,2,2,0,1,1,0,2,2,1,1,0,2,1,2,0,0,2,1,0,0,2,1,0,1,2,0,1,1,1,0,1,2,2,1,2,2,2,2,1,1,2,0,0,2,0,0,1,2,1,1,1,2,0,1,0,1,2,1,0,1,1,2,2,2,2,1,1,2,0,1,2,2,1,1,0,0,2,0,0,2,1,0,0,0,2,2,2,1,1,2,0,0,0,2,1,0,2,2,0,],[1,2,2,1,0,1,0,1,0,2,0,2,1,1,2,2,2,2,1,0,1,0,0,2,0,0,2,0,2,2,1,1,2,1,0,1,2,0,0,1,0,1,0,1,0,0,2,0,1,1,1,2,2,0,2,2,0,0,1,0,2,2,1,1,1,2,0,0,2,1,2,1,0,1,2,0,1,2,2,1,0,2,0,1,2,1,1,2,2,1,1,1,2,0,0,1,2,0,1,2,2,1,1,0,1,2,1,1,1,0,0,2,1,2,2,1,1,1,1,0,2,0,1,1,1,0,1,2,2,0,1,0,2,1,0,2,0,2,0,1,2,0,2,2,0,2,0,0,0,1,],[1,0,1,2,2,1,0,0,1,0,2,1,1,2,0,0,0,2,2,2,2,0,2,1,0,1,1,0,0,1,0,0,0,1,2,0,0,2,0,1,0,2,1,1,1,2,1,1,0,0,2,0,0,2,2,0,0,0,1,1,0,1,0,0,1,0,1,1,2,1,1,0,1,2,2,2,1,1,1,0,0,2,2,0,1,2,1,0,0,2,2,1,1,0,1,2,1,2,0,2,1,1,0,0,2,1,1,2,1,2,0,0,0,1,0,2,2,1,1,2,0,1,2,1,1,1,0,0,2,2,2,0,1,0,0,1,2,2,2,1,1,0,2,0,2,2,1,0,1,0,],[0,2,1,1,1,1,1,1,0,0,2,1,1,1,1,0,2,1,1,2,0,0,0,2,2,2,2,0,1,1,0,0,2,2,1,2,2,1,0,0,0,2,0,2,2,1,0,1,2,0,1,2,0,1,2,0,0,2,0,0,2,1,2,2,2,1,1,1,1,0,0,2,0,0,0,2,0,2,0,2,0,1,1,0,0,1,1,1,2,0,2,0,2,0,2,1,0,2,2,0,0,0,1,2,0,1,0,1,2,0,1,0,1,1,2,1,2,2,2,0,1,1,0,1,0,0,1,0,1,1,0,0,2,0,0,1,2,0,1,0,2,2,1,1,1,2,2,1,2,0,],[2,1,1,2,2,2,1,1,1,0,0,0,0,0,0,2,0,2,2,1,1,1,2,2,1,0,1,1,0,2,1,1,1,2,0,0,2,2,2,0,2,0,2,1,0,2,2,1,0,1,2,0,0,2,1,2,1,0,1,2,0,1,2,2,1,0,2,0,0,0,2,2,2,1,2,2,2,0,1,1,0,2,1,0,2,0,0,1,1,2,0,2,1,1,2,1,1,0,1,2,2,0,0,0,1,2,0,1,1,1,1,2,1,0,2,2,2,1,1,2,2,2,0,0,1,1,0,2,0,1,1,0,0,1,1,0,2,0,1,2,0,0,1,0,0,0,1,2,1,2,],[1,2,2,0,2,1,2,2,1,2,1,0,1,0,2,2,2,1,2,2,1,1,2,1,1,0,0,0,0,0,2,2,0,1,0,0,0,1,2,2,0,1,0,0,0,0,2,2,1,1,2,0,0,2,2,0,1,0,2,1,0,0,2,2,2,0,0,0,1,0,1,1,2,1,1,0,1,0,2,2,2,1,0,0,1,0,1,2,2,1,1,0,0,1,1,1,1,2,2,2,0,1,2,2,0,1,0,1,0,2,1,1,2,2,2,1,0,2,1,1,0,2,2,2,0,1,1,1,1,1,1,1,2,2,2,2,1,0,0,1,2,0,1,2,2,1,2,2,1,2,],[2,1,1,2,1,0,0,1,2,2,2,2,1,2,2,1,0,2,2,2,1,0,1,1,1,0,1,1,0,2,0,2,2,2,2,1,0,1,2,0,1,2,2,1,0,1,0,0,2,2,1,1,0,1,2,1,1,1,0,1,2,2,1,2,2,0,0,0,1,0,1,0,1,1,2,2,0,1,1,1,1,1,0,2,1,1,0,2,1,1,0,0,1,1,2,2,0,1,1,0,2,2,0,0,0,0,0,2,1,2,1,1,1,0,0,1,2,1,0,1,2,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,2,2,1,2,2,2,2,0,2,],[1,0,1,0,2,0,1,1,0,2,1,1,2,1,1,0,1,0,0,1,1,1,1,0,2,1,2,1,0,0,2,2,1,2,1,0,0,0,2,1,2,2,0,0,0,2,2,0,1,0,0,0,1,2,2,0,0,0,1,1,2,2,2,0,0,1,2,1,1,0,0,1,0,2,1,0,1,2,1,1,0,2,2,1,2,2,1,1,2,1,2,2,0,1,2,2,1,0,1,0,2,1,1,2,2,2,0,1,1,2,2,0,2,1,0,1,2,1,1,0,1,2,2,2,0,2,2,0,2,1,2,2,2,0,1,0,1,0,2,0,2,0,1,1,1,1,1,1,2,1,],[2,1,0,2,2,0,0,2,1,2,0,1,1,1,0,1,1,0,0,1,2,0,1,0,1,0,0,0,1,1,1,1,2,1,1,1,1,1,0,1,0,0,0,0,2,1,0,0,1,2,0,2,1,2,0,1,1,1,0,1,1,0,1,2,0,0,0,0,2,1,1,0,0,1,0,1,1,1,0,0,1,0,2,0,0,1,2,1,2,0,1,1,2,0,1,1,0,1,1,0,2,2,2,2,2,2,2,1,0,1,0,2,2,0,1,2,1,2,1,2,0,1,2,0,0,1,0,1,0,1,2,0,0,2,1,2,1,2,2,1,1,1,1,2,1,1,0,0,1,0,],[2,0,0,1,1,0,2,0,2,0,1,0,1,0,2,0,1,0,0,1,0,2,1,2,0,2,0,1,1,2,2,2,1,0,2,0,1,0,1,0,0,2,2,1,0,0,0,2,1,0,1,0,2,1,1,0,1,2,0,1,0,0,0,1,0,2,2,1,2,1,1,2,2,1,0,1,0,2,2,2,2,1,0,1,0,0,0,0,1,2,0,1,1,1,0,0,2,0,1,0,0,0,0,2,2,0,2,2,1,1,0,1,2,2,0,1,0,2,0,2,0,0,2,0,1,2,2,0,2,1,1,1,2,1,0,1,2,1,0,1,1,1,1,0,2,2,0,0,1,1,],[0,1,2,2,2,0,2,1,2,0,0,1,1,2,1,2,2,1,2,0,1,2,0,0,1,1,2,1,1,1,1,1,0,2,1,0,1,0,2,2,1,2,2,2,1,0,1,1,2,0,2,0,2,1,0,0,1,1,2,1,0,2,2,2,1,2,2,2,0,0,1,0,0,1,2,1,1,2,0,1,1,0,0,1,2,0,1,1,1,2,2,2,0,2,1,2,2,1,0,0,0,2,1,1,0,0,0,2,0,0,0,0,1,0,1,2,2,1,0,0,0,0,1,1,0,0,2,0,2,1,0,0,1,0,0,0,1,2,2,2,1,1,0,1,2,2,0,2,1,0,],[2,2,2,0,0,2,2,1,2,1,2,0,2,2,1,1,1,2,2,1,1,0,2,2,1,0,2,0,1,1,1,2,0,0,1,1,2,1,0,0,0,0,0,0,2,1,0,0,0,2,2,2,0,0,1,2,2,0,2,1,0,1,1,0,0,2,2,2,0,2,0,2,0,1,1,2,2,1,1,0,2,0,1,2,2,1,0,1,0,1,0,0,2,0,0,1,0,2,2,2,0,0,2,0,0,1,1,0,2,0,0,2,1,0,0,0,0,0,1,2,1,2,2,2,1,0,2,2,1,0,0,1,2,1,0,1,0,2,2,0,0,2,2,1,2,0,1,2,0,2,],[2,2,1,1,2,2,0,2,1,1,0,0,0,0,2,2,1,2,1,1,2,1,1,1,2,0,2,1,0,0,2,0,1,0,1,2,1,2,0,0,1,2,0,2,1,0,2,0,0,1,2,2,2,1,2,2,1,0,0,1,1,1,1,2,1,1,1,2,1,2,1,1,0,1,1,0,1,0,0,2,2,0,2,1,1,0,1,2,1,0,1,2,2,1,2,2,0,0,0,1,1,1,1,2,1,2,0,2,1,1,1,0,1,0,1,2,2,1,2,0,0,2,1,2,2,1,1,1,2,0,0,1,1,0,1,0,0,2,1,2,1,2,2,0,1,0,0,1,1,1,],[0,0,2,1,1,0,1,0,0,2,2,0,0,0,0,2,2,0,2,1,2,0,2,1,2,1,1,2,1,0,2,0,1,2,2,1,0,0,1,1,0,2,0,2,1,2,2,2,1,1,0,1,1,1,1,2,0,0,1,2,0,1,0,1,0,2,1,1,2,0,1,1,1,2,0,2,1,1,2,1,1,0,1,0,1,1,2,2,1,1,2,1,1,1,1,1,1,2,1,1,0,0,2,0,1,1,2,1,1,0,0,1,2,2,2,1,0,1,2,2,1,0,2,2,2,0,0,2,1,1,2,2,2,2,1,2,0,0,2,0,0,1,1,0,2,2,0,0,0,2,],[1,1,0,1,0,0,0,1,1,1,2,2,1,1,2,0,2,1,2,0,1,1,2,1,2,0,2,1,0,1,0,0,1,1,0,2,1,0,2,0,1,1,0,0,0,2,1,0,1,2,0,0,1,2,0,1,0,0,0,2,1,2,1,0,1,2,1,1,0,1,2,2,1,0,0,2,1,0,2,1,2,2,2,1,2,1,1,1,0,2,1,1,1,1,1,2,1,0,2,2,1,2,0,1,0,1,0,1,0,2,0,2,1,1,1,2,2,2,1,1,0,1,0,0,1,2,0,1,2,1,1,2,2,1,1,1,2,0,2,1,0,2,1,1,0,1,2,2,1,0,],[1,0,1,0,1,0,0,2,0,0,1,1,1,0,1,1,1,2,1,2,0,1,2,0,2,0,1,2,0,1,2,1,0,2,0,1,0,0,1,1,1,0,0,2,2,2,1,0,0,0,2,2,1,0,2,0,2,1,2,2,2,1,0,2,2,1,2,1,1,1,1,1,1,0,1,1,2,1,2,2,1,1,2,2,0,0,2,1,0,2,1,0,1,0,0,1,1,2,2,0,2,0,2,2,0,0,2,2,0,0,1,1,2,0,0,2,0,0,0,1,0,0,0,1,1,1,1,1,1,2,0,2,1,1,0,0,0,1,1,2,2,0,0,0,2,0,1,0,2,2,],[0,0,1,1,1,2,1,2,0,2,1,0,0,2,1,2,2,0,2,2,2,1,2,1,0,2,1,0,0,1,2,0,0,0,1,0,2,0,2,1,0,2,2,1,0,1,2,1,2,2,1,2,0,1,0,2,2,1,1,1,1,0,2,1,1,1,2,2,1,2,1,0,2,1,0,2,1,2,1,0,2,0,2,1,1,1,1,2,1,2,1,2,0,1,2,1,2,2,1,0,0,2,1,2,1,2,1,1,0,2,0,0,2,2,1,1,2,1,1,0,0,0,2,1,2,2,1,0,0,2,1,1,1,1,1,0,2,2,0,1,2,1,2,2,1,2,0,1,0,1,],[2,1,2,2,2,2,0,1,0,2,1,1,1,0,1,1,1,0,0,1,0,1,1,1,2,0,0,0,0,2,1,2,1,2,0,0,2,0,1,1,1,2,1,2,1,0,0,0,1,1,1,2,1,1,2,0,1,1,2,0,2,2,2,0,2,2,1,0,1,2,2,1,1,2,0,2,2,2,1,0,2,0,1,0,0,0,2,2,2,1,1,2,1,2,2,1,0,2,1,1,2,0,2,2,2,2,2,0,1,2,0,0,1,2,1,2,0,0,1,1,1,1,2,1,2,0,2,0,0,1,1,2,0,1,2,0,0,2,1,0,2,1,2,2,1,1,1,2,1,1,],[1,0,2,0,0,2,2,2,2,0,0,0,1,1,1,0,0,1,1,0,2,0,1,1,2,1,1,1,2,1,1,2,1,1,0,2,2,0,2,0,0,0,0,1,2,1,2,0,1,0,0,1,2,2,0,0,1,1,0,0,1,0,2,0,0,2,0,2,0,1,0,2,1,0,1,1,2,2,2,1,2,0,2,1,1,1,1,1,0,2,0,1,1,0,0,0,2,0,2,2,0,1,2,2,1,2,0,2,1,0,0,1,1,1,2,0,1,2,0,1,2,2,1,0,0,1,0,1,1,2,0,2,0,1,0,2,2,2,1,0,1,2,0,1,0,0,2,0,0,0,],[0,0,0,0,2,1,0,2,0,2,2,2,0,2,1,1,2,2,1,0,0,0,2,2,2,0,2,2,2,1,0,0,1,1,0,0,2,2,1,2,2,1,2,2,0,1,0,2,1,1,2,1,2,2,0,2,1,2,1,1,2,1,1,2,1,2,2,1,2,0,1,0,1,0,2,1,0,1,1,1,1,1,0,2,2,2,1,0,2,2,0,2,1,2,1,2,2,0,0,1,1,0,1,0,1,2,1,2,2,1,0,2,2,2,1,2,1,2,1,0,1,1,2,2,0,0,1,0,1,1,2,0,2,0,2,1,0,1,1,0,2,0,2,1,1,1,0,1,0,0,],[0,0,1,0,1,2,2,0,0,0,0,1,1,1,0,1,1,2,2,1,0,0,2,2,2,2,1,0,2,2,0,1,2,0,2,1,2,1,2,1,2,2,0,1,0,1,1,2,0,0,0,2,0,1,2,2,0,1,0,0,1,0,0,1,1,2,0,2,0,0,1,0,0,2,2,2,1,0,0,1,2,0,1,2,0,0,1,1,2,0,2,2,2,0,2,2,2,2,2,1,2,1,2,2,0,2,1,2,1,0,0,2,0,0,2,2,0,1,1,2,2,2,1,2,0,1,0,0,0,1,0,1,2,0,1,0,2,1,2,2,1,2,1,2,1,1,2,0,2,2,],[1,2,1,2,1,0,1,2,1,2,1,1,2,1,2,0,0,0,2,1,2,2,2,0,2,1,0,1,0,0,2,1,0,2,2,2,1,2,0,0,2,0,2,0,0,1,1,0,2,2,1,1,2,1,2,1,1,2,2,0,1,0,0,2,0,1,1,2,1,2,2,2,0,0,2,2,2,0,0,0,1,2,1,0,0,1,0,0,2,1,2,0,1,0,1,2,1,2,2,1,0,2,2,2,2,2,1,1,1,0,1,1,1,2,2,0,0,1,0,2,1,0,1,0,2,2,0,1,2,2,0,2,2,0,0,0,0,2,2,1,2,0,1,2,1,1,1,2,1,1,],[2,2,1,2,1,2,2,2,0,2,1,0,0,1,1,0,1,2,1,0,0,2,2,2,1,1,1,0,2,1,0,1,0,0,0,1,1,1,0,2,1,0,1,1,0,1,0,1,0,2,1,2,0,0,2,0,1,2,1,2,2,2,2,2,1,1,2,1,0,0,1,1,2,2,0,0,1,0,1,0,0,0,1,2,0,2,1,1,2,0,1,2,2,2,0,1,2,1,0,2,0,0,0,0,0,1,0,0,1,1,2,1,0,0,2,0,1,0,2,1,1,2,0,1,2,1,2,2,1,2,1,1,1,0,1,2,2,2,0,2,1,2,2,2,0,2,0,1,1,2,],[2,2,1,1,1,1,1,0,1,1,1,1,0,1,2,1,0,2,0,1,1,0,0,1,1,0,1,0,0,2,2,2,2,1,1,1,0,0,2,0,1,1,2,0,0,1,2,1,0,1,0,0,2,1,2,2,0,2,1,0,0,0,2,2,2,2,2,0,1,1,1,0,0,2,1,1,2,1,2,2,0,2,2,1,1,0,0,1,0,0,2,0,0,1,0,0,0,0,0,0,2,1,1,2,2,0,1,1,2,0,0,1,2,0,2,2,1,2,2,1,0,2,2,1,0,0,1,0,0,0,2,0,1,0,2,2,0,2,0,1,1,1,2,0,0,2,1,1,0,2,],[2,0,2,0,1,2,0,1,2,2,1,0,2,2,2,0,0,0,2,1,1,2,1,1,0,0,0,2,1,1,2,2,2,1,1,0,2,0,2,2,2,0,0,1,2,0,1,0,2,0,1,0,2,0,2,0,1,0,0,0,2,0,1,1,1,2,0,0,0,2,0,1,0,1,2,0,0,0,1,2,1,2,1,0,1,1,1,1,0,0,2,0,1,1,1,2,2,1,0,1,0,2,2,2,2,2,1,1,0,0,1,0,2,0,1,0,1,1,2,1,1,1,1,1,2,1,2,2,0,1,0,1,1,1,1,0,0,0,0,1,2,1,0,2,2,2,0,0,0,2,],[1,0,1,0,0,2,0,1,2,0,1,2,2,2,0,1,2,0,2,2,1,0,0,0,2,2,0,2,0,0,2,2,2,0,2,0,1,2,1,2,2,2,2,1,1,1,2,2,2,2,0,1,1,2,0,0,2,2,0,1,2,2,0,2,1,0,0,0,2,0,1,1,1,1,1,2,1,0,1,1,1,2,1,2,2,2,1,0,2,2,1,2,2,1,0,0,0,0,0,1,0,2,1,1,0,0,1,2,1,2,2,1,2,0,1,2,1,1,0,0,2,2,1,2,0,0,2,2,1,1,0,1,2,1,2,0,2,2,0,0,2,0,1,1,0,2,2,2,1,2,],[0,1,2,2,1,2,1,2,1,0,0,0,1,0,2,1,1,1,1,0,0,1,2,1,1,0,0,0,1,0,2,1,2,0,2,0,1,1,1,2,2,2,1,2,2,0,1,1,1,0,2,2,2,0,0,1,1,2,0,1,1,2,0,2,2,1,0,1,2,2,0,1,0,2,2,2,1,0,1,1,0,0,1,2,2,1,2,1,0,0,0,0,2,2,2,1,1,2,0,1,2,1,2,2,1,2,1,0,0,2,2,1,1,1,1,0,0,2,2,2,0,1,1,1,0,0,0,1,1,1,2,2,2,1,0,0,1,1,1,1,0,2,0,1,1,1,2,1,2,2,],[1,2,2,1,2,1,1,0,2,2,0,1,1,2,1,2,1,0,1,1,0,2,2,0,2,0,2,0,0,1,2,0,2,1,0,2,2,0,2,1,0,0,0,0,1,2,2,2,0,1,2,1,1,2,1,0,1,2,2,1,2,2,0,1,0,0,2,0,2,2,0,0,1,2,2,2,1,0,0,2,0,2,2,0,1,1,0,0,0,0,1,0,2,1,2,0,1,1,1,1,2,2,1,2,0,1,0,1,0,0,2,2,1,2,1,0,1,1,2,2,1,1,0,0,0,1,0,2,0,1,0,0,1,0,0,1,0,1,0,2,0,1,2,1,1,0,2,2,0,2,],[1,0,1,2,1,1,2,2,1,2,0,2,2,1,1,2,2,1,0,2,1,0,2,2,2,2,2,2,2,2,2,2,2,1,0,0,2,0,1,1,0,2,1,2,0,0,2,0,0,0,1,0,1,0,1,1,0,2,2,1,1,0,1,1,2,0,0,0,0,0,2,2,0,2,0,1,2,1,0,2,0,0,1,1,2,2,1,0,1,2,1,2,1,2,0,0,0,1,2,2,1,1,2,1,1,1,2,1,2,0,1,1,1,2,0,2,1,2,1,0,0,1,2,2,1,2,1,1,2,0,2,0,1,2,1,0,2,2,0,1,0,2,1,2,0,2,0,2,0,0,],[0,0,2,1,1,2,1,2,1,2,0,2,0,0,0,2,0,1,1,0,1,2,1,2,0,2,1,1,2,1,0,1,0,1,2,0,0,2,0,2,2,2,1,2,0,2,0,0,0,0,0,1,1,2,2,1,1,2,0,2,1,0,0,2,1,1,2,2,2,0,2,1,2,1,1,1,0,1,2,0,2,0,2,2,0,1,0,1,1,2,1,1,2,0,1,1,0,0,0,0,2,1,0,2,2,0,2,0,1,0,2,0,1,0,0,1,0,1,2,2,2,0,2,0,0,1,2,0,1,2,1,1,2,1,0,0,0,2,0,0,1,2,1,1,0,2,0,0,1,0,],[0,0,1,2,1,2,2,2,1,2,1,2,2,1,0,0,1,2,2,1,0,0,2,0,0,2,0,2,1,0,0,0,0,1,0,0,1,0,0,2,1,2,0,0,0,0,2,1,1,0,1,0,1,2,1,0,0,1,1,1,2,2,2,0,2,2,0,2,2,0,0,2,2,1,1,0,0,2,0,2,0,0,0,0,2,2,0,0,0,0,2,2,1,2,1,2,1,1,1,1,2,0,0,1,1,1,1,0,2,2,1,0,1,0,1,0,2,0,2,1,0,1,2,1,1,2,2,0,0,0,0,2,1,0,0,2,2,2,0,0,2,0,1,2,1,1,2,2,2,2,],[1,2,0,2,0,0,2,0,2,1,2,1,2,2,1,1,1,0,2,1,2,2,2,0,1,2,0,1,1,2,1,2,0,1,0,2,0,0,1,0,1,1,1,2,0,2,1,2,2,2,2,2,2,1,1,1,1,0,2,0,0,0,2,0,2,2,2,0,2,2,2,1,2,1,2,2,0,2,2,1,2,0,1,0,0,2,2,2,1,2,2,0,1,0,2,0,0,0,1,0,2,1,0,2,2,0,2,1,1,0,2,1,1,0,1,1,1,2,1,2,1,2,2,2,1,2,2,2,2,1,2,0,1,0,2,2,1,2,2,1,2,2,1,1,0,0,0,2,0,2,],[0,0,1,2,2,0,1,1,0,1,0,0,0,2,1,0,0,2,2,1,2,0,0,2,0,1,0,2,2,1,1,1,1,2,2,2,0,0,0,0,0,1,1,2,0,2,0,1,1,1,1,2,2,1,2,1,1,0,0,2,2,0,2,0,2,0,1,0,1,0,1,1,0,0,0,1,2,2,0,2,1,0,0,0,2,2,0,2,0,2,1,1,0,0,0,0,2,2,0,0,2,2,1,2,0,2,1,2,0,0,1,0,2,2,2,2,2,0,0,0,2,1,0,1,2,2,2,0,1,1,1,0,0,2,2,2,1,0,0,2,2,0,0,1,2,0,1,1,2,2,],[0,2,2,0,0,1,1,1,1,0,0,0,1,1,2,2,1,0,2,2,0,0,0,2,1,2,0,2,0,0,1,0,1,1,1,1,1,0,2,1,1,0,2,1,2,1,0,2,0,2,1,0,1,1,2,0,1,2,0,1,2,1,2,0,2,2,2,2,2,2,1,2,2,2,0,1,0,1,1,0,2,1,0,2,1,1,2,0,2,0,2,2,0,2,2,0,0,0,2,2,2,1,1,2,1,2,0,2,0,1,2,1,2,2,1,0,1,2,1,0,0,2,0,1,2,1,1,2,1,2,2,2,2,1,0,1,0,1,1,2,2,1,0,2,0,0,1,2,2,0,],[1,2,0,2,0,0,2,0,2,2,0,1,2,1,2,1,0,0,1,2,2,2,0,2,1,1,2,1,0,1,0,0,2,1,2,2,1,2,1,2,1,2,1,1,0,1,1,2,0,2,1,1,1,2,2,1,2,0,1,1,2,0,0,1,1,1,0,2,0,1,1,0,2,0,1,2,1,0,1,2,0,0,0,2,0,0,2,1,1,2,0,2,2,1,2,1,0,1,2,1,2,1,1,2,2,0,1,2,2,0,1,1,1,2,2,1,2,1,1,1,2,1,2,1,0,0,1,0,1,0,2,1,0,1,0,1,0,1,2,2,0,0,0,1,1,0,1,1,0,1,],[0,0,2,1,2,1,2,1,1,2,1,0,1,1,2,2,1,2,1,1,0,2,2,2,2,0,1,1,1,2,2,0,2,1,1,2,0,0,0,2,1,2,0,0,0,2,0,2,2,1,0,2,2,2,0,0,2,2,2,1,1,2,2,0,2,1,1,1,2,1,2,2,0,1,2,2,1,0,0,0,0,2,2,0,0,2,0,1,0,0,2,0,2,0,0,0,1,2,0,2,0,1,2,2,2,0,0,0,2,1,1,1,2,1,1,0,2,0,2,0,2,0,2,2,0,0,1,0,1,1,1,1,1,1,2,0,0,1,2,1,1,2,2,0,0,0,0,1,1,2,],[2,1,2,0,1,0,1,2,0,0,1,1,0,0,0,1,2,1,2,0,1,1,1,2,0,0,0,2,2,0,2,1,1,1,2,0,1,2,1,0,2,1,0,0,1,1,2,2,2,1,0,2,1,2,2,0,0,2,1,1,1,0,1,1,1,1,1,2,2,2,1,2,0,1,0,2,0,1,0,2,1,1,2,0,1,1,2,1,1,1,2,0,0,0,0,1,0,2,2,2,2,2,1,0,2,2,2,0,1,1,2,1,1,1,0,1,2,0,1,0,2,0,0,2,2,0,2,0,1,0,0,2,0,1,0,2,1,1,0,0,2,1,2,1,0,0,0,0,0,0,],[1,1,0,1,2,2,1,0,2,0,2,1,2,1,0,0,1,1,1,1,0,0,1,1,1,1,1,2,1,0,1,1,2,1,0,1,2,1,0,1,2,1,0,1,1,1,0,2,0,0,0,0,2,2,0,2,2,0,2,2,2,1,1,0,1,2,2,2,1,1,0,1,1,1,0,0,0,1,0,2,0,0,0,1,0,2,0,1,1,0,2,1,0,0,2,2,2,0,0,0,0,0,0,1,2,0,0,2,1,0,1,1,2,1,1,0,2,0,1,2,1,1,0,1,0,1,1,1,2,1,0,2,2,0,1,0,0,1,0,0,0,1,1,1,2,0,0,1,1,2,],[0,2,0,2,0,0,1,1,2,1,0,2,2,0,1,1,1,1,0,1,2,2,0,0,1,0,1,2,2,0,0,2,0,1,2,0,0,0,0,1,2,2,2,1,1,2,0,2,0,2,1,2,1,2,2,0,0,1,2,1,1,2,0,0,0,1,0,0,0,0,0,0,2,2,0,1,1,2,1,0,0,2,0,2,1,2,2,2,2,1,2,0,1,0,2,1,0,0,0,0,0,1,1,2,1,1,0,1,1,0,0,2,2,0,0,0,2,1,1,1,2,0,2,2,2,2,0,0,0,1,0,0,1,1,0,2,2,0,0,0,2,0,2,2,1,0,0,1,0,2,],[2,0,0,1,0,1,0,0,2,1,1,2,1,0,1,2,0,0,0,1,2,2,2,2,0,2,2,0,0,0,2,2,0,0,1,0,1,0,2,1,1,1,0,2,2,2,0,0,0,1,1,1,1,2,0,1,2,0,0,1,2,1,1,2,1,0,2,2,2,1,2,0,0,1,2,0,0,0,1,1,1,0,0,1,2,1,1,2,0,2,1,2,0,0,0,1,0,0,2,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,2,2,1,1,1,1,2,0,2,2,0,1,1,2,0,2,0,2,2,0,2,1,0,2,2,2,0,0,2,2,1,1,0,0,1,1,],[1,0,1,0,1,0,0,0,2,0,1,2,1,2,0,0,0,0,1,0,0,2,1,1,0,0,1,0,0,1,0,2,2,0,1,0,2,2,1,1,2,1,0,1,1,2,0,2,0,0,1,0,1,2,0,2,0,1,1,1,0,1,1,1,2,0,2,1,0,0,2,0,0,0,2,2,0,1,1,0,2,2,2,2,2,2,0,0,0,1,1,0,0,0,2,0,2,0,1,1,2,1,2,2,2,0,0,0,2,1,1,1,2,1,1,0,0,2,0,0,0,2,2,1,1,1,1,2,0,2,0,1,0,0,2,1,0,0,0,2,1,2,1,2,2,1,0,2,0,0,],[0,1,0,0,0,2,1,0,0,1,2,0,1,0,0,0,1,0,0,2,2,1,2,1,1,2,0,2,1,1,1,2,0,1,0,1,0,2,0,1,0,2,2,2,1,2,2,2,0,0,0,2,0,1,2,2,0,2,0,0,0,1,2,1,1,2,1,1,1,0,2,1,2,2,2,1,2,2,2,1,0,1,1,1,1,0,1,1,2,2,2,1,0,2,0,0,0,2,2,1,1,0,2,1,2,0,1,2,2,2,2,1,2,2,1,0,2,1,0,2,2,2,1,1,1,1,1,1,2,0,0,0,1,1,1,0,1,2,0,2,2,0,1,2,0,1,0,0,2,2,],[2,2,1,2,2,0,0,2,1,0,1,2,1,1,2,2,2,2,2,1,2,0,0,2,2,2,2,0,2,1,2,0,0,2,1,0,2,1,0,1,2,0,2,1,0,0,0,0,2,0,1,1,1,1,0,0,2,1,2,0,0,0,2,1,0,1,0,0,0,0,2,2,2,0,0,1,0,0,0,1,0,0,2,2,2,0,2,2,0,1,0,0,1,0,0,0,0,0,1,2,1,0,0,2,2,1,1,1,1,0,1,1,2,0,0,0,1,2,2,1,1,2,2,1,1,2,2,0,2,2,1,1,0,2,2,1,2,0,1,1,0,1,0,0,2,1,1,0,1,1,],[0,1,0,1,2,0,2,0,1,0,0,2,0,1,0,2,0,2,0,2,1,1,2,0,1,2,2,1,1,0,2,1,0,2,0,0,1,2,0,0,0,1,0,2,1,0,1,0,2,2,0,2,1,1,0,2,2,0,0,2,0,2,0,1,1,2,1,1,0,1,2,0,1,1,0,1,0,1,2,0,1,0,2,0,0,1,2,1,0,2,1,1,2,2,1,2,2,2,1,1,1,2,2,0,1,0,1,1,1,1,2,1,0,1,1,2,1,1,0,2,0,1,2,1,1,2,0,1,0,2,2,1,1,2,0,0,2,2,1,1,0,0,0,2,0,1,2,2,0,2,],[1,2,1,0,0,0,1,0,0,0,2,2,0,0,2,1,1,0,1,0,2,2,0,1,2,0,2,0,0,2,2,2,1,0,1,0,2,1,0,0,0,2,1,0,1,0,2,0,1,2,0,2,1,0,2,0,0,1,0,0,2,2,2,0,2,0,1,0,0,2,0,0,2,1,2,1,2,0,2,2,0,1,2,0,0,2,0,2,1,1,1,1,2,0,1,1,2,1,1,1,1,2,0,1,1,1,1,2,0,2,2,0,1,0,2,2,1,0,1,2,0,2,0,0,1,1,2,0,1,1,1,0,1,0,0,2,0,0,1,1,1,1,2,2,1,1,0,1,1,1,],[2,0,1,0,0,0,2,2,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,2,2,2,0,2,0,0,1,2,2,0,1,0,2,2,0,0,1,0,0,1,1,0,0,0,0,0,2,0,0,2,2,2,0,1,1,0,0,2,0,1,1,2,2,1,0,0,1,0,2,0,2,1,1,2,0,2,0,1,1,2,2,1,0,1,1,1,2,1,1,0,2,1,0,2,0,2,0,2,2,1,2,0,2,1,0,1,1,1,0,1,1,0,2,0,0,1,0,2,0,1,1,0,2,1,0,0,2,2,1,2,2,1,0,0,0,1,2,2,1,2,0,0,2,],[2,2,2,1,0,1,2,0,2,2,1,2,0,1,2,2,2,2,0,2,1,0,2,0,2,0,2,2,2,1,2,0,2,2,0,1,1,1,0,1,1,2,2,0,1,0,1,2,2,0,0,0,0,1,0,1,1,1,2,2,2,1,0,2,1,2,1,0,2,2,2,0,0,1,0,2,2,1,0,0,0,0,2,2,0,1,1,2,1,2,2,0,0,1,0,0,2,0,0,0,2,0,2,2,1,0,0,0,1,1,2,2,2,2,1,1,0,1,0,0,0,2,2,2,1,1,1,0,2,1,2,1,2,2,2,1,2,0,2,2,1,2,1,0,1,0,1,1,1,1,],[2,2,1,2,0,2,0,0,1,2,0,0,2,1,2,1,1,2,2,1,0,2,1,2,1,0,0,2,0,2,1,2,2,1,0,2,1,0,2,2,2,0,1,0,1,0,2,2,2,2,0,2,2,1,1,0,2,0,2,1,2,1,1,2,0,0,2,2,1,0,2,0,2,2,1,2,0,1,0,2,2,0,2,1,1,2,2,0,0,0,2,0,1,2,2,2,0,1,0,0,2,1,0,2,0,1,2,1,2,2,2,0,0,1,1,0,2,1,0,1,2,1,2,0,2,2,0,1,1,2,1,0,1,0,0,0,0,0,1,1,2,0,1,2,0,2,1,0,0,2,],[2,0,0,1,1,0,1,1,0,1,0,0,1,0,1,2,1,0,2,2,2,2,1,2,0,2,2,2,0,0,1,2,0,2,0,1,1,0,0,1,1,1,1,2,0,1,1,1,0,0,1,2,0,0,0,2,1,0,0,0,1,1,1,0,1,2,2,0,1,2,1,2,2,0,2,2,0,1,2,1,2,2,2,1,1,1,1,2,2,0,0,1,1,1,2,2,0,1,1,2,2,0,0,0,1,1,0,0,1,2,2,0,2,1,2,2,1,0,1,1,1,1,0,2,1,2,0,0,1,2,2,1,0,2,2,2,1,0,0,1,1,1,1,0,0,2,1,2,2,2,],[0,1,1,2,2,2,0,1,2,1,1,1,0,1,2,1,2,1,2,2,0,1,2,0,1,2,0,0,1,0,0,2,2,0,0,0,0,1,1,2,1,2,1,1,0,1,2,1,2,0,2,1,1,2,1,0,0,0,2,2,0,0,2,2,0,2,2,2,2,2,1,1,2,1,2,2,1,2,1,2,2,0,0,0,0,1,0,1,0,1,1,1,1,2,1,2,0,1,2,0,0,2,0,2,2,0,1,2,0,2,2,2,2,0,0,1,0,0,1,0,1,0,2,2,2,1,0,2,2,2,2,0,2,1,0,1,0,0,2,2,1,0,2,2,1,2,1,2,0,0,],[2,2,1,2,2,1,2,0,2,0,0,1,1,1,0,1,1,2,0,2,0,2,0,1,0,1,1,0,0,1,0,0,0,0,0,0,2,0,0,2,0,1,1,1,1,0,0,2,2,0,0,1,0,0,0,2,2,1,2,0,1,0,1,1,0,1,0,0,0,0,1,1,2,2,0,1,0,1,1,2,1,2,1,2,1,1,0,2,1,1,1,2,1,0,2,1,1,0,2,0,1,2,2,0,1,2,1,0,0,2,2,0,1,1,1,1,1,1,2,1,0,0,1,0,1,1,0,2,1,1,2,0,2,2,0,1,0,0,0,2,2,0,2,1,0,1,0,2,1,0,],[0,1,2,0,0,1,0,0,2,1,0,1,0,1,1,1,1,0,1,1,2,2,0,1,2,1,1,0,1,2,2,1,2,0,1,2,2,1,1,1,2,1,2,2,1,0,2,2,2,2,0,2,0,0,1,2,2,2,2,0,1,1,2,1,0,2,2,0,1,1,1,2,2,2,0,0,2,1,1,0,2,0,0,1,0,1,1,1,1,0,2,0,0,0,2,1,0,0,0,2,1,1,1,2,2,1,1,0,2,0,2,0,2,0,0,0,0,0,1,1,0,0,0,2,2,2,2,1,1,1,1,1,0,1,0,0,0,2,1,0,1,0,1,0,2,0,0,1,0,2,],[2,0,1,0,2,1,1,2,2,2,0,1,0,0,0,0,0,1,2,1,2,0,0,2,1,1,1,2,1,1,2,0,0,0,2,1,1,2,1,0,2,1,1,0,1,0,0,0,2,2,2,2,0,2,0,1,1,0,1,1,1,1,1,2,0,2,1,2,2,1,2,1,1,0,2,2,2,1,0,2,0,2,0,2,0,1,1,0,1,0,2,1,2,2,0,2,2,1,2,2,1,0,0,2,1,2,0,0,1,0,0,2,0,0,2,2,2,1,1,0,1,0,2,1,2,2,0,0,1,2,2,0,1,2,0,0,2,2,0,1,2,2,2,0,1,0,1,0,0,1,],[2,2,2,1,2,2,1,0,2,2,0,0,1,1,1,2,1,0,0,0,1,1,2,0,2,0,0,1,1,2,2,2,1,2,2,1,1,1,0,1,2,1,0,2,2,2,1,1,0,1,1,0,0,0,0,2,0,1,1,0,2,0,1,2,1,0,1,0,0,0,2,2,1,0,2,1,2,1,2,2,2,1,0,2,1,1,2,0,1,0,0,2,2,2,2,1,2,0,0,2,0,2,1,1,2,1,0,0,2,0,0,0,1,2,2,2,1,0,0,2,1,2,2,2,0,1,1,1,2,2,2,0,2,0,1,0,2,2,1,2,0,1,1,0,2,1,2,0,1,1,],[1,2,1,1,2,0,1,1,2,0,2,1,0,1,1,2,2,1,2,1,2,0,1,1,1,0,0,2,0,0,1,2,2,2,2,1,0,1,1,0,0,0,0,2,1,1,1,0,2,0,2,1,0,0,2,2,1,1,2,0,2,0,1,0,2,2,1,1,2,0,2,0,2,1,2,0,2,0,2,1,2,0,1,2,2,2,1,2,2,1,2,0,2,1,2,0,2,1,2,2,0,2,1,0,1,2,2,0,1,2,0,1,0,0,1,2,1,1,2,2,2,0,2,1,2,1,2,0,2,2,2,2,0,2,0,2,1,2,2,0,2,0,2,2,1,0,2,2,2,1,],[2,0,1,2,2,1,2,0,1,0,0,1,2,1,1,1,1,1,1,0,1,2,2,2,1,1,0,0,1,2,0,1,0,2,1,0,0,1,2,2,1,1,2,0,0,2,1,1,2,2,1,1,2,2,2,0,1,1,2,2,2,2,2,1,0,1,1,1,2,1,0,2,0,1,1,0,2,1,1,1,0,2,0,0,2,1,1,0,1,2,2,0,0,0,2,0,1,2,2,0,1,1,2,1,2,0,1,2,0,2,2,2,2,1,0,2,1,2,2,1,0,0,0,0,0,0,0,0,1,1,1,0,2,2,2,1,2,0,1,2,0,1,1,0,0,2,2,0,0,2,],[2,0,2,0,2,2,0,1,0,2,0,1,1,2,2,2,0,2,1,1,2,0,2,2,2,0,1,2,1,0,1,0,1,1,1,2,2,2,2,2,2,2,2,2,1,2,0,0,0,2,1,0,0,1,0,2,0,0,1,0,2,0,2,0,0,2,1,0,1,2,1,2,2,0,2,2,1,0,2,2,1,0,2,0,0,0,0,2,2,0,1,0,1,0,2,2,2,0,0,0,1,1,1,0,0,1,1,1,0,1,2,0,2,2,0,2,0,2,2,2,1,2,2,2,1,2,2,0,1,0,2,2,1,1,0,1,0,2,1,1,0,1,0,2,0,0,0,1,1,1,],[1,0,1,1,1,2,0,2,2,2,1,2,1,0,0,2,2,0,1,0,2,2,1,0,1,1,0,2,1,0,2,1,1,0,0,2,2,0,1,0,2,2,2,2,1,1,1,0,1,0,1,1,0,0,0,1,1,2,2,1,0,1,2,2,0,1,0,0,2,1,1,0,1,1,0,2,1,1,0,1,1,2,1,0,1,2,0,1,1,2,0,2,0,1,2,1,0,2,1,0,1,1,1,2,2,0,1,2,0,1,2,1,1,1,1,0,1,0,2,1,0,0,1,2,1,0,2,2,2,1,0,1,0,1,2,2,1,1,2,2,2,1,2,2,0,2,1,2,2,0,],[2,0,1,2,2,1,0,2,2,2,1,1,0,1,0,0,1,1,2,2,0,0,0,1,0,0,1,2,1,1,0,2,2,0,2,2,1,1,2,1,0,2,1,0,2,1,0,0,1,1,2,0,0,0,0,0,1,0,1,1,1,2,2,1,1,2,1,1,0,1,1,2,0,0,0,1,2,2,1,0,2,2,2,0,0,1,0,2,2,2,1,2,2,1,2,2,2,1,2,0,0,1,1,0,1,2,2,0,2,0,2,2,0,1,2,2,2,0,0,1,0,1,1,0,0,1,0,2,0,1,0,1,2,2,2,1,1,0,0,1,0,1,0,1,0,2,2,2,2,2,],[1,1,0,0,1,1,2,2,1,1,2,2,0,0,1,1,2,2,2,0,2,1,0,1,2,2,1,0,0,2,2,2,1,2,2,2,1,1,2,2,2,1,2,2,2,1,0,0,2,1,2,1,0,2,2,0,1,1,1,0,2,1,0,0,0,0,1,2,1,0,1,0,0,1,2,2,1,1,2,2,2,2,1,0,2,1,0,1,2,0,0,0,1,2,1,2,2,2,2,1,0,1,1,1,2,2,2,0,2,0,0,1,2,0,0,0,0,1,0,0,1,0,2,1,2,2,1,0,0,2,0,1,0,2,2,2,2,2,0,2,2,1,0,0,2,0,0,2,1,1,],[0,1,0,2,2,0,1,0,2,0,0,0,1,0,2,0,2,2,0,1,1,0,2,2,0,2,0,0,0,2,1,1,2,2,0,2,1,2,1,0,2,2,2,0,0,0,0,1,1,0,2,0,2,1,2,1,2,1,0,1,0,0,0,0,0,0,1,2,0,2,0,1,1,2,1,0,2,2,2,1,0,1,2,0,2,0,0,2,1,0,2,1,0,0,2,0,1,1,2,2,1,2,0,1,2,0,1,2,0,0,2,0,2,0,0,0,0,2,2,0,0,2,1,1,2,1,2,1,0,0,0,1,1,0,0,1,0,1,0,2,1,1,2,2,0,0,1,1,1,2,],[1,0,2,1,2,2,2,2,0,1,1,0,0,2,0,1,1,0,1,2,2,2,2,1,0,1,2,2,1,0,1,0,1,2,1,1,2,1,1,1,1,1,2,1,0,2,2,2,1,2,1,0,1,0,2,0,2,2,2,0,2,2,1,1,0,0,2,1,1,1,0,2,2,2,2,0,0,1,0,1,0,1,1,2,2,0,1,1,0,0,2,0,2,0,1,1,0,0,0,0,1,0,0,0,2,2,0,0,1,0,2,2,2,1,0,1,2,1,1,1,1,2,0,0,2,2,1,1,2,0,0,1,1,1,2,1,2,2,2,1,2,2,0,1,0,0,1,2,2,0,],[1,0,1,1,2,0,1,0,2,0,2,2,2,2,1,2,0,2,1,1,2,0,1,0,0,2,0,0,2,1,0,1,1,0,0,1,1,0,1,0,2,1,1,0,2,1,0,2,2,0,0,1,1,2,2,1,0,0,0,1,2,2,1,2,2,1,2,2,0,0,0,1,2,1,2,2,2,1,1,2,0,2,0,2,1,2,0,0,0,2,0,0,2,1,1,2,2,2,1,0,0,2,2,2,2,1,1,2,0,1,0,2,2,2,1,1,0,2,1,0,0,1,1,1,2,1,0,1,0,1,1,2,0,0,2,2,2,0,1,1,1,0,0,0,2,2,2,0,2,2,],]


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

const snor1Img = new Image();
snor1Img.src = root+"snor-1.png";
const snor2Img = new Image();
snor2Img.src = root+"snor-2.png";
const snor3Img = new Image();
snor3Img.src = root+"snor-3.png";
const snor4Img = new Image();
snor4Img.src = root+"snor-4.png";
const snor5Img = new Image();
snor5Img.src = root+"snor-5.png";
const snor6Img = new Image();
snor6Img.src = root+"snor-6.png";
const snor7Img = new Image();
snor7Img.src = root+"snor-7.png";
const snor8Img = new Image();
snor8Img.src = root+"snor-8.png";
const snor9Img = new Image();
snor9Img.src = root+"snor-9.png";
const snor10Img = new Image();
snor10Img.src = root+"snor-10.png";
const snor11Img = new Image();
snor11Img.src = root+"snor-11.png";
const snor12Img = new Image();
snor12Img.src = root+"snor-12.png";
const snorSpeechImg = new Image();
snorSpeechImg.src = root+"snor-speech.png";

const celery1Img = new Image();
celery1Img.src = root+"celery-1.png";
const celery2Img = new Image();
celery2Img.src = root+"celery-2.png";
const celery3Img = new Image();
celery3Img.src = root+"celery-3.png";
const celery4Img = new Image();
celery4Img.src = root+"celery-4.png";
const celery5Img = new Image();
celery5Img.src = root+"celery-5.png";
const celery6Img = new Image();
celery6Img.src = root+"celery-6.png";
const celery7Img = new Image();
celery7Img.src = root+"celery-7.png";
const celery8Img = new Image();
celery8Img.src = root+"celery-8.png";
const celery9Img = new Image();
celery9Img.src = root+"celery-9.png";
const celery10Img = new Image();
celery10Img.src = root+"celery-10.png";
const celery11Img = new Image();
celery11Img.src = root+"celery-11.png";
const celery12Img = new Image();
celery12Img.src = root+"celery-12.png";
const celerySpeechImg = new Image();
celerySpeechImg.src = root+"celery-speech.png";

const cPERSON_INFO = {"Swan":[[swan1Img,swan2Img,swan3Img,swan4Img,swan5Img,swan6Img,swan7Img,swan8Img,swan9Img,swan10Img,],1,swanSpeechImg,[['Why am I sweeping?', "Everything seems nicer when it's clean"], ['*Swish swish*', 'Hmm... needs more cleaning'], ["I don't like getting lost...", "It's scary..."], ['Being clean and organized calms me.', 'I know where everything is!', "And I'm less stressed, too!"], ['What am I?', "Don't you know?", "I'm a cat.", 'Not like Kotu at the shop, though'], ['My favorite drink?', 'I think just water.', 'Sometimes things taste different than I expect...', 'But water is always the same'], ['My favorite creature?', 'Hmm...', 'The tomato bunny, probably', "They're very shiny and smooth"], ['I like being near water', "Sometimes there's no ocean or lake...", "That's okay too"]],],"Gardora":[[gardora1Img,gardora2Img,gardora3Img,gardora4Img,gardora5Img,gardora6Img,gardora7Img,gardora8Img,],1,gardoraSpeechImg,[['♩♫♩'], ['I heard plants like music', "I can't play any instruments...", 'So I hum to them instead'], ['Plants are very cute!'], ['This plant is named Beepo', 'I love them♡'], ['I have a room full of plants!', "It's a little unorganized..."], ['My favorite drink?', 'Tea!', 'There are so many different flavors!'], ['My favorite creature?', 'Any plant creature!', 'Hmm... if I really had to choose...', 'Maybe the flower bunny!', "They're so cute!"], ['My dream location?', 'Anywhere green!', 'Trees are a bonus!']],],"Snor":[[snor1Img,snor2Img,snor3Img,snor4Img,snor5Img,snor6Img,snor7Img,snor8Img,snor9Img,snor10Img,snor11Img,snor12Img,],2,snorSpeechImg,[['I love snuggling up in my blanket...'], ['♡'], ['I love being warm and cozy'], ['My friend gave me this blanket.', 'I also have a collection of other blankets too!'], ['You know, snow may be cold...', 'But it gives the perfect excuse to be cozy and have warm food!'], ['My favorite drink?', 'Hot Chocolate!', 'And while snow is falling… *sigh*', "That's the best"], ['My favorite creature?', 'I would probably say the Snow Bird...', 'They are very pretty!'], ['I want to live in a place with snow!', 'Somewhere cold, where I can curl up and be cozy in a blanket…']],],"Celery":[[celery1Img,celery2Img,celery3Img,celery4Img,celery5Img,celery6Img,celery7Img,celery8Img,celery9Img,celery10Img,celery11Img,celery12Img,],1,celerySpeechImg,[["I'm preparing for a run!"], ['*phew*', 'Got to stay fit!'], ['Running is nice, but I always need at long nap afterwards'], ["It's best to run on a clear and sunny day!"], ['Make sure you stay hydrated and stretch or move around!'], ['My favorite drink?', 'Energy drinks are the best!', 'Otherwise, coffee is a good way to wake up in the morning', 'However, I like the colors of energy drinks better!'], ['My favorite creature?', 'Maybe the Plant Swan!', "They seem so relaxed, but at the same time, they're always moving!"], ['My ideal home location...', 'Somewhere with nice, sunny, and clear weather!', 'Of course, it has to have a good place to run around or take a walk, too.']],],}


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

const SkeletalFlower1Img = new Image();
SkeletalFlower1Img.src = root+"skeletal-flower-1.png";
const SkeletalFlower2Img = new Image();
SkeletalFlower2Img.src = root+"skeletal-flower-2.png";
const SkeletalFlower3Img = new Image();
SkeletalFlower3Img.src = root+"skeletal-flower-3.png";
const SkeletalFlower4Img = new Image();
SkeletalFlower4Img.src = root+"skeletal-flower-4.png";
const SkeletalFlower5Img = new Image();
SkeletalFlower5Img.src = root+"skeletal-flower-5.png";
const SkeletalFlower6Img = new Image();
SkeletalFlower6Img.src = root+"skeletal-flower-6.png";
const SkeletalFlower7Img = new Image();
SkeletalFlower7Img.src = root+"skeletal-flower-7.png";
const SkeletalFlower8Img = new Image();
SkeletalFlower8Img.src = root+"skeletal-flower-8.png";
const SkeletalFlower9Img = new Image();
SkeletalFlower9Img.src = root+"skeletal-flower-9.png";
const SkeletalFlower10Img = new Image();
SkeletalFlower10Img.src = root+"skeletal-flower-10.png";
const SkeletalFlower11Img = new Image();
SkeletalFlower11Img.src = root+"skeletal-flower-11.png";
const SkeletalFlower12Img = new Image();
SkeletalFlower12Img.src = root+"skeletal-flower-12.png";

const LandShark1Img = new Image();
LandShark1Img.src = root+"land-shark-1.png";
const LandShark2Img = new Image();
LandShark2Img.src = root+"land-shark-2.png";

const SnowCat1Img = new Image();
SnowCat1Img.src = root+"snow-cat-1.png";
const SnowCat2Img = new Image();
SnowCat2Img.src = root+"snow-cat-2.png";
const SnowCat3Img = new Image();
SnowCat3Img.src = root+"snow-cat-3.png";
const SnowCat4Img = new Image();
SnowCat4Img.src = root+"snow-cat-4.png";
const SnowCat5Img = new Image();
SnowCat5Img.src = root+"snow-cat-5.png";
const SnowCat6Img = new Image();
SnowCat6Img.src = root+"snow-cat-6.png";
const SnowCat7Img = new Image();
SnowCat7Img.src = root+"snow-cat-7.png";
const SnowCat8Img = new Image();
SnowCat8Img.src = root+"snow-cat-8.png";
const SnowCat9Img = new Image();
SnowCat9Img.src = root+"snow-cat-9.png";
const SnowCat10Img = new Image();
SnowCat10Img.src = root+"snow-cat-10.png";
const SnowCat11Img = new Image();
SnowCat11Img.src = root+"snow-cat-11.png";
const SnowCat12Img = new Image();
SnowCat12Img.src = root+"snow-cat-12.png";
const SnowCat13Img = new Image();
SnowCat13Img.src = root+"snow-cat-13.png";
const SnowCat14Img = new Image();
SnowCat14Img.src = root+"snow-cat-14.png";
const SnowCat15Img = new Image();
SnowCat15Img.src = root+"snow-cat-15.png";
const SnowCat16Img = new Image();
SnowCat16Img.src = root+"snow-cat-16.png";
const SnowCat17Img = new Image();
SnowCat17Img.src = root+"snow-cat-17.png";

const CoinFrog1Img = new Image();
CoinFrog1Img.src = root+"coin-frog-1.png";
const CoinFrog2Img = new Image();
CoinFrog2Img.src = root+"coin-frog-2.png";
const CoinFrog3Img = new Image();
CoinFrog3Img.src = root+"coin-frog-3.png";
const CoinFrog4Img = new Image();
CoinFrog4Img.src = root+"coin-frog-4.png";
const CoinFrog5Img = new Image();
CoinFrog5Img.src = root+"coin-frog-5.png";
const CoinFrog6Img = new Image();
CoinFrog6Img.src = root+"coin-frog-6.png";
const CoinFrog7Img = new Image();
CoinFrog7Img.src = root+"coin-frog-7.png";
const CoinFrog8Img = new Image();
CoinFrog8Img.src = root+"coin-frog-8.png";
const CoinFrog9Img = new Image();
CoinFrog9Img.src = root+"coin-frog-9.png";

const SeaBunny1Img = new Image();
SeaBunny1Img.src = root+"sea-bunny-1.png";
const SeaBunny2Img = new Image();
SeaBunny2Img.src = root+"sea-bunny-2.png";

const FireFox1Img = new Image();
FireFox1Img.src = root+"fire-fox-1.png";
const FireFox2Img = new Image();
FireFox2Img.src = root+"fire-fox-2.png";
const FireFox3Img = new Image();
FireFox3Img.src = root+"fire-fox-3.png";
const FireFox4Img = new Image();
FireFox4Img.src = root+"fire-fox-4.png";
const FireFox5Img = new Image();
FireFox5Img.src = root+"fire-fox-5.png";
const FireFox6Img = new Image();
FireFox6Img.src = root+"fire-fox-6.png";

const PlantSwan1Img = new Image();
PlantSwan1Img.src = root+"plant-swan-1.png";
const PlantSwan2Img = new Image();
PlantSwan2Img.src = root+"plant-swan-2.png";

const cCREATURE_INFO = {"Business Goose":[[BusinessGoose1Img,BusinessGoose2Img,BusinessGoose3Img,BusinessGoose4Img,],2.0,0.005,50.0,"A very nice looking goose",],"Flying Frog":[[FlyingFrog1Img,FlyingFrog2Img,FlyingFrog3Img,FlyingFrog4Img,FlyingFrog5Img,FlyingFrog6Img,FlyingFrog7Img,FlyingFrog8Img,FlyingFrog9Img,FlyingFrog10Img,],4.0,0.001,100.0,"A frog that can fly",],"Flower Bunny":[[FlowerBunny1Img,FlowerBunny2Img,],10.0,0.025,10.0,"A bunny with a flower on it's head",],"Marimoss":[[Marimoss1Img,Marimoss2Img,Marimoss3Img,Marimoss4Img,Marimoss5Img,Marimoss6Img,Marimoss7Img,],2.0,0.0001,1000.0,"A very round ball of algae",],"Plant Turtle":[[PlantTurtle1Img,PlantTurtle2Img,PlantTurtle3Img,PlantTurtle4Img,PlantTurtle5Img,PlantTurtle6Img,PlantTurtle7Img,],7.0,0.0005,250.0,"A turtle with a little biome on its back",],"Rune Clam":[[RuneClam1Img,RuneClam2Img,RuneClam3Img,RuneClam4Img,RuneClam5Img,RuneClam6Img,RuneClam7Img,RuneClam8Img,RuneClam9Img,RuneClam10Img,RuneClam11Img,RuneClam12Img,RuneClam13Img,],1.0,0.0003,500.0,"A clam with runes on it",],"Snow Bird":[[SnowBird1Img,SnowBird2Img,SnowBird3Img,SnowBird4Img,SnowBird5Img,SnowBird6Img,SnowBird7Img,SnowBird8Img,SnowBird9Img,SnowBird10Img,SnowBird11Img,],3.0,0.0003,500.0,"A pretty blue bird",],"Tomato Bunny":[[TomatoBunny1Img,TomatoBunny2Img,],10.0,0.05,5.0,"A bunny disguised as a tomato",],"Glow Frog":[[GlowFrog1Img,GlowFrog2Img,GlowFrog3Img,GlowFrog4Img,],3.0,0.001,100.0,"A glowing frog",],"Shoop":[[Shoop1Img,Shoop2Img,Shoop3Img,Shoop4Img,Shoop5Img,Shoop6Img,Shoop7Img,Shoop8Img,Shoop9Img,Shoop10Img,Shoop11Img,Shoop12Img,Shoop13Img,Shoop14Img,Shoop15Img,Shoop16Img,Shoop17Img,Shoop18Img,Shoop19Img,],5.0,0.0005,250.0,"A shoop!",],"Skeletal Flower":[[SkeletalFlower1Img,SkeletalFlower2Img,SkeletalFlower3Img,SkeletalFlower4Img,SkeletalFlower5Img,SkeletalFlower6Img,SkeletalFlower7Img,SkeletalFlower8Img,SkeletalFlower9Img,SkeletalFlower10Img,SkeletalFlower11Img,SkeletalFlower12Img,],1.0,0.0003,500.0,"A flower that becomes translucent",],"Land Shark":[[LandShark1Img,LandShark2Img,],2.0,0.001,100.0,"A shark that, like seals, hangs out on beaches (it's pretty harmless)",],"Snow Cat":[[SnowCat1Img,SnowCat2Img,SnowCat3Img,SnowCat4Img,SnowCat5Img,SnowCat6Img,SnowCat7Img,SnowCat8Img,SnowCat9Img,SnowCat10Img,SnowCat11Img,SnowCat12Img,SnowCat13Img,SnowCat14Img,SnowCat15Img,SnowCat16Img,SnowCat17Img,],2.0,0.0003,500.0,"A cat that likes to lay in the snow, it blends in very well!",],"Coin Frog":[[CoinFrog1Img,CoinFrog2Img,CoinFrog3Img,CoinFrog4Img,CoinFrog5Img,CoinFrog6Img,CoinFrog7Img,CoinFrog8Img,CoinFrog9Img,],1.0,0.001,150.0,"This frog collects coins and holds them in its mouth. Perhaps its trying to start a business?",],"Sea Bunny":[[SeaBunny1Img,SeaBunny2Img,],10.0,0.025,10.0,"This is a bunny looking sea creature",],"Fire Fox":[[FireFox1Img,FireFox2Img,FireFox3Img,FireFox4Img,FireFox5Img,FireFox6Img,],1.0,0.0003,500.0,"This fox has fire in its tail to help regulate temperature",],"Plant Swan":[[PlantSwan1Img,PlantSwan2Img,],2.0,0.0005,250.0,"This swan grows plants on its back",],};

const cSPAWNING_INFO = {'M': ['Snow Bird', 'Snow Cat'], 'G': ['Business Goose', 'Flying Frog', 'Flower Bunny', 'Plant Turtle', 'Tomato Bunny', 'Glow Frog', 'Shoop', 'Skeletal Flower', 'Coin Frog', 'Fire Fox', 'Plant Swan'], 'B': ['Rune Clam', 'Land Shark', 'Coin Frog'], 'W': ['Marimoss', 'Sea Bunny', 'Plant Swan']};
let town_locs = [["Anensl",[114, 50],[['M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M'], ['M', 'H', 'M', 'M', 'G', 'G', 'M', 'M', 'H', 'M'], ['M', 'M', 'M', 'G', 'G', 'G', 'G', 'M', 'M', 'M'], ['M', 'M', 'G', 'G', 'G', 'H', 'G', 'G', 'M', 'M'], ['M', 'G', 'G', 'M', 'G', 'G', 'G', 'G', 'G', 'M'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'H', 'H', 'G', 'S', 'G', 'G', 'H', 'H', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['H', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'M'], ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'M', 'M']],[[1, 0, 0, 2, 1, 1, 1, 1, 0, 1], [1, 0, 2, 2, 1, 1, 0, 2, 3, 1], [2, 1, 1, 0, 2, 2, 1, 1, 0, 2], [2, 0, 2, 0, 1, 1, 0, 1, 0, 2], [1, 0, 2, 2, 0, 2, 0, 0, 0, 2], [2, 1, 2, 2, 1, 0, 2, 2, 0, 2], [1, 2, 4, 0, 0, 0, 2, 0, 4, 2], [1, 1, 1, 1, 0, 1, 1, 0, 2, 1], [2, 0, 1, 2, 2, 1, 1, 2, 0, 1], [2, 2, 2, 0, 0, 0, 0, 1, 1, 1]],[['Swan', [1, 1]], ['Snor', [1, 8]], ['Swan', [3, 5]], ['Gardora', [6, 1]], ['Snor', [6, 2]], ['Celery', [6, 7]], ['Gardora', [6, 8]], ['Gardora', [8, 0]]], false],["Vikeflu",[19, 118],[['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'B', 'B', 'B', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'B', 'H', 'B', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'B', 'B', 'B', 'G', 'G', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'H', 'H', 'G', 'G', 'G', 'G'], ['G', 'G', 'S', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'G', 'G']],[[2, 1, 2, 2, 1, 0, 2, 2, 1, 0], [0, 2, 1, 0, 0, 0, 1, 0, 0, 1], [0, 0, 1, 0, 2, 1, 1, 0, 1, 0], [1, 2, 1, 1, 0, 1, 1, 0, 0, 0], [2, 1, 1, 1, 1, 1, 1, 0, 1, 1], [1, 2, 1, 0, 4, 0, 1, 1, 1, 2], [0, 1, 0, 1, 2, 1, 2, 0, 1, 0], [2, 1, 2, 0, 1, 0, 1, 4, 2, 0], [1, 2, 2, 2, 0, 2, 1, 1, 2, 0], [0, 0, 0, 1, 0, 1, 1, 2, 0, 2]],[['Swan', [2, 2]], ['Swan', [3, 7]], ['Swan', [5, 4]], ['Gardora', [5, 5]], ['Swan', [7, 7]]], false],["Iloslon",[89, 10],[['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'B', 'B', 'B', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'B', 'H', 'B', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'B', 'B', 'B', 'G', 'G', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'H', 'H', 'G', 'G', 'G', 'G'], ['G', 'G', 'S', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'G', 'G']],[[1, 2, 2, 2, 0, 0, 0, 2, 2, 0], [1, 0, 2, 2, 1, 0, 0, 2, 0, 2], [1, 1, 3, 1, 0, 1, 1, 0, 0, 1], [0, 1, 0, 1, 2, 2, 0, 3, 2, 2], [0, 0, 1, 2, 2, 1, 2, 0, 1, 1], [0, 0, 2, 0, 2, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 2, 1, 0, 2, 2], [1, 2, 1, 0, 0, 2, 0, 3, 1, 1], [1, 2, 2, 0, 0, 2, 1, 0, 0, 2], [0, 2, 2, 0, 0, 2, 1, 2, 1, 1]],[['Gardora', [2, 2]], ['Gardora', [3, 7]], ['Celery', [5, 4]], ['Snor', [5, 5]], ['Gardora', [7, 7]]], false],["Tavensk",[34, 103],[['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'B', 'B', 'B', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'B', 'H', 'B', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'B', 'B', 'B', 'G', 'G', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'H', 'H', 'G', 'G', 'G', 'G'], ['G', 'G', 'S', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'G', 'G']],[[1, 1, 1, 2, 0, 1, 2, 0, 2, 1], [2, 2, 2, 1, 1, 1, 1, 0, 0, 2], [0, 2, 4, 1, 2, 2, 1, 2, 2, 2], [2, 2, 0, 0, 1, 2, 1, 3, 0, 1], [2, 2, 1, 1, 0, 2, 2, 0, 2, 0], [1, 1, 1, 0, 1, 3, 0, 1, 1, 1], [2, 1, 0, 0, 0, 0, 2, 0, 0, 1], [0, 1, 0, 0, 1, 0, 0, 4, 0, 2], [0, 1, 1, 0, 0, 2, 0, 0, 2, 2], [2, 2, 1, 1, 0, 1, 1, 1, 2, 0]],[['Swan', [2, 2]], ['Celery', [3, 7]], ['Celery', [5, 4]], ['Swan', [5, 5]], ['Gardora', [7, 7]]], false],["Carasir",[106, 106],[['M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M'], ['M', 'H', 'M', 'M', 'G', 'G', 'M', 'M', 'H', 'M'], ['M', 'M', 'M', 'G', 'G', 'G', 'G', 'M', 'M', 'M'], ['M', 'M', 'G', 'G', 'G', 'H', 'G', 'G', 'M', 'M'], ['M', 'G', 'G', 'M', 'G', 'G', 'G', 'G', 'G', 'M'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'H', 'H', 'G', 'S', 'G', 'G', 'H', 'H', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['H', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'M'], ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'M', 'M']],[[2, 0, 1, 2, 2, 1, 1, 2, 1, 0], [2, 2, 2, 1, 1, 0, 0, 0, 3, 1], [2, 0, 0, 2, 2, 2, 0, 2, 0, 0], [2, 0, 1, 2, 0, 2, 0, 0, 2, 2], [1, 1, 2, 0, 2, 1, 1, 2, 2, 1], [2, 1, 2, 0, 0, 2, 2, 2, 0, 1], [2, 2, 2, 2, 0, 1, 2, 0, 3, 0], [2, 0, 2, 1, 0, 0, 1, 1, 1, 0], [1, 0, 0, 1, 2, 0, 1, 1, 2, 0], [1, 1, 2, 1, 0, 2, 2, 0, 2, 1]],[['Celery', [1, 1]], ['Snor', [1, 8]], ['Swan', [3, 5]], ['Swan', [6, 1]], ['Celery', [6, 2]], ['Gardora', [6, 7]], ['Snor', [6, 8]], ['Swan', [8, 0]]], false],["Flupavik",[68, 73],[['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'S', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'G', 'G', 'G', 'G', 'H', 'G'], ['G', 'G', 'G', 'G', 'B', 'B', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'B', 'W', 'W', 'B', 'G', 'H', 'G'], ['G', 'G', 'G', 'B', 'W', 'W', 'B', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'B', 'B', 'G', 'G', 'H', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'G', 'G', 'G', 'G', 'H', 'G'], ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'G', 'G']],[[1, 0, 1, 2, 2, 2, 1, 1, 2, 0], [2, 0, 2, 1, 2, 0, 0, 0, 1, 2], [2, 4, 0, 0, 2, 1, 1, 0, 3, 2], [1, 1, 2, 1, 2, 2, 2, 2, 1, 1], [0, 4, 0, 1, 1, 1, 2, 0, 4, 1], [2, 0, 2, 1, 2, 1, 1, 2, 2, 0], [2, 0, 2, 2, 1, 0, 2, 1, 4, 1], [0, 2, 0, 2, 0, 1, 0, 2, 1, 2], [0, 2, 2, 1, 1, 1, 2, 0, 3, 0], [0, 0, 0, 1, 0, 0, 0, 2, 1, 0]],[['Swan', [2, 1]], ['Gardora', [2, 8]], ['Swan', [4, 1]], ['Gardora', [4, 8]], ['Snor', [6, 1]], ['Gardora', [6, 8]], ['Gardora', [8, 1]], ['Celery', [8, 8]]], false],["Lupsasl",[100, 13],[['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'S', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'G', 'G', 'G', 'G', 'H', 'G'], ['G', 'G', 'G', 'G', 'B', 'B', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'B', 'W', 'W', 'B', 'G', 'H', 'G'], ['G', 'G', 'G', 'B', 'W', 'W', 'B', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'B', 'B', 'G', 'G', 'H', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'G', 'G', 'G', 'G', 'H', 'G'], ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'G', 'G']],[[1, 1, 2, 1, 2, 0, 1, 1, 0, 2], [2, 1, 2, 1, 1, 0, 0, 2, 1, 1], [1, 3, 2, 2, 2, 2, 2, 2, 1, 1], [1, 1, 2, 0, 0, 0, 1, 0, 0, 1], [1, 1, 0, 2, 2, 1, 1, 0, 2, 0], [2, 1, 2, 1, 0, 0, 0, 0, 1, 0], [0, 1, 2, 2, 2, 0, 1, 0, 0, 0], [1, 2, 2, 2, 1, 1, 2, 0, 1, 0], [0, 2, 1, 2, 0, 0, 2, 1, 0, 1], [0, 2, 1, 2, 0, 1, 1, 0, 1, 2]],[['Snor', [2, 1]], ['Gardora', [2, 8]], ['Gardora', [4, 1]], ['Swan', [4, 8]], ['Gardora', [6, 1]], ['Swan', [6, 8]], ['Celery', [8, 1]], ['Gardora', [8, 8]]], false],["Raska",[45, 124],[['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'S', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'G', 'G', 'G', 'G', 'H', 'G'], ['G', 'G', 'G', 'G', 'B', 'B', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'B', 'W', 'W', 'B', 'G', 'H', 'G'], ['G', 'G', 'G', 'B', 'W', 'W', 'B', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'B', 'B', 'G', 'G', 'H', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'G', 'G', 'G', 'G', 'H', 'G'], ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'G', 'G']],[[1, 2, 0, 0, 1, 2, 2, 0, 2, 1], [1, 2, 1, 2, 2, 0, 2, 2, 2, 2], [1, 0, 1, 0, 1, 0, 0, 0, 1, 2], [0, 1, 0, 2, 0, 2, 2, 1, 1, 1], [2, 2, 0, 1, 1, 0, 2, 0, 4, 2], [2, 2, 2, 2, 0, 0, 2, 0, 1, 0], [1, 3, 1, 1, 0, 2, 2, 1, 1, 0], [0, 0, 2, 0, 2, 0, 0, 0, 0, 1], [2, 3, 1, 1, 2, 2, 1, 1, 4, 0], [2, 1, 0, 0, 0, 2, 1, 1, 0, 0]],[['Swan', [2, 1]], ['Swan', [2, 8]], ['Snor', [4, 1]], ['Swan', [4, 8]], ['Swan', [6, 1]], ['Snor', [6, 8]], ['Celery', [8, 1]], ['Gardora', [8, 8]]], false],["Denen",[18, 5],[['M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M'], ['M', 'H', 'M', 'M', 'G', 'G', 'M', 'M', 'H', 'M'], ['M', 'M', 'M', 'G', 'G', 'G', 'G', 'M', 'M', 'M'], ['M', 'M', 'G', 'G', 'G', 'H', 'G', 'G', 'M', 'M'], ['M', 'G', 'G', 'M', 'G', 'G', 'G', 'G', 'G', 'M'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'H', 'H', 'G', 'S', 'G', 'G', 'H', 'H', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['H', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'M'], ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'M', 'M']],[[2, 1, 2, 0, 2, 0, 0, 1, 2, 2], [0, 3, 0, 0, 0, 0, 0, 1, 2, 0], [2, 0, 2, 0, 1, 1, 2, 0, 1, 2], [2, 1, 2, 1, 1, 0, 0, 2, 0, 1], [0, 0, 1, 2, 0, 0, 0, 0, 2, 0], [0, 0, 2, 0, 2, 1, 0, 1, 1, 1], [1, 0, 3, 2, 0, 2, 0, 1, 0, 1], [1, 0, 1, 1, 0, 0, 1, 1, 1, 1], [0, 1, 2, 0, 2, 0, 2, 0, 0, 1], [1, 1, 0, 0, 0, 0, 2, 2, 1, 0]],[['Gardora', [1, 1]], ['Snor', [1, 8]], ['Celery', [3, 5]], ['Celery', [6, 1]], ['Swan', [6, 2]], ['Celery', [6, 7]], ['Gardora', [6, 8]], ['Snor', [8, 0]]], false],["Byuk",[73, 79],[['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'B', 'B', 'B', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'B', 'H', 'B', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'B', 'B', 'B', 'G', 'G', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'H', 'H', 'G', 'G', 'G', 'G'], ['G', 'G', 'S', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'G', 'G']],[[1, 0, 2, 2, 0, 2, 2, 2, 1, 2], [0, 2, 0, 0, 0, 0, 2, 1, 1, 2], [0, 1, 3, 0, 2, 2, 1, 1, 0, 0], [0, 1, 0, 2, 2, 2, 0, 4, 1, 1], [1, 2, 1, 2, 1, 0, 2, 2, 0, 2], [2, 2, 1, 1, 2, 1, 0, 0, 1, 0], [2, 1, 0, 0, 1, 2, 0, 1, 1, 0], [2, 1, 0, 0, 1, 2, 0, 3, 2, 0], [0, 0, 1, 1, 1, 1, 1, 2, 2, 2], [0, 1, 0, 0, 0, 0, 0, 2, 1, 1]],[['Snor', [2, 2]], ['Celery', [3, 7]], ['Celery', [5, 4]], ['Celery', [5, 5]], ['Celery', [7, 7]]], false],]
let creatures_discovered = {
"Business Goose":false,
"Flying Frog":false,
"Flower Bunny":false,
"Marimoss":false,
"Plant Turtle":false,
"Rune Clam":false,
"Snow Bird":false,
"Tomato Bunny":false,
"Glow Frog":false,
"Shoop":false,
"Skeletal Flower":false,
"Land Shark":false,
"Snow Cat":false,
"Coin Frog":false,
"Sea Bunny":false,
"Fire Fox":false,
"Plant Swan":false,
}



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
let all_creatures = Object.keys(creatures_discovered);
let book_page;
let book_selection_idx;

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

for (let i = 0; i < all_creatures.length; i++){
    if (localStorage.getItem("collection-"+all_creatures[i]) != null && localStorage.getItem("collection-"+all_creatures[i]) != "null" && localStorage.getItem("collection-"+all_creatures[i]) != undefined){
        creatures_discovered[all_creatures[i]] = str_bool(localStorage.getItem("collection-"+all_creatures[i]));
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
        } if (event.keyCode == 66){
            // b - book
            current_scene = "book";
            book_page = 0;
            book_selection_idx = -1;
            temp_idx = 0;
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
    } else if (current_scene == "book"){
        if (event.keyCode == 66){
            // b - book
            current_scene = "main";
        } if (event.keyCode == 38){
            // up
            book_selection_idx -= 7;
        } if (event.keyCode == 40){
            // down
            book_selection_idx += 7;
        } if (event.keyCode == 37){
            // left
            book_selection_idx -= 1;
        } if (event.keyCode == 39){
            // right
            book_selection_idx += 1;
        }
        if (book_selection_idx < -1){
            book_selection_idx = -1;
        } else if (book_selection_idx >= all_creatures.length){
            book_selection_idx = all_creatures.length-1;
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
            for (let i = 0; i < all_creatures.length; i++){
                localStorage.setItem("collection-"+all_creatures[i], "null");
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
                creatures_discovered[showing_creatures[i].notes] = true;
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
    } else if (current_scene == "book"){
        ctx.drawImage(bookImg, 0, 0);
        ctx.fillStyle = "#AAA";
        ctx.fillRect(0, 288, 288, 32);
        
        book_page = parseInt((book_selection_idx)/63);

        if (book_selection_idx < 0){
            // Instructions
            add_text("Use the arrow keys to move around", 5, 25, 215);
            add_text("Use the space key to select something or talk to someone", 5, 65, 215);
            add_text("Use the enter key to select if the space key is already used (like in the shop)", 5, 105, 215);
            add_text("ITEMS: W = wings, M = map", 5, 160, 215);
            add_text("To view the creatures use the right or down arrow to flip the page --->", 5, 220, 215);
        } else {
            for (let y = 0; y < 9; y++){
                for (let x = 0; x < 7; x++){
                    temp_idx = (book_page*63)+(y*7)+x;
                    if (temp_idx >= all_creatures.length){
                        break;
                    } else {
                        if (creatures_discovered[all_creatures[temp_idx]]){
                            temp_info = cCREATURE_INFO[all_creatures[temp_idx]];
                            if (temp_idx == book_selection_idx){
                                ctx.fillStyle = "rgba(0, 0, 150, 0.5)";
                                ctx.fillRect(x*32, (y*32), 32, 32);
                                add_text(temp_info[4], 5, 310);
                            }
                            ctx.drawImage(temp_info[0][parseInt(frames/temp_info[1])%temp_info[0].length], x*32, (y*32));
                        } else {
                            if (temp_idx == book_selection_idx){
                                ctx.fillStyle = "rgba(0, 0, 150, 0.5)";
                                ctx.fillRect(x*32, (y*32), 32, 32);
                                add_text("You haven\'t discovered this creature yet", 5, 310);
                            }
                            ctx.drawImage(unknown_images[frames%unknown_images.length], x*32, (y*32));
                        }
                    }
                }
            }
        }

        ctx.drawImage(charImg, 242, 13);
    }

    // SAVE - coins, creatures, items
    // OPTIONAL SAVE - map, position
    localStorage.setItem("collection-coins", coins);
    localStorage.setItem("collection-creatures", creatures_caught);
    for (let i = 0; i < store_items_keys.length; i++){
        localStorage.setItem("collection-"+store_items_keys[i], store_items[store_items_keys[i]][2]);
    }

    for (let i = 0; i < all_creatures.length; i++){
        localStorage.setItem("collection-"+all_creatures[i], creatures_discovered[all_creatures[i]]);
    }
}

let game = setInterval(draw, 100);