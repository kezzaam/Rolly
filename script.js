
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

// roll the dice
function rollDice() {
  // get value for dice faces from 2 to 144
  const numFaces = parseInt(document.getElementById("dice-faces").value);
  // get value for amount of dice from 1 to 10
  const numDice = parseInt(document.getElementById("dice-number").value);
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
  getPhrase()
}