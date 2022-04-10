import { Cell } from '../types/coordinate';
import selectors from '../fixtures/selectors.json';

const { battleshipDomain, gameUrl } = Cypress.env();
const isCustomGame = gameUrl !== '';

// const hits: Cell[] = [];
// const misses: Cell[] = [];

const nextCellToFire: Cell = { coordinateX: 0, coordinateY: 0 };

const updateNextCellToFire = () => {
  if (nextCellToFire.coordinateX < 9) {
    nextCellToFire.coordinateX += 1;
  } else {
    nextCellToFire.coordinateX = 0;
    nextCellToFire.coordinateY += 1;
  }
};

// TODO use this as condition to the final recurse (not working with while)
// const hasGameFinished = (): boolean =>
//   isNotificationVisible(selectors.inGame.notifications.gameOverLose)
//     ? false
//     : true;

before(() => {
  cy.log('Preparing the game...');
  cy.visit('/');
  cy.url().should('contain', battleshipDomain + gameUrl);

  if (!isCustomGame) {
    cy.get(selectors.mainPage.selectRival.friend).click();
    cy.get(selectors.mainPage.selectShipType.rusian).click();
  }

  cy.get(selectors.mainPage.startButton).click();
  cy.waitForRival();
});

it('The game starts...', () => {
  if (!isCustomGame) {
    cy.checkNotification(selectors.inGame.notifications.gameStartedMoveOn);
    cy.fire(nextCellToFire.coordinateX, nextCellToFire.coordinateY);
    updateNextCellToFire();
  }

  for (let i = 0; i < 10; i++) {
    cy.waitForYourTurn();
    cy.fire(nextCellToFire.coordinateX, nextCellToFire.coordinateY);
    updateNextCellToFire();
  }
});
