// helper — copy this exactly, don't worry about how it works yet
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// write your async function called "loginTest"
const loginTest = async () => {

console.log("Opening browser");
await wait(1000);

console.log("Going to login page");
await wait(1000);

console.log("Entering credentials");
await wait(1000);

console.log("Clicking login button");
await wait(1000);

console.log("Login successfull");
await wait(1000);


}
loginTest();