function createAccount(initialDeposit) {
    let balance = initialDeposist;

    return {
        deposit: (amount) => {
            balance += amount;
            return balance;
        },
        withdraw: (amount) => {
            if (amount <= balance) {
                balance -= amount;
                return balance;
            }
            return `Insufficent funds,your balance is ${balance}`;
        },
        getBalance: () => balance,
    };
}


const account = createAcount(1000);
console.log(account.deposit(3000));
console.log(account.withdraw(300));
console.log(account.getBalance());