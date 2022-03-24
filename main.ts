enum RadioMessage {
    message1 = 49434,
    Stop = 61268,
    Start = 56380,
    Alarm_Off = 26131
}
radio.onReceivedMessage(RadioMessage.Alarm_Off, function () {
    Alarm = 1
    basic.pause(10000)
    Alarm = 0
})
let Alarm = 0
radio.setGroup(22)
radio.sendMessage(RadioMessage.Stop)
Alarm = 0
basic.forever(function () {
    if (Alarm == 0) {
        if (input.pinIsPressed(TouchPin.P0)) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            pins.digitalWritePin(DigitalPin.P1, 0)
        } else {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
    }
    if (Alarm == 1) {
        basic.showString("Hello Micah")
    }
})
