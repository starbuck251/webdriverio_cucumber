import { Given, When, Then } from 'cucumber';
const Home_Page = require('../pageObjects/home_page.js');

Given(/^the user is on the home page and selects to sign in$/, function () {
    Home_Page.homePageIsVisible();
    Home_Page.signin_button.click();
    expect(browser.getUrl()).toBe('http://automationpractice.com/index.php?controller=authentication&back=my-account');
});
