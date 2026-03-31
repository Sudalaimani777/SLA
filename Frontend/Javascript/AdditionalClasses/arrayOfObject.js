//Array of objects :-
//  It is a data structure where each element is an object, allowing us to store and manage complex data in a structured way. Each object can have multiple properties, making it ideal for representing real-world entities and their attributes.
// It is used to store collection of related data, such as a list of users, products, or any other entities. It allows us to easily access and manipulate data based on specific properties, making it a powerful tool for handling complex datasets in JavaScript.
// Commonly used in API responses, database queries results and displaying the result, etc..

const users = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 18 },
    { id: 3, name: "Charlie", age: 35 }
];

// Example: Accessing properties of objects in an array
// console.log(users[0].name); // Output: Alice
// console.log(users[1].age);  // Output: 25

// Example: Iterating over an array of objects
for (const user of users) {
    // console.log(`${user.name} is ${user.age} years old.`);
}

//ForEach :-
// users.forEach(user => console.log(user.name));

//Filter :-
// users.filter(user => user.age > 18 ? console.log(user.name) : "");

//Sort :-
// users.sort((a, b) => console.log(a.age - b.age));

