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
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    
    if (name && email) {
        // Store the entered name and email in web storage
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        // Update the UI
        nameDisplayCheck();
    }
});

// Run function when the 'Forget' button is clicked
forgetBtn.addEventListener("click", () => {
    // Remove the stored name and email from web storage
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    nameInput.value = "";  // Clear the input fields
    emailInput.value = "";
    // Update the UI
    nameDisplayCheck();
});

// Define the nameDisplayCheck() function
function nameDisplayCheck() {
    const storedName = localStorage.getItem("name");

    if (storedName) {
        // If a name is stored, display personalized greeting
        greetingName.textContent = storedName;
        personalGreeting.textContent = `Welcome to our website, ${storedName}! We hope you have fun while you are here.`;
        // Hide the 'remember' part of the form and show the 'forget' part
        forgetDiv.style.display = "block";
        rememberDiv.style.display = "none";
    } else {
        // If no name is stored, display generic greeting
        greetingName.textContent = "guest";
        personalGreeting.textContent = "Welcome to our website. We hope you have fun while you are here.";
        // Hide the 'forget' part of the form and show the 'remember' part
        forgetDiv.style.display = "none";
        rememberDiv.style.display = "block";
    }
}

nameDisplayCheck();
