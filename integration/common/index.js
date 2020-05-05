import {withPrefix} from "@cyHelpers/prefix";
import {When} from "cypress-cucumber-preprocessor/steps";
const withCommonPrefix = withPrefix('COMMON');

When(withCommonPrefix('Visit home page'), () => {
    cy.visit('http://localhost:3000');
});