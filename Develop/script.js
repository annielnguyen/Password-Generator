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
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
