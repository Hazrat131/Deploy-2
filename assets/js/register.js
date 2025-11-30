document.addEventListener("DOMContentLoaded", () => {

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let form = document.querySelector("form");

    let name = document.getElementById("name");
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    form.addEventListener("submit", registerUser);

    function registerUser(e) {
        e.preventDefault();

        if (!name.value || !username.value || !email.value || !password.value) {
            return toast("All fields are required!");
        }

        if (password.value.length < 8) {
            return toast("Password must be at least 8 characters!");
        }

        let exist = users.some(
            u => u.username === username.value || u.email === email.value
        );

        if (exist) {
            return toast("User with this email or username already exists!");
        }

        let newUser = {
            id: Date.now(),
            name: name.value,
            username: username.value,
            email: email.value,
            password: password.value
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        localStorage.setItem("currentUser", JSON.stringify(newUser));

        toast("Account created successfully!");

        setTimeout(() => {
            window.location.href = "index.html";
        }, 700);
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
