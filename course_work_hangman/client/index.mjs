window.addEventListener('load', init);


//imports
import { guessUpdater } from "./guess-func.mjs";
import { startUpdater } from "./starting-func.mjs";
import { drawGallow } from "./gallows.mjs";
import { difficultUpdater1, difficultUpdater2, difficultUpdater3 } from "./difficulty.mjs";
import { keyDet } from "./key-detection.mjs";
import { keyCon as keyCon } from "./key-control.mjs";
import { nextLevel, restart } from "./final-cards.mjs";


// Initialising Process
function init() {
    const canvas = document.querySelector('#canvas1');

    startAttacher();
    difficultyAttacher1();
    difficultyAttacher2();
    difficultyAttacher3();
    keyConAttacher();
    finalCardAttacher();
    drawGallow(canvas);
}


// Start Process
function startAttacher() {
    const start = document.querySelector('#start');
    start.addEventListener('click', startUpdater)
}


// Guessing Process
export function guessAttacher() {
    document.addEventListener('keydown', guessUpdater);
}

//difficulty
function difficultyAttacher1() {
    const dif1 = document.querySelector('#difficulty1');
    dif1.addEventListener('click', difficultUpdater1);
    
}

function difficultyAttacher2() {
    const dif2 = document.querySelector('#difficulty2');
    dif2.addEventListener('click', difficultUpdater2);
}

function difficultyAttacher3() {
    const dif3 = document.querySelector('#difficulty3');
    dif3.addEventListener('click', difficultUpdater3);
}

export function keyDetAttacher() {
    document.addEventListener('keydown',keyDet );
}

function keyConAttacher() {
    document.addEventListener('keydown',keyCon)
}

function finalCardAttacher() {
    const next = document.querySelector('#nL');
    const restartW = document.querySelector('#restartW');
    const restartL = document.querySelector('#restartL');

    next.addEventListener('click', nextLevel);
    restartW.addEventListener('click', restart);
    restartL.addEventListener('click', restart);

}