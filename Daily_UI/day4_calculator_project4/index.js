let displayValue = '';

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function appendCharacter(char) {
  displayValue += char;
  updateDisplay();
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    // Using parseFloat to handle decimal calculations accurately
    const result = eval(displayValue);
    displayValue = String(result.toFixed(2)); // Convert result to string for display
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

// Handle keyboard input
document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (key >= '0' && key <= '9') {
    appendCharacter(key);
  } else if (key === '.') {
    appendCharacter('.');
  } else if (key === '+') {
    appendCharacter('+');
  } else if (key === '-') {
    appendCharacter('-');
  } else if (key === '*') {
    appendCharacter('*');
  } else if (key === '/') {
    appendCharacter('/');
  } else if (key === '%') {
    appendCharacter('%');
  } else if (key === 'Enter' || key === '=') {
    calculate();
  } else if (key === 'Backspace') {
    backspace();
  }
});