const loginUser = new Promise((resolve, reject) => {
    const data = {name:"Sudalaimani"};
    if(data){
        resolve(data);
    }
    else{
        reject("No data found");
    }
})

// loginUser.then(res => console.log(res.name)).catch(err => console.log(err));


const getData = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Hii")
            if(false) rej("err")
        },2000)
    })
}

// getData().then(res => console.log(res)).catch(err => console.log(err))

// Async Await :-
const fetchUser = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    }catch(err){
        console.log(err);
    }
}
// fetchUser();


const fetchData = () => fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => console.log(data))

// fetchData();

const getPerson = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Sudalai")
    },2000)
})
getPerson.then(res => console.log(res)).catch(err => console.log(err));