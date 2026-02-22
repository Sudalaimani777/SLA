//1) Create an Array of Fruits and display it on the console.
const fruits = ["Apple", "Banana", "Cherry", "Dates", "Elderberry"];
console.log(fruits);
console.log(fruits[0]); //Accessing the first element of the array
console.log(fruits[1]); //Accessing the second element of the array
console.log(fruits[2]); //Accessing the third element of the array
console.log(fruits[3]); //Accessing the fourth element of the array
console.log(fruits[4]); //Accessing the fifth element of the array

//2) Display the first and last element of the array on the console.
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);


// 3) Display the length of the array on the console.
console.log(fruits.length);

//4) Add a new fruit to the end of the array and display the updated array on the console.
fruits.push("Fig");
console.log(fruits);

//5) Remove the last fruit from the array and display the updated array on the console.
fruits.pop();
console.log(fruits);

//6) Add a new fruit to the beginning of the array and display the updated array on the console.
fruits.unshift("Grapes");
console.log(fruits);

//7) Remove the first fruit from the array and display the updated array on the console.
fruits.shift();
console.log(fruits);

//8)Change the second fruit in the array to "Honeydew" and display the updated array on the console.
fruits.splice(1,1,"Honeydew");
console.log(fruits);


for(let i = 0; i<fruits.length; i++){
//   console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}