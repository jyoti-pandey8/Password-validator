const passwordInput=document.getElementById("password");
const message=document.getElementById("message");

passwordInput.addEventListener("keyup",function (){
    const password = passwordInput.value;
    const strongRegex = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (strongRegex.test(password)){
        message.textContent = "Strong password";
        message.style.color = "green";
    }else{
        message.textContent = "Password should be at least 8 characters long, contain at least one uppercase letter,one lowercase letter,one number,and one special character (!@#$%^&*)";
        message.style.color = "red";
    }
});