// week 1 data.ts
export const arr: number[] = [1, 2, 3, 5, 24, 35, 65, 17, 8, 9, 10];
export const boredWeek2 : number[]=[1,2,3,4,5,6,7,8,9,10]

export type ProductType = {
    name: string;
    price: number;
    stock:number
};
export type ProductTypeWithOutStock = {
    name:string,
    price:number,
    stock?:number
}

// week 1 bonus data.ts
export type NormalProduct = {
    name: string;
    price: number;
};

export const normalProducts: NormalProduct[] = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 },
    { name: "Headset", price: 2500 },
];

// week 2 data.ts
export const products: ProductType[] = [
    { name: "Mouse", price: 500, stock: 3 },
    { name: "Keyboard", price: 1500, stock: 1 },
    { name: "Monitor", price: 12000, stock: 0 },
    { name: "Laptop", price: 20000, stock: 4 },
];

export const unSortedArr :ProductTypeWithOutStock[]=[
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 10 },
    { name: "Monitor", price: 50 },
    { name: "Laptop", price: 2000 },
];
// week 3 data.ts
export type UserType = {
    name: string;
    age: number;
};

export const data: UserType = {
    name: "yuvaraj",
    age: 20,
};

export const arrData: UserType[] = [
    { name: "John", age: 5 },
    { name: "Alex", age: 30 },
    { name: "Mike", age: 25 },
];