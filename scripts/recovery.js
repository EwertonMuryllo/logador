
var recovery = document.getElementById("recovery");

recovery.addEventListener("click", function(){

var newpassword = document.getElementById("passwordRecovery").value
var confirmNewpassword = document.getElementById("passwordConfirmedRecovery").value

if(newpassword != confirmNewpassword){
   alert("Tá errado a senha lek");
   return;
}

sessionStorage.setItem("password", newpassword);

alert("Show deu bom");

window.location.href = "../pages/login.html";


});