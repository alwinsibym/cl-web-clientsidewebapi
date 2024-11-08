// Create needed constants
const rememberDiv = document.querySelector(".remember");
const forgetDiv = document.querySelector(".forget");
const form = document.querySelector("form");
const nameInput = document.querySelector("#entername");
const emailInput = document.querySelector("#enteremail");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

const greetingName = document.querySelector("#greeting-name");
const personalGreeting = document.querySelector(".personal-greeting");

// Stop the form from submitting when a button is pressed
form.addEventListener("submit", (e) => e.preventDefault());

// Run function when the 'Submit' button is clicked
submitBtn.addEventListener("click", () => {
  // Store the entered name and email in web storage
  localStorage.setItem("name", nameInput.value);
  localStorage.setItem("email", emailInput.value);
  // Update the greeting message
  nameDisplayCheck();
});

// Run function when the 'Forget' button is clicked
forgetBtn.addEventListener("click", () => {
  // Remove the stored name and email from web storage
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  // Update the greeting message
  nameDisplayCheck();
});

// Define the nameDisplayCheck() function
function nameDisplayCheck() {
  // Check if the 'name' data item is stored in web storage
  if (localStorage.getItem("name")) {
    // If it is, display personalized greeting
    const name = localStorage.getItem("name");
    greetingName.textContent = name;
    personalGreeting.textContent = `Welcome to the world of Elon Musk, ${name}! Let’s dive into the visionary mind that’s reshaping humanity’s destiny.`;
    // Hide the 'remember' part of the form and show the 'forget' part
    forgetDiv.style.display = "block";
    rememberDiv.style.display = "none";
  } else {
    // If not, display generic greeting
    greetingName.textContent = "space enthusiast";
    personalGreeting.textContent =
      "Greetings, space enthusiast! Welcome to the world of Elon Musk, where the future is being written in the stars. Let’s dive into the visionary mind that’s reshaping humanity’s destiny.";
    // Hide the 'forget' part of the form and show the 'remember' part
    forgetDiv.style.display = "none";
    rememberDiv.style.display = "block";
  }
}

// Call the function to update greeting on page load
nameDisplayCheck();
