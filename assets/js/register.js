// Toggle password visibility
function togglePassword() {
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');
    const passwordIcon = document.querySelector('.input-group-text i');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        confirmPasswordField.type = 'text';
        passwordIcon.classList.replace('bx-hide', 'bx-show');
    } else {
        passwordField.type = 'password';
        confirmPasswordField.type = 'password';
        passwordIcon.classList.replace('bx-show', 'bx-hide');
    }
}

// Form submission handling (for local testing)
document.getElementById("formRegister").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form data
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validate password match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return; // Stop form submission if passwords don't match
    }

    // If no issues, show success message
    alert("Registration successful! You can now login.");
    
    // Optionally, submit the form if you're submitting it to a server.
    // document.getElementById("formRegister").submit();  // Uncomment this if you want to submit the form
});

      // Simulate OTP sending
      let generatedOtp = null;

      // Registration form submission handler
      document.getElementById("formRegister").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Check if passwords match
        if (password !== confirmPassword) {
          alert("Passwords do not match!");
          return; // Stop form submission if passwords don't match
        }

        // Validate password length and uppercase letter (already done in HTML, but we can double check here)
        if (password.length < 8 || !/[A-Z]/.test(password)) {
          alert("Password must be at least 8 characters and contain at least one uppercase letter.");
          return; // Stop form submission if password doesn't meet criteria
        }

        // Generate a random 6-digit OTP
        generatedOtp = Math.floor(100000 + Math.random() * 900000);

        // Simulate sending OTP (This would be done via backend in a real-world app)
        alert(`OTP sent to ${email}: ${generatedOtp}`); // In a real app, you'd send OTP to the user's email via backend

        // Hide the registration form and show OTP form
        document.getElementById("formRegister").style.display = "none";
        document.getElementById("otpForm").style.display = "block";
      });

      // OTP Verification handler
      document.getElementById("formOTP").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        const enteredOtp = document.getElementById("otp").value;

        // Check if the OTP matches
        if (enteredOtp == generatedOtp) {
          alert("Account successfully activated!");
          // Redirect to login page or show login options
          window.location.href = "order.html"; // Redirect to login page upon successful OTP verification
        } else {
          alert("Invalid OTP. Please try again.");
        }
      });