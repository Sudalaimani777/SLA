const h1 = document.querySelectorAll(".hai");
console.log(h1);

h1.forEach(element => element.innerText = "Super")

const ul  =document.querySelector("ul");

ul.childNodes.forEach((element, index) => element.innerText = "Super");


const div = document.getElementsByClassName("hai");
div.innerHTML = "<h1>Super</h1>";