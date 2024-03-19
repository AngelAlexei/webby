window.alert("This is an alert message!");

if (window.confirm("Are you sure you want to proceed?")) {
    // User clicked OK
} else {
    // User clicked Cancel
}

var userInput = window.prompt("Please enter your name:", "John Doe");
if (userInput !== null) {
    // User entered a value
    console.log("User entered: " + userInput);
} else {
    // User clicked Cancel
    console.log("User clicked Cancel");
}

