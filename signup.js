const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

const butoni = document.getElementById("savebtn");

butoni.addEventListener("click", savedata);

function savedata() {
  const name = document.getElementById("name-signup").value;
  const email = document.getElementById("email-signup").value;
  const psw = document.getElementById("psw-signup").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      alert("Name already exists. Please choose a different name.");
      return;
    }
  }

  users.push({ id: users.length + 1, name: name, email: email, psw: psw });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful!");

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("psw").value = "";
}
