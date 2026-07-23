import { invType } from "./data";
import {
    idGen,
    loadInventory,
    removedData,
    timeStampGen,
    savingData,
} from "./extra";

/* functions */
export const addProducts = async (
    product: Omit<invType, "id" | "timestamp">,
): Promise<invType | undefined> => {
    try {
        const inventory = await loadInventory();
        const newProduct: invType = {
            id: idGen(),
            ...product,
            timestamp: timeStampGen(),
        };

        inventory.push(newProduct);
        await savingData(inventory);

        return newProduct;
    } catch (err) {
        console.error(err);
    }
};

export const removeProduct = async (
    name: string,
): Promise<invType[] | undefined> => {
    const inventory = await loadInventory();

    if (inventory.length !== 0) {
        const removed = inventory.filter((item) =>
            item.name.toLowerCase().includes(name.toLowerCase()),
        );
        const filtered = inventory.filter(
            (item) =>
                !item.name
                    .toLowerCase()
                    .split(" ")
                    .includes(name.toLowerCase()),
        );
        inventory.length = 0;
        inventory.push(...removed);
        await removedData(inventory);
        await savingData(filtered);
        return removed;
    }
};
// removeProduct("redmi");

export const sortByAlphabet = async (
    type: string,
): Promise<invType[] | null> => {
    const inventory = await loadInventory();
    if (inventory.length !== 0) {
        return type?.toLowerCase() === "a"
            ? inventory.sort((a, b) => a.name.localeCompare(b.name))
            : inventory.sort((a, b) => b.name.localeCompare(a.name));
    }
    console.log("the data's doesnt exist");
    return null;
};

export const findProduct = async (
    search: string,
): Promise<invType[] | undefined> => {
    const inventory = await loadInventory();
    if (inventory.length === 0) return;
    else {
        const find = inventory.filter(
            (item) =>
                item.brand.toLowerCase().includes(search.toLowerCase()) ||
                item.name.toLowerCase().includes(search.toLowerCase()),
        );
        if (find === undefined) {
            console.log("the product doesnt exist");
        }
        return find;
    }
};
// findProduct("samsung").then((p) => console.table(p));

export const updatePrice = async (
    product: string,
    newPrice: number,
): Promise<invType[] | undefined> => {
    const inventory = await loadInventory();
    const finded = inventory.find((item) =>
        item.name.toLowerCase().split(" ").includes(product.toLowerCase()),
    );
    if (inventory !== undefined) {
        finded!.price = newPrice;
        await savingData(inventory);
        return inventory;
    }
};
// updatePrice("redmi", 15000);

export const updateStock = async (
    product: string,
    newStock: number = 0,
): Promise<invType[] | undefined> => {
    const inventory = await loadInventory();
    const finded = inventory.find((item) =>
        item.name.toLowerCase().split(" ").includes(product.toLowerCase()),
    );
    if (inventory !== null) {
        finded!.stock = newStock;
        await savingData(inventory);
        return inventory;
    }
};

export const updateDetails = async (
    product: string,
    newDetails: Partial<invType["details"]>,
): Promise<invType[] | undefined> => {
    const inventory = await loadInventory();
    const finded = inventory.find((item) =>
        item.name.toLowerCase().split(" ").includes(product.toLowerCase()),
    );
    if (finded !== undefined) {
        if (finded.details.ram !== newDetails.ram) {
            finded.details.ram = newDetails.ram!;
            await savingData(inventory);
            return inventory;
        }

        if (finded.details.rom !== newDetails.rom) {
            finded.details.rom = newDetails.rom!;
            await savingData(inventory);
            return inventory;
        }
    }
};

// console.log(updateDetails("redmi", { rom: "125gb" }));
// export const totalInventoryValue = (data: invType[]): void => {
//   const total = data.reduce((p, c) => (p += c.price * c.stock), 0);
//   console.log(total);
// };
