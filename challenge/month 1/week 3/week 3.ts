import { ProductType, products } from "../data";

/* day 15 */
/* problem 76 */
const availableProductNamesSorted = (input: ProductType[]): string[] => {
  return input
    .filter((item) => item.stock > 0)
    .map((item) => item.name)
    .sort();
};
console.log(
  "avilable products names sorted",
  availableProductNamesSorted(products),
);

/* problem 77 */
const totalInvValue = (input: ProductType[]): number => {
  return input
    .filter((item) => item.stock > 0)
    .reduce((p, c) => (p += c.stock * c.price), 0);
};
console.log(totalInvValue(products));

/* problem 78 */
const productsBetweenPrice = (
  input: ProductType[],
  min: number,
  max: number,
): string[] => {
  return input
    .filter((item) => item.price > min && item.price < max)
    .map((item) => item.name);
};
console.log(productsBetweenPrice(products, 100, 15000));

/* problem 79 */
const cheapestProduct = (input: ProductType[]): ProductType | null => {
  return input.reduce((p, c) => (p = c.price > p.price ? p : c)) ?? null;
};
console.log(cheapestProduct(products));

/* problem 80 */
const averageStockAbovePrice = (
  input: ProductType[],
  price: number,
): number => {
  return (
    input
      .filter((item) => item.price > price)
      .reduce((p, c) => (p += c.stock), 0) /
    input.filter((item) => item.price > price).length
  );
};
console.log(averageStockAbovePrice(products, 1555));

/* day 16 */
/* problem 81 */
const availableCheapProducts = (
  input: ProductType[],
  price: number,
): string[] => {
  return input
    .filter((item) => item.stock > 0 && item.price < price)
    .map((item) => item.name);
};
console.log(availableCheapProducts(products, 5000));

/* problem 82 */
const totalStockContainingLetter = (
  input: ProductType[],
  letter: string,
): number => {
  return input
    .filter((item) => item.name.toLowerCase().includes(letter.toLowerCase()))
    .reduce((p, c) => (p += c.stock), 0);
};
console.log(totalStockContainingLetter(products, "L"));

/* problem 83 */
const averagePriceOfAvailableProducts = (input: ProductType[]): number => {
  return (
    input.filter((item) => item.stock > 0).reduce((p, c) => (p += c.price), 0) /
    input.filter((item) => item.stock > 0).length
  );
};
console.log(averagePriceOfAvailableProducts(products));

/* problem 84 */
const highestInventoryValue = (input: ProductType[]): ProductType | null => {
  return (
    input.reduce((p, c) => (p.price * p.stock > c.stock * c.price ? p : c)) ??
    null
  );
};

console.log(highestInventoryValue(products));

/* problem 85 */
const returnAllProductNames = (input: ProductType[]): string[] => {
  return input.map((item) => item.name + " ( stock: " + item.stock + ")");
};
console.log(returnAllProductNames(products));

/* day 17 */
/* problem 86 */
const availableProductsStartingWith = (
  input: ProductType[],
  letter: string,
): string[] => {
  return input
    .filter(
      (item) =>
        item.name.toLowerCase().startsWith(letter.toLowerCase()) &&
        item.stock > 0,
    )
    .map((item) => item.name);
};
console.log(availableProductsStartingWith(products, "m"));

/* problem 87 */
const expensiveInventoryValue = (
  input: ProductType[],
  price: number,
): number => {
  return input
    .filter((item) => item.price > price)
    .reduce((p, c) => (p += c.price * c.stock), 0);
};
console.log(expensiveInventoryValue(products, 1000));

/* problem 88 */
const everyAvailableProductAbovePrice = (
  input: ProductType[],
  price: number,
): boolean => {
  return input
    .filter((item) => item.stock > 0)
    .every((item) => item.price > price);
};
console.log(everyAvailableProductAbovePrice(products, 17000));

/* problem 89 */
const firstHighInventoryProduct = (
  input: ProductType[],
  value: number,
): ProductType | null => {
  return input.find((item) => item.price * item.stock > value) ?? null;
};
console.log(firstHighInventoryProduct(products, 2000));

