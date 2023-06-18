let sound = 0
basic.forever(function () {
    sound = input.soundLevel()
    led.plotBarGraph(sound, 0)
})
