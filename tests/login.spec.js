import {test , expect } from '@playwright/test';

test ('user can visit a page', async ({page}) => {

await page.goto('https://sigdev-dev.thetie.io/sign_in');
await expect(page).toHaveTitle('The Tie Terminal - Sign In');


  await page.waitForTimeout(5000);

});