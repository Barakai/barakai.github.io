
function myFunction(event) {
    event.preventDefault()
    var complexity = document.getElementById("generate").value;
​
    values : 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^°!"§$%&/()=?`*+~\'#,;.:-_';
    password = ""
    for (var i = 0; i < values.length; i++){
    password = password + values.charAt(Math.floor(Math.random(8,128) * values.length));
​}
document.getElementById("generate").value 
document.getElementById("copy").value 
}