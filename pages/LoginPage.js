import{expect} from '@playwright/test'




export class LoginPage{

    

constructor(page){
this.page= page;
}

async goto(){

    await this.page.goto("https://sigdev-dev.thetie.io/users/sign_in");
   await this.page.getByRole('button', { name: 'Sign in' }).click();
       await this.page.waitForURL(/auth0/);


}

async login(email, password) {
  
    await this.page.getByRole('textbox', { name: 'Email address' }).waitFor();
    await this.page.getByRole('textbox', { name: 'Email address' }).fill(email);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Continue' }).click();
    // await this.page.waitForURL(/dashboard/); // ← add this line
}

async verifyLoggedIn(){

    await expect(this.page).toHaveURL(/dashboard/);


}

async verifyInvalidLogin(){
 
    await expect(this.page.getByText('Wrong email or password')).toBeVisible();
}

async verifyEmptyEmailField(){

    await expect(this.page.getByText('Please enter an email address')).toBeVisible();
    // await expect(this.page.getByText('Please enter an email address')).click();

}


async verifyEmptyPasswordField(){

    await expect(this.page.getByText('Password is required')).toBeVisible();
}

async verifyFogotPasswordFunctionality(){

await expect(this.page.getByText('Forgot password?')).toBeVisible();
await this.page.getByRole('link',{name:'Forgot password?'}).click();
await expect(this.page).toHaveURL(/reset-password/);



}

}


//   await page.getByRole('textbox', { name: 'Email address' }).click();
// });