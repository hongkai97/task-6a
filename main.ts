OLED.init(128, 64)
basic.forever(function () {
    OLED.writeString("Soil moisture:")
    OLED.writeNum(Environment.ReadWaterLevel(AnalogPin.P1))
    OLED.newLine()
    OLED.writeString("Temperature:")
    OLED.writeNum(Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C))
    OLED.newLine()
    OLED.writeString("Humidity:")
    OLED.writeNum(Environment.octopus_BME280(Environment.BME280_state.BME280_humidity))
    OLED.newLine()
    basic.pause(2000)
    OLED.clear()
})
