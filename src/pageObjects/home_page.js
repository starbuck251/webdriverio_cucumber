class Home_Page {
    // ---- start of creation of page object model params----
    //Page elements
    //using link text

    get signin_button() { return $('=Sign in'); }

    get homePageComponent(){ return $('div#htmlcontent_top')}

    // functions
    homePageIsVisible(){
        browser.url('/');
    }

}

module.exports = new Home_Page();