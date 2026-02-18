// Switch Statement Example

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("Day " + day + " is: " + dayName);


// Another Example: Grade Evaluation
let score = 85;
let grade;

switch (true) {
    case score >= 90:
        grade = "A";
        break;
    case score >= 80:
        grade = "B";
        break;
    case score >= 70:
        grade = "C";
        break;
    case score >= 60:
        grade = "D";
        break;
    default:
        grade = "F";
}
console.log("Grade: " + grade);

// for (let i = 1; i <= 4; i++) {
//     console.log(i);
// }

// let a = 0;
// for(a; a<=3; a++){
//     console.log(a);

// }

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    }
    else if (i % 2 !== 0) {
        console.log(i + " is odd");
    }
}