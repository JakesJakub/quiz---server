radio.set_group(150)
cislo = 0

hlasy = [{"serials": control.device_serial_number(), "vote": cislo}]
print(hlasy)

znak = String.from_char_code(cislo + 65)
prijima = 0

def on_received_value(name, value):
    if prijima == 1:
        radio.send_number(control.device_serial_number())
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