//selections
let headerMessage = document.getElementById("header-text")
let preLoginDiv = document.getElementById("before-login-content")
let postLoginDiv = document.getElementById("after-login-content")
let errorMessage = document.getElementById("error-message")
let loginBTN = document.getElementById("login")
let logoutBTN = document.getElementById("logout")
let nameInput = document.getElementById("name")
let passInput = document.getElementById("pass")
let userInfo = document.getElementById("user-info")
let testName = "janne"
let testPass = "test"


function displayLoggedInUser() {
    let loginData = JSON.parse(localStorage.getItem("userInfo"))
    if (loginData != null) {
        preLoginDiv.style.display = "none";
        postLoginDiv.style.display = "block"

        headerMessage.innerText = "Welcome, " + loginData.name
        userInfo.innerText = "Your Name is " + loginData.name + " and your Password is " + loginData.pass
    }
}

displayLoggedInUser()

//event listener
loginBTN.addEventListener("click", function () {
    if (nameInput.value == testName) {
        if (passInput.value == testPass) {
            //successfully logged in 

            errorMessage.innerText = "";

            localStorage.setItem("userInfo", JSON.stringify({
                name: nameInput.value,
                pass: passInput.value
            }))

            displayLoggedInUser()
        }
        else {
            errorMessage.innerText = "Please Enter Correct Password"
        }
    }
    else {
        errorMessage.innerText = "Please Enter Correct Name"
    }
})

logoutBTN.addEventListener("click", function () {
    localStorage.removeItem('userInfo')

    postLoginDiv.style.display = "none"
    preLoginDiv.style.display = "flex"

    headerMessage.innerText = "Please Log In"
})

