import { ProductType, products, arr, UserType, data, arrData } from "../data";

/* Day 1 */
/* problem 1 */
const greetings = (name: string): string => {
  return `hi ${name}`;
};
console.log(`\n ${greetings("yuvaraj")}`);

/* problem 2 */
const squareFunction = (value: number): number => {
  return value ** 2;
};
console.log(`The square is ${squareFunction(5)}`);

/* problem 3 */
const largestNumber = (num1: number, num2: number): number => {
  let result: number;
  if (num1 > num2) {
    result = num1;
  } else {
    result = num2;
  }
  return result;
};
console.log(`The biggest number is ${largestNumber(55, 10)}`);

/* problem 4 */
const signOfNumber = (value: number): string => {
  if (value === 0) {
    return "zero";
  }
  return value > 0 && value !== 0 ? "positive" : "negative";
};
console.log(`The sign of the number is ${signOfNumber(5)}`);

/* problem 5 */
const lengthOf = (str: string): number => {
  return str.length;
};
console.log("The length of the string is ", lengthOf("hellos"));

/* problem 6 */
const totalPrice = (price: number, quatity: number): number => {
  return price * quatity;
};
console.log(`The total price is ${totalPrice(5, 5)} \n`);

/* problem 7 */
const printNumbers = (value: number): void => {
  console.log("printed number for ", value);
  for (let i = 1; i <= value; i++) {
    console.log(`numbers is ${i}`);
  }
};
printNumbers(5);

/* problem 8 */
const loopSum = (num: number): number => {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
};
console.log(`\nThe sum of loop is ${loopSum(5)}`);

/* problem 9 */
const largestInArray = (arr: number[]): number => {
  if (arr.length === 0) {
    return 0;
  }

  let largestNumber = arr[0]!;
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i]! > largestNumber) {
      largestNumber = arr[i]!;
    }
  }
  return largestNumber;
};
console.log(`The largest number in the array is ${largestInArray(arr)}`);

/* problem 10 */
const countEven = (arr: number[]): number => {
  let count = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index]! % 2 === 0) {
      count++;
    }
  }
  return count;
};
console.log(`The count of even number in your arr is ${countEven(arr)}`);

/* Day 2 */
/* problem 11 */
const countOdd = (arr: number[]): number => {
  let count: number = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index]! % 2 !== 0) {
      count++;
    }
  }
  return count;
};
console.log(`The count of odd number in your arr is ${countOdd(arr)}`);

/* problem 12 */
const sumArr = (arr: number[]): number => {
  let sum: number = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]!;
  }
  return sum;
};
console.log(sumArr(arr));

/* problem 13 */
const smallestNumberInArr = (array: number[]): number => {
  let smallNumber: number = 0;
  let sortedArr = array.sort((a, b) => a - b);
  return (smallNumber = sortedArr[0]!);
};
console.log(
  `The smallest number in an array is ${smallestNumberInArr([1, 2, 3, 4, 5, 6])}`,
);

/* problem 14 */
const countVowels = (str: string): number => {
  let count: number = 0;
  let splitedStr = str.split("");
  const vowels: string[] = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(splitedStr[i]!)) {
      count++;
    }
  }
  return count;
};
console.log(countVowels("hello"));

/* problem 15 */
const numberContains = (array: number[], contain: number): boolean => {
  for (let index = 0; index < array.length; index++) {
    if (array.includes(contain)) {
      return true;
    }
  }
  return false;
};
console.log(`The number value is ${numberContains(arr, 0)}`);

/* alternative challenge for problem 15 */
const numberContainsAnotherMethod = (
  array: number[],
  contain: number,
): boolean => {
  for (let i = 0; i < array.length; i++) {
    if (contain === array[i]) {
      return true;
    }
  }
  return false;
};
console.log(
  `The number value is ${numberContainsAnotherMethod(arr, 2)} by without using include function`,
);

