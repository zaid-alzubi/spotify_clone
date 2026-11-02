
// Get Form Elements
const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");


// Email Validation Function
function validateEmail(email) {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
}


// Password Validation Function
function validatePassword(password) {

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9\s]).{8,}$/;

    return passwordRegex.test(password);
}


// Form Submit Event
loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Clear Previous Messages
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Check Email
    if (email === "") {

        emailError.textContent = "Email is required.";
        isValid = false;

    } else if (!validateEmail(email)) {

        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }


    // Check Password
    if (password === "") {

        passwordError.textContent = "Password is required.";
        isValid = false;

    } else if (password.length < 8) {

        passwordError.textContent =
            "Password must be at least 8 characters long.";
        isValid = false;

    } else if (!/[A-Z]/.test(password)) {

        passwordError.textContent =
            "Password must contain at least one uppercase letter.";
        isValid = false;

    } else if (!/[a-z]/.test(password)) {

        passwordError.textContent =
            "Password must contain at least one lowercase letter.";
        isValid = false;

    } else if (!/[^a-zA-Z0-9\s]/.test(password)) {

        passwordError.textContent =
            "Password must contain at least one special character.";
        isValid = false;
    }


    // Final Result

// Final Result
if (isValid) {

    window.location.href = "index.html";

}


});
