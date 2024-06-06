let filter = document.getElementById("filter");

function filterEmployee(user) {
  let inputValue = user.target.value.toLowerCase();
  let result = document.querySelector(".result-box");
  let listUser = document.querySelectorAll(".result-box ul li");
  listUser.forEach((user) => {
    const userName = user.textContent.toLowerCase();
    console.log(userName);
    if (userName.indexOf(inputValue) != -1) {
      user.style.display = "block";
      result.style.display = "none";
    } else {
      user.style.display = "none";
      result.style.display = "block";
    }
  });
}

filter.addEventListener("input", filterEmployee);






///////////////////////////


let settingsMenu = document.querySelector('.visable');
let gearIcon = document.getElementById("gear");

function display() {
  settingsMenu.classList.add('active');
}

function display1() {
  settingsMenu.classList.remove('active');
}

let themes = ['red-theme', 'blue-theme', 'green-theme', 'purple-theme', 'white-theme'];

function changeTheme(themeIndex) {

  document.body.classList.remove(...themes);

  document.body.classList.add(themes[themeIndex]);


  const themeElements = document.querySelectorAll('.align div');
  themeElements.forEach((element) => {
    element.classList.remove('active-theme');
  });
  themeElements[themeIndex].classList.add('active-theme');
}



let btn = document.getElementById("btn");
    let btntext = document.getElementById("btntext");
    let btnicon = document.getElementById("btnicon");

    btn.onclick = function () {
        document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
    btnicon.classList.remove("fa-moon");
    btnicon.classList.add("fa-sun");
    btntext.innerHTML = "Light";

} else {
    btnicon.classList.remove("fa-sun");
    btnicon.classList.add("fa-moon");
    btntext.innerHTML = "Dark";

}
};