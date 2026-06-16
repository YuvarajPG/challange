import random

words = ["apple", "tiger", "house", "river", "plant"]
word = random.choice(words)

guessed = []
tries = 6

print("🎮 Welcome to Hangman!")

while tries > 0:
    display = ""

    for letter in word:
        if letter in guessed:
            display += letter + " "
        else:
            display += "_ "

    print("\nWord:", display)

    # Check win condition
    if "_" not in display:
        print("🎉 You won!")
        break

    guess = input("Guess a letter: ").lower()

    # Input validation
    if len(guess) != 1 or not guess.isalpha():
        print("❌ Please enter a single letter.")
        continue

    if guess in guessed:
        print("⚠️ Already guessed!")
        continue

    guessed.append(guess)

    if guess not in word:
        tries -= 1
        print("❌ Wrong! Tries left:", tries)
    else:
        print("✅ Correct!")

if tries == 0:
    print("💀 Game Over! Word was:", word)