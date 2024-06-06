let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");


inputFile.onchange = function () {
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
    
}



document.addEventListener('DOMContentLoaded', function () {
    const saveInputs = document.querySelectorAll('.save-input');
    const updateButton = document.getElementById('updateButton');


    saveInputs.forEach(input => {
        const value = localStorage.getItem(input.id);
        if (value) {
            input.value = value;
        }
    });


    updateButton.addEventListener('click', function () {
        saveInputs.forEach(input => {
            localStorage.setItem(input.id, input.value);
        });
        alert('Data saved to local storage!');
    });
});
