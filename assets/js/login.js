document.addEventListener("DOMContentLoaded", () => {

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const form = document.querySelector("form");
    const emailOrUsername = document.getElementById("email");
    const password = document.getElementById("password");

    form.addEventListener("submit", loginUser);

    function loginUser(e) {
        e.preventDefault();

        if (!emailOrUsername.value || !password.value) {
            return toast("All fields are required!");
        }

        const user = users.find(u =>
            (u.email === emailOrUsername.value || u.username === emailOrUsername.value) &&
            u.password === password.value
        );

        if (!user) {
            return toast("Incorrect email/username or password!");
        }

        localStorage.setItem("currentUser", JSON.stringify(user));

        toast("Login successful!");

        setTimeout(() => {
            window.location.href = "index.html";
        }, 800);
    }

    function toast(text) {
        Toastify({
            text,
            duration: 3000,
            position: "right",
            backgroundColor: "linear-gradient(to right, #ff5f4d, #ff9c80)"
        }).showToast();
    }

});

