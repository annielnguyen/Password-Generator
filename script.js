// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
  function writePassword() {
    var length = prompt("Please enter how many characters you'd like in your password"); 
//Check if password length is within the range specified
      if (length < 8 || length > 128 ){
          alert (length + " is not a valid option. Please try again." );
          return;
      }
//Prompts for each variable
  var special = confirm("Would you like SPECIAL CHARACTERS in your password?");
  var numbers = confirm("Would you like NUMBERS in your password?");
  var uppercase = confirm("Would you like UPPERCASE letters in your password?");
  var lowercase = confirm("Would you like LOWERCASE letters in your password?");
    if (special || numbers || uppercase || lowercase){
      var password = generatePassword(length,special,numbers,uppercase,lowercase);
      var passwordText = document.querySelector("#password");
    passwordText.value = password;
//Check if they selected at least one character type
}else { 
  alert ("Please select at least one field.");
  return;
   }
}
//generating password; if user selects a critera, the criteria gets added to end of array and returns the new length of array aka the password
function generatePassword(length,special,numbers,uppercase,lowercase){
  var password ="";
  var password_options= [];
    if (uppercase){
      password_options.push(0)
    }
    if (lowercase){
      password_options.push(1)
    }
    if (special){
      password_options.push(2)
    }
    if (numbers){
      password_options.push(3)
    }
    for (var i = 0; i < length; i++){
      var random_char = randomCharacter(password_options[Math.floor(Math.random()*(password_options.length -1))]);
      password= password+ random_char
    }
    return password;
  }

function randomCharacter(number) {
  if( number == 0) {
  //random selection of uppercase letters starting with first letter of alphabet
    return String.fromCharCode(Math.floor(((Math.random()*26)+65))); 
  } else if( number == 1){
  //random selection of lowercase letters starting with first letter of alphabet
    return String.fromCharCode(Math.floor(((Math.random()*26)+97))); 
  } else if( number == 2){
    var special_array = [ '!','#','$','%','&','`','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',"\\",`]`,`^` , `_`,`{`,`|`,`}`,`~`,`]` ]
  //random selection of special characters from array starting with first index
    return special_array[Math.floor(Math.random() * (special_array.length-1))];

  }
  else if( number == 3) {
//random selection of a number from the array starting at first index
    var number_array = ["1","2","3","4","5","6","7","8","9"];
    return number_array[Math.floor(Math.random () * (number_array-1))];
  }

}
//Generating password
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