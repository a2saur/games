function remove_index(list, index){
	newList = new Array(list.length-1);
	newX = 0
	for (let x = 0; x < list.length; x++){
		if (x == index){
			// do nothing
		} else {
			newList[newX] = list[x];
			newX++;
		}
	}
	return newList;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function collision(rect1, rect2){
	if (rect1.position.x < rect2.position.x + rect2.width &&
		rect1.position.x + rect1.width > rect2.position.x &&
		rect1.position.y < rect2.position.y + rect2.height &&
		rect1.position.y + rect1.height > rect2.position.y) {
			// collision detected!
		return true;
	}
}

//Getting the Canvas
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");

const cBASE_PATH = "/Users/brownscholar/Desktop/A2_Random/octopus-adventure/images/"

const charImg = new Image();
charImg.src = cBASE_PATH+"octopus.png";

const speechImg = new Image();
speechImg.src = cBASE_PATH+"Speech_Bubble.png";

// ----------ENEMIES----------

const enemy_fishImg = new Image();
enemy_fishImg.src = cBASE_PATH+"Enemy_Fish.png";

// ----------MATCHING GAME----------
const card1Img = new Image();
card1Img.src = cBASE_PATH+"1_Coin.png";

const card5Img = new Image();
card5Img.src = cBASE_PATH+"5_Coin.png";

const card10Img = new Image();
card10Img.src = cBASE_PATH+"10_Coin.png";

const selectionImg = new Image();
selectionImg.src = cBASE_PATH+"selection.png";

const xImg = new Image();
xImg.src = cBASE_PATH+"X.png";

const coverImg = new Image();
coverImg.src = cBASE_PATH+"Card_Cover.png";

const x5Img = new Image();
x5Img.src = cBASE_PATH+"X5.png";

//--------------------

const cXSTEP = 10;
const cYSTEP = 10;
const cJUMPDUR = 11;
const fontStyle = "Arial" //Balsamiq Sans
const cMATCHINGTRIES = 1;

let unlocked_parts = [];
let charItems = ["Coconut"];
let coins = 0;
let attackPowerPunch = 1;
let attackPowerThrow = 1;

const enemyHps = {
	"fish":2
}

const enemyAttackPwrs = {
	"fish":1
}

const enemyImgs = {
	"fish":enemy_fishImg
}

const cardImgs = {
	"1":card1Img,
	"5":card5Img,
	"10":card10Img
}


// ------------SPRITES------------

class SpriteNode{
	constructor(image, x, y){
		this.showing = true;
		this.image = image;
		this.width = image.width;
		this.height = image.height;
		this.position = {
			x: x,
			y: y,
		}

		// document.write(this.position.x);
		// document.write(", ");
		// document.write(this.width);
		// document.write("|")
	}

	draw(){
		if (this.showing){
			ctx.drawImage(this.image, this.position.x, this.position.y);
		}
	}

	hide(){
		this.showing = false;
	}

	collides_with(rect2){
		if (this.position.x < rect2.position.x+rect2.width &&
		rect2.position.x < this.position.x+this.width  &&
		this.position.y < rect2.position.y+rect2.height &&
		rect2.position.y < this.position.y+this.height) {
			// collision detected!
			return true;
		}
	}
}

class Enemy extends SpriteNode{
	constructor(x, y, enemyType){
		super(enemyImgs[enemyType], x, y);
		this.hp = enemyHps[enemyType];
		this.attackPower = enemyAttackPwrs[enemyType];
	}

	draw_hp(){
		ctx.fillStyle = "#000000";
		ctx.font = "20px "+fontStyle;
		ctx.fillText(this.hp.toString()+" HP", this.position.x+10, (this.position.y+75+10));
	}

	attacked(attackPwr){
		this.hp -= attackPwr;
		if (this.hp <= 0){
			this.hide();
		}
	}
}

class Character extends SpriteNode{
	constructor(x, y){
		super(charImg, x, y);
		this.sp = 5;
		this.hp = 10;
		// this.coins = 0;
		this.points = 0;
		this.spMax = 5;
		this.hpMax = 10;
		this.items = [];
		this.jumping = 0;
		this.going_up = false;

		this.def = 0;

		this.width = 64;
		this.height = 64;

		// document.write(this.position.x);
		// document.write(", ");
		// document.write(this.width);
		// document.write("|");
	}

	attacked(attackPwr){
		this.hp -= (attackPwr-this.def);
		if (this.hp <= 0){
			ctx.fillStyle = "#000000";
			ctx.font = "30px "+fontStyle;
			ctx.fillText("GAME OVER", 350, 230);
			clearInterval();
		}
	}

	refresh(){
		this.hp = this.hpMax;
		this.sp = this.spMax;
	}

	level_up(choice){
		this.points = 0;
		if(choice == "sp"){
			this.spMax += 5;
		} else if (choice == "hp"){
			this.hpMax += 5;
		}
		this.refresh();
	}

	move_normal(direction){
		if (direction == "ArrowLeft"){
			if (this.position.x-cXSTEP >= 0){
				this.position.x -= cXSTEP;
			}
			direction = "";
		} if (direction == "ArrowRight"){
			if (this.position.x+cXSTEP <= 680){
				this.position.x += cXSTEP;
			}
			direction = "";
		} if (direction == " "){
			if (this.jumping < 0){
				this.jumping = cJUMPDUR;
				this.going_up = true;
			}
		}

		if (this.jumping >= 0){
			this.jumping--;
			if (this.going_up){
				this.position.y -= cYSTEP;
				if (this.jumping == Math.floor(cJUMPDUR/2)){
					this.going_up = false;
				}
			} else {
				this.position.y += cYSTEP;
			}
		}
	}

	move_off_screen(direction){
		if (direction == "ArrowLeft"){
			this.position.x -= cXSTEP;
			direction = "";
		} if (direction == "ArrowRight"){
			this.position.x += cXSTEP;
			direction = "";
		} if (direction == " "){
			if (this.jumping < 0){
				this.jumping = cJUMPDUR;
				this.going_up = true;
			}
		}

		if (this.jumping >= 0){
			this.jumping--;
			if (this.going_up){
				this.position.y -= cYSTEP;
				if (this.jumping == Math.floor(cJUMPDUR/2)){
					this.going_up = false;
				}
			} else {
				this.position.y += cYSTEP;
			}
		}
	}

	move_off_right(direction){
		if (direction == "ArrowLeft"){
			if (this.position.x-cXSTEP >= 0){
				this.position.x -= cXSTEP;
			}
			direction = "";
		} if (direction == "ArrowRight"){
			this.position.x += cXSTEP;
			direction = "";
		} if (direction == " "){
			if (this.jumping < 0){
				this.jumping = cJUMPDUR;
				this.going_up = true;
			}
		}

		if (this.jumping >= 0){
			this.jumping--;
			if (this.going_up){
				this.position.y -= cYSTEP;
				if (this.jumping == Math.floor(cJUMPDUR/2)){
					this.going_up = false;
				}
			} else {
				this.position.y += cYSTEP;
			}
		}
	}

	move_off_left(direction){
		if (direction == "ArrowLeft"){
			if (this.position.x-cXSTEP >= 0){
				this.position.x -= cXSTEP;
			}
			direction = "";
		} if (direction == "ArrowRight"){
			this.position.x += cXSTEP;
			direction = "";
		} if (direction == " "){
			if (this.jumping < 0){
				this.jumping = cJUMPDUR;
				this.going_up = true;
			}
		}

		if (this.jumping >= 0){
			this.jumping--;
			if (this.going_up){
				this.position.y -= cYSTEP;
				if (this.jumping == Math.floor(cJUMPDUR/2)){
					this.going_up = false;
				}
			} else {
				this.position.y += cYSTEP;
			}
		}
	}

	off_screen(){
		if (this.position.x <= -25 || this.position.x >= 750){
			return true;
		}
	}
}

class FightStarter extends SpriteNode{
	constructor(x, y, enemies){
		super(enemyImgs[enemies[0]], x, y);
		this.enemies = enemies;

		this.done = false;
	}

	draw(direction, character){
		if (this.done == false) {
			if (this.showing){
				ctx.drawImage(this.image, this.position.x, this.position.y);
				if (this.collides_with(character)){
					this.fight = new Fight(this.enemies);
					this.showing = false;
					return true;
				}
			} else {
				this.fight.draw(direction, character);
				this.done = this.fight.done;
			}
		} else {
			return false;
		}
	}
}

class ConversationCharacter extends SpriteNode{
	constructor(image, x, y, lines){
		super(image, x, y);
		this.lines = lines;
		this.text;
		this.text_created = false;
	}

	draw(direction, character){
		if (this.showing){
			ctx.drawImage(this.image, this.position.x, this.position.y);

			if (this.text_created == true){
				this.text.draw(direction);
				if (this.text.showing == false){
					this.text_created = false;
				}
			} else {
				if (this.collides_with(character) == true){
					ctx.drawImage(speechImg, this.position.x, this.position.y-42);
					if (direction == "Enter"){
						this.text = new Text(this.lines);
						this.text_created = true;
					}
				}
			}
		}
	}
}

// ------------TEXT BLOCKS------------

class Text{
	constructor(lines){
		this.lines = lines;
		this.lineIdx = 0;
		this.showing = true;
	}

	draw(direction){
		if (this.showing){
			ctx.fillStyle = "#FFFFFF";
			ctx.fillRect(10, 10, 730, 170);
	
			ctx.fillStyle = "#000000";
			ctx.font = "30px "+fontStyle;
			ctx.fillText(this.lines[this.lineIdx], 20, 45);
	
			// Update
			if (direction == "Enter"){
				this.lineIdx++;
				direction = "";
				if (this.lineIdx >= this.lines.length){
					this.showing = false;
				}
			}
			return direction;
		} else {
			return direction;
		}
	}

	isShowing(){
		return this.showing;
	}
}

class Choice{
	constructor(choices, choicesTitle){
		this.choicesTitle = choicesTitle;
		this.choices = choices;
		this.showing = true;
		this.selectionIndex = 0;
		this.choice;
	}

	draw(direction){
		if (this.showing){
			if (direction == "ArrowDown"){
				this.selectionIndex++;
				direction = "";
			} else if (direction == "ArrowUp"){
				if (this.selectionIndex-1 >= 0){
					this.selectionIndex--;
					direction = "";
				}
			} else if (direction == "Enter"){
				this.choice = this.choices[this.selectionIndex%this.choices.length];
				this.showing = false;
				direction = "";
			}
			ctx.fillStyle = "#DDDDDD";
			ctx.fillRect(10, 10, 730, 170);
	
			ctx.fillStyle = "#000000";
			ctx.font = "30px "+fontStyle;
			ctx.fillText(this.choicesTitle, 20, 45);

			ctx.fillStyle = "#FFFFFF";
			ctx.fillRect(100, 100, 550, 20+(50*this.choices.length));
			// ctx.fillRect(int((750-(10*this.choices.length))/2), 600, 10*this.choices.length, 150);
			ctx.font = "25px "+fontStyle;
			for (let x = 0; x < this.choices.length; x++){
				if (x == this.selectionIndex%this.choices.length){
					ctx.fillStyle = "#555555"
					ctx.fillRect(100, 105+(50*x), 550, 50);
					ctx.fillStyle = "#FFFFFF";
				} else {
					ctx.fillStyle = "#000000";
				}
				ctx.fillText(this.choices[x], 120, 140+(50*x));
			}
	
			// Update
			return direction;
		} else {
			return direction;
		}
	}

	draw_fight(direction, enemies){
		if (this.showing){
			if (direction == "ArrowDown"){
				this.selectionIndex++;
				direction = "";
			} else if (direction == "ArrowUp"){
				if (this.selectionIndex-1 >= 0){
					this.selectionIndex--;
					direction = "";
				}
			} else if (direction == "Enter"){
				this.choice = this.choices[this.selectionIndex%this.choices.length];
				this.showing = false;
				direction = "";
			}
			ctx.fillStyle = "#DDDDDD";
			ctx.fillRect(10, 10, 730, 170);
	
			ctx.fillStyle = "#000000";
			ctx.font = "30px "+fontStyle;
			ctx.fillText(this.choicesTitle, 20, 45);

			ctx.fillStyle = "#FFFFFF";
			ctx.fillRect(100, 100, 550, 20+(50*this.choices.length));
			// ctx.fillRect(int((750-(10*this.choices.length))/2), 600, 10*this.choices.length, 150);
			ctx.font = "25px "+fontStyle;
			for (let x = 0; x < this.choices.length; x++){
				if (x == this.selectionIndex%this.choices.length){
					ctx.fillStyle = "#555555"
					ctx.fillRect(100, 105+(50*x), 550, 50);
					ctx.fillStyle = "#FFFFFF";
				} else {
					ctx.fillStyle = "#000000";
				}

				if (enemies[x].showing == false){
					ctx.fillStyle = "#FF0000";
				}
				ctx.fillText(this.choices[x], 120, 140+(50*x));
			}
	
			// Update
			return direction;
		} else {
			return direction;
		}
	}

	final_decision(){
		if (this.showing == false){
			return this.choice;
		} else {
			return false;
		}
	}

	final_index(){
		if (this.showing == false){
			return this.selectionIndex;
		} else {
			return false;
		}
	}
}

class Notice{
	constructor(notice, duration, x, y, width, height){
		this.notice = notice;
		this.countdown = duration;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	draw(){
		if (this.countdown > 0){
			let messageLen = (this.notice.length*57);
			this.countdown--;
			ctx.fillStyle = "#b5b5b5";
			ctx.fillRect(this.x-10, this.y-50, this.width, this.height);
		
			ctx.fillStyle = "#000000";
			ctx.font = "30px "+fontStyle;

			//57 * length
			ctx.fillText(this.notice, this.x, this.y);
		}
	}
}

// ------------MATCHING GAME------------
class Matching_Game{
	constructor(){
		let cards = ["1","1","1","1","1","1","1","1","1","1","1","1","5","5","5","5","5","5","10","10"];
		this.cards = shuffle(cards);
		this.showing_cards = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
		this.currentSelectionIdx = 0;
		this.selected1Idx = -1;
		this.selected2Idx = -1;
		this.tries = 0;
		this.showing = true;
		this.first = true;

		this.wait = 15;
	}

	draw(direction){
		if (this.tries < cMATCHINGTRIES){
			ctx.fillStyle = "#000000";
			ctx.font = "30px "+fontStyle;
			ctx.fillText("Coins: "+coins.toString(), 10, 490);

			if (this.wait > 0){
				this.wait--;
				if (this.wait == 0){
					if (this.first){
						this.showing_cards = [];
						this.first = false;
					} else {
						if (this.cards[this.selected1Idx] == this.cards[this.selected2Idx]){
							this.showing_cards.push(this.selected1Idx);
							this.showing_cards.push(this.selected2Idx);
							coins += parseInt(this.cards[this.selected1Idx]);
						} else {
							this.tries++;
						}
						this.selected1Idx = -1;
						this.selected2Idx = -1;
					}
				}
			} else {
				if (direction == "ArrowRight"){
					if (this.currentSelectionIdx < 19){
						this.currentSelectionIdx++;
					}
				} else if (direction == "ArrowLeft"){
					if (this.currentSelectionIdx > 0){
						this.currentSelectionIdx--;
					}
				} else if (direction == "ArrowDown"){
					if (this.currentSelectionIdx+5 < 20){
						this.currentSelectionIdx += 5;
					}
				} else if (direction == "ArrowUp"){
					if (this.currentSelectionIdx-5 >= 0){
						this.currentSelectionIdx -= 5;
					}
				} else if (direction == "Enter"){
					if (this.currentSelectionIdx == this.selected1Idx || this.showing_cards.includes(this.currentSelectionIdx)){
						// dont flip
					} else {
						if (this.selected1Idx == -1){
							this.selected1Idx = this.currentSelectionIdx;
						} else {
							this.selected2Idx = this.currentSelectionIdx;
							this.wait = 10;
						}
					}
				}
			}
			for (let x = 0; x < 4; x++){
				for (let y = 0; y < 5; y++){
					if (this.showing_cards.includes(y+(x*5)) || (y+(x*5)) == this.selected1Idx || (y+(x*5)) == this.selected2Idx){
						ctx.drawImage(cardImgs[this.cards[y+(x*5)]], (y*110)+75, (x*110)+25);
					} else {
						ctx.drawImage(coverImg, (y*110)+75, (x*110)+25);
					}
					if ((y+(x*5)) == this.currentSelectionIdx || (y+(x*5)) == this.selected1Idx){
						ctx.drawImage(selectionImg, (y*110)+75, (x*110)+25);
					}
				}
			}
		} else {
			this.showing = false;
		}
	}
}


// ------------FIGHTING------------
class Fight{
	constructor(enemies){
		this.notice = new Notice("You have no items!", 0, 125, 200, 450, 100);
		this.done = false;
		this.def_up = false;
		this.enemies = enemies;
		this.part = "Player";
		this.first = true;
		this.text;
		this.choice;
		this.enemyIdx;

		this.enemiesObjects = new Array(this.enemies.length);

		// add enemies
		for (let x = 0; x < this.enemies.length; x++){
			this.enemiesObjects[x] = new Enemy((340+(115*x)), 400, this.enemies[x]);
		}
	}

	draw(direction, character){
		character.draw();

		ctx.fillStyle = "#000000";
		ctx.font = "20px "+fontStyle;
		ctx.fillText(character.hp.toString()+" HP", character.position.x+10, character.position.y+75+10);

		if (this.part == "Player"){
			if (this.def_up){
				character.def--;
				this.def_up = false;
			}
			if (this.first){
				this.text = new Choice(["Do Nothing", "Items", "Punch", "Throw"], "Your Turn");
				this.first = false;
			}

			this.text.draw(direction);
			this.choice = this.text.final_decision();

			if (this.choice != false) { // if a choice has been made
				this.first = true;
				if (this.choice == "Do Nothing"){
					this.part = "Enemy";
					this.enemyIdx = 0;
				} else if (this.choice == "Items"){
					if (charItems.length > 0){
						this.part = "Items";
					} else {
						this.notice = new Notice("You have no items!", 10, 135, 250, 450, 100);
					}
				} else if (this.choice == "Punch"){
					this.part = "Punch";
				} else if (this.choice == "Throw"){
					this.part = "Throw";
				}
			}
			// player turn
		} else if (this.part == "Items"){
			if (direction == "Escape"){
				this.part = "Player";
				this.first = true;
			} else {
				if (this.first) {
					this.text = new Choice(charItems, "Which Item do you want to use?");
					this.first = false;
				}
				// select item
				this.text.draw(direction);
				this.choice = this.text.final_decision();

				if (this.choice != false){
					charItems = remove_index(charItems, this.text.final_index());
					this.part = "Enemy";
					this.first = true;

					if (this.choice == "Coconut"){
						this.def_up = true;
						character.def++;
					}
				}
			}
		} else if (this.part == "Punch"){
			if (direction == "Escape"){
				this.part = "Player";
				this.first = true;
			} else {
				// select punch attack
				if (this.first){
					this.text = new Choice(this.enemies, "Which Enemy do you want to Punch?");
					this.first = false;
				}

				this.text.draw_fight(direction, this.enemiesObjects);
				this.choice = this.text.final_index();
				if (this.choice.toString() != "false"){
					this.enemiesObjects[this.choice].attacked(attackPowerPunch);
					this.part = "Enemy";
					this.first = true;
				}
			}
		} else if (this.part == "Throw"){
			if (direction == "Escape"){
				this.part = "Player";
				this.first = true;
			} else {
				// select punch attack
				if (this.first){
					this.text = new Choice(this.enemies, "Which Enemy do you want to Throw at?");
					this.first = false;
				}

				this.text.draw_fight(direction, this.enemiesObjects);
				this.choice = this.text.final_index();
				if (this.choice.toString() != "false"){
					this.enemiesObjects[this.choice].attacked(attackPowerThrow);
					this.part = "Enemy";
					this.first = true;
				}
			}
		} else if (this.part == "Enemy"){
			this.notice = new Notice("You were attacked!", 10, 135, 250, 450, 100);
			// enemy turn
			let defeated_enemies = 0;
			for (let x = 0; x < this.enemiesObjects.length; x++){
				if (this.enemiesObjects[x].showing == false){
					defeated_enemies++;
				} else {
					character.attacked(this.enemiesObjects[x].attackPower);
				}
			}

			if (defeated_enemies == this.enemiesObjects.length){
				this.done = true;
			}
			this.part = "Player";
			this.first = true;
		}

		for (let x = 0; x < this.enemiesObjects.length; x++){
			this.enemiesObjects[x].draw();
			this.enemiesObjects[x].draw_hp();
		}
		this.notice.draw();
	}
}

// ------------Part 1------------

// part 1
class Part1 {
	constructor(storyOn){
		this.done = false;
		this.part = 0

		this.dumboOctopus = new SpriteNode(charImg, 600, 400);
		this.text = new Text(["HELP!!!", "[EG] used the [MI] to steal our color-changing ability!", "And now his henchmen are taking over!", "*Sob* And I can\'t hide now!", "I feel so exposed!", "Please, Help us!"]);

		if (storyOn == false){
			this.dumboOctopus.showing = false;
			this.text.showing = false;
		}
	}

	draw(direction, main_char){
		if (this.done == false){
			if (main_char.position.x >= 750){
				this.done = true;
			}
			main_char.draw();
			this.dumboOctopus.draw();

			if (this.part == 0){
				this.text.draw(direction);
				if (this.text.isShowing() == false){
					this.dumboOctopus.hide();
					this.part = 5;
				}
			}
			if (this.part == 5){
				main_char.move_off_right(direction);
				return "";
			}
		}
	}
}

// part 2
class Part2 {
	constructor(){
		this.fight1 = new FightStarter(150, 400, ["fish", "fish"]);
		this.fight2 = new FightStarter(400, 400, ["fish", "fish"]);
		this.done = false;

		this.currentFight = "";
	}

	draw(direction, character){
		character.draw();
		if (this.currentFight == ""){
			character.move_normal(direction);
			let f1done = this.fight1.draw(direction, character);
			let f2done = this.fight2.draw(direction, character);
			if (f1done == true) {
				this.currentFight = "1";
				return true;
			} else if (f2done == true) {
				this.currentFight = "2";
				return true;
			}
		} else if (this.currentFight == "1"){
			this.fight1.draw(direction, character);
			if (this.fight1.done){
				this.currentFight = "";
			}
		} else if (this.currentFight == "2"){
			this.fight2.draw(direction, character);
			if (this.fight2.done){
				this.currentFight = "";
			}
		}
	}
}

// part 3
class Part3 {
	constructor(){
		this.talking_fish = new ConversationCharacter(enemy_fishImg, 400, 400, ["Hello!", "Welcome to Coral Reef!"]);
	}

	draw(direction, character){
		character.draw();
		this.talking_fish.draw(direction, character);

		if (this.talking_fish.text_created != true){
			character.move_normal(direction);
		}
	}
}
// ----------------------------

//Get Keys
let direction = "";
document.addEventListener("keydown", function(event) {
    direction = event.key;
});

// ----------------------------
// main
// completed = {
// 	part1:false,
// }

part = "3"

// parts_obj = {
// 	"1":Part1,
// 	"2":Part2
// }

character = new Character(15, 400);

first = true;

function update_screen(){
	ctx.fillStyle = "#5577FF";
    ctx.fillRect(0, 0, 750, 500);
	// if (part == "1"){
	// 	if (first) {
	// 		part1 = new Part1(true);
	// 		first = false;
	// 	}
	// 	direction = part1.draw(direction, character);
	// 	if (part1.done){
	// 		character.position = {
	// 			x:15,
	// 			y:400
	// 		}
	// 		part = "2";
	// 		first = true;
	// 	}
	// } else if (part == "1 done"){
	// 	if (first){
	// 		part1 = new Part1(false);
	// 		first = false;
	// 	}
	// 	direction = part1.draw(direction, character);
	// 	if (part1.done){
	// 		character.position = {
	// 			x:15,
	// 			y:400
	// 		}
	// 		part = "2";
	// 		first = true;
	// 	}
	// } else if (part == "2"){
	// 	if (first){
	// 		part2 = new Part2();
	// 		first = false;
	// 	}

	// 	fight_started = part2.draw(direction, character);
	// 	if (fight_started == true){
	// 		character.position = {
	// 			x:15,
	// 			y:400
	// 		}
	// 	}
	// 	if (part2.done){
	// 		character.position = {
	// 			x:15,
	// 			y:400
	// 		}
	// 		part = "3";
	// 		first = true;
	// 	}

	// 	direction = "";
	// } else if (part == "fight 1"){
	// 	if (first){
	// 		fight = new Fight(["fish", "fish"]);
	// 		first = false;
	// 	}
	// 	fight.draw(direction, character);
	// 	direction = "";
	// 	if (fight.done){
	// 		part = "3";
	// 		first = true;
	// 	}
	// } else if (part == "matching") {
	// 	if (first){
	// 		matching = new Matching_Game();
	// 		first = false
	// 	}
	// 	matching.draw(direction);
	// 	direction = "";

	// 	if (matching.done){
	// 		part = "";
	// 		first = true;
	// 	}
	// } else 
	if (part == "3"){
		if (first) {
			part3 = new Part3();
			first = false;
		}
		part3.draw(direction, character);
		direction = "";
		// if (part3.done == true){
		// 	character.position = {
		// 		x:15,
		// 		y:400
		// 	}
		// 	part = "2";
		// 	first = true;
		// }
	}
	// direction = fight.draw(direction, character);
}
// ----------------------------
let game = setInterval(update_screen, 100);



