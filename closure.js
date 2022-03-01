// const bank = owner => {
//     balance = 0
//     return amount => {
//         balance += amount
//         return balance
//     }
// }

const bank = owner => {
    balance = 0
    return {
        deposit: amount => {
            balance += amount
            return balance
        },
        withdraw: amount => {
            balance -= amount
            return balance
        }
    }
}
const mofizBank = bank('mofiz')
console.log(mofizBank.deposit(100))
console.log(mofizBank.deposit(100))
console.log(mofizBank.deposit(400))
console.log(mofizBank.deposit(300))

console.log(mofizBank.withdraw(300))
console.log(mofizBank.withdraw(100))