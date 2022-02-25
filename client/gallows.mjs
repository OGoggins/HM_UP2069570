import { PASSES } from "./guess-func.mjs";



const cWidth = document.body.clientWidth;
const cHeight = document.body.clientHeight;
const canvas = document.querySelector('#canvas1')

canvas.width = cWidth;
canvas.height = cHeight*2.5;

export function drawGallow() {
    
    const c = canvas.getContext("2d");
    const x = canvas.width /2;
    const y = 300;
    const r = canvas.width /20;
    
    
    
    c.lineWidth = 5;
    c.lineCap = 'round';

    function bottomLine() {
        //bottom line
        c.beginPath();
        c.moveTo(x*1.3, y);
        c.lineTo(x*1.7, y);
        c.stroke();
    }

    function sideLine() {
        // side line 
        c.beginPath();
        c.moveTo(x*1.7, y);
        c.lineTo(x*1.7, y/6);
        c.stroke();
    }

    function topLine() {
        // top line
        c.beginPath();
        c.moveTo(x*1.7, y/6);
        c.lineTo(x, y/6);
        c.stroke();
    }

    function head() {
        //rope
        c.beginPath();
        c.moveTo(x, y/6);
        c.lineTo(x, y/4.4);
        c.stroke();
        //head
        c.beginPath();
        c.arc(x,y/3,r, 0, 360);
        c.stroke();
    }
    
    function body() {
        //body
        c.beginPath();
        c.moveTo(x, y/2.2);
        c.lineTo(x, y/1.3);
        c.stroke();
    }

    function leftArm() {
        //left arm
        c.beginPath();
        c.moveTo(x, y/2.0);
        c.lineTo(x/1.1, y/1.3);
        c.stroke();
    }
    
    function rightArm() {
        //right arm
        c.beginPath();
        c.moveTo(x, y/2.0);
        c.lineTo(x*1.1, y/1.3);
        c.stroke();
    }

    function leftLeg() {
        //left leg
        c.beginPath();
        c.moveTo(x, y/1.3)
        c.lineTo(x/1.1, y);
        c.stroke();
    }
    
    function rightLeg() {
        //right leg
        c.beginPath();
        c.moveTo(x, y/1.3)
        c.lineTo(x*1.1, y);
        c.stroke();
    }


    switch(PASSES) {
        case 2:
            bottomLine();
            break;
        case 3:
            sideLine();
            break;
        case 4: 
            topLine();
            break;
        case 5:
            head();
            break;
        case 6:
            body();
            break;
        case 7:
            leftArm();
            break;
        case 8:
            rightArm();
            break;
        case 9:
            leftLeg();
            break;
        case 10:
            rightLeg();
            break;
    }

}

export function gallowsRe() {
    canvas.width = cWidth;
    canvas.height = cHeight*2.5;
}