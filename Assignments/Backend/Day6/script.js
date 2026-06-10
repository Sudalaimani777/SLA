//Student Data Loading :- Task 1

const getStudents = new Promise((res, rej) => {
    setTimeout(() => {
        res("Sudalaimani")
        rej("No Student Found")
    },2000)
})

getStudents.then(res => console.log(res)).catch(err => console.log(err));

const getEmployee = new Promise((resolve, reject) => {
    const employeeData = [
        {name:"Varun", id:1, salary:30000},
        {name:"Rajesh", id:2, salary:20000},
        {name:"Kumar", id:3, salary:25000},
    ]
    if(employeeData){
        setTimeout(() => {
            resolve(employeeData);
        }, 2000)
    }else{
        reject("No Employee Data Found")
    }
});

getEmployee.then(res => console.log(res.name)).catch(err => console.log(err));


//Task 3 :- Login System
const userLogin = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Login Success")
    }, 2000)
})

userLogin.then(res => console.log(res)).catch(err => console.log(err));

//Task 4 :- Product Loading 
const loadProducts = new Promise((resolve, reject) => {
    const products = [
        {productName:"Charger", price:500},
        {productName:"Watch", price:1000},
        {productName:"HandBag", price:5000}
    ]
    if(products){
        setTimeout(()=>{
            resolve(products);
        },2000)
    }else{
        reject("No Product Found")
    }
})

loadProducts.then(res => console.log(res.productName)).catch(err => console.log(err));

//Task 5 -> Food Order 
const foodOrder = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Food Delivered")
    },2000)
})

foodOrder.then(res => console.log(res))


//Task 6 :- Callback Hell to Promise Chain
const getUser = () => Promise.resolve("User Loaded");
const getOrders = () => Promise.resolve("Orders Loaded");
const getPayments = () => Promise.resolve("Payments Loaded");

getUser()
    .then((user) => {
        console.log(user);
        return getOrders();
    })
    .then((orders) => {
        console.log(orders);
        return getPayments();
    })
    .then((payments) => {
        console.log(payments);
        console.log("Completed");
    })
    .catch((error) => console.log(error));


//Task 7 :- Success & Failure Handling
const payment = () => {
    return new Promise((resolve, reject) => {
        const status = false;

        if (status) {
            resolve("Payment Success");
        } else {
            reject("Payment Failed");
        }
    });
};

payment()
    .then((message) => console.log(message))
    .catch((error) => console.log(error));

