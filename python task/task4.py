print("🤖 Chatbot Ready! Type 'bye' to exit")

while True:
    msg = input("You: ").lower()

    if msg in ["hello", "hi"]:
        print("Bot: Hello! How can I help you?")
    elif msg == "how are you":
        print("Bot: I'm fine, thanks!")
    elif msg == "bye":
        print("Bot: Goodbye!")
        break
    else:
        print("Bot: I don't understand that.")