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
console.log("Task 3 -> ", findLargestNumber(1,2,3));

//Task 5 - Create an arrow function that accepts a username. If no username is provided, return "Guest" using a default parameter.

const user = (person="Guest") => `Welcome ${person}`;
console.log("Task 5 ->", user());
console.log(user("Sudalaimani"));

// Task 6 -> Create an arrow function that accepts two numbers and returns Sum, Difference, Multiplication Division

const calculation = (a, b) => `The num ${a},${b}, the sum of two numbers is ${a+b}, for Subtraction ${a - b}, for multiplication ${a*b}, for division ${a/b}`;

console.log("Task 6 ->", calculation(2,3));

// Task 7 -> Create an arrow function that accepts marks of 5 subjects and returns the total and average.

const averageMarks = (...subjects) => {
    const avgMark = subjects.reduce((sum, subject) => sum + subject.marks, 0);
    return Math.round(avgMark/subjects.length);
} 

console.log("Task 7 ->", averageMarks({subName: "Tamil", marks: 90}, {subName: "English", marks: 80}, {subName: "Maths", marks: 78}, {subName: "Science", marks: 80}, {subName: "Social", marks: 84}))

// 