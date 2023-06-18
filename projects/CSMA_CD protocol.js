let hasWaited = false
let attempt = false
let canSend = false
let data = 0
/**
 * wether or not main can send data
 */
input.onButtonPressed(Button.A, function () {
    data = Math.round(Math.random() * 100)
    if (canSend) {
        basic.showIcon(IconNames.Yes)
        radio.sendNumber(data)
    } else {
        basic.showIcon(IconNames.No)
        attempt = true
    }
})
radio.onReceivedNumber(function (ReceivedNumber) {
    // main can't send data
    canSend = false
    basic.showNumber(ReceivedNumber)
    basic.pause(randint(200, 1000))
    canSend = true
    basic.showIcon(IconNames.Yes)
    // means that main was on hold
    hasWaited = true
})

// data to send
data = -1
canSend = true
radio.setGroup(0)
basic.showIcon(IconNames.SmallDiamond)
basic.showIcon(IconNames.Target)
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . # # # .
    . . # . .
    `)
basic.forever(function () {
    if (canSend && hasWaited && attempt) {
        radio.sendNumber(data)
        hasWaited = false
        attempt = false
    }
})
