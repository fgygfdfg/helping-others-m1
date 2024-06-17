input.onButtonPressed(Button.A, function () {
    record.playAudio(record.BlockingState.Blocking)
    radio.sendString("help")
    siri()
})
input.onButtonPressed(Button.AB, function () {
    record.startRecording(record.BlockingState.Blocking)
})
radio.onReceivedString(function (receivedString) {
    music.play(music.stringPlayable("C - - - - - - - ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
	
})
function siri () {
    sloth.do_action(sloth.actions(sloth.action_name.walk), 10000000000000000, 100)
}
radio.setTransmitPower(7)
radio.setGroup(1)
basic.forever(function () {
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xffffff)
    basic.showString("if u see me, press a and follow me !")
})
