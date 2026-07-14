import { inventory, invType } from "./data";
const addProducts = (data: invType[], product: Omit<invType, "id">): void => {
    const genID = data.length;
    data.push({ id: genID, ...product });
};

addProducts(inventory, {
    name: "Iphone 16 pro max",
    price: 1500,
    brand: "Apple",
    stock: 10,
    details: {
        ram: "6 gb",
        rom: "128 gb",
    },
});
addProducts(inventory, {
    name: "samsung s25 ultra",
    price: 600,
    brand: "samsung",
    stock: 13,
    details: {
        ram: "6 gb",
        rom: "128 gb",
    },
});
addProducts(inventory, {
    name: "samsung s23 ultra",
    price: 450,
    brand: "samsung",
    stock: 8,
    details: {
        ram: "6 gb",
        rom: "128 gb",
    },
});
addProducts(inventory, {
    name: "redmi note 11",
    brand: "redmi",
    price: 110,
    stock: 8,
    details: {
        ram: "6 gb",
        rom: "128 gb",
    },
});

const removeProductsByBrand = (data: invType[], brand: string): void => {
    if (data.length !== 0) {
        const filtered = data.filter(
            (item) => item.brand.toLowerCase() !== brand.toLowerCase(),
        );
        data.length = 0;
        data.push(...filtered);
    }
};

const sortByAlphabet = (data: invType[], type?: string): invType[] | null => {
    if (data.length !== 0) {
        return type?.toLowerCase() === "a"
            ? data.sort((a, b) => a.name.localeCompare(b.name))
            : data.sort((a, b) => b.name.localeCompare(a.name));
    }
    console.log("the data's doesnt exist");
    return null;
};

const findProduct = (data: invType[], search: string): invType | null => {
    if (data.length === 0) return null;
    const find =
        data.find(
            (item) =>
                item.name
                    .toLowerCase()
                    .split(" ")
                    .includes(search.toLowerCase()) ||
                item.brand
                    .toLowerCase()
                    .split(" ")
                    .includes(search.toLowerCase()),
        ) ?? null;
    find === null ? console.log("the product doesnt exist") : null;
    return find;
};

const updatePrice = (
    data: invType[],
    product: string,
    newPrice: number,
): void => {
    const finded = findProduct(data, product);
    if (finded !== null) {
        finded!.price = newPrice;
        console.log(inventory);
    }
};
const updateStock = (
    data: invType[],
    product: string,
    newStock: number = 0,
): void => {
    const finded = findProduct(data, product);
    if (finded !== null && newStock > 0 && newStock !== 0) {
        finded!.stock = newStock;
        console.log(inventory);
    }
};
const updateDetails = (
    data: invType[],
    product: string,
    newDetails: Partial<invType["details"]>,
): void => {
    const finded = findProduct(data, product);
    if (finded !== null) {
        if (
            finded.details.ram !== undefined &&
            finded.details.ram !== newDetails.ram
        ) {
            finded.details.ram = newDetails.ram!;
        } else if (
            finded.details.rom !== undefined &&
            finded.details.rom !== newDetails.rom
        ) {
            finded.details.rom = newDetails.rom!;
        }
        console.log(inventory);
    }
};
const totalInventoryValue = (data: invType[]): void => {
    const total = data.reduce((p, c) => (p += c.price * c.stock), 0);
    console.log(total);
};
updateDetails(inventory, "Redmi", { ram: "8gb" });
