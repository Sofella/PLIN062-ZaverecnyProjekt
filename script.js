// Get the modal
var modal = document.getElementById("myModal");

// Get the form element
var form = document.getElementById("contactForm");

// Get the button that opens the modal
var btn = document.getElementById("submitBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function(event) {
    event.preventDefault();
    // Get the form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Update the modal content with the submitted values
    document.getElementById("modalName").textContent = "Name: " + name;
    document.getElementById("modalEmail").textContent = "Email: " + email;
    document.getElementById("modalMessage").textContent = "Message: " + message;
  
    modal.style.display = "block";

    form.reset();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}