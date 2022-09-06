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

const charAdventure1Img = new Image();
charAdventure1Img.src = root+"char-adventure-walk-1.png";
const charAdventure2Img = new Image();
charAdventure2Img.src = root+"char-adventure-walk-2.png";
const charAdventure3Img = new Image();
charAdventure3Img.src = root+"char-adventure-walk-3.png";
const charAdventure4Img = new Image();
charAdventure4Img.src = root+"char-adventure-walk-4.png";

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

portalImgs = [exit1Img, exit2Img, exit3Img, exit4Img, exit5Img, exit6Img, exit7Img];

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


const skyHouse1Img = new Image();
skyHouse1Img.src = root+"sky-house-version-1.png";
const skyHouse2Img = new Image();
skyHouse2Img.src = root+"sky-house-version-2.png";

const skyShopImg = new Image();
skyShopImg.src = root+"sky-shop.png";
const skyShopFurnitureImg = new Image();
skyShopFurnitureImg.src = root+"sky-shop-furniture.png";
const skyShopClothesImg = new Image();
skyShopClothesImg.src = root+"sky-shop-clothes.png";

const sky1Img = new Image();
sky1Img.src = root+"sky-1.png";
const sky2Img = new Image();
sky2Img.src = root+"sky-2.png";
const sky3Img = new Image();
sky3Img.src = root+"sky-3.png";

let sky_map = [
    ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], 
    ['G', 'G', 'H', 'G', 'G', 'G', 'G', 'H', 'G', 'G'], 
    ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], 
    ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], 
    ['G', 'G', 'S', 'G', 'G', 'G', 'G', 'S', 'G', 'G'], 
    ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], 
    ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], 
    ['G', 'G', 'F', 'G', 'G', 'G', 'G', 'C', 'G', 'G'], 
    ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], 
    ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'G', 'G']
]

let sky_map_nums = [
    [0, 0, 1, 2, 1, 1, 2, 0, 1, 0], 
    [1, 1, 0, 1, 1, 2, 0, 0, 0, 2], 
    [0, 0, 2, 0, 0, 2, 1, 1, 2, 1], 
    [2, 0, 0, 2, 1, 1, 1, 1, 1, 2], 
    [0, 0, 0, 2, 1, 0, 2, 0, 0, 1], 
    [0, 0, 0, 2, 0, 2, 2, 0, 0, 2], 
    [2, 2, 1, 2, 0, 1, 0, 2, 2, 2], 
    [1, 0, 0, 2, 0, 0, 2, 0, 1, 2], 
    [0, 0, 1, 0, 1, 0, 1, 2, 1, 0], 
    [1, 1, 1, 1, 0, 0, 0, 2, 1, 2]
]

const upButtonImg = new Image();
upButtonImg.src = root+"up-button.png";
const upButtonClickedImg = new Image();
upButtonClickedImg.src = root+"up-button-clicked.png";

const downButtonImg = new Image();
downButtonImg.src = root+"down-button.png";
const downButtonClickedImg = new Image();
downButtonClickedImg.src = root+"down-button-clicked.png";

const leftButtonImg = new Image();
leftButtonImg.src = root+"left-button.png";
const leftButtonClickedImg = new Image();
leftButtonClickedImg.src = root+"left-button-clicked.png";

const rightButtonImg = new Image();
rightButtonImg.src = root+"right-button.png";
const rightButtonClickedImg = new Image();
rightButtonClickedImg.src = root+"right-button-clicked.png";

const selectButtonImg = new Image();
selectButtonImg.src = root+"select-button.png";
const selectButtonClickedImg = new Image();
selectButtonClickedImg.src = root+"select-button-clicked.png";

const spSelectButtonImg = new Image();
spSelectButtonImg.src = root+"sp-select-button.png";
const spSelectButtonClickedImg = new Image();
spSelectButtonClickedImg.src = root+"sp-select-button-clicked.png";

const resetButtonImg = new Image();
resetButtonImg.src = root+"reset-button.png";
const wardrobeButtonImg = new Image();
wardrobeButtonImg.src = root+"wardrobe-button.png";
const bookButtonImg = new Image();
bookButtonImg.src = root+"book-button.png";

const soundOnImg = new Image();
soundOnImg.src = root+"sound_on.png";
const soundOffImg = new Image();
soundOffImg.src = root+"sound_off.png";

const musicOnImg = new Image();
musicOnImg.src = root+"music_on.png";
const musicOffImg = new Image();
musicOffImg.src = root+"music_off.png";

const caveImage = new Image();
caveImage.src = root+"sp-select-button.png";

const caveBlockImage = new Image();
caveBlockImage.src = root+"sky-2.png";

// SOUNDS
const collectSND = document.createElement("audio");
collectSND.src = "./Sounds/collection/note.mp3";

const chordSND = document.createElement("audio");
chordSND.src = "./Sounds/collection/mellow_chord.mp3";

const melodySND = document.createElement("audio");
melodySND.src = "./Sounds/collection/shop_music_2.mp3";


// *****

const cMAP = [["M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","G","G","G","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","B","W","W","W","W","W",],["M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","G","G","G","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","B","B","B","B","B","B","B","W","W","W","W","W",],["M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","B","W","W","W","B","B","B","B","B","B","B","B","B","W","W","B","W","W",],["M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","B","B","B","B","B","B","B","B","B","W","W","B","B","B",],["M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W","B","B","B","B","B","G","B","B","B","B","B","B","B","B",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","B","B","B","B","B","B","G","B","B","B","B","B","B","B","B","B","B",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","G","G","B","B","B",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","B","B","B","G","G","G","G","G","G","G","G","G","G",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","B","B","B","B","B","G","B","B","G","G","G","G","G","G","G","G","G","G","G",],["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","G","B","B","B","B","B","G","G","G","G","G","G","B","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","G","B","B","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","B","B","G","G","G","B","B","B","B","G","G","G","G","G","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","B","B","G","G","G","B","B","B","B","B","B","B","G","G","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","G","G","G","B","B","B","B","B","B","B","G","G","G","B","B","B","G","G","G","G","G","G","G","G","G","G","G",], ["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","G","B","B","G","G","G","G","G","B","B","B","B","B","G",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","G","G","G","G","B","B","G","B","B","B","G","B",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B",], ["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B",], ["G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","G","B","B","B","B","B","B","B","B","B","B","B","B","B",], ["G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","G","G","G","B","B","B","B","B","B","W","W","W","W","W","W",],["G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","M","M","M","M","M","M","M","M","M","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","G","G","G","B","B","B","B","B","B","W","W","W","W","W","W",],["G","G","G","G","M","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","M","M","M","M","M","M","M","M","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","G","B","B","B","B","B","W","W","W","W","W","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","W","W","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","W","W","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","W","W","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","W","W","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","G","B","B","B","B","B","B","W","W","W","W","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","M","M","M","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","W","W","W","W","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","W","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","W","B","B","B","B","W","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","W","B","B","B","B","B","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","M","M","G","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","M","M","M","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","M","M","M","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","M","M","M","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","B","B","B","B","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","G","G","G","B","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","G","B","B","G","G","G","G",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","G","B","B","G","G","G","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","G","G","G","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","G","G","G","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","G","G","G","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","G","G","B","B","B","G","G","G","B","B","B","B","B","B",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","M","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","G","G","G","B","B","B","B","B","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","G","G","G","B","B","B","B","B","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W",],["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","B","B","B","B","G","G","G","B","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W","W",],["G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","B","B","B","B","B","B","B","B","W","W","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","W","W","W","W","W","W","W","W","B","W","W","W",],["G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","B","W","W","W","W","W","W","W","W","G","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W",],["G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","M","M","M","M","G","G","G","G","G","G","G","B","W","W","W","W","W","W","W","W","G","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W",],["G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","M","M","G","G","G","G","G","G","G","B","W","W","W","W","W","W","W","W","G","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W",],["G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","M","M","M","M","M","M","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","B","B","W","W","W","W","W","W","W","W","W","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W",],["G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","B","W","W","W","W","W","W","W","W","G","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","G","B","B","B","B","B","B","W","W","W","W","W","W",],["G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","W","W","W","W","W","W","W","W","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","G","B","B","B","W","W","W","W","W","W","W","W",],["G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","W","W","W","W","W","W","W","W","G","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","W","W","W","W","W","W","W","W",],["G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","W","W","W","W","W","W","W","W","W","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","W","W","W","W","W","B","W","W",],["G","G","G","G","G","G","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","W","W","B","W","W","W","W","W",],["G","G","G","G","G","G","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","G","G","G","B","B","B","B","B","W","W","W","W","W","W","W","W","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","G","G","G","G","G","B","B","B","B","B","B","W","W","W","W","W","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","G","G","G","B","B","B","B","B","B","B","W","W","W","W","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","G","G","G","B","B","B","B","B","B","B","W","B","W","W","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","B","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","G","G","G","G","G","M","M","M","M","M","G","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","G","M","G","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","G","G","G","B","B","B","B","B","B","W","W","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","G","M","M","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","G","G","G","B","B","B","B","B","B","B","W","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","G","G","G","B","B","B","B","B","B","B","W","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W",],["G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","M","M","M","M","M","M","M","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","B","B","B","B","B","B","B","B","B","B","B","B","B","W","W","W","W","W","W",],]

