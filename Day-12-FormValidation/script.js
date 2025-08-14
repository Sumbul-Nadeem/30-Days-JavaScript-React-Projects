let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName() {
    let name = document.getElementById("contact-name").value.trim();
    if (!name) {
        nameError.textContent = "Name is required";
        return false;
    }
    if (!/^[A-Za-z]+\s[A-Za-z]+$/.test(name)) {
        nameError.textContent = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validatePhone() {
    let phone = document.getElementById("contact-phone").value.trim();
    if (!phone) {
        phoneError.textContent = "Phone number is required";
        return false;
    }
    if (!/^\d{10}$/.test(phone)) {
        phoneError.textContent = "Enter a valid 10-digit number";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    let email = document.getElementById("contact-email").value.trim();
    if (!email) {
        emailError.textContent = "Email is required";
        return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Invalid email format";
        return false;
    }
    emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateMessage() {
    let message = document.getElementById("contact-message").value.trim();
    if (message.length < 30) {
        messageError.textContent = `${30 - message.length} more characters required`;
        return false;
    }
    messageError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateForm(e) {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        e.preventDefault();
        submitError.style.display = "block";
        submitError.textContent = "Please fix errors before submitting.";
        setTimeout(() => submitError.style.display = "none", 3000);
        return false;
    }
    return true;
}
