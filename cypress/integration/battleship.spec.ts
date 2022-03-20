import selectors from '../fixtures/selectors.json';
// const { battleshipDomain } = Cypress.env();

before(() => {
  cy.log('Preparing the game...');
  cy.visit('/');
  cy.url().should('be.eq', Cypress.config().baseUrl);
  cy.get(selectors.mainPage.selectRival.friend).click();
  cy.get(selectors.mainPage.selectShipType.rusian).click();
  cy.get(selectors.mainPage.startButton).click();
  cy.waitForRival();
});

it('The game starts...', () => {
  cy.waitForYourTurn();
  cy.fire(0, 0);
  cy.waitForYourTurn();
  cy.fire(0, 1);
  cy.waitForYourTurn();
  cy.fire(0, 2);
});
