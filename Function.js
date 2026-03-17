// Browser opened
// Opening page: https://example.com
// Entering username: shahid
// Entering password: mypassword
// Browser closed

const  openBrowser = () =>{

    console.log("Browser opened");

}

const goToPage = (url) =>{

   console.log("Opening page:" + url);

}
const enterDetails = (username, password) => {
console.log("Entering username: " + username);
console.log("Entering password: " + password);
}

const closeBrowser = () => {
    console.log("Browser closed");
}

openBrowser();
goToPage("https://google.com");
enterDetails("shahid", "secret123");
closeBrowser();