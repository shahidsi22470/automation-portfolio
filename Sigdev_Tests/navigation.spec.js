import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import users from '../testdata/users.json' assert {type: 'json'};
import { NavigationPanel } from "../pages/NavigationPanel.js";

let loginpage;
let navpanel;

test.beforeEach( async({page}) =>{

    loginpage = new LoginPage(page);
    await loginpage.goto();
    await loginpage.login(users.validUser.email, users.validUser.password);

    navpanel = new NavigationPanel(page);

})

test('Verify the side Nav menu items are present', async ({page}) =>{



    await navpanel.verifyNavigationItems();


    await navpanel.openMenuIfClosedSecond();
    await navpanel.verifyNavigationItemsSecond();
    // knkbkjh

})