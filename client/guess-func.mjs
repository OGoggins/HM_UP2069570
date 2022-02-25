//imports
import { SELECTEDWORD } from "./difficulty.mjs";
import { drawGallow } from "./gallows.mjs";
import { k } from "./key-detection.mjs";

// Globle VAR
const EL = {};
export let GUESSES = [];
export let PASSES = 0;
let STOP = false;

// Globle VAR That Dont Reset
let score = 0;
let multiplier = 0;

// Allows user to guess
export function guessUpdater() {
    
    if (STOP == false && GUESSES.includes(k) !== true) guess();
    
    function guess() {
        EL.displayWord = document.querySelector('#displayWord');
        const input = document.querySelector('#guess');
        const winEnd = document.querySelector('#winEnd');
        const loseEnd = document.querySelector('#loseEnd');
        let passGuesses = document.querySelector('#pastGuesses');
        let scoreTextW = document.querySelector('#scoreW');
        let scoreTextL = document.querySelector('#scoreL');
        let finalWord = document.querySelector('#finalWord');
        
        let wordStatus = '';
        let selectedWordArr = [];
        let currentState = [];
        
        
        GUESSES += k;
        document.querySelector('#guess').value = k; 
        selectedWordArr = SELECTEDWORD.split('');
        
        for (let i = 0; i < selectedWordArr.length; i++) {
            if (selectedWordArr[i] === ' ') {
                currentState.push(' ');
            }else {
                currentState.push(simulateWord(selectedWordArr[i]));
            }
            
        }
        
        wordStatus = currentState.join('');
        EL.displayWord.textContent = wordStatus;
        
        function simulateWord(letter) {
            return (GUESSES.includes(letter) ? letter : ' _');
        }

        /////////////////////////////////

        let GUESSESLAST = GUESSES[GUESSES.length -1];

        //sees if guess was right
        if (selectedWordArr.includes(GUESSESLAST)) {
            if (input.classList != 'correctGuess') {
                input.classList.remove('defultGuess', 'wrongGuess');
                input.classList.add('correctGuess');
            }
            
            switch(multiplier) {
                case 0:
                    score += 100;
                    break;
                case 1:
                    score += 200;
                    break;
                case 2:
                    score += 300;
                    break;
                case 3:
                    score += 400;
                    break;
                case 4:
                    score += 500;
                    break;
            
            }
        }
        
        //sees if guess was wrong
        if (selectedWordArr.includes(GUESSESLAST) !== true) {
            PASSES ++;
            drawGallow();
            
            if (input.classList != 'wrongGuess' && PASSES >= 2) {
                input.classList.remove('defultGuess', 'correctGuess');
                input.classList.add('wrongGuess');
            }
        }
        
        //winning func
        if (currentState.includes(' _') !== true) {
            winEnd.classList.remove('hidden');
            STOP = true;

            scoreTextW.textContent = (`You got a score of ${score}!`);
            multiplier ++;
        }
        
        //loss func
        if (PASSES == 10) {
            STOP =true;
            loseEnd.classList.remove('hidden');

            scoreTextL.textContent = (`You got a score of ${score}!`);
            finalWord.textContent = (`The word was ${SELECTEDWORD}`)
        }
        //printing past letters
        passGuesses.textContent = GUESSES.toUpperCase();
    }
}

export function guessRe() {
    PASSES = 0;
    STOP = false;
    GUESSES = [];
}