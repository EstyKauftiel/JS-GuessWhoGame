function signIn(event) {
    event.preventDefault();
    let emailUser = document.getElementById('emailUserUp').value;
    let passwordUser = document.getElementById('passwordUserUp').value;
    let newUser = {
        email: emailUser,
        password: passwordUser,
    }
    let users = localStorage.getItem('users');
    let usersObj = JSON.parse(users);
    if (usersObj == null) {
        usersObj = new Array();
    }
    else if (!pushToUsers(newUser, usersObj)) {
        return;
    }
    usersObj.push(newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    localStorage.setItem('users', JSON.stringify(usersObj));
    window.open("../html/gametime.html","_self");
}

function pushToUsers(newUser, usersObj) {``
    let index = findUser(newUser.email, usersObj);
    if (index != -1) {
        if (ChecksIfUserValid(index, newUser.password, usersObj)) {
            alert("This user is already in the system. log in");
        } else {
            alert("That email is already taken. Please choose another!");
        }
        return false;
    }
    if (findPassword(newUser.password, usersObj)) {
        alert("That password is already taken. Please choose another!");
        return false;
    }
    return true;
}

function findUser(email, usersObj) {
    for (let i = 0; i < usersObj.length; i++) {
        if (usersObj[i].email == email) {
            return i;
        }
    }
    return -1;
}

function findPassword(password, usersObj) {
    for (let i = 0; i < usersObj.length; i++) {
        if (usersObj[i].password == password) {
            return true;
        }
    }
    return false;
}

function ChecksIfUserValid(index, password, usersObj) {
    if (usersObj[index].password == password) {
        return true;
    }
    return false;
}


function logIn(event) {
    event.preventDefault();
    let emailUser = document.getElementById('emailUserIn').value;
    let passwordUser = document.getElementById('passwordUserIn').value;
    let users = localStorage.getItem('users');
    let usersObj = JSON.parse(users);
    if (usersObj == null) {
        alert("This user does not exist in our system. sign in");
        return;
    }
    let index = findUser(emailUser, usersObj);
    if (index == -1) {
        alert("This user does not exist in our system. sign in");
        return;
    }
    if (!ChecksIfUserValid(index, passwordUser, usersObj)) {
        alert("The password you entered is incorrect, please try again.");
        return;
    }
    let curentUser = usersObj[index];
    localStorage.setItem('currentUser', JSON.stringify(curentUser));
    window.open("../html/gametime.html","_self");
}



let signInBtn = document.getElementById("signIn");
let signUpBtn = document.getElementById("signUp");
let fistForm = document.getElementById("form1");
let secondForm = document.getElementById("form2");
let container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});
