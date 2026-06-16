import hashlib

stored_password = hashlib.sha256("admin123".encode()).hexdigest()

user_input = input("Enter password: ")
hashed_input = hashlib.sha256(user_input.encode()).hexdigest()

if hashed_input == stored_password:
    print("Access granted")
else:
    print("Access denied")