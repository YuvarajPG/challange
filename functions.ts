/* problem 1 */
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
    console.log('printed number for ',value)
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
console.log(`The largest number in the array is ${largestInArray([1, 2, 5, 7, 10, 3, 17])}`);


/* problem 10 */
const countEven = (arr: number[]): number => {
    let count = 0
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]!%2===0) {
            count++
        }
    }
    return count
};
console.log(`The count of even number in your arr is ${countEven([1,2,3,4,5,6,7,8,9,10])}`)