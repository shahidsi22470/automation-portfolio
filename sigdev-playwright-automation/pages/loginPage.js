class LoginPage{

    constructor(page){
        this.page=page;

       
    }

 async gotoLoginPage(){
            await this.page.goto('https://sigdev-dev.thetie.io/users/sign_in');
        }

        async clickSignInButton(){
            await this.page.getByRole('button', {name: 'Sign In'}).click();
        }

        async fillEmail(email){
             await this.page.getByText('Email address *').fill(email);
        }

        async fillPassword(password){
            await this.page.getByText('Password *').fill(password);
        }

        async clickContinueButton(){
            await this.page.getByRole('button',{name: 'Continue'}).click();
        }
}

export default LoginPage;