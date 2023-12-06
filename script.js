function validateForm(event) {
    event.preventDefault();

    // Simple email validation
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simple password strength validation (at least 8 characters)
    const passwordInput = document.getElementById('password');
    if (passwordInput.value.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    // If all validations pass, you can submit the form
    alert('Registration successful!');
    document.getElementById('registrationForm').reset();
    
}
