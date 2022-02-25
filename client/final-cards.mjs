//imports 
import { difficultUpdater1, difficultUpdater2, currentDif, difficultUpdater3 } from "./difficulty.mjs";
import { gallowsRe } from "./gallows.mjs";
import { guessRe } from "./guess-func.mjs";
import { guessAttacher } from "./index.mjs";
import { keyRe } from "./key-detection.mjs";

export function nextLevel() {
    const next = document.querySelector('#winEnd');
    const input = document.querySelector('#guess');
    
    if (currentDif == 'dif1') {
        gallowsRe();
        keyRe();
        guessRe();
        guessAttacher();
        difficultUpdater1(1);


        next.classList.add('hidden');
        input.classList.remove('wrongGuess', 'correctGuess');
        input.classList.add('defultGuess');

    }
    
    if (currentDif == 'dif2') {
        gallowsRe();
        keyRe();
        guessRe();
        guessAttacher();
        difficultUpdater2(1);


        next.classList.add('hidden');
        input.classList.remove('wrongGuess', 'correctGuess');
        input.classList.add('defultGuess');
    }

    if (currentDif == 'dif3') {
        gallowsRe();
        keyRe();
        guessRe();
        guessAttacher();
        difficultUpdater3(1);


        next.classList.add('hidden');
        input.classList.remove('wrongGuess', 'correctGuess');
        input.classList.add('defultGuess');
    }
}

export function restart() {
    location.reload();
}