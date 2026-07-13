import { inventory, invType } from "./data";
const removeProductsList: string[] = [];
const addProducts = (data: invType[], product: Omit<invType, "id">): void => {
    const genID = inventory.length;
    data.push({ id: genID, ...product });
};

addProducts(inventory, {
    name: "Iphone",
    price: 1000,
    brand: "Apple",
    warranty: "5 years",
    stock: 1,
});
addProducts(inventory, {
    name: "samsung",
    price: 600,
    brand: "samsung",
    warranty: "5 years",
    stock: 2,
});
addProducts(inventory, {
    name: "redmi note 11",
    brand: "redmi",
    price: 110,
    warranty: "2 years",
    stock: 4,
});

const removeProductsByBrand = (data: invType[], brand: string): void => {
    const filtered = data.filter(
        (item) => item.brand.toLowerCase() !== brand.toLowerCase(),
    );
    data.length = 0;
    data.push(...filtered);
};
removeProductsByBrand(inventory, "apple");
console.log(inventory);
