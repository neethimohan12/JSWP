class BankAccount{
    #balance = 0;

    deposit(){
        if (amount > 0){
            this.#balance += amount;
        }
    }
    getBalance(){
        return this.#balance;
    }
}

const rbc = new BankAccount();
rbc.deposit(20);
console.log(rbc.getBalance());