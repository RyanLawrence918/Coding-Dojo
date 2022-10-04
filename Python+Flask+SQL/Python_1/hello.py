from random import randint

# def roll20SidedDice():
#     # returns a whole number (interger) between 1 and 20
#     return randint(1, 20)

# print(roll20SidedDice())

def rollDice(number =1, sides = 20):
    #returns a whole number (interger) between 1 and sides, N timnes
    #where N is the number of dice to roll
    sum_of_rolls=0

    for i in range(0, number):
        sum_of_rolls += randint(1, sides)

    return sum_of_rolls

def roll_character(character_name):
    #returns a dictionary, keys are stats for my character (str, con, dex, int etc)
    #values will be numbers from 3 to 18 (3d6 - three six sided dice)
    new_character = {"name": character_name}

    # new_character["STR"] = rollDice(3, 6)
    # new_character["CON"] = rollDice(3, 6)
    # new_character["DEX"] = rollDice(3, 6)
    # new_character["INT"] = rollDice(3, 6)
    # new_character["WIS"] = rollDice(3, 6)
    # new_character["CHA"] = rollDice(3, 6)

    # return character_name

    stats = ["STR", "DEX", "CON", "INT", "WIS", "CHA"]

    for stat in stats:
        new_character[stat] = rollDice(3, 6)

    return new_character

print(roll_character("Trogdor II"))

