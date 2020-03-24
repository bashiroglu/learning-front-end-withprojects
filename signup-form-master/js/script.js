const form = document.getElementById('from');
const firstName= form.querySelectorAll('input')[0];
const lastName= form.querySelectorAll('input')[1];
const email= form.querySelectorAll('input')[2];
const password= form.querySelectorAll('input')[3];


function addError(element){
    element.parentElement.classList.add('error');
}

function removeError(element){
    element.parentElement.classList.remove('error');
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

firstName.addEventListener('focus', function(){
    removeError(firstName)
})
lastName.addEventListener('focus', function(){
    removeError(lastName)
})
email.addEventListener('focus', function(){
    removeError(email)
})
password.addEventListener('focus', function(){
    removeError(password)
})

form.addEventListener('submit', function (e){
    if(!firstName.value){
        addError(firstName)
    } else{
        removeError(firstName)
    }
    if(!lastName.value){
        addError(lastName)
    } 
    else{
        removeError(lastName)
    }
    if(!email.value){
        addError(email)
    } else if(!validateEmail(email.value)){
        addError(email);
        email.nextElementSibling.innerHTML='Looks like this is not email';
    }
    else{
        removeError(email)
    }
    if(!password.value){
        addError(password)
    } else{
        removeError(password)
    }

    
    e.preventDefault()
})