/* Day 3 */
/* objects type */
/* problem 16 */
const getUserName = (input: UserType): string => {
  return input.name;
};
console.log(getUserName(data));

/* problem 17 */
const adult: UserType = {
  name: "yuvaraj",
  age: 20,
};

const adultFunction = (input: UserType): boolean => {
  if (input.age >= 18) {
    return true;
  }
  return false;
};
console.log(adultFunction(adult));

/* problem 18 */
const OldestUser = (input: UserType[]): string => {
  if (input.length !== 0) {
    let oldestUser = input[0]!;
    for (let index = 0; index < input.length; index++) {
      if (input[index]!.age > oldestUser!.age) {
        oldestUser = input[index]!;
      }
    }
    return `The oldest user is ${oldestUser.name}, ${oldestUser.age}`;
  }
  return "no data is provided";
};
console.log(OldestUser(arrData));

/* problem 19 */
const AdultCountFunction = (input: UserType[]): number => {
  let count = 0;
  for (let index = 0; index < input.length; index++) {
    if (input[index]!.age > 18) {
      count++;
    }
  }
  return count;
};
console.log(`The Adult Count is ${AdultCountFunction(arrData)}`);

/* problem 20 */
const findUserByName = (
  input: UserType[],
  searchingData: string,
): UserType | null => {
  for (let index = 0; index < input.length; index++) {
    if (input[index]?.name.toLowerCase() === searchingData.toLowerCase()) {
      return input[index]!;
    }
  }
  return null;
};
console.log(findUserByName(arrData, "Alex"));

/* day 4 */

/* problem 21 */
const getProductName = (input: ProductType): string => {
  return input.name;
};
console.log(getProductName(products[0]!));

/* problem 22 */
const mostExpensiveProduct = (input: ProductType[]): string => {
  let expensiveThing = "";
  let price = 0;
  for (let index = 0; index < input.length; index++) {
    if (input[index]!.price > price) {
      price = input[index]!.price;
      expensiveThing = input[index]!.name;
    }
  }
  return expensiveThing;
};
console.log(`The expensive thing is ${mostExpensiveProduct(products)}`);

/* problem 23 */
const calculateTotalPriceFunction = (input: ProductType[]): number => {
  let price = 0;
  for (let index = 0; index < input.length; index++) {
    price += input[index]!.price;
  }
  return price;
};
console.log(`The total price is ${calculateTotalPriceFunction(products)}`);

/* problem 24 */
const findProductByName = (
  input: ProductType[],
  searchingThing: string,
): ProductType | null => {
  for (let index = 0; index < input.length; index++) {
    if (
      input[index]!.name.toLowerCase() === searchingThing.toLocaleLowerCase()
    ) {
      return input[index]!;
    }
  }
  return null;
};
console.log(findProductByName(products, "keyboard"));

/* problem 25 */
const countExpensiveProducts = (
  input: ProductType[],
  price: number,
): string => {
  let things = "";
  for (let index = 0; index < input.length; index++) {
    if (price < input[index]!.price) {
      things += input[index]?.name + "\n";
    }
  }
  return things;
};
console.log(
  `The expensive things are ${countExpensiveProducts(products, 1000)}`,
);

/* day 5 */
/* problem 26 */
const findMethod = (
  input: ProductType[],
  thing: string,
): ProductType | undefined => {
  const found = input.find((item) => {
    return item.name.toLowerCase() === thing.toLowerCase();
  });
  return found;
};
console.log("the finding is with find", findMethod(products, "mouse"));

/* using withoutFind method */
/* 
const findWithoutMethod = (
    searching: string,
    input: ProductType[],
): ProductType | null => {
    if (input.length === 0) {
        return null;
    }
    for (let index = 0; index < input.length; index++) {
        if (input[index]!.name.toLowerCase() === searching.toLowerCase()) {
            return input[index]!;
        }
    }
    return null;
};
console.log(findWithoutMethod("keyboard", products));
 */

