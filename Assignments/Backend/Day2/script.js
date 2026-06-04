//Task 1 -> Create an arrow function that accepts a student's first name and last name and returns the full name.

const studentFullName = (firstName, lastName) => `${firstName + lastName}`;
console.log("Task 1 ->", studentFullName("Sudalai", "mani"))

//Task 2 -> Create an arrow function that accepts a product price and quantity and returns the total amount.

const productTotalAmount = (productName, productPrice, productQuantity) => `The product, ${productName} which has the price of ${productPrice}. The user was ordered totally ${productQuantity} unit so the total price of the product is ${productPrice * productQuantity}`;

console.log("Task 2 ->", productTotalAmount("PS5", 50000, 2));

//Task 3 -> Create an arrow function that accepts a person's age and returns whether they are eligible for voting.

const personEligibleForVoting = personAge => personAge >= 18 ? `The person has the valid age of ${personAge}, so the person has the eligibility to vote` : `The minimum requirement to vote is 18, but the preson was only ${personAge} old, the person need ${18 - personAge} to more ages to vote`;

console.log("Task 3 -> ", personEligibleForVoting(15));
console.log("Task 3 -> ", personEligibleForVoting(18));

// Task 4 -> Create an arrow function that accepts three numbers and returns the largest number.

const findLargestNumber = (...numbers) => {
    let lgNum = 0
    for (let i = 0; i <= numbers.length; i++) {
        if (i > lgNum) {
            lgNum = i
        }
    }
    return lgNum;
}
console.log("Task 3 -> ", findLargestNumber(1, 2, 3));

//Task 5 - Create an arrow function that accepts a username. If no username is provided, return "Guest" using a default parameter.

const user = (person = "Guest") => `Welcome ${person}`;
console.log("Task 5 ->", user());
console.log(user("Sudalaimani"));

// Task 6 -> Create an arrow function that accepts two numbers and returns Sum, Difference, Multiplication Division

const calculation = (a, b) => `The num ${a},${b}, the sum of two numbers is ${a + b}, for Subtraction ${a - b}, for multiplication ${a * b}, for division ${a / b}`;

console.log("Task 6 ->", calculation(2, 3));

// Task 7 -> Create an arrow function that accepts marks of 5 subjects and returns the total and average.

const averageMarks = (...subjects) => {
    const avgMark = subjects.reduce((sum, subject) => sum + subject.marks, 0);
    return Math.round(avgMark / subjects.length);
}

console.log("Task 7 ->", averageMarks({ subName: "Tamil", marks: 90 }, { subName: "English", marks: 80 }, { subName: "Maths", marks: 78 }, { subName: "Science", marks: 80 }, { subName: "Social", marks: 84 }))

//Task 8 -> Create an arrow function that accepts a salary amount and returns: HRA = 20%, DA = 10%, Total Salary

const totalSalary = salary => {
    const hra = 20 * salary / 100;
    const da = 10 * salary / 100;
    const totSalary = salary + hra + da;
    return totSalary;
}
console.log("Task 8 -> ", totalSalary(40000));

//Task 9 -> Create an arrow function that accepts a temperature in Celsius and converts it to Fahrenheit.

const celsiusToFahrenheit = temperature => {
    const fahrenheit = (temperature * 9 / 5) + 32;
    return fahrenheit;
}
console.log("Task 8 -> ", celsiusToFahrenheit(40));

// Task 10 -> Create an arrow function that checks whether a given number is even or odd.

const findOddOrEvenNumber = num => num % 2 === 0 ? `The num ${num} is even` : `The num ${num} is odd`
console.log("Task 10 -> ", findOddOrEvenNumber(3));

//Task 11 Create an arrow function that accepts a string and returns the length of the string.

const findLengthOfTheString = str => `The string ${str} which has the length of ${str.length}`;
console.log("Task 11 ->", findLengthOfTheString("Sudalaimani"));

//Task 12 -> Create an arrow function that accepts a name and prints the name multiple times based on a count parameter.

const printNames = (name, times) => {

    for (let i = 0; i < times; i++) {
        console.log(name)
    }

}
printNames("Sudalaimani", 3);

//Task 13 -> Create an arrow function that accepts multiple marks using Rest Parameters and returns the total marks.
const totalMarks = (...marks) => marks.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
console.log("Task 13 -> ", totalMarks(80, 75, 79, 89, 80));

//Task 14 -> Create an arrow function that accepts multiple numbers using Rest Parameters and returns the largest number.
const findLgNum = (...num) => num.reduce((prevValue, currentValue) => currentValue > prevValue ? currentValue : prevValue, -Infinity);
console.log("Task 14 -> ", findLgNum(1, 2, 3, 4, 5))

//Task 15 -> Create an arrow function that accepts multiple numbers using Rest Parameters and returns the smallest number.
const findSmallestNum = (...num) => num.reduce((prevValue, currentValue) => currentValue < prevValue ? currentValue : prevValue, Infinity);
console.log("Task 15 -> ", findSmallestNum(1,2,3,45,))

//Task 16 -> Create an arrow function that accepts multiple product prices using Rest Parameters and returns the total bill amount.

const totalBill = (...allProductPrice) => {
    let billAmount = 0;
    return allProductPrice.map(prducts => {
        prducts.map(price => {
            billAmount += price.price
        })
        console.log(`The total amount for the products is ${billAmount}`);
    })
}

const allProducts = [
    {productName: "IPhone", price: 100000},
    {productName: "Charging Cabel", price: 5000},
    {productName: "Laptop", price: 75000},
    {productName: "TWS", price: 1500},
]

console.log("Task 17 ->")
totalBill(allProducts);