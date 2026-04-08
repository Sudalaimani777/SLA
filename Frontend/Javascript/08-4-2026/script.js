//Function to print numbers from 1 to n
function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

//Function odd or even
function oddOrEven(num) {
    if (num % 2 === 0) {
        console.log(num + " is even.");
    } else {
        console.log(num + " is odd.");
    }
}   

//Function reverse a string without using built-in reverse method
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

//Function count vowels in a string
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

//Function to find the largest number in an array
function findLargest(arr) {
    if (arr.length === 0) {
        return null;
    }
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }   
    }
    return largest;
}
console.log(findLargest([1,2,3]));