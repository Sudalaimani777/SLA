const array = [1,2,3,4,5,6,7].map(value => value * 3);
console.log(array)

let name = [
    {id:1, name:"Giffy"},
    {id:2, name:"Manju"},
    {id:3, name:"Sudalaimani"},
    {id:4, name:"Ragu"},
    {id:5, name:"Bala"},
    {id:6, name:"Ganapathi"},
    {id:7, name:"Guru"},
    {id:8, name:"Rajavel"},
    {id:9, name:"Barathi"},
    {id:10, name:"Kavin"},
]

console.log(name);

name.map(value => {
    const section = document.querySelector("section");
    section.innerHTML += `<h1>${value.name}</h1>`;
});


//Filter method
const filterArray = [1,2,3,4,5,6,7,8,9,10];

let count=[]
for (let i = 0 ; i <= filterArray.length ; i++) {
    if(filterArray[i] >= 5){
        count.push(filterArray[i])
    }
}
console.log(count)

const usingFilter = [1,2,3,4,5,6,7,8,9,10];

const fil = usingFilter.filter(value => value >=5);
console.log(fil);

//Real Time Example :- (Based on subcriptions)
const subcriptions = [
    {id:1, name:"Giffy", sub:true},
    {id:2, name:"Manju", sub:false},
    {id:3, name:"Sudalaimani", sub:true},
    {id:4, name:"Ragu", sub:false},
    {id:5, name:"Bala", sub:true},
    {id:6, name:"Ganapathi", sub:false},
    {id:7, name:"Guru", sub:true},  
]

const sub = subcriptions.filter(value => value.sub === true);
console.log(sub);

//Reduce :-
const reduceArray = [1,2,3,4,5,6,7,8,9,10];

let sum = 0;
for (let i = 0; i < reduceArray.length; i++) {
    sum += reduceArray[i];
}
console.log(sum);

