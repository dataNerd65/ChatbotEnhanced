document.addEventListener('DOMContentLoaded', function(){
    const loginForm = document.getElementById('login-form');
    const forgotPasswordLink = document.getElementById('forgot-password');
    const signUpLink = document.getElementById('sign-up');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.querySelector('.toggle-password');

    // Event listener for "Forgot Password?" link
    forgotPasswordLink.addEventListener("click", function(event){
        event.preventDefault();
        alert("This feature is not available yet!");
        // It should redirect to a new page or show a modal (to be implemented in the future)
    });

    // Event listener for "Sign Up" link
    signUpLink.addEventListener("click", function(event){
        event.preventDefault();
        const confirmPassword = document.getElementById('confirm-password').value;
        const password = passwordInput.value;

        if (password !== confirmPassword) {
            displayErrorMessage("Passwords do not match!");
            return;
        } else {
            console.log("Passwords match!");
            signUpUser();
        }
    });

    // Event listener for form submission
    loginForm.addEventListener("submit", function(event){
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = passwordInput.value;
        const rememberMe = document.getElementById('remember-me').checked;

        // Implementing login functionality (to be sent to server and get response) - backend
        // For now, just log the input values
        console.log("Username: ", username);
        console.log("Password: ", password);
        console.log("Remember Me: ", rememberMe);
    });

    // Event listener for toggling password visibility
    togglePassword.addEventListener("click", function(){
        const type = passwordInput.getAttribute('type') === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        togglePassword.classList.toggle("fa-eye-slash");
        togglePassword.classList.toggle("fa-eye");
    });

    function displayErrorMessage(message) {
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = message;
    }

    function signUpUser() {
        // Implement signup functionality (to be sent to server and get response) - backend
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = passwordInput.value;
        const rememberMe = document.getElementById('remember-me').checked;

        // Log user information (for now, just log to console)
        console.log("Fullname: ", fullname);
        console.log("Email: ", email);
        console.log("Username: ", username);
        console.log("Password: ", password);
        console.log("Remember Me: ", rememberMe);
    }
});
