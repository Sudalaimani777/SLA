function sdlkd(num){
    const value  = num % 2 === 0 ? "Even" : "Odd";
    return value;
}
console.log(sdlkd(8));

function checkEvenOdd(num) {
    if(num % 2 === 0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}
checkEvenOdd(33);

const add = num => num * 2;
console.log(add(3));

//Sum of 1 to n :-
function sumOfNum(num){
    //Initialize sum variable :-
    let total = 0;
    for(let i = 1; i <= num; i++){
        total += i; // 
    }
    console.log(total);
}
sumOfNum(10);

function factorial(num){
    let count =1;
    for(i = 1; i <= num; i++){
        // count = count * i; // 1 = 1 * 1
        count *= i; 
    }
    console.log(count);
}
factorial(5);
