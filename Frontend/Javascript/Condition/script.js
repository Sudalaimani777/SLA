let a = 20;
let b = 20;
console.log(a != b);


let color = "red";

let result = color === "red" ? "Stop" : color === "yellow" ? "Wait" : color === "green" ? "Lets goo" : "Not to go";
console.log(result);

function changePriceForDifferentAges(age) {
    let price = 0;
    if (age <= 12) {
        price = "5 Dollar"
    } else if (age >= 13 && age <= 17) {
        price = "10 Dollar"
    } else if (age >= 18 && age <= 59) {
        price = "20 Dollar"
    }
    else {
        price = "15 Dollar";
    }
    console.log(price);
}
changePriceForDifferentAges(70)


