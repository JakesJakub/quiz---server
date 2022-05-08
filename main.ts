// Pokud hlasování neprobíhá, server odešle klientovi 0, pokud je však zmáčknuto tlačítko A, hlasování začne a server odešle 1.
// Po přijetí čísla 1, klient povolí vybrání odpovědi. Ta může být změněna kolikrát je potřeba. Jakmile je zmáčknuté logo, momentálně vybraná odpověď se odešle na server.
// Až server přijme odpověď, klientovi odešle "Přijato" a klient dá krátkou melodií vědět, že jeho odpověď byla přijata.
// Pokud je na serveru zmáčknuto znovu tlačítko A, hlasování se zastaví a po zmáčknutí B se zobrazí výsledky.
// Pokud je stisknutý PIN0 kód se zresetuje a server klientovi pošle číslo 2. Jakmile to je přijato, klient se resetuje také.
radio.setGroup(150)
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
    
    if (prijima == 1) {
        radio.sendNumber(control.deviceSerialNumber())
    }
    
    if (odpoved == 0) {
        A += 1
    }
    
    if (odpoved == 1) {
        B += 1
    }
    
    if (odpoved == 2) {
        C += 1
    }
    
    if (odpoved == 3) {
        D += 1
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
