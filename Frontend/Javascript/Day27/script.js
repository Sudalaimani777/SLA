// ============================================
// SYNCHRONOUS VS ASYNCHRONOUS — TASKS
// ============================================

// Task 1: Using setTimeout to change execution order
console.log("\n--- Sync vs Async Task 1 ---");
console.log("1");
setTimeout(() => {
    console.log("2");
}, 0);
console.log("3");
// Output: Start, End, Middle
// Explanation: setTimeout is async, even with 0ms delay it goes to callback queue

// Task 2: Simulate user login process
console.log("\n--- Sync vs Async Task 2 ---");
console.log("Checking user..."); // Sync - runs first

setTimeout(() => {
    console.log("User found"); // Async - runs after 2 seconds
}, 2000);

console.log("Loading dashboard..."); // Sync - runs immediately after setTimeout call
// Output order: "Checking user...", "Loading dashboard...", then after 2s "User found"
// Explanation: Synchronous code (console.logs) runs first, then async code (setTimeout callback) runs after delay

// ============================================
// setTimeout — TASKS
// ============================================

// Task 1: Show "Time's up!" after 5 seconds
console.log("\n--- setTimeout Task 1 ---");
setTimeout(() => {
    console.log("Time's up!");
}, 5000);

// Task 2: Print numbers 1 to 5 with increasing delays
console.log("\n--- setTimeout Task 2 ---");
for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000); // 1 sec, 2 sec, 3 sec, 4 sec, 5 sec
}

// ============================================
// setInterval — TASKS
// ============================================

// Task 1: Digital clock that prints current time every second
console.log("\n--- setInterval Task 1: Digital Clock ---");
const clockInterval = setInterval(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}, 1000);

// Uncomment to stop clock after 10 seconds (for testing)
// setTimeout(() => clearInterval(clockInterval), 10000);

// Task 2: Countdown from 10 to 0 and stop at 0
console.log("\n--- setInterval Task 2: Countdown ---");
let count = 10;
const countdownInterval = setInterval(() => {
    console.log(count);
    if (count === 0) {
        clearInterval(countdownInterval);
        console.log("Countdown finished!");
    }
    count--;
}, 1000);

// ============================================
// CALLBACKS — TASKS
// ============================================

// Task 1: downloadFile function with callback
console.log("\n--- Callbacks Task 1 ---");
function downloadFile(url, callback) {
    console.log(`Downloading from ${url}...`);
    setTimeout(() => {
        console.log("Download complete");
        callback(); // Call the callback function after download
    }, 2000);
}

// Using the downloadFile function
downloadFile("https://example.com/file.pdf", function() {
    console.log("File opened");
});

// Task 2: Calculator function with callbacks
console.log("\n--- Callbacks Task 2 ---");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function calculate(num1, num2, operation) {
    const result = operation(num1, num2);
    console.log(`Result: ${result}`);
    return result;
}

// Using the calculate function
calculate(5, 3, add);      // Output: Result: 8
calculate(5, 3, subtract); // Output: Result: 2