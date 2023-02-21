// js for dice generator


function rollDice() {
    // Get the input elements
    let facesInput = document.getElementById("dice-faces");
    let numDiceInput = document.getElementById("dice-number");
  
    // Get the selected numbers from the input elements
    let faces = facesInput.value;
    let numDice = numDiceInput.value;
  
    // Roll the dice and display the results
    let results = [];
    for (let i = 0; i < numDice; i++) {
      let randomNumber = Math.floor(Math.random() * faces) + 1;
      results += randomNumber;
    }
    document.getElementById(#results).innerHTML(results);
  }