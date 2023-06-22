
function generatePassword() {
//creates an array of numerical characters for password
var numerics = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//creates an array of special characters for password
var specialChars = [
  '@',
  '!',
  '#',
  '$',
  '%'
];

//creates an array of lowercase letters for password
var lowerCaseChars = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

//creates an array of uppercase letters for password
var upperCaseChars = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// creates a placeholder empty array which I can utilize to eventually output a password 
var passwordArray = [];
var passLength= getPassLength();

//makes sure theres at leasr 1 character in the password
var charSelected = false ;
while (charSelected == false) {
  var lowerCase = getPreference ("lowercase");
  var upperCase = getPreference ("uppercase");
  var numeric = getPreference ("numeric");
  var specialCharacters = getPreference ("special");
  if ((lowerCase) || (upperCase) || (numeric) || (specialCharacters)) {
    charSelected = true;
  } else {
    window.alert("please add a character for your password.")
  }
}

  // if statements for user pref to add to the password array.
  if (lowerCase) {
    passwordArray = passwordArray.concat(lowerCaseChars);
  }
  if (upperCase) {
    passwordArray = passwordArray.concat(upperCaseChars);
  }
  if (numeric) {
    passwordArray = passwordArray.concat(numerics);
  }
  if (specialCharacters) {
    passwordArray = passwordArray.concat(specialChars);
  }


  // randomly select elements from password array to create a password.
  var passString = "";
  for (var i = 0; i < passLength; i++) {
    passString += passwordArray[Math.floor(Math.random() * (passwordArray.length))];
  }

  return passString;
}

  function getPassLength() {
    var userChoice = 0;
    while ((userChoice < 8) || (userChoice > 128)) {
      userChoice = parseInt(window.prompt("How many characters would you like you password to be? (note: must be between 8 and 128)"));
      if (isNaN(userChoice)) {
        userChoice = 0;
      }
    }
    return userChoice;
  }

//using one function for each choice needed 
function getPreference(preferredOp) {
  var userChoice = "a",
    messagePrompt = "";
  var messagePrompt = ('Would you like '.concat(preferredOp));
  messagePrompt = messagePrompt.concat(' characters (y/n)?');
  while (userChoice = "a") {
    userChoice = (window.prompt(messagePrompt));
    // makes sure the user choice is lowercase and if not, is changed to lowercasw
    userChoice = userChoice.toLowerCase();
    if (userChoice == "y") {
      return true;
    } else if (userChoice == "n") {
      return false;
    }
  }
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

