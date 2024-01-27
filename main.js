const screenDisplay = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let calculation = [];

function updateDisplay() {
  screenDisplay.textContent = calculation.join('');
}

function calculateResult() {
  try {
    // Use the Function constructor to safely evaluate the expression
    const result = new Function('return ' + calculation.join(''))();
    screenDisplay.textContent = result;
    calculation = [result]; // Store the result for further calculations
  } catch (error) {
    screenDisplay.textContent = "Error";
    calculation = [];
  }
}

function handleButtonClick(event) {
  const value = event.target.textContent;

  switch (value) {
    case 'clear':
      calculation = ['|'];
      updateDisplay();
      break;
    case '=':
      calculateResult();
      break;
    default:
      calculation.push(value);
      updateDisplay();
      break;
  }
}

buttons.forEach(button => button.addEventListener("click", handleButtonClick));
