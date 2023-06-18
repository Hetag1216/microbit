input.onButtonPressed(Button.A, function () {
    sceltaA = randint(0, 2)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    sceltaB = randint(0, 2)
    basic.clearScreen()
})
let count = 0
let A = 0
let B = 0
let end = false
let sceltaB = 0
let sceltaA = 0
sceltaA = -1
sceltaB = -1
basic.clearScreen()
basic.forever(function () {
    if (!(end)) {
        // do nothing
        if (sceltaA == 0) {
            basic.showLeds(`
                . # # # .
                . # . # .
                . # . # .
                . # . # .
                . # # # .
                `)
        } else if (sceltaA == 1) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        } else if (sceltaA == 2) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        } else {
        	
        }
        // do nothing
        if (sceltaB == 0) {
            basic.showLeds(`
                . # # # .
                . # . # .
                . # . # .
                . # . # .
                . # # # .
                `)
        } else if (sceltaB == 1) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        } else if (sceltaB == 2) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        } else {
        	
        }
        if (sceltaA != -1 && sceltaB != -1) {
            // 0 = paper
            // 1 = scissor
            // 2 = rock
            if (sceltaA == 0) {
                // do nothing
                if (sceltaB == 1) {
                    basic.showString("B")
                    B += 1
                } else if (sceltaB == 2) {
                    A += 1
                    basic.showString("A")
                } else {
                    basic.showString("P")
                }
            } else if (sceltaA == 1) {
                if (sceltaB == 0) {
                    A += 1
                    basic.showString("A")
                } else if (sceltaB == 1) {
                    basic.showString("P")
                } else {
                    B += 1
                    basic.showString("B")
                }
            } else {
                if (sceltaB == 0) {
                    B += 1
                    basic.showString("B")
                } else if (sceltaB == 1) {
                    A += 1
                    basic.showString("A")
                } else {
                    basic.showString("P")
                }
            }
            sceltaA = -1
            sceltaB = -1
            count += 1
            basic.clearScreen()
            if (count == 3) {
                end = true
            }
        }
    } else {
        if (A > B) {
            basic.showString("A wins")
        } else if (A < B) {
            basic.showString("B wins")
        } else {
            basic.showString("Tie")
        }
    }
})
