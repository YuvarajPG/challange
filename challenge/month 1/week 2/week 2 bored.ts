import { ProductType, products } from '../week 1/data';
/* day 5 */
/* bored p-11 */
const findProductIndexManual=(input:ProductType[],search:string):number=>{
    for (let index = 0; index < input.length; index++) {
        if(input[index]?.name.toLowerCase()===search.toLowerCase()){
            return index
        }
    }
    return -1
}
console.log(findProductIndexManual(products,"mouse"));