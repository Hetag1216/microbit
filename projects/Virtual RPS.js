radio.onReceivedNumber(function (receivedNumber) {
    time = 0
    flag = 0
    if (flag == 0) {
        if (n == 0) {
            basic.showLeds(`
                . # # # .
                . # . # .
                . # . # .
                . # . # .
                . # # # .
                `)
        } else if (n == 1) {
            basic.showLeds(`
                # # . . #
                # # . # .
                # # # . .
                # # . # .
                # # . . #
                `)
        } else {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
        if (n == 0 && receivedNumber == 0) {
            basic.showString("TIE")
        } else if (n == 0 && receivedNumber == 1) {
            basic.showString("L")
        } else if (n == 0 && receivedNumber == 2) {
            basic.showString("W")
        } else if (n == 1 && receivedNumber == 0) {
            basic.showString("W")
        } else if (n == 1 && receivedNumber == 1) {
            basic.showString("TIE")
        } else if (n == 1 && receivedNumber == 2) {
            basic.showString("L")
        } else if (n == 2 && receivedNumber == 0) {
            basic.showString("showLeds")
        } else if (n == 2 && receivedNumber == 1) {
            basic.showString("W")
        } else {
            basic.showString("TIE")
        }
        flag = 1
        n = -1
    }
})
input.onGesture(Gesture.Shake, function () {
    time = 0
    n = randint(0, 2)
    if (n == 0) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    } else if (n == 1) {
        basic.showLeds(`
            # # . . #
            # # . # .
            # # # . .
            # # . # .
            # # . . #
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    radio.sendNumber(n)
})
let n = 0
let flag = 0
let time = 0
radio.setGroup(0)
basic.forever(function () {
    if (n > 0) {
        time = time + 1
    }
    if (time >= 300) {
        basic.clearScreen()
        n = 0
    }
})
