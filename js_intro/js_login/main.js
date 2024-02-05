
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var form = document.querySelector('.modal-content');
var username = document.getElementById('username');
var password = document.getElementById('password');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Save or process the form data here
    var formData = {
        username: username.value,
        password: password.value
    };

    console.log(formData);

    // Create a query string from the form data
    var queryString = Object.keys(formData)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(formData[key]))
        .join('&');

    // Redirect to the loggedin.html page with the query string
    window.location.href = "loggedin.html?" + queryString;
});

function redirectToLoggedInPage() {
    // Change the URL to the loggedin.html page
    window.location.href = "loggedin.html";
  }