let state = false
input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    state = !(state)
    if (state) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showIcon(IconNames.Yes)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showIcon(IconNames.No)
    }
})
