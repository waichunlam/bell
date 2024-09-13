input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 1; index++) {
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(100)
        music.play(music.tonePlayable(740, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        basic.pause(400)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (nuber == 0) {
        for (let index = 0; index <= pro; index++) {
            basic.clearScreen()
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            basic.pause(1000)
            basic.showString("not at room")
        }
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.clearScreen()
    if (nuber == 0) {
        for (let index = 0; index <= pro; index++) {
            basic.showIcon(IconNames.House)
            basic.pause(1000)
            basic.showString("  at room,ring bell press A")
        }
    } else {
        basic.clearScreen()
    }
})
let nuber = 0
let pro = 0
pro = 10
music.setVolume(160)
basic.forever(function () {
    serial.writeLine("noraml no ring bell")
    pro += 1
    nuber = 0
})
