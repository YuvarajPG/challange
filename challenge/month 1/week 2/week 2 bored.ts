import { ProductType, products, boredWeek2, unSortedArr } from "../data";
/* day 5 */
/* bored p-11 */
const findProductIndexManual = (
  input: ProductType[],
  search: string,
): number => {
  for (let index = 0; index < input.length; index++) {
    if (input[index]?.name.toLowerCase() === search.toLowerCase()) {
      return index;
    }
  }
  return -1;
};
console.log(findProductIndexManual(products, "mouse"));

/* day 6 */
/* bored p-12 */
const keepOnlyEven = (input: number[]): number[] => {
  return input.filter((item) => item % 2 === 0).map((item) => item * item);
};
console.log("keep only", keepOnlyEven(boredWeek2));

/* day 7 */
/* bored p-13 */
const firstProduct = (input: ProductType[]): ProductType | null => {
  return null;
};

/* day 8 */
/* bored p-14 */
const lowestStockProduct = (input: ProductType[]): ProductType | null => {
  let stock = 0;
  for (let index = input.length; index > 0; index--) {
    if (input[index]) {
      console.log("object");
    }
  }
  return null;
};

console.log(lowestStockProduct(products));