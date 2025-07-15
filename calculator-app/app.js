let display = document.getElementById("display");
let current = "";

function appendNumber(num) {
  if (current === "0" && num !== ".") current = "";
  current += num;
  updateDisplay();
}

function appendOperator(op) {
  if (/[+\-*/%]$/.test(current)) return;
  current += op;
  updateDisplay();
}

function clearDisplay() {
  current = "";
  updateDisplay("0");
}

function backspace() {
  current = current.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    current = eval(current.replace(/%/g, "/100")).toString();
    updateDisplay();
  } catch {
    updateDisplay("Error");
  }
}

function updateDisplay(val = null) {
  display.textContent = val !== null ? val : current || "0";
}

function toggleTheme() {
  const calc = document.querySelector(".calculator");
  calc.classList.toggle("light");
  calc.classList.toggle("dark");
}