function UpdateScore () {
    OLED.clear()
    OLED.writeStringNewLine("Player A:" + player_a)
    OLED.clear()
    OLED.writeStringNewLine("Player B:" + player_b)
    OLED.clear()
    OLED.writeStringNewLine("Ties:" + player_b)
    OLED.clear()
    OLED.writeStringNewLine("Ties:" + player_b)
}
let player_b = 0
let player_a = 0
OLED.init(128, 64)
let total_rounds = 0
player_a = 0
player_b = 0
let ties = 0
OLED.writeStringNewLine("Shall we play rock paper scissors?")
basic.pause(2000)
