// imports
import { WORDS, defultDif } from './difficulty.mjs';
import { guessAttacher, keyDetAttacher } from './index.mjs';

export let kControl = 'true';

export function startUpdater() {
  const main = document.querySelector('#mainGame');
  const menu = document.querySelector('#startGame');

  keyDetAttacher();
  guessAttacher();

  kControl = 'false';

  // defult difficulty
  if (WORDS.includes('null')) {
    defultDif();
  }

  // hide and show
  main.classList.toggle('hidden');
  menu.classList.add('hidden');
}
