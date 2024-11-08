// Constants for form elements
const form = document.querySelector("#contact-form");
const nameInput = document.querySelector("#entername");
const emailInput = document.querySelector("#enteremail");
const phoneInput = document.querySelector("#enterphone");
const messageInput = document.querySelector("#entermessage");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");
const personalGreeting = document.querySelector(".personal-greeting");

// Prevent form from submitting to refresh the page
form.addEventListener("submit", (e) => e.preventDefault());

// Submit button event listener to store info and show greeting
submitBtn.addEventListener("click", () => {
  // Store user inputs
  localStorage.setItem("name", nameInput.value);
  localStorage.setItem("email", emailInput.value);
  localStorage.setItem("phone", phoneInput.value);
  localStorage.setItem("message", messageInput.value);
  
  // Show success alert
  alert("Message sent successfully!");
  
  // Update greeting
  displayGreeting();
});

// Forget button event listener to clear storage and reset greeting
forgetBtn.addEventListener("click", () => {
  // Clear local storage
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  localStorage.removeItem("phone");
  localStorage.removeItem("message");

  // Reset greeting
  displayGreeting();
});

// Function to display personalized greeting
function displayGreeting() {
  const name = localStorage.getItem("name");
  personalGreeting.textContent = name
    ? `Hello ${name}, thank you for joining us on this journey!`
    : "Hello, Space Enthusiast! Let's journey together through the incredible world of Elon Musk and SpaceX!";
}

// Initialize greeting on page load
displayGreeting();
