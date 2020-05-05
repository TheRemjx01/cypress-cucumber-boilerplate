import {Then} from "cypress-cucumber-preprocessor/steps";

Then('Should have link to Learn React', () => {
   cy.get('.App-link').should('have.attr', 'href', 'https://reactjs.org')
});