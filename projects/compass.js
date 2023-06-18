let d = 0
basic.forever(function () {
    d = input.compassHeading()
    if (d < 45) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (d < 80) {
        basic.showLeds(`
            # # # # .
            # # . . #
            # . # . .
            # . . # .
            . # . . #
            `)
    } else if (d < 127) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (d < 180) {
        basic.showLeds(`
            # # # # .
            # # . . #
            # . # . .
            # . . # .
            . # . . #
            `)
    } else if (d < 220) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (d < 260) {
        basic.showLeds(`
            # . . # .
            . # . . #
            . . # . #
            # . . # #
            . # # # #
            `)
    } else if (d < 290) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . # # # #
            # . . # #
            . . # . #
            . # . . #
            # . . # .
            `)
    }
})
