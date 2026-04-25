class Person {
    constructor(name, age, num1, num2) {
        this.name = name;
        this.age = age;
        this.num1 = num1;
        this.num2 = num2;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    addNum(){
        return this.num1 + this.num2;
    }
}

const perso1 = new Person("Alice", 30, 5, 10);
console.log(perso1);
console.log(perso1.addNum());