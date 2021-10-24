/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function(){
    const email = document.getElementById('email');
    const form = document.getElementsByTagName('form')[0];
    const message = document.querySelector(".message");

    form.addEventListener('submit', function(event){
        event.preventDefault();

        if(validateEmail(email.value)){
            message.innerHTML = "Thank you! Your email address "+email.value+" has been added to our mailing list!";
        }else{
            message.innerHTML = "Please enter a valid email address.";
        }
    });

    function validateEmail(emailAddress) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailAddress))
        {
            return true;
        }
        return false;
    }
    
});