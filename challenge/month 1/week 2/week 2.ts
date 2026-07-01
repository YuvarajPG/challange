import {
  products,
  ProductType,
  unSortedArr,
  ProductTypeWithOutStock,
} from "../data";

/* day 8 */
/* problem 41 */
const arraysOfObjects = (input: ProductType[]): string[] => {
  return input.map((item) => {
    return item.name.toUpperCase();
  });
};
console.log(arraysOfObjects(products));

/* problem 42 */
const calculateTotalstock = (input: ProductType[]) => {
  return input.reduce((prev, curr) => (prev += curr.stock), 0);
};
console.log(calculateTotalstock(products));

/* Problem 43 */
const outOfStock = (input: ProductType[]) => {
  return input.filter((item) => item.stock === 0);
};
console.log(outOfStock(products));

/* problem 44 */
const getCheapProductNames = (input: ProductType[], price: number) => {
  return input.filter((item) => item.price < price).map((item) => item.name);
};
console.log("cheapest product is ", getCheapProductNames(products, 12000));

/* problem 45 */
const findProductStartingWith = (
  input: ProductType[],
  searchingLetter: string,
): ProductType | null => {
  if (!searchingLetter) return null;
  const found = input.find((item) =>
    item.name.toLocaleLowerCase().startsWith(searchingLetter.toLowerCase()),
  );
  return found ?? null;
};
console.log(findProductStartingWith(products, "e"));

/* day 9 */
/* problem 46 */
const findIndex = (input: ProductType[], seaching: string): number => {
  return input.findIndex(
    (item) => item.name.toLowerCase() === seaching.toLowerCase(),
  );
};
console.log(findIndex(products, "mouse"));

/* problem 47 */
const getLastProduct = (input: ProductType[]): ProductType => {
  return input.at(-1)!;
};
console.log(getLastProduct(products));

/* problem 48 */
const getFirstTwoProducts = (input: ProductType[]): ProductType[] => {
  return input.slice(-2);
};
console.log(getFirstTwoProducts(products));

/* problem 49 */
const reverseProduct = (input: ProductType[]): ProductType[] => {
  return input.reverse();
};
console.log(reverseProduct(products));

/* problem 50 */
const allProductNames = (input: ProductType[]): string => {
  return input.map((item) => item.name).join(", ");
};
console.log(allProductNames(products));

/* day 10 */
/* problem 51 */
const countProductsWithLetter = (
  input: ProductType[],
  letter: string,
): number | any => {
  let count = 0;
  input
    .map((item) => item.name.includes(letter))
    .filter((item) => (item ? count++ : 0));
  return count;
};
console.log(countProductsWithLetter(products, "o"));

/* problem 52 */
const longProductNames = (input: ProductType[], length: number): string[] => {
  return input.map((item) => item.name).filter((item) => item.length > length);
};
console.log(longProductNames(products, 6));

/* problem 53 */
const createLabel = (input: ProductType[]): string[] | any => {
  return input.map((item) => item.name + " $" + item.price);
};
console.log(createLabel(products));

/* problem 54 */
const allProductNamesContains = (
  input: ProductType[],
  length: number,
): boolean => {
  return input.map((item) => item.name).every((item) => item.length > length);
};
console.log(allProductNamesContains(products, 3));

/* problem 55 */
const firstProductNameEndsWith = (
  input: ProductType[],
  letter: string,
): ProductType | null => {
  return input.find((item) => item.name.endsWith(letter)) ?? null;
};
console.log(firstProductNameEndsWith(products, "d"));

/* day 11 */
/* problem 56 */
const lowercase = (input: ProductType[]): string[] => {
  return input.map((item) => item.name.toLowerCase());
};
console.log(lowercase(products));

/* problem 57 */
const availableProducts = (input: ProductType[]): ProductType[] => {
  return input.filter((item) => item.stock > 0);
};
console.log(availableProducts(products));

/* problem 58 */
const expensiveProductNames = (
  input: ProductType[],
  price: number,
): string[] => {
  return input.filter((item) => item.price > price).map((item) => item.name);
};
console.log(expensiveProductNames(products, 10000));

/* problem 59 */
const outOfStockMethod = (input: ProductType[]): boolean => {
  return input.some((item) => item.stock === 0);
};
console.log("out of stocks", outOfStockMethod(products));

