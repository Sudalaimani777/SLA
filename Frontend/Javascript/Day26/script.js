//CallBack Function is a function that is passed as an argument to another function and is executed after some operation has been completed. It allows us to handle asynchronous operations and ensures that certain code is executed only after a specific task is finished.

function parent(name, callbackFn) {
    callbackFn(name);
}

function userGreet(name) {
    console.log(`Welcome ${name}`)
}
parent("Sudalaimani", userGreet);

// setTimeout(() => console.log("Hii"), 3000);

// let interval = setInterval(() => console.log("hiii"), 3000);

// setTimeout(() => clearInterval(interval), 10000);

const API_URL = "https://jsonplaceholder.typicode.com/users";

const getUser = async () => {
    try {
        const response = await fetch(API_URL);
        console.log(response)
        const data = await response.json();
        console.log(data)
        data.forEach(user => {
            const h2 = document.createElement("h2");
            h2.textContent = user.name;
            document.body.appendChild(h2);
        })
    } catch (e) {
        console.log(e)
    }
}
getUser();