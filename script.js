let word = "dragon"; 
let number = 5; 
let calculatedNumber = number * 2; 
let isTrue = true; 
let userInput = prompt("Enter a name:"); 

let story = "Once upon a time, there was a " + word + " named " + userInput + ". ";
story += "This " + word + " had " + calculatedNumber + " shiny scales. ";
story += "It is " + isTrue + " that the dragon loved to eat 5 cakes every day.";

console.log(story);