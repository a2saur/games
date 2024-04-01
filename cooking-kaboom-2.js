kaboom();

const MOVE_SPEED = 10;

// load sprite
loadRoot('./Images/adventure/')
loadSprite("floor", "dirt.png")
loadSprite("player", "floor.png")

// add to screen
const player = add([
    sprite("player"),
    pos(50, 40),
    scale(0.5),
    // rotate(0),
    // color(255, 255, 255),
    area(),
    // body(),
])

add([
    sprite("floor"),
    pos(200, 40),
    scale(0.5),
    // rotate(0),
    // color(255, 255, 255),
    area(),
    solid(),
])

onKeyPress("left", () => {
    player.move(0, 1200)
})

// onKeyPress("space", () => {
//     player.jump();
// })