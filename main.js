var signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var name = document.getElementById('name').value;
  var address = document.getElementById('address').value;
  var Pnumber = document.getElementById('Pnumber').value;
  var email = document.getElementById('signup-email').value;
  var password = document.getElementById('signup-password').value;

  // Perform desired functionality here, such as making an API request or storing the user data//


  // Prompt before starting login process
  var confirmSignup = confirm("Are you sure you're not an existing user?");
  // Example success message//
  alert('Sign-up successful!'.toLocaleUpperCase());

  // Clear form fields
  signupForm.reset()
});

var loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Prompt before starting login process
  var confirmLogin = confirm("Are you sure you want to log in?");

  if (confirmLogin) {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    // Perform login functionality here, such as making an API request or validating the user credentials

    // Example success message//
    alert('Login successful!'.toLocaleUpperCase());

    // Clear form fields
    loginForm.reset();
  } else {
    alert('Enter correct deatails'.toUpperCase());
  }
});
