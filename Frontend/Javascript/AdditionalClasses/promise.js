// Promise
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous and readable manner, avoiding callback hell and making it easier to handle asynchronous operations.

// A Promise can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled (Resolved): The operation completed successfully, and the promise has a resulting value.
// 3. Rejected: The operation failed, and the promise has a reason for the failure.

const myPromise = new Promise((resolve, reject) => {
    const user = { name: "Sudalaimani" }
    if (true) {
        resolve(user.name)
    } else {
        reject("Error")
    }
})
myPromise.then(res => console.log(res)).catch(err => console.log(err));

//Async/Await
// Async/Await is a syntactic sugar built on top of Promises that allows you to write asynchronous code in a more synchronous and readable manner. It provides a way to handle asynchronous operations using a more straightforward syntax, making it easier to work with Promises.
//It return a promise
//It allows you to use await inside it

//Await is used to wait for a promise to resolve or reject before proceeding with the next line of code. It can only be used inside an async function.I pauses a ececution until the promise is resolved
//Used only inside async function

const myUser = async () => {
    try {
        const resp = await fetch("https://dummyjson.com/products");
        // console.log(resp);
        const result = await resp.json();
        console.log(result.products);
        const finalUsers = await result.products;
        finalUsers.forEach(product => {
            const section = document.querySelector("section");
            section.innerHTML += `<h3>${product.title}</h3>`;
        })
    }
    catch (err) {
        console.log(err)
    }
}
myUser();