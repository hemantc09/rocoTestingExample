/// <reference types="cypress" />

import { SignUpPage } from "../page-objects/signup-page";

//Test case : as a male user should not get any product recommendations.
describe(' Verify As a male user should not get any product recommendation',() => {
    const email = 'hemanttest@gmail.com';
    const fname = 'Hemant';
    const lname = 'Test';
    const password = 'Test123@';
    const navigateSignUpUrl = 'https://start.ro.co/rory/vaginal-dryness/online-visit/10'
    const errorMessageMale = 'Unfortunately, our prescription treatment for vaginal dryness is only available to women.';

    const signUpPage = new SignUpPage();
    
    it('should sign up and finish as male user', () => {
        signUpPage.navigate();
        signUpPage.enterEmail(email);
        signUpPage.enterFirstName(fname);
        signUpPage.enterLastName(lname);
        signUpPage.enterPassword(password);
        signUpPage.clickIAgreeTerms();
        signUpPage.clickStartMyVisit();
        cy.wait(2000);
        //verify when male user sign up should navigate to https://start.ro.co/rory/vaginal-dryness/online-visit/10
        signUpPage.validateSignUpNavigation(navigateSignUpUrl);
        cy.wait(2000);
        
    }) 

    it('As a make user shoudl get the error message while sign up for products', () => {
        signUpPage.clickContinueMyVisit();
        signUpPage.clickMaleOption();
        cy.wait(2000);
        //verify male user gets the valid error message
        signUpPage.validateMaleOptionErrorMessage(errorMessageMale);
    })

})

