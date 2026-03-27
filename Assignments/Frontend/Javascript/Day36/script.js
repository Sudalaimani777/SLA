const section = document.querySelector("section");

const imageURL = "https://www.w3schools.com/w3css/img_lights.jpg";

const image = document.createElement("img");
image.src = imageURL;
image.alt = "Lights";
//Applying this image as the background to the section element
image.style.width = "100%";
image.style.height = "100%";
image.style.objectFit = "cover";
image.style.position = "absolute";
image.style.top = "0";
image.style.left = "0";
image.style.zIndex = "-1";

section.appendChild(image);

section.style.color = "white";
section.style.padding = "20px";

image.setAttribute("class", "background-image");
console.log(image)

console.log(image.getAttribute("class"))


