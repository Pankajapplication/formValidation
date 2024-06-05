let form = document.getElementById('formValidate');
let fName,lName,uEmail,uEmailFormat,uMob;
fName = document.getElementById('fName');
    lName = document.getElementById('lName');
    uEmail = document.getElementById('uEmail');
    uMob = document.getElementById('uMob');
form.addEventListener('submit', function(e){
    e.preventDefault();
    if(fName.value === ''){
        fName.nextElementSibling.textContent = "Enter First Name";
    }else{
        fName.nextElementSibling.textContent = "sucess";
        fName.style.borderColor  = "green";
    }
    if(lName.value === ''){
        lName.nextElementSibling.textContent = "Enter Last Name";
    }else{
        lName.nextElementSibling.textContent = "";
    }
    if(uEmail.value === ''){
        uEmail.nextElementSibling.textContent = "Enter Your Email";
    }else{
        uEmail.nextElementSibling.textContent = "";
    }
    if(uMob.value === ''){
        uMob.nextElementSibling.textContent = "Enter Mobile Number";
    }else{
        uMob.nextElementSibling.textContent = "";
    }
    return false
})