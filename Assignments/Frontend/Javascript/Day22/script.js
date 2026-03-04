// 1.Write a function that removes duplicates in array without using Set.
// 2.Count how many numbers are even.

function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 5, 6]));


function countEvenNumbers(arr) {
    let count = 0;  
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }   
    }
    return count;
}   
console.log(countEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));