const cMAP_NUM = [[1,2,2,1,0,0,0,1,2,0,1,2,1,0,2,2,0,2,2,2,2,0,1,1,1,1,0,0,1,1,0,2,1,2,0,0,0,1,0,0,2,2,2,0,1,2,0,1,2,1,2,0,0,0,1,0,1,2,0,1,2,2,2,2,2,0,0,1,2,2,1,0,0,2,2,1,1,1,2,2,1,0,0,0,1,0,0,1,1,2,1,1,1,0,1,0,2,0,0,1,],[1,1,2,2,0,0,1,1,1,0,1,0,1,2,2,2,0,1,0,2,1,0,1,2,0,0,2,0,1,1,2,0,2,2,1,1,0,1,2,2,1,2,1,1,2,2,2,0,1,0,2,0,1,0,1,0,1,0,1,1,1,0,1,2,2,1,0,2,2,1,0,2,2,0,0,2,1,0,2,2,2,1,1,1,2,2,0,0,0,2,1,0,2,2,0,2,1,1,2,0,],[0,1,2,0,1,2,2,0,2,2,0,1,0,1,0,2,1,1,0,1,1,1,2,0,2,2,0,0,2,2,1,1,0,0,2,0,1,1,2,0,2,1,2,1,0,1,0,2,2,0,1,0,0,2,1,1,1,2,1,1,1,0,1,1,0,2,2,0,1,0,1,2,2,1,2,0,2,2,1,0,0,2,2,1,2,2,0,0,2,2,2,1,1,0,2,0,1,2,0,2,],[0,1,2,1,1,2,0,1,1,0,2,2,0,2,2,0,2,1,0,1,0,0,2,0,0,1,0,1,1,0,1,0,1,1,1,1,2,2,0,1,0,2,1,0,1,1,0,1,0,1,1,1,1,1,0,0,2,2,0,1,2,1,2,0,1,1,2,1,2,1,2,2,0,2,1,2,1,1,1,0,2,1,0,2,2,0,0,1,1,1,0,1,0,0,0,1,0,1,2,1,],[0,0,0,2,0,1,1,0,2,2,2,2,1,2,0,2,1,0,0,0,1,1,0,0,1,1,1,1,2,1,2,2,1,0,0,1,2,0,1,1,2,1,2,1,0,1,1,0,2,1,2,1,1,2,2,0,2,0,1,1,0,1,2,0,0,1,0,0,2,1,0,2,1,2,1,0,1,1,0,0,2,0,1,2,1,2,1,2,0,0,0,1,2,0,2,0,1,1,2,1,],[0,2,2,2,0,1,2,1,0,0,2,0,2,2,1,1,1,1,2,1,0,2,1,1,1,1,0,0,1,2,2,0,1,2,1,1,0,2,1,0,2,0,2,0,1,2,2,1,1,1,0,1,0,1,1,1,2,0,2,2,2,2,1,0,1,0,2,2,1,1,1,1,0,2,1,0,1,0,0,2,2,2,1,2,1,2,0,1,1,1,1,1,2,1,2,1,2,1,2,0,],[1,2,2,0,1,2,0,1,0,2,1,2,1,1,1,2,0,1,1,1,2,1,0,2,0,2,1,1,1,0,2,0,2,1,0,1,0,2,1,0,2,1,0,0,2,2,2,0,0,0,0,2,2,0,1,1,2,1,1,2,2,2,1,2,0,0,1,0,0,2,0,2,0,1,1,0,1,2,1,1,2,0,0,0,1,1,0,1,2,1,1,0,2,0,2,1,2,0,1,1,],[2,2,1,1,0,1,0,2,1,2,1,2,2,1,2,1,0,2,2,1,2,1,0,0,0,2,0,1,0,2,1,0,0,1,0,0,2,2,0,1,1,1,0,2,2,1,2,2,2,0,1,0,1,1,1,1,0,0,1,0,1,2,1,0,1,2,1,1,2,0,2,0,1,2,2,0,0,0,2,0,2,1,2,0,1,1,0,2,1,1,0,0,0,0,1,2,0,2,0,1,],[2,0,0,1,0,2,2,2,0,2,2,1,2,2,0,1,2,0,2,2,0,0,1,2,1,1,2,2,2,2,2,1,1,1,2,1,0,2,0,2,1,0,2,2,1,0,0,0,1,2,0,1,1,0,0,2,0,1,1,2,2,1,0,0,2,1,2,1,2,1,1,0,2,2,1,0,1,0,1,2,1,1,0,0,0,1,0,0,0,0,1,0,0,2,2,0,2,1,1,1,],[2,1,0,2,0,2,2,0,0,0,0,1,2,1,1,1,2,2,0,0,1,2,0,0,2,1,1,1,2,0,0,1,0,0,1,1,1,1,1,0,2,0,1,1,0,0,2,2,2,1,2,1,2,0,0,2,0,2,0,0,2,2,0,0,0,0,0,2,2,2,2,1,1,2,1,1,1,0,0,1,1,1,0,1,1,2,1,1,2,1,0,2,0,2,2,2,0,1,1,2,],[1,2,1,2,1,0,1,2,1,1,0,0,2,1,0,0,2,0,2,1,1,2,0,1,2,2,1,0,1,1,1,1,0,0,1,2,0,0,1,0,1,0,0,2,1,0,1,2,1,0,2,2,2,0,0,2,2,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,2,0,2,0,1,2,2,1,0,1,2,2,2,1,1,0,2,1,0,0,2,0,0,1,1,2,0,],[1,2,1,1,2,1,1,1,2,0,0,2,2,0,1,0,1,0,0,2,2,0,2,0,2,1,0,1,2,2,2,0,1,1,2,0,1,0,2,2,2,1,0,2,1,2,0,1,1,0,1,2,0,2,0,1,1,0,1,2,2,0,1,2,2,0,1,1,1,0,2,0,0,0,0,2,2,2,1,0,2,0,0,1,1,2,1,2,1,2,1,2,0,0,2,1,2,2,2,0,],[0,1,2,1,1,0,0,2,2,1,0,1,0,1,2,2,0,1,0,0,1,2,1,1,1,0,1,1,1,2,2,2,1,0,1,1,0,2,1,0,0,2,2,1,0,2,2,1,1,0,0,0,2,2,0,0,1,1,0,0,1,1,1,0,1,0,1,1,2,0,1,0,0,0,2,2,1,1,0,2,0,2,1,2,1,0,0,0,1,1,2,2,1,2,2,2,2,0,2,0,],[0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,2,2,2,1,1,2,0,1,0,1,1,0,2,2,0,2,1,0,2,2,1,0,2,1,1,2,0,1,1,1,1,0,1,2,1,0,1,1,0,0,2,0,2,0,0,2,1,0,2,1,2,1,0,0,2,0,0,0,1,1,2,2,1,1,0,1,1,1,0,0,2,0,1,2,0,2,0,1,2,2,1,2,0,2,0,],[0,1,1,2,1,1,2,2,0,2,0,0,1,2,0,2,1,1,1,0,0,0,0,1,0,0,0,2,1,2,2,2,2,0,0,2,0,2,1,0,0,2,2,1,0,2,1,2,1,2,1,1,1,2,0,0,0,0,0,2,2,1,0,0,1,1,1,1,1,0,0,1,0,2,0,1,0,2,1,1,0,0,1,0,1,0,1,2,1,0,2,2,1,0,1,1,1,2,0,2,],[2,1,2,0,0,2,1,0,2,2,2,0,1,0,2,2,1,0,1,0,0,0,2,1,0,0,2,1,1,0,2,2,2,2,0,2,2,2,0,1,2,2,2,1,0,0,2,1,0,1,0,0,0,1,0,2,2,0,0,1,2,1,1,0,2,0,1,0,1,0,1,0,2,0,2,0,2,1,1,0,0,0,1,2,1,1,1,2,0,2,2,2,2,0,2,1,0,0,1,1,],[1,1,2,2,2,2,1,1,2,2,0,0,0,0,0,1,1,2,1,2,2,1,2,0,0,2,0,2,2,1,2,0,1,0,2,1,1,2,2,2,2,1,0,2,2,1,2,0,2,1,2,1,1,1,2,1,0,2,2,1,1,2,2,1,0,1,2,0,1,1,1,2,1,0,1,0,2,2,2,1,1,1,1,0,0,0,2,1,0,2,2,1,2,0,2,1,0,2,1,1,],[1,1,2,2,1,2,1,0,1,2,0,0,0,1,0,2,0,0,0,0,2,2,0,1,2,1,0,2,0,2,1,0,2,0,0,1,0,0,0,1,2,0,0,2,0,1,0,0,0,2,0,0,1,1,0,0,0,1,1,2,2,1,2,1,0,1,1,1,1,1,1,2,0,0,2,2,0,0,1,0,2,2,0,1,1,2,2,1,2,2,1,2,2,2,1,0,1,2,0,1,],[1,0,2,0,1,0,0,2,1,1,1,0,2,2,2,0,0,1,2,2,1,2,1,2,2,1,2,1,1,1,2,2,2,2,0,0,2,2,2,2,2,0,2,1,2,1,0,0,1,0,0,2,0,0,0,1,2,2,0,2,0,0,0,0,0,2,0,1,2,0,1,1,1,1,0,0,1,0,2,2,1,1,2,2,1,2,0,2,2,1,1,1,2,1,1,2,2,2,2,2,],[0,1,1,0,2,2,2,2,2,0,0,0,0,2,0,1,0,0,2,2,2,1,2,2,2,0,1,1,2,0,0,2,1,0,1,2,2,1,0,1,2,0,2,0,1,1,2,2,2,2,1,0,0,2,2,2,2,0,2,1,1,0,1,1,2,0,1,2,0,1,2,2,2,1,2,0,2,0,0,0,1,2,1,1,0,0,1,0,1,1,2,0,2,0,2,0,2,0,1,1,],[2,0,1,2,0,2,0,0,2,0,2,2,1,2,2,0,1,2,2,0,1,2,2,0,1,1,1,1,0,0,1,2,1,2,0,1,2,1,2,2,0,0,0,0,2,2,1,0,0,1,2,0,2,2,1,0,0,1,2,2,2,1,0,1,0,2,2,0,2,1,1,2,2,1,0,1,2,1,0,0,2,1,0,0,2,1,2,2,0,2,0,0,2,1,1,0,0,1,0,0,],[0,0,2,0,0,2,2,0,0,0,2,1,0,2,2,2,1,1,2,1,1,1,1,0,1,0,0,0,1,1,2,2,2,2,0,0,0,1,1,2,0,0,1,2,2,0,0,1,2,2,1,0,0,2,1,2,2,2,0,0,1,0,0,2,1,2,0,1,1,1,0,1,2,0,0,1,0,0,0,2,2,0,1,2,0,0,0,2,2,1,0,0,1,0,2,1,1,1,2,2,],[1,1,1,2,0,2,0,1,1,0,2,1,0,1,0,2,0,1,2,2,2,0,2,1,1,0,0,2,1,1,2,0,2,1,1,2,2,1,1,2,1,2,1,1,2,1,1,1,1,0,1,0,0,2,2,2,1,1,1,2,0,0,0,2,1,1,2,2,0,2,2,2,2,0,0,0,1,1,0,1,0,2,2,1,0,1,1,0,1,1,0,2,0,0,1,2,1,0,0,0,],[2,0,0,0,1,2,1,1,0,0,2,1,2,0,0,0,1,0,1,2,0,1,0,1,1,2,0,1,2,1,2,1,1,1,2,1,0,2,2,1,0,0,2,1,0,1,0,0,2,0,0,1,0,2,2,0,2,1,0,1,2,2,2,0,1,0,2,0,2,0,1,1,2,2,1,0,0,1,2,0,2,0,1,0,2,2,1,0,1,2,1,1,2,2,0,0,0,1,2,0,],[2,0,2,0,2,1,2,0,1,0,2,2,2,0,0,0,2,2,0,2,2,1,0,1,0,2,1,1,1,0,1,0,2,0,1,2,0,0,0,0,2,1,0,1,0,1,2,1,0,2,0,2,0,1,1,2,1,2,2,1,1,0,2,2,1,1,2,1,1,2,0,0,2,0,1,1,1,1,2,0,2,1,1,1,0,0,1,2,0,1,2,2,1,1,1,2,0,1,1,2,],[2,2,1,0,2,2,0,2,0,0,0,1,0,1,0,0,1,0,0,2,2,1,0,1,2,0,1,0,1,0,1,0,2,2,2,2,0,2,2,0,1,0,2,1,0,2,2,1,2,0,2,2,0,0,1,0,1,2,1,1,2,2,2,2,0,1,2,2,1,2,2,0,1,1,0,1,2,2,0,2,1,0,2,2,0,1,1,1,1,1,0,1,1,1,0,1,2,1,2,1,],[0,1,0,2,1,2,2,1,0,0,0,2,0,2,2,1,1,0,1,0,1,0,0,2,0,2,2,1,2,1,0,2,0,0,0,1,2,1,1,2,1,1,2,2,1,2,1,0,1,1,0,1,1,1,1,2,0,2,0,0,2,1,2,2,0,0,0,2,0,1,1,1,1,0,0,1,2,0,1,2,1,0,0,0,2,1,1,0,0,0,1,1,2,2,0,0,2,0,1,2,],[2,1,1,1,1,0,0,1,0,0,0,2,1,0,0,2,2,2,0,0,2,2,1,1,0,2,1,1,2,0,1,0,0,0,2,1,0,0,1,0,1,1,2,2,1,2,1,2,2,1,2,1,0,2,0,2,0,1,1,0,1,0,2,1,2,1,2,2,1,2,0,1,1,1,0,1,0,1,2,1,2,0,0,2,1,0,0,1,0,0,1,0,0,2,2,1,1,2,0,2,],[0,1,0,2,2,1,0,0,1,0,0,2,1,2,1,1,2,2,1,0,1,0,2,0,0,1,1,1,2,1,2,1,2,0,1,1,2,0,2,0,2,2,2,2,2,2,2,2,0,1,0,2,2,2,1,1,0,0,2,2,0,1,1,1,2,2,1,0,1,1,1,2,2,0,1,1,2,1,0,0,0,0,0,2,0,0,1,0,0,0,1,2,0,1,2,1,1,2,2,0,],[0,0,2,0,1,1,1,0,0,1,2,0,2,2,0,0,2,2,1,0,1,1,1,0,0,0,0,2,2,1,2,2,0,0,2,2,0,0,0,1,1,2,0,0,1,1,2,2,2,0,0,0,2,1,0,2,1,2,0,1,0,0,0,2,0,0,0,1,1,0,0,1,0,2,2,0,1,2,1,2,0,1,2,2,0,0,2,0,2,1,0,0,0,2,0,1,0,1,2,2,],[0,2,1,0,1,0,2,0,0,1,2,2,2,2,1,1,1,2,0,2,1,2,0,2,0,1,1,1,0,1,2,2,1,0,0,2,1,2,0,0,0,2,1,0,0,1,2,0,0,2,1,1,2,0,0,1,2,1,2,1,0,2,0,2,0,2,1,2,1,2,1,1,2,0,1,1,2,2,1,1,1,1,0,1,0,1,2,2,0,0,1,2,1,0,2,0,0,0,1,2,],[1,1,0,0,1,0,2,2,2,2,0,1,1,0,1,2,0,0,0,2,0,0,0,1,0,2,2,0,1,0,0,0,2,2,0,1,0,2,0,2,1,0,0,1,2,2,1,0,2,0,0,0,0,1,1,0,0,2,2,0,2,2,0,2,0,0,1,2,0,1,1,0,1,2,1,1,2,0,1,0,0,1,0,1,2,1,0,1,2,2,2,0,0,2,2,1,1,2,0,2,],[1,0,1,0,1,0,2,2,1,2,1,2,1,0,2,2,0,0,2,1,0,2,1,2,2,0,2,2,0,2,1,2,2,1,1,1,0,0,0,2,1,1,1,0,1,2,2,1,2,1,1,2,1,1,0,2,2,2,1,0,1,2,0,2,2,0,2,1,1,1,2,2,2,1,1,2,2,1,0,0,1,1,2,0,0,1,2,1,0,2,2,1,1,2,1,2,2,2,0,1,],[2,0,0,2,0,1,1,1,0,1,2,1,1,0,0,0,0,1,0,2,2,2,0,2,1,1,1,0,2,2,2,1,1,1,2,0,0,2,0,0,0,0,0,2,1,0,1,1,2,0,0,0,1,0,0,2,0,0,0,0,2,2,1,1,2,2,0,1,2,2,2,2,2,0,1,1,2,2,1,0,2,2,1,1,2,1,0,0,2,1,2,0,1,2,2,2,0,2,0,0,],[0,1,2,1,2,2,2,2,0,1,1,1,0,1,1,2,0,1,2,1,2,2,0,0,2,1,0,1,2,0,0,2,0,1,1,1,2,0,0,2,0,1,2,2,1,1,2,1,2,1,0,1,0,0,1,1,1,0,0,0,2,1,2,1,2,2,0,2,2,0,0,0,2,0,2,2,0,0,1,2,1,2,1,1,2,1,2,1,1,2,0,0,0,0,1,0,0,2,0,2,],[0,2,0,2,2,2,1,1,1,1,0,0,2,0,1,2,2,0,0,0,0,1,0,2,2,1,1,2,2,2,0,1,2,1,0,1,1,0,0,2,0,0,2,0,0,0,1,1,1,1,0,1,0,2,2,2,2,1,1,1,2,0,1,0,0,2,2,1,2,1,1,2,0,0,2,1,0,1,0,2,1,0,2,0,2,0,0,2,0,0,0,2,0,0,2,1,0,2,1,2,],[1,0,0,0,2,2,1,2,1,0,0,1,1,1,1,1,2,0,1,2,0,0,2,2,1,1,1,0,2,0,2,1,2,0,0,1,1,2,2,0,1,2,2,1,2,1,0,2,1,2,0,1,1,1,2,1,1,2,1,2,1,2,1,0,0,0,2,0,0,2,0,2,2,1,1,0,2,2,1,1,2,1,1,1,1,0,2,1,2,2,2,1,2,0,1,0,1,2,1,1,],[1,2,0,2,0,1,0,2,1,0,2,1,0,0,2,1,1,2,1,0,1,1,1,2,1,2,1,0,0,0,0,2,2,1,1,2,0,1,2,1,1,0,0,0,1,2,0,1,1,1,0,2,1,0,1,0,0,0,1,2,1,2,2,1,1,2,0,1,2,2,2,0,1,0,0,0,0,0,1,2,0,0,2,1,0,1,2,0,0,0,0,0,2,0,2,2,0,0,0,1,],[1,1,2,0,1,2,1,2,2,0,0,2,2,2,0,2,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,2,2,2,0,2,2,0,2,0,2,2,2,2,1,2,2,1,1,0,2,1,2,1,2,2,2,0,1,2,2,1,2,2,0,0,2,0,0,0,2,0,0,2,2,2,2,0,2,2,1,1,2,1,1,2,1,0,0,1,2,0,2,2,1,1,2,1,],[1,0,1,2,2,0,1,2,2,0,0,0,0,1,0,0,0,0,0,1,0,1,2,1,2,1,0,0,1,0,1,1,0,2,2,1,0,0,0,0,1,0,0,2,2,2,1,2,2,0,1,2,2,2,0,2,2,2,0,2,0,2,2,0,1,1,2,1,0,2,0,2,2,0,2,2,1,2,2,1,0,2,2,1,1,1,1,2,1,0,0,1,0,2,1,1,1,1,2,2,],[1,2,2,1,1,1,0,1,1,1,1,1,1,0,2,2,1,0,2,0,1,2,1,1,1,0,0,1,0,0,0,1,1,2,0,1,2,2,2,1,2,0,2,0,1,0,1,1,1,1,0,1,2,1,2,0,1,2,1,2,0,0,2,0,0,1,1,1,0,0,1,0,1,0,1,2,2,2,2,1,2,1,1,1,0,0,1,0,0,1,0,1,0,2,1,0,1,0,1,2,],[0,1,0,2,2,2,0,2,0,0,2,2,0,2,1,0,2,2,2,2,0,2,0,0,2,2,0,2,2,0,0,0,2,2,1,2,1,2,2,0,2,0,0,1,0,2,2,2,1,0,2,0,1,1,0,0,2,0,2,1,2,1,1,0,0,1,1,0,2,0,0,2,2,2,1,1,2,1,2,0,0,1,0,2,1,2,0,2,2,1,1,2,0,1,1,0,2,0,0,2,],[0,0,0,0,2,0,1,0,0,2,0,0,2,1,2,1,2,2,0,0,1,2,0,2,2,2,1,0,1,1,1,2,0,1,0,2,0,0,1,1,1,2,2,1,0,0,1,2,2,0,1,2,1,1,1,0,1,0,0,0,2,2,2,0,0,2,2,2,0,0,0,0,1,2,2,0,2,0,2,0,1,1,2,2,1,2,1,1,1,2,2,1,1,2,1,1,1,2,0,1,],[2,0,2,0,2,0,0,0,1,2,0,1,1,2,0,1,2,0,1,0,0,1,0,2,0,1,1,2,2,2,1,0,0,2,2,0,1,0,1,2,1,1,0,0,1,0,1,2,0,2,0,2,2,1,1,2,2,2,0,2,0,0,1,1,1,1,0,0,1,2,2,2,1,2,0,0,2,0,2,1,1,1,2,1,1,0,0,2,2,2,0,1,1,1,1,0,1,0,0,1,],[1,1,2,1,1,1,0,2,2,0,1,2,0,1,2,1,1,1,1,0,2,2,1,1,0,2,0,0,0,1,1,0,1,2,2,0,0,2,0,0,2,1,2,0,0,0,2,1,2,2,2,0,0,0,1,0,2,1,1,1,2,2,2,0,0,1,2,2,1,2,0,2,1,0,2,1,2,0,2,0,1,1,0,2,0,0,2,1,2,2,0,0,2,1,1,1,0,2,1,0,],[2,2,1,2,2,2,0,2,0,0,2,1,2,1,0,0,2,0,2,2,1,1,2,1,0,2,0,1,1,0,0,2,2,0,1,1,0,1,0,1,2,2,0,2,0,2,0,1,2,2,1,0,1,1,1,1,1,0,2,0,1,2,0,2,0,1,0,0,1,2,1,2,1,0,1,0,0,0,1,0,2,2,1,0,1,1,2,1,1,1,1,1,1,0,1,0,1,0,2,1,],[0,2,1,0,1,0,0,1,2,1,0,1,0,0,1,1,0,0,2,1,1,0,2,1,0,0,0,0,1,1,1,1,2,0,0,2,0,0,1,2,0,2,0,1,0,1,0,0,0,0,1,0,0,2,0,2,2,1,1,1,0,1,0,1,2,1,2,0,0,1,0,0,2,2,1,2,0,1,2,2,1,0,0,0,0,0,0,1,0,1,2,2,2,0,1,0,1,0,2,2,],[1,0,0,2,0,0,0,2,1,2,1,2,1,2,0,0,1,2,2,1,1,2,1,2,2,1,0,2,0,0,0,2,1,0,0,0,1,2,1,2,0,1,2,1,0,2,1,1,0,1,2,2,2,2,0,1,2,0,0,1,2,0,0,2,2,0,0,1,1,2,1,1,1,2,1,1,1,0,0,2,2,0,1,1,0,2,1,2,2,0,0,2,0,2,1,1,2,2,0,0,],[2,1,1,1,1,0,1,1,1,0,1,0,2,1,2,2,0,1,2,1,2,2,2,0,1,0,0,1,1,0,0,2,1,2,1,1,2,2,2,1,1,1,2,1,1,0,2,0,2,1,2,1,1,0,0,2,2,1,2,2,2,1,0,0,1,1,2,2,2,2,1,2,1,1,1,2,2,1,0,2,0,0,1,2,0,0,0,1,2,2,1,1,1,0,1,2,2,1,1,1,],[1,0,1,2,2,1,0,0,2,0,2,1,2,2,1,1,2,0,1,0,0,1,2,2,0,1,2,2,0,2,2,0,2,1,0,0,0,2,2,1,1,0,0,0,2,1,1,2,2,2,1,1,2,1,1,0,2,2,0,2,1,0,0,1,0,0,2,2,2,2,0,2,1,2,2,0,0,2,0,0,2,0,0,2,1,1,0,1,1,2,2,2,1,1,1,0,2,2,0,0,],[0,0,0,0,1,0,2,1,1,2,0,0,0,0,2,0,1,1,2,2,0,1,1,0,0,0,1,2,0,2,2,1,0,1,0,1,1,1,0,1,1,0,1,0,2,0,2,2,1,0,1,0,2,2,1,2,2,0,1,0,2,0,0,0,0,2,2,1,2,0,0,2,2,0,1,2,0,2,1,1,1,0,0,0,0,1,0,2,1,2,2,0,0,1,1,1,1,1,0,2,],[0,2,2,1,0,0,0,2,1,0,0,2,2,1,1,2,1,1,1,0,1,0,1,1,2,1,1,2,0,2,2,1,0,0,0,1,1,0,2,2,1,2,1,2,1,1,1,1,0,2,2,1,0,0,2,1,0,2,0,1,0,2,2,2,2,1,1,2,2,0,2,0,1,2,0,2,1,2,0,1,0,2,0,1,2,2,1,1,2,1,2,1,2,0,0,2,2,1,1,1,],[0,1,2,2,2,1,2,0,2,2,0,0,0,2,1,1,1,0,1,0,2,1,1,1,1,1,2,2,1,0,1,1,2,2,1,2,0,1,1,2,1,2,2,1,0,0,0,1,1,2,1,2,2,0,2,0,2,2,1,0,2,0,2,2,2,1,2,0,0,0,1,2,1,0,2,1,0,1,2,1,2,0,1,2,0,2,0,1,2,2,2,1,0,0,0,1,2,0,1,0,],[2,2,2,1,1,1,1,1,1,2,0,1,2,1,1,2,2,1,2,2,0,2,2,1,1,1,0,2,1,1,2,0,1,0,1,0,2,2,0,0,2,2,1,0,1,1,1,2,2,2,0,1,0,0,0,1,0,2,0,1,0,2,1,2,1,1,2,0,2,0,2,2,2,2,2,0,1,1,1,2,1,0,0,2,1,1,2,2,2,2,2,1,2,2,0,1,0,0,2,1,],[1,0,0,1,1,0,1,2,1,1,0,1,1,1,0,2,0,2,0,0,1,1,2,0,1,1,1,2,1,1,1,1,0,0,1,2,1,2,1,1,0,1,2,0,2,0,0,1,2,2,1,0,2,1,1,2,0,0,2,1,0,0,0,0,2,1,1,2,1,2,1,1,2,2,0,2,0,2,2,2,2,0,0,1,1,2,1,2,2,0,2,2,1,2,2,0,2,1,1,1,],[1,1,2,2,0,1,0,1,0,1,2,2,0,1,2,0,0,0,1,2,2,0,0,2,0,1,0,1,2,0,2,1,2,1,2,0,0,1,0,0,2,2,2,2,2,0,2,1,1,0,0,2,0,1,0,0,1,2,1,2,2,1,1,0,1,1,1,2,2,1,2,1,0,1,1,1,1,1,0,0,1,1,2,0,0,1,1,2,2,0,2,2,1,2,2,2,0,1,0,1,],[2,1,2,1,1,0,2,2,2,2,2,0,1,0,1,1,0,1,1,1,1,2,1,0,1,1,2,2,0,1,2,1,0,0,0,0,2,0,1,2,0,1,0,1,2,0,2,1,0,0,0,0,1,2,0,2,0,2,2,2,0,1,1,0,1,2,0,0,0,1,1,2,0,1,1,1,1,2,2,0,0,1,2,1,0,1,2,1,0,0,2,2,1,2,0,2,2,1,0,1,],[2,1,1,0,0,0,1,1,1,0,2,1,0,0,2,1,0,0,2,2,1,1,2,2,2,1,1,1,2,0,2,2,0,1,0,2,2,2,2,0,1,1,2,2,2,0,2,2,0,0,0,0,1,1,2,0,0,0,2,2,0,1,2,1,0,1,1,0,1,2,0,1,1,1,2,2,1,0,0,0,0,1,0,2,1,2,0,1,0,2,1,2,0,0,0,0,0,1,1,2,],[2,2,0,1,0,1,0,2,0,0,1,1,1,0,1,1,2,2,0,2,0,0,2,1,2,1,0,0,0,0,1,0,1,2,2,0,0,2,0,0,1,2,1,1,0,1,1,0,2,1,1,1,2,2,0,1,0,1,0,1,1,1,0,1,0,0,0,2,0,1,2,0,0,0,1,0,0,1,1,0,0,1,2,1,0,2,1,1,0,2,2,2,1,1,0,1,0,0,2,0,],[1,1,1,2,0,2,0,0,1,2,2,0,1,1,1,2,2,2,2,1,1,1,0,0,0,1,1,0,2,0,1,0,1,0,2,0,2,2,1,1,2,0,2,0,0,2,2,1,1,0,0,2,1,2,1,2,0,1,0,1,0,0,1,0,1,2,2,1,2,1,0,1,1,2,0,2,1,2,1,0,0,1,2,1,0,1,0,2,2,1,0,2,1,1,1,2,0,0,1,2,],[2,2,2,0,2,1,1,0,2,2,2,0,2,2,2,2,1,0,1,1,2,2,1,1,1,0,2,2,2,0,1,1,1,2,1,2,1,0,1,1,2,0,1,1,1,2,2,1,2,2,2,1,0,1,0,1,0,0,2,2,2,2,2,2,1,2,0,0,0,2,0,1,2,1,2,1,1,1,0,0,2,0,0,0,1,0,2,0,0,0,1,0,0,2,1,0,2,0,2,1,],[2,2,1,2,0,1,2,2,2,0,0,2,2,1,0,0,1,2,2,2,1,2,1,2,2,0,1,1,1,0,0,2,0,1,2,1,2,1,0,2,2,2,1,2,0,1,2,2,0,2,2,2,1,0,1,1,1,0,0,1,1,0,1,2,2,0,0,2,0,1,0,0,2,2,0,2,2,1,2,2,2,2,2,1,2,0,2,0,0,1,0,0,2,0,0,2,0,1,2,2,],[2,0,0,2,2,2,1,0,0,0,2,1,1,2,1,2,0,2,0,0,0,0,2,1,1,1,1,1,0,2,2,2,1,1,1,0,1,1,1,1,0,1,2,1,2,2,2,0,2,1,1,1,1,1,0,1,1,1,1,2,2,0,2,0,1,0,1,0,1,0,2,2,0,1,0,1,1,0,1,1,1,1,2,0,2,2,2,2,0,2,0,2,0,2,0,0,1,1,1,0,],[1,1,0,1,0,0,2,1,1,0,1,2,0,0,1,2,2,2,0,1,1,0,1,2,2,0,2,2,0,1,1,1,1,2,2,1,0,0,0,0,2,0,0,0,2,2,1,1,2,0,2,0,2,0,1,1,2,2,2,0,2,0,1,0,2,1,2,0,2,0,1,1,0,1,2,0,1,2,0,0,2,1,2,2,2,1,2,2,1,2,2,0,2,1,0,2,0,2,2,0,],[2,2,2,0,1,1,2,0,1,0,0,0,2,1,1,2,2,2,0,0,2,0,2,2,2,2,2,1,1,0,2,1,1,2,2,0,2,2,1,2,2,2,2,1,2,1,0,2,1,1,2,1,1,0,0,0,1,1,2,2,2,1,0,1,2,0,2,1,2,1,1,2,2,0,0,1,0,2,0,2,2,2,0,0,1,0,2,2,2,2,0,1,1,0,1,0,1,2,2,2,],[1,0,1,2,1,2,2,1,2,1,0,2,1,1,1,0,2,0,2,1,2,0,1,0,0,2,2,2,2,1,2,0,2,2,1,2,1,2,2,2,1,1,0,1,0,0,1,1,2,0,2,1,0,0,2,1,0,0,1,0,1,0,1,2,1,2,1,2,0,1,2,0,2,2,2,1,1,2,0,0,1,1,0,1,2,2,1,1,1,1,1,0,1,0,0,1,0,2,1,2,],[1,0,0,2,2,0,2,1,1,2,2,0,1,2,0,2,0,2,2,0,1,0,1,0,1,0,2,1,0,2,0,0,0,0,1,0,1,2,0,1,2,0,2,1,1,2,2,0,1,1,2,0,2,2,0,2,2,2,1,1,0,2,0,0,2,2,0,1,0,2,1,1,1,2,1,1,1,1,2,0,2,1,2,2,1,0,0,2,0,2,1,2,2,0,2,1,1,0,2,0,],[2,0,1,1,0,0,2,0,2,2,2,0,2,0,2,2,2,1,2,2,1,1,1,2,0,2,0,2,0,1,2,2,1,2,1,2,1,2,2,1,2,2,2,2,2,2,0,2,1,0,1,0,2,1,0,2,0,0,0,0,0,0,2,1,1,2,1,2,0,2,1,1,1,1,2,2,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,2,1,],[1,2,1,1,0,1,1,0,0,0,1,2,0,0,2,2,0,2,2,1,0,2,0,1,1,0,0,0,1,1,2,0,2,1,2,2,0,0,0,0,0,1,0,0,2,0,0,1,1,2,1,0,2,1,0,2,1,2,2,2,2,0,0,1,0,2,1,2,1,2,2,1,1,0,2,2,0,1,2,2,1,2,2,2,1,1,2,1,1,0,1,1,1,1,2,1,0,0,1,1,],[0,2,1,1,1,1,0,0,1,1,0,0,0,0,1,2,0,1,1,1,0,2,2,0,2,2,2,2,0,1,1,1,0,0,0,0,2,2,0,2,0,1,0,1,2,0,2,0,2,1,0,0,1,1,2,1,1,2,0,2,1,1,1,2,1,1,1,1,2,1,0,1,1,1,0,1,2,0,1,0,0,0,0,1,1,0,2,2,1,2,1,0,0,0,2,1,1,2,0,2,],[2,2,1,2,0,2,2,2,2,0,1,0,0,1,0,1,2,1,0,1,0,2,1,0,2,0,2,1,0,2,2,0,1,1,0,0,2,2,2,2,1,1,0,1,1,0,2,0,2,0,0,0,0,1,2,2,0,0,1,2,1,2,0,0,0,0,2,1,2,2,2,0,1,0,0,1,1,0,2,2,2,2,2,1,2,2,1,2,1,1,2,2,0,2,1,0,1,1,1,1,],[0,2,0,1,2,0,2,0,1,1,2,0,1,0,2,0,1,2,2,2,0,2,2,1,2,0,1,0,0,0,2,1,0,1,2,1,1,1,1,1,2,1,2,0,2,0,1,1,2,1,1,2,1,2,2,0,2,2,2,1,0,1,0,2,2,0,2,0,1,0,0,0,0,2,0,2,1,2,1,1,1,0,1,0,2,2,2,2,1,1,2,0,1,0,0,1,1,0,2,1,],[0,0,1,0,1,1,1,0,0,1,0,0,2,0,2,1,1,2,0,2,1,1,0,2,0,1,0,2,0,2,0,0,2,0,2,0,0,0,0,2,1,1,2,2,2,0,2,0,2,1,2,0,2,1,0,1,1,0,2,1,1,2,1,2,2,2,2,0,0,2,1,0,1,2,1,2,0,0,0,2,2,0,0,0,2,0,2,0,0,1,2,1,2,1,2,2,1,0,0,2,],[0,0,0,1,1,2,2,2,1,2,0,0,2,0,2,2,0,1,0,1,0,1,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,2,2,2,0,0,1,2,1,0,0,2,0,1,1,2,2,2,1,2,2,2,1,1,0,2,2,1,1,2,0,2,1,1,2,2,1,1,0,0,0,2,0,2,2,2,1,2,0,1,2,1,2,2,0,0,0,1,],[1,2,0,1,0,1,2,2,2,0,0,2,1,2,0,1,1,0,2,1,0,0,0,2,2,1,0,1,1,0,1,1,2,2,1,2,0,1,2,0,2,1,2,2,0,1,2,2,0,0,1,0,2,2,1,2,2,0,1,0,0,0,2,2,0,0,0,1,2,2,1,0,1,0,0,1,0,2,1,1,0,2,1,0,2,1,2,1,0,0,1,0,1,2,2,2,2,1,0,0,],[1,2,2,1,2,0,1,0,0,1,0,1,1,2,0,1,2,2,0,2,2,2,2,1,0,1,1,2,0,0,1,1,2,2,0,1,1,2,2,1,2,2,0,2,2,2,2,2,1,1,0,2,2,1,1,1,0,1,0,0,1,1,1,0,2,2,1,0,1,2,2,1,2,2,2,0,0,0,0,1,1,0,1,1,0,0,1,2,0,0,1,2,0,0,1,1,0,1,1,1,],[0,2,2,2,2,1,1,0,1,0,2,1,0,2,2,0,0,2,2,1,2,0,0,2,1,2,1,0,2,1,2,1,0,0,2,2,0,0,0,1,0,2,0,0,1,2,0,1,2,1,0,2,0,1,0,1,1,2,1,0,2,0,1,2,0,0,2,1,2,2,1,0,1,1,2,1,0,1,1,2,1,1,1,1,0,0,2,1,2,0,0,1,0,0,0,1,1,2,0,2,],[1,1,1,0,0,2,1,0,0,2,0,1,0,2,1,0,1,1,1,2,2,0,2,2,0,2,1,1,2,1,0,2,2,2,1,2,1,2,1,0,1,1,0,0,2,1,1,0,1,1,2,0,2,2,1,1,2,0,0,0,2,1,2,0,1,0,2,1,2,0,2,0,1,1,1,0,0,2,1,0,1,2,0,2,0,2,0,2,1,1,2,1,2,0,1,0,2,2,1,1,],[2,0,2,0,0,1,0,2,1,0,2,2,1,1,0,0,0,2,2,1,1,1,1,2,2,1,1,1,2,0,1,1,2,2,1,1,0,1,0,2,2,1,0,0,1,0,1,1,0,2,2,0,1,0,2,2,0,2,2,0,2,0,2,2,0,1,1,1,1,2,0,0,0,2,0,0,1,0,1,1,2,2,1,1,0,1,2,1,0,1,1,2,2,0,0,2,1,0,2,2,],[2,1,1,0,2,0,0,0,1,1,2,0,1,0,2,0,2,1,0,1,1,0,2,1,0,1,0,0,2,2,0,0,1,0,0,1,2,2,0,2,1,2,0,0,0,0,0,2,0,0,0,1,1,1,1,2,2,0,1,0,1,1,2,1,1,1,2,1,1,2,0,2,0,1,1,2,2,0,0,2,0,0,0,2,2,1,1,0,2,0,1,1,2,1,1,2,1,1,2,0,],[0,1,0,0,0,0,2,0,0,0,2,0,1,1,1,2,0,1,2,2,1,1,1,1,1,2,0,2,1,1,0,1,2,1,1,1,1,0,2,0,2,1,0,2,1,0,2,1,2,2,0,0,2,0,0,1,2,2,2,1,2,2,2,0,1,1,2,2,2,2,2,2,2,0,1,0,1,1,2,2,0,0,2,1,2,2,2,0,0,1,2,1,0,1,1,0,0,1,0,2,],[0,1,0,1,1,1,2,0,2,2,2,1,1,2,0,2,0,1,0,2,1,2,0,0,0,2,2,1,1,2,0,2,2,2,2,1,1,0,1,0,1,1,0,0,0,0,2,0,0,0,2,1,1,1,2,1,0,1,0,2,1,1,2,2,1,2,2,1,0,0,1,1,1,2,1,2,1,2,0,1,1,2,0,1,1,1,0,0,1,0,2,0,2,2,1,2,2,0,2,0,],[1,0,0,0,1,0,2,2,2,1,1,1,0,1,1,0,2,1,1,2,2,1,0,2,2,1,1,0,2,1,0,2,2,1,2,1,2,0,1,2,1,0,2,0,1,1,2,2,2,1,1,1,2,0,1,2,0,2,1,0,2,0,1,0,2,0,1,0,0,0,0,2,1,0,0,0,0,1,1,2,0,2,0,1,2,2,0,0,1,1,0,0,1,1,0,0,1,1,1,1,],[1,1,0,2,0,0,2,1,2,1,1,2,0,2,1,0,2,2,0,0,0,1,2,2,2,0,0,0,1,1,0,2,2,1,1,1,0,0,1,1,1,0,0,1,1,2,2,1,0,1,0,0,2,1,1,0,1,0,0,2,0,2,0,2,2,2,1,1,1,2,1,2,2,1,1,2,0,0,2,1,0,0,1,2,2,0,2,1,0,1,0,2,1,1,0,1,0,0,1,0,],[2,2,0,2,0,2,2,2,1,1,2,2,1,1,0,0,0,2,0,1,0,0,0,1,2,1,1,2,0,1,0,0,1,2,0,0,2,1,1,0,2,1,0,1,0,1,0,1,1,2,1,2,0,2,2,0,1,0,1,1,2,2,1,0,0,0,1,0,2,2,1,2,1,1,1,0,1,1,2,1,2,0,0,0,1,1,1,0,1,2,0,0,0,2,1,1,2,2,0,2,],[1,2,0,1,0,0,0,1,1,0,1,0,2,1,0,0,2,1,1,2,2,1,2,1,2,1,0,0,1,1,0,1,0,1,2,0,0,1,2,0,2,2,2,0,1,2,0,2,2,1,1,0,2,2,1,0,0,2,0,1,1,2,2,0,2,1,1,1,1,2,0,2,2,2,1,0,0,1,2,1,1,1,0,2,2,2,0,0,1,0,0,1,2,0,1,0,2,2,0,1,],[0,1,0,1,1,1,0,1,1,1,2,2,1,0,1,1,1,0,1,0,0,2,0,2,2,2,2,2,2,1,0,2,2,2,2,1,1,1,2,0,2,1,1,0,0,0,2,2,2,1,2,1,2,2,0,2,0,1,1,2,0,1,2,1,2,0,2,1,1,0,2,0,0,0,0,1,0,1,2,2,1,2,2,1,0,2,2,2,2,2,0,0,2,0,2,1,2,0,2,0,],[1,1,2,2,0,2,2,2,2,0,0,0,0,1,2,0,1,1,0,1,2,1,2,1,0,2,0,0,2,1,2,0,0,0,0,2,1,0,2,1,2,1,2,1,2,2,0,0,0,2,2,0,1,1,1,1,0,1,0,1,2,2,0,0,1,0,2,2,1,0,0,1,0,2,1,1,2,2,1,2,1,2,1,2,2,0,1,1,0,1,2,2,2,1,0,0,2,0,0,1,],[1,2,1,0,0,1,1,0,0,2,0,2,0,2,2,1,0,1,0,0,0,1,2,2,1,1,2,1,2,0,0,0,1,1,2,0,1,1,0,2,0,1,0,1,2,2,1,2,2,1,0,2,0,1,2,1,0,0,1,2,1,1,2,0,1,2,0,2,2,2,1,1,2,1,2,2,2,2,2,2,0,0,0,0,0,2,2,0,0,1,0,1,1,2,0,0,1,0,1,1,],[0,2,0,0,2,2,2,1,2,0,1,2,1,0,1,1,1,0,2,0,0,1,1,2,2,0,0,1,0,0,1,1,2,1,1,2,2,2,0,2,1,0,1,0,0,1,1,2,2,2,2,1,1,1,0,1,1,2,0,1,2,0,0,1,0,0,1,1,1,2,0,0,0,2,1,0,0,1,1,0,1,0,0,1,1,2,1,0,1,0,0,1,0,2,1,2,2,1,2,0,],[0,2,1,0,0,0,2,2,2,2,1,1,0,0,0,1,1,1,1,0,2,2,1,0,1,0,1,2,0,1,2,0,2,0,2,0,1,0,2,1,2,0,1,2,1,1,1,0,2,0,0,0,2,2,1,1,1,0,1,0,1,0,0,1,0,1,2,0,0,2,0,1,2,0,0,2,1,2,0,1,0,2,1,1,0,0,0,1,0,2,0,2,0,0,2,2,1,1,0,0,],[2,1,2,2,2,1,1,1,0,2,1,0,2,0,0,1,2,2,0,2,0,0,0,2,2,0,1,0,1,2,2,0,0,2,0,1,2,0,0,1,0,0,0,1,0,1,2,1,1,0,1,2,0,1,1,0,2,0,2,2,2,0,2,2,2,2,0,2,2,1,1,2,0,0,0,1,1,1,1,0,2,2,2,0,1,1,1,0,0,1,2,2,1,0,2,2,1,2,1,1,],[2,0,0,1,1,0,0,2,0,2,2,0,1,2,0,1,0,0,0,0,0,2,0,2,2,2,0,1,1,1,1,1,0,2,1,1,0,0,0,0,0,1,2,2,0,0,0,1,0,0,1,1,0,2,2,0,2,2,2,1,2,0,2,0,2,1,2,0,2,1,2,0,1,1,1,2,0,1,0,0,2,2,0,0,2,2,1,0,0,0,2,0,2,0,0,1,0,2,1,0,],[0,0,2,0,2,1,1,1,2,0,0,1,2,0,1,0,1,1,2,2,1,1,2,0,2,1,2,1,0,2,1,0,2,2,0,2,1,0,0,2,2,2,0,1,0,0,1,2,2,0,2,0,0,2,0,1,0,0,0,2,1,0,1,2,2,0,0,2,0,2,0,0,2,2,1,0,0,0,2,2,2,2,1,1,0,0,2,2,2,1,2,0,0,2,1,2,0,2,2,2,],[0,0,2,2,1,1,1,0,1,2,1,0,2,0,0,1,1,1,0,1,0,1,0,1,0,1,1,2,1,0,1,0,2,0,1,2,2,2,1,0,1,0,0,0,2,1,0,1,0,0,0,1,0,1,0,2,0,2,2,0,2,0,1,1,2,2,0,0,0,0,0,2,1,2,0,0,1,2,1,2,0,0,2,1,0,2,1,1,1,0,2,1,1,2,0,1,1,2,2,1,],[1,0,0,1,2,1,1,2,1,1,2,0,2,1,2,0,1,2,2,0,1,0,2,0,2,1,1,0,2,0,2,0,2,0,2,0,1,1,0,2,2,2,2,0,0,1,2,1,0,2,1,2,1,2,2,1,0,1,1,2,2,1,0,1,0,2,1,1,2,2,1,1,1,2,0,0,2,1,1,0,0,1,2,2,1,0,2,2,0,2,0,1,2,2,0,0,0,0,1,0,],[0,0,1,1,0,1,0,2,0,0,1,1,1,1,1,2,1,0,0,1,1,0,2,2,2,0,2,2,0,2,2,1,0,1,1,2,0,0,1,2,0,2,0,0,0,1,0,1,0,1,0,0,1,0,1,2,0,2,1,1,1,2,1,0,0,1,0,0,2,0,2,2,0,1,2,2,1,1,0,1,2,1,0,2,0,1,2,1,1,2,1,0,1,1,0,0,0,0,2,1,],[0,0,2,2,2,0,0,1,0,1,2,0,1,2,1,1,2,2,1,2,0,2,1,1,1,0,2,1,2,2,0,2,1,1,1,1,2,1,0,1,2,1,2,0,0,2,1,2,0,1,0,2,2,2,1,0,2,2,2,0,2,2,0,0,2,0,0,1,1,2,2,1,2,2,2,1,1,1,0,0,0,0,0,0,2,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,],[1,1,0,0,1,2,0,1,0,2,1,1,2,2,2,2,1,0,2,0,1,0,2,0,2,0,0,1,1,2,2,2,0,2,0,0,1,2,0,1,2,1,0,2,1,1,0,0,1,0,1,0,2,0,1,0,1,1,1,1,1,1,0,1,1,1,2,0,2,0,1,0,2,2,1,0,1,2,2,0,2,1,2,0,2,0,1,2,2,1,2,2,0,0,1,2,0,2,0,0,],[0,2,0,0,0,2,2,0,2,0,0,0,0,2,0,0,2,2,0,0,2,1,2,0,1,0,0,2,2,0,0,1,2,0,1,0,2,1,1,1,2,2,0,1,1,1,0,2,2,0,0,2,0,1,1,0,2,1,0,2,1,1,2,0,1,0,0,0,2,1,2,1,1,1,0,2,1,1,2,2,2,1,0,1,0,1,0,1,0,2,2,0,0,0,1,1,0,0,2,0,],]

