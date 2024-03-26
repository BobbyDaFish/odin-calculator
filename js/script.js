let firstNum = 0;
let secondNum = null;
let operator = null;

const numBtn = document.querySelectorAll('.num-btn;');
const display = document.querySelector('#display');

for (n in numBtn){
    n.addEventListener('click', addNum());
}

function addNum(){
    const num = this.textContent;
    if (operator === null){
        firstNum = parseString(firstNum) + parseString(num);
        display.textContent(firstNum)
    }
    else if (secondNum === null){
        secondNum = parseString(num);
        display.textContent(firstNum + operator + secondNum);
    }
    else{
        secondNum = parseString(secondNum) + parseString(num);
        display.textContent(firstNum + operator + secondNum);
    }
}