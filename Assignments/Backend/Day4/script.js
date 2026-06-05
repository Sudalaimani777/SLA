// const arr1 = [1,2,3,[1,2,3,4]];
// const arr2 = [...arr1];

// arr2.push(3);
// console.log("Original Array ->", arr1);
// console.log("Copied Array -> ", arr2)

const arr1 = ["react", "node", "angular", "express", "java", "python", "react"];

const arr2 = arr1.slice(3);
console.log("OG Array ->", arr1);
console.log("Copied Array -> ", arr2);

const arrFrom = Array.from([1, 2, 3, 4]);
console.log(arrFrom)

// Does not return
// arr1.forEach((value, i, arr) => console.log(value, arr));

//Can Be Retutn a new array
const arrMap = arr1.map(value => value);

console.log(arrMap);

//Access uisng the values :-
for (name of arr1) {
    console.log("Access the array using the values inside the array ->", name)
}

for (name in arr1) {
    console.log("Access the array using the index inside the array ->", name)
}

//Find :- HOF , return the value based on the condition for the first iteration.
const findMethod = arr1.find(value => value === "react");
console.log(findMethod);

//Filter :- return the collection of satisfied conditions
const filterMethod = arr1.filter(value => value === "react");
console.log(filterMethod);

//Reduce :- returns the single value
const num = [1, 2, 3, 4, 5, 6].reduce((a, b) => a + b, 0);
console.log(num);

//Flat Map :-
const flatMapFunc = [1,2,3,4,5].flatMap(value => value * 2);
console.log(flatMapFunc);

//Satatic Method :-
//Is Array -> Return boolean if the passed arguement is array or not

//Array of :-
const arrOf = Array.of(1,2,3,4);
console.log(arrOf)