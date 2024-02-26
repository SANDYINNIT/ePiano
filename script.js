window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("stickyMenu");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // You can send the form data to your server here using AJAX

  // For this example, we'll just display a confirmation message
  document.getElementById('feedbackForm').reset(); // Reset form fields
  document.getElementById('feedbackForm').classList.add('hidden'); // Hide form
  document.getElementById('confirmation').classList.remove('hidden'); // Show confirmation message
});