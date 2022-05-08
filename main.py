#Pokud hlasování neprobíhá, server odešle klientovi 0, pokud je však zmáčknuto tlačítko A, hlasování začne a server odešle 1.
#Po přijetí čísla 1, klient povolí vybrání odpovědi. Ta může být změněna kolikrát je potřeba. Jakmile je zmáčknuté logo, momentálně vybraná odpověď se odešle na server.
#Až server přijme odpověď, klientovi odešle "Přijato" a klient dá krátkou melodií vědět, že jeho odpověď byla přijata.
#Pokud je na serveru zmáčknuto znovu tlačítko A, hlasování se zastaví a po zmáčknutí B se zobrazí výsledky.
#Pokud je stisknutý PIN0 kód se zresetuje a server klientovi pošle číslo 2. Jakmile to je přijato, klient se resetuje také.
radio.set_group(150)
odpoved = 0
prijima = 0
A = 0
B = 0
C = 0
D = 0

znak = String.from_char_code(odpoved + 65)

def on_received_value(name, value):
    global A, B, C, D
    if prijima == 1:
        if odpoved == 0:
            A += 1
        if odpoved == 1:
            B += 1
        if odpoved == 2:
            C += 1
        if odpoved == 1:
            D += 1
radio.on_received_value(on_received_value)

def on_button_pressed_a():
    global prijima
    prijima += 1
    if prijima == 1:
        basic.show_icon(IconNames.YES)
    else:
        basic.show_icon(IconNames.NO)
        
    if prijima > 1:
        prijima -= 2
input.on_button_pressed(Button.A, on_button_pressed_a)

if prijima == 0:
    radio.send_number(0)
if prijima == 1:
    radio.send_number(1)

def on_received_value2(name, value):
    if True:
        radio.send_string("Přijato")
radio.on_received_value(on_received_value2)

def on_button_pressed_b():
    print("Výsledky:")
    print("A = " + A)
    print("B = " + B)
    print("C = " + C)
    print("D = " + D)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_pressed_p0():
    radio.send_number(2)
    control.reset()
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)