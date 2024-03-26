let firstNum = 0;
let secondNum;
let operator;

const numBtn = document.querySelectorAll('.num-btn');
const display = document.querySelector('#display');

for (const n of numBtn){
    n.addEventListener('click', function(n){
        n.stopImmediatePropagation;
        console.log("clicked" + this.id);
        if (operator === undefined && firstNum == 0){
            firstNum = this.id;
            display.textContent = firstNum;
        }
        else if (firstNum != 0){
            firstNum = firstNum.concat(this.id);
            display.textContent = firstNum;
        }
        else if (secondNum === undefined){
            secondNum = this.id;
            display.textContent = firstNum.concat(operator,secondNum);
        }
        else{
            secondNum = toString(secondNum) + toString(this.id);
            display.textContent = firstNum.concat(operator,secondNum);
        }
       
    }, false);
}
