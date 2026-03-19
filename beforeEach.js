// beforeEach does not exist in plain JavaScript
// it only exists in Playwright and testing frameworks
// but we can understand the CONCEPT using a simple example

// think of beforeEach like this —
// instead of repeating setup in every function
// you do the setup once before each one

// WITHOUT beforeEach concept — repeated code

let name;

function beforeEach (){

    name = "shahid"; 
    console.log("--- setting up ---" + name );


}
 function test1() {
    console.log("Test 1 — name is: " + name);
}

function test2() {
    console.log("Test 2 — name is: " + name);
}

function test3() {

    console.log("Test 3 — name is: " + name);
}




beforeEach(); test1();
beforeEach(); test2();
beforeEach(); test3();