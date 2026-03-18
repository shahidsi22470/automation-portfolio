import{expect} from '@playwright/test'
export class LoginPage{

constructor(page){
this.page= page;
}

async goto(){

await this.page.goto("https://sigdev-dev.thetie.io/users/sign_in");


}

async login(email, password){

    await this.page.getByRole('button', { name: 'Sign in' }).click();
    await this.page.getByRole('textbox',{name: 'Email address'} ).fill(email);
    await this.page.getByRole('textbox', {name: 'Password'}).fill(password);
    await this.page.getByRole('button', {name: 'Continue'}).click();

}

async verifyLoggedIn(){

    await expect(this.page).toHaveURL(/dashboard/);


}



}


//   await page.getByRole('textbox', { name: 'Email address' }).click();
// });