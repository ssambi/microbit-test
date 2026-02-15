input.onButtonPressed(Button.A, function () {
    setpoint = setpoint - 1
    basic.showNumber(setpoint)
})
input.onButtonPressed(Button.B, function () {
    setpoint = setpoint + 1
    basic.showNumber(setpoint)
})
let setpoint = 0
setpoint = 37
let state = false
basic.forever(function () {
    basic.clearScreen()
    if (input.temperature() > setpoint) {
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
    basic.showNumber(input.temperature())
})
