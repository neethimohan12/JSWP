// Build a simple Bank Account
class BankAccount {
#balance;
 constructor(owner, balance = 0) {
 this.owner = owner;
 this.#balance = balance;
 }
 deposit(amount) {
 this.#balance += amount;
 console.log(`New balance: $${this.#balance}`);
 }


withdraw(amount){
this.#balance -= amount;
console.log(`$${amount} withdrawn. New balance: $${this.#balance}`);
}

getBalance() {
    console.log(`Balance for ${this.owner}: $${this.#balance}`);
    return this.#balance;
  }

}

const account = new BankAccount("Neethi", 500);

account.deposit(400);      
account.withdraw(200);     
account.getBalance();      

