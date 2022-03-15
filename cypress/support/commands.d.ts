declare namespace Cypress {
  type Fire = import('./commands').Fire;

  interface Chainable {
    fire: Fire;
  }
}
