/* bonus 1 */
type Product = {
    name: string;
    price: number;
    stock: number;
};

const products = [
    { name: "Mouse", price: 500, stock: 10 },
    { name: "Keyboard", price: 1500, stock: 5 },
];

const totalInventoryValue = (input:Product[]):number => {
    let total = 0
    for (let index = 0; index < input.length; index++) {
        total+=input[index]!.price*input[index]!.stock
    }
    return total

}
console.log(totalInventoryValue(products))