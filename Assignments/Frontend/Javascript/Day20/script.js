//Double Array :-
const normalArray = [1,2,3,4,5,6];
const doubleNum = normalArray.map(value => value * 2);
console.log("Normal Array -> ", normalArray);
console.log("Double Array ->", doubleNum);

//2)Filter Only Even Num :-
const evenNum = normalArray.filter(value => value % 2 === 0);
console.log("Even Number ->", evenNum);

//3)Total Sum :-
const totalSum = normalArray.reduce((previousValue, currentValue) => previousValue+currentValue);
console.log("Sum of the Array =>", totalSum);

//Remove the element in the 3rd index :-
const arr1 = [100,200,300,400,500];
arr1.splice(3,1);
console.log("Removed the element in the 3rd index -> ", arr1);

//Remove the first element in the array :-
const arr2 = [7,14,21,28,35];
arr2.shift();
console.log(arr2);

//Replace the first element in the array :=
const arr3 = [0,1,0,1,0];
arr3.splice(0,1,1);
console.log(arr3);

const arr4 = [5,10,15,20,25];
arr4.splice(2,0,12);
console.log(arr4);

const arr5  =[2,4,6,8,10];
arr5.splice(2, arr5.length);
console.log(arr5);

console.log(typeof arr5);


