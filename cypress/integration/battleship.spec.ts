const gameUrl = 'id75694470';

it('The game starts...', () => {
  cy.visit(`/${gameUrl}`);
  cy.url().should('be.eq', `http://es.battleship-game.org/${gameUrl}`);
  cy.get('.battlefield-start-button').click();
  cy.contains('Empieza el juego', { timeout: 100000 }).should('be.visible');
  cy.contains('Su turno', { timeout: 10000, matchCase: false }).should(
    'be.visible',
  );
  cy.fire(0, 0);
  cy.contains('Su turno', { timeout: 10000, matchCase: false }).should(
    'be.visible',
  );
  cy.fire(0, 1);
  cy.contains('Su turno', { timeout: 10000, matchCase: false }).should(
    'be.visible',
  );
  cy.fire(0, 2);
});
