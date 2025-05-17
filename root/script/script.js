document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const nameInput = document.getElementById("name");
    const surnameInput = document.getElementById("surname");
    const emailInput = document.getElementById("email");
    const profileImg = document.getElementById("profileImg");
    const uploadImage = document.getElementById("uploadImage");
    const usernameHandle = document.getElementById("usernameHandle");
    
    function loadUserData() {
        const userData = JSON.parse(localStorage.getItem("userData"));
        if (userData) {
            usernameInput.value = userData.username;
            nameInput.value = userData.name;
            surnameInput.value = userData.surname;
            emailInput.value = userData.email;
            profileImg.src = userData.profilePicture || "https://placehold.co/125x125";
            usernameHandle.textContent = userData.username;
        }
    }

    document.getElementById("saveButton").addEventListener("click", function () {
        const userData = {
            username: usernameInput.value,
            name: nameInput.value,
            surname: surnameInput.value,
            email: emailInput.value,
            profilePicture: profileImg.src
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        usernameHandle.textContent = usernameInput.value;
        alert("Saved successfully");
    });

    document.getElementById("deleteButton").addEventListener("click", function () {
        if (confirm("Are you sure you want to delete your account? This action cannot be undone")) {
            localStorage.removeItem("userData");
            alert("Account deleted successfully");
            window.location.reload();
        }
    });

    document.getElementById("logoutButton").addEventListener("click", function () {
        alert("Logged out successfully");
    });

    uploadImage.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profileImg.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    loadUserData();
});

function showTab(tabId) {
    var tabs = document.querySelectorAll('.tab-content');
    var buttons = document.querySelectorAll('.tab-button');
    tabs.forEach((tab) => {
        if (tab.id === tabId) {
            tab.classList.add('active');
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
            tab.classList.remove('active');
        }
    });
    buttons.forEach((button) => {
        button.classList.toggle('active', button.textContent.trim() === tabId.replace('Tab', ''));
    });
}