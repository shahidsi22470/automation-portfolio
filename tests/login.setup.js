import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import users from '../testdata/users.json' assert { type: 'json' };

setup('save login state', async ({ page }) => {
    await page.addInitScript(() => {
        Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
    });
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.validUser.email, users.validUser.password);
    await loginPage.verifyLoggedIn();
    await page.context().storageState({ path: 'auth.json' });
});
