declare namespace Cypress {
  type CheckNotification = import('./commands.actions').CheckNotification;
  type Fire = import('./commands.actions').Fire;
  type WaitForRival = import('./commands.actions').WaitForRival;
  type WaitForYourTurn = import('./commands.actions').WaitForYourTurn;

  interface Chainable {
    checkNotification: CheckNotification;
    fire: Fire;
    waitForRival: WaitForRival;
    waitForYourTurn: WaitForYourTurn;
  }
}
