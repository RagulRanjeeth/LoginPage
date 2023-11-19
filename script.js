//login
var userName=document.getElementById("user");
var password=document.getElementById("password");
const login=document.getElementById("button").addEventListener("click",validation);
function validation()
{
    if(userName.value=="Student"&&password.value=="123")
    {
        
        location.href('loginsuccessful.html');
    }
    else
    {
        alert("Invalid Username or Password");
    }
}
function redirect()
{
    
    window.location.href="C:\Users\DELL\OneDrive\Desktop\Web Development\loginPage\loginsuccessful.html";

}


