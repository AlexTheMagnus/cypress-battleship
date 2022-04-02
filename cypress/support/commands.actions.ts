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

import { Coordinate } from '../types/coordinate';
import selectors from '../fixtures/selectors.json';
const translations = require(`../fixtures/translations/${Cypress.env(
  'language',
)}.json`);

/**
 * @description Method to fire
 * @param {number} coordinateX: Position to fire, coordinate x
 * @param {number} coordinateY: Position to fire, coordinate y
 */
const fire = (
  coordinateX: Coordinate,
  coordinateY: Coordinate,
): Cypress.Chainable => {
  const log = Cypress.log({
    displayName: '💥FIRE💥',
    message: [`Coordinates: x=${coordinateX} y=${coordinateY}`],
    autoEnd: false,
  });

  return cy
    .get(selectors.inGame.rivalBattleField)
    .find(`[data-x=${coordinateX}][data-y=${coordinateY}]`)
    .click()
    .then(() => log.end());
};

export type Fire = typeof fire;
Cypress.Commands.add('fire', fire);

/**
 * @description Method to fire
 * @param {number} coordinateX: Position to fire, coordinate x
 * @param {number} coordinateY: Position to fire, coordinate y
 */
const waitForRival = (): void => {
  cy.log('Waiting for rival...');
  cy.log('Open the game link an prepare your ships.');
  cy.get(selectors.mainPage.gameUrlInput)
    .invoke('val')
    .then(value => cy.log(`${value}`));
  cy.contains(translations.inGame.start, { timeout: 100000 }).should(
    'be.visible',
  );
};

export type WaitForRival = typeof waitForRival;
Cypress.Commands.add('waitForRival', waitForRival);

/**
 * @description Method to fire
 * @param {number} coordinateX: Position to fire, coordinate x
 * @param {number} coordinateY: Position to fire, coordinate y
 */
const waitForYourTurn = (): void => {
  cy.log('Waiting for rival...');
  cy.log('Open the game link an prepare your ships.');
  cy.checkNotification(selectors.inGame.notifications.moveOn);
};

export type WaitForYourTurn = typeof waitForYourTurn;
Cypress.Commands.add('waitForYourTurn', waitForYourTurn);

/**
 * @description Method to fire
 * @param {number} coordinateX: Position to fire, coordinate x
 * @param {number} coordinateY: Position to fire, coordinate y
 */
const checkNotification = (notification: string): void => {
  cy.get(selectors.inGame.notificationsContainer)
    .find(notification, {
      timeout: 1000000,
    })
    .should('not.have.css', 'display', 'none');
};

export type CheckNotification = typeof checkNotification;
Cypress.Commands.add('checkNotification', checkNotification);
