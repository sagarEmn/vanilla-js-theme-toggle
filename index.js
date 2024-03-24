// Select the button element
const button = document.getElementById("toggleButton");

// Add an event listener for click event
button.addEventListener("click", function() {
  // Toggle the "dark-mode" class on the body element
  document.body.classList.toggle("dark-mode");
  button.classList.toggle("buttonChange");
});
