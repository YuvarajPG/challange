import { ProductType, products } from "../data";
/* day 9 */
/* bored p-15 */
const count = (input: ProductType[]): number => {
  let count = 0;
  for (let index = 0; index < input.length; index++) {
    if (input[index]!.stock > 0 && input[index]!.price>1000) {
      count++;
    }
  }
  return count;
};
console.log("count of products ",count(products));

