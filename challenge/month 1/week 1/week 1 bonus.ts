/* bonus 1 */

import { arr, normalProducts, products, ProductType, NormalProduct } from "../data";
const totalInventoryValue = (input: ProductType[]): number => {
    let total = 0;
    for (let index = 0; index < input.length; index++) {
        total += input[index]!.price * input[index]!.stock!;
    }
    return total;
};
console.log(totalInventoryValue(products));

/* day 2 */
/* bonus p-2*/
const mapped = arr.map((item) => {
    return item * item;
});
console.log(mapped);

/* day 3 */
/* bonus p-3 */
const multiplicationUsingReduce = (input: number[]): number => {
    return input.reduce((num, cur) => {
        return cur * num;
    }, 1);
};
console.log(multiplicationUsingReduce(arr));

/* day 4 */
/* bonus p-4 */
const onlyProductsAbove = (input: NormalProduct[], price: number): string[] => {
    return input.filter((item) => {
        return item.price > price;
    }).map((item) => {
        return item.name +" - $"+ item.price
    });

};
console.log(onlyProductsAbove(normalProducts, 2000));
