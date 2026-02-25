const numArr= [1,2,33,4];

numArr.splice(2,1,20);
console.log(numArr);

const arr = [3,6,9,12,15];
console.log("Original Array ->", arr);

arr.splice(2,0,2);
console.log("After Using Splice ->", arr);

const arr2 = [1,2,3,4,5]

arr2.push(6,7);
console.log(arr2);

const arr3 = [3,6,9,12,15];
arr3.splice(2,1,0);
console.log(arr3);

const arr4 = [1,2,3,4,5];
arr4.splice(arr4.length -1,1,10)
console.log(arr4);

const arr5 = [3,6,9,12,15];
console.log(arr5);
arr5.splice(3,1,7);
console.log(arr5);

let fruit = ["Apple", "Orange",2]

fruit.forEach((value, index, ogArr) => console.log(value))
// const a = arr3.map(value => value + 2);
// console.log(a);


fruit.forEach(element);

function element(value){
    // console.log(value);
}


const arr10 = [1,30,40,34,565,324,65575,23];

const numDivisibleBy10 = arr10.filter(divide);

function divide(value){
    return value / 10 ? "Num Divided by 10" : "Not Divided by 10"
}
console.log(numDivisibleBy10);
