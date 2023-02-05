//resgister

const createAccount = document.querySelector(".link")
const question = document.querySelector(".question")
const accountToDo = document.querySelector(".accountToDo")

createAccount.addEventListener("click", () => {
    if (accountToDo.innerHTML == "Login") {
        accountToDo.innerHTML = "Register"
        question.innerHTML = "Already have an account?"
        createAccount.innerHTML = "Login"
    } else {
        accountToDo.innerHTML = "Login"
        question.innerHTML = "Don't have an account?"
        createAccount.innerHTML = "create one"
    }
})

//submit

const submit = document.querySelector(".btn")
const user = document.querySelector(".user")
const password = document.querySelector(".password")

const login = {
    user: '1',
    password: '1'
}

submit.addEventListener("click", () => {
    if (user.value == login.user && password.value == login.password) {
        window.location.replace("mainPage.html")
    }

    user.value = ''
    password.value = ''
})