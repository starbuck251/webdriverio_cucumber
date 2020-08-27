Feature: Login
    As a user I can login to the website

    @Regression
    Scenario: As a user with valid credentials I can login to the website
        Given the user is on the home page and selects to login
        When the user enters valid credentials
        Then the user will be logged into the site
       