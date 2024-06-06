// Check if 'users' data is present in localStorage and initialize if not
let users = JSON.parse(localStorage.getItem("users")) || [];

let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("psw");
let submitButton = document.getElementById("savebtnn");

function login(e) {
  e.preventDefault();
  let email = emailInput.value;
  let pwd = passwordInput.value;

  // Check if there are any users stored
  if (users.length > 0) {
    // Loop through users to find a match
    let foundUser = users.find(user => user.email === email && user.psw === pwd);
    if (foundUser) {
      // Set current user ID and login status
      localStorage.setItem("currentUserID", JSON.stringify(foundUser.id));
      localStorage.setItem("isLoggedIn", JSON.stringify(foundUser.email));
      // Redirect to index.html
      window.location.href = "index.html";
    } else {
      // If no match found, show alert
      alert("Your information does not match the Sign Up form!");
    }
  } else {
    // If no users are registered, show alert
    alert("No users registered. Please sign up first!");
  }
}

submitButton.addEventListener("click", login);
