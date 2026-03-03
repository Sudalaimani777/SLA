let a = 20;
let b = 20;
console.log(a != b);


let color = "red";

let result = color === "red" ? "Stop" : color === "yellow" ? "Wait" : color === "green" ? "Lets goo" : "Not to go";
console.log(result);

function changePriceForDifferentAges(age) {
    let price = 0;
    if (age <= 12) {
        price = "5 Dollar"
    } else if (age >= 13 && age <= 17) {
        price = "10 Dollar"
    } else if (age >= 18 && age <= 59) {
        price = "20 Dollar"
    }
    else {
        price = "15 Dollar";
    }
    console.log(price);
}
changePriceForDifferentAges(70)


function findEvenNum(arr){
    let evenNumContainer = [];
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] % 2 === 0){
            evenNumContainer.push(arr[i])
        }
    }
    console.log(evenNumContainer.length);
}
findEvenNum([1,2,3,4,5,6,7,8])

//Function to remove the duplicate element from an array
function removeDuplicate(arr){
    let uniqueArr = [];
    for(let i = 0; i < arr.length; i++){
        if(uniqueArr.indexOf(arr[i]) === -1){
            uniqueArr.push(arr[i])
        }
    }
    console.log(uniqueArr);
}

function toCheckNumEvenOrOdd(num){
    if(num % 2 === 0 ){
        console.log(`The num ${num} is even `);
    }else{
        console.log(`The num ${num} is odd`);
    }
}
toCheckNumEvenOrOdd(6);


//Reverse an array :-
function reverseArray(arr){
    let reversedArr = [];   
    for(let i = arr.length - 1; i >= 0; i--){
        reversedArr.push(arr[i])
    }   
    console.log(reversedArr);
}
reverseArray([1,2,3,4,5]);

function toFindZero(arr){
    let container = [];
    for(let i = 0; i<= arr.length ; i++){
        if(arr[i] === 0){
            container.push(arr[i])
        }
    }
    console.log(container);
}
toFindZero([1,0,0]);

//Find the sum of all elelments :-
function toFindSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    console.log(sum);
}
toFindSum([1,2,3,4])

//Find smallest number in an array :-
function toFindSmallestNum(arr){
    let smallestNum = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < smallestNum){
            smallestNum = arr[i];
        }
    }
    console.log(smallestNum);
}
toFindSmallestNum([1,2,3,4]);

//Check the numbers is positive or negative :-
function toCheckPositiveOrNegative(num){
    if(num < 0){
        console.log(`The number ${num} is negative`);
    }else{
        console.log(`The number ${num} is positive`);
    }
}
toCheckPositiveOrNegative(0);

//Print n to 1 :-

function printNtoOne(num){
    for(let i = num; i >= 1; i--){
        console.log(i);
    }
}
// printNtoOne(10);

//Print largest number in an array :-
function toFindLargestNum(arr){
    let largestNum = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > largestNum){
            largestNum = arr[i];
        }
    }
    console.log("The largest number in the array ->",arr ,"is", largestNum);
}
toFindLargestNum([1,2,3,4]);

//Change city :-
const userData = {name:"Sudalaimani", city:"Chennai"};

userData.city = "Madurai";

console.log(userData);
