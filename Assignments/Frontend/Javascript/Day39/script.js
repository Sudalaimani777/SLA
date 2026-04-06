const section = document.querySelector("section");
const list = document.getElementById("list");
const addMangoBtn = document.getElementById("addMangoBtn");
const card = document.getElementById("card");

// 
const paragraph =document.createElement("p");
paragraph.textContent = "This is a new paragraph.";
// Append the paragraph to the section
section.appendChild(paragraph);

const button = document.createElement("button");
button.textContent = "Hidden Para";

section.appendChild(button);

button.addEventListener("click", togglePara);

addMangoBtn.addEventListener("click", addMangoToList);

card.addEventListener("mouseover", function () {
    card.style.backgroundColor = "green";
});

card.addEventListener("mouseout", function () {
    card.style.backgroundColor = "white";
});

function togglePara(){
    if(paragraph.style.display === "none"){
        paragraph.style.display = "block";
        button.textContent = "Hidden Para";
    }
    else{
        paragraph.style.display = "none";
        button.textContent = "Show Para";
    }
}

function addMangoToList() {
    const newItem = document.createElement("li");
    newItem.textContent = "Mango";
    list.appendChild(newItem);
}