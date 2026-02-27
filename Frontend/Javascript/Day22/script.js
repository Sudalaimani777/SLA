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
toFindSecondSmallestNum([1, 2, 3, 4, 5])



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
console.log(userOne);
console.log(doorNo);
console.log(street);

//Reverse an array :-
function toRevers (arr){
    let container = [];
    for(let i = arr.length - 1; i >= 0 ; i -- ){
        container.push(arr[i]);
    }
    console.log(container);
}
toRevers([1,2,3,4]);

//Without Push method :-
function toReverseWithoutPush(arr){
    let container = [];
    for(let i = arr.length - 1; i >= 0 ; i -- ){
        container[container.length] = arr[i];
    }
    console.log(container);
}
toReverseWithoutPush([1,2,3,4]);