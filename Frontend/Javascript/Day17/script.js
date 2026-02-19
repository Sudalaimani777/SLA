// ===== WHILE LOOP =====
// Syntax:
// while (condition) {
//   // code to execute
// }

// Example 1: Simple counter
console.log("=== While Loop Example 1 ===");
let count = 0;
while (count < 5) {
    console.log("Count: " + count);
    count++;
}

// Example 2: Countdown
console.log("\n=== While Loop Example 2 ===");
let num = 5;
while (num > 0) {
    console.log(num);
    num--;
}

// Example 3: Process until condition is false
console.log("\n=== While Loop Example 3 ===");
let sum = 0;
let i = 1;
while (i <= 5) {
    sum += i;
    i++;
}
console.log("Sum of 1 to 5: " + sum);


// ===== DO-WHILE LOOP =====
// Syntax:
// do {
//   // code to execute
// } while (condition);
// Note: Code executes at least once, then checks condition

// Example 1: Simple counter
console.log("\n=== Do-While Loop Example 1 ===");
let x = 0;
do {
    console.log("X value: " + x);
    x++;
} while (x < 5);

// Example 2: Menu-like system
console.log("\n=== Do-While Loop Example 2 ===");
let choice = 0;
do {
    console.log("Menu option selected: " + choice);
    choice++;
} while (choice < 3);

// Example 3: User input validation (simulated)
console.log("\n=== Do-While Loop Example 3 ===");
let input = 10;
do {
    console.log("Processing input: " + input);
    input--;
} while (input >= 5);

// Key Difference:
// - while: checks condition BEFORE executing code
// - do-while: executes code FIRST, then checks condition
