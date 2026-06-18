/* day 1 */
/* bored p-1 */
const adultFunction = (age: number): boolean => {
    return age >= 18;
};
console.log(adultFunction(20));

/* bored p-2 */
type productType = {
    name: string;
    price: number;
};

const products: productType[] = [
    { name: "Mouse", price: 50000 },
    { name: "Monitor", price: 12000 },
    { name: "Keyboard", price: 1500 },
    { name: "lap", price: 20000 },
];

const expensiveProductFunction = (input: productType[]): string => {
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
const arr = [1, 2, 3, 4, 5];
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
const averageProductPrice = (input: productType[]) => {
    let avg = 0;
    for (let index = 0; index < input.length; index++) {
        avg += input[index]!.price / input.length;
    }
    return avg;
};
console.log(`The average product price is ${averageProductPrice(products)}`);

/* bored p-5 */
const cheapestProduct = (input: productType[]): string => {
    let sortedPrice = [];
    for (let index = 0; index < input.length; index++) {
        sortedPrice.push(input[index]!.price);
    }
    sortedPrice = sortedPrice.sort((a, b) => b-a)
    /* tried some other method but didnt go well so i switched to sorting */
    for (let index = 0; index < input.length; index++) {
        if (sortedPrice[input.length-1]===input[index]?.price) {
            return input[index]!.name
        }
    }
    return "none"
};
console.log(cheapestProduct(products));

/* bored p-6 */
const productExists = (
    input: productType[],
    searchingThing: string,
): boolean => {
    for (let index = 0; index < input.length; index++) {
        if (
            input[index]!.name.toLocaleLowerCase() ===
            searchingThing.toLowerCase()
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
    input: productType[],
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

/* bored p-8 */
const secondMostExpensiveProduct = (input: productType[]): string | any => {
    let secodnMostThing = "no";
    let arr = [];
    let temp = [];
    let arrs = [];
    /* creating an array, i think it can be helpful  */
    for (let index = 0; index < input.length; index++) {
        arrs.push(input[index]?.price);
    }

    for (let index = 0; index < input.length; index++) {
        let curValue = arrs[index]!;
        let nextValue = arrs[++index]!;
        if (curValue > nextValue) {
            temp[index] = curValue;
            index++;
            console.log('greater')
        } else {
            temp[index] = nextValue;
            index--;
            console.log('lesser')
        }
        arr.push(temp);
    }
    console.log(arrs);

    // [500,12000,5000,20000] values are present now
    console.log("the end of loop");
    return secodnMostThing;
};
console.log(secondMostExpensiveProduct(products));
