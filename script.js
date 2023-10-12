document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // You can add authentication logic here
        
        if (username === 'user' && password === 'password') {
            alert('Login successful!');
            // Redirect to a new page or perform any other actions on successful login.
        } else {
            alert('Login failed. Please check your credentials.');
        }
    });
});
