class Car {
 
    constructor( year, brand, model){

this.brand= brand;
this.model=model;
this.year=year;

    }

    describe(){
        console.log(this.year + " " + this.brand + " " + this.model);
    }
    start(){
        console.log(this.brand + " " + this.model +" is starting ");
    }
}
const car1= new Car(2020, "Toyota ", "Corolla");
const car2= new Car(2019, "Honda", "Civic");

car1.describe();
car1.start();
car2.describe();
car2.start();
