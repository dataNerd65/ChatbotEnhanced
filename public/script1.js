// Declare signUpUser function first
function signUpUser() {
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Client-side form validation
    if (!fullname || !email || !username || !password || !confirmPassword) {
        displayErrorMessage("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        displayErrorMessage("Passwords do not match!");
        return;
    }

    // Send a POST request to the server with user data
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullname: fullname,
            email: email,
            username: username,
            password: password
        })
    })
    .then(response => {
        if (response.ok) {
            console.log('User signed up successfully');
            displaySuccessMessage("Signup successful!");
            window.location.href = '/login.html'; // Redirect to the login page
        } else {
            console.log('Failed to sign up user');
            displayErrorMessage("Failed to sign up user. Please try again later.");
        }
    })
    .catch(error => {
        console.error('Error signing up user: ', error.message);
        displayErrorMessage("An error occurred. Please try again later.");
    });
}
// Function to display success message
function displaySuccessMessage(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = ''; // Clear any existing error messages
    errorMessage.classList.remove('error'); // Remove error class
    errorMessage.classList.add('success'); // Add success class
    errorMessage.textContent = message;
}

// Function to display error message
function displayErrorMessage(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.classList.remove('success'); // Remove success class
    errorMessage.classList.add('error'); // Add error class
}


// Now declare other variables and set up event listeners
document.addEventListener('DOMContentLoaded', function(){
    const loginForm = document.getElementById('login-form');
    const forgotPasswordLink = document.getElementById('forgot-password');
    const signUpLink = document.getElementById('sign-up');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.querySelector('.toggle-password');
    const errorMessage = document.getElementById('error-message');

    // Event listener for "Forgot Password?" link
    forgotPasswordLink.addEventListener("click", function(event){
        event.preventDefault();
        displayErrorMessage("This feature is not available yet!");
    });

    // Event listener for "Sign Up" link
    signUpLink.addEventListener("click", function(event){
        event.preventDefault();
        window.location.href = '/signup.html'; // Redirect to the signup page
    });

    // Event listener for form submission
    loginForm.addEventListener("submit", function(event){
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = passwordInput.value;
        const rememberMe = document.getElementById('remember-me').checked;

        //Send a POST request to the server with user credentials
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response => {
            if (response.ok){
                console.log('User logged in successfully!');
                displaySuccessMessage("Login successful! Redirecting to dashboard...");
                //Redirect user to homepage
                window.location.href = '/dashboard.html';
            } else {
                console.log('Failed to log in user!');
                displayErrorMessage("Invalid username or password. Please try again.");
            }
        })
        .catch(error => {
            console.error('Error logging in user: ', error.message);
            displayErrorMessage("An error occurred. Please try again later");
        });
    });

    // Event listener for toggling password visibility
    togglePassword.addEventListener("click", function(){
        const type = passwordInput.getAttribute('type') === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        togglePassword.classList.toggle("fa-eye-slash");
        togglePassword.classList.toggle("fa-eye");
    });

    function displayErrorMessage(message) {
        errorMessage.textContent = message;
    }
});


