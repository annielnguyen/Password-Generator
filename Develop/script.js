// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  function writePassword() {
    var length = prompt("Please enter how many characters you'd like in your password"); 
      if (length < 8 || length > 128 ){
          alert (length + " is not a valid option. Please try again." );
          return;
      }
  var special = confirm("Would you like SPECIAL CHARACTERS in your password?");
  var numbers = confirm("Would you like NUMBERS in your password?");
  var uppercase = confirm("Would you like UPPERCASE letters in your password?");
  var lowercase = confirm("Would you like LOWERCASE letters in your password?");
  if (special || numbers || uppercase || lowercase){
    var password = generatePassword(length,special,numbers,uppercase,lowercase);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}else { 
  alert ("Please select at least one field.");
  return;

}

function randomCharacter(number) {
  if( number == 0) {
    return String.fromCharCode(Math.floor(((Math.random()*26)+65))); 
  } else if( number == 1){
    return String.fromCharCode(Math.floor(((Math.random()*26)+97))); 
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page