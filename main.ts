radio.setGroup(150)
let odpovedi = [65, 66, 67, 68]
let cislo = 0
let hlasy = [ {
    "serials" : control.deviceSerialNumber(),
    "vote" : cislo,
}
]
console.log(hlasy)
let znak = String.fromCharCode(cislo + 65)
let prijima = 0
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    if (prijima == 1) {
        radio.sendNumber(control.deviceSerialNumber())
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    prijima += 1
    if (prijima == 1) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    
    if (prijima > 1) {
        prijima -= 2
    }
    
})
