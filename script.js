
//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password
function generatePassword() {
     //YOUR CODE HERE
     var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     var lowers = 'abcdefghijklmnopqrstuvwxyz';
     var specials = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
     var nums = '0123456789';

     var criteria = '';
     var password = '';
     var length = document.querySelector("#range").value;

     //checking to see if the user has selected
     //at least one criteria or not
     var checkBoxes = document.querySelectorAll('input[type=checkbox]');
     var checkedOne = Array.prototype.slice.call(checkBoxes).some(x => x.checked);

     //if at least one criteria has been selected
     //then proceed to generate a password
     //else show an error alert
     if(checkedOne){
          if(document.querySelector('#uppercase').checked){
               criteria += uppers;
          }
          if(document.querySelector('#lowercase').checked){
               criteria += lowers;
          }
          if(document.querySelector('#sp-char').checked){
               criteria += specials;
          }
          if(document.querySelector('#num').checked){
               criteria += nums;
          }
     }
     else{
          alert("ERROR: Please select AT LEAST 1 criteria!");
     }

     for (var i = 0; i < length; i++) {
          var tempChar = Math.floor(Math.random() * criteria.length);
          password += criteria.substring(tempChar, tempChar + 1);
     }

     return password;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

function copyToClipboard() {
    // BONUS
    var copyText = document.querySelector("#password");
    copyText.select();
    document.execCommand("copy");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
copyBtn.addEventListener("click", copyToClipboard);
