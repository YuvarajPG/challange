const array: number[] = [1, 2, 3, 4, 5, 7, 8, 9, 10];

/* warm up p-1 */
const countEven = (arr: number[]): number => {
    let count = 0;
    if (arr.length !== 0) {
        for (let index = 0; index < array.length; index++) {
            if (arr[index]! % 2 === 0) {
                count++;
            }
        }
    }
    return count;
};
console.log(`The count of even number in array is ${countEven(array)}\n`);

/* warm up p-2 */
const sumArr = (arr: number[]): number => {
    let sumArr = 0;
    if (arr.length === 0) {
        return 0;
    }
    for (let index = 0; index < array.length; index++) {
        sumArr += arr[index]!;
    }
    return sumArr;
};
console.log(`The sum of array is ${sumArr(array)}\n`);

/* warm up p-3 */
const numberCointainAnotherMethod = (
    arr: number[],
    contain: number,
): boolean => {
    if (arr.length !== 0) {
        for (let index = 0; index < array.length; index++) {
            if (arr[index] === contain) {
                return true;
            }
        }
    }

    return false;
};
console.log(
    `The number is contain in array : ${numberCointainAnotherMethod(array, 0)}`,
);
