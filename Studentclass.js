class Studentclass{

constructor(name, grade){
    this.name = name;
    this.grade = grade;


}
ShowGrade(){

console.log(this.name + " " + this.grade);
}

AddMark(mark){
    this.grade = this.grade+mark;
    console.log(this.name+ " current marks " +this.grade)
   

}

Pass(){
     if(this.grade >= 50){
        console.log(this.name +" is passed");
    }
else{
    console.log(this.name +" is failed");
}

}

}

const Shahid = new Studentclass("Shahid", 10);
const Ali = new Studentclass("Ali", 20);

Shahid.ShowGrade();
Shahid.AddMark(60);
Shahid.Pass();

Ali.ShowGrade();
Ali.AddMark(20);
Ali.Pass();
