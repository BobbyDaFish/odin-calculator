let firstNum = 0;
let secondNum;
let operator;

const numBtn = document.querySelectorAll('.num-btn');
const operatorBtn = document.querySelectorAll('.operator');
const display = document.querySelector('#display');

for (const n of numBtn){
    n.addEventListener('click', function(n){
        n.stopImmediatePropagation;
        console.log("clicked" + this.id);
        if (operator === undefined && firstNum == 0){
            firstNum = this.id;
            display.textContent = firstNum;
        }
        else if (firstNum != 0 && operator === undefined){
            firstNum = firstNum.concat(this.id);
            display.textContent = firstNum;
        }
        else if (secondNum === undefined){
            secondNum = this.id;
            display.textContent = firstNum.concat(operator,secondNum);
        }
        else{
            secondNum = secondNum + this.id;
            display.textContent = firstNum.concat(operator,secondNum);
        }
       
    }, false);
}

for (const o of operatorBtn){
    o.addEventListener('click', function(e){
        e.stopImmediatePropagation;
        console.log("clicked" + this.id);
        if (operator === undefined && firstNum == 0){
            display.textContent = firstNum;
        }
        else if (firstNum != 0 && secondNum === undefined){
            operator = this.id;
            display.textContent = firstNum.concat(operator);
        }
        else{
            firstNum = Calculate(firstNum, secondNum, operator);
            operator = this.id;
            display.textContent = firstNum.concat(operator);
        }
    }, false);
}