/* problem 90 */
const averageInventoryValue = (input: ProductType[]): number => {
  return (
    input.reduce((p, c) => (p += c.price * c.stock), 0) /
    input.filter((item) => item.stock > 0).length
  );
};
console.log(averageInventoryValue(products));

/* day 18 */
/* problem 91 */
const availableHighInventoryNames = (
  input: ProductType[],
  value: number,
): string[] => {
  return input
    .filter((item) => item.stock > 0 && item.price * item.stock > value)
    .map((item) => item.name);
};
console.log(availableHighInventoryNames(products, 2));

/* problem 92 */
const totalPriceEndingWith = (input: ProductType[], letter: string): number => {
  return input
    .filter((item) => item.name.toLowerCase().endsWith(letter.toLowerCase()))
    .reduce((p, c) => (p += c.price), 0);
};
console.log(totalPriceEndingWith(products, "e"));

/* problem 93 */
const hasAvailableProductContaining = (
  input: ProductType[],
  text: string,
): boolean => {
  return input.some(
    (item) =>
      item.stock > 0 && item.name.toLowerCase().includes(text.toLowerCase()),
  );
};
console.log(hasAvailableProductContaining(products, "o"));

/* problem 94 */
const lowestInventoryProduct = (input: ProductType[]): ProductType | null => {
  return (
    input
      .filter((item) => item.stock > 0)
      .reduce((p, c) => (p.price * p.stock < c.price * c.stock ? p : c)) ?? null
  );
  //idk i did some thing
  // i give up i dont know how to sort this sh*t without sort()
};
console.log(lowestInventoryProduct(products));

/* problem 95 */
const labels = (input: ProductType[]): string[] => {
  return input.map(
    (item) => `${item.name} - ${item.price} (Stock : ${item.stock})`,
  );
};
console.log(labels(products));

/* day 19 */
/* problem 96 */
const availableProductsBetweenPrice = (
  input: ProductType[],
  min: number,
  max: number,
): string[] => {
  return input
    .filter((item) => item.stock > 0 && item.price > min && item.price < max)
    .map((item) => item.name);
};
console.log(availableProductsBetweenPrice(products, 200, 1000));

/* problem 97 */
const totalStockStartingWith = (
  input: ProductType[],
  letter: string,
): number => {
  return input
    .filter((item) => item.name.toLowerCase().startsWith(letter.toLowerCase()))
    .reduce((p, c) => (p += c.stock), 0);
};
console.log(totalStockStartingWith(products, "m"));
/* problem 98 */
const averageInventoryValueAbovePrice = (
  input: ProductType[],
  price: number,
): number => {
  return (
    input
      .filter((item) => item.price > price)
      .reduce((p, c) => (p += c.price * c.stock), 0) /
    input.filter((item) => item.price > price).length
  );
};
console.log(averageInventoryValueAbovePrice(products, 1000));

/* problem 99 */
const highestPriceProduct = (input: ProductType[]): ProductType | null => {
  return input.reduce((p, c) => (p.price > c.price ? p : c)) ?? null;
};
console.log(highestPriceProduct(products));

/* problem 100 */
const availableProductLabels = (input: ProductType[]): string[] => {
  return input
    .filter((item) => item.stock > 0)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((item) => `${item.name} - $${item.price}`);
};
console.log(availableProductLabels(products));

/* day 20 */
/* problem 101 */
const availableCheapProductsContaining = (
  input: ProductType[],
  price: number,
  text: string,
): string[] => {
  return input
    .filter(
      (item) =>
        item.stock > 0 &&
        item.price < price &&
        item.name.toLowerCase().includes(text.toLowerCase()),
    )
    .map((item) => item.name);
};
console.log(availableCheapProductsContaining(products, 1000, "e"));

/* problem 102 */
const totalInventoryValueStartingWith = (
  input: ProductType[],
  letter: string,
): number => {
  return input
    .filter((item) => item.name.toLowerCase().startsWith(letter.toLowerCase()))
    .reduce((p, c) => (p += c.price * c.stock), 0);
};
console.log(totalInventoryValueStartingWith(products, "m"));

