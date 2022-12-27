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
