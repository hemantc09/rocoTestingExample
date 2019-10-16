
export class SignUpPage {
    
    //basic navigate methods
    navigate() {
        cy.visit('/rory/vaginal-dryness', { timeout: 30000 });
    }

    //validate methods
    validateEmailEmptyError() {
        cy.get('.form_field > #temporaryEmail').should('have.css','border-color','rgb(231, 55, 55)');
    }

    validateFirstNameEmptyError() {
        cy.get('#firstName').should('have.css','border-color','rgb(231, 55, 55)');
    }

    validateLastNameEmptyError() {
        cy.get('#lastName').should('have.css','border-color','rgb(231, 55, 55)');
    }

    validatePasswordEmptyError() {
        cy.get('#password').should('have.css','border-color','rgb(231, 55, 55)');
    }

    validateTandCEmptyError() {
        cy.get('[for="agreedToTos"]').find('div').first().should('have.css','border-color','rgb(231, 55, 55)');
    }

    validateSignUpNavigation(navigateSignUpUrl) {
        cy.url().should('eq', navigateSignUpUrl) // => true
    }

    validateMaleOptionErrorMessage(errorMessageMale) {
        cy.get('.flow-question-overlay--in > .flow-question > :nth-child(1) > .flow-question-header > .flow-question-header-title').should('have.text',errorMessageMale);
    }

    //elements actions methods
    enterEmail(email) {
        cy.get('.form_field > #temporaryEmail').type(email);
    }

    enterFirstName(fname) {
        cy.get('#firstName').type(fname);
    }

    enterLastName(lname) {
        cy.get('#lastName').type(lname);
    }

    enterPassword(password) {
        cy.get('#password').type(password);
    }

    clickIAgreeTerms() {
        cy.get('[for="agreedToTos"]').find('div').first().click();
    }

    clickStartMyVisit() {
        cy.contains('button','Start my visit').click();
    }

    clickContinueMyVisit() {
        cy.contains('button','Continue my visit').click();
    }

    clickMaleOption() {
        cy.contains('label','Male').click();
    }

    clickFemaleOption() {
        cy.contains('label','Female').click();
    }

    clickNext() {
        cy.contains('button','Next').click();
    }

    
}