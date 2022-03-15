it('works', () => {
  cy.visit('/');
  cy.url().should('be.eq', 'http://es.battleship-game.org/');
});
