const addValue = () => {
    let count = 0;
    return inner = () => {

        count++
        console.log(count)
    }

}
const counter = addValue()

counter();
counter();

const bankBalance = (initialAmount) => {
    let totalAmount = initialAmount;

    return withdrawAmount = (amount) => {
        if(amount > totalAmount) {
            alert("You can't withdraw the more amount")
        }
        totalAmount -=amount;
        console.log(`You withdraw the amount of ${amount} from ${initialAmount}, now your balance is ${totalAmount}`);

        return savings = (savingAmount) => {
            totalAmount += savingAmount
            console.log(`The saved amount ${savingAmount} is added to the bank balance, the total amount is ${totalAmount}`)
        }
    }
    
}

const check = bankBalance(20000)(300)(300);

// Callback Injection :-
const balance = (transaction) => {
    transaction();
}

const withdraw = (amount) => {
    console.log(`The amount is ${amount}`)
}

balance(() => withdraw(500));

const savingsAmount = (amount) => {
    console.log(`You saved ${amount}`)
}

balance(() => savingsAmount(300));

// setTimeout(() => {
//     console.log("Hii")
//     setTimeout(() => {
//         console.log("Byee")
//     },2000)
// },1000);