/* problem 103 */
const everyAvailableInventoryAbove = (
  input: ProductType[],
  value: number,
): boolean => {
  return input
    .filter((item) => item.stock > 0)
    .every((item) => item.price * item.stock > value);
};
console.log(everyAvailableInventoryAbove(products, 1000));

/* problem 104 */
const lowestPriceProduct = (input: ProductType[]): ProductType | null => {
  return input.reduce((p, c) => (p.price < c.price ? p : c)) ?? null;
};
console.log(lowestPriceProduct(products));

/* problem 105 */
const productLabelsSortedByPrice = (input: ProductType[]): string[] => {
  return input
    .sort((a, b) => a.price - b.price)
    .map((item) => `${item.name} - $${item.price}`);
};
console.log(productLabelsSortedByPrice(products));

/* day 21 */
/* problem 106 */
const availableLowInventoryNames = (
  input: ProductType[],
  value: number,
): string[] => {
  return input
    .filter((item) => item.price * item.stock < value && item.stock > 0)
    .map((item) => item.name);
};
console.log(availableLowInventoryNames(products, 2000));

/* problem 107 */
const totalStockBetweenPrices = (
  input: ProductType[],
  min: number,
  max: number,
): number => {
  return input
    .filter((item) => item.stock > 0 && item.price < max && item.price > min)
    .reduce((p, c) => (p += c.stock), 0);
};
console.log(totalStockBetweenPrices(products, 100, 5000));

/* problem 108 */
const hasAvailableProductEndingWith = (
  input: ProductType[],
  letter: string,
  price: number,
): boolean => {
  return input
    .filter((item) => item.price > price && item.stock > 0)
    .some((item) => item.name.toLowerCase().endsWith(letter.toLowerCase()));
};
console.log(hasAvailableProductEndingWith(products, "e", 400));

/* problem 109 */
const highestStockProduct = (input: ProductType[]): ProductType | null => {
  return input.reduce((p, c) => (p.stock > c.stock ? p : c)) ?? null;
};
console.log(highestStockProduct(products));

/* problem 110 */
const inventoryLabelsAlphabetically = (input: ProductType[]): string[] => {
  return input
    .filter((item) => item.stock > 0)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((item) => `${item.name} - Inventory: ${item.price * item.stock}`);
};
console.log(inventoryLabelsAlphabetically(products));

/* day 22 */
/* problem 111 */
const availableProductsByInventoryRange = (
  input: ProductType[],
  min: number,
  max: number,
): string[] => {
  return input
    .filter(
      (item) =>
        item.stock > 0 &&
        item.price * item.stock > min &&
        item.price * item.stock < max,
    )
    .map((item) => item.name);
};
console.log(availableProductsByInventoryRange(products, 1000, 50000));

/* problem 112 */
const totalInventoryContaining = (
  input: ProductType[],
  text: string,
): number => {
  return input
    .filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
    .reduce((p, c) => (p += c.price * c.stock), 0);
};
console.log(totalInventoryContaining(products, "b"));

/* problem 113 */
const everyExpensiveProductAvailable = (
  input: ProductType[],
  price: number,
): boolean => {
  return input
    .filter((item) => item.price > price)
    .every((item) => item.stock > 0);
};
console.log(everyExpensiveProductAvailable(products, 5000));

/* problem 114 */
const highestInventoryProduct = (input: ProductType[]): ProductType | null => {
  return (
    input.reduce((p, c) => (p.price * p.stock > c.price * c.stock ? p : c)) ??
    null
  );
};
console.log(highestInventoryProduct(products));

/* problem 115 */
const inventoryLabelsByValue = (input: ProductType[]): string[] => {
  return input
    .filter((item) => item.stock > 0)
    .sort((a, b) => b.price * b.stock - a.price * a.stock)
    .map((item) => `${item.name} - Inventory: ${item.price * item.stock}`);
};
console.log(inventoryLabelsByValue(products));

/* day 23 */
/* problem 116 */
const availableLongProductNames = (
  input: ProductType[],
  length: number,
): string[] => {
  return input
    .filter((item) => item.stock > 0 && item.name.length > length)
    .map((item) => item.name);
};
console.log(availableLongProductNames(products, 2));

