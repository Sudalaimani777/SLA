// var -> Function Scope
// let, const -> Block Scope

function test() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;
    }
    console.log(a) // 10
    console.log(b) // ReferenceError: b is not defined
    console.log(c) // ReferenceError: c is not defined
}
// test()
// console.log(x) // ReferenceError: x is not defined

function loopVar() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i)
        }, 2000)
    }
}
// loopVar(); // 0, 1, 2, 3, 4 (for using let)
// loopVar(); // 5, 5, 5, 5, 5 (for using var)

//Arrow Function :-
const add = (a, b) => a + b;
// console.log(add(3, 5));

const loop = () => {
    for (let i = 0; i <= 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 2000)
    }
}
// loop();

//Array :-
const arr = [1, 2, 3, 4, 6];
// arr.push(2);
// console.log(arr);

//Object :-
const obj = { val: "Tarun" };
obj.val = "Kumar";
// console.log(obj);

//Add Two num :-
const addSum = (a, b) => a + b;
// console.log(addSum(2, 4));

const incNum = a => {
    let num = 1;
    num += a;
    console.log(num)
}
// incNum(1);

//JS to check even or odd using arrow func
//Factorial of the num
//Maximum of 2 nums
//Min of 2 num
//Reverse a string
//Palindrome
//square of num
//Cube of num
//Celcius to fahernheit
//Length of string
//Count vowels in a string

//Find the vowels in a string :-
const vowels = word => {
    let value = word.toLowerCase();
    let container = [];
    for (let i = 0; i < word.length; i++) {
        if (value[i] === "a" || value[i] === "e" || value[i] === "i" || value[i] === "o" || value[i] === "u") {
            container.push(value[i]);
        }
    }
    console.log(container);
}
vowels("Madam");

//Max Number :-
let max = arr[0]
for (let num of arr) {
    if (num > max) {
        max = num
    }
}
// console.log(max);


//Min Number :-
let min = arr[0];
for (let num of arr) {
    if (num < min) {
        min = num;
    }
}
// console.log(min);

const square = arr.map(val => val * 2).filter(val => val > 5);
// console.log(square);

//Sum of +ve num :- [1,-2,3,4,-5,6]
//Double the num and find the mav val in the array.
//Remove duplicates from the array. [1,2,3,4,5,1,2,3]
//Multiply odd num and return new arr.

const user = [
    { name: "Kumar" },
    { name: "Tarun" }
];

const section = document.querySelector("section");
user.forEach(arr => {
    console.log(arr.name)
    let p = document.createElement("p");
    p.textContent = arr.name;
    section.appendChild(p);
});

//Celcius to Fahernheit :-
const celiusToFahrenheit = num => (num * (9 / 5)) + 32;
console.log(celiusToFahrenheit(10))

//Fahrenheit to Celcius :-
const fahrenheitToCelcius = num => (num - 32) * (5 / 9);
console.log(fahrenheitToCelcius(10));

