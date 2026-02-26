const age = { name: "Sudalaimani" };

//Dot Notation :-
console.log(age["name"]);

//Bracket Notation :-
console.log(age.name);

//Adding New Key and value :-
age["gender"] = "Male";
console.log(age["gender"]);

//Updating the value in the key
age["name"] = "Surya";
console.log(age);


//Delete key and value in the object :-
// delete age.name;
console.log(age);

for (const i in age) {
    console.log(age[i]);
}


//Methods :-
const user = {
    userName: "Sudalaimani",
    age: 20,
    getUserNameAndAge: function() {
        console.log(this.userName , this.age);
    }
}
user.getUserNameAndAge()


const main = Object.keys(user).map(value => console.log(value));

console.log(Object.values(user));
console.log(Object.entries(user));