/* problem 117 */
const totalStockHighInventory = (
  input: ProductType[],
  value: number,
): number => {
  return input
    .filter((item) => item.price * item.stock > value)
    .reduce((p, c) => (p += c.stock), 0);
};
console.log(totalStockHighInventory(products, 2));

/* problem 118 */
const hasInventoryContaining = (
  input: ProductType[],
  value: number,
  text: string,
): boolean => {
  return input.some(
    (item) =>
      item.stock > 0 &&
      item.name.toLowerCase().includes(text.toLowerCase()) &&
      item.price * item.stock > value,
  );
};
console.log(hasInventoryContaining(products, 2, "s"));

/* problem 119 */
const lowestStockProduct = (input: ProductType[]): ProductType | null => {
  return input.reduce((p, c) => (p.stock < c.stock ? p : c)) ?? null;
};
console.log(lowestStockProduct(products));

/* problem 120 */
const alphabeticalProductLabels = (input: ProductType[]): string[] => {
  return input
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((item) => `${item.name} (${item.price}) Stock: ${item.stock}`);
};
console.log(alphabeticalProductLabels(products));

/* day 24 */
/* problem 121 */
const productNamesByStockRange = (
  input: ProductType[],
  min: number,
  max: number,
): string[] => {
  return input
    .filter((item) => item.stock > min && item.stock < max)
    .map((item) => item.name);
};
console.log(productNamesByStockRange(products, 2, 3));

/* problem 122 */
const availableCheapInventory = (
  input: ProductType[],
  price: number,
): number => {
  return input
    .filter((item) => item.stock > 0 && item.price < price)
    .reduce((p, c) => (p += c.price * c.stock), 0);
};
console.log(availableCheapInventory(products, 200));

/* problem 123 */
const everyAvailableContains = (
  input: ProductType[],
  text: string,
): boolean => {
  return input
    .filter((item) => item.stock > 0)
    .every((item) => item.name.toLowerCase().includes(text.toLowerCase()));
};
console.log(everyAvailableContains(products, "s"));

/* problem 124 */
const highestAvailablePriceProduct = (
  input: ProductType[],
): ProductType | null => {
  return (
    input
      .filter((item) => item.stock > 0)
      .reduce((p, c) => (p.price > c.price ? p : c)) ?? null
  );
};
console.log(highestAvailablePriceProduct(products));

/* problem 125 */
const labelsSortedByStock = (input: ProductType[]): string[] => {
  return input
    .sort((a, b) => b.stock - a.stock)
    .map((item) => `${item.name} - Stock: ${item.stock}`);
};
console.log(labelsSortedByStock(products));

/* day 25 */
/* problem 126 */
const productsAboveAverageInventory = (input: ProductType[]): string[] => {
  const avg =
    input
      .filter((item) => item.stock > 0)
      .reduce((p, c) => (p += c.price * c.stock), 0) /
    input.filter((item) => item.stock > 0).length;
  return input
    .filter((item) => item.stock > 0 && item.price * item.stock > avg)
    .map((item) => item.name);
};
console.log(productsAboveAverageInventory(products));

/* problem 127 */
const totalPriceStartingWith = (
  input: ProductType[],
  letter: string,
): number => {
  return input
    .filter((item) => item.name.toLowerCase().startsWith(letter.toLowerCase()))
    .reduce((p, c) => (p += c.price), 0);
};
console.log(totalPriceStartingWith(products, "e"));

/* problem 128 */
const noAvailableZeroStock = (input: ProductType[]): boolean => {
  return input.every((item) => item.stock > 0); //wtf is this question no clue
};
console.log(noAvailableZeroStock(products));

/* problem 129 */
const highestAvailableInventory = (
  input: ProductType[],
): ProductType | null => {
  return (
    input
      .filter((item) => item.stock > 0)
      .reduce((p, c) => (p.price * p.stock > c.price * c.stock ? p : c)) ?? null
  );
};
console.log(highestAvailableInventory(products));

/* problem 130 */
const inventoryLabelsLowestFirst = (input: ProductType[]): string[] => {
  return input
    .sort((a, b) => a.stock * a.price - b.stock * b.price)
    .map((item) => `${item.name} - Inventory: ${item.price * item.stock}`);
};
console.log(inventoryLabelsLowestFirst(products));
