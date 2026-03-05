const btn = document.querySelector("button");

function loadAllEvents(){
    btn.addEventListener("click", clickBtn)
}
loadAllEvents();

function clickBtn(e){
    console.log(e.target.textContent);
    if( e.target.textContent === "Click"){
        e.target.textContent = "Btn Clicked"
    } else {
        e.target.textContent = "Click"
    }
}