//Print Numbers form 10 to 1 using for loop
for(let i = 10; i > 0; i--){
    // console.log(i);
}

// Print numbers that are divisible by 5 :-
const findNumDivisibleByFive = (num) => {
    for(let i = 0; i <= num; i++){
        if(i % 5 === 0){
            // console.log(i);
        }
    }
}
findNumDivisibleByFive(100);

// Find the sum of numbers from 1 to 5 :-
let sum = 0;
for(let i = 1; i<=5; i++){
    sum +=i;
    // console.log(sum);
}

// Print the multiplication table of 5 :-
const printFiveTable = (num) => {
    for(let i = 1; i<=  num; i++){
        // console.log(`5 x ${i} = ${5 * i}`);
    }
}
printFiveTable(10);

// Print Squared Numbers from 1 to 10 :-
for (let i = 1; i<=10 ; i++){
    // console.log(i**2);
}


// Print all numbers between 1 to 30 that are divisible by both 2 and 3 :-
for(let i= 1; i<=30; i++){
    if(i % 2 === 0 || i % 3 === 0){
        // console.log(i);
    }
}

// Finsd the factorial of 5 using loop :-
let factorial = 1;
for(let i = 1; i<=5; i++){
    factorial *= i;
    // console.log(factorial)
}
