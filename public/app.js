function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  const sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}
function checkPrime() {
  const num = parseInt(document.getElementById("numberInput").value);
  const resultEl = document.getElementById("result");
  if (isNaN(num)) {
    resultEl.textContent = "Please enter a valid number.";
    return;
  }
  const result = isPrime(num);
  resultEl.textContent = result ? `${num} is a prime number.` : `${num} is not a prime number.`;
}