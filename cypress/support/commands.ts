// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * @description Method to fire
 * @param {number} coordinateX: Position to fire, coordinate x
 * @param {number} coordinateY: Position to fire, coordinate y
 */
const fire = (coordinateX: number, coordinateY: number) =>
  cy.get(`[data-x=${coordinateX}][data-y=${coordinateY}]`);

export type Fire = typeof fire;
Cypress.Commands.add('fire', fire);
