// 1
let nums = [3.02, -3.65, 5, -9];

function normalizeNumbers(arr) {
    return arr.map(value => Math.round(Math.abs(value)));
}
let testNormalizeNums = normalizeNumbers(nums);
// console.log(testNormalizeNums);

// ----------------------------------------------------------

// 2
function cubeNumber(num) {
    return Math.pow(num, 3);
}
let cube = cubeNumber(3);
// console.log(cube);

// ----------------------------------------------------------

// 3
function sumEvenOdd(num) {
    let even = 0;
    let odd = 0;
    for (let i = 1; i <= num; i++) {
        i % 2 == 0 ? even += i : odd += i;
    }
    return `Sum of odd: ${odd}, even: ${even}`
}
let sumNums = sumEvenOdd(10);
// console.log(sumNums);

// ---------------------------------------------------------

// 4
function replaceTrim(str) {
    str = str.trim().slice(1) + str.trim().slice(0,1);
    return str;
}
let fixString = replaceTrim("     tJavaScrip     ");
// console.log(fixString);

// -------------------------------------------------

// 5
function checkEquality(num1, num2) {
    return num1 == num2 ? 2 *(num1 + num2) : num1 + num2
}
let checkEqualNums = checkEquality(2,4);
// console.log(checkEqualNums);

// ------------------------------------------------

// 6
const numbers = [2, 5, 7, 10];
function sumOfNums(arr) {
    return arr.reduce((acc, element) => acc + element); //optimal
}
let sumNum = sumOfNums(numbers);
// console.log(sumNum);

// ------------------------------------------------

// 7
function absNumber (temp) {
    return Math.abs(Number(temp));
}
let absNum = absNumber("34.000");
// console.log(absNum);

// ------------------------------------------------

// 8
let array = [111, 4, 6, 2, 99, 44, 11];
function maxNumber(arr) {
    return Math.max(...arr);
}
let maxNum = maxNumber(array);
// console.log(maxNum);

// --------------------------------------------

// 9
let arr = [111, 4, 6, 2, 99, 44, 11];
function minNumber(arr) {
    return Math.min(...arr);
}
let minNum = minNumber(array);
// console.log(minNum);

// -------------------------------------------------

// 10
let arr1 = [111, 4, 6, 2, 99, 44, 11];
let arr2 = [22, 45, 23, 36, 12, 300];
function maxNumOfTwoArr(arr1, arr2) {
    return Math.max(Math.max(...arr1), Math.max(...arr2));
}
let maxNumb = maxNumOfTwoArr(arr1, arr2);
// console.log(maxNumb);