const cCAVE_MAP = [[[23,17], 
                [['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'], 
                ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'], 
                ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'], 
                ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'], 
                ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'], 
                ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'], 
                ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x'], 
                ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x'], 
                [' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' '], 
                [' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], 
                [' ', 'x', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', 'x', ' ', ' ', ' ', 'x', ' ', 'x', 'x', ' ', ' ', ' ', ' '], 
                ['x', 'x', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' '], 
                ['x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x', ' ', ' ', 'x', 'x', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', 'x', 'x'], 
                ['x', 'x', 'x', 'x', 'x', 'x', ' ', 'x', ' ', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'], 
                ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', 'x', 'x', 'x', 'x', ' ', 'x', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', 'x', 'x', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', 'x', 'x', 'x', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'], 
                ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', 'x', 'x', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'], 
                ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', 'x', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'], 
                ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'], 
                ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', 'x', ' ', 'x', ' ', 'x', 'x', 'x', ' ', 'x', ' ', 'x', ' ', 'x', ' ', 'x', ' ', 'x', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', 'x', 'x', 'x', ' ', 'x', 'x', 'x', ' ', 'x', 'x', 'x', 'x', 'x'], 
                ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'], 
                ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']]],
                [[17,18],
                [['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'], 
                ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'], 
                ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'], 
                ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', 'x', 'x', ' ', ' ', ' ', ' ', 'x', 'x', ' ', 'x', ' ', 'x', 'x', 'x'], 
                ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', 'x', ' ', ' ', 'x', 'x'], 
                ['x', 'x', 'x', 'x', 'x', 'x', ' ', 'x', 'x', ' ', ' ', 'x', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'], 
                [' ', ' ', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', ' ', ' ', 'x', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], 
                [' ', ' ', ' ', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', 'x', ' ', 'x', 'x', ' ', ' '], 
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', 'x', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', 'x', 'x', 'x', 'x'], 
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', ' ', 'x', 'x', 'x', 'x', 'x', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'], 
                ['x', 'x', ' ', 'x', 'x', 'x', ' ', 'x', ' ', 'x', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', 'x', 'x', 'x', 'x', 'x', ' ', 'x', ' ', 'x', ' ', 'x', 'x', 'x', ' ', 'x', ' ', 'x', 'x', 'x', ' '], 
                ['x', ' ', 'x', ' ', 'x', ' ', 'x', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'], 
                ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']]]
]

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

const cCREATURE_INFO = {"Tomato Bunny":[[TomatoBunny1Img,TomatoBunny2Img,],10.0,0.05,5.0,"This is a bunny disguised as a tomato"]};

const cSPAWNING_INFO = {'M': ['Tomato Bunny'], 'G': ['Tomato Bunny'], 'B': ['Tomato Bunny'], 'W': ['Tomato Bunny']};
let town_locs = [["Gensaka",[7, 7],[['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'S', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'G', 'G', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'B', 'B', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'B', 'W', 'W', 'B', 'H', 'G', 'G'], ['G', 'G', 'G', 'B', 'W', 'W', 'B', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'B', 'B', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'G', 'G', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'G', 'G']],[[2, 1, 2, 2, 1, 0, 0, 2, 1, 1], [0, 1, 2, 2, 0, 0, 0, 1, 2, 1], [2, 1, 1, 1, 1, 2, 1, 3, 0, 1], [0, 1, 0, 1, 1, 1, 2, 1, 1, 2], [1, 2, 2, 0, 2, 1, 0, 0, 2, 0], [0, 1, 1, 1, 2, 0, 1, 0, 1, 2], [0, 4, 0, 0, 1, 0, 2, 3, 1, 1], [2, 0, 2, 0, 0, 2, 0, 1, 0, 2], [1, 4, 1, 2, 1, 1, 0, 0, 2, 0], [2, 0, 2, 0, 0, 1, 0, 1, 2, 2]],[['Swan', [2, 1]], ['Gardora', [2, 7]], ['Swan', [4, 1]], ['Swan', [4, 7]], ['Gardora', [6, 1]], ['Gardora', [6, 7]], ['Swan', [8, 1]], ['Gardora', [8, 7]]], false],["Ukan",[52, 78],[['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'S', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'G', 'G', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'B', 'B', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'B', 'W', 'W', 'B', 'H', 'G', 'G'], ['G', 'G', 'G', 'B', 'W', 'W', 'B', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'B', 'B', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'H', 'G', 'G', 'G', 'G', 'G', 'H', 'G', 'G'], ['G', 'G', 'G', 'G', 'X', 'G', 'G', 'G', 'G', 'G']],[[1, 1, 1, 0, 1, 0, 1, 2, 1, 0], [2, 0, 1, 1, 1, 0, 2, 2, 0, 1], [0, 4, 0, 2, 1, 2, 1, 4, 2, 2], [1, 2, 0, 2, 0, 0, 0, 1, 1, 1], [0, 4, 0, 1, 1, 1, 2, 1, 1, 0], [1, 0, 1, 1, 2, 1, 2, 2, 2, 2], [0, 0, 1, 1, 2, 0, 2, 4, 1, 0], [2, 2, 0, 0, 1, 0, 0, 1, 2, 2], [0, 1, 2, 0, 1, 0, 2, 4, 0, 2], [0, 1, 2, 2, 0, 0, 2, 1, 0, 2]],[['Swan', [2, 1]], ['Swan', [2, 7]], ['Gardora', [4, 1]], ['Swan', [4, 7]], ['Gardora', [6, 1]], ['Swan', [6, 7]], ['Swan', [8, 1]], ['Swan', [8, 7]]], false],]

let creatures_discovered = {
    "Tomato Bunny":false,
}

const HeadbandImg = new Image();
HeadbandImg.src = "./Images/collection/clothes/Headband.png";
const HairpieceImg = new Image();
HairpieceImg.src = "./Images/collection/clothes/Hairpiece.png";
const SkywearImg = new Image();
SkywearImg.src = "./Images/collection/clothes/Skywear.png";
const PonchoImg = new Image();
PonchoImg.src = "./Images/collection/clothes/Poncho.png";
const BagImg = new Image();
BagImg.src = "./Images/collection/clothes/Bag.png";
let sky_clothes_info = {
	"Headband": [HeadbandImg, 250, false, false],
	"Hairpiece": [HairpieceImg, 250, false, false],
	"Skywear": [SkywearImg, 250, false, false],
	"Poncho": [PonchoImg, 250, false, false],
	"Bag": [BagImg, 250, false, false],
}

// *****

const cBLOCK_WIDTH = 32;
const cBLOCK_HEIGHT = 32;

class Button {
    constructor(image, clicked_image, x, y, one_click=true){
        this.image = image;
        this.clicked_image = clicked_image;
        this.x = x;
        this.y = y;
        this.clicked_on = false;
        this.one_click = one_click;
    }

    is_clicked(mouseX, mouseY){
        if (this.x < mouseX && this.x+this.image.naturalWidth > mouseX){
            if (this.y < mouseY && this.y+this.image.naturalHeight > mouseY){
                this.clicked_on = true;
            }
        }
    }

    is_down(){
        return this.clicked_on;
    }

    draw(){
        if (this.clicked_on){
            ctx.drawImage(this.clicked_image, this.x, this.y);
        } else {
            ctx.drawImage(this.image, this.x, this.y);
        }
    }
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
        this.vx = 0;
        this.vy = 0;
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

    collides_with(sprite2){
        if (this.x+parseInt(this.images[0].width/2) < sprite2.x+sprite2.images[0].width && this.x+parseInt(sprite2.images[0].width/2) > sprite2.x-sprite2.images[0].width){
            if (this.y+parseInt(this.images[0].height/2) < sprite2.y+sprite2.images[0].height && this.y+parseInt(this.images[0].height/2) > sprite2.y-sprite2.images[0].height){
                return true;
            }
        }
    }

    fluid_move(dvx, dvy){
        this.vx += dvx;
        this.vy += dvy;
    }

    fluid_update(frames, fx=-5, g=0, offsetX=0, offsetY=0){ 
        if (this.frame_wait == 0) {
            ctx.drawImage(this.images[this.current_frame], this.x+offsetX, this.y+offsetY);
        } else {
            if (frames%this.frame_wait == 0){
                this.current_frame++;
                if (this.current_frame >= this.images.length) {
                    this.current_frame = 0;
                }
            }
            ctx.drawImage(this.images[this.current_frame], this.x, this.y);   
        }
        if (this.vx != 0){
            this.x += this.vx;
            if (this.vx+fx < 0 && this.vx > 0){
                this.vx = 0;
            } else if (this.vx+fx > 0 && this.vx < 0){
                this.vx = 0;
            } else {
                this.vx += fx;
            }
        }
        
        if (this.vy != 0){
            this.y += this.vy;
            if (this.vy+g < 0 && this.vy > 0){
                this.vy = 0;
            } else if (this.vy+g > 0 && this.vy < 0){
                this.vy = 0;
            } else {
                this.vy += g;
            }
        }
    }
}

class Animated_Sprite {
    constructor(image_sets, frame_wait, x, y){
        this.image_sets = image_sets;
        this.x = x;
        this.y = y;
        this.frame_wait = frame_wait;
        this.frame = 0;
        this.animation = Object.keys(image_sets)[0];
    }

    draw(frames, offsetX=0, offsetY=0){
        if (frames % this.frame_wait == 0){
            this.frame++;
            if (this.frame >= this.image_sets[this.animation].length){
                this.frame = 0;
            }
        }
        ctx.drawImage(this.image_sets[this.animation][this.frame], this.x+offsetX, this.y+offsetY);
    }

    collides_with(sprite2){
        // if (this.x+parseInt(this.image_sets[this.animation][this.frame].width/2) < sprite2.x+sprite2.images[0].width && this.x+parseInt(sprite2.images[0].width/2) > sprite2.x-sprite2.images[0].width){
        //     if (this.y+parseInt(this.image_sets[this.animation][this.frame].height/2) < sprite2.y+sprite2.images[0].height && this.y+parseInt(this.images[0].height/2) > sprite2.y-sprite2.images[0].height){
        //         return true;
        //     }
        // }

        if (this.x >= (sprite2.x+sprite2.images[0].width) || 
            this.y >= (sprite2.y-sprite2.images[0].height) ||
            (this.x+this.image_sets[this.animation][this.frame].width) <= sprite2.x || 
            (this.y-this.image_sets[this.animation][this.frame].height) <= sprite2.y){
            // no overlap
        } else {
            return true;
        }
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

const cBLOCK_IMAGES_SKY = {
    "G":[sky1Img, sky2Img, sky3Img],
    "X":[exit1Img, exit2Img, exit3Img, exit4Img, exit5Img, exit6Img, exit7Img],
    "H":[skyHouse1Img, skyHouse2Img],
    "S":[skyShopImg],
    "F":[skyShopFurnitureImg],
    "C":[skyShopClothesImg]
}

// Defining Variables
const HIGHLIGHT_COLOR = "#0F0";

let player = new Sprite([charImg], 0, 128, 128);

let player_map_pos = {
    // x:randrange(cMAP[0].length),
    // y:randrange(cMAP.length),
    x:0,
    y:0
}
// while (cMAP[player_map_pos.y][player_map_pos.x] == "W"){
//     player_map_pos = {
//         x:randrange(cMAP[0].length),
//         y:randrange(cMAP.length),
//     }
// }
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
let shop_conversation = ["I am the shop keeper, Kotu.", "Any creatures you find, I will buy."]
let shop_page = 0;
let temp_info;
let temp_idx;
let temp = 0;
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
let sky_clothes_info_keys = Object.keys(sky_clothes_info);
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
// let wearing_clothes = [];
let wardrobe_scene = false;
let testing = false;

let temp_pos = {
    x:210,
    y:375
}
let up_button = new Button(upButtonImg, upButtonClickedImg, temp_pos.x, temp_pos.y-32);
let down_button = new Button(downButtonImg, downButtonClickedImg, temp_pos.x, temp_pos.y+32);
let left_button = new Button(leftButtonImg, leftButtonClickedImg, temp_pos.x-32, temp_pos.y);
let right_button = new Button(rightButtonImg, rightButtonClickedImg, temp_pos.x+32, temp_pos.y);
let sp_select_button = new Button(spSelectButtonImg, spSelectButtonClickedImg, temp_pos.x, temp_pos.y);
let select_button = new Button(selectButtonImg, selectButtonClickedImg, 100, temp_pos.y);
let reset_button = new Button(resetButtonImg, resetButtonImg, 155, temp_pos.y-40);

let clothes_button = new Button(wardrobeButtonImg, wardrobeButtonImg, 0, 320);
let map_button = new Button(mapItemImg, mapItemImg, 32, 320);
let wings_button = new Button(wingsImg, wingsImg, 0, 352);
let book_button = new Button(bookButtonImg, bookButtonImg, 32, 352);


let buttons = [up_button, down_button, left_button, right_button, select_button, sp_select_button, reset_button,
    clothes_button, map_button, wings_button, book_button,
];
let mouse_pos = {
    x:0,
    y:0,
}
let keyCode = -1;

let current_cave_idx = 0;
let player_cave = new Animated_Sprite({"walk":[charAdventure1Img, charAdventure2Img, charAdventure3Img, charAdventure4Img]}, 2, 0, 0);

let sound_start = 0;
let sound_on = true;
let music_on = true;

let save_text = localStorage.getItem("collection_save");
// document.write(save_text)

if (save_text != null && save_text != ""){
    temp = save_text.split("|");

    player_map_pos.x = parseInt(temp[0].split(",")[0]);
    player_map_pos.y = parseInt(temp[0].split(",")[1]);

    coins = parseInt(temp[1]);

    creatures_caught = temp[2].split(",");

    if (temp[3].length > 0){
        for (let i = 0; i < temp[3].split(",").length; i++){
            creatures_discovered[temp[3].split(",")[i]] = true;
        }
    }

    music_on = str_bool(temp[4]);
    sound_on = str_bool(temp[5]);

    if (temp[6].length > 0){
        for (let i = 0; i < temp[6].split(",").length; i++){
            store_items[temp[6].split(",")[i]][2] = true;
        }
    }

    if (temp[7].length > 0){
        for (let i = 0; i < temp[7].split(",").length; i++){
            sky_clothes_info[temp[7].split(",")[i]][2] = true;
        }
    }
}

let music_button;
if (music_on){
    music_button = new Button(musicOnImg, musicOnImg, 32, 384);
} else {
    music_button = new Button(musicOffImg, musicOffImg, 32, 384);
}
buttons.push(music_button);


let sound_button;
if (sound_on){
    sound_button = new Button(soundOnImg, soundOnImg, 0, 384);
} else {
    sound_button = new Button(soundOffImg, soundOffImg, 0, 384);
}
buttons.push(sound_button);

// add town sprites
for (let i=0; i < town_locs.length; i++) {
    temp_town = new Sprite([town1Img, town2Img, town3Img, town4Img], 1, ((town_locs[i][1][0]*32)-(player_map_pos.x*32))+128, ((town_locs[i][1][1]*32)-(player_map_pos.y*32))+128, undefined, town_locs[i][0]);
    town_locs[i].push(temp_town);
}

let block;
// add cave map sprites
for (let c=0; c < cCAVE_MAP.length; c++){
    cCAVE_MAP[c].push([]);
    for (let y=0; y < cCAVE_MAP[c][1].length; y++){
        cCAVE_MAP[c][2].push([])
        for (let x=0; x < cCAVE_MAP[c][1][0].length; x++){
            if (cCAVE_MAP[c][1][y][x] != " "){
                if (cCAVE_MAP[c][1][y][x] == "x"){
                    block = new Sprite([caveBlockImage], 0, (x*32), (y*32));
                    cCAVE_MAP[c][2][y].push(block);
                }
            }
        }
    }
}

// STORYLINE
let story_checkpoints = {
    "sky":false,
    "world":false,
    "town":false,
    "shop":false,
}

let story_scenes = {
    "sky":[],
}


// Get Keys
document.addEventListener("keydown", function (e){
    // a  b  c  d  e  f  g  h  i  j  k  l  m  n  o  p  q
    // 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81
    // r  s  t  u  v  w  x  y  z
    // 82 83 84 85 86 87 88 89 90
    keyCode = e.keyCode;
});

document.addEventListener("keyup", function (e){
    for (let i = 0; i < buttons.length; i++){
        buttons[i].clicked_on = false;
    }
    keyCode = -1;
});

// check mouse
document.addEventListener("mousemove", function(e) { 
    mouse_pos.x = e.x-cvs.getBoundingClientRect().left;
    mouse_pos.y = e.y-cvs.getBoundingClientRect().top;
});

document.addEventListener("mousedown", function(e) { 
    mouse_pos.x = e.x-cvs.getBoundingClientRect().left;
    mouse_pos.y = e.y-cvs.getBoundingClientRect().top;
    for (let i = 0; i < buttons.length; i++){
        buttons[i].is_clicked(mouse_pos.x, mouse_pos.y);
    }
});

document.addEventListener("touchstart", function(e) { 
    mouse_pos.x = e.touches[0].pageX-cvs.getBoundingClientRect().left;
    mouse_pos.y = e.touches[0].pageY-cvs.getBoundingClientRect().top;
    for (let i = 0; i < buttons.length; i++){
        buttons[i].is_clicked(mouse_pos.x, mouse_pos.y);
    }
});

document.addEventListener("mouseup", function(e) {
    for (let i = 0; i < buttons.length; i++){
        buttons[i].clicked_on = false;
    }
    keyCode = -1;
});

// Draw
function draw(){
    // Button actions
    if (sound_button.is_down()){
        if (sound_on){
            sound_on = false;
            sound_button.image = soundOffImg;
            sound_button.clicked_image = soundOffImg;
        } else {
            sound_on = true;
            sound_button.image = soundOnImg;
            sound_button.clicked_image = soundOnImg;
        }
    }
    if (music_button.is_down()){
        if (music_on){
            music_on = false;
            music_button.image = musicOffImg;
            music_button.clicked_image = musicOffImg;
        } else {
            music_on = true;
            music_button.image = musicOnImg;
            music_button.clicked_image = musicOnImg;
        }
    }
    if (wardrobe_scene){
        if (keyCode == 67 || keyCode == 13 || sp_select_button.is_down() || clothes_button.is_down()){
            wardrobe_scene = false;
        } if (keyCode == 38 || up_button.is_down()){
            // up
            shop_selection_idx -= 9;
        } if (keyCode == 40 || down_button.is_down()){
            // down
            shop_selection_idx += 9;
        } if (keyCode == 37 || left_button.is_down()){
            // left
            shop_selection_idx -= 1;
        } if (keyCode == 39 || right_button.is_down()){
            // right
            shop_selection_idx += 1;
        } if (keyCode == 32 || select_button.is_down()){
            // select
            if (sky_clothes_info[Object.keys(sky_clothes_info)[shop_selection_idx]][2]){
                if (sky_clothes_info[Object.keys(sky_clothes_info)[shop_selection_idx]][3]){
                    // wearing_clothes = remove_item(wearing_clothes, Object.keys(sky_clothes_info)[shop_selection_idx]);
                    sky_clothes_info[Object.keys(sky_clothes_info)[shop_selection_idx]][3] = false;
                } else {
                    // wearing_clothes.push(Object.keys(sky_clothes_info)[shop_selection_idx]);
                    sky_clothes_info[Object.keys(sky_clothes_info)[shop_selection_idx]][3] = true;
                    // document.write(wearing_clothes[0])
                }
            } else {
                alert("You don\'t own these");
                for (let i = 0; i < buttons.length; i++){
                    buttons[i].clicked_on = false;
                }
                keyCode = -1;
            }
        }
       
        if (shop_selection_idx < 0){
            shop_selection_idx = Object.keys(sky_clothes_info).length-1;
        } else if (shop_selection_idx >= Object.keys(sky_clothes_info).length){
            shop_selection_idx = 0;
        }
  
    } else {
        if (current_scene == "opening"){
            if (keyCode == 32 || select_button.is_down()){
                // space - select
                current_scene = "main";
            }
        } else if (current_scene == "town"){
            if (keyCode == 38 || up_button.is_down()){
                //up
                if (player_town_pos.y-1 >= 0){
                    player_town_pos.y--;
                } else {
                    alert("YOU CANNOT PASS");
                    for (let i = 0; i < buttons.length; i++){
                        buttons[i].clicked_on = false;
                    }
                    keyCode = -1;
                }
            } else if (keyCode == 40 || down_button.is_down()){
                //down
                if (player_town_pos.y+1 < town_locs[current_town_idx][2].length){
                    player_town_pos.y++;
                } else {
                    alert("YOU CANNOT PASS");
                    for (let i = 0; i < buttons.length; i++){
                        buttons[i].clicked_on = false;
                    }
                    keyCode = -1;
                }
            } if (keyCode == 37 || left_button.is_down()){
                //left
                if (player_town_pos.x-1 >= 0){
                    player_town_pos.x--;
                } else {
                    alert("YOU CANNOT PASS");
                    for (let i = 0; i < buttons.length; i++){
                        buttons[i].clicked_on = false;
                    }
                    keyCode = -1;
                }
            } else if (keyCode == 39 || right_button.is_down()){
                //right
                if (player_town_pos.x+1 < town_locs[current_town_idx][2][0].length){
                    player_town_pos.x++;
                } else {
                    alert("YOU CANNOT PASS");
                    for (let i = 0; i < buttons.length; i++){
                        buttons[i].clicked_on = false;
                    }
                    keyCode = -1;
                }
            }
        } else if (current_scene == "house"){
            if (keyCode == 38 || up_button.is_down()){
                //up
                if (player_house.y-32 == 0 && player_house.x == 128){
                    //
                } else if (player_house.y-32 >= 0){
                    player_house.y -= 32;
                } else {
                    //
                }
            } else if (keyCode == 40 || down_button.is_down()){
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
            } if (keyCode == 37 || left_button.is_down()){
                //left
                if (player_house.y == 0 && player_house.x-32 == 128){
                    //
                } else if (player_house.x-32 >= 0){
                    player_house.x -= 32;
                } else {
                    //
                }
            } else if (keyCode == 39 || right_button.is_down()){
                //right
                if (player_house.y == 0 && player_house.x+32 == 128){
                    //
                } else if (player_house.x+32 < 288){
                    player_house.x += 32;
                } else {
                    //
                }
            } else if (keyCode == 32 || select_button.is_down()){
                //talk
                if (player_house.x == 128 && player_house.y == 32){
                    house_speech.next_line();
                }
            }
        } else if (current_scene == "main"){
            if (keyCode == 38 || up_button.is_down()){
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
                            for (let i = 0; i < buttons.length; i++){
                                buttons[i].clicked_on = false;
                            }
                            keyCode = -1;
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
                    for (let i = 0; i < buttons.length; i++){
                        buttons[i].clicked_on = false;
                    }
                    keyCode = -1;
                }
            } else if (keyCode == 40 || down_button.is_down()){
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
                            for (let i = 0; i < buttons.length; i++){
                                buttons[i].clicked_on = false;
                            }
                            keyCode = -1;
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
                    for (let i = 0; i < buttons.length; i++){
                        buttons[i].clicked_on = false;
                    }
                    keyCode = -1;
                }
            } if (keyCode == 37 || left_button.is_down()){
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
                            for (let i = 0; i < buttons.length; i++){
                                buttons[i].clicked_on = false;
                            }
                            keyCode = -1;
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
                    for (let i = 0; i < buttons.length; i++){
                        buttons[i].clicked_on = false;
                    }
                    keyCode = -1;
                }
            } else if (keyCode == 39 || right_button.is_down()){
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
                            for (let i = 0; i < buttons.length; i++){
                                buttons[i].clicked_on = false;
                            }
                            keyCode = -1;
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
                    for (let i = 0; i < buttons.length; i++){
                        buttons[i].clicked_on = false;
                    }
                    keyCode = -1;
                }
            } if (keyCode == 77 || map_button.is_down()){
                // m - map
                if (store_items["Kort (map)"][2]){
                    current_scene = "map";
                    for (let i = 0; i < buttons.length; i++){
                        buttons[i].clicked_on = false;
                    }
                } else {
                    alert("You don\'t have a map");
                    for (let i = 0; i < buttons.length; i++){
                        buttons[i].clicked_on = false;
                    }
                    keyCode = -1;
                }
            } if (keyCode == 87 || wings_button.is_down()){
                // w - wings
                if (store_items["Vengi (wings)"][2]){
                    current_scene = "wings";
                    for (let i = 0; i < buttons.length; i++){
                        buttons[i].clicked_on = false;
                    }
                    wing_selection = 0;
                } else {
                    alert("You don\'t have wings");
                    for (let i = 0; i < buttons.length; i++){
                        buttons[i].clicked_on = false;
                    }
                    keyCode = -1;
                }
            } if (keyCode == 66 || book_button.is_down()){
                // b - book
                current_scene = "book";
                book_page = 0;
                book_selection_idx = -1;
                temp_idx = 0;
                for (let i = 0; i < buttons.length; i++){
                    buttons[i].clicked_on = false;
                }
            }
        } else if (current_scene == "shop"){
            if (shop_selection == "unselected"){
                if (keyCode == 38 || up_button.is_down()){
                    // up
                    shop_selection_idx--;
                    if (shop_selection_idx < 0){
                        shop_selection_idx = shop_options.length-1;
                    }
                } if (keyCode == 40 || down_button.is_down()){
                    // down
                    shop_selection_idx++;
                } if (keyCode == 32 || select_button.is_down()){
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
                        melodySND.pause();
                        player_town_pos.y += 1;
                    }
                }
            } else if (shop_selection == "conversation"){
                if (keyCode == 32 || select_button.is_down()){
                    // space - select
                    shop_selection_idx++;
                }
            } else if (shop_selection == "sell"){
                if (keyCode == 38 || up_button.is_down()){
                    // up
                    shop_selection_idx -= 9;
                } if (keyCode == 40 || down_button.is_down()){
                    // down
                    shop_selection_idx += 9;
                } if (keyCode == 37 || left_button.is_down()){
                    // left
                    shop_selection_idx -= 1;
                } if (keyCode == 39 || right_button.is_down()){
                    // right
                    shop_selection_idx += 1;
                } if (keyCode == 32 || select_button.is_down()){
                    // select
                    if (list_contains(shop_selected_idxs, shop_selection_idx)){
                        shop_selected_idxs = remove_item(shop_selected_idxs, shop_selection_idx);
                        shop_coins -= cCREATURE_INFO[creatures_caught[shop_selection_idx]][3];
                    } else {
                        shop_selected_idxs.push(shop_selection_idx);
                        shop_coins += cCREATURE_INFO[creatures_caught[shop_selection_idx]][3];
                    }
                } if (keyCode == 13 || sp_select_button.is_down()){
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
                if (keyCode == 38 || up_button.is_down()){
                    // up
                    shop_selection_idx -= 1;
                } if (keyCode == 40 || down_button.is_down()){
                    // down
                    shop_selection_idx += 1;
                } if (keyCode == 32 || select_button.is_down()){
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
                } if (keyCode == 13 || sp_select_button.is_down()){
                    if (shop_coins <= coins){
                        coins -= shop_coins;
                        shop_selection = "unselected";
                        shop_selection_idx = 0;
                        store_items_keys = remove_items(store_items_keys, current_bought_store_items);
                    } else {
                        alert("You don't have enough money");
                        for (let i = 0; i < buttons.length; i++){
                            buttons[i].clicked_on = false;
                        }
                        keyCode = -1;
                    }
                }
   
                if (shop_selection_idx < 0){
                    shop_selection_idx = store_items_keys.length-1;
                } else if (shop_selection_idx >= store_items_keys.length){
                    shop_selection_idx = 0;
                }
            }
        } else if (current_scene == "map"){
            if (keyCode == 77 || map_button.is_down()){
                // m - map
                current_scene = "main";
                for (let i = 0; i < buttons.length; i++){
                    buttons[i].clicked_on = false;
                }
            }
        } else if (current_scene == "wings"){
            if (keyCode == 38 || up_button.is_down()){
                // up
                wing_selection++;
            } else if (keyCode == 40 || down_button.is_down()){
                // down
                wing_selection--;
            } else if (keyCode == 32 || select_button.is_down()){
                // space - select
                current_scene = "main";
                for (let i = 0; i < buttons.length; i++){
                    buttons[i].clicked_on = false;
                }
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
            } if (keyCode == 87 || wings_button.is_down()){
                // w - wings
                current_scene = "main";
                for (let i = 0; i < buttons.length; i++){
                    buttons[i].clicked_on = false;
                }
            }
            if (wing_selection >= town_locs.length){
                wing_selection = 0;
            } else if (wing_selection < 0){
                wing_selection = town_locs.length-1;
            }
        } else if (current_scene == "book"){
            if (keyCode == 66 || book_button.is_down()){
                // b - book
                current_scene = "main";
                for (let i = 0; i < buttons.length; i++){
                    buttons[i].clicked_on = false;
                }
            } if (keyCode == 38 || up_button.is_down()){
                // up
                book_selection_idx -= 7;
            } if (keyCode == 40 || down_button.is_down()){
                // down
                book_selection_idx += 7;
            } if (keyCode == 37 || left_button.is_down()){
                // left
                book_selection_idx -= 1;
            } if (keyCode == 39 || right_button.is_down()){
                // right
                book_selection_idx += 1;
            }
            if (book_selection_idx < -1){
                book_selection_idx = -1;
            } else if (book_selection_idx >= all_creatures.length){
                book_selection_idx = all_creatures.length-1;
            }
        } else if (current_scene == "sky"){
            if (keyCode == 38 || up_button.is_down()){
                //up
                if (player_town_pos.y-1 >= 0){
                    player_town_pos.y--;
                } else {
                    alert("YOU CANNOT PASS");
                    for (let i = 0; i < buttons.length; i++){
                        buttons[i].clicked_on = false;
                    }
                    keyCode = -1;
                }
            } else if (keyCode == 40 || down_button.is_down()){
                //down
                if (player_town_pos.y+1 < sky_map.length){
                    player_town_pos.y++;
                } else {
                    alert("YOU CANNOT PASS");
                    for (let i = 0; i < buttons.length; i++){
                        buttons[i].clicked_on = false;
                    }
                    keyCode = -1;
                }
            } if (keyCode == 37 || left_button.is_down()){
                //left
                if (player_town_pos.x-1 >= 0){
                    player_town_pos.x--;
                } else {
                    alert("YOU CANNOT PASS");
                    for (let i = 0; i < buttons.length; i++){
                        buttons[i].clicked_on = false;
                    }
                    keyCode = -1;
                }
            } else if (keyCode == 39 || right_button.is_down()){
                //right
                if (player_town_pos.x+1 < sky_map[0].length){
                    player_town_pos.x++;
                } else {
                    alert("YOU CANNOT PASS");
                    for (let i = 0; i < buttons.length; i++){
                        buttons[i].clicked_on = false;
                    }
                    keyCode = -1;
                }
            }
        } else if (current_scene == "sky-shop-clothes"){
            if (keyCode == 38 || up_button.is_down()){
                // up
                shop_selection_idx -= 1;
            } if (keyCode == 40 || down_button.is_down()){
                // down
                shop_selection_idx += 1;
            } if (keyCode == 32 || select_button.is_down()){
                // select
                if (sky_clothes_info[sky_clothes_info_keys[shop_selection_idx]][2]){
                    sky_clothes_info[sky_clothes_info_keys[shop_selection_idx]][2] = false;
                    shop_coins -= sky_clothes_info[sky_clothes_info_keys[shop_selection_idx]][1];
                    current_bought_store_items = remove_item(current_bought_store_items, sky_clothes_info_keys[shop_selection_idx]);
                } else {
                    sky_clothes_info[sky_clothes_info_keys[shop_selection_idx]][2] = true;
                    shop_coins += sky_clothes_info[sky_clothes_info_keys[shop_selection_idx]][1];
                    current_bought_store_items.push(sky_clothes_info_keys[shop_selection_idx]);
                }
            } if (keyCode == 13 || sp_select_button.is_down()){
                if (shop_coins <= coins){
                    coins -= shop_coins;
                    current_scene = "sky";
                    player_town_pos.y++;
                    sky_clothes_info_keys = remove_items(sky_clothes_info_keys, current_bought_store_items);
                } else {
                    alert("You don't have enough money");
                    for (let i = 0; i < buttons.length; i++){
                        buttons[i].clicked_on = false;
                    }
                    keyCode = -1;
                }
            }
   
            if (shop_selection_idx < 0){
                shop_selection_idx = sky_clothes_info_keys.length-1;
            } else if (shop_selection_idx >= sky_clothes_info_keys.length){
                shop_selection_idx = 0;
            }
        } else if (current_scene == "cave"){
            // if (keyCode == 38 || up_button.is_down()){
            //     // up
            //     player_cave.y += 10;
            // } if (keyCode == 40 || down_button.is_down()){
            //     // down
            //     player_cave.y -= 10;
            // } if (keyCode == 37 || left_button.is_down()){
            //     // left
            //     player_cave.x -= 10;
            // } if (keyCode == 39 || right_button.is_down()){
            //     // right
            //     player_cave.x += 10;
            // }
            
            // for (let y=0; y < cCAVE_MAP[current_cave_idx][2].length; y++){
            //     for (let x=0; x < cCAVE_MAP[current_cave_idx][2][y].length; x++){
            //         if (player_cave.collides_with(cCAVE_MAP[current_cave_idx][2][y][x])){
            //             document.write("A")
            //             if (keyCode == 38 || up_button.is_down()){
            //                 // up
            //                 player_cave.y -= 10;
            //             } if (keyCode == 40 || down_button.is_down()){
            //                 // down
            //                 player_cave.y += 10;
            //             } if (keyCode == 37 || left_button.is_down()){
            //                 // left
            //                 player_cave.x += 10;
            //             } if (keyCode == 39 || right_button.is_down()){
            //                 // right
            //                 player_cave.x -= 10;
            //             }
            //         }
            //     }
            // }
            temp = true;
            for (let y=0; y < cCAVE_MAP[current_cave_idx][2].length; y++){
                for (let x=0; x < cCAVE_MAP[current_cave_idx][2][y].length; x++){
                    if (player_cave.collides_with(cCAVE_MAP[current_cave_idx][2][y][x])){
                        temp = false;
                        document.write("A");
                    }
                }
            }
            if (temp) {
                if (keyCode == 38 || up_button.is_down()){
                    // up
                    player_cave.y += 10;
                } if (keyCode == 40 || down_button.is_down()){
                    // down
                    player_cave.y -= 10;
                } if (keyCode == 37 || left_button.is_down()){
                    // left
                    player_cave.x -= 10;
                } if (keyCode == 39 || right_button.is_down()){
                    // right
                    player_cave.x += 10;
                }
            }
        }
       
        if (keyCode == 82 || reset_button.is_down()){
            // r - remove save
            // WIP - OPTION TO CHANGE MAP (KEEP COINS ETC)
            if (confirm("Are you sure you want to reset your coins and stash?")){
                localStorage.setItem("collection_save", "");
                clearInterval(game);
                location.reload();
                return;
            }
            for (let i = 0; i < buttons.length; i++){
                buttons[i].clicked_on = false;
            }
            keyCode = -1;
        } if (keyCode == 67 || clothes_button.is_down()){
            wardrobe_scene = true;
            shop_page = 0;
            shop_selection_idx = 0;
            temp_idx = 0;
        }
        // test keys
        if (keyCode == 65){
            testing = true;
        } if (keyCode == 50 && testing){
            document.write("R3:CTYXARAEBAEASUEDLLR")
        }
    }

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, 288, 288);
    
    frames++;

    if (wardrobe_scene == true){
        shop_page = parseInt(shop_selection_idx/72)
        ctx.fillStyle = "#eef"
        ctx.fillRect(0, 0, 288, 320);
        ctx.drawImage(charImg, 0, 288);
        for (let y = 0; y < 8; y++){
            for (let x = 0; x < 9; x++){
                temp_idx = (shop_page*72)+(y*9)+x;
                if (temp_idx >= sky_clothes_info.length){
                    break;
                } else {
                    if (sky_clothes_info[Object.keys(sky_clothes_info)[temp_idx]][3]){
                        // Already Wearing
                        ctx.fillStyle = HIGHLIGHT_COLOR;
                        ctx.fillRect(x*32, (y*32)+32, 32, 32);
                        ctx.drawImage(sky_clothes_info[Object.keys(sky_clothes_info)[temp_idx]][0], 0, 288);
                    } if (temp_idx == shop_selection_idx){
                        ctx.fillStyle = "rgba(0, 0, 150, 0.5)";
                        ctx.fillRect(x*32, (y*32)+32, 32, 32);
                    } 
                    
                    if (sky_clothes_info[Object.keys(sky_clothes_info)[temp_idx]][2] == false){
                        ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
                        ctx.fillRect(x*32, (y*32)+32, 32, 32);
                    }
                    ctx.drawImage(sky_clothes_info[Object.keys(sky_clothes_info)[temp_idx]][0], x*32, (y*32)+32);
                }
            }
        }
    } else if (current_scene == "opening"){
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, 288, 288);

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
        for (let i = 0; i < Object.keys(sky_clothes_info).length; i++){
            if (sky_clothes_info[Object.keys(sky_clothes_info)[i]][3]){
                ctx.drawImage(sky_clothes_info[Object.keys(sky_clothes_info)[i]][0], player.x, player.y);
            }
        }

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
            sound_start = frames;
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
                for (let i = 0; i < buttons.length; i++){
                    buttons[i].clicked_on = false;
                }
                keyCode = -1;
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

        // draw and check caves
        for (let i=0; i < cCAVE_MAP.length; i++) {
            ctx.drawImage(caveImage, ((cCAVE_MAP[i][0][0]*32)-(player_map_pos.x*32))+128, ((cCAVE_MAP[i][0][1]*32)-(player_map_pos.y*32))+128);
            if (cCAVE_MAP[i][0][0] == player_map_pos.x && cCAVE_MAP[i][0][1] == player_map_pos.y) {
                current_cave_idx = i;
                current_scene = "cave";
                player_cave.x = 0;
                for (let y = 0; y < cCAVE_MAP[i][1].length; y++){
                    if (cCAVE_MAP[i][1][y][0] == ' '){
                        player_cave.y = -1*(y*32);
                    }
                }
            }
        }
        // WIP

        // draw sky portal
        ctx.drawImage(portalImgs[frames%portalImgs.length], 128-(player_map_pos.x*32), 128-(player_map_pos.y*32));
        if (player_map_pos.x == 0 && player_map_pos.y == 0){
            current_scene = "sky";
            player_town_pos = {
                x:5,
                y:9
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
                if (sound_on){
                    collectSND.currentTime = 0;
                    collectSND.play();
                }
            }
        }
        player.draw(frames);
        for (let i = 0; i < Object.keys(sky_clothes_info).length; i++){
            if (sky_clothes_info[Object.keys(sky_clothes_info)[i]][3]){
                ctx.drawImage(sky_clothes_info[Object.keys(sky_clothes_info)[i]][0], player.x, player.y);
            }
        }

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
        if ((frames-(sound_start+1)) % 450 == 0){
            // 400 frame wait
            if (music_on) {
                melodySND.currentTime = 0;
                melodySND.play();
            }
        }
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
    } else if (current_scene == "sky"){
        // draw background
        counter = 0;
        temp_y = 0;
        for (let y = -4; y <= 4; y++){
            temp_x = 0;
            for (let x = -4; x <= 4; x++){
                if (player_town_pos.y+y >= 0 && player_town_pos.x+x >= 0 && player_town_pos.y+y < sky_map.length && player_town_pos.x+x < sky_map[0].length){
                    background[counter] = new Sprite(cBLOCK_IMAGES_SKY[sky_map[player_town_pos.y+y][player_town_pos.x+x]], 0, temp_x, temp_y, sky_map_nums[player_town_pos.y+y][player_town_pos.x+x]);
                    background[counter].draw(frames);
                }
                counter++;
                temp_x += cBLOCK_WIDTH;
            }
            temp_y += cBLOCK_HEIGHT;
        }

        player.draw(frames);
        for (let i = 0; i < Object.keys(sky_clothes_info).length; i++){
            if (sky_clothes_info[Object.keys(sky_clothes_info)[i]][3]){
                ctx.drawImage(sky_clothes_info[Object.keys(sky_clothes_info)[i]][0], player.x, player.y);
            }
        }

        ctx.fillStyle = "#eef"
        ctx.fillRect(0, 288, 288, 320);

        // add text
        ctx.font = "15px Arial";
        ctx.fillStyle = "#000"
        ctx.fillText("Sky Realm", 10, 310);

        ctx.font = "15px Arial";
        ctx.fillStyle = "#000";
        ctx.fillText("Items: "+creatures_caught.length.toString(), 140, 310);
        ctx.fillText("$: "+coins.toString(), 210, 310);

        // update exit animation
        if (sky_map_nums[9][4] >= 6){
            sky_map_nums[9][4] = 0;
        } else {
            sky_map_nums[9][4]++;
        }
        // check if going into house
        // WIP - ADD HOUSE
        // for (let i=0; i < town_locs[current_town_idx][4].length; i++){
        //     if (player_town_pos.x == town_locs[current_town_idx][4][i][1][1] && player_town_pos.y == town_locs[current_town_idx][4][i][1][0]){
        //         current_scene = "house";
        //         current_person = town_locs[current_town_idx][4][i][0];
        //         person_sprite = new Sprite(cPERSON_INFO[current_person][0], cPERSON_INFO[current_person][1], 128, 0)
        //         player_house = new Sprite([charImg], 0, 128, 224);
        //         house_speech = new Speech(cPERSON_INFO[current_person][2], cPERSON_INFO[current_person][3], current_person)
        //     }
        // }
        // check if going into shop
        if (sky_map[player_town_pos.y][player_town_pos.x] == "S"){
            shop_animation_idx = 0;
            shop_selected_idxs = [];
            shop_coins = 0;
            current_scene = "sky-shop";
            shop_selection = "unselected";
        } else if (sky_map[player_town_pos.y][player_town_pos.x] == "F"){
            shop_animation_idx = 0;
            shop_selected_idxs = [];
            shop_coins = 0;
            current_scene = "sky-shop-furniture";
            shop_selection = "unselected";
        } else if (sky_map[player_town_pos.y][player_town_pos.x] == "C"){
            shop_animation_idx = 0;
            shop_selected_idxs = [];
            shop_coins = 0;
            current_scene = "sky-shop-clothes";
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
                for (let i = 0; i < buttons.length; i++){
                    buttons[i].clicked_on = false;
                }
                keyCode = -1;
            }
        }
    } else if (current_scene == "sky-shop-clothes"){
        shop_animation_idx++;
        ctx.fillStyle = "#eef"
        ctx.fillRect(0, 0, 288, 320);

        // add text
        ctx.font = "15px Arial";
        ctx.fillStyle = "#000"
        ctx.fillText("Clothing Shop", 10, 310);

        ctx.font = "15px Arial";
        ctx.fillStyle = "#000";
        ctx.fillText("Total: "+shop_coins.toString(), 10, 25);
        ctx.fillText("|Buy|", 125, 25);
        ctx.fillText("$: "+coins.toString(), 210, 310);

        for (let i = 0; i < sky_clothes_info_keys.length; i++){
            if (sky_clothes_info[sky_clothes_info_keys[i]][2]){
                ctx.fillStyle = HIGHLIGHT_COLOR
                ctx.fillRect(0, (i+1)*32, 32, 32);
            }
            ctx.drawImage(sky_clothes_info[sky_clothes_info_keys[i]][0], 32, (i+1)*32);
            ctx.font = "15px Arial";
            if (i == shop_selection_idx){
                ctx.fillStyle = HIGHLIGHT_COLOR;
            } else {
                ctx.fillStyle = "#000";
            }
            ctx.fillText(sky_clothes_info_keys[i], 75, ((i+1)*32)+20);
            ctx.fillText(sky_clothes_info[sky_clothes_info_keys[i]][1].toString(), 220, ((i+1)*32)+20);
        }

    } else if (current_scene == "cave"){
        ctx.fillStyle = "#EEF";
        ctx.fillRect(0, 0, 288, 320);
        for (let y=0; y < cCAVE_MAP[current_cave_idx][2].length; y++){
            for (let x=0; x < cCAVE_MAP[current_cave_idx][2][y].length; x++){
                cCAVE_MAP[current_cave_idx][2][y][x].fluid_update(frames, 0, 0, -player_cave.x+100, player_cave.y+256);
            }
        }
        
        player_cave.draw(frames, -player_cave.x+100, -player_cave.y+256);

        if (player_cave.x < 0 || player_cave.x > (cCAVE_MAP[current_cave_idx][1][0].length*32)){
            current_scene = "main";
            player_map_pos.y--;
        }

        ctx.font = "15px Arial";
        ctx.fillStyle = "#000";
        ctx.fillText("Coords: "+player_cave.x.toString()+", "+player_cave.y.toString(), 140, 310);
    }

    // SAVE - coins, creatures, items
    save_text = "";

    save_text += player_map_pos.x.toString();
    save_text += ",";
    save_text += player_map_pos.y.toString();
    
    save_text += "|";
    save_text += coins.toString();

    save_text += "|";
    save_text += creatures_caught[0];
    for (let i = 1; i < creatures_caught.length; i++){
        save_text += ",";
        save_text += creatures_caught[i];
    }

    save_text += "|";
    temp = false;
    for (let i = 0; i < all_creatures.length; i++){
        if (creatures_discovered[all_creatures[i]]){   
            if (temp){
                save_text += ",";
            }
            save_text += all_creatures[i];
            temp = true;
        }
    }

    save_text += "|";
    save_text += music_on.toString();
    save_text += "|";
    save_text += sound_on.toString();

    save_text += "|";
    temp = false;
    for (let i = 0; i < Object.keys(store_items).length; i++){
        if (store_items[Object.keys(store_items)[i]][2]){   
            if (temp){
                save_text += ",";
            }
            save_text += Object.keys(store_items)[i];
            temp = true;
        }
    }

    save_text += "|";
    temp = false;
    for (let i = 0; i < Object.keys(sky_clothes_info).length; i++){
        if (sky_clothes_info[Object.keys(sky_clothes_info)[i]][2]){   
            if (temp){
                save_text += ",";
            }
            save_text += Object.keys(sky_clothes_info)[i];
            temp = true;
        }
    }


    localStorage.setItem("collection_save", save_text);
    save_text = "";

    // draw buttons
    ctx.fillStyle = "#EEF";
    ctx.fillRect(0, 320, 288, 130);
    for (let i = 0; i < buttons.length; i++){
        buttons[i].draw();
    }
}

let game = setInterval(draw, 100);