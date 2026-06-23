import { ProductType, products, arr } from "./data";
/* day 1 */
/* bored p-1 */
const adultFunctionAge = (age: number): boolean => {
  return age >= 18;
};
console.log(adultFunctionAge(20));

/* bored p-2 */

const expensiveProductFunction = (input: ProductType[]): string => {
  let expensiveProduct = "none";
  let price = 0;
  if (input.length !== 0) {
    for (let index = 0; index < input.length; index++) {
      if (input[index]!.price > price) {
        price = input[index]!.price;
        expensiveProduct = input[index]!.name;
      }
    }
  }
  return expensiveProduct;
};
console.log(expensiveProductFunction(products));

/* bored p-3 */
const arrReverseWithoutArrMethod = (input: number[]): number[] => {
  let sortedArr: number[] = [];
  if (input.length !== 0) {
    for (let index = input.length - 1; index >= 0; index--) {
      sortedArr.push(input[index]!);
    }
    return sortedArr;
  }
  return sortedArr;
};
console.log(arrReverseWithoutArrMethod(arr));

/* day 2 */
/* bored p-4 */
const averageProductPrice = (input: ProductType[]) => {
  let avg = 0;
  for (let index = 0; index < input.length; index++) {
    avg += input[index]!.price / input.length;
  }
  return avg;
};
console.log(`The average product price is ${averageProductPrice(products)}`);

/* bored p-5 */
const cheapestProductMethod = (input: ProductType[]): string => {
  let sortedPrice = [];
  for (let index = 0; index < input.length; index++) {
    sortedPrice.push(input[index]!.price);
  }
  sortedPrice = sortedPrice.sort((a, b) => b - a);
  /* tried some other method but didnt go well so i switched to sorting */
  for (let index = 0; index < input.length; index++) {
    if (sortedPrice[input.length - 1] === input[index]?.price) {
      return input[index]!.name;
    }
  }
  return "none";
};
console.log(cheapestProductMethod(products));

/* bored p-6 */
const productExists = (
  input: ProductType[],
  searchingThing: string,
): boolean => {
  for (let index = 0; index < input.length; index++) {
    if (
      input[index]!.name.toLocaleLowerCase() === searchingThing.toLowerCase()
    ) {
      return true;
    }
  }
  return false;
};
console.log(
  `${productExists(products, "Monitor") ? "the product exists, true" : "the product doesnt exists, false"}`,
);

/* bored p-7 */
const countProductsAbovePrice = (
  input: ProductType[],
  abovePrice: number,
): number => {
  let count = 0;
  for (let index = 0; index < input.length; index++) {
    if (input[index]!.price > abovePrice) {
      count++;
    }
  }
  return count;
};
console.log(
  `The count of product that are above price is ${countProductsAbovePrice(products, 1000)}`,
);

// /* bored p-8 */
// const secondMostExpensiveProduct = (array: ProductType[]): string => {
//     let largest = 0;
//     let second = 0;
//     for (let index = 0; index < array.length; index++) {
//         if (array[index]!.price > largest) {
//             /* 100>0 true */ /* loop two 1000> */
//             /* largest = 100 */

//             largest = array[index]!.price;
//             second = largest; /* 100 is set to second one */
//             largest =
//                 array[index + 1]!
//                     .price; /* 500 is largest now */ /* 100,1000,500,2000 */
//             console.log(largest);
//         } else if (second > array[index]!.price) {
//         }
//         /* as for now largest but not the correct one bcz its not sorted data */
//     }

//     return "none";
// };
// console.log("second ", secondMostExpensiveProduct(products));

/* day 3 */
/* bored p-9 */
const productsInRange = (
  input: ProductType[],
  minPrice: number,
  maxPrice: number,
  returnType: boolean,
): ProductType[] | string[] => {
  const filtered: ProductType[] = [];
  const optionFilter: string[] = [];
  if (returnType) {
    for (let index = 0; index < input.length; index++) {
      if (maxPrice >= input[index]!.price && input[index]!.price >= minPrice) {
        filtered.push(input[index]!);
      }
    }
    return filtered;
  }
  for (let index = 0; index < input.length; index++) {
    if (maxPrice >= input[index]!.price && input[index]!.price >= minPrice) {
      optionFilter.push(input[index]!.name);
    }
  }
  return optionFilter;
};
console.log(productsInRange(products, 1000, 15000, true));

/* day 4 */
/* bored p-10 */
const secondMostExpensive = (input: ProductType[]): ProductType | null => {
    return input
};
console.log(object);
