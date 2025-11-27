// Basic Math Operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? "Error" : a / b);

// Operate Function
function operate(a, operator, b) {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);

    switch (operator) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divide(num1, num2);
    }
}

const display = document.getElementById("display");

let firstNum = "";
let secondNum = "";
let operator = "";
let waitingForSecondNum = false;
let resultDisplayed = false;

// Update display text
function updateDisplay() {
    let text = firstNum;

    if (operator) text += " " + operator + " ";
    if (secondNum) text += secondNum;

    display.textContent = text;
}

// Handle number input
function inputNumber(num) {
    if (resultDisplayed) {
        firstNum = "";
        resultDisplayed = false;
    }

    if (!waitingForSecondNum) {
        if (num === "." && firstNum.includes(".")) return;
        firstNum += num;
    } else {
        if (num === "." && secondNum.includes(".")) return;
        secondNum += num;
    }

    updateDisplay();
}

// Handle operator input
function inputOperator(op) {
    if (!firstNum) return;

    // If user already has a full expression, evaluate first
    if (firstNum && operator && secondNum) {
        const result = operate(firstNum, operator, secondNum);
        firstNum = result.toString();
        secondNum = "";
    }

    operator = op;
    waitingForSecondNum = true;
    resultDisplayed = false;
    updateDisplay();
}

// Evaluate
function evaluate() {
    if (!firstNum || !operator || !secondNum) return;

    const result = operate(firstNum, operator, secondNum);
    display.textContent = result;

    firstNum = result.toString();
    secondNum = "";
    operator = "";
    waitingForSecondNum = false;
    resultDisplayed = true;
}

// Clear all values
function clearCalc() {
    firstNum = "";
    secondNum = "";
    operator = "";
    waitingForSecondNum = false;
    resultDisplayed = false;
    display.textContent = "";
}

// Backspace
function backspace() {
    if (resultDisplayed) return; // Don’t backspace displayed results

    if (waitingForSecondNum && secondNum) {
        secondNum = secondNum.slice(0, -1);
    } else if (!waitingForSecondNum && firstNum) {
        firstNum = firstNum.slice(0, -1);
    }

    updateDisplay();
}

/* ---------------------------
      EVENT LISTENERS
----------------------------*/

// Number buttons
document.querySelectorAll(".number").forEach(btn =>
    btn.addEventListener("click", () => inputNumber(btn.textContent))
);

// Operator buttons
document.querySelectorAll(".operator").forEach(btn =>
    btn.addEventListener("click", () => inputOperator(btn.textContent))
);

// Equals button
document.querySelector(".equal").addEventListener("click", evaluate);

// Clear button
document.querySelector(".clear").addEventListener("click", clearCalc);

// Backspace button
document.querySelector(".backspace")?.addEventListener("click", backspace);

/* ---------------------------
    KEYBOARD SUPPORT
----------------------------*/
document.addEventListener("keydown", (e) => {
    if (!isNaN(e.key)) inputNumber(e.key);

    if (["+", "-", "*", "/"].includes(e.key)) inputOperator(e.key);

    if (e.key === "Enter") evaluate();
    if (e.key === "Backspace") backspace();
    if (e.key === "Escape") clearCalc();

    if (e.key === ".") inputNumber(".");
});
