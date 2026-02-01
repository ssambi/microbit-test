input.onButtonPressed(Button.A, function () {
	
})
let setpoint = 45
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
