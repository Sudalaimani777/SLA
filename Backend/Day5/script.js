//Task 1 :-
const userData = {
    userName: "Sudalaimani",
    studiedCourse: "B.E - ECE",
    userNative: "Tuticorin",
    collegeName: "PSN College of Engineering and Technology"
}

const { userName, studiedCourse, userNative, collegeName } = userData

console.log(`The user name is ${userName} and he studied ${studiedCourse}. The user came from ${userNative}. He studied in ${collegeName}`);

// Task 2 :-
const employeeSalaryDetails = salary => {
    const monthlySalary = salary;
    const yearlySalary = salary * 12;
    return `The emploee monthly salary is ${monthlySalary} for yearly, his salary was ${yearlySalary}`
}
console.log(employeeSalaryDetails(20000));

// Task 3 :-
const discountedProduct = (product, dicountPercentage, productPrice) => `The disconuted price for the product ${product} with the cost price of ${productPrice}, the dicount price is ${dicountPercentage / 100 * productPrice}`;
console.log(discountedProduct("Laptop", 20, 10000));

//Task 4 :-
const userRegistration = (user = "BOT") => `Welcome ${user}`;
console.log(userRegistration("Sudalaimani"));

// Task 5 :-
const shopping = (...productPrices) => productPrices.reduce((a, b) => a + b, 0);
console.log(shopping(100, 200, 300, 400, 500));


//Task 6 :-
const technologies = (fEnd, bEnd) => [...fEnd, ...bEnd];
console.log(technologies(["HTML", "CSS", "JS", "REACT", "TS"], ["NODE", "EXPRESS", "MONGOOSE", "MONGODB"]));

//Task 7 :-
const emp1 = { name: "Kumar", age: 22 };
const emp2 = { ...emp1 };
emp2.name = "Sudalaimani"
console.log(emp1);
console.log(emp2);

//Task 8 :-
const studentsDetails = {
    name: "Sudalaimani",
    age: "18",
    studyingClass: "X",
    medium: "English",
    subjects: ["Tamil", "English", "Maths", "Science", "Social"]
}

const { name, age, studyingClass, medium, subjects  } = studentsDetails;

console.log(name, age,studyingClass, medium, subjects);

const [sub1] = subjects;
console.log(sub1);

//Task 9 :-
const cricketStadium = "MA Chidhambaram";
const teamCaptian = "MS Dhoni";
const viceCaptian = "Raina";

const matchWinners = {
    cricketStadium,
    teamCaptian,
    viceCaptian
}
console.log(matchWinners.cricketStadium);

// Task 10 :-
const userProfileData = {
    userName: "Sudalaimani",
    email: "sudalaimani5112007@gmail.com",
    followers:"20",
    following:"10",
    theme:"DARK"
}

console.log(userProfileData?.userName ?? "No User Found")