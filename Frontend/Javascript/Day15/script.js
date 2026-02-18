// 1. Write a program that checks:If the user is logged in.If logged in, check if they are an admin or a normal user.
let isLoggedIn = true;
let isAdmin = false;

function checkUserStatus(isLoggedIn, isAdmin) {
    if (isLoggedIn) {
        if (isAdmin) {
            console.log("Welcome, Admin!");
        } else {
            console.log("Welcome, User!");
        }
    } else {
        console.log("You are not logged in.");
    }
}
checkUserStatus(isLoggedIn, isAdmin);

// 2. Check the number is odd or even.
const checkNumber = num => {
    const result = num % 2 === 0 ? "Even" : "Odd";
    console.log(`The number ${num} is ${result}.`)
}
checkNumber(10);
checkNumber(7);