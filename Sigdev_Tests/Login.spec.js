import {test} from '@playwright/test'
import { LoginPage } from '../pages/loginPage.js'
import users from '../testdata/users.json' assert { type: 'json' }

const randomEmail = () => `test${Date.now()}@example.com`;

test('Verify valid user can login to system', async ({page}) => {

    const loginpage = new LoginPage(page);
    await loginpage.goto();

    await loginpage.login(users.validUser.email, users.validUser.password);

    await loginpage.verifyLoggedIn();

    
})


  test('verify the invalid credentials', async ({ page }) => {
    const loginpage = new LoginPage(page);
    await loginpage.goto();
    await loginpage.login(randomEmail(), 'wrongpassword');
    await loginpage.verifyInvalidLogin();
});


test('Verify the error message on empty email/password', async ({page}) => {

const loginpage = new LoginPage(page);
await loginpage.goto();
await loginpage.login("","");
await loginpage.verifyEmptyEmailField();
await loginpage.verifyEmptyPasswordField();


})

// test('verify empty password field', async({page}) => {

// const loginpage = new LoginPage(page);
// await loginpage.goto();
// await loginpage.login("","");



// })

test('Verify Forgot Password Button is present', async ({page}) => {

const loginpage = new LoginPage(page);
await loginpage.goto();
await loginpage.verifyFogotPasswordFunctionality();    

})