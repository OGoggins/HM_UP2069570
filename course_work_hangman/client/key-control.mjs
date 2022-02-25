export function keyCon(event) {
    
    const charList = ['enter','arrowleft','arrowright','escape'];
    const key = event.key.toLowerCase();
    
    if (charList.indexOf(key) === -1) return;    
    console.log(key);
}