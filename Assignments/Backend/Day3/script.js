// Task 1 - Bank Account Using Closure
const createBankAccount = (initialBalance) => {
	let balance = initialBalance;

	return {
		deposit: (amount) => {
			if (amount <= 0) {
				console.log("Deposit amount must be positive.");
				return balance;
			}
			balance += amount;
			console.log(`Deposited: ${amount}`);
			return balance;
		},
		withdraw: (amount) => {
			if (amount <= 0) {
				console.log("Withdraw amount must be positive.");
				return balance;
			}
			if (amount > balance) {
				console.log("Insufficient balance.");
				return balance;
			}
			balance -= amount;
			console.log(`Withdrawn: ${amount}`);
			return balance;
		},
		checkBalance: () => {
			console.log(`Current Balance: ${balance}`);
			return balance;
		},
	};
};

const bankAccount = createBankAccount(5000);
bankAccount.checkBalance();
bankAccount.deposit(1500);
bankAccount.withdraw(2000);
bankAccount.checkBalance();

// Task 2 - Student Attendance Counter
const createAttendanceCounter = () => {
	let count = 0;
	return () => {
		count += 1;
		console.log(`Attendance Count: ${count}`);
		return count;
	};
};

const attendanceCounter = createAttendanceCounter();
attendanceCounter();
attendanceCounter();

// Task 3 - Website Visitor Counter
const createVisitorCounter = () => {
	let count = 0;
	return () => {
		count += 1;
		console.log(`Total Visitors: ${count}`);
		return count;
	};
};

const visitorCounter = createVisitorCounter();
visitorCounter();
visitorCounter();

// Task 4 - Shopping Cart Counter
const createCartCounter = () => {
	let items = 0;
	return {
		addProduct: () => {
			items += 1;
			console.log(`Item added. Total items: ${items}`);
			return items;
		},
		removeProduct: () => {
			if (items === 0) {
				console.log("Cart is empty.");
				return items;
			}
			items -= 1;
			console.log(`Item removed. Total items: ${items}`);
			return items;
		},
		getTotalItems: () => {
			console.log(`Total items in cart: ${items}`);
			return items;
		},
	};
};

const cartCounter = createCartCounter();
cartCounter.addProduct();
cartCounter.addProduct();
cartCounter.removeProduct();
cartCounter.getTotalItems();

// Task 5 - ATM Machine System
const createATM = (initialBalance) => {
	let balance = initialBalance;
	return {
		withdraw: (amount) => {
			if (amount <= 0) {
				console.log("Withdraw amount must be positive.");
				return balance;
			}
			if (amount > balance) {
				console.log("Cannot withdraw more than available balance.");
				return balance;
			}
			balance -= amount;
			console.log(`ATM Withdrawn: ${amount}`);
			return balance;
		},
		checkBalance: () => {
			console.log(`ATM Balance: ${balance}`);
			return balance;
		},
	};
};

const atm = createATM(5000);
atm.checkBalance();
atm.withdraw(1200);
atm.withdraw(6000);
atm.checkBalance();

// Task 6 - Login Attempt Tracker
const createLoginAttemptTracker = () => {
	let attempts = 0;
	return () => {
		attempts += 1;
		console.log(`Login Attempt: ${attempts}`);
		return attempts;
	};
};

const loginAttemptTracker = createLoginAttemptTracker();
loginAttemptTracker();
loginAttemptTracker();

// Task 7 - Callback Injection - Payment Gateway
const processPayment = (cbFn) => {
	console.log("Processing payment...");
	cbFn();
};

const gpay = () => {
	console.log("Payment completed using GPay.");
};

const phonePe = () => {
	console.log("Payment completed using PhonePe.");
};

const paytm = () => {
	console.log("Payment completed using Paytm.");
};

processPayment(gpay);
processPayment(phonePe);
processPayment(paytm);

// Task 8 - Callback Injection - User Actions
const executeAction = (cbFn) => {
	cbFn();
};

const login = () => {
	console.log("User logged in.");
};

const logout = () => {
	console.log("User logged out.");
};

const register = () => {
	console.log("User registered.");
};

executeAction(login);
executeAction(logout);
executeAction(register);

// Task 9 - setTimeout Notification System
console.log("Sending Notification...");
setTimeout(() => {
	console.log("Notification Sent");
}, 3000);

// Task 10 - Closure + Callback + setTimeout (Combined)
const createOrderProcessor = () => {
	let orderCount = 0;

	return (cbFn) => {
		orderCount += 1;
		console.log(`Order Number: ${orderCount}`);
		console.log("Processing...");

		setTimeout(() => {
			console.log("Order Completed");
			if (cbFn) {
				cbFn(orderCount);
			}
		}, 2000);
	};
};

const processOrder = createOrderProcessor();

const mobileOrder = (orderNumber) => {
	console.log(`Mobile Order cbFn for Order #${orderNumber}`);
};

const laptopOrder = (orderNumber) => {
	console.log(`Laptop Order cbFn for Order #${orderNumber}`);
};

const tvOrder = (orderNumber) => {
	console.log(`TV Order cbFn for Order #${orderNumber}`);
};

processOrder(mobileOrder);
processOrder(laptopOrder);
processOrder(tvOrder);