/* problem 27 */
const filterByMethod = (input: ProductType[], price: number): ProductType[] => {
  const filtered = input.filter((item) => {
    return item.price > price;
  });
  return filtered;
};
console.log("by filtered method", filterByMethod(products, 10000));

/* using withoutFilter */
/*
const manualFilter = (
    input: ProductType[],
    price: number,
): ProductType[] | null => {
    let filtered = [];
    for (let index = 0; index < input.length; index++) {
        if (input[index]!.price > price) {
            filtered.push(input[index]!);
        }
    }
    return filtered;
};
console.log("the product is ", manualFilter(products, 10000));
 */

/* problem 28 */
const mapFunction = (input: ProductType[]): string[] => {
  const mapped = input.map((item) => {
    return item.name;
  });
  return mapped;
};
console.log("the map function ", mapFunction(products));

/* problem 29 */
const someFunction = (input: ProductType[], price: number): boolean => {
  if (input.length !== 0) {
    const someValue = input.some((item) => {
      return item.price > price;
    });
    return someValue;
  }
  return false;
};
console.log("the some function ", someFunction(products, 10000));

/* problem 30 */
const everyFunction = (input: ProductType[], price: number): boolean => {
  if (input.length !== 0) {
    const everies = input.every((item) => {
      return item.price > price;
    });
    return everies;
  }
  return false;
};
console.log("the every function", everyFunction(products, 10000));

/* day 6 */
/* problem 31 */
const sumWithReduce = (numbers: number[]): number => {
  return numbers.reduce((num, cur) => {
    return num + cur;
  }, 0);
};
console.log("the sum of the arr ", sumWithReduce(arr));

/* problem 32 */
const totalProductPriceUsingReduce = (input: ProductType[]): number | any => {
  return input.reduce((pre, cur) => {
    return pre + cur.price;
  }, 0);
};
console.log(
  "the total product price is ",
  totalProductPriceUsingReduce(products),
);

/* problem 33 */
const mostExpensiveProductUsingReduce = (input: ProductType[]): string => {
  const name = input.reduce((pre, curr) => {
    if (curr.price > pre.price) {
      pre = curr;
    }
    return pre;
  });
  return name.name;
};
console.log(
  "the most expensive product is ",
  mostExpensiveProductUsingReduce(products),
);

/* problem 34 */
const averageProductPriceUsingReduce = (input: ProductType[]): number => {
  return input.reduce((num, cur) => {
    return num + cur.price / input.length;
  }, 0);
};
console.log("the avg of product is", averageProductPriceUsingReduce(products));

/* problem 35 */
const createProductLabels = (input: ProductType[]): string[] => {
  return input.map((item) => {
    return item.name + " - $" + item.price;
  });
};
console.log(createProductLabels(products));

/* day 7 */
/* problem 36,37 */
const sort = (input: ProductType[], ascending: boolean): number[] => {
  if (ascending) {
    return input.sort((a, b) => a.price - b.price).map((item) => item.price);
  }
  return input
    .sort((a, b) => {
      return b.price - a.price;
    })
    .map((item) => item.price);
};
console.log(sort(products, true));

/* problem 38 */
const getExpensiveProductNames = (
  input: ProductType[],
  price: number,
): string[] => {
  return input
    .filter((item) => {
      return item.price > price;
    })
    .map((item) => {
      return item.name;
    });
};
console.log(getExpensiveProductNames(products, 100));

/* problem 39 */
const cheapestProduct = (input: ProductType[]): string => {
  return input
    .sort((a, b) => {
      return a.price - b.price;
    })
    .at(0)!.name;
};
console.log("the cheapest product is ", cheapestProduct(products));

/* problem 40 */
const mostExpensiveProductName = (input: ProductType[]): string => {
  return input
    .sort((a, b) => {
      return b.price - a.price;
    })
    .at(0)!.name;
};
console.log(mostExpensiveProductName(products));
