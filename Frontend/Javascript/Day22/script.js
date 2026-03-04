//Find smallest num in the array :-
function toFindSmallestNum(arr) {
    let container = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < container) {
            container = arr[i]
        }
    }
    console.log(container);
}
// toFindSmallestNum([2,3,4,6,5,1]);

//Find the Second smallest number in the array :-
function toFindSecondSmallestNum(arr) {
    let smallestNum = arr[0];
    let secondSmallestNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallestNum) {
            secondSmallestNum = smallestNum;
            smallestNum = arr[i]
        }
        else if (arr[i] < secondSmallestNum && arr[i] != smallestNum) {
            secondSmallestNum = arr[i]
        }
    }
    console.log(secondSmallestNum);
}
// toFindSecondSmallestNum([1, 2, 3, 4, 5])



function toFindSecondSmallestNumber(arr) {
    let firstSmallestNum = arr[0];
    let secondSmallestNum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < firstSmallestNum) {
            secondSmallestNum = firstSmallestNum;
            firstSmallestNum = arr[i]
        }
        else if (arr[i] < secondSmallestNum && arr[i] != firstSmallestNum) {
            secondSmallestNum = arr[i]
        }
    }
    console.log(secondSmallestNum)
}
// toFindSecondSmallestNumber([1,2,3,4,5,6]);

//Destructuring :-
const name = ["Arun", "Varun", "Kumar"];

const [firstUser, ...remainingUsers] = name;
console.log(remainingUsers);
// console.log(firstUser);

//Obj Destructuring :-
const data = {
    userOne: "Arun",
    userAddress: {
        doorNo: 1,
        streetAddress: {
            street: "40th",
        }
    }
}

const { userOne, userAddress: { doorNo, streetAddress: { street } } } = data;
// console.log(userOne);
// console.log(doorNo);
// console.log(street);

//Reverse an array :-
function toRevers(arr) {
    let container = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        container.push(arr[i]);
    }
    console.log(container);
}
// toRevers([1, 2, 3, 4]);

//Without Push method :-
function toReverseWithoutPush(arr) {
    let container = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        container[container.length] = arr[i];
    }
    console.log(container);
}
// toReverseWithoutPush([1, 2, 3, 4]);

//Print Smallest num in the array without using loop :-
function toFindSmallestNumWithoutLoop(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    const smallestNum = toFindSmallestNumWithoutLoop(arr.slice(1));
    return arr[0] < smallestNum ? arr[0] : smallestNum;
}
// console.log(toFindSmallestNumWithoutLoop([1, 2, 3, 4, 5, 6]));

function toFindSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}
// toFindSum([2, 4, 6]);


//Print 10 to 1;

function printReverse(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}
// printReverse(10)

//Array divisible by 5 :-
function arrDivisibleByFive(arr) {
    let container = [];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] % 5 === 0) {
            container.push(arr[i])
        }
    }
    console.log(container);
}
// arrDivisibleByFive([1, 2, 5, 10, 20, 27]);

//Add 5 to each elelment in the array :-
function addFive(arr) {
    let container = [];
    for (let i = 0; i < arr.length; i++) {
        container.push(arr[i] + 5)
    }
    console.log(container);
}
// addFive([1, 2, 3]);

function toFindVowels(value){
    let arr = ["a", "e", "i", "o", "u"];
    let result = `The letter ${value} is not an vowel`; 
    for(let i = 0; i < arr.length ; i++){
        if(value.toLowerCase() === arr[i]){
         result = `The letter ${value} is an vowel`;
         break;
        }
    }
    console.log(result);
}
// toFindVowels("A");
// toFindVowels("a");