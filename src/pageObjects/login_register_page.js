class Login_Page {
    // ---- start of creation of page object model params----
    //Page elements
    //using link text


    get createAccountEmailInput(){return $('#email_create');}
    get createAccountButton(){return $('#SubmitCreate');}

    get email_input() { return $("input[name='username']");}
    get password_input() { return $("input[name='password']");}



    // functions
   createAccount(email){
        this.createAccountEmailInput.waitForDisplayed();
        this.createAccountEmailInput.setValue(email);
   }

    setUsername(username) {
        this.email_input.waitForDisplayed();
        this.email_input.setValue(username);
    }

    setPassword(password) {
        this.password_input.waitForDisplayed();
        this.password_input.setValue(password);
    }

    clickLoginButton() {
        this.login_button.waitForDisplayed();
        this.login_button.click();
    }

    loginWithCredentials(username, password){
        this.setUsername(username);
        this.setPassword(password);
        this.clickLoginButton();
    }
}

module.exports = new Login_Page();