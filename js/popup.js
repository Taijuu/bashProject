//resgister

const createAccont = document.querySelector(".link")
const question = document.querySelector(".question")
const accountToDo = document.querySelector(".accountToDo")

createAccont.addEventListener("click", () => {
    if (accountToDo.innerHTML == "Login") {
        accountToDo.innerHTML = "Register"
        question.innerHTML = "Already have an account?"
        createAccont.innerHTML = "Login"
    } else {
        accountToDo.innerHTML = "Login"
        question.innerHTML = "Don't have an account?"
        createAccont.innerHTML = "create one"
    }
})

//submit

const submit = document.querySelector(".btn")
const user = document.querySelector(".user")
const password = document.querySelector(".password")

submit.addEventListener("click", () => {
    user.value = ''
    password.value = ''
})