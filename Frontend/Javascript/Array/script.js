const numArr = [1, 2, 33, 4];

numArr.splice(2, 1, 20);
// console.log(numArr);

const arr = [3, 6, 9, 12, 15];
// console.log("Original Array ->", arr);

arr.splice(2, 0, 2);
// console.log("After Using Splice ->", arr);

const arr2 = [1, 2, 3, 4, 5]

arr2.push(6, 7);
// console.log(arr2);

const arr3 = [3, 6, 9, 12, 15];
arr3.splice(2, 1, 0);
// console.log(arr3);

const arr4 = [1, 2, 3, 4, 5];
arr4.splice(arr4.length - 1, 1, 10)
// console.log(arr4);

const arr5 = [3, 6, 9, 12, 15];
// console.log(arr5);
arr5.splice(3, 1, 7);
// console.log(arr5);

let fruit = ["Apple", "Orange", 2]

// fruit.forEach((value, index, ogArr) => console.log(value))
// const a = arr3.map(value => value + 2);
// console.log(a);


fruit.forEach(element);

function element(value) {
    // console.log(value);
}


const arrForFilter = [10, 20, 30, 45, 50, 78];
//Filter Method
const numDividedBy10 = arrForFilter.filter(toFilter);

//Filter CallBack Function :-
function toFilter(value) {
    return value % 10 === 0;
}
console.log("Original Array ->", arrForFilter);
console.log("After Filteration ->", numDividedBy10);


//Using Map :-
const usingMap = arrForFilter.map(value => value % 10 === 0 ? value : "Not dividable");
console.log(usingMap);


const normalArr = [3, 6, 9, 12, 15];

const doubleNumGreaterThanSix = normalArr.filter(value => value >= 6).map(value => value * 2);
console.log("Normal Array -> ", normalArr);
console.log("Double Array -> ", doubleNumGreaterThanSix);

const reduceNum = normalArr.reduce((previousValue, currentValue, currentIndex) =>{
     console.log("Added all the values in the array -> ", previousValue + currentValue);
     return previousValue + currentValue;
})
//

const averageSumInTheArr = normalArr.reduce((preVal, currVal, currIndex) => preVal + currVal)/normalArr.length;
console.log("Average of the Array ->", averageSumInTheArr);