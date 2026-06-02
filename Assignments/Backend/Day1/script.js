/*
JavaScript Introduction

1) What is JavaScript?
	 - A high-level, dynamic programming language used for web pages and many other apps.

2) Why was JavaScript created?
	 - To add interactivity to web pages and run code in the browser.

3) Is JavaScript interpreted or compiled?
	 - It is just-in-time compiled by modern engines, but behaves like an interpreted language.

4) Features of JavaScript:
	 - Dynamic typing, first-class functions, prototype-based OOP, event-driven, async support.

5) Why is JavaScript called single-threaded?
	 - It runs one call stack at a time; concurrency uses the event loop and task queues.

6) Difference between JavaScript and Java:
	 - Different syntax, runtime, and type systems. JS is dynamic and runs in engines, Java is statically typed and runs on the JVM.

7) What is ECMAScript?
	 - The standard that defines the core JavaScript language.

8) Role of a JavaScript engine:
	 - Parses, compiles (JIT), and executes JS code.

9) What is V8 Engine?
	 - Google's JS engine used in Chrome and Node.js.

10) How does JavaScript execute code?
		- Creates a global execution context, sets up memory (hoisting), then executes line by line.
*/

// Task 1: Variable Declaration & Reassignment
var task1Var = 1;
let task1Let = 2;
const task1Const = 3;

task1Var = 10;
task1Let = 20;
// task1Const = 30; // Not allowed: const cannot be reassigned.

console.log("Task 1:", task1Var, task1Let, task1Const);
/*
Reassignable: var, let
Not reassignable: const
*/

// Task 2: Scope Challenge
const globalVar = "I am global";

const scopeTest = () => {
	var functionScoped = "I am function scoped";

	if (true) {
		let blockScoped = "I am block scoped";
		console.log("Task 2 inside block:", globalVar, functionScoped, blockScoped);
	}

	console.log("Task 2 inside function:", globalVar, functionScoped);
	try {
		// blockScoped is not visible here
		console.log(blockScoped);   
	} catch (err) {
		console.log("Task 2 block scope error:", err.name);
	}
};

scopeTest();
console.log("Task 2 outside function:", globalVar);
try {
	console.log(functionScoped);
} catch (err) {
	console.log("Task 2 function scope error:", err.name);
}

// Task 3: Lexical Scope
const grandParent = () => {
	const grandVar = "Grand";

	const parent = () => {
		const parentVar = "Parent";

		const child = () => {
			console.log("Task 3:", grandVar, parentVar);
		};

		child();
	};

	parent();
};

grandParent();
/*
Child can access parent and grandParent variables because of lexical scope:
functions remember the environment where they were created.
*/

// Task 4: Scope Chain Search
const company = "SLA";

const level1 = () => {
	const level2 = () => {
		const level3 = () => {
			console.log("Task 4:", company);
		};
		level3();
	};

	level2();
};

level1();
/*
JavaScript looks for company in level3, then level2, then level1, then global scope.
*/

// Task 5: Hoisting Prediction
console.log("Task 5:", a); // undefined
var a = 100;
/*
Memory Creation Phase: var a is hoisted and initialized to undefined.
Execution Phase: console.log runs first, then a gets value 100.
*/

// Task 6: TDZ Investigation
try {
	console.log("Task 6:", username);
} catch (err) {
	console.log("Task 6 error:", err.name);
}
let username = "Sudhan";
console.log("Task 6 after init:", username);
/*
TDZ Start: from start of scope to declaration line.
TDZ End: after let is initialized.
ReferenceError happens because username is accessed inside TDZ.
*/

// Task 7: Execution Context
const greet = () => {
	console.log("Hello");
};

greet();
/*
Execution flow:
Global Execution Context
	-> Function Execution Context (greet)
	-> Return to Global
	-> Execution Complete
*/

// Task 8: Type Conversion Challenge
console.log("Task 8:", "10" + 5); // "105"
console.log("Task 8:", "10" - 5); // 5
console.log("Task 8:", true + 1); // 2
console.log("Task 8:", false + 10); // 10
console.log("Task 8:", Number("100")); // 100
console.log("Task 8:", String(500)); // "500"
/*
"+" with a string performs concatenation. "-" converts to number.
true is 1, false is 0 in numeric context.
Number() and String() explicitly convert values.
*/

// Task 9: Primitive vs Non-Primitive
const primString = "Hello"; // primitive
const primNumber = 42; // primitive
const primBoolean = true; // primitive
let primUndefined; // primitive
const primNull = null; // primitive (special)
const primBigInt = 123n; // primitive
const primSymbol = Symbol("id"); // primitive

const objValue = { name: "SLA" }; // non-primitive
const arrValue = [1, 2, 3]; // non-primitive
const fnValue = function () { return "Hi"; }; // non-primitive (Function Expression)

console.log("Task 9 types:", typeof primString, typeof primNumber, typeof primBoolean);
console.log("Task 9 types:", typeof primUndefined, typeof primNull, typeof primBigInt, typeof primSymbol);
console.log("Task 9 types:", typeof objValue, typeof arrValue, typeof fnValue);

/*
Primitives: String, Number, Boolean, Undefined, Null, BigInt, Symbol.
Non-primitives: Object, Array, Function.
Primitives store values directly (stack). Non-primitives store references to heap objects.
*/

// Task 10: Complete Interview Scenario
console.log("Task 10 start");

var t10Var = 1; // var
let t10Let = 2; // let
const t10Const = 3; // const

const t10Outer = () => {
	var functionScopedVar = "FS"; // function scope

	if (true) {
		let blockScopedVar = "BS"; // block scope
		const typeConversion = "7" + 1; // type conversion
		console.log("Task 10 type conversion:", typeConversion, blockScopedVar);
	}

	const t10Inner = () => {
		console.log("Task 10 lexical scope:", t10Var, t10Let, t10Const, functionScopedVar);
	};

	t10Inner(); // function call
};

t10Outer();

console.log("Task 10 hoisting:", t10Hoisted); // undefined
var t10Hoisted = "Hoisted";

try {
	console.log("Task 10 TDZ:", t10TDZ);
} catch (err) {
	console.log("Task 10 TDZ error:", err.name);
}
let t10TDZ = "TDZ";
console.log("Task 10 TDZ after init:", t10TDZ);

/*
Task 10 Explanation
Memory Creation Phase:
	- var declarations are hoisted and initialized to undefined.
	- let/const are hoisted but uninitialized (TDZ).
Execution Phase:
	- Code runs top to bottom, values assigned, functions executed.
Scope Creation:
	- Global scope -> t10Outer scope -> block scope -> t10Inner scope.
Variable Lookup:
	- JS searches current scope, then outer scopes, then global.
Final Output (in order):
	Task 10 start
	Task 10 type conversion: 71 BS
	Task 10 lexical scope: 1 2 3 FS
	Task 10 hoisting: undefined
	Task 10 TDZ error: ReferenceError
	Task 10 TDZ after init: TDZ
*/

// Bonus Interview Task
var bonusA = 10;

const outer = () => {
	let bonusB = 20;
	const inner = () => {
		console.log("Bonus:", bonusA);
		console.log("Bonus:", bonusB);
		console.log("Bonus:", "5" + 2);
	};
	inner();
};

outer();
/*
Bonus output:
	10
	20
	52
*/
