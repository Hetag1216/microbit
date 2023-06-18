let n = 0
radio.setGroup(0)
radio.onReceivedNumber(function (receivedNumber) {
    if (n < receivedNumber) {
        basic.showLeds(`
            . # # # .
            . # . . #
            . # . . #
            . # # # .
            . # . . .
            `)
    } else if (n > receivedNumber) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            . # . # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    n = randint(1, 6)
    basic.showNumber(n)
    radio.sendNumber(n)
})
