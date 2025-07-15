const { isPrime } = require("./index");

function test(description, value, expected) {
  if (value !== expected) {
    console.error(`❌ ${description}: expected ${expected}, got ${value}`);
    process.exit(1);
  } else {
    console.log(`✅ ${description}`);
  }
}

test("Test 2 is prime", isPrime(2), true);
test("Test 4 is not prime", isPrime(4), false);
test("Test 13 is prime", isPrime(13), true);
test("Test 1 is not prime", isPrime(1), false);