//Create an object book with keys: title, author, and pages.Print the author name using both dot and bracket notation
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180
};

console.log(book.author); // Using dot notation
console.log(book["author"]); // Using bracket notation

//Create an object user with properties name and age.Add a new property email and update the age.
const user = {
    name: "Alice",
    age: 25
};

user.email = "alice@example.com";
user.age = 26;

console.log(user);

//Create an object student with 3 subjects and marks.Loop through and print each subject with its mark.
const student = {
    subject1: { name: "Math", marks: 85 },
    subject2: { name: "Science", marks: 92 },
    subject3: { name: "English", marks: 78 }
};

for (const key in student) {
    console.log(`${student[key].name}: ${student[key].marks}`);
}

//Create an object calculator with methods:add(a,b) → returns sum, sub(a,b) → returns difference.Call both methods and print results.
const calculator = {
    add: function(a, b) {
        return a + b;   
    },
    sub: function(a, b) {
        return a - b;
    }
};

console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.sub(5, 3)); // Output: 2

//Create an object employee with properties name and salary.Add a method details() that prints "Name: ___, Salary: ___" using this.
const employee = {
    name: "John",
    salary: 50000,
    details: function() {
        console.log(`Name: ${this.name}, Salary: ${this.salary}`);
    }
};

employee.details();

//Create an object mobile and print all its keys and values using built-in methods.
const mobile = {
    brand: "Samsung",
    model: "Galaxy S21",
    price: 79999,
    color: "Black"
};

console.log("Keys:", Object.keys(mobile));
console.log("Values:", Object.values(mobile));
console.log("Entries:", Object.entries(mobile));

//Create an object student with nested details:{

//   name: "Kavi",

//   marks: { maths: 80, science: 90 }

// }


// Access and print the science mark.
const studentDetails = {
    name: "Kavi",
    marks: {    
        maths: 80,
        science: 90
    }
};

console.log("Science mark:", studentDetails.marks.science);