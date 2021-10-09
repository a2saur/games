// CONSTANTS
const cWIDTH = 900;
const cHEIGHT = 500;
const cSPEED = 200;
const cENEMY_SPEED = 100;
const characters = ["blob", "blob", "squish", "squish", "stab", "stab", "swiff", "swiff"];
const character_times = [25, 25, 75, 75, 50, 50, 75, 75]; // 100 ~ 3-4 secs

// defining things
let wait = -1;
let blob_count = 0;

kaboom({
    global: true,
    fullscreen: false,
    width: cWIDTH,
    height: cHEIGHT,
    scale: 1,
    debug: true,
    background: [0, 0, 0],
})
  
loadRoot('./Images/adventure-')
loadSprite('char', 'sprites.png', {
	sliceX: 8,
	sliceY: 1,
})
loadSprite('floor_block', 'floor.png')
loadSprite('swiff_block', 'swiff.png')
loadSprite('squish_block', 'squish.png')
loadSprite('dirt_block', 'dirt.png')
loadSprite('enemy', 'enemy.png')
loadSprite('coin', 'coin.png')
loadSprite('flag', 'flag.png')


scene("game", ({ level, score }) => {
    // add character to screen, from a list of components
    const player = add([
        sprite("char", {
            animSpeed:1,
            frame:0,
        }),  // renders as a sprite
        scale(0.25),
        pos(120, 80),    // position in world
        area(),          // has a collider
        body(),          // responds to physics and gravity
        // give it tags for controlling group behaviors
        "player",
        "friendly",
    ]);

    const scoreLabel = add([
        text(score),
        pos(30, 6),
        layer('ui'),
        {
        value: score,
        }
    ])

    const maps = [
        [
            "                  ",
            "          ++++    ",
            "          =$ s    ",
            "     +   -----    ",
            "     +            ",
            "     +            ",
            "     +            ",
            "     +      x   > ",
            " ---------------- ",
        ], [
            "                  ",
            "                  ",
            "                  ",
            "                  ",
            "                  ",
            "                  ",
            "        ++++     ",
            "     =====$= x  > ",
            " ---------------- ",
        ]
    ]

    addLevel(maps[level], {
        width: 50,
        height: 50,
        "-": () => [sprite("floor_block"), scale(0.25), area(), solid(),],
        "=": () => [sprite("squish_block"), scale(0.25), area(), solid(), "squish"],
        "x": () => [sprite("enemy"), scale(0.25), area(), solid(), "enemy"],
        "s": () => [sprite("swiff_block"), scale(0.25), area(), solid(), "swiff"],
        "+": () => [sprite("dirt_block"), scale(0.25), area(), solid()],
        "$": () => [sprite("coin"), scale(0.25), area(), "coin"],
        ">": () => [sprite("flag"), scale(0.25), area(), "flag"]
    });

    player.action(() => {
        if (player.grounded()){
            blob_count = 0;
        }
        if (wait >= 0) {
            wait--;
            if (wait == -1) {
                every(characters[player.frame], (obj) => {
                    obj.solid = true;
                });
                player.frame--;
            }
        }
    });
    
    action('enemy', (enemy) => {
        if (enemy.pos.x > player.pos.x){
            enemy.move(-cENEMY_SPEED, 0)
        } else if (enemy.pos.x < player.pos.x) {
            enemy.move(cENEMY_SPEED, 0)
        }
    })

    player.collides(("coin"), (coin) => {
        destroy(coin);
        scoreLabel.value++;
        scoreLabel.text = scoreLabel.value;
    });

    player.collides(("enemy"), (enemy) => {
        if (wait >= 0 && (player.frame == 4 || player.frame == 5)){
            destroy(enemy);
        } else {
            go('lose', { score: scoreLabel.value})
        }
    });

    // when next level
    player.collides(("flag"), () => {
        go('game', {
            level: (level + 1) % maps.length,
            score: scoreLabel.value
        })
    });

    keyPress("space", () => {
        // .jump() is provided by the body() component
        if (wait < 0) {
            wait = character_times[player.frame];
            player.frame++;
            
            every(characters[player.frame], (obj) => {
                obj.solid = false;
            });
        }
        
        if (player.frame == 0 || player.frame == 1) {
            if (blob_count <= 0){
                player.jump();
                blob_count++;
            }
        }
    });

    // jump when player presses "space" key
    keyPress("up", () => {
        // .jump() is provided by the body() component
        if (player.grounded()){
            player.jump();
        }
    });

    keyDown("right", () => {
        player.move(cSPEED, 0);
    });

    keyDown("left", () => {
        player.move(-cSPEED, 0);
    });

    // change char
    keyPress("1", () => {
        if (wait < 0){
            player.frame = 0;
        }
    });

    keyPress("2", () => {
        if (wait < 0){
            player.frame = 2;
        }
    });

    keyPress("3", () => {
        if (wait < 0){
            player.frame = 4;
        }
    });

    keyPress("4", () => {
        if (wait < 0){
            player.frame = 6;
        }
    });
})

scene('lose', ({ score }) => {
    add([text(score, 32), origin('center'), pos(width()/2, height()/2)])
})

go("game", { level: 0, score: 0})