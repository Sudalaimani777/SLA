const section = document.querySelector("section");
const h2 = document.createElement("h2");
const section2 = document.querySelector("#section2");
const countContainer = document.querySelector("#countWrapper");
const display = document.querySelector("#countWrapper h1");
const incBtn = document.querySelector("#countWrapper button:nth-of-type(1)");
const decBtn = document.querySelector("#countWrapper button:nth-of-type(2)");



const btn = document.createElement("button");
btn.textContent = "Click";


//Task 1 - Create an H2 , when the user clicks the btn the text should change
h2.textContent = "Welcome";
h2.className = "text-3xl font-bold text-gray-800 mb-4";
btn.className = "bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg transition-colors duration-200 shadow-md";
section.appendChild(h2);
section.appendChild(btn);

function loadAllEvent() {
    btn.addEventListener('click', handleClick);
    section2.addEventListener('mouseover', handleMouseOver);
    section2.addEventListener('mouseout', handleMouseOut);
    incBtn.addEventListener("click", handleAddCount);
    decBtn.addEventListener("click", handleDecCount);
}
loadAllEvent();

function handleClick() {
    if (h2.textContent === "Welcome") {
        h2.textContent = "Hello Students"
    } else if (h2.textContent === "Hello Students") {
        h2.textContent = "Welcome"
    }

    //Task 2 :-
    section.className = "bg-red-500 rounded-lg shadow-md p-8 mb-6 text-center transition-colors duration-300";
}

//Task 3
function handleMouseOver(){
    section2.className = "bg-green-500 rounded-lg shadow-md p-8 mb-6 text-center transition-colors duration-300";
    
}
function handleMouseOut(){
    section2.className = "bg-orange-500 rounded-lg shadow-md p-8 mb-6 text-center transition-colors duration-300";
}

//Task 4 - Counter
let count = 0;
display.textContent = count;

function handleAddCount(){
    count++;
    display.textContent = count;
}

function handleDecCount(){
    count--;
    display.textContent = count;
}