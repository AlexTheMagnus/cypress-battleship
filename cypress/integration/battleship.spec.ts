it('works', () => {
  cy.wrap(1).should('be.eq', 1);
});
