basic.forever(function () {
    if (input.lightLevel() >= 100) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else if (input.lightLevel() == 0) {
        led.unplot(2, 2)
    } else if (input.lightLevel() <= 20) {
        led.plot(2, 2)
        // show core
        led.unplot(1, 1)
        led.unplot(1, 2)
        led.unplot(1, 3)
        led.unplot(2, 1)
        led.unplot(2, 3)
        led.unplot(3, 1)
        led.unplot(3, 2)
        led.unplot(3, 3)
    } else if (input.lightLevel() <= 50) {
        // show inner
        led.plot(1, 1)
        led.plot(1, 2)
        led.plot(1, 3)
        led.plot(2, 1)
        led.plot(2, 3)
        led.plot(3, 1)
        led.plot(3, 2)
        led.plot(3, 3)
        led.unplot(2, 0)
        led.unplot(0, 2)
        led.unplot(2, 4)
        led.unplot(4, 2)
    } else {
        // remove outer
        led.plot(2, 0)
        led.plot(0, 2)
        led.plot(2, 4)
        led.plot(4, 2)
        led.unplot(0, 0)
        led.unplot(0, 4)
        led.unplot(4, 0)
        led.unplot(4, 4)
    }
})
