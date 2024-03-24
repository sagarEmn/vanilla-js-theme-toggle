// Select the button element
const button = document.getElementById("toggleButton");

// Refer to p tag of container div
const pTag = document.querySelector(".container p");

function updateModeText() {
  if (document.body.classList.contains("dark-mode")) {
    pTag.innerHTML =
      "Current Mode: <br> <span id='mode'> Dark Theme 🌒🌙🌚<span>";
  } else {
    pTag.innerHTML =
      "Current Mode: <br> <span id='mode'> Light Theme☀️🌅<span>";
  }
}

// Update the content initially
updateModeText();

// Add an event listener for click event
button.addEventListener("click", function () {
  // Toggle the "dark-mode" class on the body element
  document.body.classList.toggle("dark-mode");
  button.classList.toggle("buttonChange");

  // Update the content again after toggling
  updateModeText();
});
console.log(pTag);
