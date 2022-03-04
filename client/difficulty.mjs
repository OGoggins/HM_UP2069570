// import
import { easy, medium, hard } from './library.mjs';
import { guessUpdater } from './guess-func.mjs';


// export
export let SELECTEDWORD = '';

// globle
export let WORDS = ['null'];
export let currentDif = '';
const but1 = document.querySelector('#difficulty1');
const but2 = document.querySelector('#difficulty2');
const but3 = document.querySelector('#difficulty3');

// difficulty
export function defultDif() {
  WORDS = easy;
  SELECTEDWORD = WORDS[Math.floor(Math.random() * WORDS.length)];
  guessUpdater();
  currentDif = 'dif1';
}

export function difficultUpdater1(x) {
  if (but1.classList !== 'colorBlue' || x === 1) {
    WORDS = easy;
    SELECTEDWORD = WORDS[Math.floor(Math.random() * WORDS.length)];
    guessUpdater();
    currentDif = 'dif1';

    but1.classList.add('colorBlue');
    but2.classList.remove('colorBlue');
    but3.classList.remove('colorBlue');
  }
}

export function difficultUpdater2(x) {
  if (but2.classList !== 'colorBlue' || x === 1) {
    WORDS = medium;
    SELECTEDWORD = WORDS[Math.floor(Math.random() * WORDS.length)];
    guessUpdater();
    currentDif = 'dif2';

    but2.classList.add('colorBlue');
    but1.classList.remove('colorBlue');
    but3.classList.remove('colorBlue');
  }
}

export function difficultUpdater3(x) {
  if (but3.classList !== 'colorBlue' || x === 1) {
    WORDS = hard;
    SELECTEDWORD = WORDS[Math.floor(Math.random() * WORDS.length)];
    guessUpdater();
    currentDif = 'dif3';

    but3.classList.add('colorBlue');
    but2.classList.remove('colorBlue');
    but1.classList.remove('colorBlue');
  }
}
