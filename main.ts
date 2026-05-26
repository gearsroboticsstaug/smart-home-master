let Temperature = 0
led.enable(false)
OLED.init(128, 64)
OLED.writeStringNewLine("GEARS IS #1")
let Strip = neopixel.create(DigitalPin.P3, 1, NeoPixelMode.RGB)
basic.forever(function () {
    Temperature = smarthome.ReadTemperature(TMP36Type.TMP36_temperature_F, AnalogPin.P1)
    OLED.clear()
    OLED.writeString("Temperature:")
    OLED.writeNum(Temperature)
    if (Temperature >= 65) {
        OLED.newLine()
        OLED.writeStringNewLine("T")
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        OLED.newLine()
        OLED.writeStringNewLine("F")
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    basic.pause(100)
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
