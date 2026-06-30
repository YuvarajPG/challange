import { ProductType, products, boredWeek2, unSortedArr } from "../week 1/data";
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
console.log('keep only',keepOnlyEven(boredWeek2));

/* day 7 */
const firstProduct = (input:ProductType[]):ProductType|null=>{
  return null
}