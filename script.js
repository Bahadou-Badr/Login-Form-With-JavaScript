document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login');
    const signUpForm = document.querySelector('#sign-up');

    document.querySelector('#linkLogin')
            .addEventListener('click', e => {
                e.preventDefault();
                signUpForm.classList.add("form-hidden");
                loginForm.classList.remove("form-hidden");
            });
    
    document.querySelector('#linkSignUp')
            .addEventListener('click', e => {
                e.preventDefault();
                loginForm.classList.add("form-hidden");
                signUpForm.classList.remove("form-hidden");
            });    
})

//Apply Theme - dark and light//
function applyTheme(){
    const checkBox = document.querySelector('.switch');
    const itemLight = document.querySelectorAll('.card, .form-control, .social');

    if (checkBox.checked == true) {
        itemLight.forEach(e => {
            e.classList.add('light');
        })
    }
    else {
        itemLight.forEach(e => {
            e.classList.remove('light');
        })
    } 
}