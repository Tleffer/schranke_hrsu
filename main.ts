let platz = 10
basic.forever(function () {
    basic.showString("" + (platz))
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1 && platz > 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        platz += -1
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(2000)
        pins.servoWritePin(AnalogPin.P2, 0)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        platz += 1
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(2000)
        pins.servoWritePin(AnalogPin.P2, 0)
    }
})
