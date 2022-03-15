declare namespace Cypress {
  type Fire = import('./commands.actions').Fire;

  interface Chainable {
    fire: Fire;
  }
}
