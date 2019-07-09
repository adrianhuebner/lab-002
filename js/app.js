//"use strict"

// asking the user for their name prompt
var UserName = prompt('Hi! My name is Adrian! What`s your name?');
alert('Hello ' + UserName + '! It\s nice to meet you! We are going to see how well you know me with a guessing game!');
console.log('Learning the name of ' + UserName + ' who, is going to play a game about me!');

// asking the user if they knew where I grew up
var grewUp = prompt('Do you think that I grew up in the same house that my father grew up in?');

// creating and if/else statement about where I grew up
if (grewUp === 'yes') {
  alert('Yes! I did grow up in the same house as my father!');
} else {
  alert('Actually, I did grow up in the same house that my father grew up in!');
}