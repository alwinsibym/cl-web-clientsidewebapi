// create needed constants
const rememberDiv = document.querySelector(".remember");
const forgetDiv = document.querySelector(".forget");
const form = document.querySelector("form");
const nameInput = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

const h1 = document.querySelector("h1");
const personalGreeting = document.querySelector(".personal-greeting");

// Stop the form from submitting when the submit button is clicked
form.addEventListener("submit", (e) => e.preventDefault());

// Run function when the 'Say hello' button is clicked
submitBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (name) {
        // store the entered name in web storage
        localStorage.setItem("name", name);
        // Update the UI
        nameDisplayCheck();
    }
});

// Run function when the 'Forget' button is clicked
forgetBtn.addEventListener("click", () => {
    // Remove the stored name from web storage
    localStorage.removeItem("name");
    nameInput.value = "";  // Clear the input field
    // Update the UI
    nameDisplayCheck();
});

// Define the nameDisplayCheck() function
function nameDisplayCheck() {
    const storedName = localStorage.getItem("name");

    if (storedName) {
        // If a name is stored, display personalized greeting
        h1.textContent = `Welcome, ${storedName}`;
        personalGreeting.textContent = `Welcome to our website, ${storedName}! We hope you have fun while you are here.`;
        // Hide the 'remember' part of the form and show the 'forget' part
        forgetDiv.style.display = "block";
        rememberDiv.style.display = "none";
    } else {
        // If no name is stored, display generic greeting
        h1.textContent = "Welcome to our website";
        personalGreeting.textContent = "Welcome to our website. We hope you have fun while you are here.";
        // Hide the 'forget' part of the form and show the 'remember' part
        forgetDiv.style.display = "none";
        rememberDiv.style.display = "block";
    }
}

nameDisplayCheck();
