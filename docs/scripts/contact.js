emailjs.init('CJLYrbbJ1uNcE_eKK');

function check_message(message_element_name,message_error_element_name){
    message = document.getElementById(message_element_name);
    message_error = document.getElementById(message_error_element_name);
    if (message.value == ""){
        message_error.innerHTML = "The message is empty!";
        message_error.className = "error_message_visible";
        return false;
    }else if (String(message.value).length > 100){
        message_error.innerHTML = "The message exceeds the 100 characters!";
        message_error.className = "error_message_visible";
        return false;
    }
    else{
        message_error.className = "error_message_hiden";
        return true;
    }
}

function check_for_empty(element_name,error_elemet_name,visible_class,hiden_class){
    obg = document.getElementById(element_name)
    error = document.getElementById(error_elemet_name);
    if (obg.value == ""){
        error.className = visible_class;
        return false;
    }
    else{
        error.className = hiden_class;
        return true;
    }
}

function clean(element_id){
    document.getElementById(element_id).value = "";
}

function send(){
    var ok_email = check_for_empty("user_email","email_error","error_message_visible","error_message_hiden");
    var ok_name = check_for_empty("user_name","name_error","error_message_visible","error_message_hiden");
    
    // To πεδίο του μηνύματος να μην υπερβαίνει τους 100 χαρακτήρες. Όταν τους υπερβεί τότε να εμφανίζεται μήνυμα
    var ok_message = check_message("message","message_error");
    if(ok_email && ok_name && ok_message){
        emailjs.sendForm('service_xfrkbnh', 'template_swbfpow', document.getElementById("contact-form"))
                        .then(function() {
                            console.log('SUCCESS!');
                        }, function(error) {
                            console.log('FAILED...', error);
                        });
    
        //  Όταν πατηθεί το κουμπί της αποστολή τότε να εξαφανίζεται η φόρμα και στην θέση της να εμφανίζεται το μήνυμα "Το μήνυμα σας στάλθηκε με επιτυχία".
    
        clean("user_email");
        clean("user_name");
        clean("message");
        alert("Message send successfully!");
    }
}

document.getElementById("contact-form").addEventListener('submit',function(event) {
    event.preventDefault();

    send();
});

document.getElementById("user_email").addEventListener('change',function() {
    check_for_empty("user_email","email_error","error_message_visible","error_message_hiden");
});

document.getElementById("user_name").addEventListener('change',function() {
    check_for_empty("user_name","name_error","error_message_visible","error_message_hiden");

});

document.getElementById("message").addEventListener('change',function() {
    check_message("message","message_error");
});
