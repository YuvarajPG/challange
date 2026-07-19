export type invType = {
  id: string;
  name: string;
  brand: string;
  price: number;
  stock: number;
  details: {
    ram: string;
    rom: string;
    warranty?: string;
  };
  timestamp: string;
};

export const inventory: invType[] = [
  {
    id: "1",
    timestamp: "asda",
    name: "Iphone 16 pro max",
    price: 1500,
    brand: "Apple",
    stock: 10,
    details: {
      ram: "6 gb",
      rom: "128 gb",
    },
  },
  {
    id: "2",
    timestamp: "fafsa",
    name: "samsung s25 ultra",
    price: 600,
    brand: "samsung",
    stock: 13,
    details: {
      ram: "6 gb",
      rom: "128 gb",
    },
  },
  {
    id: "3",
    name: "samsung s23 ultra",
    price: 450,
    brand: "samsung",
    stock: 8,
    details: {
      ram: "6 gb",
      rom: "128 gb",
    },
    timestamp: "SFafqw",
  },
  {
    id: "4",
    name: "redmi note 11",
    brand: "redmi",
    price: 110,
    stock: 8,
    details: {
        ram: "6 gb",
        rom: "128 gb",
    },
    timestamp: "vwfe",
  },
];
