const button = document.querySelector("button");
const input = document.querySelector("input");
const password = document.querySelector("#password");
const form = document.querySelector("form");

function loadAllEvents() {  
    form.addEventListener('submit', submitHandler);
}
loadAllEvents();

function submitHandler(e){
    e.preventDefault();

    const data = input.value;
    const passwordData = password.value;
    input.value = "";
    password.value = "";
    console.log(data, passwordData);
}
console.log(form);

//REST :-
// const a = [1,2,3,4,5];

const rest = [9,8,7];
console.log(rest);


function sum (...num){
    let sum = 0 ;
    for(let i of num){
        sum += i;
    }
    console.log(sum);
}

sum(1,2,3,4,5);


//Spread :-
const data = [1,2,3,4,5];
const [a,b,...dksjvb] = data;
console.log(a,b);