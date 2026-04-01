const form = document.querySelector('form');
const section = document.querySelector('section:nth-child(2)');
const button = document.querySelector('button');

//Counter Variables
const counter = document.querySelector(".count");
const incrementButton = document.querySelector(".incBtn");
const resetButton = document.querySelector(".resetBtn");
const decrementButton = document.querySelector(".decBtn");
let count = 0;



//Form Event Listener
form.addEventListener("submit", e => {
    e.preventDefault();
    
    const userName = e.target.name.value;
    const userEmail = e.target.email.value;

    section.innerHTML = `<h1>Name: ${userName}</h1><h2>Email: ${userEmail}</h2>`;
})

button.addEventListener("click", changeText);

//Change Text Function
function changeText(){
    if(button.textContent === "Off"){
        button.textContent = "On";
        section.style.backgroundColor = "blue";
    }else{
        button.textContent = "Off";
        section.style.backgroundColor = "red";
    }
}


//Counter Event Listeners
    incrementButton.addEventListener("click", increment);
    resetButton.addEventListener("click", reset);
    decrementButton.addEventListener("click", decrement);

    //Counter Functions
    function increment(){
        count++;
        counter.innerHTML = count;
    }

    function reset(){
        count = 0;
        counter.innerHTML = count;
    }

    function decrement(){
        count--;
        counter.innerHTML = count;
    }
