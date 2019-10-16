/// <reference types="cypress" />

import { SignUpPage } from "../page-objects/signup-page";

// test case file for sign up
// click on "Start my visit" directly should give error message
describe('Verify Form Validations', () => {

    //created object of SignUpPage - when you sign up as male use this object
    const signUpPage  = new SignUpPage();

    beforeEach(()=> {
        signUpPage.navigate();
        signUpPage.clickStartMyVisit();
        //wait for a while to page load
        cy.wait(2000);
    })

    it('Validate Email field highlighted as error  ', () => {
        //all filelds should be highlighted red color 
        signUpPage.validateEmailEmptyError();
    })

    it('Validate First Name field highlighted as error ', () => {
        signUpPage.validateFirstNameEmptyError();
    })

    it('Validate Last Name field highlighted as error ', () => {
        signUpPage.validateLastNameEmptyError();
    })

    it('Validate Password  field highlighted as error ', () => {
        signUpPage.validatePasswordEmptyError();
    })

    it('Validate Terms and conditions field highlighted as error ', () => {
        signUpPage.validateTandCEmptyError();
    })
});

