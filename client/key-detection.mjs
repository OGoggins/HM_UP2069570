import { LOSS, WON } from './guess-func.mjs';
import { style, exicute } from './key-control.mjs';


let SELECTION = 0;
let PAUSED = false;
export let k = '';
export function keyDet(event) {
  const charList = 'abcdefghijklmnopqrstuvwxyzescapeenterarrowuparrowdown';
  const banned = ['enter', 'arrowup', 'arrowdown', 'escape'];
  const key = event.key.toLowerCase();

  if (charList.indexOf(key) === -1) return;

  if (banned.indexOf(key) === -1 && PAUSED === false) k = key;
  if (key === 'escape' || PAUSED === true) pause(key);
  if (WON === true) win(key);
  if (LOSS === true) loss(key);
}

function pause(key) {
  const menu = document.querySelector('#pauseM');
  const restartP = document.querySelector('#restartP');

  switch (PAUSED) {
    case true:
      PAUSED = false;
      menu.classList.add('hidden');
      break;
    case false:
      PAUSED = true;
      menu.classList.remove('hidden');
      break;
  }
  if (key === 'enter') exicute(restartP);
}

// win controls
function win(key) {
  const next = document.querySelector('#nL');
  const restartW = document.querySelector('#restartW');


  const currentSelect = [next, restartW];
  if (key === 'arrowup') {
    if (SELECTION < currentSelect.length - 1) {
      SELECTION += 1;
    } else {
      SELECTION = 0;
    }

    style(currentSelect[SELECTION]);
  }

  if (key === 'arrowdown') {
    if (SELECTION <= currentSelect.length - 1) {
      SELECTION--;
    }
    if (SELECTION <= -1) {
      SELECTION = currentSelect.length - 1;
    }
    style(currentSelect[SELECTION]);
  }

  if (key === 'enter') {
    exicute(currentSelect[SELECTION]);
  }
}

// loss controls
function loss(key) {
  const restartL = document.querySelector('#restartL');

  if (key === 'enter') {
    exicute(restartL);
  }
}

export function keyRe() {
  k = '';
}
