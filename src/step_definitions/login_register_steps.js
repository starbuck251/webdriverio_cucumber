import { Given, When, Then } from 'cucumber';
const Login_Page = require('../pageObjects/login_register_page.js');
const Create_Account = require('../pageObjects/create_account_page.js');
const test_data = require('../testdata/testdata.js');
const Random_Data = require('../step_definitions/helpers/random_data');

When(/^the user creates an account with a (valid|invalid) email$/, function (type) {
   if (type === 'valid') {
      Login_Page.createAccount('test'+ Random_Data.generateRandomString(3)+'@test.com');
      Login_Page.createAccountButton.click();
      Login_Page.createAccountButton.waitForDisplayed({reverse : true});
   } else {
      //type is invalid
   }
});

Then(/^the user will be able to enter personal details into create account$/, function () {
      expect(Create_Account.createAnAccountText).toBeDisplayed()
});

When(/^the user enters valid credentials$/, function () {
   Login_Page.loginWithCredentials();
});

Then(/^the user will be logged into the site$/, function () {

});