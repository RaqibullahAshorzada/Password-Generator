const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOneField = document.getElementById("password1");
let passwordTwoField = document.getElementById("password2");


let passwordOne = '';
let passwordTwo = '';
function passwordGenerator() {
    for(let i = 0 ; i <= 14 ; i++){
    let rand = Math.floor(Math.random() * characters.length);
    let pass1 = characters[rand];
    passwordOne = passwordOne + pass1;
    let rand2 = Math.floor(Math.random() * characters.length);
    let pass2 = characters[rand2];
    passwordTwo = passwordTwo + pass2;
    passwordOneField.innerHTML =  passwordOne;
    passwordTwoField.innerHTML =  passwordTwo;
    
}
}


let fields = document.getElementById("empty");
fields.addEventListener('click', function() {
    location.reload() 
})