/* problem 60 */
const totalValueOfAllProductsInStock = (input: ProductType[]): number => {
  return input
    .filter((item) => item.stock > 0)
    .reduce((prev, curr) => (prev += curr.price * curr.stock), 0);
};
console.log("total values", totalValueOfAllProductsInStock(products));

/* day 12 */
/* problem 61 */
const availableProductNames = (input: ProductType[]): string[] => {
  return input.filter((item) => item.stock > 0).map((item) => item.name);
};
console.log("available products names", availableProductNames(products));

/* problem 62 */
const stockGreaterThan = (input: ProductType[], stock: number): number => {
  return input.filter((item) => item.stock > stock).length;
};
console.log("stock greater", stockGreaterThan(products, 2));

/* problem 63 */
const findFirstExpensiveProduct = (
  input: ProductType[],
  price: number,
): ProductType | null => {
  return input.find((item) => item.price >= price) ?? null;
};
console.log("find first expensive", findFirstExpensiveProduct(products, 2000));

/* problem 64 */
const totalStock = (input: ProductType[], price: number): number => {
  return input
    .filter((item) => item.price > price)
    .reduce((prev, curr) => (prev += curr.stock), 0);
};
console.log("total stock", totalStock(products, 2000));

/* problem 65 */
const checkWhetherEveryProducts = (input: ProductType[]): boolean => {
  return input.every((item) => item.name.length > 0);
};
console.log(checkWhetherEveryProducts(products));

/* day 13 */
/* problem 66 */
const averageStock = (input: ProductType[]): number => {
  return input.reduce((prev, curr) => (prev += curr.stock), 0) / input.length;
};
console.log(averageStock(products));

/* problem 67 */
const namesOfAllProductsGreatThan = (
  input: ProductType[],
  length: number,
): string[] => {
  return input.filter((item) => item.stock > length).map((item) => item.name);
};
console.log(namesOfAllProductsGreatThan(products, 5));

/* problem 68 */
const CountHowManyProductNamesStartWith = (
  input: ProductType[],
  letter: string,
): number => {
  return input.filter((item) =>
    item.name.toLocaleLowerCase().startsWith(letter.toLowerCase()),
  ).length;
};
console.log(
  "Count How Many Product Names StartWith ",
  CountHowManyProductNamesStartWith(products, "M"),
);

/* problem 69 */
const totalPriceOfProducts = (input: ProductType[]): number => {
  return input
    .filter((item) => item.stock !== 0)
    .reduce((prev, curr) => (prev += curr.price * curr.stock), 0)!;
};
console.log(totalPriceOfProducts(products));

/* problem 70 */
const highestStockProduct = (
  input: ProductTypeWithOutStock[],
): ProductTypeWithOutStock | null => {
  return (
    input.reduce((prev, curr) => {
      return prev.stock! > curr.stock! ? prev : curr;
    }) ?? null
  );
};
console.log("highest stock product", highestStockProduct(products));

/* day 14 */
/* problem 71 */
const availableExpensiveProducts = (
  input: ProductType[],
  price: number,
): string[] => {
  return input
    .filter((item) => item.price > price && item.stock !== 0)
    .map((item) => item.name);
};

console.log(
  "available Expensive Products",
  availableExpensiveProducts(products, 1000),
);

/* problem 72 */
const totalStockStartingWith = (
  input: ProductType[],
  letter: string,
): number | any => {
  return input.filter((item) => item.name.toLowerCase().startsWith(letter)).reduce((prev,curr)=>(prev+=curr.stock),0);
};
console.log(totalStockStartingWith(products, "l"));

/* problem 73 */
const averageAvailableProductPrice = (input: ProductType[]): number => {
  return (
    input
      .filter((item) => item.stock > 0)
      .reduce((prev, curr) => (prev += curr.price * curr.stock), 0) /
    input
      .filter((item) => item.stock > 0)
      .reduce((prev, curr) => (prev += curr.stock), 0)
  );
};

console.log(averageAvailableProductPrice(products));

/* problem 74 */
const alphabeticalNames = (input: ProductType[]): string[] => {
  return input.map((item) => item.name).sort();
};
console.log(alphabeticalNames(products));

/* problem 75 */
const lastAvailableProduct = (input: ProductType[]): ProductType | null => {
  return input.filter((item) => item.stock > 0).at(-1)!;
};
console.log(lastAvailableProduct(products));
