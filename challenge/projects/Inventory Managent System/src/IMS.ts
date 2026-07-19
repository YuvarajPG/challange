import { inventory, invType } from "./data";

export const addProducts = (
  data: invType[],
  product: Omit<invType, "id" | "timestamp">,
): void => {
  const genID = crypto.randomUUID().slice(0, 8).replace(/-/g, "");
  data.push({ id: genID, ...product, timestamp: new Date().toISOString() });
};
const timeStampGen = (): string => {
  return new Date().toISOString();
};

export const removeProductsByBrand = (
  data: invType[],
  brand: string,
): invType[] | undefined => {
  if (data.length !== 0) {
    const filtered = data.filter(
      (item) => item.brand.toLowerCase() !== brand.toLowerCase(),
    );
    const removed = data.filter(
      (item) => item.brand.toLowerCase() === brand.toLowerCase(),
    );
    [...data].length = 0;
    [...data].push(...filtered);
    return removed;
  }
};

export const sortByAlphabet = (
  data: invType[],
  type?: string,
): invType[] | null => {
  if (data.length !== 0) {
    return type?.toLowerCase() === "a"
      ? data.sort((a, b) => a.name.localeCompare(b.name))
      : data.sort((a, b) => b.name.localeCompare(a.name));
  }
  console.log("the data's doesnt exist");
  return null;
};

export const findProduct = (
  data: invType[],
  search: string,
): invType | null => {
  if (data.length === 0) {
    console.log("");
    return null;
  } else {
    const find =
      data.find(
        (item) =>
          item.name.toLowerCase().split(" ").includes(search.toLowerCase()) ||
          item.brand.toLowerCase().split(" ").includes(search.toLowerCase()),
      ) ?? null;
    if (find === null) {
      console.log("the product doesnt exist");
    }
    return find;
  }
};

export const updatePrice = (
  data: invType[],
  product: string,
  newPrice: number,
): void => {
  const finded = findProduct(data, product);
  if (finded !== null) {
    finded.price = newPrice;
    console.log(inventory);
  }
};
export const updateStock = (
  data: invType[],
  product: string,
  newStock: number = 0,
): void => {
  const finded = findProduct(data, product);
  if (finded !== null && newStock > 0 && newStock !== 0) {
    finded.stock = newStock;
    console.log(inventory);
  }
};
export const updateDetails = (
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
    }
    if (
      finded.details.rom !== undefined &&
      finded.details.rom !== newDetails.rom
    ) {
      finded.details.rom = newDetails.rom!;
    }
    console.log(inventory);
  }
};
export const totalInventoryValue = (data: invType[]): void => {
  const total = data.reduce((p, c) => (p += c.price * c.stock), 0);
  console.log(total);
};
console.log(removeProductsByBrand(inventory, "redmi"));
