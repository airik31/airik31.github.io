function getUserName () {
let username = prompt("Hello dear visitor, what is your name?");
document.getElementById("username").innerHTML = `<h3>Welcome ${username}! I am happy to see you here browsing my portfolio website, have a nice day!<h3>`
}

getUserName();