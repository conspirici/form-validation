var email = document.getElementById("email");
var password = document.getElementById("password");
var form = document.getElementById("form");
var remember_me = document.getElementById("remember");

form.addEventListener('submit',validate)
remember_me.addEventListener('click',storeLocally);

function validate(event){
    event.preventDefault();
    if(email.value.trim() ==="" || password.value.trim() ===""){
        alert("all fields are required");
        console.log("hey")
        return;
    }
    alert("I have to sleep now");
}

function storeLocally(){
let dataobject = {
    user_email: email.value,
    user_pass: password.value
}

let dataobject_serialized = JSON.stringify(dataobject);

localStorage.setItem("login-data",dataobject_serialized);
console.log(localStorage);

}

