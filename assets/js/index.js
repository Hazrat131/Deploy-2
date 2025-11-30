document.addEventListener("DOMContentLoaded", () => {

    const authText = document.getElementById("authText");
    const logoutBox = document.getElementById("logoutBox");
    const logoutBtn = document.getElementById("logoutBtn");
    const userBox = document.querySelector(".user-box");
    const logoHome = document.getElementById("logoHome");
    const navShoulder = document.getElementById("navShoulder");
    const catShoulder = document.getElementById("catShoulder");

    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
        authText.textContent = currentUser.username;
    } else {
        authText.textContent = "Sign up";
    }

    userBox.addEventListener("click", () => {
        if (currentUser) {
            logoutBox.style.display = logoutBox.style.display === "block" ? "none" : "block";
        } else {
            window.location.href = "register.html";
        }
    });

    logoutBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        localStorage.removeItem("currentUser");
        window.location.reload();
    });

    logoHome.addEventListener("click", () => {
        window.location.href = "index.html";
    });

    if (navShoulder) {
        navShoulder.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "page2.html";
        });
    }

    if (catShoulder) {
        catShoulder.addEventListener("click", () => {
            window.location.href = "page2.html";
        });
    }
});
