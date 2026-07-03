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
  return input.filter((item) => item.stock>0&& item.price < price).map((item) => item.name);
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
    input
      .filter((item) => item.stock > 0)
      .reduce((p, c) => (p += c.price), 0) /
    input.filter((item) => item.stock > 0).length
  );
};
console.log(averagePriceOfAvailableProducts(products));

/* problem 84 */
const highestInventoryValue = (input: ProductType[]): ProductType | null => {
  return (
    input.reduce((p, c) => (p.price * p.stock >  c.stock*c.price ? p : c)) ??
    null
  );
};

console.log(highestInventoryValue(products));

/* problem 85 */
const returnAllProductNames = (input: ProductType[]): string[] => {
  return input.map((item) => item.name + " ( stock: " + item.stock + ")");
};
console.log(returnAllProductNames(products));
