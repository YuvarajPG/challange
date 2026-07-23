export type invType = {
  id: string;
  name: string;
  brand: string;
  price: number;
  stock: number;
  details: {
    ram: number;
    rom: number;
    warranty?: string;
  };
  timestamp: string;
};

// export const inventory: invType[] = [
//   {
//     id: "1",
//     name: "Iphone 16 pro max",
//     price: 1500,
//     brand: "Apple",
//     stock: 10,
//     details: {
//       ram: "6 gb",
//       rom: "128 gb",
//     },
//     timestamp: "asda",
//   },
//   {
//     id: "2",
//     name: "samsung s25 ultra",
//     price: 600,
//     brand: "samsung",
//     stock: 13,
//     details: {
//       ram: "6 gb",
//       rom: "128 gb",
//     },
//     timestamp: "fafsa",
//   },
//   {
//     id: "3",
//     name: "samsung s23 ultra",
//     price: 450,
//     brand: "samsung",
//     stock: 8,
//     details: {
//       ram: "6 gb",
//       rom: "128 gb",
//     },
//     timestamp: "SFafqw",
//   },
//   {
//     id: "4",
//     name: "redmi note 11",
//     brand: "redmi",
//     price: 110,
//     stock: 8,
//     details: {
//         ram: "6 gb",
//         rom: "128 gb",
//     },
//     timestamp: "vwfe",
//   },
// ];
