sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    COMIDA.x = randint(0, scene.screenWidth() - 8)
    COMIDA.y = randint(0, scene.screenHeight() - 8)
    uwu.sayText("nomnom", 500, false)
    info.changeScoreBy(1)
    info.startCountdown(3)
})
let COMIDA: Sprite = null
let uwu: Sprite = null
scene.setBackgroundColor(9)
uwu = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . f f f . . . . f f f . . . 
    . . f f 3 f f . . f f 3 f f . . 
    . . f 3 f 3 f . . f 3 f 3 f . . 
    . . f f f f f f f f f f f f . . 
    . . . f 7 5 3 3 3 3 5 7 f . . . 
    . . . f 5 5 3 3 3 3 5 5 f . . . 
    . . . f 3 1 f 3 3 f 1 3 f . . . 
    . . . f 3 1 1 3 3 1 1 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . f 1 1 1 1 1 1 1 1 1 1 f . . 
    . . f 1 1 f f f f f f 1 1 f . . 
    . . . f 1 1 1 1 1 1 1 1 f . . . 
    . . . . f f 1 1 1 1 f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(uwu)
COMIDA = sprites.create(img`
    ............3333bb..bb33333.....
    ........3bb31111d3b311d111d33...
    .......3bdd11111dbd11d11111113..
    .......bdddd1111bd11d111dd11113.
    ......3d111dd111b11d111dd33d11d3
    ......3d11111dd1d11d111d11d33113
    ....bb3d111111dd13dd111d1dd3b31b
    ...b3d3dd111111dd13dd11d1dddbbdb
    ...3ddd31d111111dd133dddddddb.b.
    ..311111d1ddd1111dd11dddddd33...
    ..3111111d111dd111dd1111dd3313..
    ..bddd1111ddd11dd111d111111113..
    ..311ddd111dddd11dd11ddd1111ddb.
    ..31111dd111dddd11dd111dddddddb.
    ...bd1111d1113ddd11dd1111111d3b.
    ...4dd1111d1113ddd11ddd111d333b.
    ..4dbdddd11d11133ddddddddddddb..
    .4ddbddddd11d111d33ddddddddd3b..
    .4dddb11ddd11dd111d333dddd3bb...
    .4dd55b111d11dd11111d3333bbb....
    .445555b111d11dddd111111ddb.....
    .4455555bd1d311ddddddddddd3.....
    .45455555bb1d3111ddddddd113.....
    .4554555555b333d1111111113......
    455554555555bbb33d11111d33......
    4d555545555555dbbb3d11d33.......
    4dd5555455555ddddd43333.........
    45dd555544ddddddd4..............
    .45dd5555d44dddd4...............
    ..45dd55dddd4444................
    ...45dd55444....................
    ....44444.......................
    `, SpriteKind.Food)
COMIDA.setScale(0.5, ScaleAnchor.Middle)
