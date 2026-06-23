import { products, ProductType } from "../week 1/data";

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
  return input.reduce((prev, curr) => (curr.stock! += prev), 0);
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
  return input.find((item) => item.name.endsWith(letter))??null;
  
};
console.log(firstProductNameEndsWith(products, "d"));
