class Person{

constructor(name, age, job) {
this.name=name;
this.age=age;
this.job=job;
}

greet(){
    console.log("Hi I am " + this.name + ", age " +this.age);
}

introduce(){
    console.log("I am a " +this.job);
}
birthday(){
    this.age=this.age+1;
    console.log(this.name + " age is now " +this.age);
}
}
const shahid= new Person("Shahid", 29, "Software QA Analyst");
const ahmad= new Person("Ahmad" , 20, "No work");


shahid.greet();
shahid.birthday();
shahid.introduce();
ahmad.greet();
ahmad.birthday();
ahmad.introduce();