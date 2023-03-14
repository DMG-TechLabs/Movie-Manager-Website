emailjs.init("CJLYrbbJ1uNcE_eKK");

function getData() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const title = document.getElementById("title");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const image = document.getElementById("image");

    const obj = {
        name: name.value,
        email: email.value,
        title: title.value,
        subject: subject.value,
        message: message.value,
        //image: image.value
    };

    console.log(obj);
    return obj;
}

function checkInput(obj) {
    return !(
        obj.name == "" ||
        obj.email == "" ||
        obj.title == "" ||
        obj.subject == "-1" ||
        obj.message == ""
    );
}

function sendIssue() {
    const info = getData();

    if (!checkInput(info)) {
        window.alert("Fill all cells");
        return;
    }

    emailjs
        .send(
            "service_xfrkbnh",
            "template_edoxu8w", {
                name: info.name,
                email: info.email,
                title: info.title,
                subject: info.subject,
                message: info.message,
                image: info.image,
                reply_to: info.email
            }
        )
        .then(
            function () {
                console.log("Issue submited");
            },
            function (error) {
                console.log("Issue not sent", error);
            }
        );

    //  Όταν πατηθεί το κουμπί της αποστολή τότε να εξαφανίζεται η φόρμα και στην θέση της να εμφανίζεται το μήνυμα "Το μήνυμα σας στάλθηκε με επιτυχία".

    //cleanAll();
    alert("Message sent successfully!");
}

function clean(element_id){
    document.getElementById(element_id).value = "";
}

function cleanAll(){
    clean("email");
    clean("name");
    clean("message");
    clean("image");
    clean("title");
}
