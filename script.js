// Example of variables and conditionals
let userAge = prompt("Enter your age:");
let output = document.getElementById("user-output");

document.getElementById("check-age-btn").addEventListener("click", function() {
    if(userAge >= 18) {
        output.textContent = "You are an adult.";
    } else if(userAge > 0) {
        output.textContent = "You are a minor.";
    } else {
        output.textContent = "Invalid age entered.";
    }
});

// Custom function to sum two numbers
function sumNumbers(a, b) {
    return a + b;
}

// Another function to format a string
function greet(name) {
    return `Hello, ${name}! Welcome to JS practice.`;
}

document.getElementById("sum-btn").addEventListener("click", function() {
    let result = sumNumbers(5, 10); // Example numbers
    document.getElementById("sum-output").textContent = `Sum of 5 and 10 is: ${result}`;
});



// Loop through an array
let fruits = ["Apple", "Banana", "Cherry", "Date"];
let loopList = document.getElementById("loop-list");

fruits.forEach(function(fruit) {
    let li = document.createElement("li");
    li.textContent = fruit;
    loopList.appendChild(li);
});

// Countdown using a for loop
document.getElementById("countdown-btn").addEventListener("click", function() {
    let countdownOutput = document.getElementById("countdown-output");
    countdownOutput.textContent = "Countdown: ";
    for(let i = 5; i >= 0; i--) {
        countdownOutput.textContent += i + " ";
    }
});


//DOM Manipulation

let domOutput = document.getElementById("dom-output");
document.getElementById("change-text-btn").addEventListener("click", function() {
    domOutput.textContent = "Text has been changed!";
});

document.getElementById("toggle-color-btn").addEventListener("click", function() {
    domOutput.style.color = domOutput.style.color === "red" ? "black" : "red";
});

document.getElementById("add-item-btn").addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.textContent = "New list item";
    document.getElementById("dom-list").appendChild(newItem);
});
