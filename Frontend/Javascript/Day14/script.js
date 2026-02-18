// Condition Statement :-
const userAge = 20;

// Ternary Operator
const result = userAge >= 18 ? "User is eligible for voting" : "User is not eligible for voting";
console.log(result);

const studentMark = 81;

const studentResult = studentMark < 25 ? "Fail" : studentMark >= 25 && studentMark < 50 ? "Good" : studentMark >= 51 && studentMark <= 80 ? "Wow" : studentMark >= 81 && studentMark <= 90 ? "Good Job Bruhh" : "Suuuuuper"

console.log(studentResult);

const userIdAndAge = 18 && true;

if(userIdAndAge) console.log("Success");