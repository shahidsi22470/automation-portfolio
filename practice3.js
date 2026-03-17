class BankAccount{

constructor(owner, balance){
this.owner= owner;
this.balance= balance;

}
deposit(amount){
    this.balance=this.balance + amount;
    console.log(this.owner + " deposited " + amount);
    
    console.log("new balance is "+ this.balance);

}

withdraw(amount){
         this.balance=this.balance - amount;
        console.log(this.owner + " withdraw " +amount);
       
    console.log(this.owner + " new balance is  " +this.balance);

}

showbalance(){

console.log(this.owner +" balance " +this.balance);
}

}

const Alice= new BankAccount("Alice", 1000);
const Bob= new BankAccount("Bob", 1000);

Alice.deposit(500);
Alice.withdraw(200);
Alice.showbalance();
Bob.deposit(300);
Bob.withdraw(100);
Bob.showbalance();
