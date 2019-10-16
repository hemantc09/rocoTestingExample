/// <reference types="cypress" />
import { SignUpPage } from "../page-objects/signup-page";
import { FemaleFormDetails } from "../page-objects/FemaleFormDetails-page";

//for female sign up path and validations 
describe('should sign up Female user and female personal details validation', () => {
    const email = 'hemanttest@gmail.com';
    const fname = 'Hemant';
    const lname = 'Test';
    const password = 'Test123@';
    const birthDate = '11/11/1970';
    const zipCode = '90005';
    const phoneNumber = '(669) 243-0277';
    const navUrl1000 ='https://start.ro.co/rory/vaginal-dryness/online-visit/1000';
    const navUrl1005 = 'https://start.ro.co/rory/vaginal-dryness/online-visit/1005';
    const navUrl1010 = 'https://start.ro.co/rory/vaginal-dryness/online-visit/1010';
    const navUrl1015 = 'https://start.ro.co/rory/vaginal-dryness/online-visit/1015';
    const navUrl1020 = 'https://start.ro.co/rory/vaginal-dryness/online-visit/1020';
    const navUrl1060 = 'https://start.ro.co/rory/vaginal-dryness/online-visit/1060';
    const navUrl1070 = 'https://start.ro.co/rory/vaginal-dryness/online-visit/1070';
    const navUrl2000 = 'https://start.ro.co/rory/vaginal-dryness/online-visit/2000';
    const navUrl6070 = 'https://start.ro.co/rory/vaginal-dryness/online-visit/6070';
    const navUrl6540 = 'https://start.ro.co/rory/vaginal-dryness/online-visit/6540';
    
    //when you sign up as female use this object
    const signUpPageFemale  = new SignUpPage();
    const femaleFormDetails = new FemaleFormDetails();

    //validate female user details empty form
    it('Female personal Details forms validation', () => {
        signUpPageFemale.navigate();
        signUpPageFemale.enterEmail(email);
        signUpPageFemale.enterFirstName(fname);
        signUpPageFemale.enterLastName(lname);
        signUpPageFemale.enterPassword(password);
        signUpPageFemale.clickIAgreeTerms();
        signUpPageFemale.clickStartMyVisit();
        cy.wait(2000);
        signUpPageFemale.clickContinueMyVisit();
        signUpPageFemale.clickFemaleOption();
        signUpPageFemale.clickNext();
        cy.wait(2000);
        //Verify user gets BirthDate highlighted with red  and shows error message
        femaleFormDetails.validateBirthDateEmptyError();
        //Verify user gets ZipCode highlighted with red  and shows error message
        femaleFormDetails.validateZipCodeEmptyError();
        //Verify user gets Phone Number highlighted with red  and shows error message
        femaleFormDetails.validatePhoneEmptyError();
    })

    it('Female Compelete details and Product Recommnedation based on MCQs', () => {
        femaleFormDetails.enterBirthDate(birthDate);
        femaleFormDetails.enterZipCode(zipCode);
        femaleFormDetails.enterPhoneNumber(phoneNumber);
        cy.wait(2000);
        signUpPageFemale.clickNext();
        cy.wait(2000);

        //*********multiple choice questions starts from here***********
        cy.contains('button','No thanks').click();
        cy.wait(2000);
        cy.contains('button','Continue').click();
        cy.wait(2000);
        cy.contains('button','No').click();
        //verify when user says no : should redirect to : https://start.ro.co/rory/vaginal-dryness/online-visit/1000
        femaleFormDetails.validateNavigateUrl(navUrl1000);
        cy.wait(2000);
        cy.get('.flow-question-overlay--in > .flow-question > .flow-choice_list > :nth-child(1) > .flow-choice_list-link').click();
        //verify it goes to : https://start.ro.co/rory/vaginal-dryness/online-visit/1005 
        femaleFormDetails.validateNavigateUrl(navUrl1005);
        //verify NeXT button disabled
        //should present [pain sore , itching, burning ] check boxes
        cy.contains('label','Pain or soreness').click();
        //user should be able select mutliple options 
        //verify NeXT button enabled
        //wait unitl button next visiblbe
        cy.wait(2000);
        cy.contains('button','Next').click();
        //verify goes to https://start.ro.co/rory/vaginal-dryness/online-visit/1010 after clicking next
        femaleFormDetails.validateNavigateUrl(navUrl1010);
        ////should present [hot flashes, diffcult with, mood swing , check box]
        //verify NEXT ubtton disableded
        //select check boxes options 
        cy.contains('label','Hot flashes').click();
        cy.wait(2000);
        //verify NeXT button enabled
        //click next
        cy.get('button[type=submit]').contains('Next').click({force:true});
        //verify goes to : https://start.ro.co/rory/vaginal-dryness/online-visit/1015
        femaleFormDetails.validateNavigateUrl(navUrl1015);
        //verify next disabled 
        //select check box [urinary tract, yeast infection, no]
        //select check box
        cy.contains('label','Yeast infections').click();
        //verify next enabled
        //click next     
        cy.get('button[type=submit]').contains('Next').click({force:true});
        //verify goes to : https://start.ro.co/rory/vaginal-dryness/online-visit/1020
        femaleFormDetails.validateNavigateUrl(navUrl1020);
        //select No
        cy.contains('button','No').click();
        //verify goes to : https://start.ro.co/rory/vaginal-dryness/online-visit/1060
        femaleFormDetails.validateNavigateUrl(navUrl1060);
        //verify next disabled     
        //Enter test data
        cy.get('#id_chat_question_when_was_your_last_menstrual_period').type("Test Data entered");
        cy.get('button[type=submit]').contains('Next').click({force:true});
        //verify goes to : https://start.ro.co/rory/vaginal-dryness/online-visit/1070
        femaleFormDetails.validateNavigateUrl(navUrl1070);
        //select  no - radio 
        cy.contains('button','No').click();
        //verify goes to : https://start.ro.co/rory/vaginal-dryness/online-visit/2000
        femaleFormDetails.validateNavigateUrl(navUrl2000);
        cy.get(':nth-child(3) > .flow-choice_list-link').click();
        // select no - goes to : https://start.ro.co/rory/vaginal-dryness/online-visit/6070
        femaleFormDetails.validateNavigateUrl(navUrl6070);
        //select no thank you
        cy.get('.answer-button-wrapper > .button').contains('No, thank you').click();    
        // verify goes to : https://start.ro.co/rory/vaginal-dryness/online-visit/6540
        femaleFormDetails.validateNavigateUrl(navUrl6540);
        cy.url().should('eq','https://start.ro.co/rory/vaginal-dryness/online-visit/6540');
        //**********test case ends here end-to-end */
    }) 
})
