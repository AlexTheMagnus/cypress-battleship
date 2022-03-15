it('The game starts...', () => {
  cy.visit('/');
  cy.url().should('be.eq', 'http://es.battleship-game.org/');
  cy.fire(1, 1);
});
