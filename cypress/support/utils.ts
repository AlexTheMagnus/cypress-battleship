export const isNotificationVisible = (notification: string) =>
  Cypress.$(notification).css('display') === 'none';
