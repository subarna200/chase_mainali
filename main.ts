sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    khanikurasprite.setPosition(randint(5, 160), randint(5, 120))
    info.startCountdown(10)
})
let khanikurasprite: Sprite = null
scene.setBackgroundImage(assets.image`Background`)
let playersprite = sprites.create(assets.image`Player`, SpriteKind.Player)
controller.moveSprite(playersprite, 100, 100)
khanikurasprite = sprites.create(assets.image`khanikura`, SpriteKind.Food)
