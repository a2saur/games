/*
// options
kaboom({
   global: true, // import all kaboom functions to global namespace
   width: 640, // width of canvas
   height: 480, // height of canvas
   canvas: document.getElementById("game"), // use custom canvas
   scale: 2, // pixel size (for pixelated games you might want smaller size with scale)
   clearColor: [0, 0, 1, 1], // background color (default is a checker board background)
   fullscreen: true, // if fullscreen
   crisp: true, // if pixel crisp (for sharp pixelated games)
   debug: false, // debug mode
   plugins: [ asepritePlugin, ], // load plugins
});
*/
 
kaboom({
    global: true,
    fullscreen: false,
    width: 750,
    height: 500,
    scale: 1,
    debug: true,
    clearColor: [1, 1, 1, 1],
 })
  
 loadRoot('root')
 loadSprite('coin', 'image.png') // loadSprite("name", "image location")
  
 screen("game", () => {
    layers(['bg', 'obj', 'ui'], 'obj')
  
    const map = [
        '     ',
        '=====',
    ]
  
    const levelCfg = {
        width: 20,
        height: 20,
        "=": [sprite("coin", solid()), scale(0.5)]
    }
  
    const gameLevel = addLevel(map, levelCfg)
  
    add([
        text(score),
        pos(30, 5),
        layer("ui"),
        {
            value: score,
        }
    ])
  
    add([text("level"+"test", pos(4,6))])
    const player = add([
        sprite("player", solid()),
        postMessage(0, 0),
        body(),
        origin('bot')
    ])
  
    player.on("headbump", (obj) => {
        if (obj.is("coin")) {
            gameLevel.spawn("$", obj.gridPos.sub(0, 1))
            destroy(obj)
        }
    })
  
    action("mushroom", (m) => {
        m.move(0, 10)
    })
  
    player.collides("mushroom", (m) => {
        destroy(m)
    })
  
    keyDown("left", () => {
        player.move(SPEED, 0)
    })
  
    keyPress("space", () => {
        if (player.grounded()) {
            player.move(0, SPEED)
        }
    })
 })
  
 start("game")
 
 