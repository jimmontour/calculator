// Declared variables
let displayValue = '';
let firstValue = ''
let secondValue = '';
let displayValue2 = '';
let displayScreen = '';
let opperator = '';

// Number Selectors
const btn0 = document.getElementById('button0');
const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');
const btn4 = document.getElementById('button4');
const btn5 = document.getElementById('button5');
const btn6 = document.getElementById('button6');
const btn7 = document.getElementById('button7');
const btn8 = document.getElementById('button8');
const btn9 = document.getElementById('button9');
const btnPoint = document.getElementById('button-point');

// Function Selectors
const btnAdd = document.getElementById('button-add');
const btnSubtract = document.getElementById('button-subtract');
const btnMultiply = document.getElementById('button-multiply');
const btnDivide = document.getElementById('button-divide');
const btnPercent = document.getElementById('button-percent');
const btnReset = document.getElementById('button-reset');
const btnEquals = document.getElementById('button-equals');

// Display Selector
let display = document.getElementById('display-content');

// Number event listeners
btn0.addEventListener('click', (e) => {
    displayValue += '0';
    console.log(displayValue);
    document.getElementById('display-content').innerHTML = displayValue;
})

btn1.addEventListener('click', (e) => {
    displayValue += '1';
    console.log(displayValue);
    document.getElementById('display-content').innerHTML = displayValue;
})

btn2.addEventListener('click', (e) => {
    displayValue += '2';
    console.log(displayValue);
    document.getElementById('display-content').innerHTML = displayValue;
})

btn3.addEventListener('click', (e) => {
    displayValue += '3';
    console.log(displayValue);
    document.getElementById('display-content').innerHTML = displayValue;
})

btn4.addEventListener('click', (e) => {
    displayValue += '4';
    console.log(displayValue);
    document.getElementById('display-content').innerHTML = displayValue;
})

btn5.addEventListener('click', (e) => {
    displayValue += '5';
    console.log(displayValue);
    document.getElementById('display-content').innerHTML = displayValue;
})

btn6.addEventListener('click', (e) => {
    displayValue += '6';
    console.log(displayValue);
    document.getElementById('display-content').innerHTML = displayValue;
})

btn7.addEventListener('click', (e) => {
    displayValue += '7';
    console.log(displayValue);
    document.getElementById('display-content').innerHTML = displayValue;
})

btn8.addEventListener('click', (e) => {
    displayValue += '8';
    console.log(displayValue);
    document.getElementById('display-content').innerHTML = displayValue;
})

btn9.addEventListener('click', (e) => {
    displayValue += '9';
    console.log(displayValue);
    document.getElementById('display-content').innerHTML = displayValue;
})

btnPoint.addEventListener('click', (e) => {
    displayValue += '.';
    console.log(displayValue);
    document.getElementById('display-content').innerHTML = displayValue;
})

// Opperator event listeners
// Addition opperator
btnAdd.addEventListener('click', (e) => {
    firstValue = parseFloat(displayValue);
    displayValue = '';
    opperator = '+';
});

btnSubtract.addEventListener('click', (e) => {
    firstValue = parseFloat(displayValue);
    displayValue = '';
    opperator = '-';
});

btnMultiply.addEventListener('click', (e) => {
    firstValue = parseFloat(displayValue);
    displayValue = '';
    opperator = '*';
});

btnDivide.addEventListener('click', (e) => {
    firstValue = parseFloat(displayValue);
    displayValue = '';
    opperator = '/';
});

btnPercent.addEventListener('click', (e) => {
    firstValue = parseFloat(displayValue);
    displayValue = '';
    opperator = '%';
});

// Equals opperator
btnEquals.addEventListener('click', (e) => {
    secondValue= parseFloat(displayValue);
    displayValue = opperate(firstValue, secondValue, opperator);
    document.getElementById('display-content').innerHTML = displayValue;  
})

// Reset
btnReset.addEventListener('click', (e) => {
    display.innerHTML = '0';
    displayValue = '';
    firstValue = ''
    secondValue = '';
    displayValue2 = '';
    displayScreen = '';
    opperator = '';
});

// Functions of the calculator

// Add function
function add(a, b){
    return a + b;
}

// Subtract function
function subtract(a, b){
    return a - b;
}

// Multiply function
function multiply(a, b){
    return a * b;
}

// Divide function
function divide(a, b){
    return a / b;
}

// Percent function
function percent(a, b){
    b /= 100;
    return a * b;
}

// Opperator function
function opperate(a, b, opperator) {
    if (opperator === '+') {
        return add(a, b);
    } else if (opperator === '-') {
        return subtract(a, b);
    } else if (opperator === '/') {
        return divide(a, b);
    } else if (opperator === '*') {
        return multiply(a, b);
    } else if (opperator === '%') {
        return percent(a, b);
    }
    // add more functions here like percentage
};

// Running the program

// Generating an initial display
initialDisplay = document.createTextNode('0');
display.appendChild(initialDisplay)


// // Tests
