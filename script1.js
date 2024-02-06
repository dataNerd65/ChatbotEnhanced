document.addEventListener('DOMContentLoaded', function(){
    const loginForm = document.getElementById('login-form');
    const forgotPasswordLink = document.getElementById('forgot-password');
    const signUpLink = document.getElementById('sign-up');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.querySelector('.toggle-password'); // Corrected the selector by adding a dot before toggle-password

    //Event listener for "Forgot Password?" link
    forgotPasswordLink.addEventListener("click", function(event){
        event.preventDefault();
        alert("This feature is not available yet!");
        //it should redirect to a new page and will be implemented in the future eg will show a modal
    });
    //Event listener for "Sign Up" link
    signUpLink.addEventListener("click", function(event){
        event.preventDefault();
        alert("This feature is not available yet!");
        //it should redirect to a new page and will be implemented in the future
    });
    //Event listener for form submission
    loginForm.addEventListener("submit", function(event){
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('remember-me').checked; // Corrected ariaChecked to checked

        //Implementing login functionality(send data to server and get response)#backend
        //For now, just log the input values
        console.log("Username: ",username);
        console.log("Password: ",password);
        console.log("Remember Me: ",rememberMe);
    });
    //Event listener for toggling password visibility
    togglePassword.addEventListener("click", function(){
        const type = passwordInput.getAttribute('type') === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        togglePassword.classList.toggle("fa-eye-slash");
        togglePassword.classList.toggle("fa-eye");
    });
});
