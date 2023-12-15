function getAngle (angle: number) {
    return 180 - angle
}
let shoulder_angle = 180
let elbow_angle = 180
while (pins.analogReadPin(AnalogPin.P0) > 0) {
    basic.showIcon(IconNames.Sad)
}
while (pins.analogReadPin(AnalogPin.P1) > 0) {
    basic.showIcon(IconNames.Asleep)
}
basic.showIcon(IconNames.Happy)
pins.servoWritePin(AnalogPin.P12, getAngle(0))
basic.pause(500)
pins.servoWritePin(AnalogPin.P12, getAngle(5))
basic.pause(500)
pins.servoWritePin(AnalogPin.P12, getAngle(0))
basic.pause(500)
pins.servoWritePin(AnalogPin.P13, getAngle(0))
basic.pause(500)
pins.servoWritePin(AnalogPin.P13, getAngle(5))
basic.pause(500)
pins.servoWritePin(AnalogPin.P13, getAngle(0))
basic.clearScreen()
basic.forever(function () {
    if (shoulder_angle < getAngle(pins.analogReadPin(AnalogPin.P0) / 1023 * 180)) {
        shoulder_angle += 1
    } else if (shoulder_angle > getAngle(pins.analogReadPin(AnalogPin.P0) / 1023 * 180)) {
        shoulder_angle += -1
    }
    pins.servoWritePin(AnalogPin.P12, shoulder_angle)
    if (elbow_angle < getAngle(pins.analogReadPin(AnalogPin.P1) / 1023 * 180)) {
        elbow_angle += 1
    } else if (elbow_angle > getAngle(pins.analogReadPin(AnalogPin.P1) / 1023 * 180)) {
        elbow_angle += -1
    }
    pins.servoWritePin(AnalogPin.P13, elbow_angle)
})
