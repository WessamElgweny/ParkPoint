var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')
var signUpArray = []
if (localStorage.getItem('users') === null) {
    signUpArray = []
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'))
}
function isEmpty() {
    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        return true
    } else {
        return false
    }
}
function isEmailExist() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return true
        }
    }
}
function signUp() {
    if (isEmpty()) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return true
    }
    var signUp = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    }
    if (signUpArray.length === 0) {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
        return true
    }
    if (isEmailExist()) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'
        
    } else {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
    }  
}
function isLoginEmpty() {
    if (signinPassword.value == "" || signinEmail.value == "") {
        return true
    } else {
        return false
    }
}
function login() {
    if (isLoginEmpty()) {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return true
    }
    var password = signinPassword.value
    var email = signinEmail.value
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password.toLowerCase() == password.toLowerCase()) {
            localStorage.setItem('username', signUpArray[i].name) 
            location.assign('https://wessamelgweny.github.io/ParkPoint/home.html')
            document.getElementById('incorrect').innerHTML = '<span class="text-success m-3">Success</span>'
            return true
        } else {
            document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
    } 
}
var username = localStorage.getItem('username')
if (username) {
    document.getElementById('username').innerHTML = `Welcome ${username} <br/> in <br/> <span>Park</span>Point`
}
function text(){
    document.getElementById('signupPassword').type ='text'
    document.getElementById("eye").classList.add('d-none')
    document.getElementById("eye-slash").classList.replace('d-none','d-block')
}
function password(){
    document.getElementById('signupPassword').type ='password'
    document.getElementById("eye-slash" ).classList.add('d-none')
    document.getElementById("eye").classList.replace('d-none','d-block')
}
function textin(){
    document.getElementById('signinPassword').type ='text'
    document.getElementById("eye").classList.add('d-none')
    document.getElementById("eye-slash").classList.replace('d-none','d-block')
}
function passwordin(){
    document.getElementById('signinPassword').type ='password'
    document.getElementById("eye-slash" ).classList.add('d-none')
    document.getElementById("eye").classList.replace('d-none','d-block')
}
