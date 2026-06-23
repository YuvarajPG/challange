stocks = {
    "AAPL": 180,
    "TSLA": 250,
    "GOOG": 140,
    "AMZN": 130
}

portfolio = {}

n = int(input("How many stocks do you want to add? "))

for _ in range(n):
    name = input("Stock name: ").upper()
    qty = int(input("Quantity: "))
    portfolio[name] = qty

total = 0

print("\n--- Portfolio Summary ---")
for stock, qty in portfolio.items():
    price = stocks.get(stock, 0)
    value = price * qty
    total += value
    print(stock, ":", qty, "x", price, "=", value)

print("\n💰 Total Investment Value:", total)