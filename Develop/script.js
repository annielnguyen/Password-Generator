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
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
