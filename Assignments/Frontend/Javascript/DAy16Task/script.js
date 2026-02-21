//Print Numbers form 10 to 1 using for loop
for (let i = 10; i > 0; i--) {
    // console.log(i);
}

// Print numbers that are divisible by 5 :-
const findNumDivisibleByFive = (num) => {
    for (let i = 0; i <= num; i++) {
        if (i % 5 === 0) {
            // console.log(i);
        }
    }
}
findNumDivisibleByFive(100);

//Print Event Numbers from 1 to 20 :-
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        // console.log(`The number ${i} is an even number`);
    }
}

// Find the sum of numbers from 1 to 5 :-
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
    // console.log(sum);
}

// Print the multiplication table of 5 :-
const printFiveTable = (num) => {
    for (let i = 1; i <= num; i++) {
        // console.log(`5 x ${i} = ${5 * i}`);
    }
}
printFiveTable(10);

// Print Squared Numbers from 1 to 10 :-
for (let i = 1; i <= 10; i++) {
    // console.log(i**2);
}


// Print all numbers between 1 to 30 that are divisible by both 2 and 3 :-
for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
        // console.log(i);
    }
}

// Finsd the factorial of 5 using loop :-
let factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial *= i;
    // console.log(factorial)
}

//Print Odd Numbers from 1 to 15 :-
for (let i = 1; i <= 15; i++) {
    if (i % 2 !== 0) {
        // console.log(`The number ${i} is an odd number`);
    }
}


//Find the sum of 10 :-
let sumTen = 0;
for (let i = 1; i <= 10; i++) {
    sumTen += i;
    // console.log(`The sum of 10 is ${sumTen}`)
}


//Multiplication of 5 :-
for (let i = 1; i <= 10; i++) {
    const multiplication = 5 * i;
    // console.log(`The multiplication of ${i} times 5 is ${multiplication}`); 
}

//1 to 50 divisible by 5 :-
for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
        const result = i;
        // console.log(`The number ${result} is divisible by  5`);
    }
}

//Print the numbers from 1 to 30 that are divisible by both 2 and 3 :-
for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log(i);
    }
}

//Factorial of 10 :-
let findFactOfFive = 1;
for(let i = 1; i<=10 ; i++){
    findFactOfFive *= i;
}
// console.log(`The factorial of 10 is ${findFactOfFive}`);

//While Loop :-
//1 Print numbers from 1 to  5 :-
let num = 1;
while(num <= 5){
    // console.log(num);
    num++;
}

//2)numbers from 10 to 1 :-
let num2 = 10;
while(num2 > 0){
    // console.log(num2);
    num2--;
}

//Do While Loop :-
//1)Print numbers from 1 to 3 :-
let num3 = 1;
do{
    // console.log(num3);
    num3++;
}while(num3 <= 3);

//Calculate the sum of numbers from 1 to 10 :-
let sumOfTen = 0;
let num4 = 1;   
do{
    sumOfTen += num4;
    num4++;
}while(num4 <= 10);
// console.log(`The sum of 10 is ${sumOfTen}`);

//Print first 5 even numbers :-
let evenNum = 1;
let count = 0;
do{
    if(evenNum % 2 === 0){
        // console.log(evenNum);
        count++;
    }
}while(count < 5 && evenNum++);