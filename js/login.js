const wrapper = document.querySelector(".wrapper"),
    signupHeader = document.querySelector(".signup header"),
    loginHeader = document.querySelector(".login header"),
    submit = document.querySelector(".submit"),
    user = document.querySelector(".user"),
    password = document.querySelector(".password"),
    fail = document.querySelector(".error"),
    login = {
        user: 'a',
        password: 'a'
    };

loginHeader.addEventListener("click", () => {
    wrapper.classList.add("active");
});
signupHeader.addEventListener("click", () => {
    wrapper.classList.remove("active");
});

submit.addEventListener("click", () => {
    if (user.value == login.user && password.value == login.password) {
        fail.innerHTML = ''
        document.getElementById("forms").action = "mainPage.html"
    } else if (user.value != login.user && password.value != login.password) {
        fail.innerHTML = "user and password incorrect"
        user.value = ''
        password.value = ''
    } else if (user.value != login.user) {
        fail.innerHTML = "user incorrect"
        user.value = ''
    } else if (password.value != login.password) {
        fail.innerHTML = "password incorrect"
        password.value = ''
    }
})