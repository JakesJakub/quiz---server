// Pokud hlasování neprobíhá, server odešle klientovi 0, pokud je však zmáčknuto tlačítko A, hlasování začne a server odešle 1.
// Po přijetí čísla 1, klient povolí vybrání odpovědi. Ta může být změněna kolikrát je potřeba. Jakmile je zmáčknuté logo, momentálně vybraná odpověď se odešle na server.
// Až server přijme odpověď, klientovi odešle "Přijato" a klient dá krátkou melodií vědět, že jeho odpověď byla přijata.
// Pokud je na serveru zmáčknuto znovu tlačítko A, hlasování se zastaví a po zmáčknutí B se zobrazí výsledky.
// Pokud je stisknutý PIN0 kód se zresetuje a server klientovi pošle číslo 2. Jakmile to je přijato, klient se resetuje také.
radio.setGroup(150)
let odpoved = 0
let prijima = 0
let A = 0
let B = 0
let C = 0
let D = 0
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    
    if (prijima == 1) {
        if (odpoved == 0) {
            A += 1
        }
        
        if (odpoved == 1) {
            B += 1
        }
        
        if (odpoved == 2) {
            C += 1
        }
        
        if (odpoved == 1) {
            D += 1
        }
        
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
if (prijima == 0) {
    radio.sendNumber(0)
}

if (prijima == 1) {
    radio.sendNumber(1)
}

radio.onReceivedValue(function on_received_value2(name: string, value: number) {
    if (true) {
        radio.sendString("Přijato")
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    console.log("Výsledky:")
    console.log("A = " + A)
    console.log("B = " + B)
    console.log("C = " + C)
    console.log("D = " + D)
})
input.onPinPressed(TouchPin.P0, function on_pin_pressed_p0() {
    radio.sendNumber(2)
    control.reset()
})
