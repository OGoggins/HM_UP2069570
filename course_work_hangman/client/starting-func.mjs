//imports
import { WORDS, defultDif } from "./difficulty.mjs";
import { guessAttacher, keyDetAttacher } from "./index.mjs";


export function startUpdater(event) {
    const main = document.querySelector('#mainGame');
    const menu = document.querySelector('#startGame');
    
    keyDetAttacher();
    guessAttacher();
    

    //defult difficulty
    if (WORDS == '') {
        defultDif();
    }

    //hide and show 
    main.classList.toggle('hidden');
    menu.classList.add('hidden');   
    
}