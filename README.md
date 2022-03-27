# Cypress-battleship 🛥️💥

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Uninstall](#uninstall)

## Installation

Clone this repo and run `yarn` inside the project folder to install the dependencies.

## Usage

### Default game config

1. Run `yarn cypress-battleship` to launch the project.
2. Then select the difficulty level on the Cypress interface.
3. The Cypress script will create a game and it will wait you to be ready.
4. Go to the game link displayed on the Cypress interface.
5. Choose your boats position and click on the "Play" button.
6. Enjoy your game.

### Custom game config

1. Go to [http://es.battleship-game.org](http://es.battleship-game.org).
2. Set the game settings as you prefer.
3. Choose your boats position and click on the "Play" button.
4. Run `yarn cypress-battleship --env gameUrl=<YOUR_GAME_URL>` replacing `<YOUR_GAME_URL>` by your game URL.
5. Enjoy your game.

## Uninstall

All dependencies are installed locally. So, in order to uninstall the project just delete the folder.
