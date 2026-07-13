import { ProductType, products } from "../data";

/* day 23 */
/* problem 116 */
const availableLongProductNames = (
    input: ProductType[],
    length: number,
): string[] => {
    return input
        .filter((item) => item.stock > 0 && item.name.length > length)
        .map((item) => item.name);
};
console.log(availableLongProductNames(products, 2));

/* problem 117 */
const totalStockHighInventory = (
    input: ProductType[],
    value: number,
): number => {
    return input
        .filter((item) => item.price * item.stock > value)
        .reduce((p, c) => (p += c.stock), 0);
};
console.log(totalStockHighInventory(products, 2));

/* problem 118 */
const hasInventoryContaining = (
    input: ProductType[],
    value: number,
    text: string,
): boolean => {
    return input.some(
        (item) =>
            item.stock > 0 &&
            item.name.toLowerCase().includes(text.toLowerCase()) &&
            item.price * item.stock > value,
    );
};
console.log(hasInventoryContaining(products, 2, "s"));

/* problem 119 */
const lowestStockProduct = (input: ProductType[]): ProductType | null => {
    return input.reduce((p, c) => (p.stock < c.stock ? p : c)) ?? null;
};
console.log(lowestStockProduct(products));

/* problem 120 */
const alphabeticalProductLabels = (input: ProductType[]): string[] => {
    return input
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((item) => `${item.name} (${item.price}) Stock: ${item.stock}`);
};
console.log(alphabeticalProductLabels(products));

/* day 24 */
/* problem 121 */
const productNamesByStockRange = (
    input: ProductType[],
    min: number,
    max: number,
): string[] => {
    return input
        .filter((item) => item.stock > min && item.stock < max)
        .map((item) => item.name);
};
console.log(productNamesByStockRange(products, 2, 3));

/* problem 122 */
const availableCheapInventory = (
    input: ProductType[],
    price: number,
): number => {
    return input
        .filter((item) => item.stock > 0 && item.price < price)
        .reduce((p, c) => (p += c.price * c.stock), 0);
};
console.log(availableCheapInventory(products, 200));

/* problem 123 */
const everyAvailableContains = (
    input: ProductType[],
    text: string,
): boolean => {
    return input
        .filter((item) => item.stock > 0)
        .every((item) => item.name.toLowerCase().includes(text.toLowerCase()));
};
console.log(everyAvailableContains(products, "s"));

/* problem 124 */
const highestAvailablePriceProduct = (
    input: ProductType[],
): ProductType | null => {
    return (
        input
            .filter((item) => item.stock > 0)
            .reduce((p, c) => (p.price > c.price ? p : c)) ?? null
    );
};
console.log(highestAvailablePriceProduct(products));

/* problem 125 */
const labelsSortedByStock = (input: ProductType[]): string[] => {
    return input
        .sort((a, b) => b.stock - a.stock)
        .map((item) => `${item.name} - Stock: ${item.stock}`);
};
console.log(labelsSortedByStock(products));

/* day 25 */
/* problem 126 */
const productsAboveAverageInventory = (input: ProductType[]): string[] => {
    const avg =
        input
            .filter((item) => item.stock > 0)
            .reduce((p, c) => (p += c.price * c.stock), 0) /
        input.filter((item) => item.stock > 0).length;
    return input
        .filter((item) => item.stock > 0 && item.price * item.stock > avg)
        .map((item) => item.name);
};
console.log(productsAboveAverageInventory(products));

/* problem 127 */
const totalPriceStartingWith = (
    input: ProductType[],
    letter: string,
): number => {
    return input
        .filter((item) =>
            item.name.toLowerCase().startsWith(letter.toLowerCase()),
        )
        .reduce((p, c) => (p += c.price), 0);
};
console.log(totalPriceStartingWith(products, "e"));

/* problem 128 */
const noAvailableZeroStock = (input: ProductType[]): boolean => {
    return input.every((item) => item.stock > 0); //wtf is this question no clue
};
console.log(noAvailableZeroStock(products));

/* problem 129 */
const highestAvailableInventory = (
    input: ProductType[],
): ProductType | null => {
    return (
        input
            .filter((item) => item.stock > 0)
            .reduce((p, c) =>
                p.price * p.stock > c.price * c.stock ? p : c,
            ) ?? null
    );
};
console.log(highestAvailableInventory(products));

/* problem 130 */
const inventoryLabelsLowestFirst = (input: ProductType[]): string[] => {
    return input
        .sort((a, b) => a.stock * a.price - b.stock * b.price)
        .map((item) => `${item.name} - Inventory: ${item.price * item.stock}`);
};
console.log(inventoryLabelsLowestFirst(products));

/* day 26 */
/* problem 131 */
const productsAboveAverageStock = (input: ProductType[]): string[] => {
    const avg =
        input
            .filter((item) => item.stock > 0)
            .reduce((p, c) => (p += c.stock), 0) /
        input.filter((item) => item.stock > 0).length;
    console.log("avg", avg);

    return input.filter((item) => item.stock > avg).map((item) => item.name);
};
console.log(productsAboveAverageStock(products));

/* problem 132 */
const totalAvailablePriceContaining = (
    input: ProductType[],
    text: string,
): number => {
    return input
        .filter(
            (item) =>
                item.stock > 0 &&
                item.name.toLowerCase().includes(text.toLowerCase()),
        )
        .reduce((p, c) => (p += c.price), 0);
};
console.log(totalAvailablePriceContaining(products, "s"));

/* problem 133 */
const everyHighInventoryAvailable = (
    input: ProductType[],
    value: number,
): boolean => {
    return input
        .filter((item) => item.price * item.stock > value)
        .every((item) => item.stock > 0);
};
console.log(everyHighInventoryAvailable(products, 100));

/* problem 134 */
const lowestAvailablePriceProduct = (
    input: ProductType[],
): ProductType | null => {
    return (
        input
            .filter((item) => item.stock > 0)
            .reduce((p, c) => (p.price < c.price ? p : c)) ?? null
    );
};
console.log(lowestAvailablePriceProduct(products));

/* problem 135 */
const stockLabelsLowestFirst = (input: ProductType[]): string[] => {
    return input
        .sort((a, b) => a.stock - b.stock)
        .map((item) => `${item.name} - Stock : ${item.stock}`);
};
console.log(stockLabelsLowestFirst(products));
