
export class FemaleFormDetails {
//The Basics page validations methods

validateBirthDateEmptyError() {
    cy.get('#dateOfBirth').should('have.css','border-color','rgb(231, 55, 55)');
    cy.get(':nth-child(2) > .form_field-error').should('have.text','Field required');
}

validateZipCodeEmptyError() {
    cy.get('#zipcode').should('have.css','border-color','rgb(231, 55, 55)');
    cy.get(':nth-child(3) > .form_field-error').should('have.text','Field required');
}

validatePhoneEmptyError() {
    cy.get('#phone').should('have.css','border-color','rgb(231, 55, 55)');
    cy.get(':nth-child(4) > .form_field-error').should('have.text','Field required');
}

validateNavigateUrl(navurl) {
    cy.url().should('eq', navurl) // => true
}

//The Basics page actions methods
enterBirthDate(birthDate) {
    cy.get('#dateOfBirth').type(birthDate);
}

enterZipCode(zipCode) {
    cy.get('#zipcode').type(zipCode);
}

enterPhoneNumber(phoneNumber) {
     cy.get('#phone').type(phoneNumber);
}

clickNext() {
    cy.contains('button','Next').click();
}


}
