const onCyForceClick = (selector) => cy.get(selector).click({ force: true });

Cypress.Commands.add('forceClick', onCyForceClick);