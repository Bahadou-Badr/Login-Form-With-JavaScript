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