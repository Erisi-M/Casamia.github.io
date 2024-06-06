let datas = localStorage.getItem("users");
let users = JSON.parse(datas);
let userId = JSON.parse(localStorage.getItem("currentUserID"));

if (users) {
  let name = document.getElementById("name");
  let profileName = document.getElementById("profile-name");
  let profileUsername = document.getElementById("profile-username");

  users.forEach((user) => {
    if (userId === user.id) {
      name.innerHTML = user.name;
      profileName.innerHTML = user.name;
      profileUsername.innerHTML = `@${user.name}`;
    }
  });
}


//qikjo burger menu
let profileNav = document.getElementById("profileNav");
let changedImgUser = JSON.parse(localStorage.getItem("users")) || [];

changedImgUser.forEach((user) => {
  if (user.id === userId && user.pfp != "") {
    profileNav.src =
      "../../assets/profiles/" +
        changedImgUser.find((user) => user.id === userId)?.pfp || "";
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const menuItems = document.querySelector('.result-box');

  burgerMenu.addEventListener('click', function () {
    this.classList.toggle('change'); 
    menuItems.classList.toggle('show'); 
  });
});
