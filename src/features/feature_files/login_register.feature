Feature: Login and Register
    As a user I can register for a new account
    and login to the website

    @WIP
    Scenario: As a user who is not registered I can create an account
        Given the user is on the home page and selects to sign in
        When the user creates an account with a valid email
        Then the user will be able to enter personal details into create account
#
#    Scenario: As a user with valid credentials I can login to the website
#        Given the user is on the home page and selects to sign in
#        When the user enters valid credentials
#        Then the user will be logged into the site
       