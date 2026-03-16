class BankAccount{

constructor(owner, balance){
this.owner= owner;
this.balance= balance;

}
deposit(amount){
    
    console.log(this.owner + " deposited ", + this.balance);
    this.balance=this.balance + amount;
    console.log("new balance is ", + this.balance);

}

withdraw(amount){
        this.balance=this.balance - amount;
        console.log(this.owner+ " withdraw " +this.balance);

}

showbalance(){

console.log("show balance");
}

}

const Alice= new BankAccount("Alice", 500);
const Bob= new BankAccount("Bob", 300);

Alice.deposit(1000);
Alice.withdraw(200);
