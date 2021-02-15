'use strict';

// Define Variables
const spinResult = document.getElementById('spin-result');
const spinButton = document.getElementById('spin');
const resetButton = document.getElementById('reset');
const leftHandColor = document.getElementById('left-hand-color');
const rightHandColor = document.getElementById('right-hand-color');
const leftFootColor = document.getElementById('left-foot-color');
const rightFootColor = document.getElementById('right-foot-color');

// Game Functions
const spin = function () {
  let appendage = Math.trunc(Math.random() * 4);
  let color = Math.trunc(Math.random() * 4);

  switch (appendage) {
    case 0:
      appendage = 'Left Hand';
      break;
    case 1:
      appendage = 'Right Hand';
      break;
    case 2:
      appendage = 'Left Foot';
      break;
    case 3:
      appendage = 'Right Foot';
      break;
  }

  switch (color) {
    case 0:
      color = 'red';
      break;
    case 1:
      color = 'green';
      break;
    case 2:
      color = 'blue';
      break;
    case 3:
      color = 'yellow';
  }

  switch (appendage) {
    case 'Left Hand':
      leftHandColor.style.background = `${color}`;
      break;
    case 'Right Hand':
      rightHandColor.style.background = `${color}`;
      break;
    case 'Left Foot':
      leftFootColor.style.background = `${color}`;
      break;
    case 'Right Foot':
      rightFootColor.style.background = `${color}`;
      break;
  }

  spinResult.innerText = `${appendage} ${color[0].toUpperCase()}${color.slice(
    1
  )}`;
};

const newGame = function () {
  spinResult.innerText = '';
  leftHandColor.style.background = 'white';
  rightHandColor.style.background = 'white';
  leftFootColor.style.background = 'white';
  rightFootColor.style.background = 'white';
};

newGame();

// Event Listeners
spinButton.addEventListener('click', spin);
resetButton.addEventListener('click', newGame);
