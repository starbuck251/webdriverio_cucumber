class Home_Page {
    // ---- start of creation of page object model params----
    //Page elements

    //using link text
    get my_account_button() { return $('*=My Account'); }
    get signin_button() { return $('=Login'); }

    get email_input() { return $("input[name='username']");}
    get password_input() { return $("input[name='password']");}
    get login_button() { return $("//button[.='Login']"); }

    get welcome_text(){return $('h3=Hi, Demo User')}
    

    // functions
    setUsername(username) {
        return this.email_input.setValue(username);
    }

    setPassword(password) {   
        return this.password_input.setValue(password);
    }

    clickLoginButton() {
        return this.login_button.click();
    };
}

module.exports = new Home_Page();