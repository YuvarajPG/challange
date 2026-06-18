/* bored p-1 */
const adultFunction = (age: number): boolean => {
    return age >= 18;
};
console.log(adultFunction(20));

/* bored p-2 */
type Product = {
    name: string;
    price: number;
};

const products: Product[] = [
    { name: "Mouse", price: 500 },
    { name: "Monitor", price: 12000 },
    { name: "Keyboard", price: 1500 },
];

const expensiveProductFunction = (input: Product[]): string => {
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
        return sortedArr
    }
    return sortedArr
};
console.log(arrReverseWithoutArrMethod(arr));


