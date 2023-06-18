for (let i = 0; i <= 2; i++) {
    basic.showNumber(3 - i)
    if (i == 2) {
        music.playTone(523, music.beat(BeatFraction.Whole))
    } else if (i == 1) {
        music.playTone(494, music.beat(BeatFraction.Whole))
    } else {
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
}
music.playTone(988, music.beat(BeatFraction.Whole))
basic.clearScreen()
basic.showString("GO")
