function greet() {
    let username = prompt("Please enter your name:");
    document.getElementById("username").innerText = username;
}
function validateForm() {
    let name = document.getElementById("name-input").value;
    if (name === "") {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}