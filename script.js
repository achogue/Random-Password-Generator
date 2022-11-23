// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var lowerChar = document.getElementById("lowerChar");
  var upperChar = document.getElementById("upperChar");
  var specialChar = document.getElementById("specialChar");
  var numberChar = document.getElementById("numberChar");

  var pwdLength = document.getElementById("pwdLength").value;
  if (isNaN(pwdLength)) {
    alert("Password length has to be a number.")
    return;
  }

  if (!(Number(pwdLength) > 7 && Number(pwdLength) < 129)) {
    alert("Password length has to be 8-128.")
    return;
  }

  var password = generatePassword(pwdLength,
    lowerChar.checked, upperChar.checked, specialChar.checked, numberChar.checked);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var criteria = document.querySelector("#criteria");
  criteria.removeAttribute("style");
}

function generatePassword(pwdLen, islowerChar, isupperChar, isspecialChar, isnumberChar) {
  var myUppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var myLowers = 'abcdefghijklmnopqrstuvwxyz';
  var myNumbers = '0123456789';
  var mySymbols = '@#$!%'
  var pass = '';
  var myValues = '';

  if (!islowerChar && !isupperChar && !isspecialChar && !isnumberChar) {
    alert("At least one criteria has to be selected.");
    return;
  }

  if (islowerChar) {
    myValues += myLowers;
  }

  if (isupperChar) {
    myValues += myUppers;
  }

  if (isspecialChar) {
    myValues += mySymbols;
  }

  if (isnumberChar) {
    myValues += myNumbers;
  }

  for (let i = 1; i <= pwdLen; i++) {
    var aRandom = Math.floor(Math.random() * myValues.length + 1);

    pass += myValues.charAt(aRandom);
  }

  return pass;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
