// beforeEach does not exist in plain JavaScript
// it only exists in Playwright and testing frameworks
// but we can understand the CONCEPT using a simple example

// think of beforeEach like this —
// instead of repeating setup in every function
// you do the setup once before each one

// WITHOUT beforeEach concept — repeated code
function test1() {
    const name = "Shahid"; // setup repeated
    console.log("Test 1 — name is: " + name);
}

function test2() {
    const name = "Shahid"; // setup repeated again
    console.log("Test 2 — name is: " + name);
}

function test3() {
    const name = "Shahid"; // setup repeated again
    console.log("Test 3 — name is: " + name);
}

test1();
test2();
test3();