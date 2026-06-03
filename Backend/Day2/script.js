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

const inviteUser = (...data) => {
    let sum = 0
    for(let i = 0; i <= data.length; i++){
        sum += i;
    }
    return sum;
}
console.log(inviteUser(1,2,3,4,5));

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