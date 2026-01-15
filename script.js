console.log("Script Running");

// Create a helper function that moves a penguin across the grid
// The function should accept a penguin element and a column position
// Only allow movement while the column is less than or equal to 6
const tux = document.querySelector("#tux");
const daisy = document.querySelector("#daisy");
const rocky = document.querySelector("#rocky");

// Create position variables for each penguin and set them all to 1
function movePenguin(penguin, position) {
    if (position <= 6) {
        penguin.style.gridColumn = position;
    }


// Query selectors for all buttons and penguins go here
function moveTux() {
    tuxPosition++;
    movePenguin(tux, tuxPosition);
    checkWinner();
}


// Write the function that moves Tux forward
// Increase the tux position
// Call the helper function to update the penguin position
// Call the winner check function
function moveDaisy() {
    daisyPosition++;
    movePenguin(daisy, daisyPosition);
    checkWinner();
}

const tuxButton = document.querySelector("#tux-button");
const daisyButton = document.querySelector("#daisy-button");
const rockyButton = document.querySelector("#rocky-button");


// Write the function that moves Daisy forward

function moveDaisy() {
    daisyPosition++;
    movePenguin(daisy, daisyPosition);
    checkWinner();
}

// Write the function that moves Rocky forward
function moveRocky() {
    rockyPosition++;
    movePenguin(rocky, rockyPosition);
    checkWinner();
}


// Write a function that checks if a penguin reached column 6
// If so, display the winner message (example: "Tux got the fish! 🐟")
// Disable all buttons when a winner is found
function disableButtons() {
    tuxButton.disabled = true;
    daisyButton.disabled = true;
    rockyButton.disabled = true;
}


// Add event listeners for each button
// Each button should trigger its own movement function
function checkWinner() {
    if (tuxPosition === 6) {
        alert("Tux got the fish! 🐟");
        disableButtons();
    } else if (daisyPosition === 6) {
        alert("Daisy got the fish! 🐟");
        disableButtons();
    } else if (rockyPosition === 6) {
        alert("Rocky got the fish! 🐟");
        disableButtons();
    }
}