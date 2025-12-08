input.onButtonPressed(Button.A, function () {
    state = !(state)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
let state = false
state = false
basic.forever(function () {
    if (state) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showIcon(IconNames.Yes)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showIcon(IconNames.No)
    }
})
