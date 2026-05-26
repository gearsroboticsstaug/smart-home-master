OLED.init(128, 64)
let Light = smarthome.ReadLightIntensity(AnalogPin.P1)
let Temperature = smarthome.ReadTemperature(TMP36Type.TMP36_temperature_F, AnalogPin.P8)
let Strip = neopixel.create(DigitalPin.P2, 1, NeoPixelMode.RGB)
basic.forever(function () {
	
})
basic.forever(function () {
    Temperature = smarthome.ReadTemperature(TMP36Type.TMP36_temperature_F, AnalogPin.P5)
    OLED.writeString("Temp:")
    OLED.writeNum(Temperature)
    if (Temperature > 70) {
        smarthome.motorFan(AnalogPin.P16, true)
    } else {
        smarthome.motorFan(AnalogPin.P16, false)
    }
})
