let firstNum = 0;
let secondNum;
let operator;
let solved = false;

const numBtn = document.querySelectorAll('.num-btn');
const operatorBtn = document.querySelectorAll('.operator');
const display = document.querySelector('#display');
const calcBtn = document.querySelector('#calculate');
const clearBtn = document.querySelector('#clr-btn');

for (const n of numBtn){
    n.addEventListener('click', function(n){
        n.stopImmediatePropagation;
        console.log("clicked" + this.id);
        
        if (solved && operator == undefined){
            solved = false;
            firstNum = this.id;
            display.textContent = firstNum;
        }
        else{
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
            firstNum = Calculate(operator);
            operator = this.id;
            display.textContent = firstNum.concat(operator);
        }
    }, false);
}


calcBtn.addEventListener('click', function(e){
    e.stopImmediatePropagation
    firstNum = Calculate(operator);
    display.textContent = firstNum;
}, false);

clearBtn.addEventListener('click', Clear, false);

function Calculate(op){
    if (secondNum === undefined){
        return firstNum;
    }
    else{
        switch (op){
            case '+':
                firstNum = parseInt(firstNum) + parseInt(secondNum);
                secondNum = undefined;
                operator = undefined;
                solved = true;
                return firstNum.toString();
            case '-':
                firstNum = parseInt(firstNum) - parseInt(secondNum);
                secondNum = undefined;
                operator = undefined;
                solved = true;
                return firstNum.toString();
            case '*':
                firstNum = parseInt(firstNum) * parseInt(secondNum);
                secondNum = undefined;
                operator = undefined;
                solved = true;
                return firstNum.toString();
            case '/':
                
                firstNum = Math.round((parseInt(firstNum) / parseInt(secondNum))*100)/100;
                secondNum = undefined;
                operator = undefined;
                solved = true;
                return firstNum.toString();
        }
    }
}

function Clear(){
    firstNum = 0;
    secondNum = undefined;
    operator = undefined;
    display.textContent = firstNum;
}