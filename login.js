document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email & password
    if (userEmail == 'Js@gmail.com' && userPassword == 'JS') {
        window.location.href = 'banking.html'
    }
})
