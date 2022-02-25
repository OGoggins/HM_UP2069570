export let k = '';
export function keyDet(event) {
   
    const charList = 'abcdefghijklmnopqrstuvwxyz';
    const key = event.key.toLowerCase();
    
    if (charList.indexOf(key) === -1) return;        
    k = key;
}

export function keyRe() {
    k ='';
}