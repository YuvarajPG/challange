export type invType = {
    id: number;
    name: string;
    brand: string;
    price: number;
    stock: number;
    details:{
        ram:string,
        rom:string,
        warranty?: string;
    }
};

export const inventory: invType[] = [];
