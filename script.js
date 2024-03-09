document.getElementById('contactForm').addEventListener('submit',function(event){

var email = document.getElementById('email').value;
var confirmEmail = document.getElementById('confirmEmail').value;
var wrongemail = document.getElementById('errormessage');

if(email !== confirmEmail){
wrongemail.style.display = 'block';
wrongemail.style.fontSize = "15px"
event.preventDefault();
}else{
    wrongemail.style.display = 'none';
}
});