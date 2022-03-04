import { kControl, startUpdater } from './starting-func.mjs';

import { difficultUpdater1, difficultUpdater2, difficultUpdater3 } from './difficulty.mjs';
import { nextLevel, restart } from './final-cards.mjs';

let K = '';
export let SELECTION = 0;

// key detection
export function keyCon(event) {
  const start = document.querySelector('#start');
  const dif1 = document.querySelector('#difficulty1');
  const dif2 = document.querySelector('#difficulty2');
  const dif3 = document.querySelector('#difficulty3');

  if (kControl === 'true') {
    const charList = ['enter', 'arrowleft', 'arrowright', 'escape', 'tab'];
    const key = event.key.toLowerCase();

    if (charList.indexOf(key) === -1) return;
    K = key;
    if (key === 'tab') {
      SELECTION = 0;
      start.classList.remove('selected');
      dif1.classList.remove('selected');
      dif2.classList.remove('selected');
      dif3.classList.remove('selected');
    } else {
      select(start, dif1, dif2, dif3);
    }
  }
}

// checks for input and keeps track of current selection
function select(start, dif1, dif2, dif3) {
  const currentSelect = [start, dif1, dif2, dif3];

  if (K === 'arrowright') {
    if (SELECTION < currentSelect.length - 1) {
      SELECTION += 1;
    } else {
      SELECTION = 0;
    }
    style(currentSelect[SELECTION]);
  }

  if (K === 'arrowleft') {
    if (SELECTION <= currentSelect.length - 1) {
      SELECTION--;
    }
    if (SELECTION <= -1) {
      SELECTION = currentSelect.length - 1;
    }
    style(currentSelect[SELECTION]);
  }

  if (K === 'enter') {
    exicute(currentSelect[SELECTION]);
  }
}

// allows you to use the buttons
export function exicute(selection) {
  switch (selection.id) {
    case 'start':
      startUpdater();
      break;
    case 'nL':
      nextLevel();
      break;
    case 'difficulty1':
      difficultUpdater1();
      break;
    case 'difficulty2':
      difficultUpdater2();
      break;
    case 'difficulty3':
      difficultUpdater3();
      break;
    case 'restartP':
      restart();
      break;
    case 'restartW':
      restart();
      break;
    case 'restartL':
      restart();
      break;
  }
}

// toggles the style
export function style(selection) {
  const start = document.querySelector('#start');
  const dif1 = document.querySelector('#difficulty1');
  const dif2 = document.querySelector('#difficulty2');
  const dif3 = document.querySelector('#difficulty3');
  const restartW = document.querySelector('#restartW');
  const nL = document.querySelector('#nL');

  switch (selection.id) {
    case 'start':
      start.classList.add('selected');
      dif1.classList.remove('selected');
      dif2.classList.remove('selected');
      dif3.classList.remove('selected');
      break;
    case 'difficulty1':
      start.classList.remove('selected');
      dif1.classList.add('selected');
      dif2.classList.remove('selected');
      dif3.classList.remove('selected');
      break;
    case 'difficulty2':
      start.classList.remove('selected');
      dif1.classList.remove('selected');
      dif2.classList.add('selected');
      dif3.classList.remove('selected');
      break;
    case 'difficulty3':
      start.classList.remove('selected');
      dif1.classList.remove('selected');
      dif2.classList.remove('selected');
      dif3.classList.add('selected');
      break;
    case 'nL':
      nL.classList.add('selected');
      restartW.classList.remove('selected');
      break;
    case 'restartW':
      nL.classList.remove('selected');
      restartW.classList.add('selected');
      break;
  }
}
