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
    const signUpForm = document.getElementById('signup-form');

    if (signUpForm) { // Check if the form element exists
        // Event listener for form submission
        signUpForm.addEventListener("submit", function(event){
            event.preventDefault(); // Prevent form submission

            // Call the signUpUser function when the form is submitted
            signUpUser();
        });
    } else {
        console.error("Element with ID 'signup-form' not found.");
    }
});




