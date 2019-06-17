var register = document.querySelector('.registration-form');

var login = document.querySelector('.register-link');

login.addEventListener('click',function(){
    document.querySelector('.log-form').style.display="none";
    register.style.display="block";
    document.querySelector('.general-form').style.height="auto";
    register.classList.add('reg-height');
});