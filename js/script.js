function toggleMenu() {
      const menu = document.getElementById('nav-menu');
      menu.classList.toggle('show');
    }


greet();
function greet() {
    /// Get the username from the prompt
    let username = prompt("Please enter your name:");

    /// Display the username on the webpage
    document.getElementById('username').innerText = username;
        if (username === "") {
            alert("Name must be filled out, refresh the page");

        }
    }

/// Validate the form
function validateForm() {
    /// Get the name input value
    let name = document.getElementById('name-input').value;

    if (name === "") {
        alert("Name must be filled out");
    } else {
        alert("Thank you, " + name + "!");
    }
}