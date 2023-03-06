let displayValue = '';
let memoryValue = '';
let operatorValue = '';

function afterOperate(){
    displayNumber.innerHTML = memoryValue;
    displayValue = '';
}

function add(a, b) {
    let answer = Number(a) + Number(b);
    memoryValue = answer;
    afterOperate();
};

function substract(a, b) {
    let answer = Number(a) - Number(b);
    memoryValue = answer;
    afterOperate();
};

function multiply(a, b) {
    let answer = Number(a) * Number(b);
    memoryValue = answer;
    afterOperate();
};

function divide(a, b) {
    if (Number(b) != 0){
        let answer = Number(a) / Number(b);
        memoryValue = answer;
        afterOperate();
    };
    if (Number(b) == 0){
        displayNumber.innerHTML = "LOL";
    }
};

function operate(a, b, operatorValue) {
    if (operatorValue == '+'){
        add(a, b)
    }
    else if (operatorValue == '-'){
        substract(a, b)
    }
    else if (operatorValue == '*'){
        multiply(a, b)
    }
    else if (operatorValue == '/'){
        divide(a, b)
    }
};

// buttons
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button0 = document.getElementById("0");
const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("multiply");
const substractButton = document.getElementById("substract");
const addButton = document.getElementById("add");
const equalButton = document.getElementById("equal");
const decimalButton = document.getElementById(".");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");

// display
const display = document.getElementById("display");
const displayNumber = document.createElement("p");
displayNumber.style.cssText = 'text-align: right; font-size: 30px';
display.appendChild(displayNumber);
displayNumber.innerHTML = displayValue;

//eventlisteners
button1.addEventListener("click", function(){
    displayValue += "1";
    displayNumber.innerHTML = displayValue
});
button2.addEventListener("click", function(){
    displayValue += "2";
    displayNumber.innerHTML = displayValue
});
button3.addEventListener("click", function(){
    displayValue += "3";
    displayNumber.innerHTML = displayValue
});
button4.addEventListener("click", function(){
    displayValue += "4";
    displayNumber.innerHTML = displayValue
});
button5.addEventListener("click", function(){
    displayValue += "5";
    displayNumber.innerHTML = displayValue
});
button6.addEventListener("click", function(){
    displayValue += "6";
    displayNumber.innerHTML = displayValue
});
button7.addEventListener("click", function(){
    displayValue += "7";
    displayNumber.innerHTML = displayValue
});
button8.addEventListener("click", function(){
    displayValue += "8";
    displayNumber.innerHTML = displayValue
});
button9.addEventListener("click", function(){
    displayValue += "9";
    displayNumber.innerHTML = displayValue
});
button0.addEventListener("click", function(){
    displayValue += "0";
    displayNumber.innerHTML = displayValue
});
clearButton.addEventListener("click", function(){
    displayValue = "";
    operatorValue = "";
    memoryValue = "";
    displayNumber.innerHTML = displayValue
});
deleteButton.addEventListener("click", function(){
    displayValue = displayValue.substring(0, displayValue.length - 1);
    displayNumber.innerHTML = displayValue
});
decimalButton.addEventListener("click", function(){
    if (displayValue == ''){
       displayValue += "0.";
       displayNumber.innerHTML = displayValue 
    }
    else if (!displayValue.includes('.')){
    displayValue += ".";
    displayNumber.innerHTML = displayValue
    }
});

function next(){
    displayValue = '';
    displayNumber.innerHTML = displayValue
}

//operators event listeners
addButton.addEventListener("click", function(){
    if (!operatorValue == ''){
        operate(memoryValue, displayValue, operatorValue);
        operatorValue = '+';
    }
    else if (operatorValue == ''){
        operatorValue = '+';
        memoryValue = displayValue;
        next();
    }
});
substractButton.addEventListener("click", function(){
    if (!operatorValue == ''){
        operate(memoryValue, displayValue, operatorValue);
        operatorValue = '-'
    }
    else if (operatorValue == ''){
        operatorValue = '-';
        memoryValue = displayValue;
        next();
    }
});
multiplyButton.addEventListener("click", function(){
    if (!operatorValue == ''){
        operate(memoryValue, displayValue, operatorValue);
        operatorValue = '*';
    }
    else if (operatorValue == ''){
        operatorValue = '*';
        memoryValue = displayValue;
        next();
    }
});
divideButton.addEventListener("click", function(){
    if (!operatorValue == ''){
        operate(memoryValue, displayValue, operatorValue);
        operatorValue = '/'
    }
    else if (operatorValue == ''){
        operatorValue = '/';
        memoryValue = displayValue;
        next();
    }
});
equalButton.addEventListener("click", function(){
    if (!operatorValue == '' && !memoryValue == '' && !displayValue == ''){
        operate(memoryValue, displayValue, operatorValue);
    operatorValue = '';
    displayValue = memoryValue;
    displayNumber.innerHTML = displayValue
    }

});