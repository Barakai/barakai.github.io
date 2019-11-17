 var numbers = [0,1,2,3,4,5,6,7,8,9];
 var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChars = ["^", "°", "!", "§", "$", "%", "&", "/", "()", "=", "?", "`", "*", "+", "~", '"\"', "'", "#", ",", ";", ".", ":", "-", "_",];


function getPasswordOptions(){
    var passwordLength = parseInt(
        prompt("how long is the password")
    );

    if(isNaN(passwordLength)=== true){
        alert("password length must be provided as a number");
        return;
    }

    if (passwordLength<8){
        alert("password cannot be less than 8");
        return;
    }

    if (passwordLength>128){
        alert("password cannot be greater than 128");
        return;
    }

    var hasSpecialChars = confirm( "Do you want special characters?");
    var hasLowercase = confirm( "do you want lowercse characters?");
    var hasUppercase = confirm("do you want uppercase charachters?");
    var hasNumbers = confirm("do you want numbers?");


    var choices = {
        passwordLength: passwordLength,
        hasSpecialChars: hasSpecialChars,
        hasLowercase: hasLowercase,
        hasUppercase: hasUppercase,
        hasNumbers: hasNumbers,
    }

    console.log(choices);
    return choices;
}


function generatePassword() {
    var options = getPasswordOptions(); 

    var passwordChars = [];
   
    if(options.hasNumbers){
        passwordChars = passwordChars.concat(hasNumbers);
    }
    else {
        return null;
    }
    
    if(options.hasLowercase){
        passwordChars = passwordChars.concat(hasLowercase);
    }
    else {
        return null;
    }

    if(options.hasUppercase){
        passwordChars = passwordChars.concat(hasUppercase);
    }
    else {
        return null;
    }

    if(options.hasSpecialChars){
        passwordChars = passwordChars.concat(hasSpecialChars);
    }
    else {
        return null;
    }
}

generatePassword();

