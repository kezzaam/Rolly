
// js for dice generator

// expandable instructions section

// Get all collapsible buttons
const coll = document.querySelectorAll(".collapsible");
// Loop through all buttons and add a hover event listener to toggle the content
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("mouseenter", function () {
    this.classList.add("active");
    const content = this.nextElementSibling;
    content.style.maxHeight = content.scrollHeight + "px";
  });
  coll[i].addEventListener("mouseleave", function () {
    this.classList.remove("active");
    const content = this.nextElementSibling;
    content.style.maxHeight = null;
  });
}

// array of phrases
const phrases = [
  "Heads will roll!",
  "It's Only Roll, But I Like It!",
  "Let the good times roll!",
  "On a roll!",
  "Ready to roll!",
  "Doesn't this just roll off the tongue!",
  "Roll over and play dead.",
  "Roll up your sleeves.",
  "Roll with the punches.",
  "Shake Rattle And Roll!",
  "Stop drop and roll",
  "This is how I roll.",
  "Keep on rolling."
]

// generate a random phrase and output it inside the #phrase section
function getPhrase() {
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  document.getElementById("phrase").innerHTML = randomPhrase;
}

// roll dice
function rollDice(numFaces, numDice) {
  // assign element to output dice
  const diceContainer = document.getElementById("dice-container");
  // clear any previous dice
  diceContainer.innerHTML = "";

  // loop through the amount of dice
  for (let i = 0; i < numDice; i++) {
    // create a button element and add class "dice"
    const newDice = document.createElement("button");
    newDice.classList.add("dice");
    // generate random number for each dice within range value of numFaces
    newDice.textContent = Math.floor(Math.random() * numFaces) + 1;
    // add button to the DOM
    diceContainer.appendChild(newDice);
  }

  // run function to get the random phrase
  getPhrase();
}
//change the number of dice when the input is changed
 const diceNumChange = document.getElementById("dice-number");
  diceNumChange.addEventListener("change", function() {
    const numDice = parseInt(document.getElementById("dice-number").value);

    rollDice(6, numDice);
  });

// get the button element and add an event listener for click events
const rollButton = document.getElementById("roll");
rollButton.addEventListener("click", function() {
  // get value for dice faces from 2 to 144
  const numFaces = parseInt(document.getElementById("dice-faces").value);
  // get value for amount of dice from 1 to 10
  const numDice = parseInt(document.getElementById("dice-number").value);
  // call the rollDice function with the arguments
  rollDice(numFaces, numDice);
});

function testRollDice() {
  // Test container
  const testContainer = document.createElement('div');

  // Test case 1: Check that the rollDice function makes one dice 
  rollDice(6, 1);
  // selecting the dice container and all its dice elements
  const diceContainer = document.getElementById('dice-container');
  const diceElements = diceContainer.querySelectorAll('.dice');
  // checking at least one dice has been generated
  if (diceElements.length >= 1) {
    console.log('Test case 1 passed');
  } else {
    console.error('Test case 1 failed');
  }

  // Test case 2: Check that the function generates one of the expected numbers for a six-sided dice
  rollDice(6, 1);
  // converting the text string on the first dice array element to a number type
  const diceValue = Number(diceElements[0].textContent);
  // checking if the number is in the correct range
  if (diceValue >= 1 && diceValue <= 6) {
    console.log('Test case 2 passed');
  } else {
    console.error('Test case 2 failed');
  }

  // Clean up after the test
  diceContainer.innerHTML = '';
}

// Run the test
testRollDice();
