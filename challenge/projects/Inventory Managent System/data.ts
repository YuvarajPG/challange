export type invType = {
    id: number;
    name: string;
    price: number;
    brand: string;
    warranty: string;
    stock?: number;
};

export const inventory: invType[] = [];
