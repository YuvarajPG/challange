/* Day 1 */
/* problem 1 */
const arr: number[] = [1, 2, 3, 5, 24, 35, 65, 17, 8, 9, 10];

const greetings = (name: string): string => {
    return `hi ${name}`;
};
console.log(greetings("yuvaraj"));

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
const length = (str: string): number => {
    return str.length;
};
console.log(`The length of the string is ${length("hellos")}`);

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
    return smallNumber=sortedArr[0]!;
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
    let contains: number = contain;
    for (let index = 0; index < array.length; index++) {
        if (array.includes(contain)) {
            return true;
        }
    }
    return false;
};
console.log(`The number value is ${numberContains(arr, 0)}`);

/* alternative challenge for problem 15 */
const numberContainsAnotherMethod = (array:number[],contain:number):boolean => {
    for (let i = 0; i < array.length; i++){
        if (contain === array[i]) {
            return true
        }
    }
    return false
}
console.log(`The number value is ${numberContainsAnotherMethod(arr,2)} by without using include function`)