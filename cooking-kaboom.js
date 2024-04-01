kaboom({
  global: true,
  fullscreen: true,
  scale: 1,
  debug: true,
  clearColor: [0, 0, 0, 1],
})

// Speeds
const MOVE_SPEED = 200

// Game Logic
loadRoot('./Images/cooking/')
loadSprite('floor', 'floor.png')
loadSprite('vertical_wall', 'vertical_wall.png')
loadSprite('horizontal_wall', 'horizontal_wall.png')
loadSprite('stove', 'stove.png')
loadSprite('block', 'block.png')

loadSprite('player', 'player.png')

loadSprite('uncooked_steak', 'uncooked_steak.png')
loadSprite('cooked_steak', 'cooked_steak.png')

scene('game', ({ level, score }) => {

    const maps = [
        [
        '----------',
        '|===xx===|',
        '|=      =|',
        '|=      =|',
        '|=      =|',
        '|=      =|',
        '|=      =|',
        '|=      =|',
        '|========|',
        '----------',
        ],
    ]

    const levelCfg = {
        width: 64,
        height: 64,
        "-": () => [sprite("horizontal_wall"), scale(1, 2), area(), solid(), "wall"],
        "|": () => [sprite('vertical_wall'), scale(2, 1), area(), solid(), 'wall'],
        " ": () => [sprite('floor'), scale(1)],
        "x": () => [sprite('stove'), scale(1), area(), solid(), 'block'],
        "=": () => [sprite('block'), scale(1), area(), solid(), 'block'],
    }
    addLevel(maps[level], levelCfg);

//   const scoreLabel = add([
//     text('0'),
//     pos(400, 450),
//     layer('ui'),
//     {
//       value: score,
//     },
//     scale(2),
//   ])

//   add([text('level ' + parseInt(level + 1)), pos(400, 465), scale(2)])

    const player = add([
        sprite('player'),
        pos(200, 200),
        scale(1),
        area(),
        solid(),
        color(100, 200, 255)
    ])

    let items = [];

    function add_item(sprite_name, posX, posY){
        let item = add([
            sprite(sprite_name),
            pos(posX, posY),
            scale(1),
            area(),
        ])
        item.holding = false;
        items.push(item);
    }

    add_item("uncooked_steak", 64*1, 64*1);

    // const textbox = add([
    //     text(player.pos.x),
    //     pos(24, 24),
    //     { value: 0 },
    // ])

    onKeyDown('left', () => {
        player.move(-MOVE_SPEED, 0)
        for (let i = 0; i < items.length; i++){
            if (items[i].holding) {
                items[i].moveTo(player.pos.x-items[i].width, player.pos.y)
            }
        }
    })

    onKeyDown('right', () => {
        player.move(MOVE_SPEED, 0)
        for (let i = 0; i < items.length; i++){
            if (items[i].holding) {
                items[i].moveTo(player.pos.x+items[i].width, player.pos.y)
            }
        }
    })

    onKeyDown('up', () => {
        player.move(0, -MOVE_SPEED)
        for (let i = 0; i < items.length; i++){
            if (items[i].holding) {
                items[i].moveTo(player.pos.x, player.pos.y-items[i].height)
            }
        }
    })

    onKeyDown('down', () => {
        player.move(0, MOVE_SPEED)
        for (let i = 0; i < items.length; i++){
            if (items[i].holding) {
                items[i].moveTo(player.pos.x, player.pos.y+items[i].height)
            }
        }
    })

    onKeyPress('space', () => {
        for (let i = 0; i < items.length; i++){
            if (player.isTouching(items[i])) {
                if (items[i].holding){
                    // drop
                    for (let x = 0; x < get("block").length; x++){
                        if (player.isTouching(get("block")[x])){
                            items[i].holding = false;
                            items[i].moveTo(get("block")[x].pos.x, get("block")[x].pos.y);
                            break;
                        }
                    }
                } else {
                    items[i].holding = true;
                }
            }
        }

    })
})

go('game', { level: 0, score: 0 })