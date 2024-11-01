input.onButtonPressed(Button.A, function () {
    Run = 1
})
function SL () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P4, 360)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 360)
}
function BW () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P4, 360)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 0)
}
input.onButtonPressed(Button.B, function () {
    Stop()
})
function FW () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P4, 0)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 360)
}
function SR () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P4, 0)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 0)
}
function Stop () {
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(2000)
}
let Run = 0
basic.showIcon(IconNames.House)
Run = 0
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    if (Run == 1) {
        FW()
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.Green)
        basic.pause(3000)
        Stop()
        BW()
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.Red)
        basic.pause(3000)
        Stop()
        SL()
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.Blue)
        basic.pause(3000)
        Stop()
        SR()
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.Pinkish)
        basic.pause(3000)
        Stop()
        Run = 0
    }
})
