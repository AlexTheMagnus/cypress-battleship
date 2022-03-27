declare namespace Cypress {
  type Fire = import('./commands.actions').Fire;
  type WaitForRival = import('./commands.actions').WaitForRival;
  type WaitForYourTurn = import('./commands.actions').WaitForYourTurn;

  interface Chainable {
    fire: Fire;
    waitForRival: WaitForRival;
    waitForYourTurn: WaitForYourTurn;
  }
}
