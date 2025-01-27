function sendMail(){
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceId = "service_1guej4m";
const templateID = "template_ksfqeyp"

emailjs.send(serviceId,templateID,params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        // console.log(res);
        // alert("Your message send successfully!");
        if(res){
            Swal.fire({
                title: "Success!",
                text: "Your message send successfully!",
                icon: "success"
              });
        }
    }
)
.catch((err) => console.log(err));
}

