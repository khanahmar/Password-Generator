const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

generateBtn.addEventListener("click", (e) => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasSymbol,
    hasNumber,
    length
  );
});

// creating fucntion for generating pass
function generatePassword(lower, upper, symbol, number, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + symbol + number;
  console.log(upper + true);
  console.log(typesCount);
}

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomUpper,
  symbol: getRandomSymbol,
};

// Getting random lower case
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Getting random upper case
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// Getting random number case
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 9) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

getRandomLower();
getRandomUpper();
getRandomNumber();
getRandomSymbol();
console.log(randomFunc);