const countEvenNum = arr => {
    let count = 0;
    for (const num of arr) {
        if (num % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log(countEvenNum([1, 2, 3, 4, 5, 6]));

//Average :-
const averaage = arr => {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum / arr.length;
}
console.log(averaage([1, 2, 3, 4, 5, 6]));

// =============================================
// Practice: Normal Function + ES6 Arrow Function
// =============================================

// 1) Check Even or Odd
function isEvenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
const isEvenOrOddES6 = num => num % 2 === 0 ? "Even" : "Odd";

// 2) Factorial
function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
const factorialES6 = num => {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
};

// 3) Maximum of 2 numbers
function maxOfTwo(a, b) {
    return a > b ? a : b;
}
const maxOfTwoES6 = (a, b) => a > b ? a : b;

// 4) Minimum of 2 numbers
function minOfTwo(a, b) {
    return a < b ? a : b;
}
const minOfTwoES6 = (a, b) => a < b ? a : b;

// 5) Reverse a string
function reverseString(text) {
    return text.split("").reverse().join("");
}
const reverseStringES6 = text => text.split("").reverse().join("");

// 6) Palindrome
function isPalindrome(text) {
    const cleaned = text.toLowerCase();
    return cleaned === cleaned.split("").reverse().join("");
}
const isPalindromeES6 = text => {
    const cleaned = text.toLowerCase();
    return cleaned === cleaned.split("").reverse().join("");
};

// 7) Square of number
function squareNum(num) {
    return num * num;
}
const squareNumES6 = num => num * num;

// 8) Cube of number
function cubeNum(num) {
    return num * num * num;
}
const cubeNumES6 = num => num * num * num;

// 9) Celsius to Fahrenheit
function celsiusToFahrenheit(num) {
    return (num * 9 / 5) + 32;
}
const celsiusToFahrenheitES6 = num => (num * 9 / 5) + 32;

// 10) Length of string
function stringLength(text) {
    return text.length;
}
const stringLengthES6 = text => text.length;

// 11) Count vowels in a string
function countVowels(text) {
    let count = 0;
    const lower = text.toLowerCase();
    for (const ch of lower) {
        if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
            count++;
        }
    }
    return count;
}
const countVowelsES6 = text => {
    let count = 0;
    const lower = text.toLowerCase();
    for (const ch of lower) {
        if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
            count++;
        }
    }
    return count;
};

// 12) Sum of positive numbers
function sumPositive(arr) {
    let sum = 0;
    for (const num of arr) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
}
const sumPositiveES6 = arr => {
    let sum = 0;
    for (const num of arr) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
};

// 13) Double numbers and find max
function doubleAndFindMax(arr) {
    const doubled = arr.map(num => num * 2);
    let maxValue = doubled[0];
    for (const num of doubled) {
        if (num > maxValue) {
            maxValue = num;
        }
    }
    return { doubled, maxValue };
}
const doubleAndFindMaxES6 = arr => {
    const doubled = arr.map(num => num * 2);
    let maxValue = doubled[0];
    for (const num of doubled) {
        if (num > maxValue) {
            maxValue = num;
        }
    }
    return { doubled, maxValue };
};

// 14) Remove duplicates from array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
const removeDuplicatesES6 = arr => [...new Set(arr)];

// 15) Multiply odd numbers and return new array
function multiplyOdd(arr, multiplyBy) {
    const result = [];
    for (const num of arr) {
        if (num % 2 !== 0) {
            result.push(num * multiplyBy);
        }
    }
    return result;
}
const multiplyOddES6 = (arr, multiplyBy) => {
    const result = [];
    for (const num of arr) {
        if (num % 2 !== 0) {
            result.push(num * multiplyBy);
        }
    }
    return result;
};


// Sample calls
console.log(isEvenOrOdd(7), isEvenOrOddES6(8));
console.log(factorial(5), factorialES6(6));
console.log(maxOfTwo(10, 15), maxOfTwoES6(25, 12));
console.log(minOfTwo(10, 15), minOfTwoES6(25, 12));
console.log(reverseString("JavaScript"), reverseStringES6("Frontend"));
console.log(isPalindrome("Madam"), isPalindromeES6("level"));
console.log(squareNum(5), squareNumES6(9));
console.log(cubeNum(3), cubeNumES6(4));
console.log(celsiusToFahrenheit(30), celsiusToFahrenheitES6(100));
console.log(stringLength("Hello"), stringLengthES6("Developer"));
console.log(countVowels("Education"), countVowelsES6("Programming"));
console.log(sumPositive([1, -2, 3, 4, -5, 6]), sumPositiveES6([1, -2, 3, 4, -5, 6]));
console.log(doubleAndFindMax([1, 2, 3, 4, 5]), doubleAndFindMaxES6([10, 20, 30]));
console.log(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3]), removeDuplicatesES6([1, 1, 2, 2, 3, 4]));
console.log(multiplyOdd([1, 2, 3, 4, 5], 10), multiplyOddES6([1, 2, 3, 4, 5], 5));

