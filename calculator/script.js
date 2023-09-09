const calculator = document.querySelector(".calculator");
const display = document.querySelector(".calculator-screen");
const keys = document.querySelector(".calculator-keys");

keys.addEventListener("click", (event) => {
  if (!event.target.closest("button")) return;

  const key = event.target;
  const keyValue = key.textContent;
  const displayValue = display.textContent;
  const type = key.dataset.type;
  const previousKeyType = calculator.dataset.previousKeyType;

  //! IF KEY IS A NUMBER
  if (type === "number" || type === "decimal") {
    if (displayValue === "0" || previousKeyType === "operator" || previousKeyType === "equal") {
      display.textContent = keyValue;
    } else {
      display.textContent = displayValue + keyValue;
    }
  }

  //! IF KEY IS A OPERATOR
  if (type === "operator") {
    const operatorKeys = keys.querySelectorAll('[data-type="operator"]');
    operatorKeys.forEach((el) => {
      el.dataset.state = "";
    });
    key.dataset.state = "selected";

    if (calculator.dataset.firstNumber === undefined) {
      calculator.dataset.firstNumber = displayValue;
    } else {
      calculator.dataset.firstNumber = performCalculation(calculator.dataset.firstNumber, calculator.dataset.operator, displayValue);
      display.textContent = calculator.dataset.firstNumber;
    }
    calculator.dataset.operator = key.dataset.key;
  }

  //! IF KEY IS A EQUAL
  if (type === "equal") {
    //* Perform a calculation
    const firstValue = calculator.dataset.firstNumber;
    const secondValue = displayValue;
    const operator = calculator.dataset.operator;

    display.textContent = performCalculation(firstValue, operator, secondValue);
    delete calculator.dataset.firstNumber;
  }

  //! IF KEY IS A CLEAR
  if (type === "clear") {
    display.textContent = "0";
    delete calculator.dataset.firstNumber;
    delete calculator.dataset.operator;
  }

  calculator.dataset.previousKeyType = type;
});

//! FUNCTION TO PERFORM CALCULATION
function performCalculation(firstNumber, operator, secondNumber) {
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);
  console.log(firstNumber, operator, secondNumber);
  if (operator === "plus") return firstNumber + secondNumber;
  if (operator === "minus") return firstNumber - secondNumber;
  if (operator === "multiply") return firstNumber * secondNumber;
  if (operator === "divide") return firstNumber / secondNumber;
}
