/**
 * water pump manual test.
 * 
 * A -> open
 * 
 * B -> close
 * 
 * battery 9v
 * 
 * relay 5v
 * 
 * Microbit / Realy pins 
 * 
 * 3v      --- >   +
 * 
 * GND  --- >   -
 * 
 * P0      --- >  S
 * 
 * Relay / PUMP / BATT
 * 
 * NC      --- >   BATT +
 * 
 * MID     --- >   PUMP +
 * 
 * NO ------------------------
 * 
 * Connect Negative to BATT - / PUMP -
 * 
 * (black cable)
 */
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.showIcon(IconNames.Chessboard)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.showIcon(IconNames.Ghost)
    basic.pause(500)
    basic.clearScreen()
})
led.setBrightness(20)
basic.showLeds(`
    . . # . .
    . . . . .
    . . # . .
    . . . . .
    # . . . #
    `)
basic.pause(2000)
basic.showIcon(IconNames.Heart)
basic.clearScreen()
pins.digitalWritePin(DigitalPin.P0, 0)
