dstemp.sensorError(function (errorMessage, errorCode, port) {
    basic.showString(errorMessage)
})
input.onButtonPressed(Button.A, function () {
    setpoint = setpoint - 1
    basic.showNumber(setpoint)
})
input.onButtonPressed(Button.B, function () {
    setpoint = setpoint + 1
    basic.showNumber(setpoint)
})
let t = 0
let setpoint = 0
setpoint = 42
let state = false
basic.forever(function () {
    basic.clearScreen()
    t = Math.round(dstemp.celsius(DigitalPin.P2))
    if (t > setpoint) {
        state = false
    } else {
        state = true
    }
    basic.pause(1000)
    if (state) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showIcon(IconNames.Yes)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showIcon(IconNames.No)
    }
    basic.clearScreen()
    basic.showNumber(t)
})
