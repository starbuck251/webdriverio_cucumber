class Create_Account_Page {
    // ---- start of creation of page object model params----
    //Page elements
    get createAnAccountText() { return $('h1=Create an account'); }


    // functions
    pageIsVisible() {
        this.createAnAccountText.waitForDisplayed();
    }


}

module.exports = new Create_Account_Page();