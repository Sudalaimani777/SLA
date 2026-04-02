const section = document.querySelector("section");

// 
const paragraph =document.createElement("p");
paragraph.textContent = "This is a new paragraph.";
// Append the paragraph to the section
section.appendChild(paragraph);

const button = document.createElement("button");
button.textContent = "Hidden Para";

section.appendChild(button);

button.addEventListener("click", togglePara);

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