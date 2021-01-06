  // The message will consist of 3 randomly selected components.
  // A north east football team, a prediction and the year in which it may occur.

  const messageComponents = {
    team: [
      "South Shields ",
      "Sunderland ",
      "Newcastle United ",
      "Hartlepool ",
      "Morpeth Town ",
    ],
    prediction: [
      "will be relegated ",
      "will be promoted ",
      "will go out of business ",
      "will win the FA cup ",
      "will play in europe ",
      "will win FA Vase ",
      "will win FA Trophy ",
    ],
    year: [
      "in 2021.",
      "in 2022.",
      "in 2023.",
      "in 2024.",
      "in 2025.",
      "in 2026.",
      "in 2027.",
      "in 2028.",
      "in 2029.",
      "in 2030.",
    ],
  };

   
  // We'll append the message componentsto a string
  let fullMessage = '';
  
  // For each of team, prediction and year arrays select a random element
  for(let propertyName in messageComponents) {

    // get a random number using the specific size of the property array
    let element = Math.floor(Math.random() * messageComponents[propertyName].length)

    // append the value to the full message
    fullMessage = fullMessage + messageComponents[propertyName][element]
  }
  
  const displayMessage = message => {
    console.log(message);
  }
  
  displayMessage(fullMessage);

  
