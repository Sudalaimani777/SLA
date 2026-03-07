//Length :-
const userName = "surya"
console.log(userName.length);
console.log(userName.charAt());

const lastName = "kumar";
const fullName = userName.concat(" ",lastName);
console.log(fullName);

console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())

const data = ";dslkfsaspokfwsfm";
console.log(data);

const result = data.split("");
console.log(result);

const splitPlusRev = result.reverse();
console.log(splitPlusRev);

const joinedWord = splitPlusRev.join("");
console.log(joinedWord)

const userData = "Sudalai   mani";
console.log(userData.replace(/ /g, ""));


const subPlus = userData.substring(0,7).toUpperCase();
console.log(subPlus);


const mail = "sudalai.mani@example.com";
const mailSplit = mail.split("@");
console.log(mailSplit);
