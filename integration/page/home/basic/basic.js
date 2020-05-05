import {Then} from "cypress-cucumber-preprocessor/steps";
import {HIDDEN_BTN} from "@cyConstants/pages/home";

Then('Should have link to Learn React', () => {
   cy.get('.App-link').should('have.attr', 'href', 'https://reactjs.org')
});

Then('Click disabled button with custom command', () => {
   cy.forceClick(HIDDEN_BTN) // this is a custom command
});