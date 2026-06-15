/* problem 1 */

/* 
const apple: number = 10
const mango: number = 15

const TotalPrice = (productPrice:number,quantity:number) => {
    return (productPrice * quantity)
}
console.log(TotalPrice(apple, 5))

 */
/* problem 2 */
const reverse = (str: string) => {
    return str.split("").reverse().join("")
}

console.log(reverse("hello"))

/* problem 3 */
const numbers: number[] = [5, 3, 9, 1, 5, 6, 9, 2]
const secondLargestNumber = (arr: number[]) => {
    const uniqueNumbers = [...new Set(arr)]
    uniqueNumbers.sort((a, b) => b - a)
    return uniqueNumbers[1]
}
console.log(secondLargestNumber(numbers))

/* problem 4 */
const largestNumber = (arr: number[]) => {
    return Math.max(...arr)
}
console.log(largestNumber(numbers))