import {test, expect} from '@playwright/test'

test('user can login successfully ' , async ({page}) => {
await page.goto ('https://sigdev-dev.thetie.io/sign_in');

await page.getByRole ('button' , {name: 'Sign In'}).click();

await page.getByText('Email address *').fill('shahid33350@gmail.com');
await page.getByText('Password *').fill('Test@123');

await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page).not.toHaveURL('https://sigdev-dev.thetie.io/');
});