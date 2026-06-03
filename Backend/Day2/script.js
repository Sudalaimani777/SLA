const userData = userInfo => {
    const { name } = userInfo
    return name;
}

console.log(userData({ name: "Sudalaimani" }));

const validUser = age => age > 18 ? "Yes, the user is valid" : "Not a valid user";
console.log(validUser(10));
console.log(validUser(20));

const findEvenNumbers = (...numbers) => numbers.filter(num => num % 2 === 0);
console.log(findEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));

const inviteUser = (name, age, city, state) => `The user name is ${name}, his age was ${age}, he lived in ${city}, ${state}`
console.log(inviteUser("Sudalaimani", 21, "Chennai", "Tamil Nadu"));

const spreadExample = (data) => {
    console.log("OG Data -> ", data)
    const copiedData = {...data};
    copiedData.course = "MERN";
    return copiedData;
    
}

const obj = {
    course : "React",
    duration: "2 Months"
}

console.log(spreadExample(obj))