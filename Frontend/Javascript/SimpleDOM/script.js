//Getting the Element form the HTML :-
const form = document.querySelector("form");
const input = document.querySelector("#input");
const taskContainer = document.querySelector("section");


function loadAllEvent() {
    form.addEventListener("submit", addTask);
}
loadAllEvent();

function addTask(e) {
    e.preventDefault();
    let userTask = input.value;
    if (userTask === "") {
        alert("Please enter a valid task");
    }
    else {
        const userTaskTitle = document.createElement("h3");
        userTaskTitle.textContent = userTask;
        taskContainer.appendChild(userTaskTitle);
        input.value = "";
    }
}